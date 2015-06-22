---
module: i-link
maintainer: Marco Asbreuk
title: Disabled i-link
intro: ""
includeexample: 10m
---

<p>Code-example:</p>


```html
<body>
    <i-link href="http://itsasbreuk.nl" target="_blank" disabled="true">
    <!--
    Click here to visit itsasbreuk.nl
    -->
    </i-link>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    document.getElement('i-link').focus();
</script>
```