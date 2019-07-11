var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1d2L2A78DcDrqHBa758q41K_BcvoaT-jbRMu9rUly8a4');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
   console.log(rows[16]._cpzh4);
   //document.write(rows[16]._cpzh4);
  });
});