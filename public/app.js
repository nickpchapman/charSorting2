const submitButton = document.getElementById('submit-button');
const string = document.getElementById('string-input');

submitButton.addEventListener('click', function() {
  getSortedString(string.value);
  string.value = '';
});

const getSortedString = function(str) {
  console.log(str);

  let sorted = fetchStr(str)

  updateTable(sorted);

};

