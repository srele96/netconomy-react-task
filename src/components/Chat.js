import { useEffect, useState, useReducer, useRef } from 'react';
import { fetchChatData } from '../modules/fetchChatData';
import ChatLeftSide from './ChatLeftSide';
import ChatRightSide from './ChatRightSide';
import ErrorLoadingChatData from './ErrorLoadingChatData';
import styles from './Chat.module.css';
import produce from 'immer';

const reducer = (state, action) => {
  switch(action.type) {
    case 'setData': 
      state = action.payload.data;

      // It's required to sort messages only first time data is initialized,
      // later ones will be added at the end - be sorted.
      const initialStateWithSortedMessages = produce(state, (draftState) => {
        // State is an array, sort messages for conversation with each person.
        draftState.forEach((person) => {
          person.messages.sort((a, b) => a.time - b.time);
        })
      })

      return initialStateWithSortedMessages;
    case 'addMessage':
      const index = action.payload.index;

      // Immer helps to immutably change the state
      // required to trigger state update and re-render
      const nextState = produce(state, (draftState) => {
        draftState[index].messages.push(action.payload.data)
      })

      return nextState;
    default:
      throw new Error('Non-Supported reducer action type!');
  }
}

const Chat = () => {
  const initialChatData = [];
  // all json data is stored in chatData
  // chatData is array of objects shaped like:
  // [
  //   {
  //     name: string,
  //     status: string,
  //     picture_data: {
  //       src: string,
  //       alt: string
  //     },
  //     messages: [
  //       {
  //         time: number (epoch timestamp),
  //         content: string,
  //         type: string,
  //       }, ...
  //     ]
  //   }, ...
  // ]
  const [chatData, dispatch] = useReducer(reducer, initialChatData);
  // track if error occured while loading data
  const [error, setError] = useState(null);
  // track which chat window is currently opened for purpose of
  // adding new messages to it aswell as displaying it
  const [chatWindowIndexOpen, setChatWindowIndexOpen] = useState(null);
  // enable scrolling down to last sent message
  const scrollDownRef = useRef();

  // reseting state if error on loading json data occurs
  const resetState = () => {
    fetchChatData()
      .then((data) => {
        dispatch({type: 'setData', payload: { data }});
      })
      .catch((error) => {
        setError(error);
      });
    
    setError(null);
  }

  // This solution isn't ideal because of the stutter it gives on scrolling.
  // However for the purpose of this project i believe this is satisfactory
  const scrollToBottom = () => {
    // Do two attempts to scroll to last message.
    var scrollInterval = setInterval(function() {
      // Calling line 79 after adding message doesn't fully scroll to bottom.
      // However, calling line 79 twice after adding message does work.
      scrollDownRef.current.scrollTop = scrollDownRef.current.scrollHeight;
    }, 50);

    // Stop scrolling down after two attempts.
    setTimeout(() => {
      clearInterval(scrollInterval);
    }, 101)
  }

  // Adds new message to chatData state.
  const addMessage = (content) => {
    const message = {
      time: Date.now(),
      content,
      type: 'sent'
    };
    
    dispatch({
      type: 'addMessage', 
      payload: { 
        index: chatWindowIndexOpen, 
        data: message,
      },
    });

    scrollToBottom();
  }

  // Opens messages from selected chat window.
  const openChatWindow = (index) => {
    setChatWindowIndexOpen(index);

    scrollToBottom();
  }

  // Loads json data to component state when component mounts.
  useEffect(() => {
    // Prevent memory leaks.
    let isMounted = true;

    fetchChatData()
      .then((data) => {
        if (isMounted) dispatch({type: 'setData', payload: { data }});
      })
      .catch((error) => {
        if (isMounted) setError(error);
      });

    return () => isMounted = false;
  // Load json data only once after page load.
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        {error ?
          // On error, allow user to attempt refreshing data.
          <ErrorLoadingChatData resetState={resetState} />
        :
          <div className={styles.chatWindowDataLoaded}>
            {/* All good, render people to chat and conversations. */}
            <ChatLeftSide
              chatData={chatData}
              openChatWindow={openChatWindow}
              chatWindowIndexOpen={chatWindowIndexOpen}
            />
            <ChatRightSide 
              chatWindowIndexOpen={chatWindowIndexOpen}
              ref={scrollDownRef}
              chatData={chatData}
              addMessage={addMessage}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Chat;