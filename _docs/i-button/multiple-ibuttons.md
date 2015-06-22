---
module: i-button
maintainer: Marco Asbreuk
title: Multiple i-button
intro: ""
includeexample:
---

<div plugin-fm="true" fm-manage="[itag-formelement], .normal">
    <i-button class="i-primary"><!--Click me--></i-button>
    <button class="normal pure-button pure-button-primary">Click me</button>
    <i-select value="2" class="i-primary">
    <!--
        <option>item1</option>
        <option>item2</option>
        <option><span is="button">item3 header</span>item3 content</option>
        <option>item4</option>
        <option>item5</option>
    -->
    </i-select>
    <i-button><!--Click me--></i-button>
    <button class="normal pure-button">Click me</button>
    <i-select value="2">
    <!--
        <option>item1</option>
        <option>item2</option>
        <option><span is="button">item3 header</span>item3 content</option>
        <option>item4</option>
        <option>item5</option>
    -->
    </i-select>

    <script src="../../dist/itagsbuild.js"></script>
    <script>
        document.getElement('i-button').focus();
    </script>

</div>

<p class="spaced">Code-example:</p>


```html
<div plugin-fm="true" fm-manage="[itag-formelement], .normal">
    <i-button class="i-primary"><!--Click me--></i-button>
    <button class="normal pure-button pure-button-primary">Click me</button>
    <i-select value="2" class="i-primary">
    <!--
        <option>item1</option>
        <option>item2</option>
        <option><span is="button">item3 header</span>item3 content</option>
        <option>item4</option>
        <option>item5</option>
    -->
    </i-select>
    <i-button><!--Click me--></i-button>
    <button class="normal pure-button">Click me</button>
    <i-select value="2">
    <!--
        <option>item1</option>
        <option>item2</option>
        <option><span is="button">item3 header</span>item3 content</option>
        <option>item4</option>
        <option>item5</option>
    -->
    </i-select>

    <script src="../../dist/itagsbuild.js"></script>
    <script>
        require('itags');
        document.getElement('i-button').focus();
    </script>

</div>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    document.getElement('i-button').focus();
</script>
```