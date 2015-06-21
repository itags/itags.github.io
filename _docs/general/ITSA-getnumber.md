---
module: general
maintainer: Marco Asbreuk
title: ITSA.prompt
intro: ""
includeexample: 10em
---

<p>Code-example:</p>


```html
<body>
    <i-select value="2" primary-button="true">
        <i-item>item1</i-item>
        <i-item>item2</i-item>
        <i-item><i-head>item3 header</i-head>item3 content</i-item>
        <i-item>item4</i-item>
        <i-item>item5</i-item>
    </i-select>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    document.getElement('i-select').focus();
</script>
```