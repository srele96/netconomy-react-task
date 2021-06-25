import { forwardRef } from 'react';
import Message from './Message';
import styles from './Messages.module.css';

const Messages = forwardRef(({messages}, scrollDownRef) => (
    <div ref={scrollDownRef} className={styles.messages}>
      {
        messages
        .map(({content, time, type}, index) => (
          <Message key={index} content={content} time={time} type={type}/>
        ))
      }
    </div>
  )
)

export default Messages;