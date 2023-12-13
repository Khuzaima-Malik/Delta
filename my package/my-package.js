const figlet = require('figlet')

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

console.log('____________________________________________________________')

console.log('this is very important lecture')

const express = require('express')

const app = express()

port = 8080

console.log('this is used to request a server')
app.listen(port,() => {
  console.log(`app is listening on port ${port}` )
})

