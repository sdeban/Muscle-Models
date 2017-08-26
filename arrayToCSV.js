function arrayToCSV(twoDiArray) {
  //  Modified from: http://stackoverflow.com/questions/17836273/
  //  export-javascript-data-to-csv-file-without-server-interaction
  var csvRows = [];
  for (var i = 0; i < twoDiArray.length; ++i) {
    for (var j = 0; j < twoDiArray[i].length; ++j) {
      twoDiArray[i][j] = '\"' + twoDiArray[i][j] + '\"'; // Handle elements that contain commas
    }
    csvRows.push(twoDiArray[i].join(','));
  }
  var csvString = csvRows.join('\r\n');
  var a = document.createElement('a');
  a.href = 'data:attachment/csv,' + csvString;
  a.target = '_blank';
  a.download = 'myFile.csv';
  document.body.appendChild(a);
  a.click();
  // Optional: Remove <a> from <body> after done
}
