---
module: i-checkbox
itsaclassname: Event
version: 0.0.1
modulesize: 5.78
dependencies: "polyfill/polyfill-base.js, js-ext/lib/function.js, js-ext/lib/object.js, utils, event"
maintainer: Marco Asbreuk
title: i-checkbox
intro: ""
firstpar: get-started-onlywindow
---

#Features#

This module brings DOM-events to a higher level:

* subscribers work regardless of the domnode being part of the dom
* by using delegation, you can save many Event-subscribers
* only a small number of dom-listeners are created. Just one for every possible dom-event
* e.target always matches the selector
* no memoryleaks on the dom, no need to detach on the dom-node
* delegation support for `focus`, `blur`, `scroll`, `resize`, `error` and `load` event
* both `before` and `after` listeners can be set
* `mouseover`- and `mouseout`-events only occurs on the selector (not noisy)
* all events have an `eventoutside` counterpart


#The Basics#

After including this module, you can listen for DOM-events, just like listening to other events. The difference with other events is that DOM-events don't need an emitterName when listening:

####Example: listening to DOM-events####
```js
var showMsg = function(e) {
    // e.target is the node that was clicked
    alert(e.target.innerHTML);
};

Event.after('click', showMsg, '#buttongo');
```

When listening to DOM-events, you always need to pass the `filter-argument`, this is a css-selector by which you tell what nodes you want to listen at. It doesn't matter if those nodes are in the dom yet, or at any later time.

