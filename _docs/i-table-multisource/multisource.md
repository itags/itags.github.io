---
module: i-table-multisource
maintainer: Marco Asbreuk
title: simple i-table
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-table is="multisource" sortable="true" class="striped bordered">
<!--
    [{"key": "id", "width": 50},
     {"key": "description", "width": 150},
     {"key": "description", "source": 2, "width": 150, "class":"<% if ($1.colormatch!==$2.colormatch) { %>different<% } %>"}]
-->
</i-table>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iscroller = document.getElement('i-table'),
        model = {
            items: [],
            items2: []
        },
        i;
    for (i=0; i<4; i++) {
        model.items.push({id: i, description: 'Description '+i, colormatch: Math.round(i/3)});
        model.items2.push({id: i, description: 'Second description '+i, colormatch: Math.floor(i/3)});
    }
    iscroller.bindModel(model);
</script>
```