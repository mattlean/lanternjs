# Lantern.js
*Version 0.2.2*

A simple-to-use, lightweight, and customizable image lightbox.

# Download
Choose one of the following options:

1. You can download an archived file from the [GitHub repository's releases page](https://github.com/IsaacLean/lanternjs/releases).

2. You can download from npm with this command: `npm install lanternjs`

3. You can download from Bower with this command: `bower install lanternjs`

# Why Use Lantern.js?
There are a lot of other great lightbox solutions out there, but Lantern.js has some benefits over many of them:

1. Lantern.js is extremely lightweight and doesn't require imports of external JavaScript libraries (ex. jQuery) unlike many other lightbox solutions because it is written purely in native JavaScript.
2. Many lightbox solutions require statically placed lightbox HTML which may lead to unused HTML in some cases. Lantern.js eliminates this problem by appending lightbox HTML to the DOM dynamically.
3. If the user is not browsing with JavaScript on, the image links will directly link to the full images instead, making the images still viewable.
4. Because of the code's simplicity, it is easy to go through the source and customize it, making it a flexible lightbox solution as well as a great learning resource.

# Getting Started
## 1. Setup the Code
There are two versions of the JavaScript.

The development version can be found as: ```src/lantern.js```

The production version (which trades readability for smaller file size) can be found as: ```src/lantern.min.js```

All you need to do load this script somewhere within your HTML document.

For styling you can use the *Minimal* style, although it's recommended for you to create your own custom style to fit your page's style.

The development version can be found as: ```src/lantern-minimal.scss```

The production version can be found as: ```src/lantern-minimal.min.css```

Just like the JavaScript, all you need to do is load the CSS somewhere within your HTML document.

## 2. Create a Lantern Object
In your own JavaScript, create a new Lantern object:

```javascript
var lantern = new Lantern();
```

## 3. Setup the Images
Finally you need to select the images you want to display in the lightbox. Chances are your basic formatting for the images already look something like this:

```html
<a href="full_img.jpg"><img src="thumbnail_img.jpg" alt="Image Description"></a>
```

All your need to do is add the Lantern data attribute to the links like so...

```html
<a href="full_img.jpg" data-lantern><img src="thumbnail_img.jpg" alt="Image Description"></a>
```

...and you're done!

# Working with the Source
The following is used to maintain the codebase:
* [npm](https://npmjs.com) and [Bower](http://bower.io) for package management
* [Grunt](http://gruntjs.com) for compiling [SASS](http://sass-lang.com), linting JavaScript with [JSHint](https://github.com/gruntjs/grunt-contrib-jshint), and building production versions of the script with [UglifyJS](https://github.com/gruntjs/grunt-contrib-uglify)
* [normalize.css](https://necolas.github.io/normalize.css) for CSS rendering consistency between browsers when testing

## Grunt Tasks
### Default
Command: ```grunt```

Activates ```grunt watch``` which compiles SASS and lints with JSHint when it detects changes in ```src/lantern-minimal.scss``` and ```src/lantern.js```.

### Build
Command: ```grunt build```

Uses SASS and UglifyJS to build the minified versions of the CSS and JavaScript for production. Places built files in ```dist/```.

# Future Features
* Automatic mode
* Lightbox customization
* Image groups & lightbox navigation
* Lightbox gallery

*Special thanks to [Pexels](http://pexels.com/) for the free, awesome stock photos used in testing. :)*
