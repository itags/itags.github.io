---
module: i-select
maintainer: Marco Asbreuk
title: i-select by markup
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
    document.getElement('i-select').focus();
</script>
```