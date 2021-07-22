class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

//TODO: 1
const fetchingUserFromInternet = () => {
  return new Promise((callback, isOffline) => {
    setTimeout(() => {
      if (isOffline) {
        callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
      }
      callback(null, { name: 'John', age: 18});
    }, 500);
  });
}

//TODO: 2
const gettingUserName = async () => {
  try {
    const user = await fetchingUserFromInternet(true);
    console.log(user);
  } catch (error) {
    
  }
}

gettingUserName();