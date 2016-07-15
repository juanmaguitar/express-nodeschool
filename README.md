#Forms w/ Express (4/8)

Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

Write a route (`/form`) that processes HTML form input
(`<form><input name="str"/></form>`) and prints the value of str backwards.

To handle a POST request, use the post() method which is used the same way as get():

    app.post('/path', function(req, res){...})

Express.js uses **middleware** to provide extra functionality to your web server.

Simply put, _a middleware is a function invoked by Express.js before your own
request handler._

Middleware provide a large variety of functionality such as logging, serving
static files, and error handling.

A middleware is added by calling `use()` on the application and passing the
middleware as a parameter.

To parse `x-www-form-urlencoded` request bodies, Express.js can use `urlencoded()`  middleware from the `body-parser` module.

    var bodyparser = require('body-parser')
    app.use(bodyparser.urlencoded({extended: false}))

## More Info

Read more about Connect middleware here:

  [https://github.com/senchalabs/connect#middleware](https://github.com/senchalabs/connect#middleware)

The documentation of the body-parser module can be found here:

  [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)

Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).

