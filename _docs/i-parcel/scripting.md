---
module: i-parcel
maintainer: Marco Asbreuk
title: using scripts inside templates
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-select value="2" class="i-primary">
    <!--
        <option>item1</option>
        <option>item2</option>
        <option><span is="button">item3 header</span>item3 content</option>
        <option>item4</option>
        <option>item5</option>
    -->
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