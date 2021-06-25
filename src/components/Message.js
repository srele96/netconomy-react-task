import { getTimestamp } from '../modules/getTimestamp';
import styles from './Message.module.css';

const Message = ({time, content, type}) => (
  <div className={styles.messageWrapper}>
    <div className={
      `${type==='received' ? styles.received : styles.sent} ${styles.message}`
    }>
      <div>{content}</div>
      <div className={styles.timestamp}>{getTimestamp(time)}</div>
    </div>
  </div>
)

export default Message;