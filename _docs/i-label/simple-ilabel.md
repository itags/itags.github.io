---
module: i-label
maintainer: Marco Asbreuk
title: Simple i-label
intro: ""
includeexample: 10m
---

<p>Code-example:</p>


```html
<i-form class="i-aligned" active-labels="true">
    <!--
        <i-label><!==First name:==></i-label>
        <i-input><!==oh==></i-input>
        <i-label><!==First name:==></i-label>
        <i-input><!==oh==></i-input>
        <i-label><!==First name:==></i-label>
        <i-input><!==oh==></i-input>
    -->
</i-form>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    document.getElement('i-form').focus();
</script>
```