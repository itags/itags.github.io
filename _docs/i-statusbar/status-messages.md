---
module: i-statusbar
maintainer: Marco Asbreuk
title: display statusmessages
intro: ""
includeexample: 20em
---

<p>Code-example:</p>


```html
<i-button id="button-get1"><!-- Click me to get server-data --></i-button>
<i-button id="button-get2"><!-- Click me to get a lot of server-data --></i-button>
<i-statusbar events="*:statusmessage"></i-statusbar>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    var url1 = 'http://servercors.itsa.io/example?example=1',
        url2 = 'http://servercors.itsa.io/example/stream';

    ITSA.Event.after(
        'tap',
        function() {
            ITSA.IO.get(url1);
        },
        '#button-get1'
    );

    ITSA.Event.after(
        'tap',
        function() {
            ITSA.IO.read(url2, {example: 1});
        },
        '#button-get2'
    );
</script>
```