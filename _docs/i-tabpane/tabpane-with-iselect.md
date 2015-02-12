---
module: i-tabpane
maintainer: Marco Asbreuk
title: i-tabpane with inner itags
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-tabpane>
        <i-item>Content first page</i-item>
        <i-item>Content second page</i-item>
        <i-item><i-head>item3 header</i-head>page 3</i-item>
        <i-item>Content fourth page</i-item>
        <i-item>Content fifth page</i-item>
    </i-tabpane>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    document.getElement('i-select').focus();
</script>
```