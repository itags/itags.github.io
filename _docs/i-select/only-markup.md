---
module: i-select
maintainer: Marco Asbreuk
title: i-select by markup
intro: ""
---


<i-select value="2" primary-button="true">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>

<div id="test"></div>
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

<script src="../../dist/itagsbuild.js"></script>
<script>
    require('itags');
    document.getElement('i-select').focus();
    document.getElement('#test').setHTML('<i-select value="1" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item></i-select>');
    console.warn(document.getAll('i-select')[0].__proto__);
    console.warn(document.getAll('i-select')[1].__proto__);
</script>