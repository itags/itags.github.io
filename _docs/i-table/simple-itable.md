---
module: i-table
maintainer: Marco Asbreuk
title: simple i-table
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-table start-item="3" class="striped bordered">
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
    var iscroller = document.getElement('i-table'),
        model = {items: []},
        i;
    for (i=0; i<5000; i++) {
        model.items.push({x:5, id: i, price: 100*i, description: 'Desc. '+i, delivertime: 3*i+3});
    }
    iscroller.bindModel(model);
</script>
```