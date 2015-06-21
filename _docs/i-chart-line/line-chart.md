---
module: i-chart-line
maintainer: Marco Asbreuk
title: Simple i-chart-line
intro: ""
includeexample: 21em
---

<p>Code-example:</p>

```css
<style type="text/css">
    i-chart {
        width: 300px;
        height: 300px;
    }
</style>
```

```html
<body>
    <i-chart is="line">
    <!--
        <section is="title">Heigrafiek</section>
        <section is="footer">Footer</section>
        <section is="x-axis">x-as</section>
        <section is="y-axis">y-as</section>
        <section is="x2-axis">x2-as</section>
        <section is="y2-axis">y2-as</section>
        [{"legend":"serie1", "data":[[50,100],[100,120],[150,110],[200,90]]},
         {"legend":"serie2", "y-prop":"age", "data":[[0,{"age":80}],[50,{"age":110}],[100,{"age":75}],[150,{"age":25}]]},
         {"legend":"serie3", "x2-axis":true, "y2-axis":true, "data":[[20,1400],[50,2000],[100,1800],[125,600]]}]
    -->
    </i-chart>

    <i-chart is="line">
    <!--
        <section is="title">Heigrafiek</section>
        <section is="footer">Footer</section>
        <section is="x-axis">x-as</section>
        <section is="y-axis">y-as</section>
        <section is="x2-axis">x2-as</section>
        <section is="y2-axis">y2-as</section>
        [{"legend":"serie1", "data":[10,15,13,18,35,21,25]},
         {"legend":"serie2", "data":[2,5,15,11,12,16,14,24,31]},
         {"legend":"serie3", "y2-axis":true, "data":[180,100,160,80,50]}]
    -->
    </i-chart>

    <i-chart is="line">
    <!--
        <section is="title">Heigrafiek</section>
        <section is="footer">Footer</section>
        <section is="x-axis">x-as</section>
        <section is="y-axis">y-as</section>
        <section is="x2-axis">x2-as</section>
        <section is="y2-axis">y2-as</section>
        [{"legend":"serie1", "y-prop":"age", "data":[{"age":10},{"age":15},{"age":13},{"age":18},{"age":35},{"age":21},{"age":25}]},
         {"legend":"serie2", "x-prop":"pos", "y-prop":"age", "data":[{"pos":0,"age":2},{"pos":42,"age":5},{"pos":84,"age":15},{"pos":126,"age":11},{"pos":169,"age":12},{"pos":211,"age":16},{"pos":253,"age":14},{"pos":295,"age":24},{"pos":337,"age":31}]},
         {"legend":"serie3", "y-prop":"age", "y2-axis":true, "data":[{"pos":100,"age":180},{"pos":111,"age":100},{"pos":133,"age":160},{"pos":144,"age":80},{"pos":155,"age":50}]}]
    -->
    </i-chart>
</body>
```

```js
<script src="itagsbuild-min.js"></script>
<script>
    ITSA.later(function() {
        var chart = document.getElement('i-chart'),
            model = chart.model;
        model.series[0].data[2][1] = 250;
    }, 3000);
</script>
```