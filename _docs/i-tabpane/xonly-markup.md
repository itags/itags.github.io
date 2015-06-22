---
module: xi-tabpane
maintainer: Marco Asbreuk
title: i-tabpane by markup
intro: ""
includeexample: 20em
---

<style type="text/css">
    i-tabpane {height: 15em; width: 20em;}
</style>

<i-tabpane pane="2">
    <section>Content first page</section>
    <section>Content second page</section>
    <section><span is="tab">item3 header</span>page 3</section>
    <section>Content fourth page</section>
    <section>Content fifth page</section>
</i-tabpane>

<div id="test"></div>
<p>Code-example:</p>

```css
<style type="text/css">
    i-tabpane {height: 15em; width: 40em;}
</style>
```

```html
<body>
    <i-tabpane>
        <section>Content first page</section>
        <section>Content second page</section>
        <section><i-head>item3 header</i-head>page 3</section>
        <section>Content fourth page</section>
        <section>Content fifth page</section>
    </i-tabpane>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    require('itags');
    document.getElement('i-select').focus();
</script>
```

<script src="../../dist/itagsbuild.js"></script>
<script>
    require('itags');
    document.getElement('i-tabpane').focus();
</script>
