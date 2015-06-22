---
module: i-scroller
maintainer: Marco Asbreuk
title: infinite i-scroller
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-scroller>
<!--
    {nr}
-->
</i-scroller>

<i-scroller id="second">
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
        model2 = {items: []},
        i;
    for (i=0; i<5000; i++) {
        model.items.push({nr: i});
        model2.items.push({nr: i});
    }
    iscroller.bindModel(model);

    var iscroller2 = document.getElement('#second');
    iscroller2.bindModel(model2);


    ITSA.later(function() {
        iscroller.swipe(10000, 250);
    }, 1500);

    ITSA.later(function() {
        iscroller2.swipe(10000, 250);
    }, 1200);
</script>
```