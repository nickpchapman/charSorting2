const fetchStr = (unsortedStr, callback) => {
  const url = 'http://localhost:8080/sort';
  const data = {str: unsortedStr};

  axios.post(url, data)
  .then(function (response) {
    callback(null, response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const updateTable = (sortedStr) => {
  console.log('table updated', sortedStr)
}

