---
module: i-tabpane
maintainer: Marco Asbreuk
title: i-tabpane with inner itags
intro: ""
---

<style type="text/css">
    i-tabpane {height: 15em; width: 40em;}
</style>

<i-tabpane pane="2">
    <i-item>Content first page</i-item>
    <i-item>Content second page</i-item>
    <i-item><i-head>item3 header</i-head>page 3</i-item>
    <i-item><i-select value="2" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item><i-item><i-head>item3 header</i-head>item3 content</i-item><i-item>item4</i-item><i-item>item5</i-item></i-select></i-item>
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