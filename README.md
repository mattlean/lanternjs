# Lantern.js
*Version 0.1.1*

A simple-to-use, lightweight, and customizable image lightbox.

# Download
You can download the script and source as a ZIP file from here:

[https://github.com/IsaacLean/lanternjs](https://github.com/IsaacLean/lanternjs)

Or you can download from Bower with this command:

```bower install lanternjs```

# Why Use Lantern.js?
There are a lot of other great lightbox solutions out there, but Lantern.js has some benefits over many of them:

1. Lantern.js is extremely lightweight and doesn't require imports of external JavaScript libraries (ex. jQuery) unlike many other lightbox solutions because it is written purely in native JavaScript.
2. Many lightbox solutions require statically placed lightbox HTML which may lead to unused HTML in some cases. Lantern.js eliminates this problem by appending lightbox HTML to the DOM dynamically.
3. If the user is not browsing with JavaScript on, the image links will directly link to the full images instead, making the images still viewable.
4. Because of the code's simplicity, it is easy to go through the source and customize it, making it a flexible lightbox solution as well as a great learning resource.

# Getting Started
## 1. Setup the Script
There are two versions of the script.

The development version can be found as: ```src/lantern.js```

The production version (which trades readability for smaller file size) can be found as: ```src/lantern.min.js```

All you need to do is place this script somewhere on load it within your HTML document.

##2. Create a Lantern Object
In your own JavaScript, create a new Lantern object:

```javascript
var lantern = new Lantern();
```

##3. Select the Images
Finally you need to select the images you want to display in the lightbox. Chances are your basic formatting for the images already look something like this:

```html
<a href="full_img.jpg"><img src="thumbnail_img.jpg" alt="Image Description"></a>
```

All your need to do is add the Lantern data attribute to the links like so...

```html
<a href="full_img.jpg" data-lantern><img src="thumbnail_img.jpg" alt="Image Description"></a>
```

...and you're done!

# Future Features
* Automatic mode
* Lightbox customization 
* Image groups & lightbox navigation
* Lightbox gallery

*Special thanks to [Pexels](http://pexels.com/) for the free, awesome stock photos used in testing. :)*
