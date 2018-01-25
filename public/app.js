const submitButton = document.getElementById('submit-button');
const string = document.getElementById('string-input');

submitButton.addEventListener('click', () => {
  getSortedString(string.value);
  string.value = '';
});

const getSortedString = (str) => {
  fetchStr(str, (err, sortedStr) => {
    if (err) console.log(err);
    updateTable(sortedStr);
  })
};

