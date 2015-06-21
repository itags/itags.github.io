---
module: i-statusbar
maintainer: Marco Asbreuk
title: simple statusbar
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-statusbar events="*:message"></i-statusbar>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    ITSA.later(function() {
        ITSA.alert('I am the first alert');
        ITSA.alert('I a second first alert');
    }, 2000);

    ITSA.later(function() {
        ITSA.warn('i am a warning');
    }, 3000);

</script>
```