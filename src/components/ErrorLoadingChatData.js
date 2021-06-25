import styles from './ErrorLoadingChatData.module.css';

const ErrorLoadingChatData = ({resetState}) => (
  <div className={styles.centerContent}>
    <div className={styles.highlightText}>
      <h2>Could not load chat data...</h2>
      <button className={styles.refreshButton} onClick={resetState}>Refresh</button>
    </div>
  </div> 
)

export default ErrorLoadingChatData;