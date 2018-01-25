document.getElementById('submit-button')
  .addEventListener('click', () => {
    const string = document.getElementById('string-input');
    getSortedString(string.value);
    string.value = '';
  });

const getSortedString = (str) => {
  fetchStr(str, (err, sortedStr) => {
    if (err) console.log(err);
    updateTable(sortedStr, str);
  })
};

