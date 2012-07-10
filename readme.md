# H5BP on Crack

JS Frameworks for single page apps like Backbone and Ember.js are all the rage right now and they are awesome... for single page apps.

But what if you are in charge of the frontend of a classic multi-page website that needs some awesome css and a bunch of jquery plugins and you want to have your basic setup neatly organized, easy to maintain, easily optimized for production and an architecture for the plugins to talk with eachother out of the box?

That's where H5BP on Crack comes in. It gives you a really good starting point to be productive right away. IF you like to work with the same tools as I do.

## All The Things:

* HTML5 Boilerplate
* Works with Grunt.js and SASS/COMPASS out of the box
* A pre-configured gruntfile with tasks for development and for production for both CSS and JavaScript
* grunt-compass
* Basic H5BP CSS organized into SCSS partials
* Plugins use Addy Osmani's basic plugin pattern
* A better directory structure for your JavaScript libs and plugins
* PubSub.js
* JavaScript templating with Handlebars
* Store.js
* Testing with QUnit

## Dependencies

* Node.js
* Grunt.js
* SASS
* COMPASS
* Phantom.js

## How To Use H5BP On Crack

Check out the project

```bash
git clone https://github.com/kahlil/h5bponcrack.git
```

Move into the project folder and fetch your dependencies

```bash
cd h5bponcrack
npm install
sudo npm install grunt-compass
```

Start grunt

```bash
grunt
```

Hack away.

## Static Webserver

h5bpoc comes with a built-in static webserver.
Just move to the project folder and run

```bash
node server.js
```

This will open a webserver on port 8080.
Just go to 'http://localost:8080' in your browser.

You can specify a different port, by adding it as an argument to your server call

```bash
node server.js 8040
```

## License
H5BP on Crack is released under the MIT license.

