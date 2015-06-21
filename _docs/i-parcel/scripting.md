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
    <i-parcel>
    <!--
        I am <% if (age>=18) { %><%= adultMessage %><% } else { %><%= childMessage %><% } %>.
    -->
    </i-parcel>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var iparcel = document.getElement('i-parcel'),
        model = {
            age: 17,
            adultMessage: 'an adult',
            childMessage: 'a child'
        };

    iparcel.bindModel(model);

    ITSA.later(function() {
        model.age = 18;
    }, 3000);

</script>
```