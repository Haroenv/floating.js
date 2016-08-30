# Floating.js

[![Build Status](https://travis-ci.org/Haroenv/floating.js.svg?branch=gh-pages)](https://travis-ci.org/Haroenv/floating.js)
[![npm version](https://badge.fury.io/js/floating.js.svg)](https://www.npmjs.com/package/floating.js)

Let a few elements float infinitely up your page

# Usage

* You can install it via `npm install --save floating.js`, and browserify it in your page
* You can download the script and embed it in your page

[full documentation](https://haroen.me/floating.js/doc/)

```js
/**
 * Float a number of things up on a page (hearts, flowers, 👌 ...)
 * @param {string} [options.content='👌']
 *   the character or string to float
 * @param {number} [options.number=1]
 *   the number of items
 * @param {number} [options.duration=10]
 *   the amount of seconds it takes to float up (default 10s)
 * @param {number|string} [options.repeat='infinite']
 *   the number of times you want the animation to repeat (default:'infinite')
 * @param {string} [options.direction='normal']
 *   The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction">
 *   animation-direction</a> of the main animation
 * @param {number|array} [options.sizes=2]
 *   The size (in em) of each element. Giving two values in an array will
 *   give a random size between those values.
 */
floating({
  content: "🙋",
  number: 1,
  duration: 3,
  repeat: 1,
  size: 3
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
    repeat: 1,
    size: 1
  });
  floating({
    content: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Weather-snow.svg">',
    number: 10,
    direction: 'reverse'
    size: [1,10]
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
  repeat: 1,
  size: 1
});
floating({
  content: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Weather-snow.svg">',
  number: 10,
  direction: 'reverse'
  size: [1,10]
});
floating({});
```

# Support

This makes use of css animations, which aren't supported on every version of IE.

# License

Apache 2.0
