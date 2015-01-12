---
module: i-tabpane
maintainer: Marco Asbreuk
title: i-tabpane by markup
intro: ""
---


<i-tabpane>
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-tabpane>

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
    var container = document.getElement('#test');
    container.setHTML('<i-tabpane>OK</i-tabpane>');
    var tabpane = document.getAll('i-tabpane');
    console.warn(tabpane[1]);
    console.warn('CHECKING prototypes');
    console.warn('unknown element: '+(document.createElement('i-tabpane').__proto__ === HTMLUnknownElement.prototype));
    console.warn('known element: '+(document.createElement('i-tabpane').__proto__ === HTMLElement.prototype));
    console.warn('is HTMLElement: '+(document.createElement('i-tabpane') instanceof HTMLElement));
</script>
