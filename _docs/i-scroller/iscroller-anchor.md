---
module: i-scroller
maintainer: Marco Asbreuk
title: iscroller anchored
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-scroller start-item="300" uri-property="uri">
<!--
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
        model.items.push({nr: i, uri: 'http://itsasbreuk.nl/'+i});
    }
    iscroller.bindModel(model);
</script>
```