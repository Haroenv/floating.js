# Floating.js

[![Build Status](https://travis-ci.org/Haroenv/floating.js.svg?branch=gh-pages)](https://travis-ci.org/Haroenv/floating.js) [![npm version](https://badge.fury.io/js/floating.js.svg)](https://www.npmjs.com/package/floating.js)

Let a few elements float infinitely up your page

# Usage

* You can install it via `npm install --save floating.js`, and browserify it in your page
* You can download the script and embed it in your page

[full documentation](https://haroen.me/floating.js/doc/)

```js
/**
 * Float a number of things up on a page (hearts, flowers, 👌 ...)
 * @param {string}  content  the character or string to float
 * @param {int}     number   the number of items
 * @param {int}     duration the amount of seconds it takes to float up (default 10s)
 * @param {int}     repeat   the number of times you want the animation to repeat (default: 'infinite')
 * @param {string} direction the animation-direction of the main animation (default: 'normal')
 */
floating({
  content: "🙋",
  number: 1,
  duration: 3,
  repeat: 1
});
```

## Example

All that was needed to make this example ([haroen.me/floating.js](https://haroen.me/floating.js)) work is this:

```html
<script src="floating.js"></script>
<script>
  floating({
    content: "😇",
    number: 3,
    duration: 11
  });
  floating({
    content: "👌",
    number: 5,
    duration: 8
  });
  floating({
    content: "test",
    number: 3,
    duration: 15
  });
  floating({
    content: "🙋",
    number: 1,
    duration: 3,
    repeat: 1
  });
  floating({
    content: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Weather-snow.svg">',
    number: 10,
    direction: 'reverse'
  });
  floating({});
</script>
```

As another option you could do:

```js
import floating from 'floating';

floating({
  content: "😇",
  number: 3,
  duration: 11
});
floating({
  content: "👌",
  number: 5,
  duration: 8
});
floating({
  content: "test",
  number: 3,
  duration: 15
});
floating({
  content: "🙋",
  number: 1,
  duration: 3,
  repeat: 1
});
floating({
  content: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Weather-snow.svg">',
  number: 10,
  direction: 'reverse'
});
floating({});
```

# Support

This makes use of css animations, which aren't supported on every version of IE.

# License

Apache 2.0
