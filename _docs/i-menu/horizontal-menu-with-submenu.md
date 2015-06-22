---
module: i-menu
maintainer: Marco Asbreuk
title: horizontal submenu
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-menu>
<!--
    <option href="#">page1</option>
    <option>
        page2
        <i-menu>
        <!==
            <option href="#" button="page2">
        ==>
        </i-menu>
    </option>
    <option href="#">page3</option>
    <option href="#">page4</option>
    <option href="#">page5</option>
-->
</i-menu>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    document.getElement('i-menu').focus();
</script>
```