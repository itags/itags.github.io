---
module: i-tabpane
maintainer: Marco Asbreuk
title: i-tabpane by markup
intro: ""
---


<i-tabpane pane="2">
    <i-item>Content first page</i-item>
    <i-item>Content second page</i-item>
    <i-item><i-head>item3 header</i-head>page 3</i-item>
    <i-item>Content fourth page</i-item>
    <i-item>Content fifth page</i-item>
</i-tabpane>

<div id="test"></div>
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

<script src="../../dist/itagsbuild.js"></script>
<script>
    require('itags');
    document.getElement('i-tabpane').focus();
</script>
