---
module: i-parcel
maintainer: Marco Asbreuk
title: using scripts inside templates
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<body>
    <i-parcel lazybind="true">
    <!--
        I am <% if (age>=18) { %><%= adultMessage %><% } else { %><%= childMessage %><% } %>.
    -->
    </i-parcel>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    var iparcel = document.getElement('i-parcel'),
        model = {
            age: 20,
            adultMessage: 'an adult',
            childMessage: 'a child'
        };
    iparcel.bindModel(model);
</script>
```