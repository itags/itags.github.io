---
module: i-select
maintainer: Marco Asbreuk
title: interact with i-select
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-select value="2" class="i-primary">
    <!--
        <span>item1</span>
        <span>item2</span>
        <span><span is="button">item3 header</span>item3 content</span>
        <span>item4</span>
        <span>item5</span>
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