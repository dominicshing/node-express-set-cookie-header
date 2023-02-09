const express = require('express');

const PORT = 5000;

const app = express();

// Home page route
app.get('/', (req, res) => {
  res.status(200).send('Homepage');
});

/*********** Set Cookies by Response's setHeader() Method ***********/

// [No Cookie Contriansts]

// 1. Set one cookie
app.get('/cookies/set-one', (req, res) => {
  // second argument will be string
  res.setHeader('Set-Cookie', 'title=Hello123');

  res.status(201).json('One cookie set');
});

// 2. Set multiple cookies
app.get('/cookies/set-multiple', (req, res) => {
  // second argument will be array
  res.setHeader('Set-Cookie', ['pid=23', 'title=Hello123']);

  res.status(201).json('Multiple cookies set');
});

//-----------------------------------------------------------------

// [With Cookie Contriansts]

// 1. Set one cookie with contriansts
app.get('/cookies/set-one-with-contraints', (req, res) => {
  // set constrainsts by adding ; after cookie name value pair (e.g. pid=23;Secure;httpOnly; )
  res.setHeader('Set-Cookie', 'pid=23;httpOnly;Secure');

  res.status(201).json('One cookie with cookie constrainsts set');
});

// 2. Set multiple cookies with contriansts
app.get('/cookies/set-multiple-with-contraints', (req, res) => {
  // set constrainsts by adding ; after cookie name value pair (e.g. pid=23;Secure;httpOnly; )
  res.setHeader('Set-Cookie', [
    'pid=23;httpOnly;Secure',
    'title=Hello123;httpOnly;Secure',
  ]);

  res.status(201).json('Multiple cookies with cookie constrainsts set');
});

/**********************************************************************/

// Server listen
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
