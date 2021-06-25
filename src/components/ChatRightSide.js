import { forwardRef } from 'react';
import Messages from './Messages';
import TextInput from './TextInput';
import styles from './ChatRightSide.module.css';

const ChatRightSide = forwardRef(({
  chatWindowIndexOpen, 
  chatData, 
  addMessage
}, scrollDownRef) => (
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
          ref={scrollDownRef}
          messages={chatData[chatWindowIndexOpen].messages}  
        />
        <TextInput addMessage={addMessage}/>
      </>
    }
  </div>
));

export default ChatRightSide;