/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promise = new Promise((resolve, reject) => {

    fs.readFile(filePath, (err, results) => {
      if (err) {
        reject(err);
      } else {
        var arr = results.toString().replace(/\r\n/g, '\n').split('\n');
        resolve(arr[0]);
      }
    });

  });

  return promise;
};


var writeFileAsync = function(writeFilePath, data) {

  var promise = new Promise((resolve, reject) => {

    fs.writeFile(writeFilePath, data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });

  });

  return promise;
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var promise = new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });

  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync,
  writeFileAsync: writeFileAsync
};
