// Instructions:

// [ ] Implement a node app called fetcher.js.
// [ ] It should take two command line arguments:
// --- [X] a URL
// --- [X] a local file path
// [ ] It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// CL example:

  // > node fetcher.js http://www.example.edu/ ./index.html
  // Downloaded and saved 3261 bytes to ./index.html

// There are two operations in this problem which will take an unknown amount of time:
// --- 01. You need to make an http request and wait for the response.
// --- 02. After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

// When you're trying to control the order of asynchronous operations, use nested callbacks.

// Tips:
// --- [X] Install and use the request library to make the HTTP request 
// --- [X] Use Node's fs (file system) module to write the file
// --- [X] Use the callback based approach we've been learning so far
// --- [X] Do not use the pipe function
// --- [X] Do not use synchronous functions (see warning above)

// Additional planning notes:
// --- [X] Use process.argv for terminal commands to capture the URL and file path
// --- [X] Use slice on the above for the file path

const request = require('request');
const fs = require('fs');

let commandLineInfo = process.argv
commandLineInfo = commandLineInfo.slice(2);

request(commandLineInfo[0], function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(commandLineInfo[1], body, err => {
    if (err) throw err;
    console.log('Woohoo, complete!!');
  })
});