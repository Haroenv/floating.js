# Floating.js

Let a few elements float infinitely up your page

# Usage

* You can install it via `npm`, and browserify it in your page
* You can download the script and embed it in your page

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

# License

Apache 2.0
