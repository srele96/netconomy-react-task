// json file must be in public directory because webpack won't compile it
// alongside other react code
// which means accessing ./assets/json/conversation.json won't be found
// during app runtime

/**
 * Fetches chat data from conversation.json located in public folder.
 * 
 * @returns {Promise} conversation.json data
 */
const fetchChatData = () => {
  return new Promise((resolve, reject) => {
    fetch('./assets/json/conversation.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((res) => {
        if(res.ok) {
          resolve(res.json())
        } else {
          reject(`Data couldn't be loaded`);
        }
      })
      .catch(reject);
  });
}

export { fetchChatData }