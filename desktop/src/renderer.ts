// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process
//ONLY if you set FuseBox.isServer to true.
//Is there a better way to check for this?
FuseBox.isServer = true;

//These two doesn't work, this might be due to fusebox and something frontend related
// import fs from 'fs';
// import * as fs from 'fs'

//Use require instead in order for Node API to work
const fs = require('fs');
console.log("Let's log fs to know Node is avaliable", fs);

if(fs.readFileSync)
{
  console.log('Sucess! - readFileSync function exists! Go ahead and start coding!');
}
else
{
  console.error('fs.readFileSync sync is not avaliable');
}
