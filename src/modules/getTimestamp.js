/**
 * Pass timestamp and get formatted time.
 * 
 * @param {*} epochTimestamp 
 * @returns {String} formatted as HH:MM (AM | PM)
 */
const getTimestamp = (epochTimestamp) => {
  const date = new Date(epochTimestamp);

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  
  return strTime;
}

export { getTimestamp }