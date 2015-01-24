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

<i-select is="dummy" value="2" primary-button="true">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>

<i-select is="dummyx" value="2" primary-button="true">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>


<i-s>
</i-s>

<br>
<br>

<div id="test"></div>
<div id="test2"></div>
<div id="test3"></div>
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

    // document.getElement('i-select').focus();
    document.getElement('#test').setHTML('<i-select value="1" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item></i-select>');
    document.getElement('#test2').setHTML('<i-select is="dummy" value="1" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item></i-select>');
    document.getElement('#test3').setHTML('<i-s></i-s>');
    // setTimeout(function() {
        // document.getElement('i-select').setAttr('value', 3);
    // }, 2000);
</script>
