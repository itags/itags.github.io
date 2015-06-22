---
module: i-statusbar
maintainer: Marco Asbreuk
title: display warnings and errors
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-statusbar events="*:warn, *:error"></i-statusbar>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    ITSA.async(function() {
        ITSA.alert('I am the first alert');
        ITSA.alert('I a second first alert');
        ITSA.catchErrors(true);
        throw new Error('An error occured');
    });

    ITSA.later(function() {
        ITSA.warn('i am a warning');
    }, 1500);
</script>
```