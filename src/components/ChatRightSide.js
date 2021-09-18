import { useEffect, useRef } from 'react';
import Messages from './Messages';
import TextInput from './TextInput';
import styles from './ChatRightSide.module.css';

const ChatRightSide = ({chatWindowIndexOpen, chatData, addMessage}) => {
  const messagesRef = useRef();

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  });

  return (
    <div className={styles.chatWindowRight}>
      <img
        className={styles.chatWindowBackground}
        src="./assets/images/back.png"
        alt="Chat window background"
      />
      {// Render message or conversation.
      chatWindowIndexOpen === null ? 
        <div className={styles.centerContent}>
          <h3 className={styles.highlightText}>
            Please select chat to start conversation.
          </h3>
        </div>
      :
        <>
          <Messages
            // used for scrolling to last message
            ref={messagesRef}
            messages={chatData[chatWindowIndexOpen].messages}  
          />
          <TextInput addMessage={addMessage}/>
        </>
      }
    </div>
  )
};

export default ChatRightSide;