---
module: i-chart-line
maintainer: Marco Asbreuk
title: Simple i-chart-line
intro: ""
includeexample: 10m
---

<p>Code-example:</p>


```html
<body>
    <i-link href="http://itsasbreuk.nl" target="_blank">
    <!--
    Click here to visit itsasbreuk.nl
    -->
    </i-link>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    document.getElement('i-link').focus();
</script>
```