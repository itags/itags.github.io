---
module: i-scroller
maintainer: Marco Asbreuk
title: i-scroller with headers
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-scroller start-item="300">
<!--
    <section is="header">{header1}</section>
    <section is="header">{header2}</section>
    {nr}
-->
</i-scroller>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iscroller = document.getElement('i-scroller'),
        model = {items: []},
        infonode = document.getElement('#infonode'),
        i, scrollContainer;
    for (i=0; i<1500; i++) {
        model.items.push({nr: i, header1: Math.floor(i/10), header2: Math.floor(i/5)});
    }
    iscroller.bindModel(model);
</script>
```