---
module: i-table
maintainer: Marco Asbreuk
title: "selecting rows"
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-table class="striped bordered" rows-selected="[2,5,6]" rows-selectable="true">
<!--
    [{"key": "id", "width": 75, "sort": "hidden"},
     {"key": "description", "width": 150},
     {"key": "price", "width": 100}]
-->
</i-table>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iscroller = document.getElement('i-table'),
        model = {items: []},
        i;
    for (i=0; i<100; i++) {
        model.items.push({
            id: i,
            price: (i<3) ? 0 : 100*i
        });
    }
    iscroller.bindModel(model);
</script>
```