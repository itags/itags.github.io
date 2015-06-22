---
module: general
maintainer: Marco Asbreuk
title: Developing itags
intro: "This example shows how to create a new itag-definition, which can be used in the DOM"
includeexample:
---

<p>Code-example:</p>

```js
module.exports = function (window) {
    "use strict";

    var itagCore = require('itags.core')(window),
        itagName = 'i-yourbutton', // <-- define your own itag-name here
        DOCUMENT = window.document,
        ITSA = window.ITSA, // won't need it in this example, but it is there..
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.defineItag(itagName, {
            attrs: {
                disabled: 'boolean',
                type: 'string'
            },
            init: function() {
                var element = this,
                    designNode = element.getItagContainer(),
                    buttonText = designNode.getHTML();

                // when initializing: make sure NOT to overrule model-properties that already
                // might have been defined when modeldata was boundend. Therefore, use `defineWhenUndefined`

                // setting element.model.someprop = somevalue; when not defined yet:
                element.defineWhenUndefined('text', (buttonText==='') ? '&nbsp;' : buttonText);
            },

            render: function() {
                // setting the `innerHTML` of the Itag:
                this.setHTML('<button></button>');
            },

            sync: function() {
                var element = this,
                    button = element.getElement('button');
                button.setHTML(element.model.text);
            },

            destroy: function() {
                // nothing to cleanup at instance-level
            }
        });

        // registering the itag:
        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
```