---
module: i-table
maintainer: Marco Asbreuk
title: resizable i-table
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-table start-item="1" reorderable="true" resizable="true" class="striped bordered">
    <!--
        [{"key": "id", "width": 75, "sort": "hidden"},
         {"key": "price", "width": 100, "sort": "down", "sortRendered": true},
         {"key": "description", "width": 150},
         {"key": "delivertime"}]
    -->
    </i-table>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iscroller = document.getElement('i-table'),
        model = {items: []},
        i;
    for (i=0; i<5000; i++) {
        model.items.push({id: i, price: 100*i, description: 'Desc. '+i, delivertime: 3*i+3});
    }
    iscroller.bindModel(model);
</script>
```