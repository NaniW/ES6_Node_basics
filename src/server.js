/*
  In the past, we have used

    const express = require('express');
    const app = express();

  to include and initialize express.

  The newer ES6 syntax is:

    import express from 'express';

  Remember, we have to use Babel to run this code, so we will also be introduced to Webpack in this lesson.
*/

import express from 'express';
import path from 'path';

const app = express();
app.use(express.static('src/public'));


/*
  Below is our usual GET / method in Express, but we will be using the new ES6 fat arrow function syntax in the callback.

  (Remember, the callback is a function that is run when a method is completed.)

  Previous function syntax:

  function someFunction(arg){
    return 1;
  }

  Fat arrow function syntax:

  (arg) => { return 1 };

  These functions are equivalent, but one is much cleaner looking and especially easy to fit in a callback.
*/
app.get('/',(req,res)=>{
  res.sendFile('index.html');
});

/*
  Once again, we use fat arrow syntax below for a nice, clean, one liner.
*/

app.listen(3000, () => console.log('Listening on port 3000!'));
