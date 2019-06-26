const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // server.get('/show/:id', (req, res) => {
    //   return app.render(req, res, '/show', {
    //     ...req.params,
    //     ...req.query
    //   });
    // });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
    });
  })
  .catch(err => console.log(err));
