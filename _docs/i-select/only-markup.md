---
module: i-select
maintainer: Marco Asbreuk
title: i-select by markup
intro: ""
---

<div id='cont'>x</div>

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



    var cont = document.getElement('#cont');

    // cont.setHTML('<i-select value="2" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item><i-item><i-head>item3 header</i-head>item3 content</i-item><i-item>item4</i-item><i-item>item5</i-item></i-select>');

    // document.getElement('i-select').focus();

    laterSilent(function() {
        cont.setHTML('<i-select value="2" primary-button="true"><i-item>item1</i-item><i-item>item2</i-item><i-item><i-head>item3 header</i-head>item3 content</i-item><i-item>item4</i-item><i-item>item5</i-item></i-select>');
    },5000);
</script>
