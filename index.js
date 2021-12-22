const express = require('express');

const app = express();

const users = [
  'elise123',
  'zak456',
  'mckenzie789'
]

app.get('/music', (req, res)=> {
  res.send('<h1>I like music</h1>')
});

app.get('/users', (req, res) => {
  res.send(users);
});

/**
 * I want to make an endpoint that tells me if a given user
 * is in the user array.
 */ 
app.get('/users/:username', (req, res) => {
  const { username } = req.params;

  if (users.includes(username)) { // if we have this user
    // we want to respond with "that user exists"
    res.send('That user exists');
  } else {
    // we want to respond with "that user doesnt exist"
    res.send('That user does not exist')
  }
})

app.get('/find/user', (req, res) => {
  const { name } = req.query;
  if (name) {
    if (users.includes(name)) { // if we have this user
      // we want to respond with "that user exists"
      res.send('That user exists');
    } else {
      // we want to respond with "that user doesnt exist"
      res.send('That user does not exist')
    }
  } else {
    res.status(200).send(users)
  }
})

// www.site.com?a=something&b=something+else
// TRANSLATES TO
// { a: 'something', b: 'something else' }

/**
 * 
 */

app.listen(5050, () => {
  console.log('Your server has started on port 5050');
});

/**
 * POST - Create
 * GET - Read
 * PUT - Updating
 * DELETE - Deleting
 */

//  https://www.google.com/search?q=boreal+forest&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK_K3Xxvb0AhUjNX0KHX1MA0MQ_AUoAXoECAEQAw&biw=1680&bih=971&dpr=2

