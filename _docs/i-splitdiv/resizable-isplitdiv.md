---
module: i-splitdiv
maintainer: Marco Asbreuk
title: resizable i-splitdiv
intro: ""
includeexample: 20em
---

<p>Code-example:</p>

```css
<style type="text/css">
    i-splitdiv {
        width: 500px;
        height: 190px;
        position: absolute;
        top: 50px;
        left: 50px;
        border: solid 1px #000;
    }
    i-splitdiv section {
        background-color: #DDD;
        padding: 20px;
    }
    i-splitdiv section[section="second"] {
        background-color: #EEE;
    }
</style>
```

```html
<body>
    <i-splitdiv class="resize-dashed" horizontal="true" divider="50px" resizable="true">
    <!--
        <section>Content first section</section>
        <section>Content second section</section>
    -->
    </i-splitdiv>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
```