import { useState } from 'react';
import styles from './TextInput.module.css';

const TextInput = ({addMessage}) => {
  const [messageContent, setMessageContent] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    // dont submit totaly empty message
    if(messageContent !== '') {
      addMessage(messageContent);
      setMessageContent('');
    }
  }

  return (
    <div className={styles.textInputWrapper}>
      <form className={styles.textInputForm} onSubmit={sendMessage}>
        <input
          className={styles.textField}
          type="text" 
          value={messageContent} 
          onChange={(e) => setMessageContent(e.target.value)} />
        <input className={styles.sendMessage} type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default TextInput;