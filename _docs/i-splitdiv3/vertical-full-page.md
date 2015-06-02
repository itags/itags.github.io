---
module: i-splitdiv#threesections
maintainer: Marco Asbreuk
title: vertical full page
intro: ""
includeexample: 40em
---

<p>Code-example:</p>

```css
<style type="text/css">
    i-splitdiv {
        width: 500px;
        height: 500px;
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
        border-left: dotted 4px #000;
        background-color: #EEE;
    }
</style>
```

```html
<body>
    <i-splitdiv class="resize-dashed" divider="120px" resizable="true">
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