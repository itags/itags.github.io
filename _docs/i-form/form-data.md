---
module: i-form
maintainer: Marco Asbreuk
title: i-form with a data-object
intro: ""
---

<i-form class="i-aligned">
<i-select value="2" prop="selectvalue">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>
<i-select value="2" prop="xselectvalue">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>
<i-formrow>
    <label for="name">Username</label>
    <i-input prop="name" reset-value="nobody" placeholder="Say your name">Marco</i-input>
</i-formrow>
<i-formrow>
    <label for="name">Username</label>
    <i-input prop="name" reset-value="nobody" placeholder="Say your name">Marco</i-input>
</i-formrow>
<i-formrow>
    <label for="name">Username</label>
    <i-input prop="name" reset-value="nobody" placeholder="Say your name">Marco</i-input>
</i-formrow>
<i-select value="2" prop="xselectvalue">
    <i-item>item1</i-item>
    <i-item>item2</i-item>
    <i-item><i-head>item3 header</i-head>item3 content</i-item>
    <i-item>item4</i-item>
    <i-item>item5</i-item>
</i-select>
<i-input prop="name" reset-value="nobody" placeholder="Say your name">Marco</i-input>
</i-form>

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
    var datamodel = {
            selectvalue: {
                value: 4
            },
            name: {
                value: 'Harry'
            }
        };
    document.bindModel(datamodel, 'i-form');
    // document.getElement('i-tabpane').focus();
</script>
