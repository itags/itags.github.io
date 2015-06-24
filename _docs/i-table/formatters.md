---
module: i-table
maintainer: Marco Asbreuk
title: formatters
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-table start-item="1" reorderable="true" resizable="true" sortable="true" class="striped bordered">
<!--
    [{"key": "id", "width": 75, "sort": "hidden"},
     {"key": "price", "width": 100, "sort": "down", "sortRendered": true},
     {"key": "description", "width": 150},
     {"key": "delivertime"}]
-->
</i-table>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iscroller = document.getElement('i-table'),
        model = {items: []},
        i;
    for (i=0; i<10000; i++) {
        model.items.push({id: i, price: 100*i, description: 'Desc. '+i, delivertime: 3*i+3});
    }
    iscroller.bindModel(model);
</script>
```