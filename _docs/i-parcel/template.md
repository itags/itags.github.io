---
module: i-parcel
maintainer: Marco Asbreuk
title: micro-templating
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-parcel>
    <!--
        I am <b>just</b> <%= what %>.
    -->
    </i-parcel>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iparcel = document.getElement('i-parcel'),
        model = {what: 'a template'};
    iparcel.bindModel(model);
</script>
```