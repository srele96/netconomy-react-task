import Person from './Person';
import styles from './ChatLeftSide.module.css'

const ChatLeftSide = ({chatData, openChatWindow, chatWindowIndexOpen}) => (
  <div className={styles.chatWindowLeft}>
    {/* people available for chat*/}
    {chatData.map(({name, status, picture_data}, index) => (
      <Person
        key={index}
        name={name}
        status={status}
        picture_data={picture_data}
        index={index}
        openChatWindow={openChatWindow}
        isOpen={chatWindowIndexOpen === index}
      />
    ))}
  </div>
)

export default ChatLeftSide;