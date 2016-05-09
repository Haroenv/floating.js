# Floating.js

Let a few elements float infinitely up your page

# Usage

* You can install it via `npm`, and browserify it in your page
* You can download the script and embed it in your page

```js
/**
 * Float a number of things up on a page (hearts, flowers, 👌 ...)
 * @param {string}  content  the character or string to float
 * @param {int}     number   the number of items
 * @param {int}     duration the amount of seconds it takes to float up (default 10s)
 */
floating(content,number,duration)
```

## Example

All that was needed to make this example ([haroen.me/floating.js](https://haroen.me/floating.js)) work is this:

```html
<script src="floating.js"></script>
<script>
  floating("😇",3,11);
  floating("👌",5,8);
  floating("test",3,15);
</script>
```

As another option you could do:

```js
import floating from 'floating';

floating("😇",3,11);
floating("👌",5,8);
floating("test",3,15);
```

# Support

This makes, among others, use of [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). That means you will either have to have a browser supporting this, or use [babel](https://babeljs.io) or another transpiler.

# License

Apache 2.0
