---
module: i-splitdiv
maintainer: Marco Asbreuk
title: i-splitdiv with itags
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
        border-left: dotted 4px #000;
        background-color: #EEE;
    }
</style>
```

```html
<body>
    <i-splitdiv horizontal="true" divider="120px">
    <!--
        <section>Content first section</section>
        <section>
            <i-scroller id="firmscroller">
                <!==
                    <a href="{url}">{omschrijving}</a>
                ==>
            </i-scroller>
        </section>
    -->
    </i-splitdiv>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
```