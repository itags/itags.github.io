---
module: i-formvalue
maintainer: Marco Asbreuk
title: Using i-formvalue
intro: ""
includeexample: 2em
---

<p>Code-example:</p>


```html
<i-form class="i-aligned" lazybind="true">
    <!--
        <i-label><!==Your username:==></i-label><i-formvalue><!==username==></i-formvalue>
    -->
</i-form>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var datamodel = {username: 1};
    document.bindModel(datamodel, 'i-form');
</script>
```