---
module: i-parcel
maintainer: Marco Asbreuk
title: substitute-templating
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-parcel lazybind="true">
    <!--
        I am <b>just</b> {what}.
    -->
    </i-parcel>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    var iparcel = document.getElement('i-parcel'),
        model = {what: 'a template'};
    iparcel.bindModel(model);
</script>
```