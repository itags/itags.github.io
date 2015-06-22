---
module: i-table
maintainer: Marco Asbreuk
title: editable i-table
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-table start-item="1" editable="true" resizable="true" class="striped bordered">
<!--
    [{"key": "id", "width": 50},
     {"key": "price", "width": 50},
     {"key": "description", "width": 150},
     {"key": "delivertime", "width": 50}]
-->
</i-table>

<i-table start-item="1" editable="true" resizable="true" class="striped bordered">
<!--
    [{"key": "id", "width": 50},
     {"key": "price", "width": 50},
     {"key": "description", "width": 150},
     {"key": "delivertime", "width": 50}]
-->
</i-table>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var itables = document.getAll('i-table'),
        model = {items: []},
        i;
    for (i=0; i<5000; i++) {
        model.items.push({id: i, price: 100*i, description: 'Desc. '+i, delivertime: 3*i+3});
    }
    itables[0].bindModel(model);
    itables[1].bindModel(model);
</script>
```