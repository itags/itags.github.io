---
module: i-parcel
maintainer: Marco Asbreuk
title: unescape template-content
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-parcel>
    <!--
        Escaped: <%= what %>
        <br>
        <br>
        Unescaped: <%=raw what %>
    -->
    </i-parcel>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iparcel = document.getElement('i-parcel'),
        model = {what: 'a <b>template</b>'};
    iparcel.bindModel(model);
</script>
```