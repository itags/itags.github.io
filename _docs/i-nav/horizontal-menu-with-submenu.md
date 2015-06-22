---
module: i-nav
maintainer: Marco Asbreuk
title: horizontal submenu
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-nav horizontal="true">
<!--
    <option href="#">page1</option>
    <option>
        page2
        <i-nav>
        <!==
            <option href="#">page2.1</option>
        ==>
        </i-nav>
    </option>
    <option href="#">page3</option>
    <option href="#">page4</option>
    <option href="#">page5</option>
-->
</i-nav>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    document.getElement('i-nav').focus();
</script>
```