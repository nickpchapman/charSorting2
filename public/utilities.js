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

const updateTable = (sortedStr, str) => {
  const table = document.getElementById('table-main');
  const row = table.insertRow(1);
  const strCell = row.insertCell(0);
  const sortedStrCell = row.insertCell(1);

  strCell.innerHTML = str;
  sortedStrCell.innerHTML = sortedStr;
}

