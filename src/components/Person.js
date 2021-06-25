import styles from './Person.module.css';

const Person = ({
  name, 
  status, 
  picture_data, 
  openChatWindow, 
  index,
  isOpen
}) => (
  <button
    className={`${styles.person} ${isOpen ? styles.open : ''}`} 
    onClick={() => openChatWindow(index)}
  >
    <span className={styles.avatarWrapper}>
      {/*
        Folder json has src which implied to me that it's going to be used for
        loading of images from src attribute.

        Making it possible easily is from public folder and passing
        picture_data.src to respective attribute.

        Other way was storing images in src folder and importing them as modules
        which allows webpack optimization of given images.

        However, since we're fetching data from .json file too, it's best to
        store data and images in public folder grouped at on same place.
      */}
      <img
        className={styles.avatar}
        src={picture_data.src}
        alt={picture_data.src}
      />
    </span>
    <span className={styles.nameStatusWrapper}>
      <span className={styles.name}><b>{name}</b></span>
      <span className={styles.status}><i>{status}</i></span>
    </span>
  </button>
)

export default Person;