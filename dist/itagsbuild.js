require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "*:focus {\n    outline: 0;\n}\n\na[target=\"_blank\"]:focus {\n    outline: 1px solid #129fea;\n}\n\n/* because we think the padding and margin should always be part of the size,\n   we define \"box-sizing: border-box\" for all elements */\n\n* {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],2:[function(require,module,exports){
var css = ".pure-menu.pure-menu-open {\n    z-index: 3; /* prevent graph from crossing the menuarea */\n}\n\n.pure-button.pure-button-bordered,\n.pure-button.pure-button-bordered[disabled] {\n    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset;\n}\n\n.pure-button.pure-button-bordered:focus,\n.pure-button.pure-button-bordered[disabled]:focus,\n.pure-button.pure-button-bordered:focus,\n.pure-button.pure-button-bordered[disabled]:focus,\n.pure-button.pure-button-bordered.focussed,\n.pure-button.pure-button-bordered[disabled].focussed,\n.pure-button.pure-button-bordered.focussed,\n.pure-button.pure-button-bordered[disabled].focussed {\n    box-shadow: 0 0 0 1px rgba(0,0,0, 0.4) inset;\n}\n\n/* restore pure-button:active */\n.pure-button.pure-button-bordered:active,\n.pure-button.pure-button-bordered.pure-button-active,\n.pure-button:active:focus,\n.pure-button.pure-button-active:focus {\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4) inset, 0 0 10px rgba(0, 0, 0, 0.3) inset;\n}\n\n.pure-button.pure-button-rounded {\n    border-radius: 0.3em;\n}\n\n.pure-button.pure-button-heavyrounded {\n    border-radius: 0.5em;\n}\n\n.pure-button.pure-button-oval {\n    border-radius: 50%;\n}\n\n.pure-button.pure-button-halfoval {\n    border-radius: 25%;\n}\n"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],3:[function(require,module,exports){
var css = "/*!\nPure v0.5.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*csslint important:false*/\n\n/* ==========================================================================\n   Pure Base Extras\n   ========================================================================== */\n\n/**\n * Extra rules that Pure adds on top of Normalize.css\n */\n\n/**\n * Always hide an element when it has the `hidden` HTML attribute.\n */\n\n[hidden] {\n    display: none !important;\n}\n\n/**\n * Add this class to an image to make it fit within it's fluid parent wrapper while maintaining\n * aspect ratio.\n */\n.pure-img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n}\n\n/*csslint regex-selectors:false, known-properties:false, duplicate-properties:false*/\n\n.pure-g {\n    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */\n    *letter-spacing: normal; /* reset IE < 8 */\n    *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */\n    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */\n\n    /*\n    Sets the font stack to fonts known to work properly with the above letter\n    and word spacings. See: https://github.com/yahoo/pure/issues/41/\n\n    The following font stack makes Pure Grids work on all known environments.\n\n    * FreeSans: Ships with many Linux distros, including Ubuntu\n\n    * Arimo: Ships with Chrome OS. Arimo has to be defined before Helvetica and\n      Arial to get picked up by the browser, even though neither is available\n      in Chrome OS.\n\n    * Droid Sans: Ships with all versions of Android.\n\n    * Helvetica, Arial, sans-serif: Common font stack on OS X and Windows.\n    */\n    font-family: FreeSans, Arimo, \"Droid Sans\", Helvetica, Arial, sans-serif;\n\n    /*\n    Use flexbox when possible to avoid `letter-spacing` side-effects.\n\n    NOTE: Firefox (as of 25) does not currently support flex-wrap, so the\n    `-moz-` prefix version is omitted.\n    */\n\n    display: -webkit-flex;\n    -webkit-flex-flow: row wrap;\n\n    /* IE10 uses display: flexbox */\n    display: -ms-flexbox;\n    -ms-flex-flow: row wrap;\n}\n\n/* Opera as of 12 on Windows needs word-spacing.\n   The \".opera-only\" selector is used to prevent actual prefocus styling\n   and is not required in markup.\n*/\n.opera-only :-o-prefocus,\n.pure-g {\n    word-spacing: -0.43em;\n}\n\n.pure-u {\n    display: inline-block;\n    *display: inline; /* IE < 8: fake inline-block */\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n}\n\n/*\nResets the font family back to the OS/browser's default sans-serif font,\nthis the same font stack that Normalize.css sets for the `body`.\n*/\n.pure-g [class *= \"pure-u\"] {\n    font-family: sans-serif;\n}\n\n.pure-u-1,\n.pure-u-1-1,\n.pure-u-1-2,\n.pure-u-1-3,\n.pure-u-2-3,\n.pure-u-1-4,\n.pure-u-3-4,\n.pure-u-1-5,\n.pure-u-2-5,\n.pure-u-3-5,\n.pure-u-4-5,\n.pure-u-5-5,\n.pure-u-1-6,\n.pure-u-5-6,\n.pure-u-1-8,\n.pure-u-3-8,\n.pure-u-5-8,\n.pure-u-7-8,\n.pure-u-1-12,\n.pure-u-5-12,\n.pure-u-7-12,\n.pure-u-11-12,\n.pure-u-1-24,\n.pure-u-2-24,\n.pure-u-3-24,\n.pure-u-4-24,\n.pure-u-5-24,\n.pure-u-6-24,\n.pure-u-7-24,\n.pure-u-8-24,\n.pure-u-9-24,\n.pure-u-10-24,\n.pure-u-11-24,\n.pure-u-12-24,\n.pure-u-13-24,\n.pure-u-14-24,\n.pure-u-15-24,\n.pure-u-16-24,\n.pure-u-17-24,\n.pure-u-18-24,\n.pure-u-19-24,\n.pure-u-20-24,\n.pure-u-21-24,\n.pure-u-22-24,\n.pure-u-23-24,\n.pure-u-24-24 {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n}\n\n.pure-u-1-24 {\n    width: 4.1667%;\n    *width: 4.1357%;\n}\n\n.pure-u-1-12,\n.pure-u-2-24 {\n    width: 8.3333%;\n    *width: 8.3023%;\n}\n\n.pure-u-1-8,\n.pure-u-3-24 {\n    width: 12.5000%;\n    *width: 12.4690%;\n}\n\n.pure-u-1-6,\n.pure-u-4-24 {\n    width: 16.6667%;\n    *width: 16.6357%;\n}\n\n.pure-u-1-5 {\n    width: 20%;\n    *width: 19.9690%;\n}\n\n.pure-u-5-24 {\n    width: 20.8333%;\n    *width: 20.8023%;\n}\n\n.pure-u-1-4,\n.pure-u-6-24 {\n    width: 25%;\n    *width: 24.9690%;\n}\n\n.pure-u-7-24 {\n    width: 29.1667%;\n    *width: 29.1357%;\n}\n\n.pure-u-1-3,\n.pure-u-8-24 {\n    width: 33.3333%;\n    *width: 33.3023%;\n}\n\n.pure-u-3-8,\n.pure-u-9-24 {\n    width: 37.5000%;\n    *width: 37.4690%;\n}\n\n.pure-u-2-5 {\n    width: 40%;\n    *width: 39.9690%;\n}\n\n.pure-u-5-12,\n.pure-u-10-24 {\n    width: 41.6667%;\n    *width: 41.6357%;\n}\n\n.pure-u-11-24 {\n    width: 45.8333%;\n    *width: 45.8023%;\n}\n\n.pure-u-1-2,\n.pure-u-12-24 {\n    width: 50%;\n    *width: 49.9690%;\n}\n\n.pure-u-13-24 {\n    width: 54.1667%;\n    *width: 54.1357%;\n}\n\n.pure-u-7-12,\n.pure-u-14-24 {\n    width: 58.3333%;\n    *width: 58.3023%;\n}\n\n.pure-u-3-5 {\n    width: 60%;\n    *width: 59.9690%;\n}\n\n.pure-u-5-8,\n.pure-u-15-24 {\n    width: 62.5000%;\n    *width: 62.4690%;\n}\n\n.pure-u-2-3,\n.pure-u-16-24 {\n    width: 66.6667%;\n    *width: 66.6357%;\n}\n\n.pure-u-17-24 {\n    width: 70.8333%;\n    *width: 70.8023%;\n}\n\n.pure-u-3-4,\n.pure-u-18-24 {\n    width: 75%;\n    *width: 74.9690%;\n}\n\n.pure-u-19-24 {\n    width: 79.1667%;\n    *width: 79.1357%;\n}\n\n.pure-u-4-5 {\n    width: 80%;\n    *width: 79.9690%;\n}\n\n.pure-u-5-6,\n.pure-u-20-24 {\n    width: 83.3333%;\n    *width: 83.3023%;\n}\n\n.pure-u-7-8,\n.pure-u-21-24 {\n    width: 87.5000%;\n    *width: 87.4690%;\n}\n\n.pure-u-11-12,\n.pure-u-22-24 {\n    width: 91.6667%;\n    *width: 91.6357%;\n}\n\n.pure-u-23-24 {\n    width: 95.8333%;\n    *width: 95.8023%;\n}\n\n.pure-u-1,\n.pure-u-1-1,\n.pure-u-5-5,\n.pure-u-24-24 {\n    width: 100%;\n}\n.pure-button {\n    /* Structure */\n    display: inline-block;\n    *display: inline; /*IE 6/7*/\n    zoom: 1;\n    line-height: normal;\n    white-space: nowrap;\n    vertical-align: baseline;\n    text-align: center;\n    cursor: pointer;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n.pure-button::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n}\n\n/*csslint outline-none:false*/\n\n.pure-button {\n    font-family: inherit;\n    font-size: 100%;\n    *font-size: 90%; /*IE 6/7 - To reduce IE's oversized button text*/\n    *overflow: visible; /*IE 6/7 - Because of IE's overly large left/right padding on buttons */\n    padding: 0.5em 1em;\n    color: #444; /* rgba not supported (IE 8) */\n    color: rgba(0, 0, 0, 0.80); /* rgba supported */\n    *color: #444; /* IE 6 & 7 */\n    border: 1px solid #999;  /*IE 6/7/8*/\n    border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/\n    background-color: #E6E6E6;\n    text-decoration: none;\n    border-radius: 2px;\n}\n\n.pure-button-hover,\n.pure-button:hover,\n.pure-button:focus {\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0);\n    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(40%, rgba(0,0,0, 0.05)), to(rgba(0,0,0, 0.10)));\n    background-image: -webkit-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));\n    background-image: -moz-linear-gradient(top, rgba(0,0,0, 0.05) 0%, rgba(0,0,0, 0.10));\n    background-image: -o-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));\n    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));\n}\n.pure-button:focus {\n    outline: 0;\n}\n.pure-button-active,\n.pure-button:active {\n    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;\n}\n\n.pure-button[disabled],\n.pure-button-disabled,\n.pure-button-disabled:hover,\n.pure-button-disabled:focus,\n.pure-button-disabled:active {\n    border: none;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n    filter: alpha(opacity=40);\n    -khtml-opacity: 0.40;\n    -moz-opacity: 0.40;\n    opacity: 0.40;\n    cursor: not-allowed;\n    box-shadow: none;\n}\n\n.pure-button-hidden {\n    display: none;\n}\n\n/* Firefox: Get rid of the inner focus border */\n.pure-button::-moz-focus-inner{\n    padding: 0;\n    border: 0;\n}\n\n.pure-button-primary,\n.pure-button-selected,\na.pure-button-primary,\na.pure-button-selected {\n    background-color: rgb(0, 120, 231);\n    color: #fff;\n}\n\n.pure-form input[type=\"text\"],\n.pure-form input[type=\"password\"],\n.pure-form input[type=\"email\"],\n.pure-form input[type=\"url\"],\n.pure-form input[type=\"date\"],\n.pure-form input[type=\"month\"],\n.pure-form input[type=\"time\"],\n.pure-form input[type=\"datetime\"],\n.pure-form input[type=\"datetime-local\"],\n.pure-form input[type=\"week\"],\n.pure-form input[type=\"number\"],\n.pure-form input[type=\"search\"],\n.pure-form input[type=\"tel\"],\n.pure-form input[type=\"color\"],\n.pure-form select,\n.pure-form textarea {\n    padding: 0.5em 0.6em;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-shadow: inset 0 1px 3px #ddd;\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.pure-form input:not([type]) {\n    padding: 0.5em 0.6em;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-shadow: inset 0 1px 3px #ddd;\n    border-radius: 4px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n\n/* Chrome (as of v.32/34 on OS X) needs additional room for color to display. */\n/* May be able to remove this tweak as color inputs become more standardized across browsers. */\n.pure-form input[type=\"color\"] {\n    padding: 0.2em 0.5em;\n}\n\n\n.pure-form input[type=\"text\"]:focus,\n.pure-form input[type=\"password\"]:focus,\n.pure-form input[type=\"email\"]:focus,\n.pure-form input[type=\"url\"]:focus,\n.pure-form input[type=\"date\"]:focus,\n.pure-form input[type=\"month\"]:focus,\n.pure-form input[type=\"time\"]:focus,\n.pure-form input[type=\"datetime\"]:focus,\n.pure-form input[type=\"datetime-local\"]:focus,\n.pure-form input[type=\"week\"]:focus,\n.pure-form input[type=\"number\"]:focus,\n.pure-form input[type=\"search\"]:focus,\n.pure-form input[type=\"tel\"]:focus,\n.pure-form input[type=\"color\"]:focus,\n.pure-form select:focus,\n.pure-form textarea:focus {\n    outline: 0;\n    outline: thin dotted \\9; /* IE6-9 */\n    border-color: #129FEA;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.pure-form input:not([type]):focus {\n    outline: 0;\n    outline: thin dotted \\9; /* IE6-9 */\n    border-color: #129FEA;\n}\n\n.pure-form input[type=\"file\"]:focus,\n.pure-form input[type=\"radio\"]:focus,\n.pure-form input[type=\"checkbox\"]:focus {\n    outline: thin dotted #333;\n    outline: 1px auto #129FEA;\n}\n.pure-form .pure-checkbox,\n.pure-form .pure-radio {\n    margin: 0.5em 0;\n    display: block;\n}\n\n.pure-form input[type=\"text\"][disabled],\n.pure-form input[type=\"password\"][disabled],\n.pure-form input[type=\"email\"][disabled],\n.pure-form input[type=\"url\"][disabled],\n.pure-form input[type=\"date\"][disabled],\n.pure-form input[type=\"month\"][disabled],\n.pure-form input[type=\"time\"][disabled],\n.pure-form input[type=\"datetime\"][disabled],\n.pure-form input[type=\"datetime-local\"][disabled],\n.pure-form input[type=\"week\"][disabled],\n.pure-form input[type=\"number\"][disabled],\n.pure-form input[type=\"search\"][disabled],\n.pure-form input[type=\"tel\"][disabled],\n.pure-form input[type=\"color\"][disabled],\n.pure-form select[disabled],\n.pure-form textarea[disabled] {\n    cursor: not-allowed;\n    background-color: #eaeded;\n    color: #cad2d3;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.pure-form input:not([type])[disabled] {\n    cursor: not-allowed;\n    background-color: #eaeded;\n    color: #cad2d3;\n}\n.pure-form input[readonly],\n.pure-form select[readonly],\n.pure-form textarea[readonly] {\n    background: #eee; /* menu hover bg color */\n    color: #777; /* menu text color */\n    border-color: #ccc;\n}\n\n.pure-form input:focus:invalid,\n.pure-form textarea:focus:invalid,\n.pure-form select:focus:invalid {\n    color: #b94a48;\n    border-color: #ee5f5b;\n}\n.pure-form input:focus:invalid:focus,\n.pure-form textarea:focus:invalid:focus,\n.pure-form select:focus:invalid:focus {\n    border-color: #e9322d;\n}\n.pure-form input[type=\"file\"]:focus:invalid:focus,\n.pure-form input[type=\"radio\"]:focus:invalid:focus,\n.pure-form input[type=\"checkbox\"]:focus:invalid:focus {\n    outline-color: #e9322d;\n}\n.pure-form select {\n    border: 1px solid #ccc;\n    background-color: white;\n}\n.pure-form select[multiple] {\n    height: auto;\n}\n.pure-form label {\n    margin: 0.5em 0 0.2em;\n}\n.pure-form fieldset {\n    margin: 0;\n    padding: 0.35em 0 0.75em;\n    border: 0;\n}\n.pure-form legend {\n    display: block;\n    width: 100%;\n    padding: 0.3em 0;\n    margin-bottom: 0.3em;\n    color: #333;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.pure-form-stacked input[type=\"text\"],\n.pure-form-stacked input[type=\"password\"],\n.pure-form-stacked input[type=\"email\"],\n.pure-form-stacked input[type=\"url\"],\n.pure-form-stacked input[type=\"date\"],\n.pure-form-stacked input[type=\"month\"],\n.pure-form-stacked input[type=\"time\"],\n.pure-form-stacked input[type=\"datetime\"],\n.pure-form-stacked input[type=\"datetime-local\"],\n.pure-form-stacked input[type=\"week\"],\n.pure-form-stacked input[type=\"number\"],\n.pure-form-stacked input[type=\"search\"],\n.pure-form-stacked input[type=\"tel\"],\n.pure-form-stacked input[type=\"color\"],\n.pure-form-stacked select,\n.pure-form-stacked label,\n.pure-form-stacked textarea {\n    display: block;\n    margin: 0.25em 0;\n}\n\n/*\nNeed to separate out the :not() selector from the rest of the CSS 2.1 selectors\nsince IE8 won't execute CSS that contains a CSS3 selector.\n*/\n.pure-form-stacked input:not([type]) {\n    display: block;\n    margin: 0.25em 0;\n}\n.pure-form-aligned input,\n.pure-form-aligned textarea,\n.pure-form-aligned select,\n/* NOTE: pure-help-inline is deprecated. Use .pure-form-message-inline instead. */\n.pure-form-aligned .pure-help-inline,\n.pure-form-message-inline {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    vertical-align: middle;\n}\n.pure-form-aligned textarea {\n    vertical-align: top;\n}\n\n/* Aligned Forms */\n.pure-form-aligned .pure-control-group {\n    margin-bottom: 0.5em;\n}\n.pure-form-aligned .pure-control-group label {\n    text-align: right;\n    display: inline-block;\n    vertical-align: middle;\n    width: 10em;\n    margin: 0 1em 0 0;\n}\n.pure-form-aligned .pure-controls {\n    margin: 1.5em 0 0 10em;\n}\n\n/* Rounded Inputs */\n.pure-form input.pure-input-rounded,\n.pure-form .pure-input-rounded {\n    border-radius: 2em;\n    padding: 0.5em 1em;\n}\n\n/* Grouped Inputs */\n.pure-form .pure-group fieldset {\n    margin-bottom: 10px;\n}\n.pure-form .pure-group input {\n    display: block;\n    padding: 10px;\n    margin: 0;\n    border-radius: 0;\n    position: relative;\n    top: -1px;\n}\n.pure-form .pure-group input:focus {\n    z-index: 2;\n}\n.pure-form .pure-group input:first-child {\n    top: 1px;\n    border-radius: 4px 4px 0 0;\n}\n.pure-form .pure-group input:last-child {\n    top: -2px;\n    border-radius: 0 0 4px 4px;\n}\n.pure-form .pure-group button {\n    margin: 0.35em 0;\n}\n\n.pure-form .pure-input-1 {\n    width: 100%;\n}\n.pure-form .pure-input-2-3 {\n    width: 66%;\n}\n.pure-form .pure-input-1-2 {\n    width: 50%;\n}\n.pure-form .pure-input-1-3 {\n    width: 33%;\n}\n.pure-form .pure-input-1-4 {\n    width: 25%;\n}\n\n/* Inline help for forms */\n/* NOTE: pure-help-inline is deprecated. Use .pure-form-message-inline instead. */\n.pure-form .pure-help-inline,\n.pure-form-message-inline {\n    display: inline-block;\n    padding-left: 0.3em;\n    color: #666;\n    vertical-align: middle;\n    font-size: 0.875em;\n}\n\n/* Block help for forms */\n.pure-form-message {\n    display: block;\n    color: #666;\n    font-size: 0.875em;\n}\n\n@media only screen and (max-width : 480px) {\n    .pure-form button[type=\"submit\"] {\n        margin: 0.7em 0 0;\n    }\n\n    .pure-form input:not([type]),\n    .pure-form input[type=\"text\"],\n    .pure-form input[type=\"password\"],\n    .pure-form input[type=\"email\"],\n    .pure-form input[type=\"url\"],\n    .pure-form input[type=\"date\"],\n    .pure-form input[type=\"month\"],\n    .pure-form input[type=\"time\"],\n    .pure-form input[type=\"datetime\"],\n    .pure-form input[type=\"datetime-local\"],\n    .pure-form input[type=\"week\"],\n    .pure-form input[type=\"number\"],\n    .pure-form input[type=\"search\"],\n    .pure-form input[type=\"tel\"],\n    .pure-form input[type=\"color\"],\n    .pure-form label {\n        margin-bottom: 0.3em;\n        display: block;\n    }\n\n    .pure-group input:not([type]),\n    .pure-group input[type=\"text\"],\n    .pure-group input[type=\"password\"],\n    .pure-group input[type=\"email\"],\n    .pure-group input[type=\"url\"],\n    .pure-group input[type=\"date\"],\n    .pure-group input[type=\"month\"],\n    .pure-group input[type=\"time\"],\n    .pure-group input[type=\"datetime\"],\n    .pure-group input[type=\"datetime-local\"],\n    .pure-group input[type=\"week\"],\n    .pure-group input[type=\"number\"],\n    .pure-group input[type=\"search\"],\n    .pure-group input[type=\"tel\"],\n    .pure-group input[type=\"color\"] {\n        margin-bottom: 0;\n    }\n\n    .pure-form-aligned .pure-control-group label {\n        margin-bottom: 0.3em;\n        text-align: left;\n        display: block;\n        width: 100%;\n    }\n\n    .pure-form-aligned .pure-controls {\n        margin: 1.5em 0 0 0;\n    }\n\n    /* NOTE: pure-help-inline is deprecated. Use .pure-form-message-inline instead. */\n    .pure-form .pure-help-inline,\n    .pure-form-message-inline,\n    .pure-form-message {\n        display: block;\n        font-size: 0.75em;\n        /* Increased bottom padding to make it group with its related input element. */\n        padding: 0.2em 0 0.8em;\n    }\n}\n\n/*csslint adjoining-classes:false, outline-none:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/\n\n.pure-menu ul {\n    position: absolute;\n    visibility: hidden;\n}\n\n.pure-menu.pure-menu-open {\n    visibility: visible;\n    z-index: 2;\n    width: 100%;\n}\n\n.pure-menu ul {\n    left: -10000px;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    top: -10000px;\n    z-index: 1;\n}\n\n.pure-menu > ul { position: relative; }\n\n.pure-menu-open > ul {\n    left: 0;\n    top: 0;\n    visibility: visible;\n}\n\n.pure-menu-open > ul:focus {\n    outline: 0;\n}\n\n.pure-menu li { position: relative; }\n\n.pure-menu a,\n.pure-menu .pure-menu-heading {\n    display: block;\n    color: inherit;\n    line-height: 1.5em;\n    padding: 5px 20px;\n    text-decoration: none;\n    white-space: nowrap;\n}\n\n.pure-menu.pure-menu-horizontal > .pure-menu-heading {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    margin: 0;\n    vertical-align: middle;\n}\n.pure-menu.pure-menu-horizontal > ul {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    vertical-align: middle;\n}\n\n.pure-menu li a { padding: 5px 20px; }\n\n.pure-menu-can-have-children > .pure-menu-label:after {\n    content: '\\25B8';\n    float: right;\n    /* These specific fonts have the Unicode char we need. */\n    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'DejaVu Sans', sans-serif;\n    margin-right: -20px;\n    margin-top: -1px;\n}\n\n.pure-menu-can-have-children > .pure-menu-label {\n    padding-right: 30px;\n}\n\n.pure-menu-separator {\n    background-color: #dfdfdf;\n    display: block;\n    height: 1px;\n    font-size: 0;\n    margin: 7px 2px;\n    overflow: hidden;\n}\n\n.pure-menu-hidden {\n    display: none;\n}\n\n/* FIXED MENU */\n.pure-menu-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n\n/* HORIZONTAL MENU CODE */\n\n/* Initial menus should be inline-block so that they are horizontal */\n.pure-menu-horizontal li {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    vertical-align: middle;\n}\n\n/* Submenus should still be display: block; */\n.pure-menu-horizontal li li {\n    display: block;\n}\n\n/* Content after should be down arrow */\n.pure-menu-horizontal > .pure-menu-children > .pure-menu-can-have-children > .pure-menu-label:after {\n    content: \"\\25BE\";\n}\n/*Add extra padding to elements that have the arrow so that the hover looks nice */\n.pure-menu-horizontal > .pure-menu-children > .pure-menu-can-have-children > .pure-menu-label {\n    padding-right: 30px;\n}\n\n/* Adjusting separator for vertical menus */\n.pure-menu-horizontal li.pure-menu-separator {\n    height: 50%;\n    width: 1px;\n    margin: 0 7px;\n}\n\n/* Submenus should be horizontal separator again */\n.pure-menu-horizontal li li.pure-menu-separator {\n    height: 1px;\n    width: auto;\n    margin: 7px 2px;\n}\n\n\n/*csslint adjoining-classes:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/\n\n/* MAIN MENU STYLING */\n\n.pure-menu.pure-menu-open,\n.pure-menu.pure-menu-horizontal li .pure-menu-children {\n    background: #fff; /* Old browsers */\n    border: 1px solid #b7b7b7;\n}\n\n/* remove borders for horizontal menus */\n.pure-menu.pure-menu-horizontal,\n.pure-menu.pure-menu-horizontal .pure-menu-heading {\n    border: none;\n}\n\n\n/* LINK STYLES */\n\n.pure-menu a {\n    border: 1px solid transparent;\n    border-left: none;\n    border-right: none;\n\n}\n\n.pure-menu a,\n.pure-menu .pure-menu-can-have-children > li:after {\n    color: #777;\n}\n\n.pure-menu .pure-menu-can-have-children > li:hover:after {\n    color: #fff;\n}\n\n/* Focus style for a dropdown menu-item when the parent has been opened */\n.pure-menu .pure-menu-open {\n    background: #dedede;\n}\n\n\n.pure-menu li a:hover,\n.pure-menu li a:focus {\n    background: #eee;\n}\n\n/* DISABLED STATES */\n.pure-menu li.pure-menu-disabled a:hover,\n.pure-menu li.pure-menu-disabled a:focus {\n    background: #fff;\n    color: #bfbfbf;\n}\n\n.pure-menu .pure-menu-disabled > a {\n    background-image: none;\n    border-color: transparent;\n    cursor: default;\n}\n\n.pure-menu .pure-menu-disabled > a,\n.pure-menu .pure-menu-can-have-children.pure-menu-disabled > a:after {\n    color: #bfbfbf;\n}\n\n/* HEADINGS */\n.pure-menu .pure-menu-heading {\n    color: #565d64;\n    text-transform: uppercase;\n    font-size: 90%;\n    margin-top: 0.5em;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #dfdfdf;\n}\n\n/* ACTIVE MENU ITEM */\n.pure-menu .pure-menu-selected a {\n    color: #000;\n}\n\n/* FIXED MENU */\n.pure-menu.pure-menu-open.pure-menu-fixed {\n    border: none;\n    border-bottom: 1px solid #b7b7b7;\n}\n\n/*csslint box-model:false*/\n/*TODO: Remove this lint rule override after a refactor of this code.*/\n\n\n.pure-paginator {\n\n    /* `pure-g` Grid styles */\n    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */\n    *letter-spacing: normal; /* reset IE < 8 */\n    *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */\n    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */\n\n    /* `pure-paginator` Specific styles */\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.opera-only :-o-prefocus,\n.pure-paginator {\n    word-spacing: -0.43em;\n}\n\n/* `pure-u` Grid styles */\n.pure-paginator li {\n    display: inline-block;\n    *display: inline; /* IE < 8: fake inline-block */\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n}\n\n\n.pure-paginator .pure-button {\n    border-radius: 0;\n    padding: 0.8em 1.4em;\n    vertical-align: top;\n    height: 1.1em;\n}\n.pure-paginator .pure-button:focus,\n.pure-paginator .pure-button:active {\n    outline-style: none;\n}\n.pure-paginator .prev,\n.pure-paginator .next {\n    color: #C0C1C3;\n    text-shadow: 0 -1px 0 rgba(0,0,0, 0.45);\n}\n.pure-paginator .prev {\n    border-radius: 2px 0 0 2px;\n}\n.pure-paginator .next {\n    border-radius: 0 2px 2px 0;\n}\n\n@media (max-width: 480px) {\n    .pure-menu-horizontal {\n        width: 100%;\n    }\n\n    .pure-menu-children li {\n        display: block;\n        border-bottom: 1px solid black;\n    }\n}\n\n.pure-table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid #cbcbcb;\n}\n\n.pure-table caption {\n    color: #000;\n    font: italic 85%/1 arial, sans-serif;\n    padding: 1em 0;\n    text-align: center;\n}\n\n.pure-table td,\n.pure-table th {\n    border-left: 1px solid #cbcbcb;/*  inner column border */\n    border-width: 0 0 0 1px;\n    font-size: inherit;\n    margin: 0;\n    overflow: visible; /*to make ths where the title is really long work*/\n    padding: 0.5em 1em; /* cell padding */\n}\n.pure-table td:first-child,\n.pure-table th:first-child {\n    border-left-width: 0;\n}\n\n.pure-table thead {\n    background: #e0e0e0;\n    color: #000;\n    text-align: left;\n    vertical-align: bottom;\n}\n\n/*\nstriping:\n   even - #fff (white)\n   odd  - #f2f2f2 (light gray)\n*/\n.pure-table td {\n    background-color: transparent;\n}\n.pure-table-odd td {\n    background-color: #f2f2f2;\n}\n\n/* nth-child selector for modern browsers */\n.pure-table-striped tr:nth-child(2n-1) td {\n    background-color: #f2f2f2;\n}\n\n/* BORDERED TABLES */\n.pure-table-bordered td {\n    border-bottom: 1px solid #cbcbcb;\n}\n.pure-table-bordered tbody > tr:last-child > td {\n    border-bottom-width: 0;\n}\n\n\n/* HORIZONTAL BORDERED TABLES */\n\n.pure-table-horizontal td,\n.pure-table-horizontal th {\n    border-width: 0 0 1px 0;\n    border-bottom: 1px solid #cbcbcb;\n}\n.pure-table-horizontal tbody > tr:last-child > td {\n    border-bottom-width: 0;\n}\n"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],4:[function(require,module,exports){
require('./css/default.css');
require('./css/purecss-0.5.0.css');
require('./css/pure-finetuned.css');
},{"./css/default.css":1,"./css/pure-finetuned.css":2,"./css/purecss-0.5.0.css":3}],5:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],6:[function(require,module,exports){
"use strict";

/**
 * Integrates DOM-events to event. more about DOM-events:
 * http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @example
 * Event = require('event-dom')(window);
 *
 * @module event
 * @submodule event-dom
 * @class Event
 * @since 0.0.1
*/


var NAME = '[event-dom]: ',
    Event = require('event'),
    laterSilent = require('utils').laterSilent,
    OUTSIDE = 'outside',
    REGEXP_NODE_ID = /^#\S+$/,
    REGEXP_EXTRACT_NODE_ID = /#(\S+)/,
    REGEXP_UI_OUTSIDE = /^.+outside$/,
    TIME_BTN_PRESSED = 200,
    PURE_BUTTON_ACTIVE = 'pure-button-active',
    UI = 'UI:',
    NODE = 'node',
    REMOVE = 'remove',
    INSERT = 'insert',
    CHANGE = 'change',
    ATTRIBUTE = 'attribute',
    EV_REMOVED = UI+NODE+REMOVE,
    EV_INSERTED = UI+NODE+INSERT,
    EV_CONTENT_CHANGE = UI+NODE+'content'+CHANGE,
    EV_ATTRIBUTE_REMOVED = UI+ATTRIBUTE+REMOVE,
    EV_ATTRIBUTE_CHANGED = UI+ATTRIBUTE+CHANGE,
    EV_ATTRIBUTE_INSERTED = UI+ATTRIBUTE+INSERT,
    mutationEventsDefined = false,

    /*
     * Internal hash containing all DOM-events that are listened for (at `document`).
     *
     * DOMEvents = {
     *     'click': callbackFn,
     *     'mousemove': callbackFn,
     *     'keypress': callbackFn
     * }
     *
     * @property DOMEvents
     * @default {}
     * @type Object
     * @private
     * @since 0.0.1
    */
    DOMEvents = {};

    require('js-ext/lib/string.js');
    require('js-ext/lib/array.js');
    require('js-ext/lib/object.js');
    require('polyfill/polyfill-base.js');

module.exports = function (window) {
    var DOCUMENT = window.document,
        _domSelToFunc, _evCallback, _findCurrentTargets, _preProcessor, _setupEvents, _setupMutationListener, _teardownMutationListener,
        _setupDomListener, _teardownDomListener, SORT, _sortFunc, _sortFuncReversed, _getSubscribers, _selToFunc, MUTATION_EVENTS;

    require('vdom')(window);

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.EventDom) {
        return Event; // Event was already extended
    }

    MUTATION_EVENTS = [EV_REMOVED, EV_INSERTED, EV_CONTENT_CHANGE, EV_ATTRIBUTE_REMOVED, , EV_ATTRIBUTE_CHANGED, EV_ATTRIBUTE_INSERTED];

    /*
     * Transfprms the selector to a valid function
     *
     * @method _evCallback
     * @param customEvent {String} the customEvent that is transported to the eventsystem
     * @param subscriber {Object} subscriber
     * @param subscriber.o {Object} context
     * @param subscriber.cb {Function} callbackFn
     * @param subscriber.f {Function|String} filter
     * @private
     * @since 0.0.1
     */
    _selToFunc = function(customEvent, subscriber) {
        Event._sellist.some(function(selFn) {
            return selFn(customEvent, subscriber);
        });
    };

    /*
     * Creates a filterfunction out of a css-selector. To be used for catching any dom-element, without restrictions
     * of any context (like Parcels can --> Parcel.Event uses _parcelSelToDom instead)
     * On "non-outside" events, subscriber.t is set to the node that first matches the selector
     * so it can be used to set as e.target in the final subscriber
     *
     * @method _domSelToFunc
     * @param customEvent {String} the customEvent that is transported to the eventsystem
     * @param subscriber {Object} subscriber
     * @param subscriber.o {Object} context
     * @param subscriber.cb {Function} callbackFn
     * @param subscriber.f {Function|String} filter
     * @private
     * @since 0.0.1
     */
    _domSelToFunc = function(customEvent, subscriber) {
        // this stage is runned during subscription
        var outsideEvent = REGEXP_UI_OUTSIDE.test(customEvent),
            selector = subscriber.f,
            context = subscriber.o,
            isCustomElement = subscriber.o._isCustomElement,
            nodeid, byExactId;

        console.log(NAME, '_domSelToFunc type of selector = '+typeof selector);
        // note: selector could still be a function: in case another subscriber
        // already changed it.
        if ((!selector && !isCustomElement) || (typeof selector === 'function')) {
            subscriber.n || (subscriber.n = isCustomElement ? context : DOCUMENT);
            return true;
        }
        selector || (selector='');

        nodeid = selector.match(REGEXP_EXTRACT_NODE_ID);
        nodeid ? (subscriber.nId=nodeid[1]) : (subscriber.n=isCustomElement ? context : DOCUMENT);
        byExactId = REGEXP_NODE_ID.test(selector);

        subscriber.f = function(e) {
            // this stage is runned when the event happens
            console.log(NAME, '_domSelToFunc inside filter. selector: '+selector);
            var node = e.target,
                vnode = node.vnode,
                character1 = selector && selector.substr(1),
                match = false;
            if (!subscriber.o._isCustomElement || subscriber.o.contains(node)) {
                if (selector==='') {
                    match = true;
                }
                else {
                    // e.target is the most deeply node in the dom-tree that caught the event
                    // our listener uses `selector` which might be a node higher up the tree.
                    // we will reset e.target to this node (if there is a match)
                    // note that e.currentTarget will always be `document` --> we're not interested in that
                    // also, we don't check for `node`, but for node.matchesSelector: the highest level `document`
                    // is not null, yet it doesn;t have .matchesSelector so it would fail
                    if (vnode) {
                        // we go through the vdom
                        if (!vnode.removedFromDOM) {
                            while (vnode && !match) {
                                console.log(NAME, '_domSelToFunc inside filter check match using the vdom');
                                match = byExactId ? (vnode.id===character1) : vnode.matchesSelector(selector);
                                // if there is a match, then set
                                // e.target to the target that matches the selector
                                if (match && !outsideEvent) {
                                    subscriber.t = vnode.domNode;
                                }
                                vnode = vnode.vParent;
                            }
                        }
                    }
                    else {
                        // we go through the dom
                        while (node.matchesSelector && !match) {
                            console.log(NAME, '_domSelToFunc inside filter check match using the dom');
                            match = byExactId ? (node.id===character1) : node.matchesSelector(selector);
                            // if there is a match, then set
                            // e.target to the target that matches the selector
                            if (match && !outsideEvent) {
                                subscriber.t = node;
                            }
                            node = node.parentNode;
                        }
                    }
                }
            }
            console.log(NAME, '_domSelToFunc filter returns '+(!outsideEvent ? match : !match));
            return !outsideEvent ? match : !match;
        };
        return true;
    };

    // at this point, we need to find out what are the current node-refs. whenever there is
    // a filter that starts with `#` --> in those cases we have a bubble-chain, because the selector isn't
    // set up with `document` at its root.
    // we couldn't do this at time of subscribtion, for the nodes might not be there at that time.
    // however, we only need to do this once: we store the value if we find them
    // no problem when the nodes leave the dom later: the previous filter wouldn't pass
    _findCurrentTargets = function(subscribers) {
        console.log(NAME, '_findCurrentTargets');
        subscribers.forEach(
            function(subscriber) {
                console.log(NAME, '_findCurrentTargets for single subscriber. nId: '+subscriber.nId);
                subscriber.nId && (subscriber.n=DOCUMENT.getElementById(subscriber.nId));
            }
        );
    };

    /*
     * Generates an event through our Event-system. Does the actual transportation from DOM-events
     * into our Eventsystem. It also looks at the response of our Eventsystem: if our system
     * halts or preventDefaults the customEvent, then the original DOM-event will be preventDefaulted.
     *
     * @method _evCallback
     * @param e {Object} eventobject
     * @private
     * @since 0.0.1
     */
    _evCallback = function(e) {
        console.log(NAME, '_evCallback');
        var allSubscribers = Event._subs,
            eventName = e.type,
            customEvent = 'UI:'+eventName,
            eventobject, subs, wildcard_named_subs, named_wildcard_subs, wildcard_wildcard_subs, subsOutside,
            subscribers, eventobjectOutside, wildcard_named_subsOutside;

        subs = allSubscribers[customEvent];
        wildcard_named_subs = allSubscribers['*:'+eventName];
        named_wildcard_subs = allSubscribers['UI:*'];
        wildcard_wildcard_subs = allSubscribers['*:*'];

        // Emit the dom-event though our eventsystem:
        // NOTE: emit() needs to be synchronous! otherwise we wouldn't be able
        // to preventDefault in time
        //
        // e = eventobject from the DOM-event OR gesture-event
        // eventobject = eventobject from our Eventsystem, which get returned by calling `emit()`

        subscribers = _getSubscribers(e, true, subs, wildcard_named_subs, named_wildcard_subs, wildcard_wildcard_subs);
        eventobject = Event._emit(e.target, customEvent, e, subscribers, [], _preProcessor);

        // now check outside subscribers
        subsOutside = allSubscribers[customEvent+OUTSIDE];
        wildcard_named_subsOutside = allSubscribers['*:'+eventName+OUTSIDE];
        subscribers = _getSubscribers(e, true, subsOutside, wildcard_named_subsOutside);
        eventobjectOutside = Event._emit(e.target, customEvent+OUTSIDE, e, subscribers, [], _preProcessor);

        // if eventobject was preventdefaulted or halted: take appropriate action on
        // the original dom-event. Note: only the original event can caused this, not the outsideevent
        // stopPropagation on the original eventobject has no impact on our eventsystem, but who know who else is watching...
        // be carefull though: not all gesture events have e.stopPropagation
        eventobject.status.halted && e.stopPropagation && e.stopPropagation();
        // now we might need to preventDefault the original event.
        // be carefull though: not all gesture events have e.preventDefault
        if ((eventobject.status.halted || eventobject.status.defaultPrevented || eventobject.status.defaultPreventedContinue) && e.preventDefault) {
            e.preventDefault();
        }

        if (eventobject.status.ok) {
            // last step: invoke the aftersubscribers
            // we need to do this asynchronous: this way we pass them AFTER the DOM-event's defaultFn
            // also make sure to paas-in the payload of the manipulated eventobject
            subscribers = _getSubscribers(e, false, subs, wildcard_named_subs, named_wildcard_subs, wildcard_wildcard_subs);
            (subscribers.length>0) && laterSilent(Event._emit.bind(Event, e.target, customEvent, eventobject, [], subscribers, _preProcessor, true), 10);

            // now check outside subscribers
            subscribers = _getSubscribers(e, false, subsOutside, wildcard_named_subsOutside);
            (subscribers.length>0) && laterSilent(Event._emit.bind(Event, e.target, customEvent+OUTSIDE, eventobjectOutside, [], subscribers, _preProcessor, true), 10);
        }
    };

    /*
     * Creates an array of subscribers in the right order, conform their position in the DOM.
     * Only subscribers that match the filter are involved.
     *
     * @method _getSubscribers
     * @param e {Object} eventobject
     * @param before {Boolean} whether it is a before- or after-subscriber
     * @param subs {Array} array with subscribers
     * @param wildcard_named_subs {Array} array with subscribers
     * @param named_wildcard_subs {Array} array with subscribers
     * @param wildcard_wildcard_subs {Array} array with subscribers
     * @private
     * @since 0.0.1
     */
    _getSubscribers = function(e, before, subs, wildcard_named_subs, named_wildcard_subs, wildcard_wildcard_subs) {
        var subscribers = [],
            beforeOrAfter = before ? 'b' : 'a',
            saveConcat = function(extrasubs) {
                extrasubs && extrasubs[beforeOrAfter] && (subscribers=subscribers.concat(extrasubs[beforeOrAfter]));
            };
        saveConcat(subs);
        saveConcat(wildcard_named_subs);
        saveConcat(named_wildcard_subs);
        saveConcat(wildcard_wildcard_subs);
        if (subscribers.length>0) {
            subscribers = function(array, testFunc) {
                // quickest way to filter an array: see http://jsperf.com/array-filter-performance/4
                var filtered = array.slice(0), i;
                for (i=array.length-1; i>=0; i--) {
                    console.log(NAME, 'filtercheck for subscriber');
                    testFunc(array[i]) || filtered.splice(i, 1);
                }
                return filtered;
            }(subscribers, function(subscriber) {return (!subscriber.f || subscriber.f.call(subscriber.o, e));});
            if (subscribers.length>0) {
                _findCurrentTargets(subscribers);
                // sorting, based upon the sortFn
                subscribers.sort(SORT);
            }
        }
        return subscribers;
    };

    /*
     * Sets e.target, e.currentTarget and e.sourceTarget for the single subscriber.
     * Needs to be done for evenry single subscriber, because with a single event, these values change for each subscriber
     *
     * @method _preProcessor
     * @param subscriber {Object} subscriber
     * @param subscriber.o {Object} context
     * @param subscriber.cb {Function} callbackFn
     * @param subscriber.f {Function|String} filter
     * @param e {Object} eventobject
     * @private
     * @since 0.0.1
     */
    _preProcessor = function(subscriber, e) {
        console.log(NAME, '_preProcessor');
        // inside the aftersubscribers, we may need exit right away.
        // this would be the case whenever stopPropagation or stopImmediatePropagation was called
        // in case the subscribernode equals the node on which stopImmediatePropagation was called: return true
        var propagationStopped, immediatePropagationStopped,
            targetnode = (subscriber.t || subscriber.n);

        immediatePropagationStopped = e.status.immediatePropagationStopped;
        if (immediatePropagationStopped && ((immediatePropagationStopped===targetnode) || !immediatePropagationStopped.contains(targetnode))) {
            console.log(NAME, '_preProcessor will return true because of immediatePropagationStopped');
            return true;
        }
        // in case the subscribernode does not fall within or equals the node on which stopPropagation was called: return true
        propagationStopped = e.status.propagationStopped;
        if (propagationStopped && (propagationStopped!==targetnode) && !propagationStopped.contains(targetnode)) {
            console.log(NAME, '_preProcessor will return true because of propagationStopped');
            return true;
        }

        e.currentTarget = subscriber.n;
        // now we might need to set e.target to the right node:
        // the filterfunction might have found the true domnode that should act as e.target
        // and set it at subscriber.t
        // also, we need to backup the original e.target: this one should be reset when
        // we encounter a subscriber with its own filterfunction instead of selector
        if (subscriber.t) {
            e.sourceTarget || (e.sourceTarget=e.target);
            e.target = subscriber.t;
        }
        else {
            e.sourceTarget && (e.target=e.sourceTarget);
        }
        return false;
    };

    /*
     * Transports DOM-events to the Event-system. Catches events at their most early stage:
     * their capture-phase. When these events happen, a new customEvent is generated by our own
     * Eventsystem, by calling _evCallback(). This way we keep DOM-events and our Eventsystem completely separated.
     *
     * @method _setupDomListener
     * @param customEvent {String} the customEvent that is transported to the eventsystem
     * @param subscriber {Object} subscriber
     * @param subscriber.o {Object} context
     * @param subscriber.cb {Function} callbackFn
     * @param subscriber.f {Function|String} filter
     * @private
     * @since 0.0.1
     */
    _setupDomListener = function(customEvent, subscriber) {
        console.log(NAME, '_setupDomListener');
        var eventSplitted = customEvent.split(':'),
            eventName = eventSplitted[1],
            outsideEvent = REGEXP_UI_OUTSIDE.test(eventName);

        // be careful: anyone could also register an `outside`-event.
        // in those cases, the DOM-listener must be set up without `outside`
        outsideEvent && (eventName=eventName.substring(0, eventName.length-7));

        // if eventName equals `mouseover` or `mouseleave` then we quit:
        // people should use `mouseover` and `mouseout`
        if ((eventName==='mouseenter') || (eventName==='mouseleave')) {
            console.warn(NAME, 'Subscription to '+eventName+' not supported, use mouseover and mouseout: this eventsystem uses these non-noisy so they act as mouseenter and mouseleave');
            return;
        }

        // now transform the subscriber's filter from css-string into a filterfunction
        _selToFunc(customEvent, subscriber);

        // already registered? then return, also return if someone registered for UI:*
        if (DOMEvents[eventName] || (eventName==='*')) {
            // cautious: one might have registered the event, but not yet the outsideevent.
            // in that case: save this setting:
            outsideEvent && (DOMEvents[eventName+OUTSIDE]=true);
            return;
        }

        // one exception: windowresize should listen to the window-object
        if (eventName==='resize') {
            window.addEventListener(eventName, _evCallback);
        }
        else {
            // important: set the third argument `true` so we listen to the capture-phase.
            DOCUMENT.addEventListener(eventName, _evCallback, true);
        }
        DOMEvents[eventName] = true;
        outsideEvent && (DOMEvents[eventName+OUTSIDE]=true);
    };

    _setupEvents = function() {

        // make sure disabled buttons don't work:
        Event.before(['click', 'tap'], function(e) {
            e.preventDefault();
        }, '.pure-button-disabled, button[disabled]');

        // make sure that a focussed button which recieves an keypress also fires the `tap`-event
        // note: the `click`-event will always be fired by the browser
        Event.before(
            'keydown',
            function(e) {
                e._buttonPressed = true;
                Event.emit(e.target, 'UI:tap', e);
            },
            function(e) {
                var keyCode = e.keyCode;
                return (e.target.getTagName()==='BUTTON') && ((keyCode===13) || (keyCode===32));
            }
        );

        // make sure that a focussed button which recieves an keypress also fires the `tap`-event
        // note: the `click`-event will always be fired by the browser
        Event.after(
            'tap',
            function(e) {
                var buttonNode = e.target;
                if (e._buttonPressed) {
                    buttonNode.setClass(PURE_BUTTON_ACTIVE);
                    // even if the node isn't in the DOM, we can still try to manipulate it:
                    // the vdom makes sure no errors occur when the node is already removed
                    laterSilent(buttonNode.removeClass.bind(buttonNode, PURE_BUTTON_ACTIVE), TIME_BTN_PRESSED);
                }
            }
        );

    };

    _setupMutationListener = function() {
        DOCUMENT.hasMutationSubs = true;
        if (!mutationEventsDefined) {
            Event.defineEvent(EV_REMOVED).unPreventable().noRender();
            Event.defineEvent(EV_INSERTED).unPreventable().noRender();
            Event.defineEvent(EV_CONTENT_CHANGE).unPreventable().noRender();
            Event.defineEvent(EV_ATTRIBUTE_REMOVED).unPreventable().noRender();
            Event.defineEvent(EV_ATTRIBUTE_CHANGED).unPreventable().noRender();
            Event.defineEvent(EV_ATTRIBUTE_INSERTED).unPreventable().noRender();
            mutationEventsDefined = true;
        }
    };

    /*
     *
     * @method _sortFunc
     * @param customEvent {String}
     * @private
     * @return {Function|undefined} sortable function
     * @since 0.0.1
     */
    _sortFunc = function(subscriberOne, subscriberTwo) {
        return (subscriberTwo.t || subscriberTwo.n).contains(subscriberOne.t || subscriberOne.n) ? -1 : 1;
    };

    /*
     *
     * @method _sortFunc
     * @param customEvent {String}
     * @private
     * @return {Function|undefined} sortable function
     * @since 0.0.1
     */
    _sortFuncReversed = function(subscriberOne, subscriberTwo) {
        return (subscriberOne.t || subscriberOne.n).contains(subscriberTwo.t || subscriberTwo.n) ? 1 : -1;
    };

    /*
     * Removes DOM-eventsubscribers from document when they are no longer needed.
     *
     * @method _teardownDomListener
     * @param customEvent {String} the customEvent that is transported to the eventsystem
     * @private
     * @since 0.0.2
     */
    _teardownDomListener = function(customEvent) {
        var customEventWithoutOutside = customEvent.endsWith(OUTSIDE) ? customEvent.substr(0, customEvent.length-7) : customEvent,
            eventSplitted = customEventWithoutOutside.split(':'),
            eventName = eventSplitted[1];

        if (!Event._subs[customEventWithoutOutside] && !Event._subs[customEventWithoutOutside+OUTSIDE]) {
            console.log(NAME, '_teardownDomListener '+customEvent);
            // remove eventlistener from `document`
            // one exeption: windowresize should listen to the window-object
            if (eventName==='resize') {
                window.removeEventListener(eventName, _evCallback);
            }
            else {
                // important: set the third argument `true` so we listen to the capture-phase.
                DOCUMENT.removeEventListener(eventName, _evCallback, true);
            }
            delete DOMEvents[eventName];
        }
    };

    _teardownMutationListener = function() {
        if (!Event._subs[EV_REMOVED] &&
            !Event._subs[EV_INSERTED] &&
            !Event._subs[EV_CONTENT_CHANGE] &&
            !Event._subs[EV_ATTRIBUTE_REMOVED] &&
            !Event._subs[EV_ATTRIBUTE_CHANGED] &&
            !Event._subs[EV_ATTRIBUTE_INSERTED]
        ) {
            DOCUMENT.hasMutationSubs = false;
        }
    };

    // Now a very tricky one:
    // Some browsers do an array.sort down-top instead of top-down.
    // In those cases we need another sortFn, for the position on an equal match should fall
    // behind instead of before (which is the case on top-down sort)
    [1,2].sort(function(a /*, b */) {
        SORT || (SORT=(a===2) ? _sortFuncReversed : _sortFunc);
    });

    // Now we do some initialization in order to make DOM-events work:

    // Notify when someone subscribes to an UI:* event
    // if so: then we might need to define a customEvent for it:
    // alse define the specific DOM-methods that can be called on the eventobject: `stopPropagation` and `stopImmediatePropagation`
    Event.notify(UI+'*', _setupDomListener, Event)
         ._setEventObjProperty('stopPropagation', function() {this.status.ok || (this.status.propagationStopped = this.target);})
         ._setEventObjProperty('stopImmediatePropagation', function() {this.status.ok || (this.status.immediatePropagationStopped = this.target);});

    // Notify when someone detaches an UI:* event
    // if so: then we might need to detach the native listener on `document`
    Event.notifyDetach(UI+'*', _teardownDomListener, Event);

    Event._sellist = [_domSelToFunc];

    _setupEvents();

    // making HTMLElement to be able to emit using event-emitter:
    (function(HTMLElementPrototype) {
        HTMLElementPrototype.merge(Event.Emitter('UI'));
        HTMLElementPrototype._isCustomElement = true;
    }(window.HTMLElement.prototype));








    // Notify when someone subscribes to an UI:* event
    // if so: then we might need to define a customEvent for it:
    // alse define the specific DOM-methods that can be called on the eventobject: `stopPropagation` and `stopImmediatePropagation`
    Event.notify(MUTATION_EVENTS, _setupMutationListener, Event);

    // Notify when someone detaches an UI:* event
    // if so: then we might need to detach the native listener on `document`
    Event.notifyDetach(MUTATION_EVENTS, _teardownMutationListener, Event);

    // Note: window.document has no prototype
    DOCUMENT.suppressMutationEvents = function(suppress) {
        this._suppressMutationEvents = suppress;
    };






    // Event._domCallback is the only method that is added to Event.
    // We need to do this, because `event-mobile` needs access to the same method.
    // We could have done without this method and instead listen for a custom-event to handle
    // Mobile events, however, that would lead into 2 eventcycli which isn't performant.

   /**
    * Does the actual transportation from DOM-events into the Eventsystem. It also looks at the response of
    * the Eventsystem: on e.halt() or e.preventDefault(), the original DOM-event will be preventDefaulted.
    *
    * @method _domCallback
    * @param eventName {String} the customEvent that is transported to the eventsystem
    * @param e {Object} eventobject
    * @private
    * @since 0.0.1
    */
    Event._domCallback = function(e) {
        _evCallback(e);
    };

    // store module:
    window._ITSAmodules.EventDom = Event;
    return Event;
};

},{"event":10,"js-ext/lib/array.js":19,"js-ext/lib/object.js":20,"js-ext/lib/string.js":21,"polyfill/polyfill-base.js":27,"utils":28,"vdom":72}],7:[function(require,module,exports){
(function (global){
/**
 * Defines the Event-Class, which should be instantiated to get its functionality
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module event
 * @class Event
 * @constructor
 * @since 0.0.1
*/

require('polyfill/polyfill-base.js');
require('js-ext/lib/function.js');
require('js-ext/lib/object.js');

// to prevent multiple Event instances
// (which might happen: http://nodejs.org/docs/latest/api/modules.html#modules_module_caching_caveats)
// we make sure Event is defined only once. Therefore we bind it to `global` and return it if created before


(function (global, factory) {

    "use strict";

    global._ITSAmodules || Object.protectedProp(global, '_ITSAmodules', {});
    global._ITSAmodules.Event || (global._ITSAmodules.Event = factory());

    module.exports = global._ITSAmodules.Event;

}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this, function () {

    "use strict";

    var NAME = '[core-event]: ',
        REGEXP_CUSTOMEVENT = /^((?:\w|-)+):((?:\w|-)+)$/,
        REGEXP_WILDCARD_CUSTOMEVENT = /^(?:((?:(?:\w|-)+)|\*):)?((?:(?:\w|-)+)|\*)$/,
        /* REGEXP_WILDCARD_CUSTOMEVENT :
         *
         * valid:
         * 'red:save'
         * 'red:*'
         * '*:save'
         * '*:*'
         * 'save'
         *
         * invalid:
         * '*red:save'
         * 're*d:save'
         * 'red*:save'
         * 'red:*save'
         * 'red:sa*ve'
         * 'red:save*'
         * ':save'
         */
        REGEXP_EVENTNAME_WITH_SEMICOLON = /:((?:\w|-)+)$/,
        DEFINE_IMMUTAL_PROPERTY = function (obj, property, value) {
            Object.defineProperty(obj, property, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: value // `writable` is false means we cannot chance the value-reference, but we can change {} or [] its members
            });
        },
        Event;

    Event = {
        /**
         * Subscribes to a customEvent. The callback will be executed `after` the defaultFn.
         *
         * @static
         * @method after
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
         *        If `emitterName` is not defined, `UI` is assumed.
         * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
         *        as its only argument.
         * @param [context] {Object} the instance that subscribes to the event.
         *        any object can passed through, even those are not extended with event-listener methods.
         *        Note: Objects who are extended with listener-methods should use instance.after() instead.
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of after-subscribers.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @since 0.0.1
        */
        after: function(customEvent, callback, context, filter, prepend) {
            console.log(NAME, 'add after subscriber to: '+customEvent);
            return this._addMultiSubs(false, customEvent, callback, context, filter, prepend);
        },

        /**
         * Subscribes to a customEvent. The callback will be executed `before` the defaultFn.
         *
         * @static
         * @method before
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
         *        If `emitterName` is not defined, `UI` is assumed.
         * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
         *        as its only argument.
         * @param [context] {Object} the instance that subscribes to the event.
         *        any object can passed through, even those are not extended with event-listener methods.
         *        Note: Objects who are extended with listener-methods should use instance.before() instead.
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of before-subscribers.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @since 0.0.1
        */
        before: function(customEvent, callback, context, filter, prepend) {
            console.log(NAME, 'add before subscriber to: '+customEvent);
            return this._addMultiSubs(true, customEvent, callback, context, filter, prepend);
        },

        /**
         * Defines an emitterName into the instance (emitter).
         * This will add a protected property `_emitterName` to the instance.
         *
         * @static
         * @method defineEmitter
         * @param emitter {Object} instance that should hold the emitterName
         * @param emitterName {String} identifier that will be added when events are sent (`emitterName:eventName`)
         * @since 0.0.1
         */
        defineEmitter: function (emitter, emitterName) {
            console.log(NAME, 'defineEmitter: '+emitterName);
            // ennumerable MUST be set `true` to enable merging
            Object.defineProperty(emitter, '_emitterName', {
                configurable: false,
                enumerable: true,
                writable: false,
                value: emitterName
            });
        },

        /**
         * Defines a CustomEvent. If the eventtype already exists, it will not be overridden,
         * unless you force to assign with `.forceAssign()`
         *
         * The returned object comes with 8 methods which can be invoked chainable:
         *
         * <ul>
         *     <li>defaultFn() --> the default-function of the event</li>
         *     <li>preventedFn() --> the function that should be invoked when the event is defaultPrevented</li>
         *     <li>forceAssign() --> overrides any previous definition</li>
         *     <li>unHaltable() --> makes the customEvent cannot be halted</li>
         *     <li>unPreventable() --> makes the customEvent's defaultFn cannot be prevented</li>
         *     <li>unSilencable() --> makes that emitters cannot make this event to perform silently (using e.silent)</li>
         *     <li>unRenderPreventable() --> makes that the customEvent's render cannot be prevented</li>
         *     <li>noRender() --> prevents this customEvent from render the dom. Overrules unRenderPreventable()</li>
         * </ul>
         *
         * @static
         * @method defineEvent
         * @param customEvent {String} name of the customEvent conform the syntax: `emitterName:eventName`
         * @return {Object} with extra methods that can be chained:
         * <ul>
         *      <li>unPreventable() --> makes the customEvent's defaultFn cannot be prevented</li>
         *      <li>unRenderPreventable() --> makes that the customEvent's render cannot be prevented</li>
         *      <li>forceAssign() --> overrides any previous definition</li>
         *      <li>defaultFn() --> the default-function of the event</li>
         *      <li>preventedFn() --> the function that should be invoked when the event is defaultPrevented</li>
         *      <li>forceAssign() --> overrides any previous definition</li>
         *      <li>unHaltable() --> makes the customEvent cannot be halted</li>
         *      <li>unSilencable() --> makes that emitters cannot make this event to perform silently (using e.silent)</li>
         *      <li>noRender() --> prevents this customEvent from render the dom. Overrules unRenderPreventable()</li>
         * </ul>
         * @since 0.0.1
         */
        defineEvent: function (customEvent) {
            console.log(NAME, 'Events.defineEvent: '+customEvent);
            var instance = this,
                customevents = instance._ce,
                extract, exists, newCustomEvent;

            if (typeof customEvent!=='string') {
                console.error(NAME, 'defineEvent should have a String-type as argument');
                return;
            }
            extract = customEvent.match(REGEXP_CUSTOMEVENT);
            if (!extract) {
                console.error(NAME, 'defined Customevent '+customEvent+' does not match pattern');
                return;
            }
            newCustomEvent = {
                preventable: true,
                renderPreventable: true
            };
            exists = customevents[customEvent];
            // if customEvent not yet exists, we can add it
            // else, we might need to wait for `forceAssign` to be called
            if (!exists) {
                // we can add it
                customevents[customEvent] = newCustomEvent;
            }
            return {
                defaultFn: function(defFn) {
                    newCustomEvent.defaultFn = defFn;
                    return this;
                },
                preventedFn: function(prevFn) {
                    newCustomEvent.preventedFn = prevFn;
                    return this;
                },
                unHaltable: function() {
                    newCustomEvent.unHaltable = true;
                    return this;
                },
                unSilencable: function() {
                    newCustomEvent.unSilencable = true;
                    return this;
                },
                unPreventable: function() {
                    newCustomEvent.unPreventable = true;
                    return this;
                },
                unRenderPreventable: function() {
                    newCustomEvent.unRenderPreventable = true;
                    return this;
                },
                noRender: function() {
                    newCustomEvent.noRender = true;
                    return this;
                },
                forceAssign: function() {
                    // only needed when not yet added:
                    // exists || (customevents[customEvent]=newCustomEvent);
                    customevents[customEvent] = newCustomEvent;
                    return this;
                }
            };
        },

        /**
         * Detaches (unsubscribes) the listener from the specified customEvent.
         *
         * @static
         * @method detach
         * @param [listener] {Object} The instance that is going to detach the customEvent.
         *        When not passed through (or undefined), all customevents of all instances are detached
         * @param customEvent {String} conform the syntax: `emitterName:eventName`, wildcard `*` may be used for both
         *        `emitterName` as well as only `eventName`, in which case 'UI' will become the emitterName.
         *        Can be set as the only argument.
         * @since 0.0.1
        */
        detach: function(listener, customEvent) {
            console.log('detach instance-subscriber: '+customEvent);
            // (typeof listener === 'string') means: only `customEvent` passed through
            (typeof listener === 'string') ? this._removeSubscribers(undefined, listener) : this._removeSubscribers(listener, customEvent);
        },

        /**
         * Detaches (unsubscribes) the listener from all customevents.
         *
         * @static
         * @method detachAll
         * @param listener {Object} The instance that is going to detach the customEvent
         * @since 0.0.1
        */
        detachAll: function(listener) {
            console.log(NAME, 'detach '+(listener ? 'all instance-' : 'ALL')+' subscribers');
            var instance = this;
            if (listener) {
                instance._removeSubscribers(listener, '*:*');
            }
            else {
                // we cannot just redefine _subs, for it is set as readonly
                instance._subs.each(
                    function(value, key) {
                        delete instance._subs[key];
                    }
                );
            }
        },

        /**
         * Emits the event `eventName` on behalf of `emitter`, which becomes e.target in the eventobject.
         * During this process, all subscribers and the defaultFn/preventedFn get an eventobject passed through.
         * The eventobject is created with at least these properties:
         *
         * <ul>
         *     <li>e.target --> source that triggered the event (instance or DOM-node), specified by `emitter`</li>
         *     <li>e.type --> eventName</li>
         *     <li>e.emitter --> emitterName</li>
         *     <li>e.status --> status-information:
         *          <ul>
         *               <li>e.status.ok --> `true|false` whether the event got executed (not halted or defaultPrevented)</li>
         *               <li>e.status.defaultFn (optional) --> `true` if any defaultFn got invoked</li>
         *               <li>e.status.preventedFn (optional) --> `true` if any preventedFn got invoked</li>
         *               <li>e.status.rendered (optional) --> `true` the vDOM rendered the dom</li>
         *               <li>e.status.halted (optional) --> `reason|true` if the event got halted and optional the why</li>
         *               <li>e.status.defaultPrevented (optional) -->  `reason|true` if the event got defaultPrevented and optional the why</li>
         *               <li>e.status.renderPrevented (optional) -->  `reason|true` if the event got renderPrevented and optional the why</li>
         *          </ul>
         *     </li>
         * </ul>
         *
         * The optional `payload` is merged into the eventobject and could be used by the subscribers and the defaultFn/preventedFn.
         * If payload.silent is set true, the subscribers are not getting invoked: only the defaultFn.
         *
         * The eventobject also has these methods:
         *
         * <ul>
         *     <li>e.halt() --> stops immediate all actions: no mer subscribers are invoked, no defaultFn/preventedFn</li>
         *     <li>e.preventDefault() --> instead of invoking defaultFn, preventedFn will be invoked. No aftersubscribers</li>
         *     <li>e.preventRender() --> by default, any event will trigger the vDOM (if exists) to re-render, this can be prevented by calling e.preventRender()</li>
         * </ul>
         *
         * <ul>
         *     <li>First, before-subscribers are invoked: this is the place where you might call `e.halt()`, `a.preventDefault()` or `e.preventRender()`</li>
         *     <li>Next, defaultFn or preventedFn gets invoked, depending on whether e.halt() or a.preventDefault() has been called</li>
         *     <li>Next, after-subscribers get invoked (unless e.halt() or a.preventDefault() has been called)</li>
         *     <li>Finally, the finalization takes place: any subscribers are invoked, unless e.halt() or a.preventDefault() has been called</li>
         * <ul>
         *
         * @static
         * @method emit
         * @param [emitter] {Object} instance that emits the events
         * @param customEvent {String} Full customEvent conform syntax `emitterName:eventName`.
         *        `emitterName` is available as **e.emitter**, `eventName` as **e.type**.
         * @param payload {Object} extra payload to be added to the event-object
         * @return {Object|undefined} eventobject or undefined when the event was halted or preventDefaulted.
         * @since 0.0.1
         */
        emit: function (emitter, customEvent, payload) {
            var instance = this;
            if (typeof emitter === 'string') {
                // emit is called with signature emit(customEvent, payload)
                // thus the source-emitter is the Event-instance
                payload = customEvent;
                customEvent = emitter;
                emitter = instance;
            }
            return instance._emit(emitter, customEvent, payload);
        },

        /**
         * Adds a subscriber to the finalization-cycle, which happens after the after-subscribers.
         * Only get invoked when the cycle was not preventDefaulted or halted.
         *
         * @method finalize
         * @param finallySubscriber {Function} callback to be invoked
         *        Function recieves the eventobject as its only argument
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @since 0.0.1
         */
        finalize: function (finallySubscriber) {
            console.log(NAME, 'finalize');
            var finalHash = this._final;
            finalHash.push(finallySubscriber);
            return {
                detach: function() {
                    console.log(NAME, 'detach finalizer');
                    var index = finalHash.indexOf(finallySubscriber);
                    (index===-1) || finalHash.splice(index, 1);
                }
            };
        },

        /**
         * Creates a notifier for the customEvent.
         * You can use this to create delayed `defineEvents`. When the customEvent is called, the callback gets invoked
         * (even before the subsrcibers). Use this callback for delayed customEvent-definitions.
         *
         * Use **no** wildcards for the emitterName. You might use wildcards for the eventName. Without wildcards, the
         * notification will be unNotified (callback automaticly detached) on the first time the event occurs.

         * You **must** specify the full `emitterName:eventName` syntax.
         * The module `core-event-dom` uses `notify` to auto-define DOM-events (UI:*).
         *
         * @static
         * @method notify
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used only  for`eventName`.
         *        If `emitterName` should be defined.
         * @param callback {Function} subscriber: will be invoked when the customEvent is called (before any subscribers.
         *                 Recieves 2 arguments: the `customEvent` and `subscriber-object`.
         * @param context {Object} context of the callback
         * @param [once=false] {Boolean} whether the subscriptions should be removed after the first invokation
         * @chainable
         * @since 0.0.1
        */
        notify: function(customEvent, callback, context, once) {
            console.log(NAME, 'notify');
            var i, len, ce;
            Array.isArray(customEvent) || (customEvent=[customEvent]);
            len = customEvent.length;
            for (i=0; i<len; i++) {
                ce = customEvent[i];
                this._notifiers[ce] = {
                    cb: callback,
                    o: context,
                    r: once // r = remove automaticly
                };
            }
            return this;
        },

        /**
         * Creates a detach-notifier for the customEvent.
         * You can use this to get informed whenever a subscriber detaches.
         *
         * Use **no** wildcards for the emitterName. You might use wildcards for the eventName. Without wildcards, the
         * notification will be unNotified (callback automaticly detached) on the first time the event occurs.

         * You **must** specify the full `emitterName:eventName` syntax.
         * The module `core-event-dom` uses `notify` to auto-define DOM-events (UI:*).
         *
         * @static
         * @method notifyDetach
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used only  for`eventName`.
         *        If `emitterName` should be defined.
         * @param callback {Function} subscriber: will be invoked when the customEvent is called (before any subscribers.
         *                 Recieves 1 arguments: the `customEvent`.
         * @param context {Object} context of the callback
         * @param [once=false] {Boolean} whether the subscriptions should be removed after the first invokation
         * @chainable
         * @since 0.0.1
        */
        notifyDetach: function(customEvent, callback, context, once) {
            console.log(NAME, 'notifyDetach');
            var i, len, ce;
            Array.isArray(customEvent) || (customEvent=[customEvent]);
            len = customEvent.length;
            for (i=0; i<len; i++) {
                ce = customEvent[i];
                this._detachNotifiers[ce] = {
                    cb: callback,
                    o: context,
                    r: once // r = remove automaticly
                };
            }
            return this;
        },

        /**
         * Subscribes to a customEvent. The callback will be executed `after` the defaultFn.
         * The subscriber will be automaticly removed once the callback executed the first time.
         * No need to `detach()` (unless you want to undescribe before the first event)
         *
         * @static
         * @method onceAfter
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
         *        If `emitterName` is not defined, `UI` is assumed.
         * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
         *        as its only argument.
         * @param [context] {Object} the instance that subscribes to the event.
         *        any object can passed through, even those are not extended with event-listener methods.
         *        Note: Objects who are extended with listener-methods should use instance.onceAfter() instead.
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of after-subscribers.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @since 0.0.1
        */
        onceAfter: function(customEvent, callback, context, filter, prepend) {
            var instance = this,
                handler, wrapperFn;
            console.log(NAME, 'add onceAfter subscriber to: '+customEvent);
            wrapperFn = function(e) {
                // CAUTIOUS: removeing the handler right now would lead into a mismatch of the dispatcher
                // who loops through the array of subscribers!
                // therefore, we must remove once the eventcycle has finished --> we detach by setting it
                // at the end of the global-eventstack:
                // yet there still is a change that the event is called multiple times BEFORE it
                // will reach the defined `setTimeout` --> to avoid multiple invocations, handler is
                // extended with the property `_detached`
                handler._detached  || callback.call(this, e);
                handler._detached = true;
                setTimeout(function() {handler.detach();}, 0);
            };
            handler = instance._addMultiSubs(false, customEvent, wrapperFn, context, filter, prepend);
            return handler;
        },

        /**
         * Subscribes to a customEvent. The callback will be executed `before` the defaultFn.
         * The subscriber will be automaticly removed once the callback executed the first time.
         * No need to `detach()` (unless you want to undescribe before the first event)
         *
         * @static
         * @method onceBefore
         * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
         *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
         *        If `emitterName` is not defined, `UI` is assumed.
         * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
         *        as its only argument.
         * @param [context] {Object} the instance that subscribes to the event.
         *        any object can passed through, even those are not extended with event-listener methods.
         *        Note: Objects who are extended with listener-methods should use instance.onceBefore() instead.
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of before-subscribers.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @since 0.0.1
        */
        onceBefore: function(customEvent, callback, context, filter, prepend) {
            var instance = this,
                handler, wrapperFn;
            console.log(NAME, 'add onceBefore subscriber to: '+customEvent);
            wrapperFn = function(e) {
                // CAUTIOUS: removeing the handler right now would lead into a mismatch of the dispatcher
                // who loops through the array of subscribers!
                // therefore, we must remove once the eventcycle has finished --> we detach by setting it
                // at the end of the global-eventstack.
                // yet there still is a change that the event is called multiple times BEFORE it
                // will reach the defined `setTimeout` --> to avoid multiple invocations, handler is
                // extended with the property `_detached`
                handler._detached  || callback.call(this, e);
                handler._detached = true;
                setTimeout(function() {handler.detach();}, 0);
            };
            handler = instance._addMultiSubs(true, customEvent, wrapperFn, context, filter, prepend);
            return handler;
        },

        /**
         * Removes all event-definitions of an emitter, specified by its `emitterName`.
         * When `emitterName` is not set, ALL event-definitions will be removed.
         *
         * @static
         * @method undefAllEvents
         * @param [emitterName] {String} name of the customEvent conform the syntax: `emitterName:eventName`
         * @since 0.0.1
         */
        undefAllEvents: function (emitterName) {
            console.log(NAME, 'undefAllEvents');
            var instance = this,
                pattern;
            if (emitterName) {
                pattern = new RegExp('^'+emitterName+':');
                instance._ce.each(
                    function(value, key) {
                        key.match(pattern) && (delete instance._ce[key]);
                    }
                );
            }
            else {
                instance._ce.each(
                    function(value, key) {
                        delete instance._ce[key];
                    }
                );
            }
        },

        /**
         * Removes the event-definition of the specified customEvent.
         *
         * @static
         * @method undefEvent
         * @param customEvent {String} name of the customEvent conform the syntax: `emitterName:eventName`
         * @since 0.0.1
         */
        undefEvent: function (customEvent) {
            console.log(NAME, 'undefEvent '+customEvent);
            delete this._ce[customEvent];
        },

        /**
         * unNotifies (unsubscribes) the notifier of the specified customEvent.
         *
         * @static
         * @method unNotify
         * @param customEvent {String} conform the syntax: `emitterName:eventName`.
         * @since 0.0.1
        */
        unNotify: function(customEvent) {
            console.log(NAME, 'unNotify '+customEvent);
            delete this._notifiers[customEvent];
        },

        /**
         * unNotifies (unsubscribes) the detach-notifier of the specified customEvent.
         *
         * @static
         * @method unNotifyDetach
         * @param customEvent {String} conform the syntax: `emitterName:eventName`.
         * @since 0.0.1
        */
        unNotifyDetach: function(customEvent) {
            console.log(NAME, 'unNotifyDetach '+customEvent);
            delete this._detachNotifiers[customEvent];
        },

        //====================================================================================================
        // private methods:
        //====================================================================================================

        /**
         * Creates a subscriber to the specified customEvent. The customEvent must conform the syntax:
         * `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`
         * If `emitterName` is not defined, `UI` is assumed.
         *
         * Examples of valid customevents:
         *
         * <ul>
         *     <li>'redmodel:save'</li>
         *     <li>'UI:click'</li>
         *     <li>'click' --> alias for 'UI:click'</li>
         *     <li>'`*`:click' --> careful: will listen to both UIs and non-UI- click-events</li>
         *     <li>'redmodel:`*`'</li>
         *     <li>'`*`:`*`'</li>
         * </ul>
         *
         * @static
         * @method _addMultiSubs
         * @param before {Boolean} whether the subscriber is a `before` subscriber. On falsy, an `after`-subscriber is assumed.
         * @param customEvent {Array} Array of Strings. customEvent should conform the syntax: `emitterName:eventName`, wildcard `*`
         *         may be used for both `emitterName` as well as only `eventName`, in which case 'UI' will become the emitterName.
         * @param callback {Function} subscriber to the event.
         * @param listener {Object} Object that creates the subscriber (and will be listening by `listener.after(...)`)
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether to make the subscriber the first in the list. By default it will pe appended.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @private
         * @since 0.0.1
        */
        _addMultiSubs: function(before, customEvent, callback, listener, filter, prepend) {
            console.log(NAME, '_addMultiSubs');
            var instance = this,
                subscribers;
            if ((typeof listener === 'string') || (typeof listener === 'function')) {
                prepend = filter;
                filter = listener;
                listener = null;
            }
            else if (typeof listener === 'boolean') {
                prepend = listener;
                filter = null;
                listener = null;
            }
            if ((typeof filter==='boolean') || (typeof filter===undefined) || (typeof filter===null)) {
                // filter was not set, instead `prepend` is set at this position
                prepend = filter;
                filter = null;
            }
            if (!Array.isArray(customEvent)) {
                return instance._addSubscriber(listener, before, customEvent, callback, filter, prepend);
            }
            subscribers = [];
            customEvent.forEach(
                function(ce) {
                    subscribers.push(instance._addSubscriber(listener, before, ce, callback, filter, prepend));
                }
            );
            return {
                detach: function() {
                    subscribers.each(
                        function(subscriber) {
                            subscriber.detach();
                        }
                    );
                }
            };
        },

        /**
         * Creates a subscriber to the specified customEvent. The customEvent must conform the syntax:
         * `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`
         * If `emitterName` is not defined, `UI` is assumed.
         *
         * Examples of valid customevents:
         *
         * <ul>
         *     <li>'redmodel:save'</li>
         *     <li>'UI:click'</li>
         *     <li>'click' --> alias for 'UI:click'</li>
         *     <li>'`*`:click' --> careful: will listen to both UIs and non-UI- click-events</li>
         *     <li>'redmodel:`*`'</li>
         *     <li>'`*`:`*`'</li>
         * </ul>
         *
         * @static
         * @method _addSubscriber
         * @param listener {Object} Object that creates the subscriber (and will be listening by `listener.after(...)`)
         * @param before {Boolean} whether the subscriber is a `before` subscriber. On falsy, an `after`-subscriber is assumed.
         * @param customEvent {String} conform the syntax: `emitterName:eventName`, wildcard `*` may be used for both
         *        `emitterName` as well as only `eventName`, in which case 'UI' will become the emitterName.
         * @param callback {Function} subscriber to the event.
         * @param [filter] {String|Function} to filter the event.
         *        Use a String if you want to filter DOM-events by a `selector`
         *        Use a function if you want to filter by any other means. If the function returns a trully value, the
         *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
         *        the subscriber.
         * @param [prepend=false] {Boolean} whether to make the subscriber the first in the list. By default it will pe appended.
         * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
         * @private
         * @since 0.0.1
        */
        _addSubscriber: function(listener, before, customEvent, callback, filter, prepend) {
            var instance = this,
                allSubscribers = instance._subs,
                extract = customEvent.match(REGEXP_WILDCARD_CUSTOMEVENT),
                hashtable, item, notifier, customEventWildcardEventName;

            if (!extract) {
                console.error(NAME, 'subscribe-error: eventname does not match pattern');
                return;
            }

            item = {
                o: listener || instance,
                cb: callback,
                f: filter
            };

            // if extract[1] is undefined, a simple customEvent is going to subscribe (without :)
            // therefore: recomposite customEvent:
            extract[1] || (customEvent='UI:'+customEvent);

            // if extract[1] === 'this', then a listener to its own emitterName is supposed
            if (extract[1]==='this') {
                if (listener._emitterName) {
                    customEvent = listener._emitterName+':'+extract[2];
                    item.s = true; // s --> self
                }
                else {
                    console.error(NAME, 'subscribe-error: "this" cannot be detemined because the object is no emitter');
                    return;
                }
            }

            allSubscribers[customEvent] || (allSubscribers[customEvent]={});
            if (before) {
                allSubscribers[customEvent].b || (allSubscribers[customEvent].b=[]);
            }
            else {
                allSubscribers[customEvent].a || (allSubscribers[customEvent].a=[]);
            }

            hashtable = allSubscribers[customEvent][before ? 'b' : 'a'];
            // we need to be able to process an array of customevents

            // in case of a defined subscription (no wildcard), we should look for notifiers
            if ((extract[1]!=='*') && (extract[2]!=='*')) {
                // before subscribing: we might need to activate notifiers --> with defined eventName should also be cleaned up:
                notifier = instance._notifiers[customEvent];
                if (notifier) {
                    notifier.cb.call(notifier.o, customEvent, item);
                    if (notifier.r) {
                        delete instance._notifiers[customEvent];
                    }
                }
                // check the same for wildcard eventName:
                customEventWildcardEventName = customEvent.replace(REGEXP_EVENTNAME_WITH_SEMICOLON, ':*');
                if ((customEventWildcardEventName !== customEvent) && (notifier=instance._notifiers[customEventWildcardEventName])) {
                    notifier.cb.call(notifier.o, customEvent, item);
                    if (notifier.r) {
                        delete instance._notifiers[customEvent];
                    }
                }
            }

            console.log(NAME, '_addSubscriber to customEvent: '+customEvent);
            prepend ? hashtable.unshift(item) : hashtable.push(item);

            return {
                detach: function() {
                    instance._removeSubscriber(listener, before, customEvent, callback);
                }
            };
        },

        /**
         * Emits the event `eventName` on behalf of `emitter`, which becomes e.target in the eventobject.
         * During this process, all subscribers and the defaultFn/preventedFn get an eventobject passed through.
         * The eventobject is created with at least these properties:
         *
         * <ul>
         *     <li>e.target --> source that triggered the event (instance or DOM-node), specified by `emitter`</li>
         *     <li>e.type --> eventName</li>
         *     <li>e.emitter --> emitterName</li>
         *     <li>e.status --> status-information:
         *          <ul>
         *               <li>e.status.ok --> `true|false` whether the event got executed (not halted or defaultPrevented)</li>
         *               <li>e.status.defaultFn (optional) --> `true` if any defaultFn got invoked</li>
         *               <li>e.status.preventedFn (optional) --> `true` if any preventedFn got invoked</li>
         *               <li>e.status.rendered (optional) --> `true` the vDOM rendered the dom</li>
         *               <li>e.status.halted (optional) --> `reason|true` if the event got halted and optional the why</li>
         *               <li>e.status.defaultPrevented (optional) -->  `reason|true` if the event got defaultPrevented and optional the why</li>
         *               <li>e.status.renderPrevented (optional) -->  `reason|true` if the event got renderPrevented and optional the why</li>
         *          </ul>
         *     </li>
         * </ul>
         *
         * The optional `payload` is merged into the eventobject and could be used by the subscribers and the defaultFn/preventedFn.
         * If payload.silent is set true, the subscribers are not getting invoked: only the defaultFn.
         *
         * The eventobject also has these methods:
         *
         * <ul>
         *     <li>e.halt() --> stops immediate all actions: no mer subscribers are invoked, no defaultFn/preventedFn</li>
         *     <li>e.preventDefault() --> instead of invoking defaultFn, preventedFn will be invoked. No aftersubscribers</li>
         *     <li>e.preventRender() --> by default, any event will trigger the vDOM (if exists) to re-render, this can be prevented by calling e.preventRender()</li>
         * </ul>
         *
         * <ul>
         *     <li>First, before-subscribers are invoked: this is the place where you might call `e.halt()`, `a.preventDefault()` or `e.preventRender()`</li>
         *     <li>Next, defaultFn or preventedFn gets invoked, depending on whether e.halt() or a.preventDefault() has been called</li>
         *     <li>Next, after-subscribers get invoked (unless e.halt() or a.preventDefault() has been called)</li>
         *     <li>Finally, the finalization takes place: any subscribers are invoked, unless e.halt() or a.preventDefault() has been called</li>
         * <ul>
         *
         * @static
         * @method emit
         * @param [emitter] {Object} instance that emits the events
         * @param customEvent {String} Full customEvent conform syntax `emitterName:eventName`.
         *        `emitterName` is available as **e.emitter**, `eventName` as **e.type**.
         * @param payload {Object} extra payload to be added to the event-object
         * @param [beforeSubscribers] {Array} array of functions to act as beforesubscribers. <b>should not be used</b> other than
         *                            by any submodule like `event-dom`. If used, than this list of subscribers gets invoked instead
         *                            of the subscribers that actually subscribed to the event.
         * @param [afterSubscribers] {Array} array of functions to act as afterSubscribers. <b>should not be used</b> other than
         *                            by any submodule like `event-dom`. If used, than this list of subscribers gets invoked instead
         *                            of the subscribers that actually subscribed to the event.
         * @param [preProcessor] {Function} if passed, this function will be invoked before every single subscriber
         *                       It is meant to manipulate the eventobject, something that `event-dom` needs to do
         *                       This function expects 2 arguments: `subscriber` and `eventobject`.
         *                       <b>should not be used</b> other than by any submodule like `event-dom`.
         * @param [keepPayload] {Boolean} whether `payload` should be used as the ventobject instead of creating a new
         *                      eventobject and merge payload. <b>should not be used</b> other than by any submodule like `event-dom`.
         * @return {Object|undefined} eventobject or undefined when the event was halted or preventDefaulted.
         * @since 0.0.1
         */
        _emit: function (emitter, customEvent, payload, beforeSubscribers, afterSubscribers, preProcessor, keepPayload) {
            // NOTE: emit() needs to be synchronous! otherwise we wouldn't be able
            // to preventDefault DOM-events in time.
            var instance = this,
                allCustomEvents = instance._ce,
                allSubscribers = instance._subs,
                customEventDefinition, extract, emitterName, eventName, subs, wildcard_named_subs,
                named_wildcard_subs, wildcard_wildcard_subs, e, invokeSubs, key;

            (customEvent.indexOf(':') !== -1) || (customEvent = emitter._emitterName+':'+customEvent);
            console.log(NAME, 'customEvent.emit: '+customEvent);

            extract = customEvent.match(REGEXP_CUSTOMEVENT);
            if (!extract) {
                console.error(NAME, 'defined emit-event does not match pattern');
                return;
            }
            emitterName = extract[1];
            eventName = extract[2];
            customEventDefinition = allCustomEvents[customEvent];

            subs = allSubscribers[customEvent];
            wildcard_named_subs = allSubscribers['*:'+eventName];
            named_wildcard_subs = allSubscribers[emitterName+':*'];
            wildcard_wildcard_subs = allSubscribers['*:*'];

            if (keepPayload) {
                e = payload;
            }
            else {
                e = Object.create(instance._defaultEventObj);
                // e.target = (payload && payload.target) || emitter; // make it possible to force a specific e.target
                e.target = emitter;
                e.type = eventName;
                e.emitter = emitterName;
                e.status = {};
                if (customEventDefinition) {
                    e._unPreventable = customEventDefinition.unPreventable;
                    e._unHaltable = customEventDefinition.unHaltable;
                    e._unRenderPreventable = customEventDefinition.unRenderPreventable;
                    e._noRender = customEventDefinition.noRender;
                    customEventDefinition.unSilencable && (e.status.unSilencable = true);
                }
                if (payload) {
                    // e.merge(payload); is not enough --> DOM-eventobject has many properties that are not "own"-properties
                    for (key in payload) {
                        e[key] || (e[key]=payload[key]);
                    }
                }
                if (e.status.unSilencable && e.silent) {
                    console.warn(NAME, ' event '+e.emitter+':'+e.type+' cannot made silent: this customEvent is defined as unSilencable');
                    e.silent = false;
                }
            }
            if (beforeSubscribers) {
                instance._invokeSubs(e, false, true, preProcessor, {b: beforeSubscribers});
            }
            else {
                invokeSubs = instance._invokeSubs.bind(instance, e, true, true, false);
                [subs, named_wildcard_subs, wildcard_named_subs, wildcard_wildcard_subs].forEach(invokeSubs);
            }
            e.status.ok = !e.status.halted && !e.status.defaultPrevented;
            // in case any subscriber changed e.target inside its filter (event-dom does this),
            // then we reset e.target to its original. But only if e._noResetSourceTarget is undefined:
            // (e._noResetSourceTarget can be used to supress this behaviour --> dragdrop uses this)
            e.sourceTarget && !e._noResetSourceTarget && (e.target=e.sourceTarget);
            if (customEventDefinition && !e.status.halted) {
                // now invoke defFn
                e.returnValue = (e.status.defaultPrevented || e.status.defaultPreventedContinue) ?
                                (customEventDefinition.preventedFn && (e.status.preventedFn=true) && customEventDefinition.preventedFn.call(e.target, e)) :
                                (customEventDefinition.defaultFn && (e.status.defaultFn=true) && customEventDefinition.defaultFn.call(e.target, e));
            }

            if (e.status.ok) {
                if (afterSubscribers) {
                    instance._invokeSubs(e, false, false, preProcessor, {a: afterSubscribers});
                }
                else {
                    invokeSubs = instance._invokeSubs.bind(instance, e, true, false, false);
                    [subs, named_wildcard_subs, wildcard_named_subs, wildcard_wildcard_subs].forEach(invokeSubs);
                }
                if (!e.silent) {
                    // in case any subscriber changed e.target inside its filter (event-dom does this),
                    // then we reset e.target to its original:
                    e.sourceTarget && (e.target=e.sourceTarget);
                    instance._final.some(function(finallySubscriber) {
                        !e.silent && !e._noRender && !e.status.renderPrevented  && finallySubscriber(e);
                        if (e.status.unSilencable && e.silent) {
                            console.warn(NAME, ' event '+e.emitter+':'+e.type+' cannot made silent: this customEvent is defined as unSilencable');
                            e.silent = false;
                        }
                        return e.silent;
                    });
                }
            }
            return e;
        },

        /**
         * Does the actual invocation of a subscriber.
         *
         * @method _invokeSubs
         * @param e {Object} event-object
         * @param [checkFilter] {Boolean}
         * @param [before] {Boolean} whether it concerns before subscribers
         * @param [checkFilter] {Boolean}
         * @param subscribers {Array} contains subscribers (objects) with these members:
         * <ul>
         *     <li>subscriber.o {Object} context of the callback</li>
         *     <li>subscriber.cb {Function} callback to be invoked</li>
         *     <li>subscriber.f {Function} filter to be applied</li>
         *     <li>subscriber.t {DOM-node} target for the specific selector, which will be set as e.target
         *         only when event-dom is active and there are filter-selectors</li>
         *     <li>subscriber.n {DOM-node} highest dom-node that acts as the container for delegation.
         *         only when event-dom is active and there are filter-selectors</li>
         *     <li>subscriber.s {Boolean} true when the subscription was set to itself by using "this:eventName"</li>
         * </ul>
         * @private
         * @since 0.0.1
         */
        _invokeSubs: function (e, checkFilter, before, preProcessor, subscribers) { // subscribers, plural
            console.log(NAME, '_invokeSubs');
            var subs, passesThis, passesFilter;
            if (subscribers && !e.status.halted && !e.silent) {
                subs = before ? subscribers.b : subscribers.a;
                subs && subs.some(function(subscriber) {
                    console.log(NAME, '_invokeSubs checking invokation for single subscriber');
                    if (preProcessor && preProcessor(subscriber, e)) {
                        return true;
                    }
                    // check: does it need to be itself because of subscribing through 'this'
                    passesThis = (!subscriber.s || (subscriber.o===e.target));
                    // check: does it pass the filter
                    passesFilter = (!checkFilter || !subscriber.f || subscriber.f.call(subscriber.o, e));
                    if (passesThis && passesFilter) {
                        // finally: invoke subscriber
                        console.log(NAME, '_invokeSubs is going to invoke subscriber');
                        subscriber.cb.call(subscriber.o, e);
                    }
                    if (e.status.unSilencable && e.silent) {
                        console.warn(NAME, ' event '+e.emitter+':'+e.type+' cannot made silent: this customEvent is defined as unSilencable');
                        e.silent = false;
                    }
                    return e.silent || (before && e.status.halted);  // remember to check whether it was halted for any reason
                });
            }
        },

        /**
         * Removes a subscriber from the specified customEvent. The customEvent must conform the syntax:
         * `emitterName:eventName`.
         *
         * @static
         * @method _removeSubscriber
         * @param listener {Object} Object that creates the subscriber (and will be listening by `listener.after(...)`)
         * @param before {Boolean} whether the subscriber is a `before` subscriber. On falsy, an `after`-subscriber is assumed.
         * @param customEvent {String} conform the syntax: `emitterName:eventName`, wildcard `*` may be used for both
         *        `emitterName` as well as only `eventName`, in which case 'UI' will become the emmiterName.
         * @param [callback] {Function} subscriber to the event, when not set, all subscribers of the listener to this customEvent
         *                   will be removed.
         * @private
         * @since 0.0.1
        */
        _removeSubscriber: function(listener, before, customEvent, callback) {
            console.log('_removeSubscriber: '+customEvent);
            var instance = this,
                eventSubscribers = instance._subs[customEvent],
                hashtable = eventSubscribers && eventSubscribers[before ? 'b' : 'a'],
                i, subscriber, beforeUsed, afterUsed, extract, detachNotifier, customEventWildcardEventName;
            if (hashtable) {
                // unfortunatly we cannot search by reference, because the array has composed objects
                // also: can't use native Array.forEach: removing items within its callback change the array
                // during runtime, making it to skip the next item of the one that's being removed
               for (i=0; i<hashtable.length; ++i) {
                    console.log(NAME, '_removeSubscriber for single subscriber');
                    subscriber = hashtable[i];
                    if ((subscriber.o===(listener || instance)) && (!callback || (subscriber.cb===callback))) {
                        console.log('removing subscriber');
                        hashtable.splice(i--, 1);
                    }
                }
            }
            // After removal subscriber: check whether both eventSubscribers.a and eventSubscribers.b are empty
            // if so, remove the member from Event._subs to cleanup memory
            if (eventSubscribers) {
                beforeUsed = eventSubscribers.b && (eventSubscribers.b.length>0);
                afterUsed = eventSubscribers.a && (eventSubscribers.a.length>0);
                if (!beforeUsed && !afterUsed) {
                    delete instance._subs[customEvent];
                }
            }
            extract = customEvent.match(REGEXP_CUSTOMEVENT);
            // in case of a defined subscription (no wildcard),
            // we need to inform any detachNotifier of the unsubscription:
            if (extract && ((extract[1]!=='*') && (extract[2]!=='*'))) {
                detachNotifier = instance._detachNotifiers[customEvent];
                if (detachNotifier) {
                    detachNotifier.cb.call(detachNotifier.o, customEvent);
                    if (detachNotifier.r) {
                        delete instance._detachNotifiers[customEvent];
                    }
                }
                // check the same for wildcard eventName:
                customEventWildcardEventName = customEvent.replace(REGEXP_EVENTNAME_WITH_SEMICOLON, ':*');
                if ((customEventWildcardEventName !== customEvent) && (detachNotifier=instance._detachNotifiers[customEventWildcardEventName])) {
                    detachNotifier.cb.call(detachNotifier.o, customEvent);
                    if (detachNotifier.r) {
                        delete instance._detachNotifiers[customEvent];
                    }
                }
            }
        },

        /**
         * Removes subscribers from the multiple customevents. The customEvent must conform the syntax:
         * `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`
         * If `emitterName` is not defined, `UI` is assumed.
         *
         * Examples of valid customevents:
         *
         * <ul>
         *     <li>'redmodel:save'</li>
         *     <li>'UI:click'</li>
         *     <li>'click' --> alias for 'UI:click'</li>
         *     <li>'`*`:click' --> careful: will listen to both UIs and non-UI- click-events</li>
         *     <li>'redmodel:`*`'</li>
         *     <li>'`*`:`*`'</li>
         * </ul>
         *
         * @static
         * @method _removeSubscriber
         * @param listener {Object} Object that creates the subscriber (and will be listening by `listener.after(...)`)
         * @param customEvent {String} conform the syntax: `emitterName:eventName`, wildcard `*` may be used for both
         *        `emitterName` as well as only `eventName`, in which case 'UI' will become the emmiterName.
         * @private
         * @since 0.0.1
        */
        _removeSubscribers: function(listener, customEvent) {
            console.log('_removeSubscribers: '+customEvent);
            var instance = this,
                emitterName, eventName,
                extract = customEvent.match(REGEXP_WILDCARD_CUSTOMEVENT);
            if (!extract) {
                console.error(NAME, '_removeSubscribers-error: customEvent '+customEvent+' does not match pattern');
                return;
            }
            emitterName = extract[1] || 'UI';
            eventName = extract[2];
            if ((emitterName!=='*') && (eventName!=='*')) {
                instance._removeSubscriber(listener, true, customEvent);
                instance._removeSubscriber(listener, false, customEvent);
            }
            else {
                // wildcard, we need to look at all the members of Event._subs
                instance._subs.each(
                    function(value, key) {
                        var localExtract = key.match(REGEXP_WILDCARD_CUSTOMEVENT),
                            emitterMatch = (emitterName==='*') || (emitterName===localExtract[1]),
                            eventMatch = (eventName==='*') || (eventName===localExtract[2]);
                        if (emitterMatch && eventMatch) {
                            instance._removeSubscriber(listener, true, key);
                            instance._removeSubscriber(listener, false, key);
                        }
                    }
                );
            }
        },

        /**
         * Adds a property to the default eventobject's prototype which passes through all eventcycles.
         * Goes through Object.defineProperty with configurable, enumerable and writable
         * all set to false.
         *
         * @method _setEventObjProperty
         * @param property {String} event-object
         * @param value {Any}
         * @chainable
         * @private
         * @since 0.0.1
         */
        _setEventObjProperty: function (property, value) {
            console.log(NAME, '_setEventObjProperty');
            DEFINE_IMMUTAL_PROPERTY(this._defaultEventObj, property, value);
            return this;
        }

    };

    /**
     * Objecthash containing all defined custom-events
     * which has a structure like this:
     *
     * _ce = {
     *     'UI:click': {
     *         preventable: true,
     *         defaultFn: function(){...},
     *         preventedFn: function(){...},
     *         renderPreventable: true
     *     },
     *     'redmodel:save': {
     *         preventable: true,
     *         defaultFn: function(){...},
     *         preventedFn: function(){...},
     *         renderPreventable: true
     *     }
     * }
     *
     * @property _ce
     * @default {}
     * @type Object
     * @private
     * @since 0.0.1
    */
    Object.defineProperty(Event, '_ce', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: {} // `writable` is false means we cannot chance the value-reference, but we can change {}'s properties itself
    });

    /**
     * Objecthash containing all defined before and after subscribers
     * which has a structure like this (`b` represents `before` and `a` represents `after`)
     * Every item that gets in the array consist by itself of 3 properties:
     *                                                          subscriberitem = {
     *                                                              o: listener,
     *                                                              cb: callbackFn(e),
     *                                                              f: filter
     *                                                          };
     *
     * _subs = {
     *     'UI:click': {
     *         b: [
     *             item,
     *             item
     *         ],
     *         a: [
     *             item,
     *             item
     *         ]
     *     },
     *     '*:click': {
     *         b: [
     *             item,
     *             item
     *         ],
     *         a: [
     *             item,
     *             item
     *         ]
     *     },
     *     'redmodel:save': {
     *         b: [
     *             item,
     *             item
     *         ],
     *         a: [
     *             item,
     *             item
     *         ]
     *     }
     * }
     *
     * @property _ce
     * @default {}
     * @type Object
     * @private
     * @since 0.0.1
    */
    DEFINE_IMMUTAL_PROPERTY(Event, '_subs', {});

    /**
     * Internal list of finalize-subscribers which are invoked at the finalization-cycle, which happens after the after-subscribers.
     * Is an array of function-references.
     *
     * @property _final
     * @default []
     * @type Array
     * @private
     * @since 0.0.1
    */
    DEFINE_IMMUTAL_PROPERTY(Event, '_final', []);

    /**
     * Object that acts as the prototype of the eventobject.
     * To add more methods, you can use `_setEventObjProperty`
     *
     * @property _defaultEventObj
     * @default {
     *    halt: function()
     *    preventDefault: function()
     *    preventRender: function()
     * }
     * @type Object
     * @private
     * @since 0.0.1
    */
    DEFINE_IMMUTAL_PROPERTY(Event, '_defaultEventObj', {});

    /**
     * Objecthash containing all detach-notifiers, keyed by customEvent name.
     * This list is maintained by `notifyDetach` and `unNotifyDetach`
     *
     * _detachNotifiers = {
     *     'UI:click': {
     *         cb:function() {}
     *         o: {} // context
     *     },
     *     'redmodel:*': {
     *         cb:function() {}
     *         o: {} // context
     *     },
     *     'bluemodel:save': {
     *         cb:function() {}
     *         o: {} // context
     *     }
     * }
     *
     * @property _detachNotifiers
     * @default {}
     * @type Object
     * @private
     * @since 0.0.1
    */
    DEFINE_IMMUTAL_PROPERTY(Event, '_detachNotifiers', {});

    /**
     * Objecthash containing all notifiers, keyed by customEvent name.
     * This list is maintained by `notify` and `unNotify`
     *
     * _notifiers = {
     *     'UI:click': {
     *         cb:function() {}
     *         o: {} // context
     *     },
     *     'redmodel:*': {
     *         cb:function() {}
     *         o: {} // context
     *     },
     *     'bluemodel:save': {
     *         cb:function() {}
     *         o: {} // context
     *     }
     * }
     *
     * @property _notifiers
     * @default {}
     * @type Object
     * @private
     * @since 0.0.1
    */
    DEFINE_IMMUTAL_PROPERTY(Event, '_notifiers', {});

    Event._setEventObjProperty('halt', function(reason) {this.status.ok || this._unHaltable || (this.status.halted = (reason || true));})
         ._setEventObjProperty('preventDefault', function(reason) {this.status.ok || this._unPreventable || (this.status.defaultPrevented = (reason || true));})
         ._setEventObjProperty('preventDefaultContinue', function(reason) {this.status.ok || this._unPreventable || (this.status.defaultPreventedContinue = (reason || true));})
         ._setEventObjProperty('preventRender', function(reason) {this.status.ok || this._unRenderPreventable || (this.status.renderPrevented = (reason || true));});

    return Event;
}));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"js-ext/lib/function.js":11,"js-ext/lib/object.js":12,"polyfill/polyfill-base.js":18}],8:[function(require,module,exports){
"use strict";

/**
 * Extends the Event-instance by adding the method `Emitter` to it.
 * The `Emitter-method` returns an object that should be merged into any Class-instance or object you
 * want to extend with the emit-methods, so the appropriate methods can be invoked on the instance.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * Should be called using  the provided `extend`-method like this:
 * @example
 *     var Event = require('event');<br>
 *
 * @module event
 * @submodule event-emitter
 * @class Event.Emitter
 * @since 0.0.1
*/

var NAME = '[event-emitter]: ',
    REGEXP_EMITTER = /^(\w|-)+$/,
    Event = require('./index.js');

Event.Emitter = function(emitterName) {
    var composeCustomevent = function(eventName) {
            return emitterName+':'+eventName;
        },
        newEmitter;
    if (!REGEXP_EMITTER.test(emitterName)) {
        console.error(NAME, 'Emitter invoked with invalid argument: you must specify a valid emitterName');
        return;
    }
    newEmitter = {
        /**
         * Defines a CustomEvent. If the eventtype already exists, it will not be overridden,
         * unless you force to assign with `.forceAssign()`
         *
         * The returned object comes with 4 methods which can be invoked chainable:
         *
         * <ul>
         *     <li>defaultFn() --> the default-function of the event</li>
         *     <li>preventedFn() --> the function that should be invoked when the event is defaultPrevented</li>
         *     <li>forceAssign() --> overrides any previous definition</li>
         *     <li>unHaltable() --> makes the customEvent cannot be halted</li>
         *     <li>unPreventable() --> makes the customEvent's defaultFn cannot be prevented</li>
         *     <li>unSilencable() --> makes that emitters cannot make this event to perform silently (using e.silent)</li>
         *     <li>unRenderPreventable() --> makes that the customEvent's render cannot be prevented</li>
         *     <li>noRender() --> prevents this customEvent from render the dom. Overrules unRenderPreventable()</li>
         * </ul>
         *
         * @method defineEvent
         * @param eventName {String} name of the customEvent, without `emitterName`.
         *        The final event that will be created has the syntax: `emitterName:eventName`,
         *        where `emitterName:` is automaticly prepended.
         * @return {Object} with extra methods that can be chained:
         * <ul>
         *      <li>unPreventable() --> makes the customEvent's defaultFn cannot be prevented</li>
         *      <li>unRenderPreventable() --> makes that the customEvent's render cannot be prevented</li>
         *      <li>forceAssign() --> overrides any previous definition</li>
         *      <li>defaultFn() --> the default-function of the event</li>
         *      <li>preventedFn() --> the function that should be invoked when the event is defaultPrevented</li>
         * </ul>
         * @since 0.0.1
         */
        defineEvent: function (eventName) {
            return Event.defineEvent(composeCustomevent(eventName));
        },

        /**
         * Emits the event `eventName` on behalf of the instance holding this method.
         *
         * @method emit
         * @param eventName {String} name of the event to be sent (available as e.type)
         *        you could pass a customEvent here 'emitterName:eventName', which would
         *        overrule the `instance-emitterName`
         * @param payload {Object} extra payload to be added to the event-object
         * @return {Promise}
         * <ul>
         *     <li>on success: returnValue {Any} of the defaultFn</li>
         *     <li>on error: reason {Any} Either: description 'event was halted', 'event was defaultPrevented' or the returnvalue of the preventedFn</li>
         * </ul>
         * @since 0.0.1
         */
        emit: function(eventName, payload) {
            return Event.emit(this, eventName, payload);
        },

        /**
         * Removes all event-definitions of the instance holding this method.
         *
         * @method undefAllEvents
         * @since 0.0.1
         */
        undefAllEvents: function () {
            Event.undefEvent(emitterName);
        },

        /**
         * Removes the event-definition of the specified customEvent.
         *
         * @method undefEvent
         * @param eventName {String} name of the customEvent, without `emitterName`.
         *        The calculated customEvent which will be undefined, will have the syntax: `emitterName:eventName`.
         *        where `emitterName:` is automaticly prepended.
         * @since 0.0.1
         */
        undefEvent: function (eventName) {
            Event.undefEvent(composeCustomevent(eventName));
        }

    };
    // register the emittername:
    Event.defineEmitter(newEmitter, emitterName);
    return newEmitter;
};
},{"./index.js":10}],9:[function(require,module,exports){
"use strict";

/**
 * Extends the Event-instance by adding the object `Listener` to it.
 * The returned object should be merged into any Class-instance or object you want to
 * extend with the listener-methods, so the appropriate methods can be invoked on the instance.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * Should be called using  the provided `extend`-method like this:
 * @example
 *     var Event = require('event');<br>
 *
 * @module event
 * @submodule event-listener
 * @class Event.Listener
 * @since 0.0.1
*/

var Event = require('./index.js');

Event.Listener = {
    /**
     * Subscribes to a customEvent on behalf of the object who calls this method.
     * The callback will be executed `after` the defaultFn.
     *
     * @method after
     * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
     *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
     *        If `emitterName` is not defined, `UI` is assumed.
     * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
     *        as its only argument.
     * @param [filter] {String|Function} to filter the event.
     *        Use a String if you want to filter DOM-events by a `selector`
     *        Use a function if you want to filter by any other means. If the function returns a trully value, the
     *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
     *        the subscriber.
     * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of after-subscribers.
     * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
     * @since 0.0.1
    */
    after: function (customEvent, callback, filter, prepend) {
        return Event.after(customEvent, callback, this, filter, prepend);
    },

    /**
     * Subscribes to a customEvent on behalf of the object who calls this method.
     * The callback will be executed `before` the defaultFn.
     *
     * @method before
     * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
     *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
     *        If `emitterName` is not defined, `UI` is assumed.
     * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
     *        as its only argument.
     * @param [filter] {String|Function} to filter the event.
     *        Use a String if you want to filter DOM-events by a `selector`
     *        Use a function if you want to filter by any other means. If the function returns a trully value, the
     *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
     *        the subscriber.
     * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of before-subscribers.
     * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
     * @since 0.0.1
    */
    before: function (customEvent, callback, filter, prepend) {
        return Event.before(customEvent, callback, this, filter, prepend);
    },

    /**
     * Detaches (unsubscribes) the listener from the specified customEvent,
     * on behalf of the object who calls this method.
     *
     * @method detach
     * @param customEvent {String} conform the syntax: `emitterName:eventName`, wildcard `*` may be used for both
     *        `emitterName` as well as only `eventName`, in which case 'UI' will become the emitterName.
     * @since 0.0.1
    */
    detach: function(customEvent) {
        Event.detach(this, customEvent);
    },

    /**
     * Detaches (unsubscribes) the listener from all customevents,
     * on behalf of the object who calls this method.
     *
     * @method detachAll
     * @since 0.0.1
    */
    detachAll: function() {
        Event.detachAll(this);
    },

    /**
     * Subscribes to a customEvent on behalf of the object who calls this method.
     * The callback will be executed `after` the defaultFn.
     * The subscriber will be automaticly removed once the callback executed the first time.
     * No need to `detach()` (unless you want to undescribe before the first event)
     *
     * @method onceAfter
     * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
     *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
     *        If `emitterName` is not defined, `UI` is assumed.
     * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
     *        as its only argument.
     * @param [filter] {String|Function} to filter the event.
     *        Use a String if you want to filter DOM-events by a `selector`
     *        Use a function if you want to filter by any other means. If the function returns a trully value, the
     *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
     *        the subscriber.
     * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of after-subscribers.
     * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
     * @since 0.0.1
    */
    onceAfter: function (customEvent, callback, filter, prepend) {
        return Event.onceAfter(customEvent, callback, this, filter, prepend);
    },

    /**
     * Subscribes to a customEvent on behalf of the object who calls this method.
     * The callback will be executed `before` the defaultFn.
     * The subscriber will be automaticly removed once the callback executed the first time.
     * No need to `detach()` (unless you want to undescribe before the first event)
     *
     * @method onceBefore
     * @param customEvent {String|Array} the custom-event (or Array of events) to subscribe to. CustomEvents should
     *        have the syntax: `emitterName:eventName`. Wildcard `*` may be used for both `emitterName` as well as `eventName`.
     *        If `emitterName` is not defined, `UI` is assumed.
     * @param callback {Function} subscriber:will be invoked when the event occurs. An `eventobject` will be passed
     *        as its only argument.
     * @param [filter] {String|Function} to filter the event.
     *        Use a String if you want to filter DOM-events by a `selector`
     *        Use a function if you want to filter by any other means. If the function returns a trully value, the
     *        subscriber gets invoked. The function gets the `eventobject` as its only argument and the context is
     *        the subscriber.
     * @param [prepend=false] {Boolean} whether the subscriber should be the first in the list of before-subscribers.
     * @return {Object} handler with a `detach()`-method which can be used to detach the subscriber
     * @since 0.0.1
    */
    onceBefore: function (customEvent, callback, filter, prepend) {
        return Event.onceBefore(customEvent, callback, this, filter, prepend);
    }
};
},{"./index.js":10}],10:[function(require,module,exports){
module.exports = require('./event-base.js');
require('./event-emitter.js');
require('./event-listener.js');
},{"./event-base.js":7,"./event-emitter.js":8,"./event-listener.js":9}],11:[function(require,module,exports){
/**
 *
 * Pollyfils for often used functionality for Functions
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/function.js
 * @class Function
 *
*/

"use strict";

require('polyfill/polyfill-base.js');

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty = function (object, name, method, force) {
	if (!force && (name in object)) {
		return;
	}
	Object.defineProperty(object, name, {
		configurable: true,
		enumerable: false,
		writable: true,
		value: method
	});
};
var defineProperties = function (object, map, force) {
	var names = Object.keys(map),
		l = names.length,
		i = -1,
		name;
	while (++i < l) {
		name = names[i];
		defineProperty(object, name, map[name], force);
	}
};
var NOOP = function () {};

/**
 * Pollyfils for often used functionality for Function
 * @class Function
*/

defineProperties(Function.prototype, {

	/**
	 * Merges the given map of properties into the `prototype` of the Class.
	 * **Not** to be used on instances.
	 *
	 * The members in the hash map will become members with
	 * instances of the merged class.
	 *
	 * By default, this method will not override existing prototype members,
	 * unless the second argument `force` is true.
	 *
	 * @method mergePrototypes
	 * @param map {Object} Hash map of properties to add to the prototype of this object
	 * @param force {Boolean}  If true, existing members will be overwritten
	 * @chainable
	 */
	mergePrototypes: function (map, force) {
		var instance = this,
		    proto = instance.prototype,
		    names = Object.keys(map || {}),
			l = names.length,
			i = -1,
			name, nameInProto;
		while (++i < l) {
			name = names[i];
			nameInProto = (name in proto);
			if (!nameInProto || force) {
				// if nameInProto: set the property, but also backup for chaining using $orig
				if (typeof map[name] === 'function') {
/*jshint -W083 */
					proto[name] = (function (original, methodName) {
						return function () {
/*jshint +W083 */
							instance.$orig[methodName] = original;
							return map[methodName].apply(this, arguments);
						};
					})(proto[name] || NOOP, name);
				}
				else {
					proto[name] = map[name];
				}
			}
		}
		return instance;
	},

	/**
	 * Returns a newly created class inheriting from this class
	 * using the given `constructor` with the
	 * prototypes listed in `prototypes` merged in.
	 *
	 *
	 * The newly created class has the `$super` static property
	 * available to access all of is ancestor's instance methods.
	 *
	 * Further methods can be added via the [mergePrototypes](#method_mergePrototypes).
	 *
	 * @example
	 *
	 * 	var Circle = Shape.subClass(
	 * 		function (x, y, r) {
	 * 			this.r = r;
	 * 			Circle.$super.constructor.call(this, x, y);
	 * 		},
	 * 		{
	 * 			area: function () {
	 * 				return this.r * this.r * Math.PI;
	 * 			}
	 * 		}
	 * 	);
	 *
	 * @method subClass
	 * @param [constructor] {Function} The function that will serve as constructor for the new class.
	 *        If `undefined` defaults to `Object.constructor`
	 * @param [prototypes] {Object} Hash map of properties to be added to the prototype of the new class.
	 * @return the new class.
	 */
	subClass: function (constructor, prototypes) {

		if ((arguments.length === 1) && (typeof constructor !== 'function')) {
			prototypes = constructor;
			constructor = null;
		}


		constructor = constructor || function (ancestor) {
			return function () {
				ancestor.apply(this, arguments);
			};
		}(this);


		var baseProt = this.prototype,
			rp = Object.create(baseProt);
		constructor.prototype = rp;

		rp.constructor = constructor;
		constructor.$super = baseProt;
		constructor.$orig = {};

		constructor.mergePrototypes(prototypes, true);
		return constructor;
	},

	/**
	 * Sets the context of which the function will be execute. in the
	 * supplied object's context, optionally adding any additional
	 * supplied parameters to the end of the arguments the function
	 * is executed with.
	 *
	 * @method rbind
	 * @param [context] {Object} the execution context.
	 *        The value is ignored if the bound function is constructed using the new operator.
	 * @param [args*] {any} args* 0..n arguments to append to the end of
	 *        arguments collection supplied to the function.
	 * @return {function} the wrapped function.
	 */
	rbind: function (context /*, args* */ ) {
		var thisFunction = this,
			arrayArgs,
			slice = Array.prototype.slice;
		context || (context = this);
		if (arguments.length > 1) {
			// removing `context` (first item) by slicing it out:
			arrayArgs = slice.call(arguments, 1);
		}

		return (arrayArgs ?
			function () {
				// over here, `arguments` will be the "new" arguments when the final function is called!
				return thisFunction.apply(context, slice.call(arguments, 0).concat(arrayArgs));
			} :
			function () {
				// over here, `arguments` will be the "new" arguments when the final function is called!
				return thisFunction.apply(context, arguments);
			}
		);
	}
});

/**
 * Returns a base class with the given constructor and prototype methods
 *
 * @for Object
 * @method createClass
 * @param [constructor] {Function} constructor for the class
 * @param [prototype] {Object} Hash map of prototype members of the new class
 * @return {Function} the new class
*/
defineProperty(Object.prototype, 'createClass', function () {
	return Function.prototype.subClass.apply(this, arguments);
});
},{"polyfill/polyfill-base.js":15}],12:[function(require,module,exports){
/**
 *
 * Pollyfils for often used functionality for Objects
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/object.js
 * @class Object
 *
*/

"use strict";

require('polyfill/polyfill-base.js');

var TYPES = {
       'undefined' : true,
       'number' : true,
       'boolean' : true,
       'string' : true,
       '[object Function]' : true,
       '[object RegExp]' : true,
       '[object Array]' : true,
       '[object Date]' : true,
       '[object Error]' : true,
       '[object Promise]' : true
   },

// Define configurable, writable and non-enumerable props
// if they don't exist.
defineProperty = function (object, name, method, force) {
    if (!force && (name in object)) {
        return;
    }
    Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: method
    });
},
defineProperties = function (object, map, force) {
    var names = Object.keys(map),
        l = names.length,
        i = -1,
        name;
    while (++i < l) {
        name = names[i];
        defineProperty(object, name, map[name], force);
    }
},

_each = function (obj, fn, context) {
    var keys = Object.keys(obj),
        l = keys.length,
        i = -1,
        key;
    while (++i < l) {
        key = keys[i];
        fn.call(context, obj[key], key, obj);
    }
    return obj;
},

cloneObj = function(obj) {
    var copy, i, len, value;

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        len = obj.length;
        for (i=0; i<len; i++) {
            value = obj[i];
            copy[i] = ((value===null) || (typeof value!=='object')) ? value : cloneObj(value);
        }
        return copy;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Object
    else if (obj instanceof Object) {
        copy = obj.deepClone();
    }

    return copy;
};

/**
 * Pollyfils for often used functionality for objects
 * @class Object
*/
defineProperties(Object.prototype, {
    /**
     * Loops through all properties in the object.  Equivalent to Array.forEach.
     * The callback is provided with the value of the property, the name of the property
     * and a reference to the whole object itself.
     * The context to run the callback in can be overriden, otherwise it is undefined.
     *
     * @method each
     * @param fn {Function} Function to be executed on each item in the object.  It will receive
     *                      value {any} value of the property
     *                      key {string} name of the property
     *                      obj {Object} the whole of the object
     * @chainable
     */
    each: function (fn, context) {
        if (context) return _each(this, fn, context);
        var keys = Object.keys(this),
            l = keys.length,
            i = -1,
            key;
        while (++i < l) {
            key = keys[i];
            fn(this[key], key, this);
        }
        return this;
    },

    /**
     * Loops through the properties in an object until the callback function returns *truish*.
     * The callback is provided with the value of the property, the name of the property
     * and a reference to the whole object itself.
     * The order in which the elements are visited is not predictable.
     * The context to run the callback in can be overriden, otherwise it is undefined.
     *
     * @method some
     * @param fn {Function} Function to be executed on each item in the object.  It will receive
     *                      value {any} value of the property
     *                      key {string} name of the property
     *                      obj {Object} the whole of the object
     * @return {Boolean} true if the loop was interrupted by the callback function returning *truish*.
     */
    some: function (fn, context) {
        var keys = Object.keys(this),
            l = keys.length,
            i = -1,
            key;
        while (++i < l) {
            key = keys[i];
            if (fn.call(context, this[key], key, this)) {
                return true;
            }
        }
        return false;
    },

    /**
     * Loops through the properties in an object until the callback assembling a new object
     * with its properties set to the values returned by the callback function.
     * If the callback function returns `undefined` the property will not be copied to the new object.
     * The resulting object will have the same keys as the original, except for those where the callback
     * returned `undefined` which will have dissapeared.
     * The callback is provided with the value of the property, the name of the property
     * and a reference to the whole object itself.
     * The context to run the callback in can be overriden, otherwise it is undefined.
     *
     * @method map
     * @param fn {Function} Function to be executed on each item in the object.  It will receive
     *                      value {any} value of the property
     *                      key {string} name of the property
     *                      obj {Object} the whole of the object
     * @return {Object} The new object with its properties set to the values returned by the callback function.
     */
    map: function (fn, context) {
        var keys = Object.keys(this),
            l = keys.length,
            i = -1,
            m = {},
            val, key;
        while (++i < l) {
            key = keys[i];
            val = fn.call(context, this[key], key, this);
            if (val !== undefined) {
                m[key] = val;
            }
        }
        return m;
    },
    /**
     * Returns the keys of the object.
     *
     * @method keys
     * @return {Array} Keys of the object
     */
    keys: function () {
        return Object.keys(this);
    },
    /**
     * Returns the number of keys of the object
     *
     * @method size
     * @return {Number} Number of items
     */
    size: function () {
        return Object.keys(this).length;
    },
    /**
     * Loops through the object collection the values of all its properties.
     * It is the counterpart of the [`keys`](#method_keys).
     *
     * @method values
     * @return {Array} values of the object
     */
    values: function () {
        var keys = Object.keys(this),
            i = -1,
            len = keys.length,
            values = [];

        while (++i < len) {
            values.push(this[keys[i]]);
        }

        return values;
    },

    /**
     * Returns true if the object has no own members
     *
     * @method isEmpty
     * @return {Boolean} true if the object is empty
     */
    isEmpty: function () {
        for (var key in this) {
            if (this.hasOwnProperty(key)) return false;
        }
        return true;
    },

    /**
     * Returns a shallow copy of the object.
     * It does not clone objects within the object, it does a simple, shallow clone.
     * Fast, mostly useful for plain hash maps.
     *
     * @method shallowClone
     * @return {Object} shallow copy of the original
     */
    shallowClone: function () {
        var m = {},
            keys = Object.keys(this),
            l = keys.length,
            i = -1,
            key;
        while (++i < l) {
            key = keys[i];
            m[key] = this[key];
        }
        return m;
    },

    /**
     * Compares this object with the reference-object whether they have the same value.
     * Not by reference, but their content as simple types.
     *
     * Compares both JSON.stringify objects
     *
     * @method sameValue
     * @param refObj {Object} the object to compare with
     * @return {Boolean} whether both objects have the same value
     */
    sameValue: function(refObj) {
        return JSON.stringify(this)===JSON.stringify(refObj);
    },

    /**
     * Returns a deep copy of the object.
     * Only handles members of primary types, Dates, Arrays and Objects.
     *
     * @method deepClone
     * @return {Object} deep-copy of the original
     */
    deepClone: function () {
        var m = {},
            keys = Object.keys(this),
            l = keys.length,
            i = -1,
            key, value;
        // loop through the members:
        while (++i < l) {
            key = keys[i];
            value = this[key];
            m[key] = ((value===null) || (typeof value!=='object')) ? value : cloneObj(value);
        }
        return m;
    },

    /**
     * Transforms the object into an array with  'key/value' objects
     *
     * @example
     * {country: 'USA', Continent: 'North America'} --> [{key: 'country', value: 'USA'}, {key: 'Continent', value: 'North America'}]
     *
     * @method toArray
     * @param [options] {Object}
     * @param [options.key] {String} to overrule the default `key`-property-name
     * @param [options.value] {String} to overrule the default `value`-property-name
     * @return {Array} the transformed Array-representation of the object
     */
    toArray: function(options) {
        var newArray = [],
            keyIdentifier = (options && options.key) || 'key',
            valueIdentifier = (options && options.value) || 'value';
        this.each(function(value, key) {
            var obj = {};
            obj[keyIdentifier] = key;
            obj[valueIdentifier] = value;
            newArray[newArray.length] = obj;
        });
        return newArray;
    },

    /**
     * Merges into this object the properties of the given object.
     * If the second argument is true, the properties on the source object will be overwritten
     * by those of the second object of the same name, otherwise, they are preserved.
     *
     * @method merge
     * @param obj {Object} Object with the properties to be added to the original object
     * @param force {Boolean} If true, the properties in `obj` will override those of the same name
     *        in the original object
     * @chainable
     */
    merge: function (obj, force) {
        var m = this;
        if (obj && obj.each) obj.each(function (value, key) {
            if (force || !(key in m)) {
                m[key] = obj[key];
            }
        });
        return m;
    }

});

/**
* Returns true if the item is an object, but no Array, Function, RegExp, Date or Error object
*
* @method isObject
* @static
* @return {Boolean} true if the object is empty
*/
Object.isObject = function (item) {
   return !!(!TYPES[typeof item] && !TYPES[({}.toString).call(item)] && item);
};

/**
 * Creates a protected property on the object.
 *
 * @method protectedProp
 * @static
 */
Object.protectedProp = function(obj, property, value) {
    Object.defineProperty(obj, property, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: value
    });
};

/**
 * Returns a new object resulting of merging the properties of the given objects.
 * The copying is shallow, complex properties will reference the very same object.
 * Properties in later objects do **not overwrite** properties of the same name in earlier objects.
 * If any of the objects is missing, it will be skiped.
 *
 * @example
 *
 *  var foo = function (config) {
 *       config = Object.merge(config, defaultConfig);
 *  }
 *
 * @method merge
 * @static
 * @param obj* {Object} Objects whose properties are to be merged
 * @return {Object} new object with the properties merged in.
 */
Object.merge = function () {
    var m = {};
    Array.prototype.forEach.call(arguments, function (obj) {
        if (obj) m.merge(obj);
    });
    return m;
};
},{"polyfill/polyfill-base.js":15}],13:[function(require,module,exports){
(function (global){
// based upon https://gist.github.com/jonathantneal/3062955
(function (global) {
    "use strict";

    global.Element && (function(ElementPrototype) {
        ElementPrototype.matchesSelector ||
            (ElementPrototype.matchesSelector = ElementPrototype.mozMatchesSelector ||
                                                ElementPrototype.msMatchesSelector ||
                                                ElementPrototype.oMatchesSelector ||
                                                ElementPrototype.webkitMatchesSelector ||
                                                function (selector) {
                                                    var node = this,
                                                        nodes = (node.parentNode || global.document).querySelectorAll(selector),
                                                        i = -1;
                                                    while (nodes[++i] && (nodes[i] !== node));
                                                    return !!nodes[i];
                                                }
            );
    }(global.Element.prototype));

}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
(function (global){
(function (global) {
    "use strict";

    var CONSOLE = {
            log: function() { /* NOOP */ },
            info: function() { /* NOOP */ },
            warn: function() { /* NOOP */ },
            error: function() { /* NOOP */ }
        };

    global.console || (function(GlobalPrototype) {
        GlobalPrototype.console = CONSOLE;
    }(global.prototype));

    module.exports = CONSOLE;
}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
require('./lib/window.console.js');
require('./lib/matchesselector.js');
},{"./lib/matchesselector.js":13,"./lib/window.console.js":14}],16:[function(require,module,exports){
module.exports=require(13)
},{}],17:[function(require,module,exports){
module.exports=require(14)
},{}],18:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":16,"./lib/window.console.js":17}],19:[function(require,module,exports){
/**
 *
 * Pollyfils for often used functionality for Arrays
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/array.js
 * @class Array
 *
 */

"use strict";

require('polyfill/polyfill-base.js');

var cloneObj = function(obj) {
    var copy, i, len, value;

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        len = obj.length;
        for (i=0; i<len; i++) {
            value = obj[i];
            copy[i] = ((value===null) || (typeof value!=='object')) ? value : cloneObj(value);
        }
        return copy;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Object
    else if (obj instanceof Object) {
        copy = obj.deepClone();
    }

    return copy;
};

(function(ArrayPrototype) {

    /**
     * Checks whether an item is inside the Array.
     * Alias for (array.indexOf(item) > -1)
     *
     * @method contains
     * @param item {Any} the item to seek
     * @return {Boolean} whether the item is part of the Array
     */
    Array.contains || (ArrayPrototype.contains=function(item) {
        return (this.indexOf(item) > -1);
    });

    /**
     * Removes an item from the array
     *
     * @method remove
     * @param item {any|Array} the item (or an hash of items) to be removed
     * @param [arrayItem=false] {Boolean} whether `item` is an arrayItem that should be treated as a single item to be removed
     *        You need to set `arrayItem=true` in those cases. Otherwise, all single items from `item` are removed separately.
     * @chainable
     */
    Array.remove || (ArrayPrototype.remove=function(item, arrayItem) {
        var instance = this,
            removeItem = function(oneItem) {
                var index = instance.indexOf(oneItem);
                (index > -1) && instance.splice(index, 1);
            };
        if (!arrayItem && Array.isArray(item)) {
            item.forEach(removeItem);
        }
        else {
            removeItem(item);
        }
        return instance;
    });

    /**
     * Replaces an item in the array. If the previous item is not part of the array, the new item is appended.
     *
     * @method replace
     * @param prevItem {any} the item to be replaced
     * @param newItem {any} the item to be added
     * @chainable
     */
    Array.replace || (ArrayPrototype.replace=function(prevItem, newItem) {
        var instance = this,
            index = instance.indexOf(prevItem);
        (index!==-1) ? instance.splice(index, 1, newItem) : instance.push(newItem);
        return instance;
    });

    /**
     * Inserts an item in the array at the specified position. If index is larger than array.length, the new item(s) will be appended.
     *
     * @method insertAt
     * @param item {any|Array} the item to be replaced, may be an Array of items
     * @param index {Number} the position where to add the item(s). When larger than Array.length, the item(s) will be appended.
     * @chainable
     */
    Array.insertAt || (ArrayPrototype.insertAt=function(item, index) {
        this.splice(index, 0, item);
        return this;
    });

    /**
     * Shuffles the items in the Array randomly
     *
     * @method shuffle
     * @chainable
     */
    Array.shuffle || (ArrayPrototype.shuffle=function() {
        var instance = this,
            counter = instance.length,
            temp, index;
        // While there are elements in the instance
        while (counter>0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = instance[counter];
            instance[counter] = instance[index];
            instance[index] = temp;
        }
        return instance;
    });

    /**
     * Returns a deep copy of the Array.
     * Only handles members of primary types, Dates, Arrays and Objects.
     *
     * @method deepClone
     * @return {Array} deep-copy of the original
     */
     ArrayPrototype.deepClone = function () {
        return cloneObj(this);
     };

}(Array.prototype));
},{"polyfill/polyfill-base.js":24}],20:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":24}],21:[function(require,module,exports){
/**
 *
 * Pollyfils for often used functionality for Strings
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/string.js
 * @class String
 *
 */

"use strict";

(function(StringPrototype) {
    var SUBREGEX  = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,
        DATEPATTERN = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
        WHITESPACE_CLASS = "[\\s\uFEFF\xA0]+",
        TRIM_LEFT_REGEX  = new RegExp('^' + WHITESPACE_CLASS),
        TRIM_RIGHT_REGEX = new RegExp(WHITESPACE_CLASS + '$'),
        TRIMREGEX        = new RegExp(TRIM_LEFT_REGEX.source + '|' + TRIM_RIGHT_REGEX.source, 'g'),
        PATTERN_EMAIL = new RegExp('^[\\w!#$%&\'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&\'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\\.)+[a-zA-Z]{2,}$'),
        PATTERN_URLEND = '([a-zA-Z0-9]+\\.)*(?:[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\\.)+[a-zA-Z]{2,}(/[\\w-]+)*$',
        PATTERN_URLHTTP = new RegExp('^http://'+PATTERN_URLEND),
        PATTERN_URLHTTPS = new RegExp('^https://'+PATTERN_URLEND),
        PATTERN_URL = new RegExp('^(https?://)?'+PATTERN_URLEND),
        PATTERN_INTEGER = /^(([-]?[1-9][0-9]*)|0)$/,
        PATTERN_FLOAT_START = '^([-]?(([1-9][0-9]*)|0))?(\\',
        PATTERN_FLOAT_END = '[0-9]+)?$',
        PATTERN_FLOAT_COMMA = new RegExp(PATTERN_FLOAT_START + ',' + PATTERN_FLOAT_END),
        PATTERN_FLOAT_DOT = new RegExp(PATTERN_FLOAT_START + '.' + PATTERN_FLOAT_END),
        PATTERN_HEX_COLOR_ALPHA = /^#?[0-9A-F]{4}([0-9A-F]{4})?$/,
        PATTERN_HEX_COLOR = /^#?[0-9A-F]{3}([0-9A-F]{3})?$/;

    /**
     * Checks whether the substring is part if this String.
     * Alias for (String.indexOf(substring) > -1)
     *
     * @method contains
     * @param substring {String} the substring to test for
     * @param [caseInsensitive=false] {Boolean} whether to ignore case-sensivity
     * @return {Boolean} whether the substring is found
     */
    String.contains || (StringPrototype.contains=function(substring, caseInsensitive) {
        return caseInsensitive ? (this.toLowerCase().indexOf(substring.toLowerCase()) > -1) : (this.indexOf(substring) > -1);
    });

    /**
     * Checks if the string ends with the value specified by `test`
     *
     * @method endsWith
     * @param test {String} the string to test for
     * @param [caseInsensitive=false] {Boolean} whether to ignore case-sensivity
     * @return {Boolean} whether the string ends with `test`
     */
    String.endsWith || (StringPrototype.endsWith=function(test, caseInsensitive) {
        return (new RegExp(test+'$', caseInsensitive ? 'i': '')).test(this);
    });

    /**
     * Checks if the string can be parsed into a number when using `parseInt()`
     *
     * @method parsable
     * @return {Boolean} whether the string is parsable
     */
    String.parsable || (StringPrototype.parsable=function() {
        // strange enough, NaN doen't let compare itself, so we need a strange test:
        // parseInt(value, 10)===parseInt(value, 10)
        // which returns `true` for a parsable value, otherwise false
        return (parseInt(this)===parseInt(this));
    });

    /**
     * Checks if the string starts with the value specified by `test`
     *
     * @method startsWith
     * @param test {String} the string to test for
     * @param [caseInsensitive=false] {Boolean} whether to ignore case-sensivity
     * @return {Boolean} whether the string starts with `test`
     */
    String.startsWith || (StringPrototype.startsWith=function(test, caseInsensitive) {
        return (new RegExp('^'+test, caseInsensitive ? 'i': '')).test(this);
    });

    /**
     * Performs `{placeholder}` substitution on a string. The object passed
     * provides values to replace the `{placeholder}`s.
     * `{placeholder}` token names must match property names of the object.
     *
     * `{placeholder}` tokens that are undefined on the object map will be removed.
     *
     * @example
     * var greeting = '{message} {who}!';
     * greeting.substitute({message: 'Hello'}); // results into 'Hello !'
     *
     * @method substitute
     * @param obj {Object} Object containing replacement values.
     * @return {String} the substitute result.
     */
    String.substitute || (StringPrototype.substitute=function(obj) {
        return this.replace(SUBREGEX, function (match, key) {
            return (obj[key]===undefined) ? '' : obj[key];
        });
    });

    /**
     * Returns a ISO-8601 Date-object build by the String's value.
     * If the String-value doesn't match ISO-8601, `null` will be returned.
     *
     * ISO-8601 Date's are generated by JSON.stringify(), so it's very handy to be able to reconvert them.
     *
     * @example
     * var birthday = '2010-02-10T14:45:30.000Z';
     * birthday.toDate(); // --> Wed Feb 10 2010 15:45:30 GMT+0100 (CET)
     *
     * @method toDate
     * @return {Date|null} the Date represented by the String's value or null when invalid
     */
    String.toDate || (StringPrototype.toDate=function() {
        return DATEPATTERN.test(this) ? new Date(this) : null;
    });

    /**
     * Generated the string without any white-spaces at the start or end.
     *
     * @method trim
     * @return {String} new String without leading and trailing white-spaces
     */
    String.trim || (StringPrototype.trim=function() {
        return this.replace(TRIMREGEX, '');
    });

    /**
     * Generated the string without any white-spaces at the beginning.
     *
     * @method trimLeft
     * @return {String} new String without leading white-spaces
     */
    String.trimLeft || (StringPrototype.trimLeft=function() {
        return this.replace(TRIM_LEFT_REGEX, '');
    });

    /**
     * Generated the string without any white-spaces at the end.
     *
     * @method trimRight
     * @return {String} new String without trailing white-spaces
     */
    String.trimRight || (StringPrototype.trimRight=function() {
        return this.replace(TRIM_RIGHT_REGEX, '');
    });

    /**
     * Validates if the String's value represents a valid emailaddress.
     *
     * @method validateEmail
     * @return {Boolean} whether the String's value is a valid emailaddress.
     */
    StringPrototype.validateEmail = function() {
        return PATTERN_EMAIL.test(this);
    };

    /**
     * Validates if the String's value represents a valid floated number.
     *
     * @method validateFloat
     * @param [comma] {Boolean} whether to use a comma as decimal separator instead of a dot
     * @return {Boolean} whether the String's value is a valid floated number.
     */
    StringPrototype.validateFloat = function(comma) {
        return comma ? PATTERN_FLOAT_COMMA.test(this) : PATTERN_FLOAT_DOT.test(this);
    };

    /**
     * Validates if the String's value represents a hexadecimal color.
     *
     * @method validateHexaColor
     * @param [alpha=false] {Boolean} whether to accept alpha transparancy
     * @return {Boolean} whether the String's value is a valid hexadecimal color.
     */
    StringPrototype.validateHexaColor = function(alpha) {
        return alpha ? PATTERN_HEX_COLOR_ALPHA.test(this) : PATTERN_HEX_COLOR.test(this);
    };

    /**
     * Validates if the String's value represents a valid integer number.
     *
     * @method validateNumber
     * @return {Boolean} whether the String's value is a valid integer number.
     */
    StringPrototype.validateNumber = function() {
        return PATTERN_INTEGER.test(this);
    };

    /**
     * Validates if the String's value represents a valid boolean.
     *
     * @method validateNumber
     * @return {Boolean} whether the String's value is a valid integer number.
     */
    StringPrototype.validateBoolean = function() {
        var length = this.length,
            check;
        if ((length<4) || (length>5)) {
            return false;
        }
        check = this.toUpperCase();
        return ((check==='TRUE') || (check==='FALSE'));
    };

    /**
     * Validates if the String's value represents a valid URL.
     *
     * @method validateURL
     * @param [options] {Object}
     * @param [options.http] {Boolean} to force matching starting with `http://`
     * @param [options.https] {Boolean} to force matching starting with `https://`
     * @return {Boolean} whether the String's value is a valid URL.
     */
    StringPrototype.validateURL = function(options) {
        var instance = this;
        options || (options={});
        if (options.http && options.https) {
            return false;
        }
        return options.http ? PATTERN_URLHTTP.test(instance) : (options.https ? PATTERN_URLHTTPS.test(instance) : PATTERN_URL.test(instance));
    };

}(String.prototype));

},{}],22:[function(require,module,exports){
module.exports=require(13)
},{}],23:[function(require,module,exports){
module.exports=require(14)
},{}],24:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":22,"./lib/window.console.js":23}],25:[function(require,module,exports){
module.exports=require(13)
},{}],26:[function(require,module,exports){
module.exports=require(14)
},{}],27:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":25,"./lib/window.console.js":26}],28:[function(require,module,exports){
module.exports = {
	idGenerator: require('./lib/idgenerator.js').idGenerator,
    later: require('./lib/timers.js').later,
    laterSilent: require('./lib/timers.js').laterSilent,
    async: require('./lib/timers.js').async,
    asyncSilent: require('./lib/timers.js').asyncSilent
};
},{"./lib/idgenerator.js":29,"./lib/timers.js":30}],29:[function(require,module,exports){
"use strict";

require('polyfill/polyfill-base.js');

var UNDEFINED_NS = '__undefined__';
var namespaces = {};

/**
 * Collection of various utility functions.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module utils
 * @class Utils
 * @static
*/


/**
 * Generates an unique id with the signature: "namespace-follownr"
 *
 * @example
 *
 *     var generator = require('core-utils-idgenerator');
 *
 *     console.log(generator()); // --> 1
 *     console.log(generator()); // --> 2
 *     console.log(generator(1000)); // --> 1000
 *     console.log(generator()); // --> 1001
 *     console.log(generator('Parcel, 500')); // -->"Parcel-500"
 *     console.log(generator('Parcel')); // -->"Parcel-501"
 *
 *
 * @method idGenerator
 * @param [namespace] {String} namespace to prepend the generated id.
 *        When ignored, the generator just returns a number.
 * @param [start] {Number} startvalue for the next generated id. Any further generated id's will preceed this id.
 *        If `start` is lower or equal than the last generated id, it will be ignored.
 * @return {Number|String} an unique id. Either a number, or a String (digit prepended with "namespace-")
 */
module.exports.idGenerator = function(namespace, start) {
	// in case `start` is set at first argument, transform into (null, start)
	(typeof namespace==='number') && (start=namespace) && (namespace=null);
	namespace || (namespace=UNDEFINED_NS);

	if (!namespaces[namespace]) {
		namespaces[namespace] = start || 1;
	}
	else if (start && (namespaces[namespace]<start)) {
		namespaces[namespace] = start;
	}
	return (namespace===UNDEFINED_NS) ? namespaces[namespace]++ : namespace+'-'+namespaces[namespace]++;
};

},{"polyfill/polyfill-base.js":33}],30:[function(require,module,exports){
(function (global){
/**
 * Collection of various utility functions.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module utils
 * @class Utils
 * @static
*/


(function (global) {

	"use strict";

	require('polyfill/polyfill-base.js');

	var NAME = '[utils-timers]: ',
	    _asynchronizer, _async, _asynchronizerSilent, _later;

	/**
	 * Forces a function to be run asynchronously, but as fast as possible. In Node.js
	 * this is achieved using `setImmediate` or `process.nextTick`.
	 *
	 * @method _asynchronizer
	 * @param callbackFn {Function} The function to call asynchronously
	 * @static
	 * @private
	**/
	_asynchronizer = (typeof global.setImmediate !== 'undefined') ?
						function (fn) {
							global.setImmediate(fn);
						} :
                	((typeof global.process !== 'undefined') && global.process.nextTick) ?
                		global.process.nextTick :
                		function (fn) {
                    		global.setTimeout(fn, 0);
                    	};

	/**
	 * Forces a function to be run asynchronously, but as fast as possible. In Node.js
	 * this is achieved using `setImmediate` or `process.nextTick`.
	 *
	 * @method _asynchronizerSilent
	 * @param callbackFn {Function} The function to call asynchronously
	 * @static
	 * @private
	**/
	_asynchronizerSilent = (typeof global.setImmediate !== 'undefined') ?
								function (fn) {
									global._setImmediate(fn);
								} :
		                		function (fn) {
		                    		global._setTimeout(fn, 0);
		                    	};

	/**
	 * Invokes the callbackFn once in the next turn of the JavaScript event loop. If the function
	 * requires a specific execution context or arguments, wrap it with Function.bind.
	 *
	 * I.async returns an object with a cancel method.  If the cancel method is
	 * called before the callback function, the callback function won't be called.
	 *
	 * @method async
	 * @param {Function} callbackFn
	 * @param [invokeAfterFn=true] {boolean} set to false to prevent the _afterSyncFn to be invoked
	 * @return {Object} An object with a cancel method.  If the cancel method is
	 * called before the callback function, the callback function won't be called.
	**/
	_async = function (callbackFn, invokeAfterFn) {
		console.log(NAME, 'async');
		invokeAfterFn = (typeof invokeAfterFn === 'boolean') ? invokeAfterFn : true;
		var canceled, callback,
			// if not available, then don't invoke the afterFn:
		    originalTimer = (invokeAfterFn || !global._setTimeout);

		if (typeof callbackFn==='function') {
			callback = function () {
				if (!canceled) {
		        	console.log(NAME, 'async is running its callbackFn');
					callbackFn();
				}
			};
			originalTimer ? _asynchronizer(callback) : _asynchronizerSilent(callback);
		}

		return {
			cancel: function () {
				canceled = true;
			}
		};
	};

	/**
	 * Invokes the callbackFn once in the next turn of the JavaScript event loop. If the function
	 * requires a specific execution context or arguments, wrap it with Function.bind.
	 *
	 * I.async returns an object with a cancel method.  If the cancel method is
	 * called before the callback function, the callback function won't be called.
	 *
	 * @method async
	 * @param {Function} callbackFn
	 * @param [invokeAfterFn=true] {boolean} set to false to prevent the _afterSyncFn to be invoked
	 * @return {Object} An object with a cancel method.  If the cancel method is
	 * called before the callback function, the callback function won't be called.
	**/
	module.exports.async = _async;
	module.exports.asyncSilent = function() {
		return _async.call(this, arguments[0], false);
	};

	/**
	 * Invokes the callbackFn after a timeout (asynchronous). If the function
	 * requires a specific execution context or arguments, wrap it with Function.bind.
	 *
	 * To invoke the callback function periodic, set 'periodic' either 'true', or specify a second timeout.
	 * If number, then periodic is considered 'true' but with a perdiod defined by 'periodic',
	 * which means: the first timer executes after 'timeout' and next timers after 'period'.
	 *
	 * I.later returns an object with a cancel method.  If the cancel() method is
	 * called before the callback function, the callback function won't be called.
	 *
	 * @method later
	 * @param callbackFn {Function} the function to execute.
	 * @param [timeout] {Number} the number of milliseconds to wait until the callbackFn is executed.
	 * when not set, the callback function is invoked once in the next turn of the JavaScript event loop.
	 * @param [periodic] {boolean|Number} if true, executes continuously at supplied, if number, then periodic is considered 'true' but with a perdiod
	 * defined by 'periodic', which means: the first timer executes after 'timeout' and next timers after 'period'.
	 * The interval executes until canceled.
	 * @param [invokeAfterFn=true] {boolean} set to false to prevent the _afterSyncFn to be invoked
	 * @return {object} a timer object. Call the cancel() method on this object to stop the timer.
	*/
	_later = function (callbackFn, timeout, periodic, invokeAfterFn) {
		console.log(NAME, 'later --> timeout: '+timeout+'ms | periodic: '+periodic);
		// if not available, then don't invoke the afterFn:
		invokeAfterFn = (typeof invokeAfterFn === 'boolean') ? invokeAfterFn : true;
		if (!timeout) {
			return _async(callbackFn, invokeAfterFn);
		}
		var interval = periodic,
			secondtimeout = (typeof interval==='number'),
		    canceled = false,
		    originalTimer = (invokeAfterFn || !global._setTimeout),
			secondairId,
			wrapper = function() {
				// IE 8- and also nodejs may execute a callback, so in order to preserve
				// the cancel() === no more runny-run, we have to build in an extra conditional
				if (!canceled) {
	            	console.log(NAME, 'later is running its callbakcFn');
					callbackFn();
					if (secondtimeout) {
						secondairId = originalTimer ? global.setInterval(wrapperInterval, interval) : global._setInterval(wrapperInterval, interval);
					}
					// break closure inside returned object:
					id = null;
				}
			},
			wrapperInterval = function() {
				// IE 8- and also nodejs may execute a setInterval callback one last time
				// after clearInterval was called, so in order to preserve
				// the cancel() === no more runny-run, we have to build in an extra conditional
				if (!canceled) {
	            	console.log(NAME, 'later is running its callbakcFn');
					callbackFn();
				}
			},
			id;
		if (typeof callbackFn==='function') {
/*jshint boss:true */
			if (id=(interval && !secondtimeout)) {
/*jshint boss:false */
				originalTimer ? global.setInterval(wrapperInterval, timeout) : global._setInterval(wrapperInterval, timeout);
			}
			else {
				originalTimer ? global.setTimeout(wrapper, timeout) : global._setTimeout(wrapper, timeout);
			}
		}

		return {
			cancel: function() {
				canceled = true;
				(interval && !secondtimeout) ? clearInterval(id) : clearTimeout(id);
				secondairId && clearInterval(secondairId);
				// break closure:
				id = null;
				secondairId = null;
			}
		};
	};

	module.exports.later = _later;

	module.exports.laterSilent = function() {
		var args = arguments,
			newArgs = [];
		newArgs[0] = args[0];
		newArgs[1] = args[1];
		newArgs[2] = args[2];
		newArgs[3] = false;
		return _later.apply(this, newArgs);
	};


}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"polyfill/polyfill-base.js":33}],31:[function(require,module,exports){
module.exports=require(13)
},{}],32:[function(require,module,exports){
module.exports=require(14)
},{}],33:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":31,"./lib/window.console.js":32}],34:[function(require,module,exports){
var css = "var css = \".itsa-notrans, .itsa-notrans2,\\n.itsa-notrans:before, .itsa-notrans2:before,\\n.itsa-notrans:after, .itsa-notrans2:after {\\n    -webkit-transition: none !important;\\n    -moz-transition: none !important;\\n    -ms-transition: none !important;\\n    -o-transition: all 0s !important; /* opera doesn't support none */\\n    transition: none !important;\\n}\\n\\n.itsa-no-overflow {\\n    overflow: hidden !important;\\n}\\n\\n.itsa-invisible {\\n    position: absolute !important;\\n}\\n\\n.itsa-invisible-relative {\\n    position: relative !important;\\n}\\n\\n/* don't set visibility to hidden --> you cannot set a focus on those items */\\n.itsa-invisible,\\n.itsa-invisible-relative {\\n    opacity: 0 !important;\\n}\\n\\n.itsa-invisible *,\\n.itsa-invisible-relative * {\\n    opacity: 0 !important;\\n}\\n\\n.itsa-transparent {\\n    opacity: 0;\\n}\\n\\n/* don't set visibility to hidden --> you cannot set a focus on those items */\\n.itsa-hidden {\\n    opacity: 0 !important;\\n    position: absolute !important;\\n    left: -9999px !important;\\n    top: -9999px !important;\\n    z-index: -9;\\n}\\n\\n.itsa-hidden * {\\n    opacity: 0 !important;\\n}\\n\\n.itsa-block {\\n    display: block !important;\\n}\\n\\n.itsa-borderbox {\\n    -webkit-box-sizing: border-box;\\n    -moz-box-sizing: border-box;\\n    box-sizing: border-box;\\n}\"; (require(\"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify\"))(css); module.exports = css;"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],35:[function(require,module,exports){
(function (global){
/**
 *
 * Pollyfils for often used functionality for Strings
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/string.js
 * @class String
 *
 */
(function (global) {

    "use strict";

    require('../lib/function.js');
    require('../lib/array.js');
    require('../lib/object.js');
    require('polyfill/lib/weakmap.js');

    var LightMap;

    global.LightMap = LightMap = Object.createClass(
        function() {
            Object.protectedProp(this, '_array', []);
            Object.protectedProp(this, '_map', new global.WeakMap());
        },
        {
            each: function(fn, context) {
                var instance = this,
                    array = instance._array,
                    l = array.length,
                    i = -1,
                    obj, value;
                while (++i < l) {
                    obj = array[i];
                    value = instance.get(obj); // read from WeakMap
                    fn.call(context, value, obj, instance);
                }
                return instance;
            },
            some: function(fn, context) {
                var instance = this,
                    array = instance._array,
                    l = array.length,
                    i = -1,
                    obj, value;
                while (++i < l) {
                    obj = array[i];
                    value = instance.get(obj); // read from WeakMap
                    if (fn.call(context, value, obj, instance)) {
                        return true;
                    }
                }
                return false;
            },
            clear: function() {
                var instance = this,
                    array = instance._array;
                array.forEach(function(key) {
                    instance.delete(key, true);
                });
                array.length = 0;
            },
            has: function(object) {
                return this._map.has(object);
            },
            get: function(key, fallback) {
                return this._map.get(key, fallback);
            },
            set: function (key, value) {
                var instance = this,
                    array = instance._array,
                    map = instance._map;
                map.set(key, value);
                array.contains(key) || array.push(key);
                return instance;
            },
            'delete': function (key) {
                var instance = this,
                    array = instance._array,
                    map = instance._map,
                    silent = arguments[1], // hidden feature used by `clear()`
                    returnValue = map.delete(key);
                silent || array.remove(key);
                return returnValue;
            }
        }
    );

}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../lib/array.js":36,"../lib/function.js":37,"../lib/object.js":38,"polyfill/lib/weakmap.js":42}],36:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":44}],37:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":44}],38:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":44}],39:[function(require,module,exports){
"use strict";

/**
 * Provides additional Promise-methods. These are extra methods which are not part of the PromiseA+ specification,
 * But are all Promise/A+ compatable.
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module js-ext
 * @submodule lib/promise.s
 * @class Promise
*/

require('polyfill');

var NAME = '[promise-ext]: ',
    FUNCTION_EXPECTED = ' expects an array of function-references', // include leading space!
    PROMISE_CHAIN = 'Promise.chain';

(function(PromisePrototype) {
    /**
     * Promise which can be put at the very end of a chain, even after .catch().
     * Will invoke the callback function regardless whether the chain resolves or rejects.
     *
     * The argument of the callback will be either its fulfilled or rejected argument, but
     * it is wisely not to handle it. The results should have been handled in an earlier step
     * of the chain: .finally() basicly means you want to execute code after the chain, regardless
     * whether it's resolved or rejected.
     *
     * **Note:** .finally() <u>does not return a Promise</u>: it should be used as the very last step of a Promisechain.
     * If you need an intermediate method, you should take .thenFulfill().
     *
     * @method finally
     * @param finallyback {Function} the callbackfunctio to be invoked.
     * @return {Promise}
     */
    PromisePrototype.finally = function (finallyback) {
        console.log(NAME, 'finally');
        return this.then(finallyback, finallyback);
    };

    /**
     * Will always return a fulfilled Promise.
     *
     * Typical usage will be by making it part of a Promisechain: it makes the chain go
     * into its fulfilled phase.
     *
     * @example
     *
     * promise1
     * .then(promise2)
     * .thenFulfill()
     * .then(handleFulfilled, handleRejected) // handleFulfilled always gets invoked
     * @method thenFulfill
     * @param [response] {Object} parameter to pass through which overrules the original Promise-response.
     * @return {Promise} Resolved Promise. `response` will be passed trough as parameter when set.
     *         When not set: in case the original Promise resolved, its parameter is passed through.
     *         in case of a rejection, no parameter will be passed through.
     */
    PromisePrototype.thenFulfill = function (callback) {
        console.log(NAME, 'thenFulfill');
        return this.then(
            function(r) {
                return r;
            },
            function(r) {
                return r;
            }
        ).then(callback);
    };
}(Promise.prototype));

/**
 * Returns a Promise that always fulfills. It is fulfilled when ALL items are resolved (either fulfilled
 * or rejected). This is useful for waiting for the resolution of multiple
 * promises, such as reading multiple files in Node.js or making multiple XHR
 * requests in the browser. Because -on the contrary of `Promise.all`- **finishAll** waits until
 * all single Promises are resolved, you can handle all promises, even if some gets rejected.
 *
 * @method finishAll
 * @param items {Any[]} an array of any kind of items, promises or not. If a value is not a promise,
 * its transformed into a resolved promise.
 * @return {Promise} A promise for an array of all the fulfillment items:
 * <ul>
 *     <li>Fulfilled: o {Object}
 *         <ul>
 *             <li>fulfilled {Array} all fulfilled responses, any item that was rejected will have a value of `undefined`</li>
 *             <li>rejected {Array} all rejected responses, any item that was fulfilled will have a value of `undefined`</li>
 *         </ul>
 *     </li>
 *     <li>Rejected: this promise **never** rejects</li>
 * </ul>
 * @static
 */
Promise.finishAll = function (items) {
    console.log(NAME, 'finishAll');
    return new Promise(function (fulfill) {
        // Array.isArray assumes ES5
        Array.isArray(items) || (items=[items]);

        var remaining        = items.length,
            length           = items.length,
            fulfilledresults = [],
            rejectedresults  = [],
            i;

        function oneDone(index, fulfilled) {
            return function (value) {
                fulfilled ? (fulfilledresults[index]=value) : (rejectedresults[index]=value);
                remaining--;
                if (!remaining) {
                    console.log(NAME, 'finishAll is fulfilled');
                    fulfill({
                        fulfilled: fulfilledresults,
                        rejected: rejectedresults
                    });
                }
            };
        }

        if (length < 1) {
            console.warn(NAME, 'finishAll fulfilles immediately: no items');
            return fulfill({
                        fulfilled: fulfilledresults,
                        rejected: rejectedresults
                    });
        }

        fulfilledresults.length = length;
        rejectedresults.length = length;
        for (i=0; i < length; i++) {
            Promise.resolve(items[i]).then(oneDone(i, true), oneDone(i, false));
        }
    });
};

/**
 * Returns a Promise which chains the function-calls. Like an automated Promise-chain.
 * Invokes the functionreferences in a chain. You MUST supply function-references, it doesn't
 * matter wheter these functions return a Promise or not. Any returnvalues are passed through to
 * the next function.
 *
 * **Cautious:** you need to pass function-references, not invoke them!
 * chainFns will invoke them when the time is ready. Regarding to this, there is a difference with
 * using Promise.all() where you should pass invoked Promises.
 *
 * If one of the functions returns a Promise, the chain
 * will wait its execution for this function to be resolved.
 *
 * If you need specific context or arguments: use Function.bind for these items.
 * If one of the items returns a rejected Promise, by default: the whole chain rejects
 * and following functions in the chain will not be invoked. When `finishAll` is set `true`
 * the chain will always continue even with rejected Promises.
 *
 * Returning functionvalues are passed through the chain adding them as an extra argument
 * to the next function in the chain (argument is added on the right)
 *
 * @example
 *     var a = [], p1, p2, p3;
 *     p1 = function(a) {
 *         return new Promise(function(resolve, reject) {
 *             I.later(function() {
 *                 console.log('resolving promise p1: '+a);
 *                 resolve(a);
 *             }, 1000);
 *         });
 *     };
 *     p2 = function(b, r) {
 *         var value = b+r;
 *         console.log('returning p2: '+value);
 *         return value;
 *     };
 *     p3 = function(c, r) {
 *         return new Promise(function(resolve, reject) {
 *             I.later(function() {
 *                 var value = b+r;
 *                 console.log('resolving promise p3: '+value);
 *                 resolve(value);
 *             }, 1000);
 *         });
 *     };
 *     a.push(p1.bind(undefined, 100));
 *     a.push(p2.bind(undefined, 200));
 *     a.push(p3.bind(undefined, 300));
 *     Promise.chainFns(a).then(
 *         function(r) {
 *             console.log('chain resolved with '+r);
 *         },
 *         function(err) {
 *             console.log('chain-error '+err);
 *         }
 *     );
 *
 * @method chainFns
 * @param funcs {function[]} an array of function-references
 * @param [finishAll=false] {boolean} to force the chain to continue, even if one of the functions
 *        returns a rejected Promise
 * @return {Promise}
 * on success:
    * o {Object} returnvalue of the laste item in the Promisechain
 * on failure an Error object
    * reason {Error}
 * @static
 */
Promise.chainFns = function (funcs, finishAll) {
    console.log(NAME, 'chainFns');
    var handleFn, length, handlePromiseChain,
        i = 0;
    // Array.isArray assumes ES5
    Array.isArray(funcs) || (funcs=[funcs]);
    length = funcs.length;
    handleFn = function() {
        var nextFn = funcs[i],
            promise;
        if (typeof nextFn !== 'function') {
            return Promise.reject(new TypeError(PROMISE_CHAIN+FUNCTION_EXPECTED));
        }
        promise = Promise.resolve(nextFn.apply(null, arguments));
        // by using "promise.catch(function(){})" we return a resolved Promise
        return finishAll ? promise.thenFulfill() : promise;
    };
    handlePromiseChain = function() {
        // will loop until rejected, which is at destruction of the class
        return handleFn.apply(null, arguments).then((++i<length) ? handlePromiseChain : undefined);
    };
    return handlePromiseChain();
};

/**
 * Returns a Promise with 4 additional methods:
 *
 * promise.fulfill
 * promise.reject
 * promise.callback
 * promise.setCallback
 *
 * With Promise.manage, you get a Promise which is managable from outside, not inside as Promise A+ work.
 * You can invoke promise.**callback**() which will invoke the original passed-in callbackFn - if any.
 * promise.**fulfill**() and promise.**reject**() are meant to resolve the promise from outside, just like deferred can do.
 *
 * @example
 *     var promise = Promise.manage(
 *         function(msg) {
 *             alert(msg);
 *         }
 *     );
 *
 *     promise.then(
 *         function() {
 *             // promise is fulfilled, no further actions can be taken
 *         }
 *     );
 *
 *     setTimeout(function() {
 *         promise.callback('hey, I\'m still busy');
 *     }, 1000);
 *
 *     setTimeout(function() {
 *         promise.fulfill();
 *     }, 2000);
 *
 * @method manage
 * @param [callbackFn] {Function} invoked everytime promiseinstance.callback() is called.
 *        You may as weel (re)set this method atny time lare by using promise.setCallback()
 * @return {Promise} with three handles: fulfill, reject and callback.
 * @static
 */
Promise.manage = function (callbackFn) {
    console.log(NAME, 'manage');
    var fulfillHandler, rejectHandler, promise, finished;

    promise = new Promise(function (fulfill, reject) {
        fulfillHandler = fulfill;
        rejectHandler = reject;
    });

    promise.fulfill = function (value) {
        console.log(NAME, 'manage.fulfill');
        finished = true;
        fulfillHandler(value);
    };

    promise.reject = function (reason) {
        console.log(NAME, 'manage.reject '+((typeof reason==='string') ? reason : reason && (reason.message || reason.description)));
        finished = true;
        rejectHandler(reason);
    };

    promise.callback = function () {
        if (!finished && callbackFn) {
            console.log(NAME, 'manage.callback is invoked');
            callbackFn.apply(undefined, arguments);
        }
    };

    promise.setCallback = function (newCallbackFn) {
        callbackFn = newCallbackFn;
    };

    return promise;
};

},{"polyfill":44}],40:[function(require,module,exports){
module.exports=require(21)
},{}],41:[function(require,module,exports){
module.exports=require(13)
},{}],42:[function(require,module,exports){
(function (global){
// based upon https://gist.github.com/Gozala/1269991

(function (global) {
    "use strict";
    var defineNamespace, Name, guard;

    if (!global.WeakMap) {
        defineNamespace = function(object, namespace) {
            /**
            Utility function takes `object` and `namespace` and overrides `valueOf`
            method of `object`, so that when called with a `namespace` argument,
            `private` object associated with this `namespace` is returned. If argument
            is different, `valueOf` falls back to original `valueOf` property.
            **/

            // Private inherits from `object`, so that `this.foo` will refer to the
            // `object.foo`. Also, original `valueOf` is saved in order to be able to
            // delegate to it when necessary.
            var privates = Object.create(object),
                base = object.valueOf;
            Object.defineProperty(object, 'valueOf', {
                value: function valueOf(value) {
                    // If `this` or `namespace` is not associated with a `privates` being
                    // stored we fallback to original `valueOf`, otherwise we return privates.
                    return ((value !== namespace) || (this !== object)) ? base.apply(this, arguments) : privates;
                },
                configurable: true
            });
            return privates;
        };

        Name = function() {
            /**
            Desugared implementation of private names proposal. API is different as
            it's not possible to implement API proposed for harmony with in ES5. In
            terms of provided functionality it supposed to be same.
            http://wiki.ecmascript.org/doku.php?id=strawman:private_names
            **/

            var namespace = {};
            return function name(object) {
                var privates = object.valueOf(namespace);
                return (privates !== object) ? privates : defineNamespace(object, namespace);
            };
        };

        guard = function(key) {
            /**
            Utility function to guard WeakMap methods from keys that are not
            a non-null objects.
            **/

            if (key !== Object(key)) {
                throw new TypeError("value is not a non-null object");
            }
            return key;
        };

        global.WeakMap = function() {
            /**
            Implementation of harmony `WeakMaps`, in ES5. This implementation will
            work only with keys that have configurable `valueOf` property (which is
            a default for all non-frozen objects).
            http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps
            **/

            var privates = new Name();

            return Object.freeze(Object.create(WeakMap.prototype, {
                has: {
                    value: function has(object) {
                        return 'value' in privates(object);
                    },
                    configurable: true,
                    enumerable: false,
                    writable: true
                },
                get: {
                    value: function get(key, fallback) {
                        return privates(guard(key)).value || fallback;
                    },
                    configurable: true,
                    enumerable: false,
                    writable: true
                },
                set: {
                    value: function set(key, value) {
                        privates(guard(key)).value = value;
                        return this;
                    },
                    configurable: true,
                    enumerable: false,
                    writable: true
                },
                'delete': {
                    value: function set(key) {
                        return delete privates(guard(key)).value;
                    },
                    configurable: true,
                    enumerable: false,
                    writable: true
                }
            }));
        };
    }

}(typeof global !== 'undefined' ? global : /* istanbul ignore next */ this));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],43:[function(require,module,exports){
module.exports=require(14)
},{}],44:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":41,"./lib/window.console.js":43}],45:[function(require,module,exports){
"use strict";

/*
 * Returns the right transform-property for the current environment.
 *
 * `transform`, `-webkit-transform`, `-moz-transform`, `-ms-transform`, `-o-transform` or `undefined` when not supported
 */

module.exports = function (window) {

    // NOTE: CANNOT use dependency to js-ext/lib/object.js --> would be circular!
    if (!window._ITSAmodules) {
        Object.defineProperty(window, '_ITSAmodules', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {} // `writable` is false means we cannot chance the value-reference, but we can change {} its members
        });
    }

    if (window._ITSAmodules.Transition) {
        return window._ITSAmodules.Transition; // Transition was already created
    }

    var DOCUMENT_STYLE = window.document.documentElement.style,
        RANSITION = 'ransition',
        TRANSITION = 't'+RANSITION,
        VENDORS = ['-webkit-', '-moz-', '-ms-', '-o-'],
        transition;

    // Map transition properties to vendor-specific versions.
    // One-off required for cssText injection.
    if ((TRANSITION in DOCUMENT_STYLE) && (TRANSITION+'Property' in DOCUMENT_STYLE) &&
        (TRANSITION+'Duration' in DOCUMENT_STYLE) && (TRANSITION+'TimingFunction' in DOCUMENT_STYLE) && (TRANSITION+'Delay' in DOCUMENT_STYLE)) {
        transition = TRANSITION;
    }
    else {
        VENDORS.some(function(val) { // then vendor specific
            var property1 = val + TRANSITION,
                property2 = val + 'T'+RANSITION;
            ((typeof DOCUMENT_STYLE[property1] !== 'undefined') || (typeof DOCUMENT_STYLE[property2] !== 'undefined')) && (transition=property1);
            return transition;
        });
    }

    window._ITSAmodules.Transition = transition || TRANSITION;

    return transition;
};
},{}],46:[function(require,module,exports){
"use strict";

module.exports = function (window) {

    // NOTE: CANNOT use dependency to js-ext/lib/object.js --> would be circular!
    if (!window._ITSAmodules) {
        Object.defineProperty(window, '_ITSAmodules', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {} // `writable` is false means we cannot chance the value-reference, but we can change {} its members
        });
    }

    if (window._ITSAmodules.TransitionEnd) {
        return window._ITSAmodules.TransitionEnd; // TransitionEnd was already created
    }

    var DOCUMENT_STYLE = window.document.documentElement.style,
        transitions = {},
        ransition = 'ransition',
        transition = 't'+ransition,
        end = 'end',
        transitionEnd, t;

    transitions[transition] = transition+end;
    transitions['WebkitT'+ransition] = 'webkitT'+ransition+'End';
    transitions['MozT'+ransition] = transition+end;
    transitions['OT'+ransition] = 'o'+transition+end;

    for (t in transitions) {
        if (typeof DOCUMENT_STYLE[t] !== 'undefined') {
            transitionEnd = transitions[t];
            break;
        }
    }

    window._ITSAmodules.TransitionEnd = transitionEnd;

    return transitionEnd;
};
},{}],47:[function(require,module,exports){
(function (global){
"use strict";

/*
 * Returns the vendor-specific transform-property for the current environment.
 *
 * `transform`, `-webkit-transform`, `-moz-transform`, `-ms-transform`, `-o-transform` or `undefined` when not supported
 */

var toCamelCase = function(input) {
        return input.replace(/-(.)/g, function(match, group) {
            return group.toUpperCase();
        });
    },
    UNDEFINED = 'undefined';

module.exports = function (window) {

    // NOTE: CANNOT use dependency to js-ext/lib/object.js --> would be circular!
    if (!window._ITSAmodules) {
        Object.defineProperty(window, '_ITSAmodules', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {} // `writable` is false means we cannot chance the value-reference, but we can change {} its members
        });
    }

    if (window._ITSAmodules.VendorCSS) {
        return window._ITSAmodules.VendorCSS; // VendorCSS was already created
    }

    var DOCUMENT_STYLE = window.document.documentElement.style,
        RUNNING_ON_NODE = (typeof global !== 'undefined') && (global.window!==window),
        VENDORS = ['-webkit-', '-moz-', '-ms-', '-o-'],
        vendorCSS;

    window._ITSAmodules.VendorCSS = vendorCSS = {
        generator: function(cssProperty) {
            var vendorProperty;
            if (cssProperty==='') {
                return '';
            }
            if (!RUNNING_ON_NODE && !vendorCSS.cssProps[cssProperty]) {
                if (typeof DOCUMENT_STYLE[cssProperty] !== UNDEFINED) {
                    vendorProperty = cssProperty;
                }
                else {
                    VENDORS.some(function(val) { // then vendor specific
                        var property = val + cssProperty,
                            propertyCamelCase = toCamelCase(property);
                        if ((typeof DOCUMENT_STYLE[property] !== UNDEFINED) || (typeof DOCUMENT_STYLE[propertyCamelCase] !== UNDEFINED)) {
                            vendorProperty = property;
                        }
                        return vendorProperty;
                    });
                }
                vendorCSS.cssProps[vendorProperty] = true;
            }
            return vendorProperty || cssProperty;
        },

        cssProps: {}
    };

    return vendorCSS;
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],48:[function(require,module,exports){
module.exports=require(13)
},{}],49:[function(require,module,exports){
module.exports=require(14)
},{}],50:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":48,"./lib/window.console.js":49}],51:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":52,"./lib/timers.js":53}],52:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":56}],53:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":56}],54:[function(require,module,exports){
module.exports=require(13)
},{}],55:[function(require,module,exports){
module.exports=require(14)
},{}],56:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":54,"./lib/window.console.js":55}],57:[function(require,module,exports){
"use strict";

module.exports = function (window) {
    require('./lib/sizes.js')(window);
};
},{"./lib/sizes.js":58}],58:[function(require,module,exports){
"use strict";

require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.WindowSizes) {
        return; // WindowSizes was already created
    }

    window._ITSAmodules.WindowSizes = true;

    var getScrollOffsets = function() {
        var doc = window.document;
        // this works for all browsers in non quircks-mode and only for IE9+:
        if (window.pageXOffset!==undefined) { // do not "just" check for `window.pageXOffset` --> it could be `0`
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        }
        // for IE (or any other browser) in standards mode
        if (doc.compatMode === 'CSS1Compat') {
            return {
                x: doc.documentElement.scrollLeft,
                y: doc.documentElement.scrollTop
            };
        }
        // for browsers in quircks mode:
        return {
            x: doc.body.scrollLeft,
            y: doc.body.scrollTop
        };
    },

    getViewportSize = function() {
        var doc = window.document;
        // this works for all browsers in non quircks-mode and only for IE9+:
        if (window.innerWidth!==undefined) { // do not "just" check for `window.innerWidth` --> it could be `0`
            return {
                w: window.innerWidth,
                h: window.innerHeight
            };
        }
        // for IE (or any other browser) in standards mode
        if (doc.compatMode === 'CSS1Compat') {
            return {
                w: doc.documentElement.clientWidth,
                h: doc.documentElement.clientHeight
            };
        }
        // for browsers in quircks mode:
        return {
            w: doc.body.clientWidth,
            h: doc.body.clientHeight
        };
    };

    /**
     * Gets the left-scroll offset of the window.
     *
     * @method getScrollLeft
     * @return {Number} left-offset in pixels
     * @since 0.0.1
    */
    window.getScrollLeft = function() {
        return getScrollOffsets().x;
    };
    /**
     * Gets the top-scroll offset of the window.
     *
     * @method getScrollTop
     * @return {Number} top-offset in pixels
     * @since 0.0.1
    */
    window.getScrollTop = function() {
        return getScrollOffsets().y;
    };
   /**
    * Gets the width of the window.
    *
    * @method getWidth
    * @return {Number} width in pixels
    * @since 0.0.1
    */
    window.getWidth = function() {
        return getViewportSize().w;
    };
   /**
    * Gets the height of the window.
    *
    * @method getHeight
    * @return {Number} width in pixels
    * @since 0.0.1
    */
    window.getHeight = function() {
        return getViewportSize().h;
    };

};
},{"js-ext/lib/object.js":59}],59:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":62}],60:[function(require,module,exports){
module.exports=require(13)
},{}],61:[function(require,module,exports){
module.exports=require(14)
},{}],62:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":60,"./lib/window.console.js":61}],63:[function(require,module,exports){
"use strict";

/**
 * Exports `htmlToVNodes` which transforms html-text into vnodes.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule attribute-extractor
 * @since 0.0.1
*/

require('js-ext/lib/string.js');
require('js-ext/lib/object.js');
require('polyfill');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.AttributeExtractor) {
        return window._ITSAmodules.AttributeExtractor; // AttributeExtractor was already created
    }

    var SUPPORT_INLINE_PSEUDO_STYLES = false, // current browsers don't support this. When tey do, set this value `true`
        END_OF_VALUE = {
            ';': true,
            '}': true
        },
        VENDOR_CSS = require('polyfill/extra/vendorCSS.js')(window),
        generateVendorCSSProp = VENDOR_CSS.generator,
        VENDOR_CSS_PROPERTIES = VENDOR_CSS.cssProps,
        VENDOR_TRANSITION_PROPERTY = require('polyfill/extra/transition.js')(window), // DO NOT use TRANSITION-variable here --> browserify cannot deal this
        _serializeTransition, _parseTransition, extractor;

    window.document._supportInlinePseudoStyles = SUPPORT_INLINE_PSEUDO_STYLES;

    _serializeTransition = function(transitionValue) {
        // transitionValue should an Object !!
        var serialized = '',
            timingFunction, delay;
        transitionValue.each(function(value, key) {
            timingFunction = value.timingFunction;
            delay = value.delay;
            serialized += ', ' + key;
            if (key!=='none') {
                serialized += ' ' + value.duration+'s';
                timingFunction && (serialized+=' ' + timingFunction);
                delay && (serialized+=' ' + delay+'s');
            }
        });
        return (serialized[0]===',') ? serialized.substr(2) : serialized;
    };

    _parseTransition = function(transitionValueSerialised) {
        var parsed = {},
            i, len, transitionItem, item, items, value, properties, item0, item1, item2, item3;
        if (transitionValueSerialised) {
            properties = transitionValueSerialised.split(',');
            len = properties.length;
            for (i=0; i<len; i++) {
                items = properties[i].trim();
                (items.indexOf('  ')!==-1) && items.replace(/'  '/g, ' ');
                item = items.split(' ');
                item0 = item[0];
                item1 = item[1];
                item2 = item[2];
                item3 = item[3];

                if (item0.parsable()) {
                    // no key, but starting with a duration
                    item3 = item2;
                    item2 = item1;
                    item1 = item0;
                    item0 = 'all';
                }

                transitionItem = {};
                (item0.toLowerCase()==='none') && (item0='none');
                if (item0!=='none') {
                    transitionItem.duration = parseFloat(item1) || 0;
/*jshint boss:true */
                    if (value=item2) {
/*jshint boss:false */
                        // check if it is a Function, or a delayvalue
                        if (value.parsable()) {
                            transitionItem.delay = parseFloat(value);
                        }
                        else {
                            transitionItem.timingFunction = value;
                            (value=item3) && (transitionItem.delay = parseFloat(value));
                        }
                    }
                }
                // allways transform the css-property into a vendor-safe property:
                VENDOR_CSS_PROPERTIES[item0] || (item0=generateVendorCSSProp(item0));
                parsed[item0] = transitionItem;
            }
        }
        return parsed;
    };

    extractor = window._ITSAmodules.AttributeExtractor = {
        extractClass: function(classes) {
            var attrClass = '',
                classNames = {},
                oneclass, len, i, character;
            if (classes) {
                oneclass = '';
                len = classes.length;
                for (i=0; i<len; i++) {
                    character = classes[i];
                    if (character===' ') {
                        if (oneclass!=='') {
                            classNames[oneclass] = true;
                            attrClass += ' '+oneclass;
                            oneclass = '';
                        }
                    }
                    else {
                        oneclass += character;
                    }
                }
                if (oneclass!=='') {
                    classNames[oneclass] = true;
                    attrClass += ' '+oneclass;
                }
            }
            return {
                attrClass: (attrClass==='') ? undefined : attrClass.substr(1),
                classNames: classNames
            };
        },

        extractStyle: function(styles) {
        /*  be aware you can encounter inline style like this:

            style="{color: blue; background: white}
            :visited {color: green}
            :hover {background: yellow}
            :visited:hover {color: purple}

            OR

            style="color: blue; background: white"


            Also, you might encounter inline transform, which should be separated itself:

            style="{color: blue; background: white; transform: translateX(10px) matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0) translateY(5px);}
            :visited {color: green}
            :hover {background: yellow; transform: translateX(10px) matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0) translateY(5px);}
            :visited:hover {color: purple}

            OR

            style="color: blue; background: white; transform: translateX(10px) matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0) translateY(5px);"

        */
            var newStyles = {},
                instance = this,
                i, onlyElement, len, character, groupKey, key, value, insideValue, insideKey, hasValue, group;
            if (styles) {
                i = -1;
                len = styles.length;

                // first eliminate leading spaces
    /*jshint noempty:true */
                while ((++i<len) && (character=styles[i]) && (character===' ')) {}
    /*jshint noempty:false */

                // preview next character
                character = styles[i];
                onlyElement = (character && (character!=='{') && (character!==':'));
                if (onlyElement) {
                    newStyles.element = {};
                    group = newStyles.element;
                    groupKey = 'element';
                    insideKey = true;
                }
                else {
                    groupKey = '';
                }

                // now process
                key = '';
                insideValue = false;
                i--;
                while ((++i<len) && (character=styles[i])) {
                    if (insideValue) {
                        hasValue = true;
                        if (END_OF_VALUE[character]) {
                            value = value.trim();
                            // in case `key` equals a variant of `transform`, but non-compatible with the current browser -->
                            // redefine it into a browser-compatible version:
                            VENDOR_CSS_PROPERTIES[key] || (key=generateVendorCSSProp(key));
                            // store the property:
                            if ((SUPPORT_INLINE_PSEUDO_STYLES || (groupKey==='element')) && (value.length>0)) {
                                group[key] = ((key===VENDOR_TRANSITION_PROPERTY) ? _parseTransition(value) : value);
                            }
                            key = '';
                            insideValue = false;
                            insideKey = (character===';');
                            insideKey || (groupKey='');
                        }
                        else {
                            value += character;
                        }
                    }
                    else if (insideKey) {
                        if (character===':'){
                            insideKey = false;
                            insideValue = true;
                            key = key.trim();
                            value = '';
                        }
                        else if (character==='}') {
                            insideKey = false;
                            groupKey = '';
                        }
                        else {
                            key += character;
                        }
                    }
                    else {
                        if (character==='{') {
                            groupKey = groupKey.trim();
                            (groupKey==='') && (groupKey='element');
                            group = newStyles[groupKey] = {};
                            insideKey = true;
                            key = '';
                        }
                        else {
                            groupKey += character;
                        }
                    }
                }
                if (insideValue) {
                    value = value.trim();
                    // in case `key` equals a variant of `transition`, but non-compatible with the current browser -->
                    // redefine it into a browser-compatible version:
                    VENDOR_CSS_PROPERTIES[key] || (key=generateVendorCSSProp(key));
                    // store the property:
                    if ((SUPPORT_INLINE_PSEUDO_STYLES || (groupKey==='element')) && (value.length>0)) {
                        group[key] = ((key===VENDOR_TRANSITION_PROPERTY) ? _parseTransition(value) : value);
                    }
                }
            }
            if (!SUPPORT_INLINE_PSEUDO_STYLES) {
                delete newStyles[':before'];
                delete newStyles[':after'];
            }
            return {
                attrStyle: hasValue && instance.serializeStyles(newStyles),
                styles: newStyles
            };
        },

        toTransitionObject: function(value) {
            return _parseTransition(value);
        },

        serializeTransition: function(value) {
            return _serializeTransition(value);
        },

        serializeStyles: function(styles) {
            var serialized = '',
                onlyElementStyle = ((styles.size()===1) && styles.element);
            if (onlyElementStyle || !SUPPORT_INLINE_PSEUDO_STYLES) {
                styles.element && styles.element.each(function(value, key) {
                    serialized += ' '+ key + ': ' + ((key===VENDOR_TRANSITION_PROPERTY) ? _serializeTransition(value) : value) + ';';
                });
            }
            else {
                styles.each(function(groupValue, groupKey) {
                    (groupKey==='element') || (serialized += ' '+groupKey+' ');
                    serialized += '{';
                    groupValue.each(function(value, key) {
                        serialized += key + ': ' + ((key===VENDOR_TRANSITION_PROPERTY) ? _serializeTransition(value) : value) + '; ';
                    });
                    serialized += '}';
                });
                (serialized==='{}') && (serialized='');
            }
            return (serialized[0]===' ') ? serialized.substr(1) : serialized;
        }
    };

    return extractor;

};
},{"js-ext/lib/object.js":38,"js-ext/lib/string.js":40,"polyfill":50,"polyfill/extra/transition.js":45,"polyfill/extra/vendorCSS.js":47}],64:[function(require,module,exports){
"use strict";

/**
 * Extends Array into an array with special utility-methods that can be applied upon its members.
 * The membres should be vElement's
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule element-array
 * @class ElementArray
 * @since 0.0.1
*/

require('polyfill');
require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.ElementArray) {
        return window._ITSAmodules.ElementArray; // ElementArray was already created
    }

    var forEach = function(list, method, args) {
            var len = list.length,
                i, element;
            for (i=0; i<len; i++) {
                element = list[i];
                element[method].apply(element, args);
            }
            return list;
        },
        NodeListPrototype = window.NodeList.prototype,
        HTMLCollectionPrototype = window.HTMLCollection.prototype,
        arrayMethods = Object.getOwnPropertyNames(Array.prototype),
        ElementArray,
        ElementArrayMethods = {
           /**
            * For all vElements of the ElementArray:
            * Appends a HtmlElement or text at the end of HtmlElement's innerHTML.
            *
            * @method append
            * @param content {HtmlElement|HtmlElementList|String} content to append
            * @param escape {Boolean} whether to insert `escaped` content, leading it into only text inserted
            * @chainable
            * @since 0.0.1
            */
            append: function(/* content, escape */) {
                return forEach(this, 'append', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Sets the inline-style of the HtmlElement exactly to the specified `value`, overruling previous values.
            * Making the HtmlElement's inline-style look like: style="value".
            *
            * This is meant for a quick one-time setup. For individually inline style-properties to be set, you can use `setInlineStyle()`.
            *
            * @method defineInlineStyle
            * @param value {String} the style string to be set
            * @chainable
            * @since 0.0.1
            */
            defineInlineStyle: function(/* value */) {
                return forEach(this, 'defineInlineStyle', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Checks whether the plugin is plugged in at ALL the HtmlElements of the NodeList/HTMLCollection.
            * Checks whether all its attributes are set.
            *
            * @method isPlugged
            * @param pluginClass {NodePlugin} The plugin that should be plugged. Needs to be the Class, not an instance!
            * @return {Boolean} whether the plugin is plugged in
            * @since 0.0.1
            */
            isPlugged: function(NodePluginClass) {
                return this.every(function(element) {
                    return element.isPlugged(NodePluginClass);
                });
            },

           /**
            * For all vElements of the ElementArray:
            * Plugs in the plugin on the HtmlElement, and gives is special behaviour by setting the appropriate attributes.
            *
            * @method plug
            * @param pluginClass {NodePlugin} The plugin that should be plugged. Needs to be the Class, not an instance!
            * @param options {Object} any options that should be passed through when the class is instantiated.
            * @chainable
            * @since 0.0.1
            */
            plug: function(/* NodePluginClass, options */) {
                return forEach(this, 'plug', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Prepends a HtmlElement or text at the start of HtmlElement's innerHTML.
            *
            * @method prepend
            * @param content {HtmlElement|HtmlElementList|String} content to prepend
            * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
            * @chainable
            * @since 0.0.1
            */
            prepend: function(/* content, escape */) {
                return forEach(this, 'prepend', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Removes the attribute from the HtmlElement.
            *
            * Alias for removeAttribute().
            *
            * @method removeAttr
            * @param attributeName {String}
            * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
            * @chainable
            * @since 0.0.1
            */
            removeAttr: function(/* attributeName, silent */) {
                return forEach(this, 'removeAttr', arguments);
            },

           /**
            * For all vElements of the ElementArray:
             * Removes multiple attributes on the Element.
             * The argument should be one ore more AttributeNames.
             *
             * @example
             * instance.removeAttrs(['tabIndex', 'style']);
             *
             * @method removeAttrs
             * @param attributeData {Array|String}
             * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
            * @chainable
            * @since 0.0.1
            */
            removeAttrs: function(/* attributeData, silent */) {
                return forEach(this, 'removeAttrs', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Removes a className from the HtmlElement.
            *
            * @method removeClass
            * @param className {String} the className that should be removed.
            * @chainable
            * @since 0.0.1
            */
            removeClass: function(/* className */) {
                return forEach(this, 'removeClass', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Removes data specified by `key`. When no arguments are passed, all node-data (key-value pairs) will be removed.
            *
            * @method removeData
            * @param key {string} name of the key
            * @chainable
            * @since 0.0.1
            */
            removeData: function(/* key */) {
                return forEach(this, 'removeData', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Removes a css-property (inline) out of the HtmlElement. Use camelCase.
            *
            * @method removeInlineStyle
            * @param cssAttribute {String} the css-property to be removed
            * @chainable
            * @since 0.0.1
            */
            removeInlineStyle: function(/* cssAttribute */) {
                return forEach(this, 'removeInlineStyle', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Removes the HtmlElement from the DOM.
            *
            * @method removeNode
            * @since 0.0.1
            */
            removeNode: function() {
                var instance = this;
                forEach(this, 'remove');
                instance.length = 0;
                return instance;
            },

           /**
            * For all vElements of the ElementArray:
            * Replaces the className of the HtmlElement with a new className.
            * If the previous className is not available, the new className is set nevertheless.
            *
            * @method replaceClass
            * @param prevClassName {String} the className to be replaced
            * @param newClassName {String} the className to be set
            * @param [force ] {Boolean} whether the new className should be set, even is the previous className isn't there
            * @chainable
            * @since 0.0.1
            */
            replaceClass: function(/* prevClassName, newClassName, force */) {
                return forEach(this, 'replaceClass', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Replaces the HtmlElement with a new HtmlElement.
            *
            * @method replaceNode
            * @param newHtmlElement {HtmlElement|String} the new HtmlElement
            * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
            * @since 0.0.1
            */
            replaceNode: function(newHtmlElement, escape) {
                var instance = this,
                    len = instance.length,
                    i;
                for (i=len-1; i>=0; i--) {
                    instance[i] = instance[i].replace(newHtmlElement, escape);
                    // instance[i].replace(newHtmlElement, escape);
                }
                return instance;
            },

           /**
            * For all vElements of the ElementArray:
            * Sets the attribute on the HtmlElement with the specified value.
            *
            * Alias for setAttribute().
            *
            * @method setAttr
            * @param attributeName {String}
            * @param value {Any} the value that belongs to `key`
            * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
            * @chainable
            * @since 0.0.1
           */
            setAttr: function(/* attributeData, silent */) {
                return forEach(this, 'setAttr', arguments);
            },

           /**
            * For all vElements of the ElementArray:
             * Sets multiple attributes on the Element with the specified value.
             * The argument should be one ore more Objects with the properties: `name` and `value`
             *
             * @example
             * instance.setAttrs([
             *                      {name: 'tabIndex', value: '0'},
             *                      {name: 'style', value: 'color: #000;'}
             *                  ]);
             *
             * @method setAttrs
             * @param attributeData {Array|Object}
             * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
            * @chainable
            * @since 0.0.1
           */
            setAttrs: function(/* attributeName, value, silent */) {
                return forEach(this, 'setAttrs', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Adds a class to the HtmlElement. If the class already exists it won't be duplicated.
            *
            * @method setClass
            * @param className {String} className to be added
            * @chainable
            * @since 0.0.1
            */
            setClass: function(/* className */) {
                return forEach(this, 'setClass', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Stores arbitary `data` at the HtmlElement. This has nothing to do with node-attributes whatsoever,
            * it is just a way to bind any data to the specific Element so it can be retrieved later on with `getData()`.
            *
            * @method setData
            * @param key {string} name of the key
            * @param value {Any} the value that belongs to `key`
            * @chainable
            * @since 0.0.1
           */
            setData: function(/* key, value */) {
                return forEach(this, 'setData', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Sets the content of the HtmlElement (innerHTML). Careful: only set content like this if you controll the data and
            * are sure what is going inside. Otherwise XSS might occur. If you let the user insert, or insert right from a db,
            * you might be better of using setContent().
            *
            * @method setHTML
            * @param content {HtmlElement|HtmlElementList|String} content to append
            * @chainable
            * @since 0.0.1
            */
            setHTML: function(/* content */) {
                return forEach(this, 'setHTML', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Sets a css-property (inline) out of the HtmlElement. Use camelCase.
            *
            * Note: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine
            *
            * @method setStyle
            * @param cssAttribute {String} the css-property to be set
            * @param value {String} the css-value
            * @chainable
            * @since 0.0.1
            */
            setInlineStyle: function(/* cssAttribute, value */) {
                return forEach(this, 'setInlineStyle', arguments);
            },

            /**
            * For all vElements of the ElementArray:
             * Gets or sets the outerHTML of both the Element as well as the representing dom-node.
             * Goes through the vdom, so it's superfast.
             *
             * Use this property instead of `outerHTML`
             *
             * Syncs with the DOM.
             *
             * @method setOuterHTML
             * @param val {String} the new value to be set
             * @chainable
             * @since 0.0.1
             */
            setOuterHTML: function(/* content */) {
                return forEach(this, 'setOuterHTML', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Sets the content of the HtmlElement. This is a safe way to set the content, because HTML is not parsed.
            * If you do need to set HTML inside the node, use setHTML().
            *
            * @method setText
            * @param content {HtmlElement|HtmlElementList|String} content to append. In case of HTML, it will be escaped.
            * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
            * @chainable
            * @since 0.0.1
            */
            setText: function(/* content */) {
                return forEach(this, 'setText', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Toggles the className of the Element.
            *
            * @method toggleClass
            * @param className {String} the className that should be toggled
            * @chainable
            * @since 0.0.1
            */
            toggleClass: function(/* className */) {
                return forEach(this, 'toggleClass', arguments);
            },

           /**
            * For all vElements of the ElementArray:
            * Unplugs a NodePlugin from the HtmlElement.
            *
            * @method unplug
            * @param pluginClass {NodePlugin} The plugin that should be unplugged. Needs to be the Class, not an instance!
            * @chainable
            * @since 0.0.1
            */
            unplug: function(/* NodePluginClass */) {
                return forEach(this, 'unplug', arguments);
            }
        };


    // adding Array.prototype methods to NodeList.prototype
    // Note: this might be buggy in IE8 and below: https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Workarounds
    arrayMethods.forEach(function(methodName) {
        try {
            NodeListPrototype[methodName] || (NodeListPrototype[methodName]=Array.prototype[methodName]);
            HTMLCollectionPrototype[methodName] || (HTMLCollectionPrototype[methodName]=Array.prototype[methodName]);
        }
        catch(err) {
            // some properties have only getters and cannot (and don't need) to be set
        }
    });

    NodeListPrototype.merge(ElementArrayMethods);
    HTMLCollectionPrototype.merge(ElementArrayMethods);

    ElementArray = window._ITSAmodules.ElementArray = {
        // unfortunatly, Object.create(Array.prototype) or Object.create([]) don't work as expected -->
        // the bracket-notation isn't fucntional anymore:
        // see http://www.bennadel.com/blog/2292-extending-javascript-arrays-while-keeping-native-bracket-notation-functionality.htm
        createArray: function() {
            var newArray = [];
            newArray.merge(ElementArrayMethods);
            return newArray;
        }
    };

    return ElementArray;
};
},{"js-ext/lib/object.js":38,"polyfill":50}],65:[function(require,module,exports){
"use strict";

/**
 * Integrates DOM-events to event. more about DOM-events:
 * http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module vdom
 * @submodule element-plugin
 * @class Plugins
 * @since 0.0.1
*/

require('js-ext/lib/object.js');
require('js-ext/lib/string.js');
require('polyfill');

var fromCamelCase = function(input) {
        return input.replace(/[a-z]([A-Z])/g, function(match, group) {
            return match[0]+'-'+group.toLowerCase();
        });
    };

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.ElementPlugin) {
        return window._ITSAmodules.ElementPlugin; // ElementPlugin was already created
    }

    var nodePlugin, nodeConstrain, ElementPlugin;

    // also extend window.Element:
    window.Element && (function(ElementPrototype) {
       /**
        * Checks whether the plugin is plugged in at the HtmlElement. Checks whether all its attributes are set.
        *
        * @method isPlugged
        * @param pluginClass {NodePlugin} The plugin that should be plugged. Needs to be the Class, not an instance!
        * @return {Boolean} whether the plugin is plugged in
        * @since 0.0.1
        */
        ElementPrototype.isPlugged = function(nodePlugin) {
            return nodePlugin.validate(this);
        };

       /**
        * Plugs in the plugin on the HtmlElement, and gives is special behaviour by setting the appropriate attributes.
        *
        * @method plug
        * @param pluginClass {NodePlugin} The plugin that should be plugged. Needs to be the Class, not an instance!
        * @param config {Object} any config that should be passed through when the class is instantiated.
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.plug = function(nodePlugin, config) {
            nodePlugin.setup(this, config);
            return this;
        };

       /**
        * Unplugs a NodePlugin from the HtmlElement.
        *
        * @method unplug
        * @param pluginClass {NodePlugin} The plugin that should be unplugged. Needs to be the Class, not an instance!
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.unplug = function(nodePlugin) {
            nodePlugin.teardown(this);
            return this;
        };
    }(window.Element.prototype));

    nodePlugin = {
        setup: function (hostElement, config) {
            var instance = this,
                attrs = instance.defaults.shallowClone();
            attrs.merge(config, true);
            attrs.each(
                function(value, key) {
                    key = fromCamelCase(key);
                    value && hostElement.setAttr(instance.ns+'-'+key, value);
                }
            );
        } ,
        teardown: function (hostElement) {
            var instance = this,
                attrs = hostElement.vnode.attrs,
                ns = instance.ns+'-';
            attrs.each(
                function(value, key) {
                     key.startsWith(ns) && hostElement.removeAttr(key);
                }
            );
        },
        validate: function (hostElement) {
            var instance = this,
                attrs = hostElement.vnode.attrs,
                ns = instance.ns+'-';
            return attrs.some(
                function(value, key) {
                    return key.startsWith(ns);
                }
            );
        },
        definePlugin: function (ns, defaults) {
            var newPlugin = Object.create(nodePlugin);
            Object.isObject(defaults) || (defaults = {});
            (typeof ns==='string') || (ns = 'invalid_ns');
            ns = ns.replace(/ /g, '').replace(/-/g, '');
            Object.protectedProp(newPlugin, 'ns', ns);
            newPlugin.defaults = defaults;
            return newPlugin;
        }
    };

    nodeConstrain = nodePlugin.definePlugin('constrain', {selector: 'window'});

    ElementPlugin = window._ITSAmodules.ElementPlugin = {
        nodePlugin: nodePlugin,
        nodeConstrain: nodeConstrain
    };

    return ElementPlugin;
};
},{"js-ext/lib/object.js":38,"js-ext/lib/string.js":40,"polyfill":50}],66:[function(require,module,exports){
"use strict";

/**
 * Provides several methods that override native document-methods to work with the vdom.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule extend-document
 * @class document
 * @since 0.0.1
*/

require('polyfill');
require('js-ext/lib/object.js');
require('js-ext/lib/string.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.ExtendDocument) {
        return; // ExtendDocument was already created
    }

    // prevent double definition:
    window._ITSAmodules.ExtendDocument = true;

    var NS = require('./vdom-ns.js')(window),
        nodeids = NS.nodeids,
        DOCUMENT = window.document;

    // Note: window.document has no prototype

    /**
     * Returns a newly created TreeWalker object.
     *
     * The TreeWalker is life presentation of the dom. It gets updated when the dom changes.
     *
     * @method createTreeWalker
     * @param root {Element} The root node at which to begin the NodeIterator's traversal.
     * @param [whatToShow] {Number} Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.
     * You can use or sum one of the next properties:
     * <ul>
     *   <li>window.NodeFilter.SHOW_ELEMENT</li>
     *   <li>window.NodeFilter.SHOW_COMMENT</li>
     *   <li>window.NodeFilter.SHOW_TEXT</li>
     * </ul>
     * @param [filter] {NodeFilter|function} An object implementing the NodeFilter interface or a function. See https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
     * @return {TreeWalker}
     */
    DOCUMENT.createTreeWalker = function(root, whatToShow, filter) {
        return root.createTreeWalker(whatToShow, filter);
    };

    /**
     * Indicating whether an Element is inside the DOM.
     *
     * @method contains
     * @param otherElement {Element}
     * @return {Boolean} whether the Element is inside the dom.
     * @since 0.0.1
     */
    DOCUMENT.contains = function(otherElement) {
        return DOCUMENT.documentElement.contains(otherElement);
    };

    /**
     * Gets an ElementArray of Elements, specified by the css-selector.
     *
     * @method getAll
     * @param cssSelector {String} css-selector to match
     * @return {ElementArray} ElementArray of Elements that match the css-selector
     * @since 0.0.1
     */
    DOCUMENT.getAll = function(cssSelector) {
        return this.querySelectorAll(cssSelector);
    };

    /**
     * Gets one Element, specified by the css-selector. To retrieve a single element by id,
     * you need to prepend the id-name with a `#`. When multiple Element's match, the first is returned.
     *
     * @method getElement
     * @param cssSelector {String} css-selector to match
     * @return {Element|null} the Element that was search for
     * @since 0.0.1
     */
    DOCUMENT.getElement = function(cssSelector) {
        return ((cssSelector[0]==='#') && (cssSelector.indexOf(' ')===-1)) ? this.getElementById(cssSelector.substr(1)) : this.querySelector(cssSelector);
    };

    /**
     * Returns the Element matching the specified id.
     *
     * @method getElementById
     * @param id {String} id of the Element
     * @return {Element|null}
     *
     */
    DOCUMENT.getElementById = function(id) {
        return nodeids[id] || null; // force `null` instead of `undefined` to be compatible with native getElementById.
    };

    /**
     * Returns the an Array with all Elements that have a tagName `i-parcel-*`
     *
     * @method getParcels
     * @return {Array}
     *
     */
    DOCUMENT.getParcels = function() {
        var instance = this,
            findChildren;
        // i-parcel elements can only exists when the window.ITAGS are defined (by itags.core)
        if (!window.ITAGS) {
            return [];
        }
        if (instance._parcelList) {
            return instance._parcelList;
        }
        // when not returned: it would be the first time --> we setup the current list
        // the quickest way is by going through the vdom and inspect the tagNames ourselves:
        findChildren = function(vnode) {
            var vChildren = vnode.vChildren,
                len = vChildren.length,
                i, vChild;
            for (i=0; i<len; i++) {
                vChild = vChildren[i];
                vChild.tag.startsWith('I-PARCEL-') && (DOCUMENT._parcelList[DOCUMENT._parcelList.length]=vChild.domNode);
                findChildren(vChild);
            }
        };
        Object.protectedProp(instance, '_parcelList', []);
        findChildren(instance.getElement('body').vnode);
        return instance._parcelList;
    };

    /**
     * Returns the first Element that matches the CSS-selectors. You can pass one, or multiple CSS-selectors. When passed multiple,
     * they need to be separated by a `comma`.
     *
     * @method querySelector
     * @param selectors {String} CSS-selector(s) that should match
     * @return {Element}
     */
    DOCUMENT.querySelector = function(selectors) {
        var docElement = DOCUMENT.documentElement;
        if (docElement.matchesSelector(selectors)) {
            return docElement;
        }
        return docElement.querySelector(selectors);
    };

    /**
     * Returns an ElementArray of all Elements that match the CSS-selectors. You can pass one, or multiple CSS-selectors. When passed multiple,
     * they need to be separated by a `comma`.
     *
     * querySelectorAll is a snapshot of the dom at the time this method was called. It is not updated when changes of the dom are made afterwards.
     *
     * @method querySelectorAll
     * @param selectors {String} CSS-selector(s) that should match
     * @return {ElementArray} non-life Array (snapshot) with Elements
     */
    DOCUMENT.querySelectorAll = function(selectors) {
        var docElement = DOCUMENT.documentElement,
            elements = docElement.querySelectorAll(selectors);
        docElement.matchesSelector(selectors) && elements.shift(docElement);
        return elements;
    };

    /**
     * Replaces the Element with a new Element.
     *
     * @method replace
     * @param newHtmlElement {Element|String} the new element
     * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only the element having a TextNode as a child.
     * @chainable
     * @since 0.0.1
     */
    DOCUMENT.replace = function(oldHtmlElement, newHtmlElement, escape) {
        return oldHtmlElement.replace(newHtmlElement, escape);
    };

   /**
    * Tests if an Element would be selected by the specified cssSelector.
    * Alias for `matchesSelector()`
    *
    * @method test
    * @param element {Element} The Element to test
    * @param cssSelector {String} the css-selector to test against
    * @return {Boolean} whether or not the node matches the selector
    * @since 0.0.1
    */
    DOCUMENT.test = function(element, cssSelector) {
        return element.matches(cssSelector);
    };

};

//--- declaration of properties ---------------------------

/**
 * Returns the currently focused element, that is, the element that will get keystroke events if the user types any.
 *
 * @property activeElement
 * @type Element
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the `anchors` in the document that have a `name` specified (a[name]).
 * For reasons of backwards compatibility, the returned set of anchors only contains those anchors created with the `name` attribute.
 *
 * `anchors` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property anchors
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the `applets` in the document.
 *
 * `applets` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property applets
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns the `body` or `frameset` Element of the current document, or null if no such element exists.
 *
 * @property body
 * @type Element
 * @readOnly
 */

/**
 * Returns the `script`-Element whose script is currently being processed.
 *
 *
 * @property currentScript
 * @type Element
 * @readOnly
 */

/**
 * Returns the root-element (===`html`-Element) of the current document
 *
 * @property documentElement
 * @type Element
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the `embed`-elements in the document.
 *
 * `embeds` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property embeds
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns the firstChild element (===`html`-Element) of the current document
 *
 * @property firstChild
 * @type Element
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the `form`-elements in the document.
 *
 * `forms` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property forms
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the images in the document.
 *
 * `images` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property images
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns the lastChild element (===`html`-Element) of the current document
 *
 * @property lastChild
 * @type Element
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the  of all `area`-Elements and `a`-Elements in a document with a value for the href attribute.
 *
 * `links` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property links
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the plugins (`object`- or `embed`-elements) in the document.
 *
 * `plugins` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property plugins
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the script-elements in the document.
 *
 * `scripts` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property scripts
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Returns an HTMLCollection with Elements of all of the style-elements in the document.
 *
 * `styleSheets` is a life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * @property styleSheets
 * @type HTMLCollection
 * @readOnly
 */

/**
 * Gets or sets the `title` of the document. That is, the `title`-Element within the `head`-Element
 *
 * @property title
 * @type String
 */


//--- definition API of unmodified `document`-events ------

/**
* "online" event is fired on the <body> of each page when the browser switches between online and offline mode.
* The event is non-cancellable (you can't prevent the user from coming online, or going offline).
*
* @event online
*/

/**
* "offline" event is fired on the <body> of each page when the browser switches between online and offline mode.
* The event is non-cancellable (you can't prevent the user from coming online, or going offline).
*
* @event offline
*/

//--- definition API of unmodified `document`-methods ------

/**
 * Adopts a node from an external document. The node and its subtree is removed from the document it's in (if any),
 * and its ownerDocument is changed to the current document. The node can then be inserted into the current document.
 *
 * @method adoptNode
 * @param externalNode {Node} The node from another document to be adopted.
 * @return {Node} is the adopted node that can be used in the current document.
 * The new node's parentNode is null, since it has not yet been inserted into the document tree.
 */

/**
 * Adds a HtmlElement or DocumentFragment to the end of the `html`-element
 *
 * @method appendChild
 * @param element {Element|DocumentFragment} the item to be appended
 * @return {Element} the appended child.
 */

/**
 * Creates a new attribute-node, and returns it.
 *
 * @method createAttribute
 * @param name {String} The name of the attribute
 * @return {AttributeNode}
 */

/**
 * Creates a new Comment-node, and returns it.
 *
 * @method createComment
 * @param data {String} The data to be added to the Comment.
 * @return {CommentNode}
 */

/**
 * Creates a new HtmlElement, and returns it.
 *
 * Don't use qualified names (like "html:a") with this method.
 *
 * @method createElement
 * @param tagName {String}  is a string that specifies the type of element to be created.
 *        The nodeName of the created element is initialized with the value of tagName.
 * @return {HtmlElement}
 */

/**
 * Returns a new NodeIterator object.
 *
 * The NodeIterator is a snapshot of the dom at the time this method was called. It is not updated when changes of the dom are made afterwards.
 *
 * @method createNodeIterator
 * @param root {Element} The root node at which to begin the NodeIterator's traversal.
 * @param [whatToShow] {Number} Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.
 * You can use or sum one of the next properties:
 * <ul>
 *   <li>window.NodeFilter.SHOW_ELEMENT</li>
 *   <li>window.NodeFilter.SHOW_COMMENT</li>
 *   <li>window.NodeFilter.SHOW_TEXT</li>
 * </ul>
 * @param [filter] {NodeFilter|function} An object implementing the NodeFilter interface or a function. See https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
 * @return {NodeIterator}
 */

/**
 * Returns a new Range object. See https://developer.mozilla.org/en-US/docs/Web/API/Range
 *
 * @method createRange
 * @return {Range}
 */

/**
 * Creates a new Text-node, and returns it.
 *
 * @method createTextNode
 * @param data {String} The data to be added to the Text-node.
 * @return {TextNode}
 */

/**
 * Returns the Element from the document whose `elementFromPoint`-method is being called which is the topmost
 * dom-Element which lies under the given point. To get a Element, specify the point via coordinates, in CSS pixels,
 * relative to the upper-left-most point in the window or frame containing the document.
 *
 * @method elementFromPoint
 * @param x {Number} x-coordinate to check, in CSS pixels relative to the upper-left corner of the document
 * @param y {Number} y-coordinate to check, in CSS pixels relative to the upper-left corner of the document
 * @return {Element} the matching Element
 */

/**
 * Enables the style sheets matching the specified name in the current style sheet set,
 * and disables all other style sheets (except those without a title, which are always enabled).
 *
 * @method enableStyleSheetsForSet
 * @param name {String} The name of the style sheets to enable. All style sheets with a title that match this name will be enabled,
 *        while all others that have a title will be disabled. Specify an empty string for the name parameter
 *        to disable all alternate and preferred style sheets (but not the persistent style sheets; that is, those with no title attribute).
 */

/**
 * Returns an ElementArray of all Elements that match their classes with the supplied `classNames` argument.
 * To match multiple different classes, separate them with a `comma`.
 *
 * getElementsByClassName is life presentation of the dom. The returned ElementArray gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 *
 * @method getElementsByClassName
 * @param classNames {String} the classes to search for
 * @return {ElementArray} life Array with Elements
 */

/**
 * Returns an ElementArray of all Elements that match their `name`-attribute with the supplied `name` argument.
 *
 * getElementsByName is life presentation of the dom. The returned ElementArray gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 * @method getElementsByName
 * @param name {String} the property of name-attribute to search for
 * @return {ElementArray} life Array with Elements
 */

/**
 * Returns an ElementArray of all Elements that match their `name`-attribute with the supplied `name` argument.
 *
 * getElementsByTagName is life presentation of the dom. The returned ElementArray gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 * @method getElementsByTagName
 * @param tagNames {String} the tags to search for
 * @return {ElementArray} life Array with Elements
 */

/**
 * Returns a selection object representing the range of text selected by the user.
 *
 * Is also available on the `window`-object.
 *
 * @method getSelection
 * @return {Selection} A Selection object. When cast to string, either by adding empty quotes "" or using .toString, this object is the text selected.
 */

/**
 * Returns a Boolean value indicating whether the document or any element inside the document has focus.
 *
 * @method hasFocus
 * @return {Boolean} whether the document or any element inside the document has focus.
 */

/**
 * Creates a copy of a node from an external document that can be inserted into the current document.
 *
 * @method importNode
 * @param externalNode {Node} The node from another document to be adopted.
 * @param deep {Boolean} Whether the descendants of the imported node need to be imported.
 * @return {Node} The new node that is imported into the document.
 * The new node's parentNode is null, since it has not yet been inserted into the document tree.
 */

/**
 * Inserts `newElement` before `referenceElement`.
 *
 * @method insertBefore
 * @param newElement {Element} The newElement to insert
 * @param referenceElement {Element} The Element before which newElement is inserted.
 * @return {Element} the Element being inserted (equals newElement)
 */

/**
 * Removes a child node from the DOM.
 *
 * @method removeChild
 * @param child {Element} the Element to be removed from the DOM
 * @return {Element} a reference to the removed child node
 */

/**
 * Replaces one child-element of its parent element with a new child-element.
 *
 * @method replaceChild
 * @param newChild {Element} the new element to replace oldChild. If it already exists in the DOM, it is first removed.
 * @param oldChild {Element} The existing child to be replaced.
 * @return {Element} is the replaced node. This is the same Element as oldChild.
 */

//--- definition API of unmodified `document`-properties ------

/**
 * Returns the character encoding of the current document.
 *
 * @property characterSet
 * @readOnly
 */

/**
 * Indicates whether the document is rendered in Quirks mode or Standards mode. Its value is either:
 * <ul>
 *     <li>`BackCompat` if the document is in quirks mode</li>
 *     <li>`CSS1Compat` if the document is in no-quirks (also known as `standards`) mode or limited-quirks (also known as `almost standards`) mode.</li>
 * </ul>
 *
 * @property compatMode
 * @readOnly
 */

/**
 * Returns the MIME type that the document is being rendered as.  This may come from HTTP headers or other sources of MIME information,
 * and might be affected by automatic type conversions performed by either the browser or extensions.
 *
 * @property contentType
 * @readOnly
 */

/**
 * Returns the Document Type Declaration (DTD) associated with current document. The returned object implements the DocumentType interface.
 * Use DOMImplementation.createDocumentType() to create a DocumentType.
 *
 * @property doctype
 * @readOnly
 */

/**
 * Returns string URI of the HTML document. Same as `document.URL`.
 *
 * Note: HTML documents have a document.URL property which returns the same value. Unlike URL, documentURI is available on all types of documents.
 *
 * @property documentURI
 * @type String
 * @readOnly
 */

/**
 * Controls whether the entire document is editable. Its value should be either "off" or "on".
 *
 * @property designMode
 * @type String
 * @default "off"
 */

/**
 * Gets the domain portion of the origin of the current document.
 *
 * Setter will fail, because the same origin policy needs to persist.
 *
 * @property domain
 * @type String
 * @readOnly
 */

/**
 * Returns a DOMImplementation object associated with the current document.
 *
 * @property implementation
 * @type DOMImplementation
 * @readOnly
 */

/**
 * Returns a string containing the date and time on which the current document was last modified.
 * If you want a Date-object, you need to transform lastModified into a Date object: `modifyDate = new Date(document.lastModified);`
 *
 * @property lastModified
 * @type String
 * @readOnly
 */

/**
 * Returns the last enabled style sheet set; this property's value changes whenever the document.selectedStyleSheetSet property is changed.
 *
 * @property lastStyleSheetSet
 * @type String
 * @readOnly
 */

/**
 * returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL.
 *
 * Though Document.location is a read-only Location object, you can also assign a DOMString to it. This means that you can work with document.location
 * as if it were a string in most cases: document.location = 'http://www.example.com' is a synonym of document.location.href = 'http://www.example.com'.
 *
 * To retrieve just the URL as a string, the read-only document.URL property can also be used.
 *
 * See more about the `Location` object: https://developer.mozilla.org/en-US/docs/Web/API/Location
 *
 * @property location
 * @type Location
 * @readOnly
 */

/**
 * Returns the preferred style sheet set as set by the page author. This is determined from the order of style sheet declarations and the Default-Style HTTP header.
 *
 * @property preferredStyleSheetSet
 * @type String
 */

/**
 * Returns "loading" while the document is loading, "interactive" once it is finished parsing but still loading sub-resources,
 * and "complete" once it has loaded.
 *
 * @property readyState
 * @type String
 * @readOnly
 */

/**
 * Returns the URI of the page that linked to this page.
 *
 * @property referrer
 * @type String
 * @readOnly
 */

/**
 * Indicates the name of the style sheet set that's currently in use. See more about Stylesheets: https://developer.mozilla.org/en-US/docs/Web/API/Stylesheet
 * Setting the value of this property is equivalent to calling document.enableStyleSheetsForSet() with the value of currentStyleSheetSet,
 * then setting the value of lastStyleSheetSet to that value as well.
 *
 * @property selectedStyleSheetSet
 * @type String
 */

/**
 * Returns string URL of the HTML document. Same as `document.documentURI`
 *
 * Note: HTML documents have a document.URL property which returns the same value. Unlike URL, documentURI is available on all types of documents.
 *
 * @property URL
 * @type String
 * @readOnly
 */



},{"./vdom-ns.js":70,"js-ext/lib/object.js":38,"js-ext/lib/string.js":40,"polyfill":50}],67:[function(require,module,exports){
(function (global){
"use strict";

/**
 * Provides several methods that override native Element-methods to work with the vdom.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule extend-element
 * @class Element
 * @since 0.0.1
*/


require('../css/element.css');
require('js-ext/lib/object.js');
require('js-ext/lib/string.js');
require('js-ext/lib/promise.js');
require('polyfill');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.ExtendElement) {
        return; // ExtendElement was already created
    }

    // prevent double definition:
    window._ITSAmodules.ExtendElement = true;

    var NAME = '[extend-element]: ',
        ElementArray = require('./element-array.js')(window),
        domNodeToVNode = require('./node-parser.js')(window),
        htmlToVNodes = require('./html-parser.js')(window),
        vNodeProto = require('./vnode.js')(window),
        NS = require('./vdom-ns.js')(window),
        RUNNING_ON_NODE = (typeof global !== 'undefined') && (global.window!==window),
        TRANSITION = 'transition',
        TRANSFORM = 'transform',
        BROWSERS_SUPPORT_PSEUDO_TRANS = false, // set true as soon as they do
        SUPPORTS_PSEUDO_TRANS = null, // is a life check --> is irrelevant as long BROWSERS_SUPPORT_PSEUDO_TRANS === false
        VENDOR_CSS = require('polyfill/extra/vendorCSS.js')(window),
        generateVendorCSSProp = VENDOR_CSS.generator,
        VENDOR_CSS_PROPERTIES = VENDOR_CSS.cssProps,
        VENDOR_TRANSFORM_PROPERTY = generateVendorCSSProp(TRANSFORM),
        VENDOR_TRANSITION_PROPERTY = require('polyfill/extra/transition.js')(window), // DO NOT use TRANSITION-variable here --> browserify cannot deal this
        EV_TRANSITION_END = require('polyfill/extra/transitionend.js')(window),
        _BEFORE = ':before',
        _AFTER = ':before',
        extractor = require('./attribute-extractor.js')(window),
        UTILS = require('utils'),
        later = UTILS.laterSilent,
        async = UTILS.asyncSilent,
        idGenerator = UTILS.idGenerator,
        DOCUMENT = window.document,
        nodeids = NS.nodeids,
        arrayIndexOf = Array.prototype.indexOf,
        POSITION = 'position',
        ITSA_ = 'itsa-',
        BLOCK = ITSA_+'block',
        BORDERBOX = ITSA_+'borderbox',
        NO_TRANS = ITSA_+'notrans',
        NO_TRANS2 = NO_TRANS+'2', // needed to prevent removal of NO_TRANS when still needed `notrans`
        INVISIBLE = ITSA_+'invisible',
        INVISIBLE_RELATIVE = INVISIBLE+'-relative',
        HIDDEN = ITSA_+'hidden',
        REGEXP_NODE_ID = /^#\S+$/,
        LEFT = 'left',
        TOP = 'top',
        BORDER = 'border',
        WIDTH = 'width',
        HEIGHT = 'height',
        STRING = 'string',
        CLASS = 'class',
        STYLE = 'style',
        OVERFLOW = 'overflow',
        SCROLL = 'scroll',
        BORDER_LEFT_WIDTH = BORDER+'-left-'+WIDTH,
        BORDER_RIGHT_WIDTH = BORDER+'-right-'+WIDTH,
        BORDER_TOP_WIDTH = BORDER+'-top-'+WIDTH,
        BORDER_BOTTOM_WIDTH = BORDER+'-bottom-'+WIDTH,
        NUMBER = 'number',
        PX = 'px',
        SET = 'set',
        TOGGLE = 'toggle',
        REPLACE = 'replace',
        REMOVE = 'remove',
        _STARTSTYLE = '_startStyle',
        setupObserver,
        SIBLING_MATCH_CHARACTER = {
            '+': true,
            '~': true
        },
        NON_CLONABLE_STYLES = {
            absolute: true,
            hidden: true,
            block: true
        },
        CSS_PROPS_TO_CALCULATE = { // http://www.w3.org/TR/css3-transitions/#animatable-css
            backgroundColor: true,
            backgroundPositionX: true,
            backgroundPositionY: true,
            borderBottomColor: true,
            borderBottomWidth: true,
            borderLeftColor: true,
            borderLeftWidth: true,
            borderRightColor: true,
            borderRightWidth: true,
            borderTopColor: true,
            borderTopWidth: true,
            borderSpacing: true,
            bottom: true,
            clip: true,
            color: true,
            fontSize: true,
            fontWeight: true,
            height: true,
            left: true,
            letterSpacing: true,
            lineHeight: true,
            marginBottom: true,
            marginTop: true,
            marginLeft: true,
            marginRight: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            opacity: true,
            outlineColor: true,
            outlineWidth: true,
            paddingBottom: true,
            paddingTop: true,
            paddingLeft: true,
            paddingRight: true,
            right: true,
            textIndent: true,
            textShadow: true,
            verticalAlign: true,
            // visibility: true,  DO NOT use visibility!
            width: true,
            wordSpacing: true,
            zIndex: true
        },
        // CSS_PROPS_TO_CALCULATE.transform is set later on by the vendor specific transform-property
        htmlToVFragments = function(html) {
            var vnodes = htmlToVNodes(html, vNodeProto),
                len = vnodes.length,
                vnode, i, bkpAttrs, bkpVChildNodes;
            for (i=0; i<len; i++) {
                vnode = vnodes[i];
                if (vnode.nodeType===1) {
                    // same tag --> only update what is needed
                    bkpAttrs = vnode.attrs;
                    bkpVChildNodes = vnode.vChildNodes;

                    // reset, to force creation of inner domNodes:
                    vnode.attrs = {};
                    vnode.vChildNodes = [];

                    // next: sync the vnodes:
                    vnode._setAttrs(bkpAttrs);
                    vnode._setChildNodes(bkpVChildNodes);
                }
                else {
                    vnode.domNode.nodeValue = vnode.text;
                }
            }
            return {
                isFragment: true,
                vnodes: vnodes
            };
        },
        toCamelCase = function(input) {
            input || (input='');
            return input.replace(/-(.)/g, function(match, group) {
                return group.toUpperCase();
            });
        },
        fromCamelCase = function(input) {
            input || (input='');
            return input.replace(/[a-z]([A-Z])/g, function(match, group) {
                return match[0]+'-'+group.toLowerCase();
            });
        },
        getVendorCSS = function(cssProperties) {
            var uniqueProps = {},
                i, len, prop, safeProperty, uniqueSafeProperty;
            len = cssProperties.length;
            for (i=len-1; i>=0; i--) {
                // set the right property, but also dedupe when there are multiple same vendor-properties
                prop = cssProperties[i];
                safeProperty = prop.property;
                if (safeProperty) {
                    safeProperty = fromCamelCase(safeProperty);
                    uniqueSafeProperty = safeProperty+'#'+prop.pseudo;
                    VENDOR_CSS_PROPERTIES[safeProperty] || (safeProperty=generateVendorCSSProp(safeProperty));
                    if (uniqueProps[uniqueSafeProperty]) {
                        cssProperties.splice(i, 1);
                    }
                    else {
                        uniqueProps[uniqueSafeProperty] = true;
                        prop.property = safeProperty;
                    }
                }
            }
            return cssProperties;
        },
        vendorSupportsPseudoTrans = function() {
            // DO NOT CHANGE THIS FUNCTION!
            // it does exactly what it should do:
            // Sarari seems to support speudo transmisions, however it calculates css-properties wrong when they are 'undefined'
            // within a specific node, while the 'non-pseudo' is defined.
            // This would lead into a wrong calculation (too many) of the number of expected transitionend-events
            // Thus, this feature is disabled in some specific browsers
            if (SUPPORTS_PSEUDO_TRANS) {
                return SUPPORTS_PSEUDO_TRANS;
            }
            var cssnode, node, nodeParent;
            DOCUMENT.body.prepend('<style id="vendorSupportsPseudoTrans_css" type="text/css">#vendorSupportsPseudoTransParent {background-color:#F00;} #vendorSupportsPseudoTrans {background-color:#00F;}</style>');
            DOCUMENT.body.prepend('<div id="vendorSupportsPseudoTransParent"><div id="vendorSupportsPseudoTrans"></div></div>');
            node = DOCUMENT.getElement('#vendorSupportsPseudoTrans');
            nodeParent = DOCUMENT.getElement('#vendorSupportsPseudoTransParent');
            cssnode = DOCUMENT.getElement('#vendorSupportsPseudoTrans_css');
            SUPPORTS_PSEUDO_TRANS = node.getStyle('background-color')!==node.getStyle('background-color', ':before');
            cssnode.remove();
            nodeParent.remove();
            return SUPPORTS_PSEUDO_TRANS;
        },
        getTransPromise = function(node, hasTransitionedStyle, removalPromise, afterTransEventsNeeded, transitionProperties, maxtranstime) {
            var promise, fallback;
            afterTransEventsNeeded || (afterTransEventsNeeded=1);
            if (hasTransitionedStyle) {
                promise = new window.Promise(function(fulfill) {
                    var afterTrans = function(e) {
                        var finishedProperty = e.propertyName,
                            index;
                        if (finishedProperty) {
                            // some browsers support this feature: now we can exactly determine what promise to fulfill
                            delete transitionProperties[finishedProperty];
                            // in case of shorthand properties (such as padding) allmost all browsers
                            // fire multiple detailed events (http://www.smashingmagazine.com/2013/04/26/css3-transitions-thank-god-specification/).
                            // therefore, we also must delete the shortcut property when a detailed property gets fired:
                            index = finishedProperty.indexOf('-');
                            if (index!==-1) {
                                finishedProperty = finishedProperty.substr(0, index);
                                delete transitionProperties[finishedProperty];
                            }
                            // now fulfill when empty:
                            if (transitionProperties.isEmpty()) {
                                fallback.cancel();
                                console.log('Transition fulfilled');
                                node.removeEventListener(EV_TRANSITION_END, afterTrans, true);
                                fulfill();
                            }
                        }
                        else {
                            // in cae the browser doesn't support e.propertyName, we need to countdown:
                            if (--afterTransEventsNeeded<=0) {
                                fallback.cancel();
                                node.removeEventListener(EV_TRANSITION_END, afterTrans, true);
                                console.log('Transition fulfilled by counting nr. of endTransition events');
                                fulfill();
                            }
                        }
                    };
                    if (EV_TRANSITION_END===undefined) {
                        // no transition supported
                        console.log('No endTransition events supported: transition fulfilled');
                        fulfill();
                    }
                    else {
                        node.addEventListener(EV_TRANSITION_END, afterTrans, true);
                        fallback = later(function(){
                            console.log('Transition fulfilled by timer');
                            fulfill();
                        }, maxtranstime*1000+50); // extra 50 ms, after all, it is a fallback, we don't want it to take over the original end-transition-events
                    }
                });
                removalPromise && (promise=window.Promise.finishAll([promise, removalPromise]));
            }
            else {
                promise = removalPromise || window.Promise.resolve();
            }
            return promise;
        },
        getClassTransPromise = function(node, method, className, extraData1, extraData2) {
            // first. check if the final node has a transitioned property.
            // If not, then return as fulfilled. If so, then check for all the transitioned properties,
            // if there is any who changes its calculated value. If not, then return as fulfilled. If so, then setup
            // the evenlistener
            var resolvedPromise = window.Promise.resolve(),
                currentInlineCSS = [],
                finalInlineCSS = [],
                finalNode, getsTransitioned, originalCSS, finalCSS, transPropertiesElement, transPropertiesBefore, transPropertiesAfter, bkpFreezedData1, endIntermediate,
                promise, finalCSS_before, finalCSS_after, transpromise, manipulated, getCurrentProperties, currentProperties, bkpNodeData, bkpFreezed, cleanup,
                originalCSS_before, originalCSS_after, searchTrans, generateInlineCSS, finalStyle, unFreeze, freezedExtraData1, startStyle, unfreezePromise,
                transprops, transpropsBefore, transpropsAfter, time1, time2;

            time1 = Date.now();
            bkpNodeData = idGenerator('bkpNode');
            bkpFreezed = idGenerator('bkpFreezed');
            bkpFreezedData1 = idGenerator('bkpFreezedData1');
            if ((method===TOGGLE) && !extraData1) {
                // because -when toggling- the future current node-class might have been changed:
                freezedExtraData1 = !node.hasClass(className);
            }
            unFreeze = function(options) {
                var bkpFreezedStyle = node.getData(bkpFreezed),
                    finish = options && options.finish,
                    cancel = options && options.cancel,
                    transitioned = !finish;
                bkpFreezedData1 = node.getData(bkpFreezedData1);
                if (bkpFreezedStyle!==undefined) {
                    if (finish || cancel) {
                        node.setClass(NO_TRANS2);
                    }
                    else {
                        node.setData(_STARTSTYLE, bkpFreezedStyle);
                    }
                    if (!cancel) {
                        switch(method) {
                            case SET:
                                unfreezePromise = node.setClass(className, transitioned);
                            break;
                            case REPLACE:
                                unfreezePromise = node.replaceClass(extraData1, className, extraData2, transitioned);
                            break;
                            case REMOVE:
                                unfreezePromise = node.removeClass(className, transitioned);
                            break;
                            case TOGGLE:
                                unfreezePromise = node.toggleClass(className, (bkpFreezedData1===undefined) ? extraData1 : bkpFreezedData1, transitioned);
                            break;
                        }
                    }
                    else {
                        unfreezePromise = resolvedPromise;
                    }
                    async(function() {
                        node.removeData(bkpFreezed);
                        node.removeData(bkpFreezedData1);
                    });
                    if (finish || cancel) {
                        finalStyle = finalNode.getAttr(STYLE);
                        node.setAttr(STYLE, finalStyle);
                        later(function() { // not just async --> it seems we need more time
                            node.removeClass(NO_TRANS2);
                        }, 50);
                        unfreezePromise = resolvedPromise;
                    }
                    return unfreezePromise;
                }
                return promise;
            };

            resolvedPromise.cancel = function() { /* NOOP for compatibility */ };
            resolvedPromise.freeze = function() { return window.Promise.resolve(0); /* compatibility */ };
            resolvedPromise.unfreeze = unFreeze;
            resolvedPromise.finish = function() { /* NOOP for compatibility */ };
            if (EV_TRANSITION_END===undefined) {
                return resolvedPromise;
            }
            cleanup = function() {
                // we manipulate the classes as they should be, before returning the original inline style:
                // all without Promise-return!
                if (!promise.cancelled && !promise.frozen) {
                    switch(method) {
                        case SET:
                            node.setClass(className);
                        break;
                        case REPLACE:
                            node.replaceClass(extraData1, className, extraData2);
                        break;
                        case REMOVE:
                            node.removeClass(className);
                        break;
                        case TOGGLE:
                            node.toggleClass(className, extraData1);
                        break;
                    }
                }
                // last transitionrun: reset the inline css:
                finalStyle = finalNode.getAttr(STYLE);
                if (!promise.frozen) {
                    node.removeData(bkpFreezed);
                    node.removeData(bkpFreezedData1);
                    node.setClass(NO_TRANS2);
                    node.setAttr(STYLE, finalStyle);
                }
                else {
                    node.setData(bkpFreezed, finalStyle);
                }
                node.removeData(bkpNodeData);
                finalNode.remove();
                async(function() {
                    node.removeClass(NO_TRANS2);
                    promise.fulfill();
                });
            };
            endIntermediate = function(type) {
                if (!promise.isFulfilled) {
                    manipulated = true;
                    node.setData(bkpFreezedData1, freezedExtraData1);
                    currentProperties = getCurrentProperties(node, transprops);
                    node.setClass(NO_TRANS2);
                    node.setInlineStyles(currentProperties, false, true);
                    if (BROWSERS_SUPPORT_PSEUDO_TRANS) {
                        node.setInlineStyles(getCurrentProperties(node, transpropsBefore, ':before'), false, true);
                        node.setInlineStyles(getCurrentProperties(node, transpropsAfter, ':after'), false, true);
                    }
                    // also force to set the style on the node outside the vdom --> by forcing this
                    // we won't run into the situation where the vdom doesn't change the dom because the style didn';'t change:
                    node._setAttribute(STYLE, node.getAttr(STYLE));
                    Object.defineProperty(promise, 'isFulfilled', {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: true
                    });
                    Object.defineProperty(promise, type, {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: true
                    });
                    if (transpromise) {
                        transpromise.reject(); // prevent transitionpromise to set its own final values after finishing
                    }
                    else {
                        // in case `transpromise` wasn't setup yet:
                        async(function() {
                            transpromise.reject(); // prevent transitionpromise to set its own final values after finishing
                        });
                    }
                }
                time2 || (time2=Date.now());
                return new window.Promise(function(resolve) {
                    async(function() {
                        resolve(time2-time1);
                    });
                });
            };
            searchTrans = function(CSS1, CSS2, transProperties) {
                var allTrans = !!transProperties.all,
                    searchObject = allTrans ? CSS_PROPS_TO_CALCULATE : transProperties,
                    transprops = {};

                searchObject.each(function(transProp, key) {
                    // transProp will always be a vendor-specific property already
                    key = toCamelCase(key);
                    if (CSS1[key]!==CSS2[key]) {
                        transprops[key] = true;
                    }
                });
                return (transprops.size()>0) ? transprops : null;
            };
            generateInlineCSS = function(group, transProperties, CSS1, CSS2) {
                transProperties.each(function(value, key) {
                    var prop1 = {property: key, value: CSS1[key]},
                        prop2 = {property: key, value: CSS2[key]};
                    if (group) {
                        prop1.pseudo = group;
                        prop2.pseudo = group;
                    }
                    currentInlineCSS[currentInlineCSS.length] = prop1;
                    finalInlineCSS[finalInlineCSS.length] = prop2;
                });
            };

            getCurrentProperties = function(node, transProperties, group) {
                var props = [],
                    styles = window.getComputedStyle(node, group);
                transProperties.each(function(value, property) {
                    // if property is vendor-specific transition, or transform, than we reset it to the current vendor
                    props.push({
                        property: property,
                        value: styles[toCamelCase(property)],
                        pseudo: group
                    });
                });
                return props;
            };

            finalNode = node.cloneNode(true);
            finalNode.setClass(NO_TRANS2);
            finalNode.setClass(INVISIBLE);
            node.setData(bkpNodeData, finalNode);

            startStyle = node.getData(_STARTSTYLE);
            if (startStyle!==undefined) {
                finalNode.setAttr(STYLE, startStyle);
                node.removeData(_STARTSTYLE);
            }

            switch(method) {
                case SET:
                    finalNode.setClass(className);
                break;
                case REPLACE:
                    finalNode.replaceClass(extraData1, className, extraData2);
                break;
                case REMOVE:
                    finalNode.removeClass(className);
                break;
                case TOGGLE:
                    finalNode.toggleClass(className, extraData1);
                break;
            }
            // insert in the dom, to make its style calculatable:
            DOCUMENT.body.append(finalNode);

            // check the css-property `transition`
            finalNode.removeClass(NO_TRANS2);
            transPropertiesElement = finalNode.getStyle(TRANSITION);
            transPropertiesBefore = finalNode.getStyle(TRANSITION, _BEFORE);
            transPropertiesAfter = finalNode.getStyle(TRANSITION, _AFTER);
            finalNode.setClass(NO_TRANS2);
            getsTransitioned = false;
            if (!RUNNING_ON_NODE && ((transPropertiesElement.size()>0) || (transPropertiesBefore.size()>0) || (transPropertiesAfter.size()>0))) {
                // when code comes here, there are one or more properties that can be transitioned
                // check if their values differ from the original node
                originalCSS = window.getComputedStyle(node);
                originalCSS_before = window.getComputedStyle(node, _BEFORE);
                originalCSS_after = window.getComputedStyle(node, _AFTER);
                finalCSS = window.getComputedStyle(finalNode);
                finalCSS_before = window.getComputedStyle(finalNode, _BEFORE);
                finalCSS_after = window.getComputedStyle(finalNode, _AFTER);
/*jshint boss:true */
                if (transprops=searchTrans(originalCSS, finalCSS, transPropertiesElement)) {
/*jshint boss:false */
                    getsTransitioned = true;
                    generateInlineCSS(null, transprops, originalCSS, finalCSS);
                }
                if (BROWSERS_SUPPORT_PSEUDO_TRANS && vendorSupportsPseudoTrans()) {
/*jshint boss:true */
                    if (transpropsBefore=searchTrans(originalCSS_before, finalCSS_before, transPropertiesBefore)) {
/*jshint boss:false */
                        getsTransitioned = true;
                        generateInlineCSS(_BEFORE, transpropsBefore, originalCSS_before, finalCSS_before);
                    }
/*jshint boss:true */
                    if (transpropsAfter=searchTrans(originalCSS_after, finalCSS_after, transPropertiesAfter)) {
/*jshint boss:false */
                        getsTransitioned = true;
                        generateInlineCSS(_AFTER, transpropsAfter, originalCSS_after, finalCSS_after);
                    }
                }
            }
            if (getsTransitioned) {
                // to force the transitioned items to work, we will set their calculated inline values for both at the start as well
                // as on the end of the transition.
                // set the original css inline:
                promise = window.Promise.manage();
                promise.finally(function() {
                    time2 || (time2=Date.now());
                });
                node.setClass(NO_TRANS2);
                node.setInlineStyles(currentInlineCSS, false, true);
                async(function() {
                    if (!manipulated) {
                        node.removeClass(NO_TRANS2);
                        transpromise = node.setInlineStyles(finalInlineCSS, true, true);
                        transpromise.finally(function() {
                            // async `setAttr` --> only fulfill when the DOM has been updated
                            async(function() {
                                cleanup();
                            });
                        });
                    }
                });

                promise.cancel = function() {
                    return endIntermediate('cancelled');
                };

                promise.freeze = function() {
                    return endIntermediate('frozen');
                };

                promise.finish = function() {
                    return endIntermediate('finished');
                };

                promise.unfreeze = unFreeze;

                return promise;
            }
            else {
                switch(method) {
                    case SET:
                        node.setClass(className);
                    break;
                    case REPLACE:
                        node.replaceClass(extraData1, className, extraData2);
                    break;
                    case REMOVE:
                        node.removeClass(className);
                    break;
                    case TOGGLE:
                        node.toggleClass(className, extraData1);
                    break;
                }
                node.removeData(bkpNodeData);
                finalNode.remove();
            }

            return resolvedPromise;
        },
        classListProto = {
            add: function(className) {
                // we do not use the property className, but setAttribute, because setAttribute can be hacked by other modules like `vdom`
                // note: `this` is the returned object which is NOT the Elementinstance
                var thisobject = this,
                    element = thisobject.element,
                    doSet = function(cl) {
                        var clName = element.vnode.attrs[CLASS] || '';
                        // we do not use the property className, but setAttribute, because setAttribute can be hacked by other modules like `vdom`
                        thisobject.contains(cl) || (element.setAttribute(CLASS, clName+((clName.length>0) ? ' ' : '') + cl));
                    };
                if (typeof className === STRING) {
                    doSet(className);
                }
                else if (Array.isArray(className)) {
                    className.forEach(doSet);
                }
            },
            remove: function(className) {
                var element = this.element,
                    doRemove = function(cl) {
                        var clName = element.vnode.attrs[CLASS] || '',
                            regexp = new RegExp('(?:^|\\s+)' + cl + '(?:\\s+|$)', 'g');
                        // we do not use the property className, but setAttribute, because setAttribute can be hacked by other modules like `vdom`
                        // note: `this` is the returned object which is NOT the Elementinstance
                        element.setAttribute(CLASS, clName.replace(regexp, ' ').trim());
                    };
                if (typeof className === STRING) {
                    doRemove(className);
                }
                else if (Array.isArray(className)) {
                    className.forEach(doRemove);
                }
                (element.vnode.attrs[CLASS]==='') && element.removeAttr(CLASS);
            },
            toggle: function(className, forceState) {
                // we do not use the property className, but setAttribute, because setAttribute can be hacked by other modules like `vdom`
                // note: `this` is the returned object which is NOT the Elementinstance
                var thisobject = this,
                    doToggle = function(cl) {
                        if (typeof forceState === 'boolean') {
                            forceState ? thisobject.add(cl) : thisobject.remove(cl);
                        }
                        else {
                            thisobject.contains(cl) ? thisobject.remove(cl) : thisobject.add(cl);
                        }
                    };
                if (typeof className === STRING) {
                    doToggle(className);
                }
                else if (Array.isArray(className)) {
                    className.forEach(doToggle);
                }
            },
            contains: function(className) {
                // we do not use the property className, but setAttribute, because setAttribute can be hacked by other modules like `vdom`
                // note: `this` is the returned object which is NOT the Elementinstance.
                // May be an Array of classNames, which all needs to be present.
                return this.element.vnode.hasClass(className);
            },
            item: function(index) {
                var items = this.element.vnode.attrs['class'].split(' ');
                return items[index];
            },
            _init: function(element) {
                this.element = element;
            }
        },
        treeWalkerProto = {
            _init: function(element, whatToShow, filter) {
                var instance = this;
                if (typeof filter !== 'function') {
                    // check if it is a NodeFilter-object
                    filter && filter.acceptNode && (filter=filter.acceptNode);
                }
                (typeof filter==='function') || (filter=null);
                instance.vNodePointer = element.vnode;
                instance._root = element;
                whatToShow || (whatToShow=-1); // -1 equals NodeFilter.SHOW_ALL
                (whatToShow===-1) && (whatToShow=133);
                instance._whatToShow = whatToShow; // making it accessable for the getter `whatToShow`
                instance._filter = filter; // making it accessable for the getter `filter`
            },
            _match: function(vnode, forcedVisible) {
                var whatToShow = this._whatToShow,
                    filter = this._filter,
                    showElement = ((whatToShow & 1)!==0),
                    showComment = ((whatToShow & 128)!==0),
                    showText = ((whatToShow & 4)!==0),
                    typeMatch = (showElement && (vnode.nodeType===1)) || (showComment && (vnode.nodeType===8)) || (showText && (vnode.nodeType===3)),
                    visibleMatch = !forcedVisible || (window.getComputedStyle(vnode.domNode).display!=='none'),
                    funcMatch = filter ? filter(vnode.domNode) : true;
                return typeMatch && visibleMatch && funcMatch;
            },
            firstChild: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vFirstChild;
                while (foundVNode && !instance._match(foundVNode)) {
                    foundVNode = foundVNode.vNext;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            lastChild: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vLastChild;
                while (foundVNode && !instance._match(foundVNode)) {
                    foundVNode = foundVNode.vPrevious;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            nextNode: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vNext;
                while (foundVNode && !instance._match(foundVNode, true)) {
                    foundVNode = foundVNode.vNext;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            nextSibling: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vNext;
                while (foundVNode && !instance._match(foundVNode)) {
                    foundVNode = foundVNode.vNext;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            parentNode: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vParent;
                (foundVNode!==instance._root) && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            previousNode: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vPrevious;
                while (foundVNode && !instance._match(foundVNode, true)) {
                    foundVNode = foundVNode.vPrevious;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            },
            previousSibling: function() {
                var instance = this,
                    foundVNode = instance.vNodePointer.vPrevious;
                while (foundVNode && !instance._match(foundVNode)) {
                    foundVNode = foundVNode.vPrevious;
                }
                foundVNode && (instance.vNodePointer=foundVNode);
                return foundVNode && foundVNode.domNode;
            }
        };

    require('window-ext')(window);

    Object.defineProperties(treeWalkerProto, {
        'currentNode': {
            get: function() {
                return this.vNodePointer.domNode;
            }
        },
        'filter': {
            get: function() {
                return this._filter;
            }
        },
        'root': {
            get: function() {
                return this._root;
            }
        },
        'whatToShow': {
            get: function() {
                return this._whatToShow;
            }
        }
    });

    // NOTE: `vnode` should be a property of Node, NOT Element
    /**
     * Reference to the vnode-object that represents the Node
     *
     * (will autogenerate a vnode, should it not exists)
     *
     * @for Node
     * @property vnode
     * @type vnode
     * @since 0.0.1
     */
    Object.defineProperty(window.Node.prototype, 'vnode', {
       get: function() {
            var instance = this,
                vnode = instance._vnode,
                parentNode, parentVNode, index;
            if (!vnode) {
                vnode = instance._vnode = domNodeToVNode(instance);
                parentNode = instance.parentNode;
                 // parentNode.vnode will be an existing vnode, because it runs through the same getter
                // it will only be `null` if `html` is not virtualised
                parentVNode = parentNode && parentNode.vnode;
                if (parentVNode) {
                    // set the vnode at the right position of its children:
                    index = arrayIndexOf.call(parentNode.childNodes, instance);
                    vnode._moveToParent(parentVNode, index);
                }
            }
            return vnode;
        },
        set: function() {} // NOOP but needs to be there, otherwise we could clone any domNodes
    });

    CSS_PROPS_TO_CALCULATE[VENDOR_TRANSFORM_PROPERTY] = true;
    CSS_PROPS_TO_CALCULATE[generateVendorCSSProp(TRANSFORM+'-origin')] = true;
    CSS_PROPS_TO_CALCULATE[generateVendorCSSProp('perspective')] = true;

    (function(ElementPrototype) {

        /**
        * Determines the number of transitionend-events there will occur
        * @method _getEvtTransEndCount
        * @private
        * @since 0.0.1
        */
        ElementPrototype._getEvtTransEndCount = function(cssProperties) {
            var transitions = this.getStyle(TRANSITION),
                timing = {},
                duration, delay, time;
            transitions.each(function(transition) {
                if (!cssProperties || (cssProperties[transition.property])) {
                    duration = transition.duration || 0;
                    delay = transition.delay || 0;
                    time = (duration+delay);
                    timing[time] = true;
                }
            });
            return timing.size();
        };

        /**
        * Returns cascaded "transition" style of all transition-properties. `Cascaded` means: the actual present style,
        * the way it is visible (calculated through the DOM-tree).
        *
        * Note1: When "transition" is set inline, ONLY inline transtition is active!
        * Thus, if parentNode has "transition: width 2s" and inline has "transition: height 3s", then the transition
        * will be "transition: height 3s" --> returning "undefined" for transitionProperty=width.
        * Note2: in case of "transition: all" --> these values will be returned for every "transitionProperty" (even when querying "width")
        *
        * @method _getTransitionAll
        * @param transitionProperty {String} transform property that is queried, f.e. "width", or "all"
        * @param [pseudo] {String} to query pseudo-element, fe: `:before` or `:first-line`
        * @return {Object} the transition-object, with the properties:
        * <ul>
        *     <li>duration {Number}</li>
        *     <li>timingFunction {String}</li>
        *     <li>delay {Number}</li>
        * </ul>
        * @private
        * @since 0.0.1
        */
        ElementPrototype._getTransitionAll = function(pseudo) {
            var instance = this,
                transProperty, transDuration, transTimingFunction, transDelay, transPropertySplitted, property,
                transitions, transDurationSplitted, transTimingFunctionSplitted, transDelaySplitted, i, len, duration;
            // first look at inline transition:
            transitions = instance.getInlineTransition(null, pseudo);
            if (transitions) {
                return transitions;
            }
            // no inline transitions over here --> calculate using getStyle
            transitions = {};
            transProperty = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Property', pseudo);
            transDuration = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Duration', pseudo);
            transTimingFunction = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'TimingFunction', pseudo);
            transDelay = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Delay', pseudo);
            if (transProperty) {
                transPropertySplitted = transProperty && transProperty.split(',');
                transDurationSplitted = transDuration.split(',');
                transTimingFunctionSplitted = transTimingFunction.split(',');
                transDelaySplitted = transDelay.split(',');
                len = transPropertySplitted.length;
                for (i=0; i<len; i++) {
                    property = transPropertySplitted[i];
                    duration = transTimingFunctionSplitted[i];
                    if ((property!=='none') && (duration!=='0s')) {
                        if (property!=='all') {
                            property = VENDOR_CSS_PROPERTIES[property] || generateVendorCSSProp(property);
                        }
                        transitions[property] = {
                            duration: parseFloat(transDurationSplitted[i]),
                            timingFunction: duration,
                            delay: parseFloat(transDelaySplitted[i])
                        };
                    }
                }
            }
            return transitions;
        };

       /**
        * Appends an Element or an Element's string-representation at the end of Element's innerHTML, or before the `refElement`.
        *
        * @for Element
        * @method append
        * @param content {Element|ElementArray|String} content to append
        * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
        * @param [refElement] {Element} reference Element where the content should be appended
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Element} the created Element (or the last when multiple)
        * @since 0.0.1
        */
        ElementPrototype.append = function(content, escape, refElement, silent) {
            var instance = this,
                vnode = instance.vnode,
                i, len, item, createdElement, vnodes, vRefElement,
            doAppend = function(oneItem) {
                escape && (oneItem.nodeType===1) && (oneItem=DOCUMENT.createTextNode(oneItem.getOuterHTML()));
                createdElement = refElement ? vnode._insertBefore(oneItem.vnode, refElement.vnode) : vnode._appendChild(oneItem.vnode);
            };
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            vnode._noSync()._normalizable(false);
            if (refElement && (vnode.vChildNodes.indexOf(refElement.vnode)!==-1)) {
                vRefElement = refElement.vnode.vNext;
                refElement = vRefElement && vRefElement.domNode;
            }
            (typeof content===STRING) && (content=htmlToVFragments(content));
            if (content.isFragment) {
                vnodes = content.vnodes;
                len = vnodes.length;
                for (i=0; i<len; i++) {
                    doAppend(vnodes[i].domNode);
                }
            }
            else if (Array.isArray(content)) {
                len = content.length;
                for (i=0; i<len; i++) {
                    item = content[i];
                    doAppend(item);
                }
            }
            else {
                doAppend(content);
            }
            vnode._normalizable(true)._normalize();
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return createdElement;
        };

        /**
         * Adds a node to the end of the list of childNodes of a specified parent node.
         *
         * @method appendChild
         * @param content {Element|ElementArray|String} content to append
         * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
         * @return {Element} the Element that was appended
         */
        ElementPrototype._appendChild = ElementPrototype.appendChild;
        ElementPrototype.appendChild = function(domNode, escape) {
            return this.append(domNode, escape);
        };

       /**
        * Returns a duplicate of the node. Use cloneNode(true) for a `deep` clone.
        *
        * @method cloneNode
        * @param [deep] {Boolean} whether to perform a `deep` clone: with all descendants
        * @return {Element} a clone of this Element
        * @since 0.0.1
        */
        ElementPrototype._cloneNode = ElementPrototype.cloneNode;
        ElementPrototype.cloneNode = function(deep) {
            var instance = this,
                vnode = instance.vnode,
                cloned = instance._cloneNode(deep),
                cloneData = function(srcVNode, targetVNode) {
                    if (srcVNode._data) {
                        Object.protectedProp(targetVNode, '_data', {});
                        targetVNode._data.merge(srcVNode._data);
                    }
                },
                cloneDeepData = function(srcVNode, targetVNode) {
                    var srcVChildren = srcVNode.vChildren,
                        targetVChildren = targetVNode.vChildren,
                        len = srcVChildren.length,
                        i, childSrcVNode, childTargetVNode;
                    for (i=0; i<len; i++) {
                        childSrcVNode = srcVChildren[i];
                        childTargetVNode = targetVChildren[i];
                        cloneData(childSrcVNode, childTargetVNode);
                        childSrcVNode.hasVChildren() && cloneDeepData(childSrcVNode, childTargetVNode);
                    }
                };
            cloned.vnode = domNodeToVNode(cloned);
            cloneData(vnode, cloned.vnode);
            // if deep, then we need to merge _data of all deeper nodes
            deep && vnode.hasVChildren() && cloneDeepData(vnode, cloned.vnode);
            return cloned;
        };

        /**
         * Compares the position of the current node against another node in any other document.
         *
         * Returnvalues are a composition of the following bitwise values:
         * <ul>
         *     <li>Node.DOCUMENT_POSITION_DISCONNECTED === 1 (one of the Elements is not part of the dom)</li>
         *     <li>Node.DOCUMENT_POSITION_PRECEDING === 2 (this Element comes before otherElement)</li>
         *     <li>Node.DOCUMENT_POSITION_FOLLOWING === 4 (this Element comes after otherElement)</li>
         *     <li>Node.DOCUMENT_POSITION_CONTAINS === 8 (otherElement trully contains -not equals- this Element)</li>
         *     <li>Node.DOCUMENT_POSITION_CONTAINED_BY === 16 (Element trully contains -not equals- otherElement)</li>
         * </ul>
         *
         * @method compareDocumentPosition
         * @param otherElement {Element}
         * @return {Number} A bitmask, use it this way: if (thisNode.compareDocumentPosition(otherNode) & Node.DOCUMENT_POSITION_FOLLOWING) {// otherNode is following thisNode}
         */
        ElementPrototype.compareDocumentPosition = function(otherElement) {
            // see http://ejohn.org/blog/comparing-document-position/
            var instance = this,
                parent, index1, index2, vChildNodes;
            if (instance===otherElement) {
                return 0;
            }
            if (!DOCUMENT.contains(instance) || !DOCUMENT.contains(otherElement)) {
                return 1;
            }
            else if (instance.contains(otherElement)) {
                return 20;
            }
            else if (otherElement.contains(instance)) {
                return 10;
            }
            parent = instance.getParent();
            vChildNodes = parent.vnode.vChildNodes;
            index1 = vChildNodes.indexOf(instance.vnode);
            index2 = vChildNodes.indexOf(otherElement.vnode);
            if (index1<index2) {
                return 2;
            }
            else {
                return 4;
            }
        };

        /**
         * Indicating whether this Element contains OR equals otherElement.
         *
         * @method contains
         * @param otherElement {Element}
         * @return {Boolean} whether this Element contains OR equals otherElement.
         */
        ElementPrototype.contains = function(otherElement) {
            if (otherElement===this) {
                return true;
            }
            return this.vnode.contains(otherElement.vnode);
        };

        /**
         * Returns a newly created TreeWalker object with this Element as root.
         *
         * The TreeWalker is life presentation of the dom. It gets updated when the dom changes.
         *
         * @method createTreeWalker
         * @param root {Element} The root node at which to begin the NodeIterator's traversal.
         * @param [whatToShow] {Number} Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.
         * You can use or sum one of the next properties:
         * <ul>
         *   <li>window.NodeFilter.SHOW_ALL === -1</li>
         *   <li>window.NodeFilter.SHOW_ELEMENT === 1</li>
         *   <li>window.NodeFilter.SHOW_COMMENT === 128</li>
         *   <li>window.NodeFilter.SHOW_TEXT === 4</li>
         * </ul>
         *
         * A treewalker has the next methods:
         * <ul>
         *   <li>treewalker.firstChild()</li>
         *   <li>treewalker.lastChild()</li>
         *   <li>treewalker.nextNode()</li>
         *   <li>treewalker.nextSibling()</li>
         *   <li>treewalker.parentNode()</li>
         *   <li>treewalker.previousNode()</li>
         *   <li>treewalker.previousSibling()</li>
         * </ul>
         *
         * A treewalker has the next properties:
         * <ul>
         *   <li>treewalker.currentNode</li>
         *   <li>treewalker.filter</li>
         *   <li>treewalker.root</li>
         *   <li>treewalker.whatToShow</li>
         * </ul>
         *
         * @param [filter] {NodeFilter|function} An object implementing the NodeFilter interface or a function. See https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
         * @return {TreeWalker}
         * @since 0.0.1
         */
        ElementPrototype.createTreeWalker = function(whatToShow, filter) {
            var treeWalker = Object.create(treeWalkerProto);
            treeWalker._init(this, whatToShow, filter);
            return treeWalker;
        };

       /**
        * Sets the inline-style of the Element exactly to the specified `value`, overruling previous values.
        * Making the Element's inline-style look like: style="value".
        *
        * This is meant for a quick one-time setup. For individually inline style-properties to be set, you can use `setInlineStyle()`.
        *
        * @method defineInlineStyle
        * @param value {String} the style string to be set
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.defineInlineStyle = function(value) {
            return this.setAttr(STYLE, value);
        };

       /**
        * Empties the content of the Element.
        * Alias for thisNode.vTextContent = '';
        *
        * @method empty
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.empty = function(silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            this.vnode.empty();
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
        };

        /**
         * Reference to the first of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @method first
         * @param [cssSelector] {String} to return the first Element that matches the css-selector
         * @return {Element}
         * @since 0.0.1
         */
        ElementPrototype.first = function(cssSelector) {
            return this.vnode.vParent.firstOfVChildren(cssSelector).domNode;
        };

        /**
         * Reference to the first child-Element, where the related dom-node an Element (nodeType===1).
         *
         * @method firstOfChildren
         * @param [cssSelector] {String} to return the first Element that matches the css-selector
         * @return {Element}
         * @since 0.0.1
         */
        ElementPrototype.firstOfChildren = function(cssSelector) {
            var foundVNode = this.vnode.firstOfVChildren(cssSelector);
            return foundVNode && foundVNode.domNode;
        };

       /**
        * Forces the Element to be inside an ancestor-Element that has the `overfow="scroll" set.
        *
        * @method forceIntoNodeView
        * @param [ancestor] {Element} the Element where it should be forced into its view.
        *        Only use this when you know the ancestor and this ancestor has an `overflow="scroll"` property
        *        when not set, this method will seek through the doc-tree upwards for the first Element that does match this criteria.
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.forceIntoNodeView = function(ancestor) {
            // TODO: transitioned: http://wibblystuff.blogspot.nl/2014/04/in-page-smooth-scroll-using-css3.html
            console.log(NAME, 'forceIntoNodeView');
            var instance = this,
                parentOverflowNode = this.getParent(),
                match, left, width, right, height, top, bottom, scrollLeft, scrollTop, parentOverflowNodeX, parentOverflowNodeY,
                parentOverflowNodeStartTop, parentOverflowNodeStartLeft, parentOverflowNodeStopRight, parentOverflowNodeStopBottom, newX, newY;
            if (parentOverflowNode) {
                if (ancestor) {
                    parentOverflowNode = ancestor;
                }
                else {
                    while (parentOverflowNode && (parentOverflowNode!==DOCUMENT) && !(match=((parentOverflowNode.getStyle(OVERFLOW)===SCROLL) || (parentOverflowNode.getStyle(OVERFLOW+'-y')===SCROLL)))) {
                        parentOverflowNode = parentOverflowNode.getParent();
                    }
                }
                if (parentOverflowNode && (parentOverflowNode!==DOCUMENT)) {
                    left = instance.left;
                    width = instance.offsetWidth;
                    right = left + width;
                    height = instance.offsetHeight;
                    top = instance.top;
                    bottom = top + height;
                    scrollLeft = parentOverflowNode.scrollLeft;
                    scrollTop = parentOverflowNode.scrollTop;
                    parentOverflowNodeX = parentOverflowNode.left;
                    parentOverflowNodeY = parentOverflowNode.top;
                    parentOverflowNodeStartTop = parentOverflowNodeY+parseInt(parentOverflowNode.getStyle(BORDER_TOP_WIDTH), 10);
                    parentOverflowNodeStartLeft = parentOverflowNodeX+parseInt(parentOverflowNode.getStyle(BORDER_LEFT_WIDTH), 10);
                    parentOverflowNodeStopRight = parentOverflowNodeX+parentOverflowNode.offsetWidth-parseInt(parentOverflowNode.getStyle(BORDER_RIGHT_WIDTH), 10);
                    parentOverflowNodeStopBottom = parentOverflowNodeY+parentOverflowNode.offsetHeight-parseInt(parentOverflowNode.getStyle(BORDER_BOTTOM_WIDTH), 10);

                    if (left<parentOverflowNodeStartLeft) {
                        newX = Math.max(0, scrollLeft+left-parentOverflowNodeStartLeft);
                    }
                    else if (right>parentOverflowNodeStopRight) {
                        newX = scrollLeft + right - parentOverflowNodeStopRight;
                    }

                    if (top<parentOverflowNodeStartTop) {
                        newY = Math.max(0, scrollTop+top-parentOverflowNodeStartTop);
                    }
                    else if (bottom>parentOverflowNodeStopBottom) {
                        newY = scrollTop + bottom - parentOverflowNodeStopBottom;
                    }

                    if ((newX!==undefined) || (newY!==undefined)) {
                        parentOverflowNode.scrollTo((newX!==undefined) ? newX : scrollLeft,(newY!==undefined) ? newY : scrollTop);
                    }
                }
            }
            return instance;
        };

       /**
        * Forces the Element to be inside the window-view. Differs from `scrollIntoView()` in a way
        * that `forceIntoView()` doesn't change the position when it's inside the view, whereas
        * `scrollIntoView()` sets it on top of the view.
        *
        * @method forceIntoView
        * @param [notransition=false] {Boolean} set true if you are sure positioning is without transition.
        *        this isn't required, but it speeds up positioning. Only use when no transition is used:
        *        when there is a transition, setting this argument `true` would miscalculate the position.
        * @param [rectangle] {Object} Set this if you have already calculated the window-rectangle (used for preformance within drag-drop)
        * @param [rectangle.x] {Number} scrollLeft of window
        * @param [rectangle.y] {Number} scrollTop of window
        * @param [rectangle.w] {Number} width of window
        * @param [rectangle.h] {Number} height of window
        * @chainable
        * @since 0.0.2
        */
        ElementPrototype.forceIntoView = function(notransition, rectangle) {
            // TODO: 'notransition' can be calculated with this.getTransition(left) this.getTransition(left) and this.getTransform(translateX) and this.getTransform(translateY)
            // TODO: transitioned: http://wibblystuff.blogspot.nl/2014/04/in-page-smooth-scroll-using-css3.html
            console.log(NAME, 'forceIntoView');
            var instance = this,
                left = instance.left,
                width = instance.offsetWidth,
                right = left + width,
                height = instance.offsetHeight,
                top = instance.top,
                bottom = top + height,
                windowLeft, windowTop, windowRight, windowBottom, newX, newY;
            if (rectangle) {
                windowLeft = rectangle.x;
                windowTop = rectangle.y;
                windowRight = rectangle.w;
                windowBottom = rectangle.h;
            }
            else {
                windowLeft = window.getScrollLeft();
                windowTop = window.getScrollTop();
                windowRight = windowLeft + window.getWidth();
                windowBottom = windowTop + window.getHeight();
            }

            if (left<windowLeft) {
                newX = Math.max(0, left);
            }
            else if (right>windowRight) {
                newX = windowLeft + right - windowRight;
            }
            if (top<windowTop) {
                newY = Math.max(0, top);
            }
            else if (bottom>windowBottom) {
                newY = windowTop + bottom - windowBottom;
            }

            if ((newX!==undefined) || (newY!==undefined)) {
                window.scrollTo((newX!==undefined) ? newX : windowLeft, (newY!==undefined) ? newY : windowTop);
            }
            return instance;
        };

        /**
         * Gets an ElementArray of Elements that lie within this Element and match the css-selector.
         *
         * @method getAll
         * @param cssSelector {String} css-selector to match
         * @return {ElementArray} ElementArray of Elements that match the css-selector
         * @since 0.0.1
         */
        ElementPrototype.getAll = function(cssSelector) {
            return this.querySelectorAll(cssSelector);
        };

       /**
        * Gets an attribute of the Element.
        *
        * Alias for getAttribute().
        *
        * @method getAttr
        * @param attributeName {String}
        * @return {String|null} value of the attribute
        * @since 0.0.1
        */
        ElementPrototype.getAttr = function(attributeName) {
            return this.vnode.attrs[attributeName] || null;
        };

        /**
         * Returns all attributes as defined as an key/value object.
         *
         * @method getAttrs
         * @param attributeName {String}
         * @return {Object} all attributes as on Object
         * @since 0.0.1
         */
        ElementPrototype.getAttrs = function() {
            return this.vnode.attrs;
        };

       /**
        * Gets an attribute of the Element.
        *
        * Same as getAttr().
        *
        * @method getAttribute
        * @param attributeName {String}
        * @return {String|null} value of the attribute
        * @since 0.0.1
        */
        ElementPrototype._getAttribute = ElementPrototype.getAttribute;
        ElementPrototype.getAttribute = function(attributeName) {
            return this.vnode.attrs[attributeName] || null;
        };

        /**
         * Returns a live collection of the Element-childNodes.
         *
         * @method getChildren
         * @return {ElementArray}
         * @since 0.0.1
         */
        ElementPrototype.getChildren = function() {
            var vChildren = this.vnode.vChildren,
                len = vChildren.length,
                children = ElementArray.createArray(),
                i;
            for (i=0; i<len; i++) {
                children[children.length] = vChildren[i].domNode;
            }
            return children;
        };

        /**
         * Returns a token list of the class attribute of the element.
         * See: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
         *
         * @method getClassList
         * @return DOMTokenList
         * @since 0.0.1
         */
        ElementPrototype.getClassList = function() {
            var instance = this,
                vnode = instance.vnode;
            if (!vnode._classList) {
                vnode._classList = Object.create(classListProto);
                vnode._classList._init(instance);
            }
            return vnode._classList;
        };

       /**
        * Returns data set specified by `key`. If not set, `undefined` will be returned.
        * The data is efficiently stored on the vnode.
        *
        * @method getData
        * @param key {string} name of the key
        * @return {Any|undefined} data set specified by `key`
        * @since 0.0.1
        */
        ElementPrototype.getData = function(key) {
            var vnode = this.vnode;
            return vnode._data && vnode._data[key];
        };

       /**
        * Gets one Element, specified by the css-selector. To retrieve a single element by id,
        * you need to prepend the id-name with a `#`. When multiple Element's match, the first is returned.
        *
        * @method getElement
        * @param cssSelector {String} css-selector to match
        * @return {Element|null} the Element that was search for
        * @since 0.0.1
        */
        ElementPrototype.getElement = function(cssSelector) {
            return ((cssSelector[0]==='#') && (cssSelector.indexOf(' ')===-1)) ? this.getElementById(cssSelector.substr(1)) : this.querySelector(cssSelector);
        };

        /**
         * Returns the Element matching the specified id, which should should be a descendant of this Element.
         *
         * @method getElementById
         * @param id {String} id of the Element
         * @return {Element|null}
         *
         */
        ElementPrototype.getElementById = function(id) {
            var element = nodeids[id];
            if (element && !this.contains(element)) {
                // outside itself
                return null;
            }
            return element || null;
        };

        /**
         * Gets innerHTML of the dom-node.
         * Goes through the vdom, so it's superfast.
         *
         * Use this method instead of `innerHTML`
         *
         * @method getHTML
         * @return {String}
         * @since 0.0.1
         */
        ElementPrototype.getHTML = function() {
            return this.vnode.innerHTML;
        };

       /**
        * Returns the Elments `id`
        *
        * @method getId
        * @return {String|undefined} Elements `id`
        * @since 0.0.1
        */
        ElementPrototype.getId = function() {
            return this.vnode.id;
        };

       /**
        * Returns inline style of the specified property. `Inline` means: what is set directly on the Element,
        * this doesn't mean necesairy how it is looked like: when no css is set inline, the Element might still have
        * an appearance because of other CSS-rules.
        *
        * In most cases, you would be interesting in using `getStyle()` instead.
        *
        * Note: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine
        *
        * @method getInlineStyle
        * @param cssProperty {String} the css-property to look for
        * @param [pseudo] {String} to look inside a pseudo-style
        * @return {String|undefined} css-style
        * @since 0.0.1
        */
        ElementPrototype.getInlineStyle = function(cssProperty, pseudo) {
            var styles = this.vnode.styles,
                groupStyle = styles && styles[pseudo || 'element'],
                value;
            if (groupStyle) {
                value = groupStyle[fromCamelCase(cssProperty)];
                value && (cssProperty===VENDOR_TRANSITION_PROPERTY) && (value=extractor.serializeTransition(value));
            }
            return value;
        };

       /**
        * Returns inline transition-css-property. `Inline` means: what is set directly on the Element,
        * When `transition` is set inline, no `parent` transition-rules apply.
        *
        *
        * @method getInlineTransition
        * @param [transitionProperty] {String} the css-property to look for
        * @param [pseudo] {String} to look inside a pseudo-style
        * @return {Object} the transition-object, with the properties:
        * <ul>
        *     <li>duration {Number}</li>
        *     <li>timingFunction {String}</li>
        *     <li>delay {Number}</li>
        * </ul>
        * @since 0.0.1
        */
        ElementPrototype.getInlineTransition = function(transitionProperty, pseudo) {
            var styles = this.vnode.styles,
                groupStyle = styles && styles[pseudo || 'element'],
                transitionStyles = groupStyle && groupStyle[VENDOR_TRANSITION_PROPERTY];
            if (transitionStyles) {
                return transitionProperty ? transitionStyles[fromCamelCase(transitionProperty)] : transitionStyles;
            }
        };

        /**
         * Gets the outerHTML of the dom-node.
         * Goes through the vdom, so it's superfast.
         *
         * Use this method instead of `outerHTML`
         *
         * @method getOuterHTML
         * @return {String}
         * @since 0.0.1
         */
        ElementPrototype.getOuterHTML = function() {
            return this.vnode.outerHTML;
        };

        /**
         * Returns the Element's parent Element.
         *
         * @method getParent
         * @return {Element}
         */
        ElementPrototype.getParent = function() {
            var vParent = this.vnode.vParent;
            return vParent && vParent.domNode;
        };

       /**
        * Returns cascaded style of the specified property. `Cascaded` means: the actual present style,
        * the way it is visible (calculated through the DOM-tree).
        *
        * <ul>
        *     <li>Note1: values are absolute: percentages and points are converted to absolute values, sizes are in pixels, colors in rgb/rgba-format.</li>
        *     <li>Note2: you cannot query shotcut-properties: use `margin-left` instead of `margin`.</li>
        *     <li>Note3: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine.</li>
        *     <li>Note4: you can query `transition`, `transform`, `perspective` and `transform-origin` instead of their vendor-specific properties.</li>
        *     <li>Note5: `transition` or `transform` return an Object instead of a String.</li>
        * </ul>
        *
        * @method getCascadeStyle
        * @param cssProperty {String} property that is queried
        * @param [pseudo] {String} to query pseudo-element, fe: `:before` or `:first-line`
        * @return {String|Object} value for the css-property: this is an Object for the properties `transition` or `transform`
        * @since 0.0.1
        */
        ElementPrototype.getStyle = function(cssProperty, pseudo) {
            // Cautious: when reading the property `transform`, getComputedStyle should
            // read the calculated value, but some browsers (webkit) only calculate the style on the current element
            // In those cases, we need a patch and look up the tree ourselves
            //  Also: we will return separate value, NOT matrices
            var instance = this;
            if (cssProperty===VENDOR_TRANSITION_PROPERTY) {
                return instance._getTransitionAll(pseudo);
            }
            VENDOR_CSS_PROPERTIES[cssProperty] || (cssProperty=generateVendorCSSProp(cssProperty));
            return window.getComputedStyle(instance, pseudo)[toCamelCase(cssProperty)];
        };

        /**
        * Returns cascaded "transition" style of the specified trandform-property. `Cascaded` means: the actual present style,
        * the way it is visible (calculated through the DOM-tree).
        *
        * Note1: When "transition" is set inline, ONLY inline transtition is active!
        * Thus, if parentNode has "transition: width 2s" and inline has "transition: height 3s", then the transition
        * will be "transition: height 3s" --> returning "undefined" for transitionProperty=width.
        * Note2: in case of "transition: all" --> these values will be returned for every "transitionProperty" (even when querying "width")
        *
        * @method getTransition
        * @param transitionProperty {String} transform property that is queried, f.e. "width", or "all"
        * @param [pseudo] {String} to query pseudo-element, fe: `:before` or `:first-line`
        * @return {Object} the transition-object, with the properties:
        * <ul>
        *     <li>duration {Number}</li>
        *     <li>timingFunction {String}</li>
        *     <li>delay {Number}</li>
        * </ul>
        * @since 0.0.1
        */
        ElementPrototype.getTransition = function(transitionProperty, pseudo) {
            var instance = this,
                transProperty, transDuration, transTimingFunction, transDelay, transPropertySplitted,
                transition, transDurationSplitted, transTimingFunctionSplitted, transDelaySplitted, index;
            if (instance.hasInlineStyle(VENDOR_TRANSITION_PROPERTY, pseudo)) {
                transition = instance.getInlineTransition(transitionProperty, pseudo);
                // if not found, then search for "all":
                transition || (transition=instance.getInlineTransition('all', pseudo));
                if (transition) {
                    // getTransition always returns all the properties:
                    transition.timingFunction || (transition.timingFunction='ease');
                    transition.delay || (transition.delay=0);
                }
                return transition;
            }
            transProperty = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Property', pseudo);
            transDuration = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Duration', pseudo);
            transTimingFunction = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'TimingFunction', pseudo);
            transDelay = instance.getStyle(VENDOR_TRANSITION_PROPERTY+'Delay', pseudo);
            transPropertySplitted = transProperty && transProperty.split(',');
            if (transProperty) {
                if (transPropertySplitted.length>1) {
                    // multiple definitions
                    index = transPropertySplitted.indexOf(transitionProperty);
                    // the array is in a form like this: 'width, height, opacity' --> therefore, we might need to look at a whitespace
                    if (index===-1) {
                        index = transPropertySplitted.indexOf(' '+transitionProperty);
                        // if not found, then search for "all":
                        if (index===-1) {
                            index = transPropertySplitted.indexOf('all');
                            (index===-1) && (index=transPropertySplitted.indexOf(' '+'all'));
                        }
                    }
                    if (index!==-1) {
                        transDurationSplitted = transDuration.split(',');
                        transTimingFunctionSplitted = transTimingFunction.split(',');
                        transDelaySplitted = transDelay.split(',');
                        transition = {
                            duration: parseFloat(transDurationSplitted[index]),
                            timingFunction: transTimingFunctionSplitted[index].trimLeft(),
                            delay: parseFloat(transDelaySplitted)
                        };
                    }
                }
                else {
                    // one definition
                    if ((transProperty===transitionProperty) || (transProperty==='all')) {
                        transition = {
                            duration: parseFloat(transDuration),
                            timingFunction: transTimingFunction,
                            delay: parseFloat(transDelay)
                        };
                    }
                }
                transition && (transition.duration===0) && (transition=undefined);
                return transition;
            }
        };

       /**
        * Elements tag-name in uppercase (same as nodeName).
        *
        * @method getTagName
        * @return {String}
        * @since 0.0.1
        */
        ElementPrototype.getTagName = function() {
            return this.vnode.tag;
        };

        /**
         * Gets the innerContent of the Element as plain text.
         * Goes through the vdom, so it's superfast.
         *
         * Use this method instead of `textContent`
         *
         * @method getText
         * @return String
         * @since 0.0.1
         */
        ElementPrototype.getText = function() {
            return this.vnode.textContent;
        };

       /**
        * Gets the value of the following Elements:
        *
        * <ul>
        *     <li>input</li>
        *     <li>textarea</li>
        *     <li>select</li>
        *     <li>any container that is `contenteditable`</li>
        * </ul>
        *
        * @method getValue
        * @return {String}
        * @since 0.0.1
        */
        ElementPrototype.getValue = function() {
            // cautious: input and textarea must be accessed by their propertyname:
            // input.getAttribute('value') would return the default-value instead of actual
            // and textarea.getAttribute('value') doesn't exist
            var instance = this,
                contenteditable = instance.vnode.attrs.contenteditable,
                editable = contenteditable && (contenteditable!=='false');
            return editable ? instance.getHTML() : instance.value;
        };

       /**
        * Whether the Element has the attribute set.
        *
        * Alias for hasAttribute().
        *
        * @method hasAttr
        * @param attributeName {String}
        * @return {Boolean} Whether the Element has the attribute set.
        * @since 0.0.1
        */
        ElementPrototype.hasAttr = function(attributeName) {
            return !!this.vnode.attrs[attributeName];
        };

       /**
        * Whether the Element has the attribute set.
        *
        * Same as hasAttr().
        *
        * @method hasAttribute
        * @param attributeName {String}
        * @return {Boolean} Whether the Element has the attribute set.
        * @since 0.0.1
        */
        ElementPrototype.hasAttribute = function(attributeName) {
            return !!this.vnode.attrs[attributeName];
        };

        /**
         * Indicating if the current element has any attributes or not.
         *
         * @method hasAttributes
         * @return {Boolean} Whether the current element has any attributes or not.
         */
        ElementPrototype.hasAttributes = function() {
            var attrs = this.vnode.attrs;
            return attrs ? (attrs.size() > 0) : false;
        };

       /**
        * Indicating if the Element has any children (childNodes with nodeType of 1).
        *
        * @method hasChildren
        * @return {Boolean} whether the Element has children
        * @since 0.0.1
        */
        ElementPrototype.hasChildren = function() {
            return this.vnode.hasVChildren();
        };

       /**
        * Checks whether the className is present on the Element.
        *
        * @method hasClass
        * @param className {String|Array} the className to check for. May be an Array of classNames, which all needs to be present.
        * @return {Boolean} whether the className (or classNames) is present on the Element
        * @since 0.0.1
        */
        ElementPrototype.hasClass = function(className) {
            return this.getClassList().contains(className);
        };

       /**
        * If the Element has data set specified by `key`. The data could be set with `setData()`.
        *
        * @method hasData
        * @param key {string} name of the key
        * @return {Boolean}
        * @since 0.0.1
        */
        ElementPrototype.hasData = function(key) {
            var vnode = this.vnode;
            return !!(vnode._data && (vnode._data[key]!==undefined));
        };

       /**
        * Indicates whether Element currently has the focus.
        *
        * @method hasFocus
        * @return {Boolean}
        * @since 0.0.1
        */
        ElementPrototype.hasFocus = function() {
            return (DOCUMENT.activeElement===this);
        };

       /**
        * Indicates whether the current focussed Element lies inside this Element (on a descendant Element).
        *
        * @method hasFocusInside
        * @return {Boolean}
        * @since 0.0.1
        */
        ElementPrototype.hasFocusInside = function() {
            var activeElement = DOCUMENT.activeElement;
            return ((DOCUMENT.activeElement!==this) && this.contains(activeElement));
        };

       /**
        * Returns whether the inline style of the specified property is present. `Inline` means: what is set directly on the Element.
        *
        * Note: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine
        *
        * @method hasInlineStyle
        * @param cssProperty {String} the css-property to look for
        * @param [pseudo] {String} to look inside a pseudo-style
        * @return {Boolean} whether the inlinestyle was present
        * @since 0.0.1
        */
        ElementPrototype.hasInlineStyle = function(cssProperty, pseudo) {
            return !!this.getInlineStyle(cssProperty, pseudo);
        };

       /**
        * Returns whether the specified inline transform-css-property is present. `Inline` means: what is set directly on the Element.
        *
        * See more about tranform-properties: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
        *
        * @method hasInlineTransition
        * @param transitionProperty {String} the css-property to look for
        * @param [pseudo] {String} to look inside a pseudo-style
        * @return {Boolean} whether the inline transform-css-property was present
        * @since 0.0.1
        */
        ElementPrototype.hasInlineTransition = function(transitionProperty, pseudo) {
            return !!this.getInlineTransition(transitionProperty, pseudo);
        };

        /**
        * Returns whether the specified transform-property is active.
        *
        * Note1: When "transition" is set inline, ONLY inline transtition is active!
        * Thus, if parentNode has "transition: width 2s" and inline has "transition: height 3s",
        * then hasTransition('width') will return false.
        * Note2: in case of "transition: all" --> hasTransition() will always `true` for every transitionProperty.
        *
        * @method hasTransition
        * @param transitionProperty {String} the css-property to look for
        * @param [pseudo] {String} to look inside a pseudo-style
        * @return {Boolean} whether the inlinestyle was present
        * @since 0.0.1
        */
        ElementPrototype.hasTransition = function(transitionProperty, pseudo) {
            return !!this.getTransition(transitionProperty, pseudo);
        };

       /**
        * Hides a node by making it floated and removing it out of the visible screen.
        * Hides immediately without `fade`, or will fade when fade is specified.
        *
        * @method hide
        * @param [fade] {Number} sec to fade (you may use `0.1`)
        * @return {this|Promise} fulfilled when the element is ready hiding, or rejected when showed up again (using node.show) before fully hided.
        * @since 0.0.1
        */
        ElementPrototype.hide = function(duration) {
            // when it doesn't have, it doesn;t harm to leave the transitionclass on: it would work anyway
            // nevertheless we will remove it with a timeout
            var instance = this,
                showPromise = instance.getData('_showNodeBusy'),
                hidePromise = instance.getData('_hideNodeBusy'),
                originalOpacity, hasOriginalOpacity, promise, freezedOpacity, fromOpacity;

            originalOpacity = instance.getData('_showNodeOpacity');
            if (!originalOpacity && !showPromise && !hidePromise) {
                originalOpacity = instance.getInlineStyle('opacity');
                instance.setData('_showNodeOpacity', originalOpacity);
            }
            hasOriginalOpacity = !!originalOpacity;

            showPromise && showPromise.freeze();
            hidePromise && hidePromise.freeze();

            if (duration) {
                if (showPromise || hidePromise) {
                    freezedOpacity = instance.getInlineStyle('opacity');
                    fromOpacity = originalOpacity || 1;
                    duration = (fromOpacity>0) ? Math.min(1, (freezedOpacity/fromOpacity))*duration : 0;
                }
                promise = instance.transition({property: 'opacity', value: 0, duration: duration});
                instance.setData('_hideNodeBusy', promise);
                promise.finally(
                    function() {
                        if (!promise.cancelled && !promise.frozen) {
                            instance.setClass(HIDDEN);
                            originalOpacity ? instance.setInlineStyle('opacity', originalOpacity) : instance.removeInlineStyle('opacity');
                        }
                        instance.removeData('_hideNodeBusy');
                    }
                );
                return promise;
            }
            else {
                async(function() {
                    instance.setClass(HIDDEN);
                    hasOriginalOpacity ? instance.setInlineStyle('opacity', originalOpacity) : instance.removeInlineStyle('opacity');
                });
                return instance;
            }
        };

       /**
        * Indicates whether the Element currently is part if the DOM.
        *
        * @method inDOM
        * @return {Boolean} whether the Element currently is part if the DOM.
        * @since 0.0.1
        */
        ElementPrototype.inDOM = function() {
            if (this.vnode.removedFromDOM) {
                return false;
            }
            return DOCUMENT.contains(this);
        };

       /**
         * Checks whether the Element lies within the specified selector (which can be a CSS-selector or a Element)
         *
         * @example
         * var divnode = childnode.inside('div.red');
         *
         * @example
         * var divnode = childnode.inside(containerNode);
         *
         * @method inside
         * @param selector {Element|String} the selector, specified by a Element or a css-selector
         * @return {Element|false} the nearest Element that matches the selector, or `false` when not found
         * @since 0.0.1
         */
        ElementPrototype.inside = function(selector) {
            var instance = this,
                vParent;
            if (typeof selector===STRING) {
                vParent = instance.vnode.vParent;
                while (vParent && !vParent.matchesSelector(selector)) {
                    vParent = vParent.vParent;
                }
                return vParent ? vParent.domNode : false;
            }
            else {
                // selector should be an Element
                return ((selector!==instance) && selector.contains(instance)) ? selector : false;
            }
        };

       /**
         * Checks whether a point specified with x,y is within the Element's region.
         *
         * @method insidePos
         * @param x {Number} x-value for new position (coordinates are page-based)
         * @param y {Number} y-value for new position (coordinates are page-based)
         * @return {Boolean} whether there is a match
         * @since 0.0.1
         */
        ElementPrototype.insidePos = function(x, y) {
            var instance = this,
                left = instance.left,
                top = instance.top,
                right = left + instance.offsetWidth,
                bottom = top + instance.offsetHeight;
            return (x>=left) && (x<=right) && (y>=top) && (y<=bottom);
        };

        /**
         * Inserts `domNode` before `refDomNode`.
         *
         * @method insertBefore
         * @param domNode {Node|Element|ElementArray|String} content to insert
         * @param refDomNode {Element} The Element before which newElement is inserted.
         * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
         * @return {Node} the Element being inserted (equals domNode)
         */
        ElementPrototype._insertBefore = ElementPrototype.insertBefore;
        ElementPrototype.insertBefore = function(domNode, refDomNode, escape) {
            return this.prepend(domNode, escape, refDomNode);
        };

        /**
         * Reference to the last of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @method last
         * @param [cssSelector] {String} to return the last Element that matches the css-selector
         * @return {Element}
         * @since 0.0.1
         */
        ElementPrototype.last = function(cssSelector) {
            var vParent = this.vnode.vParent;
            return vParent && vParent.lastOfVChildren(cssSelector).domNode;
        };

        /**
         * Reference to the last child-Element, where the related dom-node an Element (nodeType===1).
         *
         * @method lastOfChildren
         * @param [cssSelector] {String} to return the last Element that matches the css-selector
         * @return {Element}
         * @since 0.0.1
         */
        ElementPrototype.lastOfChildren = function(cssSelector) {
            var foundVNode = this.vnode.lastOfVChildren(cssSelector);
            return foundVNode && foundVNode.domNode;
        };

        /**
         * Indicates if the element would be selected by the specified selector string.
         * Alias for matchesSelector()
         *
         * @method matches
         * @param [cssSelector] {String} the css-selector to check for
         * @return {Boolean}
         * @since 0.0.1
         */
        ElementPrototype.matches = function(selectors) {
            return this.vnode.matchesSelector(selectors);
        };

        /**
         * Indicates if the element would be selected by the specified selector string.
         * Alias for matches()
         *
         * @method matchesSelector
         * @param [cssSelector] {String} the css-selector to check for
         * @return {Boolean}
         * @since 0.0.1
         */
        ElementPrototype.matchesSelector = function(selectors) {
            return this.vnode.matchesSelector(selectors);
        };

        /**
         * Reference to the next of sibbling Element, where the related dom-node is an Element(nodeType===1).
         *
         * @method next
         * @param [cssSelector] {String} css-selector to be used as a filter
         * @return {Element|null}
         * @type Element
         * @since 0.0.1
         */
        ElementPrototype.next = function(cssSelector) {
            var vnode = this.vnode,
                found, vNextElement, firstCharacter, i, len;
            if (!cssSelector) {
                vNextElement = vnode.vNextElement;
                return vNextElement && vNextElement.domNode;
            }
            else {
                i = -1;
                len = cssSelector.length;
                while (!firstCharacter && (++i<len)) {
                    firstCharacter = cssSelector[i];
                    (firstCharacter===' ') && (firstCharacter=null);
                }
                if (firstCharacter==='>') {
                    return null;
                }
            }
            vNextElement = vnode;
            do {
                vNextElement = vNextElement.vNextElement;
                found = vNextElement && vNextElement.matchesSelector(cssSelector);
            } while(vNextElement && !found);
            return found ? vNextElement.domNode : null;
        };

       /**
        * Prepends a Element or text at the start of Element's innerHTML, or before the `refElement`.
        *
        * @method prepend
        * @param content {Element|Element|ElementArray|String} content to prepend
        * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
        * @param [refElement] {Element} reference Element where the content should be prepended
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Element} the created Element (or the last when multiple)
        * @since 0.0.1
        */
        ElementPrototype.prepend = function(content, escape, refElement, silent) {
            var instance = this,
                vnode = instance.vnode,
                i, len, item, createdElement, vnodes, vChildNodes, vRefElement,
            doPrepend = function(oneItem) {
                escape && (oneItem.nodeType===1) && (oneItem=DOCUMENT.createTextNode(oneItem.getOuterHTML()));
                createdElement = refElement ? vnode._insertBefore(oneItem.vnode, refElement.vnode) : vnode._appendChild(oneItem.vnode);
                // CAUTIOUS: when using TextNodes, they might get merged (vnode._normalize does this), which leads into disappearance of refElement:
                refElement = createdElement;
            };
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            vnode._noSync()._normalizable(false);
            if (!refElement) {
                vChildNodes = vnode.vChildNodes;
                vRefElement = vChildNodes && vChildNodes[0];
                refElement = vRefElement && vRefElement.domNode;
            }
            (typeof content===STRING) && (content=htmlToVFragments(content));
            if (content.isFragment) {
                vnodes = content.vnodes;
                len = vnodes.length;
                // to manage TextNodes which might get merged, we loop downwards:
                for (i=len-1; i>=0; i--) {
                    doPrepend(vnodes[i].domNode);
                }
            }
            else if (Array.isArray(content)) {
                len = content.length;
                // to manage TextNodes which might get merged, we loop downwards:
                for (i=len-1; i>=0; i--) {
                    item = content[i];
                    doPrepend(item);
                }
            }
            else {
                doPrepend(content);
            }
            vnode._normalizable(true)._normalize();
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return createdElement;
        };

        /**
         * Reference to the previous of sibbling Element, where the related dom-node is an Element(nodeType===1).
         *
         * @method previous
         * @param [cssSelector] {String} css-selector to be used as a filter
         * @return {Element|null}
         * @type Element
         * @since 0.0.1
         */
        ElementPrototype.previous = function(cssSelector) {
            var vnode = this.vnode,
                found, vPreviousElement, firstCharacter, i, len;
            if (!cssSelector) {
                vPreviousElement = vnode.vPreviousElement;
                return vPreviousElement && vPreviousElement.domNode;
            }
            else {
                i = -1;
                len = cssSelector.length;
                while (!firstCharacter && (++i<len)) {
                    firstCharacter = cssSelector[i];
                    (firstCharacter===' ') && (firstCharacter=null);
                }
                if (firstCharacter==='>') {
                    return null;
                }
            }
            vPreviousElement = vnode;
            do {
                vPreviousElement = vPreviousElement.vPreviousElement;
                found = vPreviousElement && vPreviousElement.matchesSelector(cssSelector);
            } while(vPreviousElement && !found);
            return found ? vPreviousElement.domNode : null;
        };

        /**
         * Returns the first Element within the Element, that matches the CSS-selectors. You can pass one, or multiple CSS-selectors. When passed multiple,
         * they need to be separated by a `comma`.
         *
         * @method querySelector
         * @param selectors {String} CSS-selector(s) that should match
         * @return {Element}
         */
        ElementPrototype.querySelector = function(selectors) {
            var found,
                i = -1,
                len = selectors.length,
                firstCharacter, startvnode,
                thisvnode = this.vnode,
                inspectChildren = function(vnode) {
                    var vChildren = vnode.vChildren,
                        len2 = vChildren ? vChildren.length : 0,
                        j, vChildNode;
                    for (j=0; (j<len2) && !found; j++) {
                        vChildNode = vChildren[j];
                        vChildNode.matchesSelector(selectors, thisvnode) && (found=vChildNode.domNode);
                        found || inspectChildren(vChildNode);
                    }
                };
            while (!firstCharacter && (++i<len)) {
                firstCharacter = selectors[i];
                (firstCharacter===' ') && (firstCharacter=null);
            }
            startvnode = SIBLING_MATCH_CHARACTER[firstCharacter] ? thisvnode.vParent : thisvnode;
            startvnode && inspectChildren(startvnode);
            return found;
        };

        /**
         * Returns an ElementArray of all Elements within the Element, that match the CSS-selectors. You can pass one, or multiple CSS-selectors. When passed multiple,
         * they need to be separated by a `comma`.
         *
         * querySelectorAll is a snapshot of the dom at the time this method was called. It is not updated when changes of the dom are made afterwards.
         *
         * @method querySelectorAll
         * @param selectors {String} CSS-selector(s) that should match
         * @return {ElementArray} non-life Array (snapshot) with Elements
         */
        ElementPrototype.querySelectorAll = function(selectors) {
            var found = ElementArray.createArray(),
                i = -1,
                len = selectors.length,
                firstCharacter, startvnode,
                thisvnode = this.vnode,
                inspectChildren = function(vnode) {
                    var vChildren = vnode.vChildren,
                        len2 = vChildren ? vChildren.length : 0,
                        j, vChildNode;
                    for (j=0; j<len2; j++) {
                        vChildNode = vChildren[j];
                        vChildNode.matchesSelector(selectors, thisvnode) && (found[found.length]=vChildNode.domNode);
                        inspectChildren(vChildNode);
                    }
                };
            while (!firstCharacter && (++i<len)) {
                firstCharacter = selectors[i];
                (firstCharacter===' ') && (firstCharacter=null);
            }
            startvnode = SIBLING_MATCH_CHARACTER[firstCharacter] ? thisvnode.vParent : thisvnode;
            startvnode && inspectChildren(startvnode);
            return found;
        };

       /**
         * Checks whether the Element has its rectangle inside the outbound-Element.
         * This is no check of the DOM-tree, but purely based upon coordinates.
         *
         * @method rectangleInside
         * @param outboundElement {Element} the Element where this element should lie inside
         * @return {Boolean} whether the Element lies inside the outboundElement
         * @since 0.0.1
         */
        ElementPrototype.rectangleInside = function(outboundElement) {
            var instance = this,
                outerRect = outboundElement.getBoundingClientRect(),
                innerRect = instance.getBoundingClientRect();
            return (outerRect.left<=innerRect.left) &&
                   (outerRect.top<=innerRect.top) &&
                   ((outerRect.left+outboundElement.offsetWidth)>=(innerRect.left+instance.offsetWidth)) &&
                   ((outerRect.top+outboundElement.offsetHeight)>=(innerRect.top+instance.offsetHeight));
        };

       /**
        * Removes the Element from the DOM.
        * Alias for thisNode.parentNode.removeChild(thisNode);
        *
        * @method remove
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Node} the DOM-node that was removed. You could re-insert it at a later time.
        * @since 0.0.1
        */
        ElementPrototype.remove = function(silent) {
            var instance = this,
                vnode = instance.vnode,
                vParent = vnode.vParent;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            vParent && vParent._removeChild(vnode);
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
        * Removes the attribute from the Element.
        *
        * Alias for removeAttribute() BUT is chainable instead (removeAttribute is not).
        *
        * @method removeAttr
        * @param attributeName {String}
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeAttr = function(attributeName, silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            this.removeAttribute(attributeName);
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return this;
        };

       /**
         * Removes multiple attributes on the Element.
         * The argument should be one ore more AttributeNames.
         *
         * @example
         * instance.removeAttrs(['tabIndex', 'style']);
         *
         * @method removeAttrs
         * @param attributeData {Array|String}
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
        */
        ElementPrototype.removeAttrs = function(attributeData, silent) {
            var instance = this;
            Array.isArray(attributeData) || (attributeData=[attributeData]);
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            attributeData.forEach(function(item) {
                instance.removeAttribute(item);
            });
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
        * Removes the attribute from the Element.
        *
        * Use removeAttr() to be able to chain.
        *
        * @method removeAttr
        * @param attributeName {String}
        * @since 0.0.1
        */
        ElementPrototype._removeAttribute = ElementPrototype.removeAttribute;
        ElementPrototype.removeAttribute = function(attributeName) {
            this.vnode._removeAttr(attributeName);
        };

        /**
        * Removes the Element's child-Node from the DOM.
        *
        * @method removeChild
        * @param domNode {Node} the child-Node to remove
        * @return {Node} the DOM-node that was removed. You could re-insert it at a later time.
        */
        ElementPrototype._removeChild = ElementPrototype.removeChild;
        ElementPrototype.removeChild = function(domNode) {
            var instance = this;
            instance.vnode._removeChild(domNode.vnode);
            return instance;
        };

       /**
        * Removes a className from the Element.
        *
        * @method removeClass
        * @param className {String|Array} the className that should be removed. May be an Array of classNames.
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @param [transitionFix] set this to `true` if you experience transition-problems due to wrong calculated css (mostly because of the `auto` value)
        *        Setting this parameter, will calculate the true css of the transitioned properties and set this temporarely inline, to fix the issue.
        *        Don't use it when not needed, it has a slightly performancehit.
        *        No need to set when `returnPromise` is set --> returnPromise always handles the transitionFix.
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Promise|this} In case `returnPromise` is set, a Promise returns with the next handles:
        *        <ul>
        *            <li>cancel() {Promise}</li>
        *            <li>freeze() {Promise}</li>
        *            <li>unfreeze()</li>
        *            <li>finish() {Promise}</li>
        *        </ul>
        *        These handles resolve with the `elapsed-time` as first argument of the callbackFn
        * @since 0.0.1
        */
        ElementPrototype.removeClass = function(className, returnPromise, transitionFix, silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            var instance = this,
                transPromise = (returnPromise || transitionFix) && getClassTransPromise(instance, REMOVE, className),
                returnValue = returnPromise ? transPromise : instance;
            transPromise || instance.getClassList().remove(className);
            if (silent && DOCUMENT.suppressMutationEvents) {
                if (returnValue===instance) {
                    DOCUMENT.suppressMutationEvents(false);
                }
                else {
                    returnValue.finally(function() {
                        DOCUMENT.suppressMutationEvents(false);
                    });
                }
            }
            return returnValue;
        };

       /**
        * Removes data specified by `key` that was set by using `setData()`.
        * When no arguments are passed, all node-data (key-value pairs) will be removed.
        *
        * @method removeData
        * @param [key] {string} name of the key, when not set, all data is removed
        * @param [deep] {Boolean} whether to set the data to all descendants recursively
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeData = function(key, deep) {
            var instance = this,
                vnode = instance.vnode;
            if (vnode._data) {
                if (key) {
                    delete vnode._data[key];
                }
                else {
                    // we cannot just redefine _data, for it is set as readonly
                    vnode._cleanData();
                    if (deep) {
                        instance.getChildren().forEach(function(element) {
                            element.removeData(key, true);
                        });
                    }
                }
            }
            return instance;
        };

       /**
        * Removes the Elment's `id`.
        *
        * @method removeId
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeId = function() {
            return this.removeAttr('id');
        };

       /**
        * Removes a css-property (inline) out of the Element.
        * No need to use camelCase.
        *
        * @method removeInlineStyle
        * @param cssProperty {String} the css-property to remove
        * @param [pseudo] {String} to look inside a pseudo-style
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeInlineStyle = function(cssProperty, pseudo, returnPromise) {
            return this.removeInlineStyles({property: cssProperty, pseudo: pseudo}, returnPromise);
        };

       /**
        * Removes multiple css-properties (inline) out of the Element. You need to supply an Array of Objects, with the properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>pseudo  {String}</li>
        *        <ul>
        * No need to use camelCase.
        *
        * @method removeInlineStyles
        * @param cssProperties {Array|Object} Array of objects, Strings (or 1 Object/String).
        *       When String, then speduo is considered as undefined. When `Objects`, they need the properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>pseudo  {String}</li>
        *        <ul>
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeInlineStyles = function(cssProperties, returnPromise) {
            // There will be 3 sets of styles:
            // `fromStyles` --> the current styles, only exactly calculated -without `auto`- (that is, for the transitioned properties)
            // `toStylesExact` --> the new styles, exactly calculated -without `auto`- (that is, for the transitioned properties)
            // `vnodeStyles` --> the new styles as how they should be in the end (f.i. with `auto`)
            var instance = this,
                vnode = instance.vnode,
                removed = [],
                transCount = 0,
                transitionProperties = {},
                maxtranstime = 0,
                needSync, prop, styles, i, len, item, hasTransitionedStyle, promise, vnodeStyles,
                pseudo, group, clonedElement, fromStyles, toStylesExact, value, transproperty, transtime;

            Array.isArray(cssProperties) || (cssProperties=[cssProperties]);
            cssProperties = getVendorCSS(cssProperties);
            len = cssProperties.length;
            vnodeStyles = vnode.styles;
            for (i=0; i<len; i++) {
                item = cssProperties[i];
                if (typeof item==='string') {
                    item = cssProperties[i] = {
                        property: item
                    };
                }
                pseudo = item.pseudo;
                group = pseudo || 'element';
                styles = vnodeStyles[group];
                if (styles) {
                    prop = item.property;
                    // if property is vendor-specific transition, or transform, than we reset it to the current vendor
                    if (styles[prop]) {
                        fromStyles || (fromStyles=vnodeStyles.deepClone());
                        needSync = true;
                        if ((prop!==VENDOR_TRANSITION_PROPERTY) && instance.hasTransition(prop, pseudo)) {
                            // store the calculated value:
                            fromStyles[group] || (fromStyles[group]={});
                            (prop===VENDOR_TRANSFORM_PROPERTY) || (fromStyles[group][prop]=instance.getStyle(prop, group));
                            hasTransitionedStyle = true;
                            removed[removed.length] = {
                                group: group,
                                property: prop,
                                pseudo: pseudo
                            };
                        }
                        delete styles[prop];
                        (styles.size()===0) && (delete vnode.styles[pseudo || 'element']);
                    }
                }
            }

            RUNNING_ON_NODE && (hasTransitionedStyle=false);
            if (hasTransitionedStyle) {
                // fix the current style with what is actual calculated:
                vnode.styles = fromStyles; // exactly styles, so we can transition well
                instance.setClass(NO_TRANS);
                instance.setAttr(STYLE, vnode.serializeStyles());
                async(function() {
                    // needs to be done in the next eventcyle, otherwise webkit-browsers miscalculate the syle (with transition on)
                    instance.removeClass(NO_TRANS);
                });

                // now calculate the final value
                clonedElement = instance.cloneNode(true);
                toStylesExact = vnodeStyles.deepClone();
                clonedElement.vnode.styles = toStylesExact;
                clonedElement.setAttr(STYLE, clonedElement.vnode.serializeStyles());
                clonedElement.setClass(INVISIBLE);
                DOCUMENT.body.append(clonedElement);
                // clonedElement has `vnodeStyles`, but we change them into `toStylesExact`

                len = removed.length;
                for (i=0; i<len; i++) {
                    item = removed[i];
                    prop = item.property;
                    group = item.pseudo || 'element';
                    if (!NON_CLONABLE_STYLES[prop]) {
                        value = (prop===VENDOR_TRANSFORM_PROPERTY) ? clonedElement.getInlineStyle(prop, item.pseudo) : clonedElement.getStyle(prop, item.pseudo);
                        if (value) {
                            toStylesExact[group] || (toStylesExact[group]={});
                            toStylesExact[group][prop] = value;
                        }
                    }
                    // look if we really have a change in the value:

                    if (toStylesExact[group] && (toStylesExact[group][prop]!==fromStyles[group][prop])) {
                        transproperty = instance.getTransition(prop, (group==='element') ? null : group);
                        transtime = transproperty.delay+transproperty.duration;
                        maxtranstime = Math.max(maxtranstime, transtime);
                        if (transtime>0) {
                            transCount++;
                            // TODO: transitionProperties supposes that we DO NOT have pseudo transitions!
                            // as soon we do, we need to split this object for each 'group'
                            transitionProperties[prop] = true;
                        }
                    }
                }
                hasTransitionedStyle = (transCount>0);
                clonedElement.remove();
            }
            if (needSync) {
                if (returnPromise || hasTransitionedStyle) {
                    promise = window.Promise.manage();
                    // need to call `setAttr` in a next event-cycle, otherwise the eventlistener made
                    // by `getTransPromise gets blocked.
                    async(function() {
                        if (hasTransitionedStyle) {
                            // reset
                            vnode.styles = toStylesExact;
                            promise.then(function() {
                                vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
                                instance.setClass(NO_TRANS);
                                instance.setAttr(STYLE, vnode.serializeStyles());
                            }).finally(function() {
                                async(function() {
                                    instance.removeClass(NO_TRANS);
                                    // webkit browsers seems to need to recalculate their set width:
                                    instance.getBoundingClientRect();
                                });
                            });
                        }
                        else {
                            vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
                        }
                        getTransPromise(instance, hasTransitionedStyle, null, transCount, transitionProperties, maxtranstime).then(
                            promise.fulfill
                        ).catch(promise.reject);
                        instance.setAttr(STYLE, vnode.serializeStyles());
                    });
                }
                else {
                    vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
                    instance.setAttr(STYLE, vnode.serializeStyles());
                    // webkit browsers seems to need to recalculate their set width:
                    instance.getBoundingClientRect();
                }
            }
            // else
            return returnPromise ? (promise || window.Promise.resolve()) : instance;
        };

       /**
        * Removes a subtype `transform`-css-property of (inline) out of the Element.
        * This way you can sefely remove partial `transform`-properties while remaining the
        * other inline `transform` css=properties.
        *
        * See more about tranform-properties: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
        *
        * @method removeInlineTransition
        * @param transitionProperty {String} the css-transform property to remove
        * @param [pseudo] {String} to look inside a pseudo-style
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeInlineTransition = function(transitionProperty, pseudo) {
            return this.removeInlineTransitions({property: transitionProperty, pseudo: pseudo});
        };

       /**
        * Removes multiple subtype `transform`-css-property of (inline) out of the Element.
        * This way you can sefely remove partial `transform`-properties while remaining the
        * other inline `transform` css=properties.
        * You need to supply an Array of Objects, with the properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>pseudo  {String}</li>
        *        <ul>
        *
        * See more about tranform-properties: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
        *
        * @method removeInlineTransitions
        * @param transitionProperties {Array|Object} the css-transform properties to remove
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.removeInlineTransitions = function(transitionProperties) {
            var instance = this,
                vnode = instance.vnode,
                styles = vnode.styles,
                groupStyle, transitionStyles, i, len, item, needSync, transitionProperty, pseudo;

            if (styles) {
                Array.isArray(transitionProperties) || (transitionProperties=[transitionProperties]);
                transitionProperties = getVendorCSS(transitionProperties);
                len = transitionProperties.length;
                for (i=0; i<len; i++) {
                    item = transitionProperties[i];
                    pseudo = item.pseudo;
                    groupStyle = styles && styles[pseudo || 'element'];
                    transitionStyles = groupStyle && groupStyle[VENDOR_TRANSITION_PROPERTY];
                    if (transitionStyles) {
                        transitionProperty = item.property;
                        if (transitionStyles[transitionProperty]) {
                            delete transitionStyles[transitionProperty];
                            (transitionStyles.size()===0) && (delete groupStyle[VENDOR_TRANSITION_PROPERTY]);
                            (styles.size()===0) && (delete vnode.styles[pseudo || 'element']);
                            needSync = true;
                        }
                    }
                }
            }
            needSync && instance.setAttr(STYLE, vnode.serializeStyles());
            return instance;
        };

       /**
        * Replaces the Element with a new Element.
        *
        * @method replace
        * @param content {Element|Element|ElementArray|String} content to replace
        * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
        * @return {Element} the created Element (or the last when multiple)
        * @since 0.0.1
        */
        ElementPrototype.replace = function(newElement, escape) {
            var instance = this,
                vnode = instance.vnode,
                previousVNode = vnode.vPrevious,
                vParent = vnode.vParent,
                createdElement;
            createdElement = previousVNode ? vParent.domNode.append(newElement, escape, previousVNode.domNode) : vParent.domNode.prepend(newElement, escape);
            instance.setClass(HIDDEN);
            instance.remove();
            return createdElement;
        };

        /**
        * Replaces the Element's child-Element with a new Element.
        *
        * @method replaceChild
        * @param newElement {Element} the new Element
        * @param oldVChild {Element} the Element to be replaced
        * @param [escape] {Boolean} whether to insert `escaped` content, leading it into only text inserted
        * @return {Element} the Element that was removed (equals oldVChild)
        * @since 0.0.1
        */
        ElementPrototype._replaceChild = ElementPrototype.replaceChild;
        ElementPrototype.replaceChild = function(newDomNode, oldDomNode, escape) {
            return oldDomNode.replace(newDomNode, escape);
        };

       /**
        * Replaces the className of the Element with a new className.
        * If the previous className is not available, the new className is set nevertheless.
        *
        * @method replaceClass
        * @param prevClassName {String} the className to be replaced
        * @param newClassName {String} the className to be set
        * @param [force ] {Boolean} whether the new className should be set, even is the previous className isn't there
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @param [transitionFix] set this to `true` if you experience transition-problems due to wrong calculated css (mostly because of the `auto` value)
        *        Setting this parameter, will calculate the true css of the transitioned properties and set this temporarely inline, to fix the issue.
        *        Don't use it when not needed, it has a slightly performancehit.
        *        No need to set when `returnPromise` is set --> returnPromise always handles the transitionFix.
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Promise|this} In case `returnPromise` is set, a Promise returns with the next handles:
        *        <ul>
        *            <li>cancel() {Promise}</li>
        *            <li>freeze() {Promise}</li>
        *            <li>unfreeze()</li>
        *            <li>finish() {Promise}</li>
        *        </ul>
        *        These handles resolve with the `elapsed-time` as first argument of the callbackFn
        * @since 0.0.1
        */
        ElementPrototype.replaceClass = function(prevClassName, newClassName, force, returnPromise, transitionFix, silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            var instance = this,
                transPromise = (returnPromise || transitionFix) && getClassTransPromise(instance, REPLACE, newClassName, prevClassName, force),
                returnValue;
            if (force || instance.hasClass(prevClassName)) {
                returnValue = returnPromise ? transPromise : instance;
                transPromise || instance.removeClass(prevClassName).setClass(newClassName);
                return returnValue;
            }
            if (silent && DOCUMENT.suppressMutationEvents) {
                if (returnValue===instance) {
                    DOCUMENT.suppressMutationEvents(false);
                }
                else {
                    returnValue.finally(function() {
                        DOCUMENT.suppressMutationEvents(false);
                    });
                }
            }
            return returnPromise ? window.Promise.resolve() : instance;
        };

        /**
         * Scrolls the content of the Element into the specified scrollposition.
         * Only available when the Element has overflow.
         *
         * @method scrollTo
         * @param x {Number} left-offset in pixels
         * @param y {Number} top-offset in pixels
         * @chainable
         * @since 0.0.1
        */
        ElementPrototype.scrollTo = function(x, y) {
            var instance = this;
            instance.scrollLeft = x;
            instance.scrollTop = y;
            return instance;
        };

       /**
         * Sets the attribute on the Element with the specified value.
         *
         * Alias for setAttribute(), BUT differs in a way that setAttr is chainable, setAttribute is not.
         *
         * @method setAttr
         * @param attributeName {String}
         * @param value {Any} the value that belongs to `key`
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
        */
        ElementPrototype.setAttr = function(attributeName, value, silent) {
            var instance = this;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            instance.setAttribute(attributeName, value);
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
         * Sets the attribute on the Element with the specified value.
         *
         * Alias for setAttr(), BUT differs in a way that setAttr is chainable, setAttribute is not.
         *
         * @method setAttribute
         * @param attributeName {String}
         * @param value {String} the value for the attributeName
        */
        ElementPrototype._setAttribute = ElementPrototype.setAttribute;
        ElementPrototype.setAttribute = function(attributeName, value) {
            var instance = this,
                vnode = instance.vnode;
            (value==='') && (value=null);
            ((value!==null) && (value!==undefined)) ? vnode._setAttr(attributeName, value) : vnode._removeAttr(attributeName);
        };

       /**
         * Sets multiple attributes on the Element with the specified value.
         * The argument should be one ore more Objects with the properties: `name` and `value`
         *
         * @example
         * instance.setAttrs([
         *                      {name: 'tabIndex', value: '0'},
         *                      {name: 'style', value: 'color: #000;'}
         *                  ]);
         *
         * @method setAttrs
         * @param attributeData {Array|Object}
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
        */
        ElementPrototype.setAttrs = function(attributeData, silent) {
            var instance = this;
            Array.isArray(attributeData) || (attributeData=[attributeData]);
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            attributeData.forEach(function(item) {
                instance.setAttribute(item.name, item.value);
            });
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
        * Adds a class to the Element. If the class already exists it won't be duplicated.
        *
        * @method setClass
        * @param className {String|Array} className to be added, may be an array of classNames
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @param [transitionFix] set this to `true` if you experience transition-problems due to wrong calculated css (mostly because of the `auto` value)
        *        Setting this parameter, will calculate the true css of the transitioned properties and set this temporarely inline, to fix the issue.
        *        Don't use it when not needed, it has a slightly performancehit.
        *        No need to set when `returnPromise` is set --> returnPromise always handles the transitionFix.
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Promise|this} In case `returnPromise` is set, a Promise returns with the next handles:
        *        <ul>
        *            <li>cancel() {Promise}</li>
        *            <li>freeze() {Promise}</li>
        *            <li>unfreeze()</li>
        *            <li>finish() {Promise}</li>
        *        </ul>
        *        These handles resolve with the `elapsed-time` as first argument of the callbackFn
        * @since 0.0.1
        */
        ElementPrototype.setClass = function(className, returnPromise, transitionFix, silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            var instance = this,
                transPromise = (returnPromise || transitionFix) && getClassTransPromise(instance, SET, className),
                returnValue = returnPromise ? transPromise : instance;
            transPromise || instance.getClassList().add(className);
            if (silent && DOCUMENT.suppressMutationEvents) {
                if (returnValue===instance) {
                    DOCUMENT.suppressMutationEvents(false);
                }
                else {
                    returnValue.finally(function() {
                        DOCUMENT.suppressMutationEvents(false);
                    });
                }
            }
            return returnValue;
        };

        /**
         * Stores arbitary `data` at the Element (actually at vnode). This has nothing to do with node-attributes whatsoever,
         * it is just a way to bind any data to the specific Element so it can be retrieved later on with `getData()`.
         *
         * @method setData
         * @param key {string} name of the key
         * @param value {Any} the value that belongs to `key`
         * @param [deep] {Boolean} whether to set the data to all descendants recursively
         * @chainable
         * @since 0.0.1
        */
        ElementPrototype.setData = function(key, value, deep) {
            var instance = this,
                vnode = instance.vnode;
            if (value!==undefined) {
                vnode._data || Object.protectedProp(vnode, '_data', {});
                vnode._data[key] = value;
                if (deep) {
                    instance.getChildren().forEach(function(element) {
                        element.setData(key, value, true);
                    });
                }
            }
            return instance;
        };

        /**
         * Sets the innerHTML of both the vnode as well as the representing dom-node.
         * Goes through the vdom, so it's superfast.
         *
         * Use this method instead of `innerHTML`
         *
         * Syncs with the DOM.
         *
         * @method setHTML
         * @param val {String} the new value to be set
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
         */
        ElementPrototype.setHTML = function(val, silent) {
            var instance = this;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            instance.vnode.innerHTML = val;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
        * Sets the Elments `id`
        *
        * @method setId
        * @param val {String} Elements new `id`
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.setId = function(val) {
            return this.setAttr('id', val);
        };

       /**
        * Sets a css-property (inline) for the Element.
        *
        * Note1: Do not use vendor-specific properties, but general (like `transform` instead of `-webkit-transform`)
        *        This method will use the appropriate css-property.
        * Note2: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine
        *
        * @method setInlineStyle
        * @param cssProperty {String} the css-property to be set
        * @param value {String} the css-value
        * @param [pseudo] {String} to look inside a pseudo-style
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @return {Promise|this}
        * @since 0.0.1
        */
        ElementPrototype.setInlineStyle = function(cssProperty, value, pseudo, returnPromise) {
            if (typeof pseudo==='boolean') {
                returnPromise = pseudo;
                pseudo = null;
            }
            return this.setInlineStyles([{property: cssProperty, value: value, pseudo: pseudo}], returnPromise);
        };

       /**
        * Sets multiple css-properties (inline) for the Element at once.
        *
        * Note1: Do not use vendor-specific properties, but general (like `transform` instead of `-webkit-transform`)
        *        This method will use the appropriate css-property.
        * Note2: no need to camelCase cssProperty: both `margin-left` as well as `marginLeft` are fine
        *
        * @method setInlineStyles
        * @param cssProperties {Array|Object} the css-properties to be set, specified as an Array of Objects, or 1 Object.
        *        The objects should have the next properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>value  {String}</li>
        *            <li>pseudo  {String} (optional) --> not: not supported yet in browsers</li>
        *        </ul>
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @return {Promise|this}
        * @since 0.0.1
        */
        ElementPrototype.setInlineStyles = function(cssProperties, returnPromise) {
            // There will be 3 sets of styles:
            // `fromStyles` --> the current styles, only exactly calculated -without `auto`- (that is, for the transitioned properties)
            // `toStylesExact` --> the new styles, exactly calculated -without `auto`- (that is, for the transitioned properties)
            // `vnodeStyles` --> the new styles as how they should be in the end (f.i. with `auto`)
            var instance = this,
                vnode = instance.vnode,
                transitionedProps = [],
                transCount = 0,
                maxtranstime = 0,
                transitionProperties = {},
                // third argument is a hidden feature --> used by getClassTransPromise()
                avoidBackup = arguments[2],
                styles, group, i, len, item, promise, hasTransitionedStyle, property, hasChanged, transtime,
                pseudo, fromStyles, value, vnodeStyles, toStylesExact, clonedElement, transproperty;

            // if there is a class-transition going on (initiated by getClassTransPromise),
            // the we might need to update the internal bkpNode:
            if (!avoidBackup && vnode._data) {
                // there might be more bkpNodes, so we need to loop through the data:
                vnode._data.each(function(bkpNode, key) {
                    if (key.startsWith('bkpNode')) {
                        bkpNode.setInlineStyles(cssProperties, null, true);
                    }
                });
            }

            Array.isArray(cssProperties) || (cssProperties=[cssProperties]);
            cssProperties = getVendorCSS(cssProperties);
            len = cssProperties.length;
            vnode.styles || (vnode.styles={});
            vnodeStyles = vnode.styles;
            // Both `from` and `to` ALWAYS need to be set to their calculated value --> this makes transition
            // work with `auto`, or when the page isn't completely loaded
            // First: backup the actual style:
            fromStyles = vnodeStyles.deepClone();
            for (i=0; i<len; i++) {
                item = cssProperties[i];
                pseudo = item.pseudo;
                group = pseudo || 'element';
                vnodeStyles[group] || (vnodeStyles[group]={});
                styles = vnodeStyles[group];
                property = fromCamelCase(item.property);
                value = item.value;

                (property===VENDOR_TRANSITION_PROPERTY) && (value=extractor.toTransitionObject(value));
                if (value===undefined) {
                    delete styles[property];
                }
                else {
                    styles[property] = value;
                }
                if ((property!==VENDOR_TRANSITION_PROPERTY) && instance.hasTransition(property, pseudo)) {
                    fromStyles[group] || (fromStyles[group]={});
                    (property===VENDOR_TRANSFORM_PROPERTY) || (fromStyles[group][property]=instance.getStyle(property, pseudo));
                    if (fromStyles[group][property]!==value) {
                        transproperty = instance.getTransition(property, (group==='element') ? null : group);
                        transtime = transproperty.delay+transproperty.duration;
                        maxtranstime = Math.max(maxtranstime, transtime);
                        if (transtime>0) {
                            hasTransitionedStyle = true;
                            transCount++;
                            // TODO: transitionProperties supposes that we DO NOT have pseudo transitions!
                            // as soon we do, we need to split this object for each 'group'
                            transitionProperties[property] = true;
                            transitionedProps[transitionedProps.length] = {
                                group: group,
                                property: property,
                                value: value,
                                pseudo: pseudo
                            };
                        }
                    }
                }
            }
            RUNNING_ON_NODE && (hasTransitionedStyle=false);
            if (hasTransitionedStyle) {
                // we forced set the exact initial css inline --> this is the only way to make a right transition
                // under all circumstances
                toStylesExact = vnodeStyles.deepClone();
                clonedElement = instance.cloneNode(true); // cloned with `vnodeStyles`
                clonedElement.vnode.styles = toStylesExact;
                // fix the current style with what is actual calculated:
                vnode.styles = fromStyles; // exactly styles, so we can transition well
                instance.setClass(NO_TRANS);
                instance.setAttr(STYLE, vnode.serializeStyles());
                async(function() {
                    // needs to be done in the next eventcyle, otherwise webkit-browsers miscalculate the syle (with transition on)
                    instance.removeClass(NO_TRANS);
                });

                // clonedElement has `vnodeStyles`, but we change them into `toStylesExact`
                clonedElement.setClass(INVISIBLE);
                clonedElement.setAttr(STYLE, clonedElement.vnode.serializeStyles());
                DOCUMENT.body.append(clonedElement);

                // now calculate the `transition` styles and store them in the css-property of `toStylesExact`:
                len = transitionedProps.length;
                hasChanged = false;
                for (i=0; i<len; i++) {
                    item = transitionedProps[i];
                    property = item.property;
                    group = item.pseudo || 'element';
                    if (!NON_CLONABLE_STYLES[property]) {
                        value = (property===VENDOR_TRANSFORM_PROPERTY) ? clonedElement.getInlineStyle(property, item.pseudo) : clonedElement.getStyle(property, item.pseudo);
                        if (value) {
                            toStylesExact[group] || (toStylesExact[group]={});
                            toStylesExact[group][property] = value;
                        }
                    }
                    // look if we really have a change in the value:
                    if (!hasChanged && toStylesExact[group]) {
                        hasChanged = (toStylesExact[group][property]!==fromStyles[group][property]);
                    }
                }
                clonedElement.remove();
                hasTransitionedStyle = hasChanged;
            }
            RUNNING_ON_NODE && (hasTransitionedStyle=false);
            if (returnPromise || hasTransitionedStyle) {
                promise = window.Promise.manage();
                // need to call `setAttr` in a next event-cycle, otherwise the eventlistener made
                // by `getTransPromise gets blocked.
                async(function() {
                    if (hasTransitionedStyle) {
                        // reset
                        vnode.styles = toStylesExact;
                        promise.then(function() {

                            vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
                            instance.setClass(NO_TRANS);
                            instance.setAttr(STYLE, vnode.serializeStyles());
                        }).finally(function() {
                            async(function() {
                                // needs to be done in the next eventcyle, otherwise webkit-browsers miscalculate the syle (with transition on)
                                instance.removeClass(NO_TRANS);
                                // webkit browsers seems to need to recalculate their set width:
                                instance.getBoundingClientRect();
                            });
                        });
                    }
                    else {
                        vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
                    }
                    getTransPromise(instance, hasTransitionedStyle, null, transCount, transitionProperties, maxtranstime).then(
                        function() {
                            promise.fulfill();
                        }
                    ).catch(promise.reject);
                    instance.setAttr(STYLE, vnode.serializeStyles());
                });
                return returnPromise ? promise : instance;
            }
            // else
            vnode.styles = vnodeStyles; // finally values, not exactly calculated, but as is passed through
            instance.setAttr(STYLE, vnode.serializeStyles());
            // webkit browsers seems to need to recalculate their set width:
            instance.getBoundingClientRect();
            return instance;
        };

       /**
        * Sets a transform-css-property (inline) for the Element.
        *
        * See more about transitions: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions
        *
        * @method setStyle
        * @param setInlineTransition {String} the css-property to be set, f.e. `translateX`
        * @param duration {Number} the duration in seconds (may be a broken number, like `0.5`)
        * @param [timingFunction] {String} See https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
        * @param delay {Number} the delay in seconds (may be a broken number, like `0.5`)
        * @param [pseudo] {String} to look inside a pseudo-style
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.setInlineTransition = function(transitionProperty, duration, timingFunction, delay, pseudo) {
            // transition-example: transition: width 2s, height 2s, transform 2s;
            return this.setInlineTransitions({property: transitionProperty, duration: duration, timingFunction: timingFunction, delay: delay, pseudo: pseudo});
        };

       /**
        * Sets a transform-css-property (inline) for the Element.
        *
        * See more about transitions: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions
        *
        * @method setStyle
        * @param transitionProperties {Array} the css-transition-properties to be set, specified as an Array of Objects.
        *        The objects should have the next properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>duration  {Number}</li>
        *            <li>timingFunction  {String} (optional)</li>
        *            <li>delay  {Number} (optional)</li>
        *            <li>pseudo  {String} (optional)</li>
        *        </ul>
        * @param [pseudo] {String} to look inside a pseudo-style
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.setInlineTransitions = function(transitionProperties) {
            // transition-example: transition: width 2s, height 2s, transform 2s;
            var instance = this,
                vnode = instance.vnode,
                transitionStyles, transitionProperty, group, trans, i, len, item;
            Array.isArray(transitionProperties) || (transitionProperties=[transitionProperties]);
            transitionProperties = getVendorCSS(transitionProperties);
            len = transitionProperties.length;
            vnode.styles || (vnode.styles={});
            for (i=0; i<len; i++) {
                item = transitionProperties[i];
                if (item.property) {
                    group = item.pseudo || 'element';
                    vnode.styles[group] || (vnode.styles[group]={});
                    vnode.styles[group][VENDOR_TRANSITION_PROPERTY] || (vnode.styles[group][VENDOR_TRANSITION_PROPERTY]={});
                    transitionStyles = vnode.styles[group][VENDOR_TRANSITION_PROPERTY];
                    transitionProperty = fromCamelCase(item.property);
                    trans = transitionStyles[transitionProperty] = {
                        duration: item.duration
                    };
                    item.timingFunction && (trans.timingFunction=item.timingFunction);
                    item.delay && (trans.delay=item.delay);
                }
            }
            instance.setAttr(STYLE, vnode.serializeStyles());
            return instance;
        };

        /**
         * Gets or sets the outerHTML of both the Element as well as the representing dom-node.
         * Goes through the vdom, so it's superfast.
         *
         * Use this property instead of `outerHTML`
         *
         * Syncs with the DOM.
         *
         * @method setOuterHTML
         * @param val {String} the new value to be set
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
         */
        ElementPrototype.setOuterHTML = function(val, silent) {
            var instance = this;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            instance.vnode.outerHTML = val;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

        /**
         * Sets the innerContent of the Element as plain text.
         * Goes through the vdom, so it's superfast.
         *
         * Use this method instead of `textContent`
         *
         * Syncs with the DOM.
         *
         * @method setText
         * @param val {String} the textContent to be set
         * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
         * @chainable
         * @since 0.0.1
         */
        ElementPrototype.setText = function(val, silent) {
            var instance = this;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            instance.vnode.textContent = val;
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(false);
            return instance;
        };

       /**
        * Sets the value of the following Elements:
        *
        * <ul>
        *     <li>input</li>
        *     <li>textarea</li>
        *     <li>select</li>
        *     <li>any container that is `contenteditable`</li>
        * </ul>
        *
        * Will emit a `valuechange`-event when a new value is set and ITSA's `event`-module is active.
        *
        * @method setValue
        * @param val {String} thenew value to be set
        * @chainable
        * @since 0.0.1
        */
        ElementPrototype.setValue = function(val) {
            var instance = this,
                prevVal = instance.value,
                contenteditable = instance.vnode.attrs.contenteditable,
            // cautious: input and textarea must be accessed by their propertyname:
            // input.getAttribute('value') would return the defualt-value instead of actusl
            // and textarea.getAttribute('value') doesn't exist
                editable = contenteditable && (contenteditable!=='false'),
                tag, i, option, len, vChildren;
            if (editable) {
                instance.setHTML(val);
            }
            else {
                tag = instance.getTagName();
                if ((tag==='INPUT') || (tag==='TEXTAREA')) {
                    instance.value = val;
                }
                else if (tag==='SELECT') {
                    vChildren = instance.vnode.vChildren;
                    len = vChildren.length;
                    for (i=0; i<len; i++) {
                        option = vChildren[i];
                        if (option.attrs.value === val) {
                            instance.selectedIndex = i;
                            break;
                        }
                    }
                }
            }
            // if `document._emitVC` is available, then invoke it to emit the `valuechange`-event
            /**
            * @event valuechange
            * @param e.value {String} new value
            * @param e.sourceTarget {Element} Element whare the valuechange occured
            */
            DOCUMENT._emitVC && (prevVal!==val) && DOCUMENT._emitVC(instance, val);
            return instance;
        };

       /**
         * Set the position of an html element in page coordinates.
         * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
         *
         * If the Element has the attribute `xy-constrian` set, then its position cannot exceed any matching container it lies within.
         *
         * @method setXY
         * @param x {Number} x-value for new position (coordinates are page-based)
         * @param y {Number} y-value for new position (coordinates are page-based)
         * @param [constrain] {'window', Element, Object, String}
         * <ul>
         *     <li><b>'window'</b> to constrain to the visible window</li>
         *     <li><b>Element</b> to constrain to a specified Element</li>
         *     <li><b>Object</b> to constrain to an object with the properties: {x, y, w, h} where x and y are absolute pixels of the document
         *            (like calculated with getX() and getY()).</li>
         *     <li><b>String</b> to constrain to a specified css-selector, which should be an ancestor</li>
         * </ul>
         * @param [notransition=false] {Boolean} set true if you are sure positioning is without transition.
         *        this isn't required, but it speeds up positioning. Only use when no transition is used:
         *        when there is a transition, setting this argument `true` would miscalculate the position.
         *        The return-value will be `this` in case `notransition`===true, making setXY to be chainable.
         * @return {Promise|this}
         * @since 0.0.1
         */
        ElementPrototype.setXY = function(x, y, constrain, notransition) {
            console.log(NAME, 'setXY '+x+','+y);
            var instance = this,
                dif, match, constrainNode, byExactId, parent, clone, promise,
                containerTop, containerRight, containerLeft, containerBottom, requestedX, requestedY,
                transObject, xtrans, ytrans, inlinePosition, globalPosition, invisibleClass;

            // default position to relative: check first inlinestyle because this goes quicker
            inlinePosition = instance.getInlineStyle(POSITION);
            inlinePosition || (globalPosition=instance.getStyle(POSITION));
            if ((inlinePosition==='static') || (inlinePosition==='fixed') || (globalPosition==='static') || (globalPosition==='fixed')) {
                inlinePosition = 'relative';
                instance.setInlineStyle(POSITION, inlinePosition);
            }
            invisibleClass = (inlinePosition==='absolute') ? INVISIBLE : INVISIBLE_RELATIVE;
            // make sure it has sizes and can be positioned
            instance.setClass([invisibleClass, BORDERBOX]);
            (instance.getInlineStyle('display')==='none') && instance.setClass(BLOCK);
            constrain || (constrain=instance.getAttr('constrain-selector'));
            if (constrain) {
                if (constrain==='window') {
                    containerLeft = window.getScrollLeft();
                    containerTop = window.getScrollTop();
                    containerRight = containerLeft + window.getWidth();
                    containerBottom = containerTop + window.getHeight();
                }
                else {
                    if (typeof constrain === STRING) {
                        match = false;
                        constrainNode = instance.getParent();
                        byExactId = REGEXP_NODE_ID.test(constrain);
                        while (constrainNode.matchesSelector && !match) {
                            match = byExactId ? (constrainNode.id===constrain.substr(1)) : constrainNode.matchesSelector(constrain);
                            // if there is a match, then make sure x and y fall within the region
                            match || (constrainNode=constrainNode.getParent());
                        }
                        // if Element found, then bound it to `constrain` as if the argument `constrain` was an Element
                        match && (constrain=constrainNode);
                    }
                    if (constrain.matchesSelector) {
                        // Element --> we need to search the rectangle
                        containerLeft = constrain.left + parseInt(constrain.getStyle(BORDER_LEFT_WIDTH), 10);
                        containerTop = constrain.top + parseInt(constrain.getStyle(BORDER_TOP_WIDTH), 10);
                        containerRight = containerLeft + constrain.scrollWidth;
                        containerBottom = containerTop + constrain.scrollHeight;
                    }
                    else {
                        containerLeft = constrain.x;
                        containerTop = constrain.y;
                        containerRight = constrain.x + constrain.w;
                        containerBottom = constrain.y + constrain.h;
                    }
                }
                if (typeof containerLeft === NUMBER) {
                    // found constrain, always redefine x and y
                    x = requestedX = (typeof x===NUMBER) ? x : instance.left;
                    if (requestedX<containerLeft) {
                        x = containerLeft;
                    }
                    else {
                        if ((requestedX+instance.offsetWidth)>containerRight) {
                            x = requestedX = containerRight - instance.offsetWidth;
                        }
                        // now we might need to reset to the left again:
                        (requestedX<containerLeft) && (x=containerLeft);
                    }
                    y = requestedY = (typeof y===NUMBER) ? y : instance.top;
                    if (requestedY<containerTop) {
                        y = containerTop;
                    }
                    else {
                        if ((requestedY+instance.offsetHeight)>containerBottom) {
                            y = requestedY = containerBottom - instance.offsetHeight;
                        }
                        // now we might need to reset to the top again:
                        (requestedY<containerTop) && (y=containerTop);
                    }
                }
            }
            xtrans = (typeof x === NUMBER);
            ytrans = (typeof y === NUMBER);
            if (xtrans || ytrans) {
                // check if there is a transition:
                if (notransition) {
                    instance.setClass([NO_TRANS2, invisibleClass]);
                    transObject = [];
                    xtrans && (transObject[0]={property: LEFT, value: x + PX});
                    ytrans && (transObject[xtrans ? 1 : 0]={property: TOP, value: y + PX});
                    instance.setInlineStyles(transObject);
                    // reset transObject and maybe it will be filled when there is a difference
                    // between the set value and the true value (which could appear due to different `position` properties)
                    transObject = [];
                    if (xtrans) {
                        dif = (instance.left-x);
                        (dif!==0) && (transObject[0]={property: LEFT, value: (x - dif) + PX});
                    }
                    if (ytrans) {
                        dif = (instance.top-y);
                        (dif!==0) && (transObject[transObject.length]={property: TOP, value: (y - dif) + PX});
                    }
                    (transObject.length>0) && instance.setInlineStyles(transObject);
                    instance.removeClass([NO_TRANS2, invisibleClass]);
                }
                else {
                    // we will clone the node, make it invisible and without transitions and look what its correction should be
                    clone = instance.cloneNode();
                    clone.setClass([NO_TRANS2, invisibleClass]);
                    parent = instance.getParent() || DOCUMENT.body;
                    parent.prepend(clone, null, instance);

                    transObject = [];
                    xtrans && (transObject[0]={property: LEFT, value: x + PX});
                    ytrans && (transObject[xtrans ? 1 : 0]={property: TOP, value: y + PX});

                    clone.setInlineStyles(transObject);

                    // reset transObject and fill it with the final true values
                    transObject = [];
                    xtrans && (transObject[0]={property: LEFT, value: (2*x-clone.left) + PX});
                    ytrans && (transObject[xtrans ? 1 : 0]={property: TOP, value: (2*y-clone.top) + PX});
                    clone.remove();
                    promise = instance.setInlineStyles(transObject, true);
                }
            }
            else if (!notransition) {
                promise = window.Promise.resolve();
            }
            instance.removeClass([BLOCK, BORDERBOX, invisibleClass]);
            return promise || instance;
        };

       /**
        * Shows a previously hidden node.
        * Shows immediately without `fade`, or will fade-in when fade is specified.
        *
        * @method show
        * @param [fade] {Number} sec to fade-in (you may use `0.1`)
        * @return {this|Promise} fulfilled when the element is ready showing up, or rejected when hidden again (using node.hide) before fully showed.
        * @since 0.0.1
        */
        ElementPrototype.show = function(duration, forceFull) {
            var instance = this,
                showPromise = instance.getData('_showNodeBusy'),
                hidePromise = instance.getData('_hideNodeBusy'),
                originalOpacity, hasOriginalOpacity, promise, freezedOpacity, finalValue;

            originalOpacity = instance.getData('_showNodeOpacity');
            if (!originalOpacity && !showPromise && !hidePromise) {
                originalOpacity = instance.getInlineStyle('opacity');
                instance.setData('_showNodeOpacity', originalOpacity);
            }
            hasOriginalOpacity = !!originalOpacity;

            showPromise && showPromise.freeze();
            hidePromise && hidePromise.freeze();

            if (duration) {

                instance.setInlineStyle('opacity', (instance.hasClass(HIDDEN) ? 0 : instance.getStyle('opacity')));
                instance.removeClass(HIDDEN);

                finalValue = (forceFull || !hasOriginalOpacity) ? 1 : originalOpacity;
                if (showPromise || hidePromise) {
                    freezedOpacity = instance.getInlineStyle('opacity');
                    duration = (finalValue>0) ? Math.min(1, (freezedOpacity/finalValue))*duration : 0;
                }

                promise = instance.transition({property: 'opacity', value: finalValue, duration: duration});
                instance.setData('_showNodeBusy', promise);

                promise.finally(function() {
                    if (!promise.cancelled && !promise.frozen) {
                        hasOriginalOpacity || instance.removeInlineStyle('opacity');
                        if (!forceFull || !hasOriginalOpacity) {
                            instance.removeData('_showNodeOpacity');
                        }
                    }
                    instance.removeData('_showNodeBusy');
                });
                return promise;
            }
            else {
                async(function() {
                    (hasOriginalOpacity && !forceFull) ? instance.setInlineStyle('opacity', originalOpacity) : instance.removeInlineStyle('opacity');
                    instance.removeClass(HIDDEN);
                });
                return instance;
            }
        };

       /**
        * Transitions one ore more properties of the Element.
        *
        * @method toggleClass
        * @param to {Array} the css-properties to be set, specified as an Array of Objects.
        *        The objects should have the next properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>value  {String}</li>
        *            <li>duration  {Number} (optional)</li>
        *            <li>timingFunction  {String} (optional)</li>
        *            <li>delay  {String} (optional)</li>
        *            <li>pseudo  {String} (optional) --> not: not supported yet in browsers</li>
        *        </ul>
        * @param [from] {Array} starting the css-properties to be set, specified as an Array of Objects.
        *        If disguarded, then the current style is used as startingpoint. You may specify a subset of the `to`-properties.
        *        The objects should have the next properties:
        *        <ul>
        *            <li>property  {String}</li>
        *            <li>value  {String}</li>
        *            <li>duration  {Number} (optional)</li>
        *            <li>timingFunction  {String} (optional)</li>
        *            <li>delay  {String} (optional)</li>
        *            <li>pseudo  {String} (optional) --> not: not supported yet in browsers</li>
        *        </ul>
        * @return {Promise} The promise has the handles:
        *        <ul>
        *            <li>cancel() {Promise}</li>
        *            <li>freeze() {Promise}</li>
        *            <li>unfreeze()</li>
        *            <li>finish() {Promise}</li>
        *        </ul>
        *        These handles resolve with the `elapsed-time` as first argument of the callbackFn
        * @since 0.0.1
        */
        ElementPrototype.transition = function(to, from) {
            var instance = this,
                currentInlineTransition, transitions, transitionRun, transitionError, promise, resolveHandle, initialStyle, time1,
                initialProperties, cleanup, getCurrentProperties, manipulated, getNoTransProp, transpromise, endIntermediate, time2;

            to || (to={});
            Array.isArray(to) || (to=[to]);
            to = getVendorCSS(to);
            time1 = Date.now();
            cleanup = function() {
                currentInlineTransition = instance.getData('_bkpTransition');
                currentInlineTransition ? instance.setInlineStyle(TRANSITION, currentInlineTransition) : instance.removeInlineStyle(TRANSITION);
                instance.removeData('_bkpTransition');
                instance.removeData('_readyOnRun');
                Object.defineProperty(promise, 'isFulfilled', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: true
                });
            };
            getCurrentProperties = function() {
                var props = [],
                    currentStyle = window.getComputedStyle(instance),
                    currentStyleBefore = window.getComputedStyle(instance, ':before'),
                    currentStyleAfter = window.getComputedStyle(instance, ':after');
                to.each(function(value) {
                    var styles = (value.pseudo===':before') ? currentStyleBefore : ((value.pseudo===':after') ? currentStyleAfter : currentStyle),
                        property = value.property;
                    // if property is vendor-specific transition, or transform, than we reset it to the current vendor
                    props.push({
                        property: property,
                        value: styles[toCamelCase(property)]
                    });
                });
                return props;
            };
            getNoTransProp = function() {
                var props = [];
                transitions.forEach(function(item) {
                    props.push({
                        property: item.property,
                        duration: 0,
                        delay: 0
                    });
                });
                return props;
            };

            endIntermediate = function(type) {
                if (!promise.isFulfilled) {
                    manipulated = true;
                    instance.setInlineTransitions(getNoTransProp());
                    instance.setInlineStyles((type==='cancelled') ? initialProperties : getCurrentProperties());
                    // also force to set the style on the node outside the vdom --> by forcing this
                    // we won't run into the situation where the vdom doesn't change the dom because the style didn';'t change:
                    instance._setAttribute(STYLE, instance.getAttr(STYLE));
                    switch (type) {
                        case 'cancelled':
                            // now cleanup inline style that wasn't there initially,
                            async(function() {
                                instance.setClass(NO_TRANS2);
                                instance.setAttr(STYLE, initialStyle);
                                instance.removeClass(NO_TRANS2);
                            });
                            cleanup();
                        break;
                        case 'frozen':
                            async(function() {
                                cleanup();
                            });
                        break;
                        case 'finished':
                            instance.setInlineStyles(to);
                            async(function() {
                                cleanup();
                            });
                        break;
                    }
                    Object.defineProperty(promise, type, {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: true
                    });
                    transpromise.reject(); // prevent transitionpromise to set its own final values after finishing
                    resolveHandle();
                }
                time2 || (time2=Date.now());
                return new window.Promise(function(resolve) {
                    async(function() {
                        resolve(time2-time1);
                    });
                });
            };
            promise = new window.Promise(function(resolve, reject) {
                async(function() {
                    resolveHandle = resolve;
                    transitionRun = idGenerator('nodeTransition');
                    // only make ready on the last run
                    instance.setData('_readyOnRun', transitionRun);

                    if (from) {
                        instance.setClass(NO_TRANS2);
                        instance.setInlineStyles(from);
                        instance.removeClass(NO_TRANS2);
                    }
                    initialProperties = getCurrentProperties();
                    initialStyle = instance.getAttr(STYLE);

                    currentInlineTransition = instance.getData('_bkpTransition');
                    if (currentInlineTransition===undefined) {
                        currentInlineTransition = instance.getInlineStyle(TRANSITION) || null;
                        // `null` can be set as node-data, `undefined` connot
                        instance.setData('_bkpTransition', currentInlineTransition);
                    }

                    // we could use the `to` object and pass into `setInlineTransitions` directly,
                    // however, in case `duration` is not specified, we will define them to 1 sec.
                    transitions = Array.isArray(to) ? to.deepClone() : [to.shallowClone()];

                    // CAUTIOUS: the sum of `duration`+`delay` determines when the transition will be ready.
                    // This leads into separate transitions, we must prevent the promise to fulfill on the
                    // first tranition to be ready.
                    // Thus: we need to split every (`duration`+`delay`) group and give them each a separate setInlineStyle()-promise!
                    transitions.forEach(function(item) {
                        item.duration || (item.duration=1);
                        item.delay || (item.delay=0);
                    });

                    instance.setInlineTransitions(transitions);
                    transpromise = instance.setInlineStyles(to, true);
                    transpromise.catch(
                        function(err) {
                            transitionError = err;
                            return true; // fulfill the chain
                        }
                    ).finally(
                        function() {
                            // to prevent `transitionend` events biting each other when chaining `transition`,
                            // and reset the inline transition in time,
                            // we need to resolve the Promise after the eventstack:
                            async(function() {
                                if (!manipulated && (instance.getData('_readyOnRun')===transitionRun)) {
                                    cleanup();
                                    // because cleanup does an async action (setInlineStyles), we will append the eventstack:
                                    async(function() {
                                        if (transitionError) {
                                            reject(transitionError);
                                        }
                                        else {
                                            time2 || (time2=Date.now());
                                            resolve(time2-time1);
                                        }
                                    });
                                }
                            });
                        }
                    );
                });
            });

            promise.cancel = function() {
                return endIntermediate('cancelled');
            };

            promise.freeze = function() {
                return endIntermediate('frozen');
            };

            promise.finish = function() {
                return endIntermediate('finished');
            };

            return promise;
        };

       /**
        * Toggles the className of the Element.
        *
        * @method toggleClass
        * @param className {String|Array} className that should be toggled, may be an array of classNames
        * @param forceState {Boolean} to force toggling into this specific state
        * @param [returnPromise] {Boolean} whether to return a Promise instead of `this`, which might be useful in case of
        *        transition-properties. The promise will fullfil when the transition is ready, or immediately when no transitioned.
        * @param [transitionFix] set this to `true` if you experience transition-problems due to wrong calculated css (mostly because of the `auto` value)
        *        Setting this parameter, will calculate the true css of the transitioned properties and set this temporarely inline, to fix the issue.
        *        Don't use it when not needed, it has a slightly performancehit.
        *        No need to set when `returnPromise` is set --> returnPromise always handles the transitionFix.
        * @param [silent=false] {Boolean} prevent node-mutation events by the Event-module to emit
        * @return {Promise|this} In case `returnPromise` is set, a Promise returns with the next handles:
        *        <ul>
        *            <li>cancel() {Promise}</li>
        *            <li>freeze() {Promise}</li>
        *            <li>unfreeze()</li>
        *            <li>finish() {Promise}</li>
        *        </ul>
        *        These handles resolve with the `elapsed-time` as first argument of the callbackFn
        * @since 0.0.1
        */
        ElementPrototype.toggleClass = function(className, forceState, returnPromise, transitionFix, silent) {
            silent && DOCUMENT.suppressMutationEvents && DOCUMENT.suppressMutationEvents(true);
            var instance = this,
                transPromise = (returnPromise || transitionFix) && getClassTransPromise(instance, TOGGLE, className, forceState),
                returnValue = returnPromise ? transPromise : instance;
            transPromise || instance.getClassList().toggle(className, forceState);
            if (silent && DOCUMENT.suppressMutationEvents) {
                if (returnValue===instance) {
                    DOCUMENT.suppressMutationEvents(false);
                }
                else {
                    returnValue.finally(function() {
                        DOCUMENT.suppressMutationEvents(false);
                    });
                }
            }
            return returnValue;
        };

        Object.defineProperties(ElementPrototype, {

           /**
            * Gets or set the height of the element in pixels. Included are padding and border, not any margins.
            * By setting the argument `overflow` you get the total height, included the invisible overflow.
            *
            * The getter is calculating through `offsetHeight`, the setter will set inline css-style for the height.
            *
            * Values are numbers without unity.
            *
            * @property height
            * @type {Number}
            * @since 0.0.1
            */
            height: {
                get: function() {
                    return this.offsetHeight;
                },
                set: function(val) {
                    var instance = this,
                        dif;
                    instance.setClass(INVISIBLE);
                    instance.setInlineStyle(HEIGHT, val + PX);
                    dif = (instance.offsetHeight-val);
                    (dif!==0) && (instance.setInlineStyle(HEIGHT, (val - dif) + PX));
                    instance.removeClass(INVISIBLE);
                }
            },

           /**
            * Gets the x-position (in the DOCUMENT) of the element in pixels.
            * DOCUMENT-related: regardless of the window's scroll-position.
            *
            * @property left
            * @since 0.0.1
            */
            left: {
                get: function() {
                    return Math.round(this.getBoundingClientRect().left + window.getScrollLeft());
                },
                set: function(pixelsLeft) {
                    return this.setXY(pixelsLeft, null, null, true);
                }
            },

           /**
            * Gets the y-position (in the DOCUMENT) of the element in pixels.
            * DOCUMENT-related: regardless of the window's scroll-position.
            *
            * @property top
            * @since 0.0.1
            */
            top: {
                get: function() {
                    return Math.round(this.getBoundingClientRect().top + window.getScrollTop());
                },
                set: function(pixelsTop) {
                    return this.setXY(null, pixelsTop, null, true);
                }
            },

           /**
            * Gets or set the width of the element in pixels. Included are padding and border, not any margins.
            * By setting the argument `overflow` you get the total width, included the invisible overflow.
            *
            * The getter is calculating through `offsetHeight`, the setter will set inline css-style for the width.
            *
            * Values are numbers without unity.
            *
            * @property width
            * @type {Number}
            * @since 0.0.1
            */
            width: {
                get: function() {
                    return this.offsetWidth;
                },
                set: function(val) {
                    var instance = this,
                        dif;
                    instance.setClass(INVISIBLE);
                    instance.setInlineStyle(WIDTH, val + PX);
                    dif = (instance.offsetWidth-val);
                    (dif!==0) && (instance.setInlineStyle(WIDTH, (val - dif) + PX));
                    instance.removeClass(INVISIBLE);
                }
            }

        });

    }(window.Element.prototype));

    setupObserver = function() {
        // configuration of the observer:
        var observerConfig = {
                attributes: true,
                subtree: true,
                characterData: true,
                childList : true
            };
        (new window.MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {

                var node = mutation.target,
                    vnode = node.vnode,
                    type = mutation.type,
                    attribute = mutation.attributeName,
                    addedChildNodes = mutation.addedNodes,
                    removedChildNodes = mutation.removedNodes,
                    i, len, childDomNode, childVNode, index, vchildnode;
                if (vnode && !vnode._nosync) {
                    if (type==='attributes') {
                        vnode.reloadAttr(attribute);
                    }
                    else if (type==='characterData') {
                        vnode.text = node.nodeValue;
                    }
                    else {
                        // remove the childNodes that are no longer there:
                        len = removedChildNodes.length;
                        for (i=len-1; i>=0; i--) {
                            childVNode = removedChildNodes[i].vnode;
                            childVNode && childVNode._destroy();
                        }
                       // add the new childNodes:
                        len = addedChildNodes.length;
                        for (i=0; i<len; i++) {
                            childDomNode = addedChildNodes[i];
                            // find its index in the true DOM:
                            index = node.childNodes.indexOf(childDomNode);
                            // create the vnode:
                            vchildnode = domNodeToVNode(childDomNode);
//======================================================================================================
// TODO: remove this block of code: we shouldn;t be needing it
// that is: when the alert never rises (which I expect it doesn't)


// prevent double definitions (for whatever reason):
// check if there is a vChild with the same domNode and remove it:
var vChildNodes = vnode.vChildNodes;
var len2 = vChildNodes ? vChildNodes.length : 0;
var j;
for (j=0; j<len2; j++) {
    var checkChildVNode = vChildNodes[j];
    if (checkChildVNode.domNode===node) {
        checkChildVNode._destroy();
        alert('double deleted');
        break;
    }
}
// END OF removable block
//======================================================================================================
                            // add the vnode:
                            vchildnode._moveToParent(vnode, index);
                        }
                    }
                }
            });
        })).observe(DOCUMENT, observerConfig);
    };

    setupObserver();

};

//--- definition API of unmodified `Element`-methods ------

/**
 * Returns the specified attribute of the specified element, as an Attr node.
 *
 * @method getAttributeNode
 * @return {attributeNode}
 */

/**
 * Returns a text rectangle object that encloses a group of text rectangles. The returned value is
 * a TextRectangle object which is the union of the rectangles returned by getClientRects() for the element,
 * i.e., the CSS border-boxes associated with the element.
 *
 * The returned value is a TextRectangle object, which contains read-only left, top, right and bottom properties
 * describing the border-box in pixels. top and left are relative to the top-left of the viewport.
 *
 * @method getBoundingClientRect
 * @return {attributeNode} Therectangle object that encloses a group of text rectangles.
 */

/**
 * Returns a collection of rectangles that indicate the bounding rectangles for each box in a client.
 *
 * The returned value is a collection of ClientRect objects, one for each CSS border box associated with the element.
 * Each ClientRect object contains read-only left, top, right and bottom properties describing the border box, in pixels,
 * with the top-left relative to the top-left of the viewport. For tables with captions,
 * the caption is included even though it's outside the border box of the table.
 *
 * @method getClientRects
 * @return {Collection}
 */

/**
 * Returns a new NodeIterator object with this Element as root.
 *
 * The NodeIterator is a snapshot of the dom at the time this method was called. It is not updated when changes of the dom are made afterwards.
 *
 * @method createNodeIterator
 * @param [whatToShow] {Number} Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.
 * You can use or sum one of the next properties:
 * <ul>
 *   <li>window.NodeFilter.SHOW_ELEMENT</li>
 *   <li>window.NodeFilter.SHOW_COMMENT</li>
 *   <li>window.NodeFilter.SHOW_TEXT</li>
 * </ul>
 * @param [filter] {NodeFilter|function} An object implementing the NodeFilter interface or a function. See https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
 * @return {NodeIterator}
 * @since 0.0.1
*/

/**
 * Returns an HTMLCollection of all Elements within this Element, that match their classes with the supplied `classNames` argument.
 * To match multiple different classes, separate them with a `comma`.
 *
 * getElementsByClassName is life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 * @method getElementsByClassName
 * @param classNames {String} the classes to search for
 * @return {HTMLCollection} life Array with Elements
 */

/**
 * Returns an HTMLCollection of all Elements within this Element, that match their `name`-attribute with the supplied `name` argument.
 *
 * getElementsByName is life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 * @method getElementsByName
 * @param name {String} the property of name-attribute to search for
 * @return {HTMLCollection} life Array with Elements
 */


/**
 * Returns an HTMLCollection of all Elements within this Element, that match their `name`-attribute with the supplied `name` argument.
 *
 * getElementsByTagName is life presentation of the dom. The returned HTMLCollection gets updated when the dom changes.
 *
 * NOTE: it is highly recomended to use `document.getAll` because that method takes advantage of the vdom.
 *
 * @method getElementsByTagName
 * @param tagNames {String} the tags to search for
 * @return {HTMLCollection} life Array with Elements
 */

/**
* Parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position.
*
* @method insertAdjacentHTML
* @param position {String}
* <ul>
*     <li>'beforebegin' Before the element itself</li>
*     <li>'afterbegin' Just inside the element, before its first child</li>
*     <li>'beforeend' Just inside the element, after its last child</li>
*     <li>'afterend' After the element itself</li>
* <ul>
* @param element {Element}
*/

/**
* Removes the attribute specified by an attributeNode from the Element.
*
* @method removeAttributeNode
* @param attributeNode {attributeNode}
* @since 0.0.1
*/

/**
 * Scrolls the element into view.
 *
 * @method scrollIntoView
 */

/**
 * Sets the attribute on the Element specified by `attributeNode`
 *
 * @method setAttributeNode
 * @param attributeNode {attributeNode}
*/

//------ events --------

/**
 * Fired when a static `script` element  finishes executing its script. Does not fire if the element is added dynamically, eg with appendChild().
 *
 * @event afterscriptexecute
 */


/**
 * Fired when the code in a `script` element declared in an HTML document is about to start executing. Does not fire if the element is added dynamically, eg with appendChild().
 *
 * @event beforescriptexecute
 */

//------- properties --------

/**
 * sets or returns an accesskey for an element. An accesskey specifies a shortcut key to activate/focus an element.
 * Note: The way of accessing the shortcut key is varying in different browsers: http://www.w3schools.com/jsref/prop_html_accesskey.asp
 *
 * @property accessKey
 * @type String
 */


/**
 * Returns a live collection of all attribute nodes registered to the specified node.
 * It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers.
 * To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.
 *
 * Prefer to use `getAttrs()` which is much quicker, but doesn't return a life-list.
 *
 * @property attributes
 * @type NamedNodeMap
 */

/**
 * The absolute base URL of a node.
 *
 * @property baseURI
 * @type String
 * @readOnly
 */

/**
 * Returns the number of children (child Elements)
 *
 * @property childElementCount
 * @type Number
 * @readOnly
 */

/**
 * Returns a live collection of childNodes of the given element, either Element, TextNode or CommentNode
 *
 * @property childNodes
 * @type NodeList
 * @readOnly
 */

/**
 * Returns a live collection of child Element's of the given element.
 *
 * @property children
 * @type NodeList
 * @readOnly
 */

/**
 * Gets and sets the value of the class attribute of the specified element.
 *
 * @property className
 * @type String
 */

/**
 * Returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin.
 *
 * @property clientHeight
 * @type Number
 * @readOnly
 */

/**
 * The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right–to–left
 * and if there is an overflow causing a left vertical scrollbar to be rendered. clientLeft does not include the left margin or the left padding.
 *
 * @property clientLeft
 * @type Number
 * @readOnly
 */

/**
 * The width of the top border of an element in pixels. It does not include the top margin or padding.
 *
 * @property clientTop
 * @type Number
 * @readOnly
 */

/**
 * Returns the inner width of an element in pixels, including padding but not the vertical scrollbar height, border, or margin.
 *
 * @property clientWidth
 * @type Number
 * @readOnly
 */

/**
 * Reference to the first childNode, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
 *
 * Better work with Elements only:  use `firstElementChild` instead, which returns the first Element-child.
 *
 * @property firstChild
 * @type Node
 * @readOnly
 * @deprecated
 */

/**
 * Reference to the first Element-child, which is an Element (nodeType===1).
 *
 * @property firstElementChild
 * @type Element
 * @readOnly
 */

/**
 * Gets or sets the element's attribute `href`. Only applies for the `a`-element.
 *
 * @property href
 * @type String
 */

/**
 * Gets or sets the element's identifier (attribute id).
 *
 * @property id
 * @type String
 */

/**
 * Reference to the last childNode, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
 *
 * Better use `lastElementChild` instead, which returns the last Element-child.
 *
 * @property lastChild
 * @type Node
 * @readOnly
 * @deprecated
 */

/**
 * Reference to the last Element-child, where the related dom-node is an Element (nodeType===1).
 *
 * @property lastElementChild
 * @type Element
 * @readOnly
 */

/**
 * Gets or sets the `name` property of a Element; it only applies to the following elements:
 * `a`, `applet`, `button`, `form`, `frame`, `iframe`, `img`, `input`, `map`, `meta`, `object`, `param`, `select`, and `textarea`.
 *
 * @property name
 * @type String
 */

/**
 * Returns the Element immediately following the specified one in its parent's childNodes list, or null if the specified node is the last node in that list.
 * Is an Element (nodeType===1).
 *
 * @property nextElementSibling
 * @type Element
 * @readOnly
 */

/**
 * Returns the Element immediately following the specified one in its parent's childNodes list, or null if the specified node is the last node in that list.
 * Is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
 *
 * Do not use this, but use `lastElementChild` instead, which returns the next Element-child.
 *
 * @property nextElementSibling
 * @type Node
 * @deprecated
 * @readOnly
 */

/**
 * Elements tag-name
 *
 * @property nodeName
 * @type String
 * @readOnly
 */

/**
 * Elements nodetype: 1==Element, 3==TextNode, 8===CommentNode
 *
 * @property nodeType
 * @type String
 * @readOnly
 */

/**
 * Value/text for non-Element Nodes
 *
 * @property nodeValue
 * @type String
 * @since 0.0.1
 */

/**
 * The exact width of the Element on the screen.
 * Included borders and padding (no margin).
 *
 * Returns a number without unity.
 *
 * Better use `width` --> it's an alias, but has a setter as well
 *
 * @property offsetWidth
 * @type Number
 * @readOnly
 * @since 0.0.1
 */

/**
 * The exact height of the Element on the screen.
 * Included borders and padding (no margin).
 *
 * Returns a number without unity.
 *
 * Better use `height` --> it's an alias, but has a setter as well
 *
 * @property offsetHeight
 * @type Number
 * @since 0.0.1
 */

/**
 * Returns the Element's parent Element.
 *
 * Same as `parentNode`
 *
 * @property parentElement
 * @type Element
 */

/**
 * Returns the Element's parent Element.
 *
 * Same as `parentElement`
 *
 * @property parentNode
 * @type Element
 */

/**
 * Returns the Element immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the last node in that list.
 * Is an Element (nodeType===1).
 *
 * @property previousElementSibling
 * @type Element
 * @readOnly
 */

/**
 * Returns the Element immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the last node in that list.
 * Is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
 *
 * Do not use this, but use `previousElementSibling` instead, which returns the previous Element-child.
 *
 * @property previousSibling
 * @deprecated
 * @type Node
 * @readOnly
 */


/**
 * A measurement of the height of an element's content, including content not visible on the screen due to overflow.
 * The scrollHeight value is equal to the minimum clientHeight the element would require in order to fit all the content in the viewpoint
 * without using a vertical scrollbar. It includes the element padding but not its margin.
 *
 * Returns a number without unity.
 *
 * @property scrollHeight
 * @type Number
 * @readOnly
 */

/**
 * Gets or sets the number of pixels that an element's content is scrolled to the left.
 *
 * @property scrollLeft
 * @type Number
 */

/**
 * Gets or sets the number of pixels that the content of an element is scrolled upward. An element's scrollTop is a measurement
 * of the distance of an element's top to its topmost visible content. When an element content does not generate a vertical scrollbar,
 * then its scrollTop value defaults to 0.
 *
 * @property scrollTop
 * @type Number
 */

/**
 * Returns either the width in pixels of the content of an element or the width of the element itself, whichever is greater.
 * If the element is wider than its content area (for example, if there are scroll bars for scrolling through the content),
 * the scrollWidth is larger than the clientWidth.
 *
 * Returns a number without unity.
 *
 * @property scrollWidth
 * @type Number
 * @readOnly
 */

/**
 * Gets or sets the element's attribute `type`. Only applies for the `script`, `img` and `style`-elements.
 *
 * @property src
 * @type String
 */

/**
 * Gets or sets the element's attribute `style`.
 *
 * @property style
 * @type String
 */

/**
 * Gets or sets the element's attribute `type`. Only applies for the `input`-element.
 *
 * @property type
 * @type String
 */

/**
* Gets or sets the value of an input or select Element.
*
* Note it is highly preferable to use getValue() and setValue().
*
* @property value
* @type String
* @since 0.0.1
*/
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../css/element.css":34,"./attribute-extractor.js":63,"./element-array.js":64,"./html-parser.js":68,"./node-parser.js":69,"./vdom-ns.js":70,"./vnode.js":71,"js-ext/lib/object.js":38,"js-ext/lib/promise.js":39,"js-ext/lib/string.js":40,"polyfill":50,"polyfill/extra/transition.js":45,"polyfill/extra/transitionend.js":46,"polyfill/extra/vendorCSS.js":47,"utils":51,"window-ext":57}],68:[function(require,module,exports){
"use strict";

/**
 * Exports `htmlToVNodes` which transforms html-text into vnodes.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule html-parser
 * @since 0.0.1
*/

require('polyfill');
require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.HtmlParser) {
        return window._ITSAmodules.HtmlParser; // HtmlParser was already created
    }

    var NS = require('./vdom-ns.js')(window),
        extractor = require('./attribute-extractor.js')(window),
        DOCUMENT = window.document,
        voidElements = NS.voidElements,
        nonVoidElements = NS.nonVoidElements,

        TAG_OR_ATTR_START_CHARACTERS = {
            a: true,
            b: true,
            c: true,
            d: true,
            e: true,
            f: true,
            g: true,
            h: true,
            i: true,
            j: true,
            k: true,
            l: true,
            m: true,
            n: true,
            o: true,
            p: true,
            q: true,
            r: true,
            s: true,
            t: true,
            u: true,
            v: true,
            w: true,
            x: true,
            y: true,
            z: true,
            A: true,
            B: true,
            C: true,
            D: true,
            E: true,
            F: true,
            G: true,
            H: true,
            I: true,
            J: true,
            K: true,
            L: true,
            M: true,
            N: true,
            O: true,
            P: true,
            Q: true,
            R: true,
            S: true,
            T: true,
            U: true,
            V: true,
            W: true,
            X: true,
            Y: true,
            Z: true
        },
        STARTTAG_OR_ATTR_VALUE_ENDS_CHARACTERS = {
            ' ': true,
            '>': true
        },
        ATTRUBUTE_NAME_ENDS_CHARACTER = {
            ' ': true,
            '=': true,
            '>': true
        },

        /**
         * Transforms html-text into a vnodes-Array.
         *
         * @method htmlToVNodes
         * @param htmlString {String} plain html as string
         * @return {Array} array with `vnodes`
         * @since 0.0.1
         */
        htmlToVNodes = window._ITSAmodules.HtmlParser = function(htmlString, vNodeProto) {
            var i = 0,
                len = htmlString.length,
                vnodes = [],
                parentVNode = arguments[2], // private pass through-argument, only available when internal looped
                insideTagDefinition, insideComment, innerText, endTagCount, stringMarker, attributeisString, attribute, attributeValue,
                j, character, character2, vnode, tag, isBeginTag, isEndTag, scriptVNode, extractClass, extractStyle;
            while (i<len) {
                character = htmlString[i];
                character2 = htmlString[i+1];
                if (insideTagDefinition) {

                    vnode.attrs = {};
                    if (character!=='>') {
                        // fill attributes until tagdefinition is over:
                        // NOTE: we need to DOUBLE check for "(character!=='>')" because the loop might set the position to '>' where an i++ would miss it!
                        while ((character!=='>') && (++i<len) && (character=htmlString[i]) && (character!=='>')) {
                            // when starting to read an attribute, finish reading until it is completely ready.
                            // this is, because attributes can have a '>' which shouldn't be noticed as an end-of-tag definition
                            if (TAG_OR_ATTR_START_CHARACTERS[character]) {
                                attribute = character;
                                while ((++i<len) && (character=htmlString[i]) && !ATTRUBUTE_NAME_ENDS_CHARACTER[character]) {
                                    attribute += character;
                                }
                                if (character==='=') {
                                    stringMarker = htmlString[i+1];
                                    attributeisString = (stringMarker==='"') || (stringMarker==="'");

                                    attributeValue = '';
                                    if (attributeisString) {
                                        i++;
                                        while ((++i<len) && (character=htmlString[i]) && ((character!==stringMarker) || (htmlString[i-1]==='\\'))) {
                                            ((htmlString[i+1]!==stringMarker) || (character!=='\\')) && (attributeValue+=character);
                                        }
                                    }
                                    else {
                                        while ((++i<len) && (character=htmlString[i]) && !STARTTAG_OR_ATTR_VALUE_ENDS_CHARACTERS[character]) {
                                            attributeValue += character;
                                        }
                                        // need to set the position one step behind --> the attributeloop will increase it and would otherwise miss a character
                                        i--;
                                    }
                                }
                                else {
                                    attributeValue = "";
                                }
                                vnode.attrs[attribute] = attributeValue;
                            }
                        }
                        vnode.id = vnode.attrs.id;

                        extractClass = extractor.extractClass(vnode.attrs['class']);
                        extractClass.attrClass && (vnode.attrs['class']=extractClass.attrClass);
                        vnode.classNames = extractClass.classNames;

                        extractStyle = extractor.extractStyle(vnode.attrs.style);
                        extractStyle.attrStyle && (vnode.attrs.style=extractStyle.attrStyle);
                        vnode.styles = extractStyle.styles;

                    }

                    if (!vnode.isVoid) {
                        innerText = '';
                        endTagCount = 1;
                        // fill innerText until end-tagdefinition:
                        while ((endTagCount>0) && (++i<len) && (character=htmlString[i])) {
                            if (character==='<') {
                                if ((character2=htmlString[i+1]) && (character2==='/')) {
                                    // possible end-tag
                                    j = i+1;
                                    isEndTag = true;
                                    while (isEndTag && (++j<len) && (htmlString[j]!=='>')) {
                                        if (htmlString[j].toUpperCase()!==tag[j-i-2]) {
                                            isEndTag = false;
                                        }
                                    }
                                    isEndTag && (endTagCount--);
                                }
                                else {
                                    // possible begin-tag of the same tag (an innertag with the same tagname)
                                    j = i;
                                    isBeginTag = true;
                                    while (isBeginTag && (++j<len) && (character2=htmlString[j]) && (character2!=='>') && (character2!==' ')) {
                                        if (htmlString[j].toUpperCase()!==tag[j-i-1]) {
                                            isBeginTag = false;
                                        }
                                    }
                                    isBeginTag && (endTagCount++);
                                }
                            }
                            if (endTagCount>0) {
                                innerText += character;
                            }
                        }
                        (endTagCount===0) && (i=i+tag.length+3);
                        // in case of 'SCRIPT' or 'STYLE' tags --> just use the innertext, all other tags need to be extracted

                        if (NS.SCRIPT_OR_STYLE_TAG[vnode.tag]) {
                            // CREATE INNER TEXTNODE
                            scriptVNode = Object.create(vNodeProto);
                            scriptVNode.nodeType = 3;
                            scriptVNode.domNode = DOCUMENT.createTextNode(innerText);
                            // create circular reference:
                            scriptVNode.domNode._vnode = scriptVNode;
                            scriptVNode.text = innerText;
                            scriptVNode.vParent = vnode;
                            vnode.vChildNodes = [scriptVNode];
                        }
                        else {
                            vnode.vChildNodes = (innerText!=='') ? htmlToVNodes(innerText, vNodeProto, vnode) : [];
                        }
                    }
                    else {
                        i++; // compensate for the '>'
                    }
                    vnodes[vnodes.length] = vnode;
                    // reset vnode to force create a new one
                    vnode = null;
                    insideTagDefinition = false;
                }

                else if (insideComment) {
                    if (character+character2+htmlString[i+2]==='-->') {
                        // close vnode
                        // move index to last character of comment
                        i = i+2;
                        vnode.domNode = DOCUMENT.createComment('');
                        // create circular reference:
                        vnode.domNode._vnode = vnode;
                        vnodes[vnodes.length] = vnode;
                        // reset vnode to force create a new one
                        vnode = null;
                        insideComment = false;
                    }
                    else {
                        vnode.text += character;
                    }
                    i++;
                }

                else {
                    // inside TextNode which could go over into an Element or CommentNode
                    if ((character==='<') && TAG_OR_ATTR_START_CHARACTERS[character2] && (htmlString.lastIndexOf('>')>i)) {
                        // begin of opening Element
                        // first: store current vnode:
                        if (vnode) {
                            vnode.domNode = DOCUMENT.createTextNode('');
                            // create circular reference:
                            vnode.domNode._vnode = vnode;
                            vnodes[vnodes.length] = vnode;
                        }
                        vnode = Object.create(vNodeProto);
                        vnode.nodeType = 1;
                        vnode.vParent = parentVNode;
                        vnode.tag = '';
                        vnode.classNames ={};

                        // find tagname:
                        while ((++i<len) && (character=htmlString[i]) && (!STARTTAG_OR_ATTR_VALUE_ENDS_CHARACTERS[character])) {
                            vnode.tag += character.toUpperCase();
                        }

                        tag = vnode.tag;
                        vnode.domNode = DOCUMENT.createElement(tag);
                        // create circular reference:
                        vnode.domNode._vnode = vnode;
                        // check if it is a void-tag, but only need to do the regexp once per tag-element:
                        if (voidElements[tag]) {
                            vnode.isVoid = true;
                        }
                        else if (nonVoidElements[tag]) {
                            vnode.isVoid = false;
                        }
                        else {
                            vnode.isVoid = ((tag[0]==='I') && (tag[1]==='-')) ? false : !(new RegExp('</'+tag+'>', 'i')).test(htmlString);
                            vnode.isVoid ? (voidElements[tag]=true) : (nonVoidElements[tag]=true);
                        }
                        insideTagDefinition = true;
                    }
                    else if (character+character2+htmlString[i+2]+htmlString[i+3]==='<!--') {
                        // begin of CommentNode
                        if (vnode) {
                            vnode.domNode = DOCUMENT.createTextNode('');
                            // create circular reference:
                            vnode.domNode._vnode = vnode;
                            vnodes[vnodes.length] = vnode;
                        }
                        vnode = Object.create(vNodeProto);
                        vnode.nodeType = 8;
                        vnode.text = '';
                        vnode.vParent = parentVNode;
                        // move index to first character of comment
                        i = i+4;
                        insideComment = true;
                    }
                    else {
                        if (!vnode) {
                            // no current vnode --> create a TextNode:
                            vnode = Object.create(vNodeProto);
                            vnode.nodeType = 3;
                            vnode.text = '';
                            vnode.vParent = parentVNode;
                        }
                        vnode.text += character;
                        i++;
                    }
                }
            }

            if (vnode) {
                vnode.domNode = DOCUMENT.createTextNode('');
                // create circular reference:
                vnode.domNode._vnode = vnode;
                vnodes[vnodes.length] = vnode;
            }
            return vnodes;
        };

    return htmlToVNodes;

};
},{"./attribute-extractor.js":63,"./vdom-ns.js":70,"js-ext/lib/object.js":38,"polyfill":50}],69:[function(require,module,exports){
"use strict";

/**
 * Exports `domNodeToVNode` which transforms dom-nodes into vnodes.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module vdom
 * @submodule node-parser
 * @since 0.0.1
*/

require('polyfill');
require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.NodeParser) {
        return window._ITSAmodules.NodeParser; // NodeParser was already created
    }

    var NS = require('./vdom-ns.js')(window),
        extractor = require('./attribute-extractor.js')(window),
        voidElements = NS.voidElements,
        nonVoidElements = NS.nonVoidElements,
        vNodeProto = require('./vnode.js')(window),
        /**
         * Transforms a dom-node into a vnode.
         *
         * @method domNodeToVNode
         * @param domNode {Node} The dom-node to be transformed
         * @param [parentVNode] {vnode} the parent-vnode that belongs to the dom-node
         * @return {vnode} the vnode-representation of the dom-node
         * @since 0.0.1
         */
        domNodeToVNode = window._ITSAmodules.NodeParser = function(domNode, parentVNode) {
            var nodeType = domNode.nodeType,
                vnode, attributes, attr, i, len, childNodes, domChildNode, vChildNodes, tag, childVNode, extractClass, extractStyle;
            if (!NS.VALID_NODE_TYPES[nodeType]) {
                // only process ElementNodes, TextNodes and CommentNodes
                return;
            }
            vnode = Object.create(vNodeProto);

            // set properties:
            vnode.domNode = domNode;
            // create circular reference:
            vnode.domNode._vnode = vnode;

            vnode.nodeType = nodeType;
            vnode.vParent = parentVNode;

            if (nodeType===1) {
                // ElementNode
                tag = vnode.tag = domNode.nodeName; // is always uppercase

                vnode.attrs = {};

                attributes = domNode.attributes;
                len = attributes.length;
                for (i=0; i<len; i++) {
                    attr = attributes[i];
                    vnode.attrs[attr.name] = String(attr.value);
                }

                vnode.id = vnode.attrs.id;

                extractClass = extractor.extractClass(vnode.attrs['class']);
                extractClass.attrClass && (vnode.attrs['class']=extractClass.attrClass);
                vnode.classNames = extractClass.classNames;

                extractStyle = extractor.extractStyle(vnode.attrs.style);
                extractStyle.attrStyle && (vnode.attrs.style=extractStyle.attrStyle);
                vnode.styles = extractStyle.styles;

                if (voidElements[tag]) {
                    vnode.isVoid = true;
                }
                else if (nonVoidElements[tag]) {
                    vnode.isVoid = false;
                }
                else {
                    (vnode.isVoid=!(new RegExp('</'+tag+'>$', 'i')).test(domNode.outerHTML)) ? (voidElements[tag]=true) : (nonVoidElements[tag]=true);
                }

                if (!vnode.isVoid) {
                    // in case of 'SCRIPT' or 'STYLE' tags --> just use the innertext, all other tags need to be extracted
                    if (NS.SCRIPT_OR_STYLE_TAG[tag]) {
                        vnode.text = domNode.textContent;
                    }
                    else {
                        vChildNodes = vnode.vChildNodes = [];
                        childNodes = domNode.childNodes;
                        len = childNodes.length;
                        for (i=0; i<len; i++) {
                            domChildNode = childNodes[i];
                            childVNode = domNodeToVNode(domChildNode, vnode);
                            vChildNodes[vChildNodes.length] = childVNode;
                        }
                    }
                }
            }
            else {
                // TextNode or CommentNode
                vnode.text = domNode.nodeValue;
            }
            // store vnode's id:
            vnode.storeId();
            return vnode;
        };

    return domNodeToVNode;

};
},{"./attribute-extractor.js":63,"./vdom-ns.js":70,"./vnode.js":71,"js-ext/lib/object.js":38,"polyfill":50}],70:[function(require,module,exports){
/**
 * Creates a Namespace that can be used accros multiple vdom-modules to share information.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module vdom
 * @submodule vdom-ns
 * @class NS-vdom
 * @since 0.0.1
*/

"use strict";

require('js-ext/lib/object.js');
require('polyfill');

module.exports = function (window) {
    var NS;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.VDOM_NS) {
        return window._ITSAmodules.VDOM_NS; // VDOM_NS was already created
    }

    NS = window._ITSAmodules.VDOM_NS = {};

    /**
     * Reference to the VElement of document.body (gets its value as soon as it gets refered to)
     *
     * @property body
     * @default null
     * @type VElement
     * @since 0.0.1
     */
     NS.body = null;


    /**
     * A hash with all node'ids (of all the domnodes that have an id). The value is a reference to an VElement.
     *
     * @property nodeids
     * @default {}
     * @type Object
     * @since 0.0.1
     */
    NS.nodeids || (NS.nodeids={});

    /**
     * A hash with all encountered non-void Elements
     *
     * @property nonVoidElements
     * @default {}
     * @type Object
     * @since 0.0.1
     */
    NS.nonVoidElements || (NS.nonVoidElements={});

    /**
     * A hash to identify what tagNames are equal to `SCRIPT` or `STYLE`.
     *
     * @property SCRIPT_OR_STYLE_TAG
     * @default {SCRIPT: true, STYLE: true}
     * @type Object
     * @since 0.0.1
     */
    NS.SCRIPT_OR_STYLE_TAG = {
        SCRIPT: true,
        STYLE: true
    };

    /**
     * A hash with all nodeTypes that should be captured by the vDOM.
     *
     * @property VALID_NODE_TYPES
     * @default {1: true, 3: true, 8: true}
     * @type Object
     * @since 0.0.1
     */
    NS.VALID_NODE_TYPES = {
        1: true,
        3: true,
        8: true
    };

    /**
     * A hash with all encountered void Elements
     *
     * @property voidElements
     * @default {}
     * @type Object
     * @since 0.0.1
     */
    NS.voidElements || (NS.voidElements={});

    return NS;
};
},{"js-ext/lib/object.js":38,"polyfill":50}],71:[function(require,module,exports){
"use strict";

/**
 * Delivers the `vnode` prototype object, which is a virtualisation of an `Element` inside the Dom.
 * These Elements work smoothless with the vdom (see ...).
 *
 * vnodes are much quicker to access and walk through than native dom-nodes. However, this is a module you don't need
 * by itself: `Element`-types use these features under the hood.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * <br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module vdom
 * @submodule vnode
 * @class vnode
 * @since 0.0.1
*/

require('js-ext/lib/array.js');
require('js-ext/lib/object.js');
require('js-ext/lib/string.js');
require('js-ext/extra/lightmap.js');
require('polyfill');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.VNode) {
        return window._ITSAmodules.VNode; // VNODE was already created
    }

    var NS = require('./vdom-ns.js')(window),
        extractor = require('./attribute-extractor.js')(window),
        DOCUMENT = window.document,
        MUTATION_EVENTS = new window.LightMap(),
        BATCH_WILL_RUN = false,
        nodeids = NS.nodeids,
        htmlToVNodes = require('./html-parser.js')(window),
        timers = require('utils/lib/timers.js'),
        async = timers.asyncSilent,
        later = timers.laterSilent,

        // cleanup memory after 1 minute: removed nodes SHOULD NOT be accessed afterwards
        // because vnode would be recalculated and might be different from before
        DESTROY_DELAY = 60000,

        NTH_CHILD_REGEXP = /^(?:(\d*)[n|N])([\+|\-](\d+))?$/, // an+b
        STRING = 'string',
        CLASS = 'class',
        STYLE = 'style',
        ID = 'id',
        NODE= 'node',
        REMOVE = 'remove',
        INSERT = 'insert',
        CHANGE = 'change',
        ATTRIBUTE = 'attribute',
        EV_REMOVED = NODE+REMOVE,
        EV_INSERTED = NODE+INSERT,
        EV_CONTENT_CHANGE = NODE+'content'+CHANGE,
        EV_ATTRIBUTE_REMOVED = ATTRIBUTE+REMOVE,
        EV_ATTRIBUTE_CHANGED = ATTRIBUTE+CHANGE,
        EV_ATTRIBUTE_INSERTED = ATTRIBUTE+INSERT,
        SPLIT_CHARACTER = {
            ' ': true,
            '>': true,
            '+': true, // only select the element when it is immediately preceded by the former element
            '~': true  // only the element when it has the former element as a sibling. (just like `+`, but less strict)
        },
        STORABLE_SPLIT_CHARACTER = {
            '>': true,
            '+': true,
            '~': true
        },
        SIBLING_MATCH_CHARACTER = {
            '+': true,
            '~': true
        },
        ATTR_DETAIL_SPECIFIERS = {
            '^': true, // “begins with” selector
            '$': true, // “ends with” selector
            '*': true, // “contains” selector (might be a substring)
            '~': true, // “contains” selector as a separate word, separated by spaces
            '|': true // “contains” selector as a separate word, separated by `|`
        },
        /**
         * Object to gain quick access to attribute-name end-tokens.
         *
         * @property END_ATTRIBUTENAME
         * @default {
         *      '=': true,
         *      ']': true
         *  }
         * @type Object
         * @protected
         * @since 0.0.1
         */
        END_ATTRIBUTENAME = {
            '=': true,
            ']': true,
            '^': true, // “begins with” selector
            '$': true, // “ends with” selector
            '*': true, // “contains” selector (might be a substring)
            '~': true, // “contains” selector as a separate word, separated by spaces
            '|': true // “contains” selector as a separate word, separated by `|`
        },
        /**
         * Object to gain quick access to different changes of Element nodeType changes.
         *
         * @property NODESWITCH
         * @default {
         *      1: {
         *          1: 1,
         *          3: 2,
         *          8: 3
         *      },
         *      3: {
         *          1: 4,
         *          3: 5,
         *          8: 6
         *      },
         *      8: {
         *          1: 7,
         *          3: 8,
         *          8: 9
         *      }
         *  }
         * @type Object
         * @protected
         * @since 0.0.1
         */
        NODESWITCH = {
            1: {
                1: 1, // oldNodeType==Element, newNodeType==Element
                3: 2, // oldNodeType==Element, newNodeType==TextNode
                8: 3  // oldNodeType==Element, newNodeType==Comment
            },
            3: {
                1: 4, // oldNodeType==TextNode, newNodeType==Element
                3: 5, // oldNodeType==TextNode, newNodeType==TextNode
                8: 6  // oldNodeType==TextNode, newNodeType==Comment
            },
            8: {
                1: 7, // oldNodeType==Comment, newNodeType==Element
                3: 8, // oldNodeType==Comment, newNodeType==TextNode
                8: 9  // oldNodeType==Comment, newNodeType==Comment
            }
        },
        /**
         * Object to gain quick access to selector start-tokens.
         *
         * @property SELECTOR_IDENTIFIERS
         * @default {
         *      '#': 1,
         *      '.': 2,
         *      '[': 3
         *  }
         * @type Object
         * @protected
         * @since 0.0.1
         */
        SELECTOR_IDENTIFIERS = {
            '#': 1,
            '.': 2,
            '[': 3,
            ':': 4
        },
        PSEUDO_FIRST_CHILD = ':first-child',
        PSEUDO_FIRST_OF_TYPE = ':first-of-type',
        PSEUDO_LAST_CHILD = ':last-child',
        PSEUDO_LAST_OF_TYPE = ':last-of-type',
        PSEUDO_NTH_CHILD = ':nth-child',
        PSEUDO_NTH_LAST_CHILD = ':nth-last-child',
        PSEUDO_NTH_LAST_OF_TYPE = ':nth-last-of-type',
        PSEUDO_NTH_OF_TYPE = ':nth-of-type',
        PSEUDO_ONLY_OF_TYPE = ':only-of-type',
        PSEUDO_ONLY_CHILD = ':only-child',
        /**
         * Object to gain quick access to the selectors that required children
         *
         * @property PSEUDO_REQUIRED_CHILDREN
         * @default {
         *     ':first-child': true,
         *     ':first-of-type': true,
         *     ':last-child': true,
         *     ':last-of-type': true,
         *     ':nth-child': true,
         *     ':nth-last-child': true,
         *     ':nth-last-of-type': true,
         *     ':nth-of-type': true,
         *     ':only-of-type': true,
         *     ':only-child': true
         *  }
         * @type Object
         * @protected
         * @since 0.0.1
         */
        PSEUDO_REQUIRED_CHILDREN = {},
        _matchesSelectorItem, _matchesOneSelector, _findElementSibling, vNodeProto, _markRemoved,
        _splitSelector, _findNodeSibling, _matchNthChild, _batchEmit, _emitDestroyChildren;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_FIRST_CHILD] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_FIRST_OF_TYPE] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_LAST_CHILD] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_LAST_OF_TYPE] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_NTH_CHILD] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_NTH_LAST_CHILD] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_NTH_LAST_OF_TYPE] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_NTH_OF_TYPE] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_ONLY_OF_TYPE] = true;
        PSEUDO_REQUIRED_CHILDREN[PSEUDO_ONLY_CHILD] = true;

   /**
    * Searches for the next -or previous- node-sibling (nodeType of 1, 3 or 8).
    *
    * @method _findNodeSibling
    * @param vnode {Object} the vnode to inspect
    * @param [next] {Boolean} whether to search for the next, or previous match.
    * @return {Object|undefined} the vnode that matches the search
    * @protected
    * @private
    * @since 0.0.1
    */
    _findNodeSibling = function(vnode, next) {
        var vParent = vnode.vParent,
            index;
        if (!vParent || !vParent.vChildNodes) {
            return;
        }
        index = vParent.vChildNodes.indexOf(vnode) + (next ? 1 : -1);
        return vParent.vChildNodes[index];
    };

   /**
    * Searches for the next -or previous- Element-sibling (nodeType of 1).
    *
    * @method _findElementSibling
    * @param vnode {Object} the vnode to inspect
    * @param [next] {Boolean} whether to search for the next, or previous match.
    * @return {Object|undefined} the vnode that matches the search
    * @protected
    * @private
    * @since 0.0.1
    */
    _findElementSibling = function(vnode, next) {
        var vParent = vnode.vParent,
            index;
        if (!vParent || !vParent.vChildNodes) {
            return;
        }
        if (vnode.nodeType===1) {
            index = vParent.vChildren.indexOf(vnode) + (next ? 1 : -1);
            return vParent.vChildren[index];
        }
        else {
/*jshint noempty:true */
            while ((vnode=_findNodeSibling(vnode, next)) && (vnode.nodeType!==1)) {}
/*jshint noempty:false */
            return vnode;
        }
    };

   /**
    * Check whether the vnode matches a "nth-child" test, which is used for css pseudoselectors like `nth-child`, `nth-of-type` etc.
    *
    * @method _matchNthChild
    * @param pseudoArg {String} the argument for nth-child
    * @param index {Number} the index of the inspected vnode
    * @return {Boolean} whether the vnode matches the nthChild test
    * @protected
    * @private
    * @since 0.0.1
    */
    _matchNthChild = function(pseudoArg, index) {
        var match, k, a, b, nodeOk, nthIndex, sign, isNumber;
        (pseudoArg==='even') && (pseudoArg='2n');
        (pseudoArg==='odd') && (pseudoArg='2n+1');

        match = pseudoArg.match(NTH_CHILD_REGEXP) || (isNumber=pseudoArg.validateNumber());
        if (!match) {
            return false;
        }
        // pseudoArg follows the pattern: `an+b`
        if (!isNumber) {
            a = match[1];
            sign = match[2];
            b = match[3] || 0;
            (b==='') && (b=0);
        }
        else {
            b = pseudoArg;
        }
        sign && (sign=sign[0]);
        if (!a) {
            // only fixed index to match
            return (sign==='-') ? false : (parseInt(b, 10)===index);
        }
        else {
            // we need to iterate
            nodeOk = false;
            b = window.Number(b);
            for (k=0; !nodeOk; k++) {
                nthIndex = (sign==='-') ? (a*k) - b : (a*k) + b;
                if (nthIndex===index) {
                    nodeOk = true;
                }
                else if (nthIndex>index) {
                    // beyond index --> will never become a fix anymore
                    return false;
                }
            }
            return nodeOk;
        }
    };

   /**
    * Check whether the vnode matches the css-selector. the css-selector should be a single selector,
    * not multiple, so it shouldn't contain a `comma`.
    *
    * @method _matchesOneSelector
    * @param vnode {vnode} the vnode to inspect
    * @param selector {String} the selector-item to check the match for
    * @param [relatedVNode] {vnode} a related vnode where to selectors starting with `>`, `~` or `+` should be compared.
    *        If not specified, any of these three starting selector-characters will be ignored (leading to matching this first character).
    * @return {Boolean} whether the vnode matches the css-selector
    * @protected
    * @private
    * @since 0.0.1
    */
    _matchesOneSelector = function(vnode, selector, relatedVNode) {
        var selList = _splitSelector(selector),
            size = selList.length,
            originalVNode = vnode,
            firstSelectorChar = selector[0],
            i, selectorItem, selMatch, directMatch, vParentvChildren, indexRelated;

        if (size===0) {
            return false;
        }

        selectorItem = selList[size-1];
        selMatch = _matchesSelectorItem(vnode, selectorItem);
        for (i=size-2; (selMatch && (i>=0)); i--) {
            selectorItem = selList[i];
            if (SIBLING_MATCH_CHARACTER[selectorItem]) {
                // need to search through the same level
                if (--i>=0) {
                    directMatch = (selectorItem==='+');
                    selectorItem = selList[i];
                    // need to search the previous siblings
                    vnode = vnode.vPreviousElement;
                    if (!vnode) {
                        return false;
                    }
                    if (directMatch) {
                        // should be immediate match
                        selMatch = _matchesSelectorItem(vnode, selectorItem);
                    }
                    else {
                        while (vnode && !(selMatch=_matchesSelectorItem(vnode, selectorItem))) {
                            vnode = vnode.vPreviousElement;
                        }
                    }
                }
            }
            else {
                // need to search up the tree
                vnode = vnode.vParent;
                if (!vnode || ((vnode===relatedVNode) && (selectorItem!=='>'))) {
                    return false;
                }
                if (selectorItem==='>') {
                    if (--i>=0) {
                        selectorItem = selList[i];
                       // should be immediate match
                        selMatch = _matchesSelectorItem(vnode, selectorItem);
                    }
                }
                else {
                    while (!(selMatch=_matchesSelectorItem(vnode, selectorItem))) {
                        vnode = vnode.vParent;
                        if (!vnode || (vnode===relatedVNode)) {
                            return false;
                        }
                    }
                }
            }
        }
        if (selMatch && relatedVNode && STORABLE_SPLIT_CHARACTER[firstSelectorChar]) {
            // when `selector` starts with `>`, `~` or `+`, then
            // there should also be a match comparing a related node!
            switch (firstSelectorChar) {
                case '>':
                    selMatch = (relatedVNode.vChildren.indexOf(originalVNode)!==-1);
                break;
                case '~':
                    vParentvChildren = originalVNode.vParent.vChildren;
                    indexRelated = vParentvChildren.indexOf(relatedVNode);
                    selMatch = (indexRelated!==-1) && (indexRelated<vParentvChildren.indexOf(originalVNode));
                break;
                case '+':
                    selMatch = (originalVNode.vPreviousElement === relatedVNode);
            }
        }
        return selMatch;
    };

   /**
    * Check whether the vnode matches one specific selector-item. Suppose the css-selector: "#mynode li.red .blue"
    * then there are 3 selector-items: "#mynode",  "li.red" and ".blue"
    *
    * This method also can handle the new selectors:
    * <ul>
    *     <li>[att^=val] –-> the “begins with” selector</li>
    *     <li>[att$=val] –-> the “ends with” selector</li>
    *     <li>[att*=val] –-> the “contains” selector (might be a substring)</li>
    *     <li>[att~=val] –-> the “contains” selector as a separate word, separated by spaces</li>
    *     <li>[att|=val] –-> the “contains” selector as a separate word, separated by `|`</li>
    *     <li>+ --> (same level)</li>
    *     <li>~ --> (same level)</li>
    * </ul>
    *
    * @method _matchesSelectorItem
    * @param vnode {Object} the vnode to inspect
    * @param selectorItem {String} the selector-item to check the match for
    * @return {Boolean} whether the vnode matches the selector-item
    * @protected
    * @private
    * @since 0.0.1
    */
    _matchesSelectorItem = function (vnode, selectorItem) {
        var i = 0,
            len = selectorItem.length,
            character = selectorItem[0],
            tagName, id, className, attributeName, attributeValue, stringMarker, attributeisString, isBoolean, insideAttributeValue, insideAttribute,
            vParent, checkBoolean, treatment, k, min, max, value, len2, index, found, pseudo, pseudoArg, arglevel, count, vParentVChildren;
        if (selectorItem==='*') {
            return true;
        }
        if (!SELECTOR_IDENTIFIERS[character]) {
            // starts with tagName
            tagName = '';
            // reposition i to continue in the right way:
            i--;
            while ((++i<len) && (character=selectorItem[i]) && !SELECTOR_IDENTIFIERS[character]) {
                tagName += character;
            }
            if (tagName.toUpperCase()!==vnode.tag) {
                return false;
            }
        }
        while (i<len) {
            switch (character) {
                case '#':
                    id = '';
                    while ((++i<len) && (character=selectorItem[i]) && !SELECTOR_IDENTIFIERS[character]) {
                        id += character;
                    }
                    if (id!==vnode.id) {
                        return false;
                    }
                    break;
                case '.':
                    className = '';
                    while ((++i<len) && (character=selectorItem[i]) && !SELECTOR_IDENTIFIERS[character]) {
                        className += character;
                    }

                    if (!vnode.hasClass(className)) {
                        return false;
                    }
                    break;
                case '[':
                    attributeName = '';
                    while ((++i<len) && (character=selectorItem[i]) && !END_ATTRIBUTENAME[character]) {
                        attributeName += character;
                    }
                    // if character===']' then we have an attribute without a value-definition
                    if (!vnode.attrs[attributeName] || ((character===']') && (vnode.attrs[attributeName]!==''))) {
                        return !!vnode.attrs[attributeName];
                    }
                    // now we read the value of the attribute
                    // however, it could be that the selector has a special `detailed` identifier set (defined by: ATTR_DETAIL_SPECIFIERS)
                    if (ATTR_DETAIL_SPECIFIERS[character]) {
                        treatment = character; // store the character to know how the attributedata should be treaded
                        i++; // character should be a "=" by now
                    }
                    else {
                        treatment = null;
                    }
                    attributeValue = '';
                    stringMarker = selectorItem[i+1];
                    attributeisString = (stringMarker==='"') || (stringMarker==="'");
                    attributeisString && (i++);

                    // end of attributaValue = (character===']') && (!attributeisString || (selectorItem[i-1]===stringMarker))
                    while ((++i<len) && (character=selectorItem[i]) && !((character===']') && (!attributeisString || (selectorItem[i-1]===stringMarker)))) {
                        attributeValue += character;
                    }

                    if (attributeisString) {
                        // if attribute is string, then we need to _remove to last stringmarker
                        attributeValue = attributeValue.substr(0, attributeValue.length-1);
                    }
                    else {
                        // if attribute is no string, then we need to typecast its value
                        isBoolean = ((attributeValue.length>3) && (attributeValue.length<6) &&
                                     (checkBoolean=attributeValue.toUpperCase()) &&
                                     ((checkBoolean==='FALSE') || (checkBoolean==='TRUE')));
                        // typecast the value to either Boolean or Number:
                        attributeValue = isBoolean ? (checkBoolean==='TRUE') : parseFloat(attributeValue);
                    }

                    // depending upon how the attributedata should be treated:
                    if (treatment) {
                        switch (treatment) {
                            case '^': // “begins with” selector
                                if (!vnode.attrs[attributeName].startsWith(attributeValue)) {
                                    return false;
                                }
                                break;
                            case '$': // “ends with” selector
                                if (!vnode.attrs[attributeName].endsWith(attributeValue)) {
                                    return false;
                                }
                                break;
                            case '*': // “contains” selector (might be a substring)
                                if (!vnode.attrs[attributeName].contains(attributeValue)) {
                                    return false;
                                }
                                break;
                            case '~': // “contains” selector as a separate word, separated by spaces
                                if (!(' '+vnode.attrs[attributeName]+' ').contains(' '+attributeValue+' ')) {
                                    return false;
                                }
                                break;
                            case '|': // “contains” selector as a separate word, separated by `|`
                                if (!('|'+vnode.attrs[attributeName]+'|').contains('|'+attributeValue+'|')) {
                                    return false;
                                }
                                break;
                        }
                    }
                    else if (vnode.attrs[attributeName]!==attributeValue) {
                        return false;
                    }

                    // we still need to increase one position:
                    (++i<len) && (character=selectorItem[i]);
                    break;
                case ':':
                    // we have a pseudo-selector
                    // first, find out which one
                    // because '::' is a valid start (though without any selection), we start to back the next character as well:
                    pseudo = ':'+selectorItem[++i];
                    pseudoArg = '';
                    vParent = vnode.vParent;
                    vParentVChildren = vParent && vParent.vChildren;
                    // pseudo-selectors might have an argument passed in, like `:nth-child(2n+1)` or `:not([type="checkbox"])` --> we
                    // store this argument inside `pseudoArg`
                    // also note that combinations are possible with `:not` --> `:not(:nth-child(2n+1))`
                    // also note that we cannot "just" look for a closing character when running into the usage of attributes:
                    // for example --> `:not([data-x="some data :)"])`
                    // that's why -once we are inside attribute-data- we need to continue until the attribute-data ends
                    while ((++i<len) && (character=selectorItem[i]) && !SELECTOR_IDENTIFIERS[character]) {
                        if (character==='(') {
                            // starting arguments
                            arglevel = 1;
                            insideAttribute = false;
                            insideAttributeValue = false;
                            while ((++i<len) && (character=selectorItem[i]) && (arglevel>0)) {
                                if (!insideAttribute) {
                                    if (character==='(') {
                                        arglevel++;
                                    }
                                    else if (character===')') {
                                        arglevel--;
                                    }
                                    else if (character==='[') {
                                        insideAttribute = true;
                                    }
                                }
                                else {
                                    // inside attribute
                                    if (!insideAttributeValue) {
                                        if ((character==='"') || (character==="'")) {
                                            insideAttributeValue = true;
                                            stringMarker = character;
                                        }
                                        else if (character===']') {
                                            insideAttribute = false;
                                        }
                                    }
                                    else if ((character===stringMarker) && (selectorItem[i+1]===']')) {
                                        insideAttributeValue = false;
                                    }
                                }
                                (arglevel>0) && (pseudoArg+=character);
                            }
                        }
                        else {
                            pseudo += character;
                        }
                    }
                    // now, `pseudo` is known as well as its possible pseudoArg
                    if (!vParentVChildren && PSEUDO_REQUIRED_CHILDREN[pseudo]) {
                        return false;
                    }
                    switch (pseudo) {
                        case ':checked': // input:checked   Selects every checked <input> element
                            if (!vnode.attrs.checked) {
                                return false;
                            }
                            break;
                        case ':disabled': // input:disabled  Selects every disabled <input> element
                            if (!vnode.attrs.disabled) {
                                return false;
                            }
                            break;
                        case ':empty': // p:empty Selects every <p> element that has no children (including text nodes)
                            if (vnode.vChildNodes && (vnode.vChildNodes.length>0)) {
                                return false;
                            }
                            break;
                        case ':enabled': // input:enabled   Selects every enabled <input> element
                            if (vnode.attrs.disabled) {
                                return false;
                            }
                            break;
                        case PSEUDO_FIRST_CHILD: // p:first-child   Selects every <p> element that is the first child of its parent
                            if (vParentVChildren[0]!==vnode) {
                                return false;
                            }
                            break;
                        case PSEUDO_FIRST_OF_TYPE: // p:first-of-type Selects every <p> element that is the first <p> element of its parent
                            for (k=vParentVChildren.indexOf(vnode)-1; k>=0; k--) {
                                if (vParentVChildren[k].tag===vnode.tag) {
                                    return false;
                                }
                            }
                            break;
                        case ':focus': // input:focus Selects the input element which has focus
                            if (vnode.domNode!==DOCUMENT.activeElement) {
                                return false;
                            }
                            break;
                        case ':in-range': // input:in-range  Selects input elements with a value within a specified range
                            if ((vnode.tag!=='INPUT') || ((vnode.attrs.type || '').toLowerCase()!=='number')) {
                                return false;
                            }
                            min = parseInt(vnode.attrs.min, 10);
                            max = parseInt(vnode.attrs.max, 10);
                            value = parseInt(vnode.domNode.value, 10);
                            if (!value || !min || !max || (value<min) || (value>max)) {
                                return false;
                            }
                            break;
                        case ':lang': // p:lang(it)  Selects every <p> element with a lang attribute equal to "it" (Italian)
                            if (vnode.attrs.lang!==pseudoArg) {
                                return false;
                            }
                            break;
                        case PSEUDO_LAST_CHILD: // p:last-child    Selects every <p> element that is the last child of its parent
                            if (vParentVChildren[vParentVChildren.length-1]!==vnode) {
                                return false;
                            }
                            break;
                        case PSEUDO_LAST_OF_TYPE: // p:last-of-type  Selects every <p> element that is the last <p> element of its parent
                            len2 = vParentVChildren.length;
                            for (k=vParentVChildren.indexOf(vnode)+1; k<len2; k++) {
                                if (vParentVChildren[k].tag===vnode.tag) {
                                    return false;
                                }
                            }
                            break;
                        case ':not': // :not(p) Selects every element that is not a <p> element
                            if (vnode.matchesSelector(pseudoArg)) {
                                return false;
                            }
                            break;
                        case PSEUDO_NTH_CHILD: // p:nth-child(2)  Selects every <p> element that is the second child of its parent
                            // NOTE: css `nth` starts with 1 instead of 0 !!!
                            index = vParentVChildren.indexOf(vnode)+1;
                            if (!_matchNthChild(pseudoArg, index)) {
                                return false;
                            }
                            break;
                        case PSEUDO_NTH_LAST_CHILD: // p:nth-last-child(2) Selects every <p> element that is the second child of its parent, counting from the last child
                            // NOTE: css `nth` starts with 1 instead of 0 !!!
                            // Also, nth-last-child counts from bottom up
                            index = vParentVChildren.length - vParentVChildren.indexOf(vnode);
                            if (!_matchNthChild(pseudoArg, index)) {
                                return false;
                            }
                            break;
                        case PSEUDO_NTH_LAST_OF_TYPE: // p:nth-last-of-type(2)   Selects every <p> element that is the second <p> element of its parent, counting from the last child
                            // NOTE: css `nth` starts with 1 instead of 0 !!!
                            // Also, nth-last-child counts from bottom up
                            index = vParentVChildren.length - vParentVChildren.indexOf(vnode);
                            // NOTE: css `nth` starts with 1 instead of 0 !!!
                            found = false;
                            index = 0;
                            for (k=vParentVChildren.length-1; (k>=0) && !found; k--) {
                                (vParentVChildren[k].tag===vnode.tag) && index++;
                                (vParentVChildren[k]===vnode) && (found=true);
                            }
                            if (!found || !_matchNthChild(pseudoArg, index)) {
                                return false;
                            }
                            break;
                        case PSEUDO_NTH_OF_TYPE: // p:nth-of-type(2)    Selects every <p> element that is the second <p> element of its parent
                            // NOTE: css `nth` starts with 1 instead of 0 !!!
                            found = false;
                            len2 = vParentVChildren.length;
                            index = 0;
                            for (k=0; (k<len2) && !found; k++) {
                                (vParentVChildren[k].tag===vnode.tag) && index++;
                                (vParentVChildren[k]===vnode) && (found=true);
                            }
                            if (!found || !_matchNthChild(pseudoArg, index)) {
                                return false;
                            }
                            break;
                        case PSEUDO_ONLY_OF_TYPE: // p:only-of-type  Selects every <p> element that is the only <p> element of its parent
                            len2 = vParentVChildren.length;
                            count = 0;
                            for (k=0; (k<len2) && (count<=1); k++) {
                                (vParentVChildren[k].tag===vnode.tag) && count++;
                            }
                            if (count!==1) {
                                return false;
                            }
                            break;
                        case PSEUDO_ONLY_CHILD: // p:only-child    Selects every <p> element that is the only child of its parent
                            if (vParentVChildren.length!==1) {
                                return false;
                            }
                            break;
                        case ':optional': // input:optional  Selects input elements with no "required" attribute
                            if (vnode.attrs.required) {
                                return false;
                            }
                            break;
                        case ':out-of-range': // input:out-of-range  Selects input elements with a value outside a specified range
                            if ((vnode.tag!=='INPUT') || ((vnode.attrs.type || '').toLowerCase()!=='number')) {
                                return false;
                            }
                            min = parseInt(vnode.attrs.min, 10);
                            max = parseInt(vnode.attrs.max, 10);
                            value = parseInt(vnode.domNode.value, 10);
                            if (!value || !min || !max || ((value>=min) && (value<=max))) {
                                return false;
                            }
                            break;
                        case ':read-only': // input:read-only Selects input elements with the "readonly" attribute specified
                            if (!vnode.attrs.readonly) {
                                return false;
                            }
                            break;
                        case ':read-write': // input:read-write    Selects input elements with the "readonly" attribute NOT specified
                            if (vnode.attrs.readonly) {
                                return false;
                            }
                            break;
                        case ':required': // input:required  Selects input elements with the "required" attribute specified
                            if (!vnode.attrs.required) {
                                return false;
                            }
                            break;
                        case ':root': // Selects the document's root element
                            if (vnode.domNode!==DOCUMENT.documentElement) {
                                return false;
                            }
                            break;
                    }
            }
        }
        return true;
    };

    /**
     * Splits the selector into separate subselector-items that should match different elements through the tree.
     * Special characters '>' and '+' are added as separate items in the hash.
     *
     * @method _splitSelector
     * @param selector {String} the selector-item to check the match for
     * @return {Array} splitted selectors
     * @protected
     * @private
     * @since 0.0.1
     */
    _splitSelector = function(selector) {
        var list = [],
            len = selector.length,
            sel = '',
            i, character, insideDataAttr;

        for (i=0; i<len; i++) {
            character = selector[i];
            if (character==='[') {
                sel += character;
                insideDataAttr = true;
            }
            else if (character===']') {
                sel += character;
                insideDataAttr = false;
            }
            else if (insideDataAttr || !SPLIT_CHARACTER[character]) {
                sel += character;
            }
            else {
                // unique selectoritem is found, add it to the list
                if (sel.length>0) {
                    list[list.length] = sel;
                    sel = '';
                }
                // in case the last character was '>', '+' or '~', we need to add it as a separate item
                STORABLE_SPLIT_CHARACTER[character] && (list[list.length]=character);
            }
        }
        // add the last item
        if (sel.length>0) {
            list[list.length] = sel;
            sel = '';
        }
        return list;
    };

    _batchEmit = function() {
        MUTATION_EVENTS.each(function (mutationEvents, vnode) {
            var domNode = vnode.domNode;
            if (mutationEvents[EV_REMOVED]) {
                domNode.emit(EV_REMOVED);
            }
            else if (mutationEvents[EV_INSERTED]) {
                domNode.emit(EV_INSERTED);
            }
            else {
                // contentchange and attributechanges can go hand in hand
                mutationEvents.each(function(value, evt) {
                    domNode.emit(evt, (evt===EV_CONTENT_CHANGE) ? null : {changed: value});
                });
            }
        });
        MUTATION_EVENTS.clear();
        BATCH_WILL_RUN = false;
    };

    _emitDestroyChildren = function(vnode) {
        var children = vnode.vChildren,
            len = children.length,
            i, vChild;
        for (i=0; i<len; i++) {
            vChild = children[i];
            vChild._emit(EV_REMOVED);
            _emitDestroyChildren(vChild);
        }
    };

    _markRemoved = function(vnode) {
        var vChildNodes = vnode.vChildNodes,
            len, i, vChildNode;
        if (vnode.nodeType===1) {
            Object.protectedProp(vnode, 'removedFromDOM', true);
            if (vChildNodes) {
                len = vChildNodes.length;
                for (i=0; i < len; i++) {
                    vChildNode = vChildNodes[i];
                    vChildNode && _markRemoved(vChildNode);
                }
            }
        }
    };

    vNodeProto = window._ITSAmodules.VNode = {
       /**
        * Check whether the vnode's domNode is equal, or contains the specified Element.
        *
        * @method contains
        * @return {Boolean} whether the vnode's domNode is equal, or contains the specified Element.
        * @since 0.0.1
        */
        contains: function(otherVNode) {
            if (otherVNode && otherVNode.destroyed) {
                return false;
            }
            while (otherVNode && (otherVNode!==this)) {
                otherVNode = otherVNode.vParent;
            }
            return (otherVNode===this);
        },

        empty: function() {
            this._setChildNodes([]);
        },

       /**
        * Returns the first child-vnode (if any). The child represents an Element (nodeType===1).
        *
        * @method firstOfVChildren
        * @param cssSelector {String} one or more css-selectors
        * @return {Object|null} the first child-vnode or null when not present
        * @since 0.0.1
        */
        firstOfVChildren: function(cssSelector) {
            var instance = this,
                found, i, len, vChildren, element;
            if (!cssSelector) {
                return instance.vFirstElementChild;
            }
            vChildren = instance.vChildren;
            len = vChildren.length;
            for (i=0; !found && (i<len); i++) {
                element = vChildren[i];
                element.matchesSelector(cssSelector) && (found=element);
            }
            return found;
        },

       /**
        * Checks whether the vnode has any vChildNodes (nodeType of 1, 3 or 8).
        *
        * @method hasVChildNodes
        * @return {Boolean} whether the vnode has any vChildNodes.
        * @since 0.0.1
        */
        hasVChildNodes: function() {
            return this.vChildNodes ? (this.vChildNodes.length>0) : false;
        },

       /**
        * Checks whether the vnode has any vChildren (vChildNodes with nodeType of 1).
        *
        * @method hasVChildren
        * @return {Boolean} whether the vnode has any vChildren.
        * @since 0.0.1
        */
        hasVChildren: function() {
            return this.vChildNodes ? (this.vChildren.length>0) : false;
        },

       /**
        * Checks whether the className is present on the vnode.
        *
        * @method hasClass
        * @param className {String|Array} the className to check for. May be an Array of classNames, which all needs to be present.
        * @return {Boolean} whether the className (or classNames) is present on the vnode
        * @since 0.0.1
        */
        hasClass: function(className) {
            var instance = this,
                check = function(cl) {
                    return !!instance.classNames[cl];
                };
            if (!instance.classNames) {
                return false;
            }
            if (typeof className === STRING) {
                return check(className);
            }
            else if (Array.isArray(className)) {
                return className.every(check);
            }
            return false;
        },

       /**
        * Returns the last child-vnode (if any). The child represents an Element (nodeType===1).
        *
        * @method lastOfVChildren
        * @param cssSelector {String} one or more css-selectors
        * @return {Object|null} the last child-vnode or null when not present
        * @since 0.0.1
        */
        lastOfVChildren: function(cssSelector) {
            var vChildren = this.vChildren,
                found, i, element;
            if (vChildren) {
                if (!cssSelector) {
                    return this.vLastElementChild;
                }
                for (i=vChildren.length-1; !found && (i>=0); i--) {
                    element = vChildren[i];
                    element.matchesSelector(cssSelector) && (found=element);
                }
            }
            return found;
        },

       /**
        * Checks whether the vnode matches one of the specified selectors. `selectors` can be one, or multiple css-selectors,
        * separated by a `comma`. For example: "#myid li.red blue" is one selector, "div.red, div.blue, div.green" are three selectors.
        *
        * @method matchesSelector
        * @param selectors {String} one or more css-selectors
        * @param [relatedVNode] {vnode} a related vnode where to selectors starting with `>`, `~` or `+` should be compared.
        *        If not specified, any of these three starting selector-characters will be ignored (leading to matching this first character).
        * @return {Boolean} whether the vnode matches one of the selectors
        * @since 0.0.1
        */
        matchesSelector: function(selectors, relatedVNode) {
            var instance = this;
            if (instance.nodeType!==1) {
                return false;
            }
            selectors = selectors.split(',');
            // we can use Array.some, because there won't be many separated selectoritems,
            // so the final invocation won't be delayed much compared to looping
            return selectors.some(function(selector) {
                return _matchesOneSelector(instance, selector, relatedVNode);
            });
        },

       /**
        * Reloads the DOM-attribute into the vnode.
        *
        * @method matchesSelector
        * @param attributeName {String} the name of the attribute to be reloaded.
        * @return {Node} the domNode that was reloaded.
        * @since 0.0.1
        */
        reloadAttr: function(attributeName) {
            var instance = this,
                domNode = instance.domNode,
                attributeValue = domNode._getAttribute(attributeName),
                attrs = instance.attrs,
                extractStyle, extractClass;
            if (instance.nodeType===1) {
                attributeValue || (attributeValue='');
                if (attributeValue==='') {
                    delete attrs[attributeName];
                    // in case of STYLE attributeName --> special treatment
                    (attributeName===STYLE) && (instance.styles={});
                    // in case of CLASS attributeName --> special treatment
                    (attributeName===CLASS) && (instance.classNames={});
                    // in case of ID attributeName --> special treatment
                    if ((attributeName===ID) && (instance.id)) {
                        delete nodeids[instance.id];
                        delete instance.id;
                    }
                }
                else {
                    attrs[attributeName] = attributeValue;
                    // in case of STYLE attributeName --> special treatment
                    if (attributeName===STYLE) {
                        extractStyle = extractor.extractStyle(attributeValue);
                        attributeValue = extractStyle.attrStyle;
                        if (attributeValue) {
                            attrs.style = attributeValue;
                        }
                        else {
                            delete attrs.style;
                        }
                        instance.styles = extractStyle.styles;
                    }
                    else if (attributeName===CLASS) {
                        // in case of CLASS attributeName --> special treatment
                        extractClass = extractor.extractClass(attributeValue);
                        attributeValue = extractClass.attrClass;
                        if (attributeValue) {
                            attrs[CLASS] = attributeValue;
                        }
                        else {
                            delete attrs[CLASS];
                        }
                        instance.classNames = extractClass.classNames;
                    }
                    else if (attributeName===ID) {
                        instance.id && (instance.id!==attributeValue) && (delete nodeids[instance.id]);
                        instance.id = attributeValue;
                        nodeids[attributeValue] = domNode;
                    }
                }
            }
            return domNode;
        },

        serializeStyles: function() {
            return extractor.serializeStyles(this.styles);
        },

       /**
        * Syncs the vnode's nodeid (if available) inside `NS-vdom.nodeids`.
        *
        * Does NOT sync with the dom. Can be invoked multiple times without issues.
        *
        * @method storeId
        * @chainable
        * @since 0.0.1
        */
        storeId: function() {
            // store node/vnode inside WeakMap:
            var instance = this;
            instance.id ? (nodeids[instance.id]=instance.domNode) : (delete nodeids[instance.id]);
            return instance;
        },

        //---- private ------------------------------------------------------------------

        /**
         * Adds a vnode to the end of the list of vChildNodes.
         *
         * Syncs with the DOM.
         *
         * @method _appendChild
         * @param VNode {vnode} vnode to append
         * @private
         * @return {Node} the Node that was appended
         * @since 0.0.1
         */
        _appendChild: function(VNode) {
            var instance = this,
                domNode = VNode.domNode,
                size;
            VNode._moveToParent(instance);
            instance.domNode._appendChild(domNode);
            if (VNode.nodeType===3) {
                size = instance.vChildNodes.length;
                instance._normalize();
                // if the size changed, then the domNode was merged
                (size===instance.vChildNodes.length) || (domNode=instance.vChildNodes[instance.vChildNodes.length-1].domNode);
            }
            if (VNode.nodeType===1) {
                DOCUMENT._parcelList && VNode.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(domNode) && DOCUMENT._parcelList.push(domNode);
                VNode._emit(EV_INSERTED);
            }
            return domNode;
        },

       /**
        * Removes the vnode from its parent vChildNodes- and vChildren-list.
        *
        * Does NOT sync with the dom.
        *
        * @method _deleteFromParent
        * @private
        * @chainable
        * @since 0.0.1
        */
        _deleteFromParent: function() {
            var instance = this,
                vParent = instance.vParent;
            if (vParent && vParent.vChildNodes) {
                vParent.vChildNodes.remove(instance);
                // force to recalculate the vChildren on a next call:
                (instance.nodeType===1) && (vParent._vChildren=null);
            }
            return instance;
        },

        _cleanData: function() {
            var instance = this,
                data = instance._data;
            data && data.each(
                function(value, key) {
                    delete data[key];
                }
            );
            return instance;
        },

       /**
        * Destroys the vnode and all its vnode-vChildNodes.
        * Removes it from its vParent.vChildNodes list,
        * also removes its definitions inside `NS-vdom.nodeids`.
        *
        * Does NOT sync with the dom.
        *
        * @method _destroy
        * @private
        * @chainable
        * @since 0.0.1
        */
        _destroy: function(silent) {
            var instance = this,
                vChildNodes = instance.vChildNodes,
                len, i, vChildNode, vParent, treeNodes;
            if (!instance.destroyed) {
                silent || instance._emit(EV_REMOVED);
                Object.protectedProp(instance, 'destroyed', true);

                // first: determine the dom-tree, which module `event-dom` needs to determine where the node was before it was destroyed:
                treeNodes = [instance];
                vParent = instance.vParent;
                while (vParent) {
                    treeNodes[treeNodes.length] = vParent;
                    vParent = vParent.vParent;
                }

                // mark all its vChildNodes so we can see if the node is in the DOM
                _markRemoved(instance);

                // The definite cleanup needs to be done after a timeout:
                // someone might need to handle the Element when removed (fe to cleanup specific things)
                later(function() {
                    instance._cleanData();
                    if (instance.nodeType===1) {
                        // if vnode is part of DOCUMENT._parcelList then remove it
                        if (DOCUMENT._parcelList && instance.tag.startsWith('I-PARCEL-')) {
                            DOCUMENT._parcelList.remove(instance.domNode);
                        }
                        // _destroy all its vChildNodes
                        if (vChildNodes) {
                            len = vChildNodes.length;
                            for (i=0; i < len; i++) {
                                vChildNode = vChildNodes[i];
                                vChildNode && vChildNode._destroy(true);
                            }
                        }
                    }
                    instance._vChildren = null;
                    // explicitely set instance.domNode._vnode and instance.domNode to null in order to prevent problems with the GC (we break the circular reference)
                    delete instance.domNode._vnode;
                    // if valid id, then _remove the DOMnodeRef from internal hash
                    instance.id && delete nodeids[instance.id];
                }, silent ? 0 : DESTROY_DELAY);

                instance._deleteFromParent();
                // Do not make domNode `null` --> it could be used even when not in the dom
            }
            return instance;
        },

        _emit: function(evt, attribute, newValue, prevValue) {
           /**
            * Emitted by every Element that gets inserted.
            *
            * @event nodeinsert
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @since 0.1
            */

           /**
            * Emitted by every Element that gets removed.
            *
            * @event noderemove
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @since 0.1
            */

           /**
            * Emitted by every Element that gets its content changed (innerHTML/innerText).
            *
            * @event nodecontentchange
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @since 0.1
            */

           /**
            * Emitted by every Element that gets an attribute inserted.
            *
            * @event attributeinsert
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @param e.changed {Array} Array with Objects having three properties:
            * <ul>
            *     <li>attribute</li>
            *     <li>newValue</li>
            * </ul>
            * @since 0.1
            */

           /**
            * Emitted by every Element that gets an attribute removed.
            *
            * @event attributeremove
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @param e.changed {Array} Array with Strings of the attributeNames that are removed
            * @since 0.1
            */

           /**
            * Emitted by every Element that gets an attribute changed.
            *
            * @event attributechange
            * @param e {Object} eventobject including:
            * @param e.target {HtmlElement} the HtmlElement that is being dragged
            * @param e.currentTarget {HtmlElement} the HtmlElement that is delegating
            * @param e.changed {Array} Array with Objects having three properties:
            * <ul>
            *     <li>attribute</li>
            *     <li>newValue</li>
            *     <li>prevValue</li>
            * </ul>
            * @since 0.1
            */

            var instance = this,
                silent, attrMutations, mutationEvents, mutation, vParent;
            if (!DOCUMENT.hasMutationSubs || (instance.nodeType!==1)) {
                return;
            }
            silent = !!DOCUMENT._suppressMutationEvents;
            if (!silent && !instance.destroyed) {
                mutationEvents = MUTATION_EVENTS.get(instance) || {};
                if (attribute) {
                    attrMutations = mutationEvents[evt] || [];
                    if (evt===EV_ATTRIBUTE_REMOVED) {
                        mutation = attribute;
                    }
                    else {
                        mutation = {
                            attribute: attribute
                        };
                        if ((evt===EV_ATTRIBUTE_INSERTED) || (evt===EV_ATTRIBUTE_CHANGED)) {
                            mutation.newValue = newValue;
                        }
                        if ((evt===EV_ATTRIBUTE_CHANGED) && prevValue) {
                            mutation.prevValue = prevValue;
                        }
                    }
                    attrMutations.push(mutation);
                    mutationEvents[evt] = attrMutations;
                }
                else {
                    mutationEvents[evt] = true;
                }
                MUTATION_EVENTS.set(instance, mutationEvents);
                // now set all parent to have a nodecontentchange:
                vParent = instance;
/*jshint boss:true */
                while (vParent=vParent.vParent) {
/*jshint boss:false */
                    vParent._emit(EV_CONTENT_CHANGE);
                }

                // in case of removal we need to emit EV_REMOVED for all children right now
                // for they will be actually removed silently after a delay of 1 minute
                (evt===EV_REMOVED) && _emitDestroyChildren(instance);

                if (!BATCH_WILL_RUN) {
                    BATCH_WILL_RUN = true;
                    async(function() {
                        _batchEmit();
                    });
                }
            }
            return instance;
        },

        /**
         * Inserts `newVNode` before `refVNode`.
         *
         * Syncs with the DOM.
         *
         * @method _insertBefore
         * @param newVNode {vnode} vnode to insert
         * @param refVNode {vnode} The vnode before which newVNode should be inserted.
         * @private
         * @return {Node} the Node being inserted (equals domNode)
         * @since 0.0.1
         */
        _insertBefore: function(newVNode, refVNode) {
            var instance = this,
                domNode = newVNode.domNode,
                index = instance.vChildNodes.indexOf(refVNode);
            if (index!==-1) {
                newVNode._moveToParent(instance, index);
                instance.domNode._insertBefore(domNode, refVNode.domNode);
                (newVNode.nodeType===3) && instance._normalize();
                if (newVNode.nodeType===1) {
                    DOCUMENT._parcelList && newVNode.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(domNode) && DOCUMENT._parcelList.push(domNode);
                    newVNode._emit(EV_INSERTED);
                }
            }
            return domNode;
        },

       /**
        * Moves the vnode from its current parent.vChildNodes list towards a new parent vnode at the specified position.
        *
        * Does NOT sync with the dom.
        *
        * @method _moveToParent
        * @param parentVNode {vnode} the parent-vnode
        * @param [index] {Number} the position of the child. When not specified, it will be appended.
        * @private
        * @chainable
        * @since 0.0.1
        */
        _moveToParent: function(parentVNode, index) {
            var instance = this,
                vParent = instance.vParent;
            instance._deleteFromParent();
            instance.vParent = parentVNode;
            parentVNode.vChildNodes || (parentVNode.vChildNodes=[]);
            (typeof index==='number') ? parentVNode.vChildNodes.insertAt(instance, index) : (parentVNode.vChildNodes[parentVNode.vChildNodes.length]=instance);
            // force to recalculate the vChildren on a next call:
            vParent && (instance.nodeType===1) && (vParent._vChildren = null);
            // force to recalculate the vChildren on a next call:
            parentVNode && (instance.nodeType===1) && (parentVNode._vChildren=null);
            return instance;
        },

       /**
        * Removes empty TextNodes and merges following TextNodes inside the vnode.
        *
        * Syncs with the dom.
        *
        * @method _normalize
        * @private
        * @chainable
        * @since 0.0.1
        */
        _normalize: function() {
            var instance = this,
                domNode = instance.domNode,
                vChildNodes = instance.vChildNodes,
                changed = false,
                i, preChildNode, vChildNode;
            if (!instance._unNormalizable && vChildNodes) {
                for (i=vChildNodes.length-1; i>=0; i--) {
                    vChildNode = vChildNodes[i];
                    preChildNode = vChildNodes[i-1]; // i will get the value `-1` eventually, which leads into undefined preChildNode
                    if (vChildNode.nodeType===3) {
                        if (vChildNode.text==='') {
                            domNode._removeChild(vChildNode.domNode);
                            vChildNode._destroy();
                            changed = true;
                        }
                        else if (preChildNode && preChildNode.nodeType===3) {
                            preChildNode.text += vChildNode.text;
                            preChildNode.domNode.nodeValue = preChildNode.text;
                            domNode._removeChild(vChildNode.domNode);
                            vChildNode._destroy();
                            changed = true;
                        }
                    }
                }
            }
            changed && instance._emit(EV_CONTENT_CHANGE);
            return instance;
        },

       /**
        * Makes the vnode `normalizable`. Could be set to `false` when batch-inserting nodes, while `normalizaing` manually at the end.
        * Afterwards, you should always reset `normalizable` to true.
        *
        * @method _normalizable
        * @param value {Boolean} whether the vnode should be normalisable.
        * @private
        * @chainable
        * @since 0.0.1
        */
        _normalizable: function(value) {
            var instance = this;
            value ? (delete instance._unNormalizable) : (instance._unNormalizable=true);
            return instance;
        },

       /**
        * Prevents MutationObserver from making the dom sync with the vnode.
        * Should be used when manipulating the dom from within the vnode itself (to preventing looping)
        *
        * @method _noSync
        * @chainable
        * @private
        * @since 0.0.1
        */
        _noSync: function() {
            var instance = this;
            if (!instance._nosync) {
                instance._nosync = true;
                async(function() {
                    instance._nosync = false;
                });
            }
            return instance;
        },

       /**
        * Removes the attribute of both the vnode as well as its related dom-node.
        *
        * Syncs with the dom.
        *
        * @method _removeAttr
        * @param attributeName {String}
        * @private
        * @chainable
        * @since 0.0.1
        */
        _removeAttr: function(attributeName) {
            var instance = this;
            if (instance.attrs[attributeName]!==undefined) {
                delete instance.attrs[attributeName];
                // in case of STYLE attribute --> special treatment
                (attributeName===STYLE) && (instance.styles={});
                // in case of CLASS attribute --> special treatment
                (attributeName===CLASS) && (instance.classNames={});
                if (attributeName===ID) {
                    delete nodeids[instance.id];
                    delete instance.id;
                }
                instance.domNode._removeAttribute(attributeName);
                instance._emit(EV_ATTRIBUTE_REMOVED, attributeName);
            }
            return instance;
        },

        /**
        * Removes the vnode's child-vnode from its vChildren and the DOM.
        *
         * Syncs with the DOM.
         *
        * @method removeChild
        * @param VNode {vnode} the child-vnode to remove
        * @private
        * @since 0.0.1
        */
        _removeChild: function(VNode) {
            var instance = this,
                domNode = VNode.domNode,
                hadFocus = domNode.hasFocus() && (VNode.attrs['fm-lastitem']==='true'),
                parentVNode = VNode.vParent;
            VNode._destroy();
            instance.domNode._removeChild(VNode.domNode);
            instance._normalize();
            // now, reset the focus on focusmanager when needed:
            if (hadFocus) {
                while (parentVNode && !parentVNode.attrs['fm-manage']) {
                    parentVNode = parentVNode.vParent;
                }
                parentVNode && parentVNode.domNode.focus();
            }
        },

       /**
        * Replaces the current vnode at the parent.vChildNode list by `newVNode`
        *
        * Does NOT sync with the dom.
        *
        * @method _replaceAtParent
        * @param newVNode {Object} the new vnode which should take over the place of the current vnode
        * @private
        * @chainable
        * @since 0.0.1
        */
        _replaceAtParent: function(newVNode) {
            var instance = this,
                vParent = instance.vParent,
                vChildNodes, index;
            if (vParent && (vChildNodes=vParent.vChildNodes)) {
                index = vChildNodes.indexOf(instance);
                // force to recalculate the vChildren on a next call:
                ((instance.nodeType===1) || (newVNode.nodeType===1)) && (instance.vParent._vChildren=null);
                vChildNodes[index] = newVNode;
            }
            return instance._destroy();
        },

       /**
        * Sets the attribute of both the vnode as well as its related dom-node.
        *
        * Syncs with the dom.
        *
        * @method _setAttr
        * @param attributeName {String}
        * @param value {String} the value for the attributeName
        * @private
        * @chainable
        * @since 0.0.1
        */
        _setAttr: function(attributeName, value) {
            var instance = this,
                extractStyle, extractClass,
                attrs = instance.attrs,
                prevVal = attrs[attributeName];
            // don't check by !== --> value isn't parsed into a String yet

            if (prevVal && ((value===undefined) || (value===null))) {
                instance._removeAttr(attributeName);
                return instance;
            }
            // attribute-values are always Strings:
            value = String(value);
            // attribute-values will be stored without &quot; or &apos;
            value = value.replace(/&quot;/g, '"').replace(/&apos;/g, "'");
            if (prevVal!=value) {
                attrs[attributeName] = value;
                // in case of STYLE attribute --> special treatment
                if (attributeName===STYLE) {
                    extractStyle = extractor.extractStyle(value);
                    value = extractStyle.attrStyle;
                    if (value) {
                        attrs.style = value;
                    }
                    else {
                        delete attrs.style;
                    }
                    instance.styles = extractStyle.styles;
                }
                else if (attributeName===CLASS) {
                    // in case of CLASS attribute --> special treatment
                    extractClass = extractor.extractClass(value);
                    value = extractClass.attrClass;
                    if (value) {
                        attrs[CLASS] = value;
                    }
                    else {
                        delete attrs[CLASS];
                    }
                    instance.classNames = extractClass.classNames;
                }
                else if (attributeName===ID) {
                    instance.id && (delete nodeids[instance.id]);
                    instance.id = value;
                    nodeids[value] = instance.domNode;
                }
                // when set in the dom --> quotes need to be set as &quot;
                instance.domNode._setAttribute(attributeName, value.replace(/"/g, '&quot;'));
                instance._emit(prevVal ? EV_ATTRIBUTE_CHANGED : EV_ATTRIBUTE_INSERTED, attributeName, value, prevVal);
            }
            return instance;
        },

       /**
        * Redefines the attributes of both the vnode as well as its related dom-node. The new
        * definition replaces any previous attributes (without touching unmodified attributes).
        *
        * Syncs the new vnode's attributes with the dom.
        *
        * @method _setAttrs
        * @param newAttrs {Object|Array} the new attributes to be set
        * @private
        * @chainable
        * @since 0.0.1
        */
        _setAttrs: function(newAttrs) {
            // does sync the DOM
            var instance = this,
                attrsObj, attr, attrs, i, key, keys, len, value;
            if (instance.nodeType!==1) {
                return;
            }
            instance._noSync();
            attrs = instance.attrs;
            attrs.id && (delete nodeids[attrs.id]);

            if (Object.isObject(newAttrs)) {
                attrsObj = newAttrs;
            }
            else {
                attrsObj = {};
                len = newAttrs.length;
                for (i=0; i<len; i++) {
                    attr = newAttrs[i];
                    attrsObj[attr.name] = attr.value;
                }
            }

            // first _remove the attributes that are no longer needed.
            // quickest way for object iteration: http://jsperf.com/object-keys-iteration/20
            keys = Object.keys(attrs);
            len = keys.length;
            for (i = 0; i < len; i++) {
                key = keys[i];
                attrsObj[key] || instance._removeAttr(key);
            }

            // next: every attribute that differs: redefine
            keys = Object.keys(attrsObj);
            len = keys.length;
            for (i = 0; i < len; i++) {
                key = keys[i];
                value = attrsObj[key];
                (attrs[key]===value) || instance._setAttr(key, value);
            }

            return instance;
        },

       /**
        * Redefines the childNodes of both the vnode as well as its related dom-node. The new
        * definition replaces any previous nodes. (without touching unmodified nodes).
        *
        * Syncs the new vnode's childNodes with the dom.
        *
        * @method _setChildNodes
        * @param newVChildNodes {Array} array with vnodes which represent the new childNodes
        * @private
        * @chainable
        * @since 0.0.1
        */
        _setChildNodes: function(newVChildNodes) {
            // does sync the DOM
            var instance = this,
                vChildNodes = instance.vChildNodes || [],
                domNode = instance.domNode,
                forRemoval = [],
                i, oldChild, newChild, newLength, len, len2, childDomNode, nodeswitch, bkpAttrs, bkpChildNodes, needNormalize;

            instance._noSync();
            // first: reset ._vChildren --> by making it empty, its getter will refresh its list on a next call
            instance._vChildren = null;
            // if newVChildNodes is undefined, then we assume it to be empty --> an empty array
            newVChildNodes || (newVChildNodes=[]);
            // quickest way to loop through array is by using for loops: http://jsperf.com/array-foreach-vs-for-loop/5
            len = vChildNodes.length;
            newLength = newVChildNodes.length;
            for (i=0; i<len; i++) {
                oldChild = vChildNodes[i];
                childDomNode = oldChild.domNode;
                if (i < newLength) {
                    newChild = newVChildNodes[i];
                    newChild.vParent || (newChild.vParent=instance);
/*jshint boss:true */
                    switch (nodeswitch=NODESWITCH[oldChild.nodeType][newChild.nodeType]) {
/*jshint boss:false */
                        case 1: // oldNodeType==Element, newNodeType==Element
                            if ((oldChild.tag!==newChild.tag) || ((oldChild.tag==='SCRIPT') && (oldChild.text!==newChild.text))) {
                                // new tag --> completely replace
                                bkpAttrs = newChild.attrs;
                                bkpChildNodes = newChild.vChildNodes;
                                oldChild.attrs.id && (delete nodeids[oldChild.attrs.id]);
                                newChild.attrs = {}; // reset to force defined by `_setAttrs`
                                newChild.vChildNodes = []; // reset , to force defined by `_setAttrs`
                                domNode._replaceChild(newChild.domNode, childDomNode);
                                newChild.vParent = instance;
                                newChild._setAttrs(bkpAttrs);
                                newChild._setChildNodes(bkpChildNodes);
                                newChild.id && (nodeids[newChild.id]=newChild.domNode);
                                oldChild._replaceAtParent(newChild);
                                DOCUMENT._parcelList && newChild.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(newChild.domNode) && DOCUMENT._parcelList.push(newChild.domNode);
                                newChild._emit(EV_INSERTED);
                            }
                            else {
                                // same tag --> only update what is needed
                                // first: we might need to set the class `focussed` when the attributeData says so:
                                // this happens when an itag gets rerendered: its renderFn doesn't know if any elements
                                // were focussed
                                if (oldChild._data && oldChild._data.focussed && !newChild.hasClass('focussed')) {
                                    newChild.classNames.focussed = true;
                                    if (newChild.attrs[CLASS]) {
                                        newChild.attrs[CLASS] = newChild.attrs[CLASS] + ' focussed';
                                    }
                                    else {
                                        newChild.attrs[CLASS] = 'focussed';
                                    }
                                }
                                if (oldChild._data && oldChild._data['fm-tabindex']) {
                                    // node has the tabindex set by the focusmanager,
                                    // but that info might got lost with re-rendering of the new element
                                    newChild.attrs.tabindex = '0';
                                }
                                oldChild._setAttrs(newChild.attrs);
                                // next: sync the vChildNodes:
                                oldChild._setChildNodes(newChild.vChildNodes);
                                // reset ref. to the domNode, for it might have been changed by newChild:
                                oldChild.id && (nodeids[oldChild.id]=childDomNode);
                                newVChildNodes[i] = oldChild;
                            }
                            break;
                        case 2: // oldNodeType==Element, newNodeType==TextNode
                                // case2 and case3 should be treated the same
                        case 3: // oldNodeType==Element, newNodeType==Comment
                            oldChild.attrs.id && (delete nodeids[oldChild.attrs.id]);
                            newChild.domNode.nodeValue = newChild.text;
                            domNode._replaceChild(newChild.domNode, childDomNode);
                            newChild.vParent = instance;
                            oldChild._replaceAtParent(newChild);
                            instance._emit(EV_CONTENT_CHANGE);
                            break;
                        case 4: // oldNodeType==TextNode, newNodeType==Element
                                // case4 and case7 should be treated the same
                        case 7: // oldNodeType==Comment, newNodeType==Element
                            bkpAttrs = newChild.attrs;
                            bkpChildNodes = newChild.vChildNodes;
                            newChild.attrs = {}; // reset, to force defined by `_setAttrs`
                            newChild.vChildNodes = []; // reset to current state, to force defined by `_setAttrs`
                            domNode._replaceChild(newChild.domNode, childDomNode);
                            newChild._setAttrs(bkpAttrs);
                            newChild._setChildNodes(bkpChildNodes);
                            newChild.id && (nodeids[newChild.id]=newChild.domNode);
                            oldChild.isVoid = newChild.isVoid;
                            delete oldChild.text;
                            instance._emit(EV_CONTENT_CHANGE);
                            DOCUMENT._parcelList && newChild.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(newChild.domNode) && DOCUMENT._parcelList.push(newChild.domNode);
                            newChild._emit(EV_INSERTED);
                            break;
                        case 5: // oldNodeType==TextNode, newNodeType==TextNode
                                // case5 and case9 should be treated the same
                        case 9: // oldNodeType==Comment, newNodeType==Comment
                            if (oldChild.text!==newChild.text) {
                                oldChild.domNode.nodeValue = oldChild.text = newChild.text;
                                instance._emit(EV_CONTENT_CHANGE);
                            }
                            newVChildNodes[i] = oldChild;
                            break;
                        case 6: // oldNodeType==TextNode, newNodeType==Comment
                                // case6 and case8 should be treated the same
                        case 8: // oldNodeType==Comment, newNodeType==TextNode
                            newChild.domNode.nodeValue = newChild.text;
                            domNode._replaceChild(newChild.domNode, childDomNode);
                            newChild.vParent = oldChild.vParent;
                            instance._emit(EV_CONTENT_CHANGE);
                    }
                    if ((nodeswitch===2) || (nodeswitch===5) || (nodeswitch===8)) {
                        needNormalize = true;
                    }
                }
                else {
                    // _remove previous definition
                    domNode._removeChild(oldChild.domNode);
                    // the oldChild needs to be removed, however, this cannot be done right now, for it would effect the loop
                    // so we store it inside a hash to remove it later
                    forRemoval[forRemoval.length] = oldChild;
                }
            }
            // now definitely remove marked childNodes:
            len2 = forRemoval.length;
            for (i=0; i<len2; i++) {
                forRemoval[i]._destroy();
            }
            // now we add all new vChildNodes that go beyond `len`:
            for (i = len; i < newLength; i++) {
                newChild = newVChildNodes[i];
                newChild.vParent = instance;
                switch (newChild.nodeType) {
                    case 1: // Element
                        bkpAttrs = newChild.attrs;
                        bkpChildNodes = newChild.vChildNodes;
                        newChild.attrs = {}; // reset, to force defined by `_setAttrs`
                        newChild.vChildNodes = []; // reset to current state, to force defined by `_setAttrs`
                        domNode._appendChild(newChild.domNode);
                        newChild._setAttrs(bkpAttrs);
                        newChild._setChildNodes(bkpChildNodes);
                        DOCUMENT._parcelList && newChild.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(newChild.domNode) && DOCUMENT._parcelList.push(newChild.domNode);
                        newChild._emit(EV_INSERTED);
                        break;
                    case 3: // TextNode
                        needNormalize = true;
                        // we need to break through --> no `break`
                        /* falls through */
                    default: // TextNode or CommentNode
                        newChild.domNode.nodeValue = newChild.text;
                        domNode._appendChild(newChild.domNode);
                        instance._emit(EV_CONTENT_CHANGE);
                }
                newChild.storeId();
            }
            instance.vChildNodes = newVChildNodes;
            needNormalize && instance._normalize();
            return instance;
        }

    };


    //---- properties ------------------------------------------------------------------

    /**
     * A hash of all the `attributes` of the vnode's representing dom-node.
     *
     * @property attrs
     * @type Object
     * @since 0.0.1
     */

    /**
     * Hash with all the classes of the vnode. Every class represents a key, all values are set `true`.
     *
     * @property classNames
     * @type Object
     * @since 0.0.1
     */

    /**
     * The `id` of the vnode's representing dom-node (if any).
     *
     * @property id
     * @type String
     * @since 0.0.1
     */

    /**
     * Tells whether tag is a void Element. Examples are: `br`, `img` and `input`. Non-void Elements are f.e. `div` and `table`.
     * For TextNodes and CommentNodes, this property is `undefined`.
     *
     * @property isVoid
     * @type Boolean
     * @since 0.0.1
     */

    /**
     * The `nodeType` of the vnode's representing dom-node (1===ElementNode, 3===TextNode, 8===CommentNode).
     *
     * @property nodeType
     * @type Number
     * @since 0.0.1
     */

    /**
     * The `tag` of the vnode's representing dom-node (allways uppercase).
     *
     * @property tag
     * @type String
     * @since 0.0.1
     */

    /**
     * The `content` of the vnode's representing dom-node, in case it is a TextNode or CommentNode.
     * Equals dom-node.nodeValue.
     *
     * Is `undefined` for ElementNodes.
     *
     * @property text
     * @type String
     * @since 0.0.1
     */

    /**
     * Hash with all the childNodes (vnodes). vChildNodes are any kind of vnodes (nodeType===1, 3 or 8)
     *
     * @property vChildNodes
     * @type Array
     * @since 0.0.1
     */

    /**
     * The underlying `dom-node` that the vnode represents.
     *
     * @property domNode
     * @type domNode
     * @since 0.0.1
     */

    /**
     * vnode's parentNode (defined as a vnode itself).
     *
     * @property vParent
     * @type vnode
     * @since 0.0.1
     */

    Object.defineProperties(vNodeProto, {
        /**
         * Gets or sets the innerHTML of both the vnode as well as the representing dom-node.
         *
         * The setter syncs with the DOM.
         *
         * @property innerHTML
         * @type String
         * @since 0.0.1
         */
        innerHTML: {
            get: function() {
                var instance = this,
                    html, vChildNodes, len, i, vChildNode;
                if (instance.nodeType===1) {
                    html = '';
                    vChildNodes = instance.vChildNodes;
                    len = vChildNodes ? vChildNodes.length : 0;
                    for (i=0; i<len; i++) {
                        vChildNode = vChildNodes[i];
                        switch (vChildNode.nodeType) {
                            case 1:
                                html += vChildNode.outerHTML;
                                break;
                            case 3:
                                html += vChildNode.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                                break;
                            case 8:
                                html += '<!--' + vChildNode.text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '-->';
                        }
                    }
                }
                return html;
            },
            set: function(v) {
                this._setChildNodes(htmlToVNodes(v, vNodeProto));
            }
        },

        /**
         * Gets or sets the innerHTML of both the vnode as well as the representing dom-node.
         *
         * The setter syncs with the DOM.
         *
         * @property nodeValue
         * @type String
         * @since 0.0.1
         */
        nodeValue: {
            get: function() {
                var instance = this;
                return ((instance.nodeType===3) || (instance.nodeType===8)) ? instance.text : null;
            },
            set: function(v) {
                var instance = this,
                    newTextContent, prevTextContent;
                if ((instance.nodeType===3) || (instance.nodeType===8)) {
                    prevTextContent = instance.domNode.textContent;
                    instance.domNode.textContent = v;
                    // set .text AFTER the dom-node is updated --> the content might be escaped!
                    newTextContent = instance.text = instance.domNode.textContent;
                    (newTextContent!==prevTextContent) && instance._emit(EV_CONTENT_CHANGE);
                }
            }
        },

        /**
         * Gets or sets the outerHTML of both the vnode as well as the representing dom-node.
         *
         * The setter syncs with the DOM.
         *
         * @property outerHTML
         * @type String
         * @since 0.0.1
         */
        outerHTML: {
            get: function() {
                var instance = this,
                    html,
                    attrs = instance.attrs;
                if (instance.nodeType===1) {
                    if (instance.nodeType!==1) {
                        return instance.textContent;
                    }
                    html = '<' + instance.tag.toLowerCase();
                    attrs.each(function(value, key) {
                        html += ' '+key+'="'+value+'"';
                    });
                    html += '>';
                    if (!instance.isVoid) {
                        html += instance.innerHTML + '</' + instance.tag.toLowerCase() + '>';
                    }
                }
                return html;
            },
            set: function(v) {
                var instance = this,
                    vParent = instance.vParent,
                    id = instance.attrs.id,
                    vnode, vnodes, bkpAttrs, bkpChildNodes, i, len, vChildNodes, isLastChildNode, index, refDomNode;
                if ((instance.nodeType!==1) || !vParent) {
                    return;
                }
                instance._noSync();
                vChildNodes = vParent.vChildNodes;
                index = vChildNodes.indexOf(instance);
                isLastChildNode = (index===(vChildNodes.length-1));
                isLastChildNode || (refDomNode=vChildNodes[index+1].domNode);
                vnodes = htmlToVNodes(v, vNodeProto, vParent);
                len = vnodes.length;
                if (len>0) {
                    // the first vnode will replace the current instance:
                    vnode = vnodes[0];
                    if (vnode.nodeType===1) {
                        if (vnode.tag!==instance.tag) {
                            // new tag --> completely replace
                            bkpAttrs = vnode.attrs;
                            bkpChildNodes = vnode.vChildNodes;
                            id && (delete nodeids[id]);
                            vnode.attrs = {}; // reset to force defined by `_setAttrs`
                            vnode.vChildNodes = []; // reset , to force defined by `_setAttrs`
                            vParent.domNode._replaceChild(vnode.domNode, instance.domNode);
                            vnode._setAttrs(bkpAttrs);
                            vnode._setChildNodes(bkpChildNodes);
                            // vnode.attrs = bkpAttrs;
                            // vnode.vChildNodes = bkpChildNodes;
                            vnode.id && (nodeids[vnode.id]=vnode.domNode);
                            instance._replaceAtParent(vnode);
                            DOCUMENT._parcelList && vnode.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(vnode.domNode) && DOCUMENT._parcelList.push(vnode.domNode);
                            vnode._emit(EV_INSERTED);
                        }
                        else {
                            instance._setAttrs(vnode.attrs);
                            instance._setChildNodes(vnode.vChildNodes);
                        }
                    }
                    else {
                        id && (delete nodeids[id]);
                        vnode.domNode.nodeValue = vnode.text;
                        vParent.domNode._replaceChild(vnode.domNode, instance.domNode);
                        instance._replaceAtParent(vnode);
                        DOCUMENT._parcelList && vnode.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(vnode.domNode) && DOCUMENT._parcelList.push(vnode.domNode);
                        vnode._emit(EV_INSERTED);
                    }
                }
                for (i=1; i<len; i++) {
                    vnode = vnodes[i];
                    switch (vnode.nodeType) {
                        case 1: // Element
                            bkpAttrs = vnode.attrs;
                            bkpChildNodes = vnode.vChildNodes;
                            vnode.attrs = {}; // reset, to force defined by `_setAttrs`
                            vnode.vChildNodes = []; // reset to current state, to force defined by `_setAttrs`
                            isLastChildNode ? vParent.domNode._appendChild(vnode.domNode) : vParent.domNode._insertBefore(vnode.domNode, refDomNode);
                            DOCUMENT._parcelList && vnode.tag.startsWith('I-PARCEL-') && !DOCUMENT._parcelList.contains(vnode.domNode) && DOCUMENT._parcelList.push(vnode.domNode);
                            vnode._emit(EV_INSERTED);
                            vnode._setAttrs(bkpAttrs);
                            vnode._setChildNodes(bkpChildNodes);
                            break;
                        default: // TextNode or CommentNode
                            vnode.domNode.nodeValue = vnode.text;
                            isLastChildNode ? vParent.domNode._appendChild(vnode.domNode) : vParent.domNode._appendChild(vnode.domNode, refDomNode);
                    }
                    vnode.storeId();
                    vnode._moveToParent(vParent, index+i);
                }
            }
        },

        /**
         * Gets or sets the innerContent of the Node as plain text.
         *
         * The setter syncs with the DOM.
         *
         * @property textContent
         * @type String
         * @since 0.0.1
         */
        textContent: {
            get: function() {
                var instance = this,
                    text = '',
                    vChildNodes = instance.vChildNodes,
                    len, i, vChildNode;
                if (instance.nodeType===1) {
                    vChildNodes = instance.vChildNodes;
                    len = vChildNodes ? vChildNodes.length : 0;
                    for (i=0; i<len; i++) {
                        vChildNode = vChildNodes[i];
                        text += (vChildNode.nodeType===3) ? vChildNode.text : ((vChildNode.nodeType===1) ? vChildNode.textContent : '');
                    }
                }
                else {
                    text = instance.text;
                }
                return text;
            },
            set: function(v) {
                var vnode = Object.create(vNodeProto);
                vnode.domNode = DOCUMENT.createTextNode(v);
                // create circular reference:
                vnode.domNode._vnode = vnode;
                vnode.nodeType = 3;
                vnode.text = vnode.domNode.textContent;
                this._setChildNodes([vnode]);
            }
        },

        /**
         * Hash with all the children (vnodes). vChildren are vnodes that have a representing dom-node that is an HtmlElement (nodeType===1)
         *
         * @property vChildren
         * @type Array
         * @since 0.0.1
         */
        vChildren: {
            get: function() {
                var instance = this,
                    children = instance._vChildren,
                    vChildNode, vChildNodes, i, len;
                vChildNodes = instance.vChildNodes;
                if (vChildNodes && !children) {
                    children = instance._vChildren = [];
                    len = vChildNodes.length;
                    for (i=0; i<len; i++) {
                        vChildNode = vChildNodes[i];
                        (vChildNode.nodeType===1) && (children[children.length]=vChildNode);
                    }
                }
                children || (children = instance._vChildren = []);
                return children;
            }
        },

        /**
         * Reference to the first of sibbling vNode's, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vFirst
         * @type vnode
         * @since 0.0.1
         */
        vFirst: {
            get: function() {
                var vParent = this.vParent;
                if (!vParent) {
                    return null;
                }
                return vParent.vFirstChild;
            }
        },

        /**
         * Reference to the first vChildNode, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vFirstChild
         * @type vnode
         * @since 0.0.1
         */
        vFirstChild: {
            get: function() {
                return (this.vChildNodes && this.vChildNodes[0]) || null;
            }
        },

        /**
         * Reference to the first of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @property vFirstElement
         * @type vnode
         * @since 0.0.1
         */
        vFirstElement: {
            get: function() {
                var vParent = this.vParent;
                if (!vParent) {
                    return null;
                }
                return vParent.vFirstElementChild;
            }
        },

        /**
         * Reference to the first vChild, where the related dom-node an Element (nodeType===1).
         *
         * @property vFirstElementChild
         * @type vnode
         * @since 0.0.1
         */
        vFirstElementChild: {
            get: function() {
                return this.vChildren[0] || null;
            }
        },

        /**
         * Reference to the last of sibbling vNode's, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vLast
         * @type vnode
         * @since 0.0.1
         */
        vLast: {
            get: function() {
                var vParent = this.vParent;
                if (!vParent) {
                    return null;
                }
                return vParent.vLastChild;
            }
        },

        /**
         * Reference to the last vChildNode, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vLastChild
         * @type vnode
         * @since 0.0.1
         */
        vLastChild: {
            get: function() {
                var vChildNodes = this.vChildNodes;
                return (vChildNodes && vChildNodes[vChildNodes.length-1]) || null;
            }
        },

        /**
         * Reference to the last of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @property vLastElement
         * @type vnode
         * @since 0.0.1
         */
        vLastElement: {
            get: function() {
                var vParent = this.vParent;
                if (!vParent) {
                    return null;
                }
                return vParent.vLastElementChild;
            }
        },

        /**
         * Reference to the last vChild, where the related dom-node an Element (nodeType===1).
         *
         * @property vLastElementChild
         * @type vnode
         * @since 0.0.1
         */
        vLastElementChild: {
            get: function() {
                var vChildren = this.vChildren;
                return vChildren[vChildren.length-1] || null;
            }
        },

        /**
         * the Parent vnode
         *
         * @property vParent
         * @type vnode
         * @since 0.0.1
         */

        /**
         * Reference to the next of sibbling vNode's, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vNext
         * @type vnode
         * @since 0.0.1
         */
        vNext: {
            get: function() {
                return _findNodeSibling(this, true);
            }
        },

        /**
         * Reference to the next of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @property vNextElement
         * @type vnode
         * @since 0.0.1
         */
        vNextElement: {
            get: function() {
                return _findElementSibling(this, true);
            }
        },

        /**
         * Reference to the previous of sibbling vNode's, where the related dom-node is either an Element, TextNode or CommentNode (nodeType===1, 3 or 8).
         *
         * @property vPrevious
         * @type vnode
         * @since 0.0.1
         */
        vPrevious: {
            get: function() {
                return _findNodeSibling(this);
            }
        },

        /**
         * Reference to the previous of sibbling vNode's, where the related dom-node is an Element(nodeType===1).
         *
         * @property vPreviousElement
         * @type vnode
         * @since 0.0.1
         */
        vPreviousElement: {
            get: function() {
                return _findElementSibling(this);
            }
        }
    });

    return vNodeProto;

};
},{"./attribute-extractor.js":63,"./html-parser.js":68,"./vdom-ns.js":70,"js-ext/extra/lightmap.js":35,"js-ext/lib/array.js":36,"js-ext/lib/object.js":38,"js-ext/lib/string.js":40,"polyfill":50,"utils/lib/timers.js":53}],72:[function(require,module,exports){
"use strict";

require('js-ext/lib/object.js');

module.exports = function (window) {

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

    if (window._ITSAmodules.VDOM) {
        return window._ITSAmodules.VDOM; // VDOM was already created
    }

    var DOCUMENT = window.document, vdom;

    if (DOCUMENT.doctype.name==='html') {
        require('./partials/extend-element.js')(window);
        require('./partials/extend-document.js')(window);
        // now parsing and virtualize the complete DOM:
        require('./partials/node-parser.js')(window)(DOCUMENT.documentElement);
        vdom = {
            Plugins: require('./partials/element-plugin.js')(window)
        };
        // if there is any Element with inline `transform` that is not compatible with the current browser:
        // we can revert it into the right `transform`, because the vdom knows the right transform-name:
        DOCUMENT.getAll('[style*="transform:"]').forEach(function(node) {
            var vnode = node.vnode,
                rightStyle = vnode.attrs.style;
            // delete current definition, so that reset will do an update:
            delete vnode.attrs.style;
            // now reset:
            vnode._setAttr('style', rightStyle);
        });
    }
    else {
        // if no HTML, then return an empty Plugin-object
        vdom = {Plugins: {}};
    }

    window._ITSAmodules.VDOM = vdom;

    return vdom;
};
},{"./partials/element-plugin.js":65,"./partials/extend-document.js":66,"./partials/extend-element.js":67,"./partials/node-parser.js":69,"js-ext/lib/object.js":38}],73:[function(require,module,exports){
"use strict";

require('js-ext/lib/object.js');
require('polyfill');

/**
 *
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module focusmanager
 * @class FocusManager
 * @since 0.0.1
*/

var NAME = '[focusmanager]: ',
    async = require('utils').async,
    DEFAULT_SELECTOR = 'input, button, select, textarea, .focusable',
    SPECIAL_KEYS = {
        shift: 'shiftKey',
        ctrl: 'ctrlKey',
        cmd: 'metaKey',
        alt: 'altKey'
    },
    DEFAULT_KEYUP = 'shift+9',
    DEFAULT_KEYDOWN = '9',
    FM_SELECTION = 'fm-selection',
    FM_SELECTION_START = FM_SELECTION+'start',
    FM_SELECTION_END = FM_SELECTION+'end',
    FOCUSSED = 'focussed';

module.exports = function (window) {

    var DOCUMENT = window.document,
        nodePlugin, FocusManager, Event, nextFocusNode, searchFocusNode, markAsFocussed, getFocusManagerSelector, setupEvents;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', {});

/*jshint boss:true */
    if (FocusManager=window._ITSAmodules.FocusManager) {
/*jshint boss:false */
        return FocusManager; // FocusManager was already created
    }

    nodePlugin = require('vdom')(window).Plugins.nodePlugin;
    Event = require('event-dom')(window);

    getFocusManagerSelector = function(focusContainerNode) {
        var selector = focusContainerNode.getAttr('fm-manage');
        (selector.toLowerCase()==='true') && (selector=DEFAULT_SELECTOR);
        return selector;
    };

    nextFocusNode = function(e, keyCode, actionkey, focusContainerNode, sourceNode, selector, downwards) {
        console.log(NAME+'nextFocusNode');
        var keys, lastIndex, i, specialKeysMatch, specialKey, len, enterPressedOnInput, primaryButtons,
            inputType, foundNode, formNode, primaryonenter, noloop;
        keys = actionkey.split('+');
        len = keys.length;
        lastIndex = len - 1;

        if ((keyCode===13) && (sourceNode.getTagName()==='INPUT')) {
            inputType = sourceNode.getAttr('type').toLowerCase();
            enterPressedOnInput = (inputType==='text') || (inputType==='password');
        }

        if (enterPressedOnInput) {
            // check if we need to press the primary button - if available
/*jshint boss:true */
            if ((primaryonenter=sourceNode.getAttr('fm-primaryonenter')) && (primaryonenter.toLowerCase()==='true')) {
/*jshint boss:false */
                primaryButtons = focusContainerNode.getAll('button.pure-button-primary');
                primaryButtons.some(function(buttonNode) {
                    buttonNode.matches(selector) && (foundNode=buttonNode);
                    return foundNode;
                });
                if (foundNode) {
                    async(function() {
                        Event.emit(foundNode, 'UI:click');
                        // _buttonPressed make event-dom to simulate a pressed button for 200ms
                        Event.emit(foundNode, 'UI:tap', {_buttonPressed: true});
                        // if the button is of type `submit`, then try to submit the form
                        formNode = foundNode.inside('form');
                        formNode && formNode.submit();
                    });
                    return foundNode;
                }
            }
        }
        // double == --> keyCode is number, keys is a string
        if (enterPressedOnInput || (keyCode==keys[lastIndex])) {
            // posible keyup --> check if special characters match:
            specialKeysMatch = true;
            SPECIAL_KEYS.some(function(value) {
                specialKeysMatch = !e[value];
                return !specialKeysMatch;
            });
            for (i=lastIndex-1; (i>=0) && !specialKeysMatch; i--) {
                specialKey = keys[i].toLowerCase();
                specialKeysMatch = e[SPECIAL_KEYS[specialKey]];
            }
        }
        if (specialKeysMatch) {
            noloop = focusContainerNode.getAttr('fm-noloop');
            noloop = noloop && (noloop.toLowerCase()==='true');
            if (downwards) {
                return sourceNode.next(selector) || (noloop ? sourceNode.last(selector) : sourceNode.first(selector));
            }
            else {
                return sourceNode.previous(selector) || (noloop ? sourceNode.first(selector) : sourceNode.last(selector));
            }
        }
        return false;
    };

    markAsFocussed = function(focusContainerNode, node) {
        console.log(NAME+'markAsFocussed');
        var selector = getFocusManagerSelector(focusContainerNode),
            index = focusContainerNode.getAll(selector).indexOf(node) || 0;
        // we also need to set the appropriate nodeData, so that when the itags re-render,
        // they don't reset this particular information
        focusContainerNode.getAll('[fm-lastitem]')
                          .removeAttrs(['fm-lastitem', 'tabindex'], true)
                          .removeData('fm-tabindex');

        // also store the lastitem's index --> in case the node gets removed,
        // or re-rendering itags which don't have the attribute-data.
        // otherwise, a refocus on the container will set the focus to the nearest item
        focusContainerNode.setData('fm-lastitem-bkp', index);
        node.setData('fm-tabindex', true);

        node.setAttrs([
            {name: 'tabindex', value: '0'},
            {name: 'fm-lastitem', value: true}
        ]);
    };

    searchFocusNode = function(initialNode) {
        console.log(NAME+'searchFocusNode');
        var focusContainerNode = initialNode.hasAttr('fm-manage') ? initialNode : initialNode.inside('[fm-manage]'),
            focusNode, alwaysDefault, fmAlwaysDefault, selector, allFocusableNodes, index;

        if (focusContainerNode) {
            if (initialNode.matches(getFocusManagerSelector(focusContainerNode))) {
                markAsFocussed(focusContainerNode, initialNode);
                focusNode = initialNode;
            }
            else {
                // find the right node that should get focus
/*jshint boss:true */
                alwaysDefault = ((fmAlwaysDefault=focusContainerNode.getAttr('fm-alwaysdefault')) && (fmAlwaysDefault.toLowerCase()==='true'));
/*jshint boss:false */
                alwaysDefault && (focusNode=focusContainerNode.getElement('[fm-defaultitem="true"]'));
                if (!focusNode) {
                    // search for last item
                    focusNode = focusContainerNode.getElement('[fm-lastitem="true"]');
                    if (!focusNode) {
                        // set `selector` right now: we might use it later on even when index is undefined
                        selector = getFocusManagerSelector(focusContainerNode);
                        // look at the lastitemindex of the focuscontainer
                        index = focusContainerNode.getData('fm-lastitem-bkp');
                        if (index!==undefined) {
                            allFocusableNodes = focusContainerNode.getAll(selector);
                            focusNode = allFocusableNodes[index];
                        }
                    }
                }
                // still not found and alwaysDefault was falsy: try the defualt node:
                !focusNode && !alwaysDefault && (focusNode=focusContainerNode.getElement('[fm-defaultitem="true"]'));
                // still not found: try the first focussable node (which we might find inside `allFocusableNodes`:
                !focusNode && (focusNode = allFocusableNodes ? allFocusableNodes[0] : focusContainerNode.getElement(selector));
                if (focusNode) {
                    markAsFocussed(focusContainerNode, focusNode);
                }
                else {
                    focusNode = initialNode;
                }
            }
        }
        else {
            focusNode = initialNode;
        }
        return focusNode;
    };

    setupEvents = function() {

        Event.before('keydown', function(e) {
            console.log(NAME+'before keydown-event');
            var focusContainerNode,
                sourceNode = e.target,
                node = sourceNode.getParent(),
                selector, keyCode, actionkey, focusNode;

            focusContainerNode = sourceNode.inside('[fm-manage]');
            if (focusContainerNode) {
                // key was pressed inside a focusmanagable container
                selector = getFocusManagerSelector(focusContainerNode);
                keyCode = e.keyCode;

                // first check for keydown:
                actionkey = node.getAttr('fm-keydown') || DEFAULT_KEYDOWN;
                focusNode = nextFocusNode(e, keyCode, actionkey, focusContainerNode, sourceNode, selector, true);
                if (!focusNode) {
                    // check for keyup:
                    actionkey = node.getAttr('fm-keyup') || DEFAULT_KEYUP;
                    focusNode = nextFocusNode(e, keyCode, actionkey, focusContainerNode, sourceNode, selector);
                }
                if (focusNode) {
                    e.preventDefaultContinue();
                    // prevent default action --> we just want to re-focus, but we DO want afterlisteners
                    // to be handled in the after-listener: someone else might want to halt the keydown event.
                    sourceNode.matches(selector) && (e._focusNode=focusNode);
                }
            }
        });

        Event.after('keydown', function(e) {
            console.log(NAME+'after keydown-event');
            var focusNode = e._focusNode;
            focusNode && focusNode.focus && focusNode.focus();
        });

        Event.after('blur', function(e) {
            console.log(NAME+'after blur-event');
            var node = e.target,
                body = DOCUMENT.body;
            if (node && node.removeAttr) {
                do {
                    // we also need to set the appropriate nodeData, so that when the itags re-render,
                    // they don't reset this particular information
                    node.removeData(FOCUSSED);
                    node.removeClass(FOCUSSED, null, null, true);
                    node = (node===body) ? null : node.getParent();
                } while (node);
            }
        });

        Event.after('focus', function(e) {
            console.log(NAME+'after focus-event');
            var node = e.target,
                body = DOCUMENT.body;
            if (node && node.setClass) {
                do {
                    // we also need to set the appropriate nodeData, so that when the itags re-render,
                    // they don't reset this particular information
                    node.setData(FOCUSSED, true);
                    node.setClass(FOCUSSED, null, null, true);
                    node = (node===body) ? null : node.getParent();
                } while (node);
            }
        });

        // focus-fix for keeping focus when a mouse gets down for a longer time
        Event.after(['mousedown', 'press'], function(e) {
            console.log(NAME+'after focus-event');
            var node = e.target;
            node.hasFocus() || node.focus();
        }, 'button');

        Event.after('tap', function(e) {
            console.log(NAME+'after tap-event');
            var focusNode = e.target,
                focusContainerNode;

            if (focusNode && focusNode.inside) {
                focusContainerNode = focusNode.hasAttr('fm-manage') ? focusNode : focusNode.inside('[fm-manage]');
            }
            if (focusContainerNode) {
                if ((focusNode===focusContainerNode) || !focusNode.matches(getFocusManagerSelector(focusContainerNode))) {
                    focusNode = searchFocusNode(focusNode);
                }
                if (focusNode.hasFocus()) {
                    markAsFocussed(focusContainerNode, focusNode);
                }
                else {
                    focusNode.focus();
                }
            }
        });

        Event.after(['keypress', 'mouseup', 'panup', 'mousedown', 'pandown'], function(e) {
            console.log(NAME+'after '+e.type+'-event');
            var focusContainerNode,
                sourceNode = e.target,
                selector;

            focusContainerNode = sourceNode.inside('[fm-manage]');
            if (focusContainerNode) {
                // key was pressed inside a focusmanagable container
                selector = getFocusManagerSelector(focusContainerNode);
                if (sourceNode.matches(selector)) {
                    sourceNode.setAttr(FM_SELECTION_START, sourceNode.selectionStart || '0')
                              .setAttr(FM_SELECTION_END, sourceNode.selectionEnd || '0');
                }
            }
        }, 'input[type="text"], textarea');

        Event.after('focus', function(e) {
            console.log(NAME+'after focus-event');
            var focusContainerNode,
                sourceNode = e.target,
                selector, selectionStart, selectionEnd;

            focusContainerNode = sourceNode.inside('[fm-manage]');
            if (focusContainerNode) {
                // key was pressed inside a focusmanagable container
                selector = getFocusManagerSelector(focusContainerNode);
                if (sourceNode.matches(selector)) {
                    // cautious: fm-selectionstart can be 0 --> which would lead into a falsy value
                    selectionStart = sourceNode.getAttr(FM_SELECTION_START);
                    (selectionStart===undefined) && (selectionStart=sourceNode.getValue().length);
                    selectionEnd = Math.max(sourceNode.getAttr(FM_SELECTION_END) || selectionStart, selectionStart);
                    sourceNode.selectionEnd = selectionEnd;
                    sourceNode.selectionStart = selectionStart;
                    markAsFocussed(focusContainerNode, sourceNode);
                }
            }
        }, 'input[type="text"], textarea');

    };

    setupEvents();

    window._ITSAmodules.FocusManager = FocusManager = nodePlugin.definePlugin('fm', {manage: 'true'});

    /**
     * In case of a manual focus (node.focus()) the node will fire an `manualfocus`-event
     * which can be prevented.
     * @event manualfocus
    */
    Event.defineEvent('UI:manualfocus')
         .defaultFn(function(e) {
             e.target._focus();
         });

    (function(HTMLElementPrototype) {

        HTMLElementPrototype._focus = HTMLElementPrototype.focus;
        HTMLElementPrototype.focus = function() {
            console.log(NAME+'focus');
            searchFocusNode(this).emit('manualfocus');
        };

    }(window.HTMLElement.prototype));


    return FocusManager;
};
},{"event-dom":74,"js-ext/lib/object.js":141,"polyfill":147,"utils":148,"vdom":192}],74:[function(require,module,exports){
module.exports=require(6)
},{"event":78,"js-ext/lib/array.js":87,"js-ext/lib/object.js":88,"js-ext/lib/string.js":89,"polyfill/polyfill-base.js":95,"utils":96,"vdom":140}],75:[function(require,module,exports){
module.exports=require(7)
},{"js-ext/lib/function.js":79,"js-ext/lib/object.js":80,"polyfill/polyfill-base.js":86}],76:[function(require,module,exports){
module.exports=require(8)
},{"./index.js":78}],77:[function(require,module,exports){
module.exports=require(9)
},{"./index.js":78}],78:[function(require,module,exports){
module.exports=require(10)
},{"./event-base.js":75,"./event-emitter.js":76,"./event-listener.js":77}],79:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":83}],80:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":83}],81:[function(require,module,exports){
module.exports=require(13)
},{}],82:[function(require,module,exports){
module.exports=require(14)
},{}],83:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":81,"./lib/window.console.js":82}],84:[function(require,module,exports){
module.exports=require(13)
},{}],85:[function(require,module,exports){
module.exports=require(14)
},{}],86:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":84,"./lib/window.console.js":85}],87:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":92}],88:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":92}],89:[function(require,module,exports){
module.exports=require(21)
},{}],90:[function(require,module,exports){
module.exports=require(13)
},{}],91:[function(require,module,exports){
module.exports=require(14)
},{}],92:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":90,"./lib/window.console.js":91}],93:[function(require,module,exports){
module.exports=require(13)
},{}],94:[function(require,module,exports){
module.exports=require(14)
},{}],95:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":93,"./lib/window.console.js":94}],96:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":97,"./lib/timers.js":98}],97:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":101}],98:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":101}],99:[function(require,module,exports){
module.exports=require(13)
},{}],100:[function(require,module,exports){
module.exports=require(14)
},{}],101:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":99,"./lib/window.console.js":100}],102:[function(require,module,exports){
module.exports=require(34)
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],103:[function(require,module,exports){
module.exports=require(35)
},{"../lib/array.js":104,"../lib/function.js":105,"../lib/object.js":106,"polyfill/lib/weakmap.js":110}],104:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":112}],105:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":112}],106:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":112}],107:[function(require,module,exports){
module.exports=require(39)
},{"polyfill":112}],108:[function(require,module,exports){
module.exports=require(21)
},{}],109:[function(require,module,exports){
module.exports=require(13)
},{}],110:[function(require,module,exports){
module.exports=require(42)
},{}],111:[function(require,module,exports){
module.exports=require(14)
},{}],112:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":109,"./lib/window.console.js":111}],113:[function(require,module,exports){
module.exports=require(45)
},{}],114:[function(require,module,exports){
module.exports=require(46)
},{}],115:[function(require,module,exports){
module.exports=require(47)
},{}],116:[function(require,module,exports){
module.exports=require(13)
},{}],117:[function(require,module,exports){
module.exports=require(14)
},{}],118:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":116,"./lib/window.console.js":117}],119:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":120,"./lib/timers.js":121}],120:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":124}],121:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":124}],122:[function(require,module,exports){
module.exports=require(13)
},{}],123:[function(require,module,exports){
module.exports=require(14)
},{}],124:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":122,"./lib/window.console.js":123}],125:[function(require,module,exports){
module.exports=require(57)
},{"./lib/sizes.js":126}],126:[function(require,module,exports){
module.exports=require(58)
},{"js-ext/lib/object.js":127}],127:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":130}],128:[function(require,module,exports){
module.exports=require(13)
},{}],129:[function(require,module,exports){
module.exports=require(14)
},{}],130:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":128,"./lib/window.console.js":129}],131:[function(require,module,exports){
module.exports=require(63)
},{"js-ext/lib/object.js":106,"js-ext/lib/string.js":108,"polyfill":118,"polyfill/extra/transition.js":113,"polyfill/extra/vendorCSS.js":115}],132:[function(require,module,exports){
module.exports=require(64)
},{"js-ext/lib/object.js":106,"polyfill":118}],133:[function(require,module,exports){
module.exports=require(65)
},{"js-ext/lib/object.js":106,"js-ext/lib/string.js":108,"polyfill":118}],134:[function(require,module,exports){
module.exports=require(66)
},{"./vdom-ns.js":138,"js-ext/lib/object.js":106,"js-ext/lib/string.js":108,"polyfill":118}],135:[function(require,module,exports){
module.exports=require(67)
},{"../css/element.css":102,"./attribute-extractor.js":131,"./element-array.js":132,"./html-parser.js":136,"./node-parser.js":137,"./vdom-ns.js":138,"./vnode.js":139,"js-ext/lib/object.js":106,"js-ext/lib/promise.js":107,"js-ext/lib/string.js":108,"polyfill":118,"polyfill/extra/transition.js":113,"polyfill/extra/transitionend.js":114,"polyfill/extra/vendorCSS.js":115,"utils":119,"window-ext":125}],136:[function(require,module,exports){
module.exports=require(68)
},{"./attribute-extractor.js":131,"./vdom-ns.js":138,"js-ext/lib/object.js":106,"polyfill":118}],137:[function(require,module,exports){
module.exports=require(69)
},{"./attribute-extractor.js":131,"./vdom-ns.js":138,"./vnode.js":139,"js-ext/lib/object.js":106,"polyfill":118}],138:[function(require,module,exports){
module.exports=require(70)
},{"js-ext/lib/object.js":106,"polyfill":118}],139:[function(require,module,exports){
module.exports=require(71)
},{"./attribute-extractor.js":131,"./html-parser.js":136,"./vdom-ns.js":138,"js-ext/extra/lightmap.js":103,"js-ext/lib/array.js":104,"js-ext/lib/object.js":106,"js-ext/lib/string.js":108,"polyfill":118,"utils/lib/timers.js":121}],140:[function(require,module,exports){
module.exports=require(72)
},{"./partials/element-plugin.js":133,"./partials/extend-document.js":134,"./partials/extend-element.js":135,"./partials/node-parser.js":137,"js-ext/lib/object.js":106}],141:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":144}],142:[function(require,module,exports){
module.exports=require(13)
},{}],143:[function(require,module,exports){
module.exports=require(14)
},{}],144:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":142,"./lib/window.console.js":143}],145:[function(require,module,exports){
module.exports=require(13)
},{}],146:[function(require,module,exports){
module.exports=require(14)
},{}],147:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":145,"./lib/window.console.js":146}],148:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":149,"./lib/timers.js":150}],149:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":153}],150:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":153}],151:[function(require,module,exports){
module.exports=require(13)
},{}],152:[function(require,module,exports){
module.exports=require(14)
},{}],153:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":151,"./lib/window.console.js":152}],154:[function(require,module,exports){
module.exports=require(34)
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],155:[function(require,module,exports){
module.exports=require(35)
},{"../lib/array.js":156,"../lib/function.js":157,"../lib/object.js":158,"polyfill/lib/weakmap.js":162}],156:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":164}],157:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":164}],158:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":164}],159:[function(require,module,exports){
module.exports=require(39)
},{"polyfill":164}],160:[function(require,module,exports){
module.exports=require(21)
},{}],161:[function(require,module,exports){
module.exports=require(13)
},{}],162:[function(require,module,exports){
module.exports=require(42)
},{}],163:[function(require,module,exports){
module.exports=require(14)
},{}],164:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":161,"./lib/window.console.js":163}],165:[function(require,module,exports){
module.exports=require(45)
},{}],166:[function(require,module,exports){
module.exports=require(46)
},{}],167:[function(require,module,exports){
module.exports=require(47)
},{}],168:[function(require,module,exports){
module.exports=require(13)
},{}],169:[function(require,module,exports){
module.exports=require(14)
},{}],170:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":168,"./lib/window.console.js":169}],171:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":172,"./lib/timers.js":173}],172:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":176}],173:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":176}],174:[function(require,module,exports){
module.exports=require(13)
},{}],175:[function(require,module,exports){
module.exports=require(14)
},{}],176:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":174,"./lib/window.console.js":175}],177:[function(require,module,exports){
module.exports=require(57)
},{"./lib/sizes.js":178}],178:[function(require,module,exports){
module.exports=require(58)
},{"js-ext/lib/object.js":179}],179:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":182}],180:[function(require,module,exports){
module.exports=require(13)
},{}],181:[function(require,module,exports){
module.exports=require(14)
},{}],182:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":180,"./lib/window.console.js":181}],183:[function(require,module,exports){
module.exports=require(63)
},{"js-ext/lib/object.js":158,"js-ext/lib/string.js":160,"polyfill":170,"polyfill/extra/transition.js":165,"polyfill/extra/vendorCSS.js":167}],184:[function(require,module,exports){
module.exports=require(64)
},{"js-ext/lib/object.js":158,"polyfill":170}],185:[function(require,module,exports){
module.exports=require(65)
},{"js-ext/lib/object.js":158,"js-ext/lib/string.js":160,"polyfill":170}],186:[function(require,module,exports){
module.exports=require(66)
},{"./vdom-ns.js":190,"js-ext/lib/object.js":158,"js-ext/lib/string.js":160,"polyfill":170}],187:[function(require,module,exports){
module.exports=require(67)
},{"../css/element.css":154,"./attribute-extractor.js":183,"./element-array.js":184,"./html-parser.js":188,"./node-parser.js":189,"./vdom-ns.js":190,"./vnode.js":191,"js-ext/lib/object.js":158,"js-ext/lib/promise.js":159,"js-ext/lib/string.js":160,"polyfill":170,"polyfill/extra/transition.js":165,"polyfill/extra/transitionend.js":166,"polyfill/extra/vendorCSS.js":167,"utils":171,"window-ext":177}],188:[function(require,module,exports){
module.exports=require(68)
},{"./attribute-extractor.js":183,"./vdom-ns.js":190,"js-ext/lib/object.js":158,"polyfill":170}],189:[function(require,module,exports){
module.exports=require(69)
},{"./attribute-extractor.js":183,"./vdom-ns.js":190,"./vnode.js":191,"js-ext/lib/object.js":158,"polyfill":170}],190:[function(require,module,exports){
module.exports=require(70)
},{"js-ext/lib/object.js":158,"polyfill":170}],191:[function(require,module,exports){
module.exports=require(71)
},{"./attribute-extractor.js":183,"./html-parser.js":188,"./vdom-ns.js":190,"js-ext/extra/lightmap.js":155,"js-ext/lib/array.js":156,"js-ext/lib/object.js":158,"js-ext/lib/string.js":160,"polyfill":170,"utils/lib/timers.js":173}],192:[function(require,module,exports){
module.exports=require(72)
},{"./partials/element-plugin.js":185,"./partials/extend-document.js":186,"./partials/extend-element.js":187,"./partials/node-parser.js":189,"js-ext/lib/object.js":158}],193:[function(require,module,exports){
require('./lib/function.js');
require('./lib/object.js');
require('./lib/string.js');
require('./lib/array.js');
require('./lib/json.js');
require('./lib/promise.js');
},{"./lib/array.js":194,"./lib/function.js":195,"./lib/json.js":196,"./lib/object.js":197,"./lib/promise.js":198,"./lib/string.js":199}],194:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":202}],195:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":202}],196:[function(require,module,exports){
/**
 *
 * Pollyfils for often used functionality for Arrays
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module js-ext
 * @submodule lib/array.js
 * @class Array
 *
 */

"use strict";

require('polyfill/polyfill-base.js');

var REVIVER = function(key, value) {
    return ((typeof value==='string') && value.toDate()) || value;
};

JSON.parseWithDate = function(stringifiedObj) {
    return this.parse(obj, REVIVER);
};
},{"polyfill/polyfill-base.js":202}],197:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":202}],198:[function(require,module,exports){
module.exports=require(39)
},{"polyfill":202}],199:[function(require,module,exports){
module.exports=require(21)
},{}],200:[function(require,module,exports){
module.exports=require(13)
},{}],201:[function(require,module,exports){
module.exports=require(14)
},{}],202:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":200,"./lib/window.console.js":201}],203:[function(require,module,exports){
(function (process,Buffer){
"use strict";

/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var Url = require("url"),
    spawn = require("child_process").spawn,
    fs = require('fs'),
    XmlDOMParser = require('xmldom').DOMParser;

exports.XMLHttpRequest = function() {
  /**
   * Private variables
   */
  var self = this;
  var http = require('http');
  var https = require('https');

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*"
  };

  var headers = defaultHeaders;

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = null;
  this.status = null;
  this.statusText = null;

  /**
   * Private methods
   */

  var isXMLRequest = function() {
      return /^text\/xml/.test(response.headers['content-type']);
  };

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw "SecurityError: Request method not allowed";
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request.
   *
   * @param string header Header name
   * @param string value Header value
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState != this.OPENED) {
      throw "INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN";
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn('Refused to set unsafe header "' + header + '"');
      return;
    }
    if (sendFlag) {
      throw "INVALID_STATE_ERR: send flag is true";
    }
    headers[header] = value;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string" && this.readyState > this.OPENED && response.headers[header.toLowerCase()] && !errorFlag) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    // @TODO Make this case insensitive
    if (typeof name === "string" && headers[name]) {
      return headers[name];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState != this.OPENED) {
      throw "INVALID_STATE_ERR: connection must be opened before send() is called";
    }

    if (sendFlag) {
      throw "INVALID_STATE_ERR: send has already been called";
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host, responseHandler, errorHandler;
    // Determine the server
    switch (url.protocol) {
      case 'https:':
        ssl = true;
        host = url.hostname;
        break;

      case 'http:':
        host = url.hostname;
        break;

      case 'file:':
        local = true;
        break;

      case undefined:
      case '':
        host = "localhost";
        break;

      default:
        throw "Protocol not supported.";
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw "XMLHttpRequest: Only GET method is supported";
      }

      if (settings.async) {
        fs.readFile(url.pathname, 'utf8', function(error, data) {
          if (error) {
            self.handleError(error);
          } else {
            self.status = 200;
            self.responseText = data;
            self.responseXML = isXMLRequest() ? new XmlDOMParser().parseFromString(data) : null;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(url.pathname, 'utf8');
          self.responseXML = isXMLRequest() ? new XmlDOMParser().parseFromString(this.responseText) : null;
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : '');

    // Set the Host header or the server may reject the request
    headers.Host = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers.Host += ':' + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password == "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers.Authorization = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: false
    };

    // Reset error flag
    errorFlag = false;

    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      responseHandler = function(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? 'GET' : settings.method,
            headers: headers
          };

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on('error', errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        response.setEncoding("utf8");

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on('data', function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on('end', function() {
          if (sendFlag) {
            self.responseXML = isXMLRequest() ? new XmlDOMParser().parseFromString(self.responseText) : null;
            // Discard the 'end' event if the connection has been aborted
            setState(self.DONE);
            sendFlag = false;
          }
        });

        response.on('error', function(error) {
          self.handleError(error);
        });
      };

      // Error handler for the request
      errorHandler = function(error) {
        self.handleError(error);
      };

      // Create the request
      request = doRequest(options, responseHandler).on('error', errorHandler);

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');" +
        "var doRequest = http" + (ssl ? "s" : "") + ".request;" +
        "var options = " + JSON.stringify(options) + ";" +
        "var responseText = '';" +
        "var req = doRequest(options, function(response) {" +
        "response.setEncoding('utf8');" +
        "response.on('data', function(chunk) {" +
        "  responseText += chunk;" +
        "});" +
        "response.on('end', function() {" +
        "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');" +
        "fs.unlinkSync('" + syncFile + "');" +
        "});" +
        "response.on('error', function(error) {" +
        "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" +
        "fs.unlinkSync('" + syncFile + "');" +
        "});" +
        "}).on('error', function(error) {" +
        "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" +
        "fs.unlinkSync('" + syncFile + "');" +
        "});" +
        (data ? "req.write('" + data.replace(/'/g, "\\'") + "');":"") +
        "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
/*jshint noempty:true */
      // Wait while the sync file is empty
      while (fs.existsSync(syncFile)) {}
/*jshint noempty:false */
      self.responseText = fs.readFileSync(contentFile, 'utf8');
      self.responseXML = isXMLRequest() ? new XmlDOMParser().parseFromString(self.responseText) : null;
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);
      if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
        // If the file returned an error, handle it
        var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
        self.handleError(errorObj);
      } else {
        // If the file returned okay, parse its data and move to the DONE state
        self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
        self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   */
  this.handleError = function(error) {
    this.status = 503;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = defaultHeaders;
    this.responseText = "";
    this.responseXML = "";

    errorFlag = true;

    if (this.readyState !== this.UNSENT && (this.readyState !== this.OPENED || sendFlag) && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      self["on" + event]();
    }
    if (event in listeners) {
      for (var i = 0, len = listeners[event].length; i < len; i++) {
        listeners[event][i].call(self);
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if ((self.readyState !== state) || (settings.async && (self.readyState===self.LOADING))) {
      self.readyState = state;

      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
          self.dispatchEvent("readystatechange");
      }

      if (settings.async && (self.readyState===self.LOADING)) {
          self.dispatchEvent("progress");
      }

      if (self.readyState === self.DONE && !errorFlag) {
          self.dispatchEvent("load");
          // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
          self.dispatchEvent("loadend");
      }
    }

  };
};

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":281,"buffer":270,"child_process":269,"fs":269,"http":274,"https":278,"url":299,"xmldom":257}],204:[function(require,module,exports){
"use strict";

/**
 * Emulation of browser `window` and `dom`. Just enough to make ITSA work.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module node-win
 * @class window
 * @static
*/

require('js-ext/lib/array.js');

var xmlhttprequest = require('./lib/XMLHttpRequest.js').XMLHttpRequest,
    xmlDOMParser = require('xmldom').DOMParser,
	Url = require('url'),
    used = {},
    vNodeParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,
    count, doc, win, getHTML, reset;
    EventTypes = {
		MouseEvents: function () {
			this.initMouseEvent = function (type, bubbles, cancelable, view, detail,
					screenX, screenY, clientX, clientY,
					ctrlKey, altKey, shiftKey, metaKey,
					button, relatedTarget) {
				count('initMouseEvent');
				this.ev = {
					type:type,
					bubbles:bubbles,
					cancelable:cancelable,
					view:view,
					detail:detail,
					screenX:screenX,
					screenY:screenY,
					clientX:clientX,
					clientY:clientY,
					ctrlKey:ctrlKey,
					altKey:altKey,
					shiftKey:shiftKey,
					metaKey:metaKey,
					button:button,
					relatedTarget:relatedTarget
				};
			};
		}
	};

count = function (method) {
	if (!used[method]) {
		used[method] = 1;
	} else {
		used[method] += 1;
	}
};

getHTML = function (node) {
	var prop, val,
		style, styles = [],
		html = '';

	if (!node.nodeName && node.nodeValue) {
		// For text nodes, I return the uppercase text
		// so that you can tell the parts generated at the server
		// from the normal lowercase of the actual app when run on the client
		return node.nodeValue.toUpperCase();
	}
	html += '<' + node.nodeName;
	for (prop in node) {
		val = node[prop];

		// Ignore functions, those will be revived on the client side.
		if (typeof val == 'function') continue;
		switch (prop) {
		case 'nodeName':
		case 'parentNode':
		case 'childNodes':
		case 'pathname':
		case 'search':
			continue;
		case 'checked':
			if (val == 'false') continue;
			break;
		case 'href':
			val = node.pathname;
			break;
		case 'className':
			prop = 'class';
			break;
		case 'style':
			if (val) {
				for (style in val) {
					if (val[style]) {
						styles.push(style + ': ' + val[style]);
					}
				}
				if (!styles.length) {
					continue;
				}
				val = styles.join(';');
			}
			break;
		}
		html += ' ' + prop + '="' + val.replace('"', '\\"') + '"';
	}

	if (node.childNodes.length) {
		html += '>' + node.childNodes.reduce(function (prev, node) {
			return prev + getHTML(node);
		}, '') + '</' + node.nodeName + '>';
	}
	else {
		// I don't know why Mithril assigns the content of textareas
		// to its value attribute instead of the innerHTML property.
		// Since it doesn't have children, the closing tag has to be forced.
		if (node.nodeName == 'TEXTAREA') {
			html += '></TEXTAREA>';
		} else {
			html += '/>';
		}
	}
	return html;
};


win = {
    cancelAnimationFrame: function() {

    },

    console: require('polyfill/lib/window.console.js'),

    CSSStyleDeclaration: {},

	document: doc,

    DOMParser: xmlDOMParser,

    HTMLCollection: Array,

    location: {},

	navigator: {
		userAgent: 'fake',
		stats: {
			clear: function () {
				used = {};
			},
			get: function () {
				return used;
			}
		},
		reset: reset,
		getHTML: function () {
			return getHTML(doc.body);
		},
		navigate: function (url) {
			var u = Url.parse(url, false, true);
			window.location.search = u.search || '';
			window.location.pathname = u.pathname || '';
			window.location.hash = u.hash || '';
		}
	},

    NodeList: Array,

	performance: function () {
		var timestamp = 50;
		this.$elapse = function(amount) {
			timestamp += amount;
		};
		this.now = function() {
			return timestamp;
		};
	},

	requestAnimationFrame: function(callback) {
		var instance = this;
		instance.requestAnimationFrame.$callback = callback;
		instance.requestAnimationFrame.$resolve = function() {
			instance.requestAnimationFrame.$callback && instance.requestAnimationFrame.$callback();
			instance.requestAnimationFrame.$callback = null;
			instance.performance.$elapse(20);
		};
	},

    XMLHttpRequest: xmlhttprequest

};

reset = function () {
	var body = doc.createElement('body');
	win.location.search = "?/";
	win.location.pathname = "/";
	win.location.hash = "";
	win.history = {};
	win.history.pushState = function(data, title, url) {
		win.location.pathname = win.location.search = win.location.hash = url;
	},
	win.history.replaceState = function(data, title, url) {
		win.location.pathname = win.location.search = win.location.hash = url;
	};
	doc.appendChild(body);
	doc.body = body;
};

reset();

module.exports = win;
},{"./lib/XMLHttpRequest.js":203,"js-ext/lib/array.js":205,"polyfill/lib/window.console.js":210,"url":299,"xmldom":257}],205:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":208}],206:[function(require,module,exports){
module.exports=require(13)
},{}],207:[function(require,module,exports){
module.exports=require(14)
},{}],208:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":206,"./lib/window.console.js":207}],209:[function(require,module,exports){
module.exports=require(13)
},{}],210:[function(require,module,exports){
module.exports=require(14)
},{}],211:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":209,"./lib/window.console.js":210}],212:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":213,"./lib/timers.js":214}],213:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":217}],214:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":217}],215:[function(require,module,exports){
module.exports=require(13)
},{}],216:[function(require,module,exports){
module.exports=require(14)
},{}],217:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":215,"./lib/window.console.js":216}],218:[function(require,module,exports){
module.exports=require(34)
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],219:[function(require,module,exports){
module.exports=require(35)
},{"../lib/array.js":220,"../lib/function.js":221,"../lib/object.js":222,"polyfill/lib/weakmap.js":226}],220:[function(require,module,exports){
module.exports=require(19)
},{"polyfill/polyfill-base.js":228}],221:[function(require,module,exports){
module.exports=require(11)
},{"polyfill/polyfill-base.js":228}],222:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":228}],223:[function(require,module,exports){
module.exports=require(39)
},{"polyfill":228}],224:[function(require,module,exports){
module.exports=require(21)
},{}],225:[function(require,module,exports){
module.exports=require(13)
},{}],226:[function(require,module,exports){
module.exports=require(42)
},{}],227:[function(require,module,exports){
module.exports=require(14)
},{}],228:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":225,"./lib/window.console.js":227}],229:[function(require,module,exports){
module.exports=require(45)
},{}],230:[function(require,module,exports){
module.exports=require(46)
},{}],231:[function(require,module,exports){
module.exports=require(47)
},{}],232:[function(require,module,exports){
module.exports=require(13)
},{}],233:[function(require,module,exports){
module.exports=require(14)
},{}],234:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":232,"./lib/window.console.js":233}],235:[function(require,module,exports){
module.exports=require(28)
},{"./lib/idgenerator.js":236,"./lib/timers.js":237}],236:[function(require,module,exports){
module.exports=require(29)
},{"polyfill/polyfill-base.js":240}],237:[function(require,module,exports){
module.exports=require(30)
},{"polyfill/polyfill-base.js":240}],238:[function(require,module,exports){
module.exports=require(13)
},{}],239:[function(require,module,exports){
module.exports=require(14)
},{}],240:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":238,"./lib/window.console.js":239}],241:[function(require,module,exports){
module.exports=require(57)
},{"./lib/sizes.js":242}],242:[function(require,module,exports){
module.exports=require(58)
},{"js-ext/lib/object.js":243}],243:[function(require,module,exports){
module.exports=require(12)
},{"polyfill/polyfill-base.js":246}],244:[function(require,module,exports){
module.exports=require(13)
},{}],245:[function(require,module,exports){
module.exports=require(14)
},{}],246:[function(require,module,exports){
module.exports=require(15)
},{"./lib/matchesselector.js":244,"./lib/window.console.js":245}],247:[function(require,module,exports){
module.exports=require(63)
},{"js-ext/lib/object.js":222,"js-ext/lib/string.js":224,"polyfill":234,"polyfill/extra/transition.js":229,"polyfill/extra/vendorCSS.js":231}],248:[function(require,module,exports){
module.exports=require(64)
},{"js-ext/lib/object.js":222,"polyfill":234}],249:[function(require,module,exports){
module.exports=require(65)
},{"js-ext/lib/object.js":222,"js-ext/lib/string.js":224,"polyfill":234}],250:[function(require,module,exports){
module.exports=require(66)
},{"./vdom-ns.js":254,"js-ext/lib/object.js":222,"js-ext/lib/string.js":224,"polyfill":234}],251:[function(require,module,exports){
module.exports=require(67)
},{"../css/element.css":218,"./attribute-extractor.js":247,"./element-array.js":248,"./html-parser.js":252,"./node-parser.js":253,"./vdom-ns.js":254,"./vnode.js":255,"js-ext/lib/object.js":222,"js-ext/lib/promise.js":223,"js-ext/lib/string.js":224,"polyfill":234,"polyfill/extra/transition.js":229,"polyfill/extra/transitionend.js":230,"polyfill/extra/vendorCSS.js":231,"utils":235,"window-ext":241}],252:[function(require,module,exports){
module.exports=require(68)
},{"./attribute-extractor.js":247,"./vdom-ns.js":254,"js-ext/lib/object.js":222,"polyfill":234}],253:[function(require,module,exports){
module.exports=require(69)
},{"./attribute-extractor.js":247,"./vdom-ns.js":254,"./vnode.js":255,"js-ext/lib/object.js":222,"polyfill":234}],254:[function(require,module,exports){
module.exports=require(70)
},{"js-ext/lib/object.js":222,"polyfill":234}],255:[function(require,module,exports){
module.exports=require(71)
},{"./attribute-extractor.js":247,"./html-parser.js":252,"./vdom-ns.js":254,"js-ext/extra/lightmap.js":219,"js-ext/lib/array.js":220,"js-ext/lib/object.js":222,"js-ext/lib/string.js":224,"polyfill":234,"utils/lib/timers.js":237}],256:[function(require,module,exports){
module.exports=require(72)
},{"./partials/element-plugin.js":249,"./partials/extend-document.js":250,"./partials/extend-element.js":251,"./partials/node-parser.js":253,"js-ext/lib/object.js":222}],257:[function(require,module,exports){
function DOMParser(options){
	this.options = options ||{locator:{}};
	
}
DOMParser.prototype.parseFromString = function(source,mimeType){	
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var entityMap = {'lt':'<','gt':'>','amp':'&','quot':'"','apos':"'"}
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}
	
	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(/\/x?html?$/.test(mimeType)){
		entityMap.nbsp = '\xa0';
		entityMap.copy = '\xa9';
		defaultNSMap['']= 'http://www.w3.org/1999/xhtml';
	}
	if(source){
		sax.parse(source,defaultNSMap,entityMap);
	}else{
		sax.errorHandler.error("invalid document source");
	}
	return domBuilder.document;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn){
			if(isCallback){
				fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
			}else{
				var i=arguments.length;
				while(--i){
					if(fn = errorImpl[arguments[i]]){
						break;
					}
				}
			}
		}
		errorHandler[key] = fn && function(msg){
			fn(msg+_locator(locator));
		}||function(){};
	}
	build('warning','warn');
	build('error','warn','warning');
	build('fatalError','warn','warning','error');
	return errorHandler;
}
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler 
 * 
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */ 
DOMHandler.prototype = {
	startDocument : function() {
    	this.document = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.document.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.document;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;
	    
		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			if( attr.getOffset){
				position(attr.getOffset(1),attr)
			}
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
	    var tagName = current.tagName;
	    this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.document.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(this.currentElement && chars){
			if (this.cdata) {
				var charNode = this.document.createCDATASection(chars);
				this.currentElement.appendChild(charNode);
			} else {
				var charNode = this.document.createTextNode(chars);
				this.currentElement.appendChild(charNode);
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.document.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.document.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},
	
	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},
	
	startDTD:function(name, publicId, systemId) {
		var impl = this.document.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn(error,_locator(this.locator));
	},
	error:function(error) {
		console.error(error,_locator(this.locator));
	},
	fatalError:function(error) {
		console.error(error,_locator(this.locator));
	    throw error;
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.document.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

if(typeof require == 'function'){
	var XMLReader = require('./sax').XMLReader;
	var DOMImplementation = exports.DOMImplementation = require('./dom').DOMImplementation;
	exports.XMLSerializer = require('./dom').XMLSerializer ;
	exports.DOMParser = DOMParser;
}

},{"./dom":258,"./sax":259}],258:[function(require,module,exports){
/*
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 */

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(Object.create){
		var ppt = Object.create(Super.prototype)
		pt.__proto__ = ppt;
	}
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknow Class:"+Class)
		}
		pt.constructor = Class
	}
}
var htmlns = 'http://www.w3.org/1999/xhtml' ;
// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);


function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	}
};
function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
}

_extends(LiveNodeList,NodeList);
/**
 * 
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw DOMException(NOT_FOUND_ERR,new Error())
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		var i = this.length;
		while(i--){
			var attr = this[i];
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};
/**
 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
 */
function DOMImplementation(/* Object */ features) {
	this._features = {};
	if (features) {
		for (var feature in features) {
			 this._features = features[feature];
		}
	}
};

DOMImplementation.prototype = {
	hasFeature: function(/* string */ feature, /* string */ version) {
		var versions = this._features[feature.toLowerCase()];
		if (versions && (!version || version in versions)) {
			return true;
		} else {
			return false;
		}
	},
	// Introduced in DOM Level 2:
	createDocument:function(namespaceURI,  qualifiedName, doctype){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
		var doc = new Document();
		doc.doctype = doctype;
		if(doctype){
			doc.appendChild(doctype);
		}
		doc.implementation = this;
		doc.childNodes = new NodeList();
		if(qualifiedName){
			var root = doc.createElementNS(namespaceURI,qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	// Introduced in DOM Level 2:
	createDocumentType:function(qualifiedName, publicId, systemId){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId;
		node.systemId = systemId;
		// Introduced in DOM Level 2:
		//readonly attribute DOMString        internalSubset;
		
		//TODO:..
		//  readonly attribute NamedNodeMap     entities;
		//  readonly attribute NamedNodeMap     notations;
		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == 2?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == 2?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}
function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}
function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}
function _onUpdateChild(doc,el,newChild){
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if(newChild){
			cs[cs.length++] = newChild;
		}else{
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while(child){
				cs[i++] = child;
				child =child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode,child){
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if(previous){
		previous.nextSibling = next;
	}else{
		parentNode.firstChild = next
	}
	if(next){
		next.previousSibling = previous;
	}else{
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument,parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else{
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else{
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode,newChild){
	var cp = newChild.parentNode;
	if(cp){
		var pre = parentNode.lastChild;
		cp.removeChild(newChild);//remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if(pre){
		pre.nextSibling = newChild;
	}else{
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	doctype :  null,
	documentElement :  null,
	_inc : 1,
	
	insertBefore :  function(newChild, refChild){//raises 
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == 1){
			this.documentElement = newChild;
		}
		
		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == 1){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},
	
	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && node.namespaceURI === namespaceURI && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		//if(!(newChild instanceof CharacterData)){
			throw new Error(ExceptionMessage[3])
		//}
		return Node.prototype.appendChild.apply(this,arguments)
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node){
	var buf = [];
	serializeToString(node,buf);
	return buf.join('');
}
Node.prototype.toString =function(){
	return XMLSerializer.prototype.serializeToString(this);
}
function serializeToString(node,buf){
	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		var isHTML = htmlns === node.namespaceURI
		buf.push('<',nodeName);
		for(var i=0;i<len;i++){
			serializeToString(attrs.item(i),buf,isHTML);
		}
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				if(child){
					buf.push(child.data);
				}
			}else{
				while(child){
					serializeToString(child,buf);
					child = child.nextSibling;
				}
			}
			buf.push('</',nodeName,'>');
		}else{
			buf.push('/>');
		}
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child,buf);
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return buf.push(' ',node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');
	case TEXT_NODE:
		return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC "',pubid);
			if (sysid && sysid!='.') {
				buf.push( '" "',sysid);
			}
			buf.push('">');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM "',sysid,'">');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});
		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},
			set:function(data){
				switch(this.nodeType){
				case 1:
				case 11:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;
				default:
					//TODO:
					this.data = data;
					this.value = value;
					this.nodeValue = data;
				}
			}
		})
		
		function getTextContent(node){
			switch(node.nodeType){
			case 1:
			case 11:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}
		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

if(typeof require == 'function'){
	exports.DOMImplementation = DOMImplementation;
	exports.XMLSerializer = XMLSerializer;
}

},{}],259:[function(require,module,exports){
//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\u00B7\u0300-\u036F\\ux203F-\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_V
//S_ATTR_S,	S_E,	S_S,	S_C
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_S=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_V = 4;//attr value(no quot value only)
var S_E = 5;//attr value end and no space(quot end)
var S_S = 6;//(attr value end || tag end ) && (space offer)
var S_C = 7;//closed el<el />

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
  function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if(k in entityMap){
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
		locator&&position(start);
		domBuilder.characters(xt,0,end-start);
		start = end
	}
	function position(start,m){
		while(start>=endPos && (m = linePattern.exec(source))){
			startPos = m.index;
			endPos = startPos + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = start-startPos+1;
	}
	var startPos = 0;
	var endPos = 0;
	var linePattern = /.+(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		var i = source.indexOf('<',start);
		if(i<0){
			if(!source.substr(start).match(/^\s*$/)){
				var doc = domBuilder.document;
    			var text = doc.createTextNode(source.substr(start));
    			doc.appendChild(text);
    			domBuilder.currentElement = text;
			}
			return;
		}
		if(i>start){
			appendText(i);
		}
		switch(source.charAt(i+1)){
		case '/':
			var end = source.indexOf('>',i+3);
			var tagName = source.substring(i+2,end);
			var config = parseStack.pop();
			var localNSMap = config.localNSMap;

	        if(config.tagName != tagName){
	            errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName );
	        }
			domBuilder.endElement(config.uri,config.localName,tagName);
			if(localNSMap){
				for(var prefix in localNSMap){
					domBuilder.endPrefixMapping(prefix) ;
				}
			}
			end++;
			break;
			// end elment
		case '?':// <?...?>
			locator&&position(i);
			end = parseInstruction(source,i,domBuilder);
			break;
		case '!':// <!doctype,<![CDATA,<!--
			locator&&position(i);
			end = parseDCC(source,i,domBuilder,errorHandler);
			break;
		default:
			try{
				locator&&position(i);

				var el = new ElementAttributes();

				//elStartEnd
				var end = parseElementStartPart(source,i,el,entityReplacer,errorHandler);
				var len = el.length;
				//position fixed
				if(len && locator){
					var backup = copyLocator(locator,{});
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.offset = copyLocator(locator,{});
					}
					copyLocator(backup,locator);
				}
				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				appendElement(el,domBuilder,parseStack);


				if(el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed){
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				}else{
					end++;
				}
			}catch(e){
				errorHandler.error('element parse error: '+e);
				end = -1;
			}

		}
		if(end<0){
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(i+1);
		}else{
			start = end;
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;

}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,entityReplacer,errorHandler){
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_S){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName');
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ){//equal
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					el.add(attrName,value,start-1);
					s = S_E;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_V){
				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
				//console.log(attrName,value,start,p)
				el.add(attrName,value,start);
				//console.dir(el)
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_E
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="');
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_E:
			case S_S:
			case S_C:
				s = S_C;
				el.closed = true;
			case S_V:
			case S_ATTR:
			case S_ATTR_S:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')")
			}
			break;
		case ''://end document
			//throw new Error('unexpected end of input')
			errorHandler.error('unexpected end of input');
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_E:
			case S_S:
			case S_C:
				break;//normal
			case S_V://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_S:
				if(s === S_ATTR_S){
					value = attrName;
				}
				if(s == S_V){
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start)
				}else{
					errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					el.add(value,value,start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_S;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_S;
					break;
				case S_V:
					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value,start)
				case S_E:
					s = S_S;
					break;
				//case S_S:
				//case S_EQ:
				//case S_ATTR_S:
				//	void();break;
				//case S_C:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_V
//S_ATTR_S,	S_E,	S_S,	S_C
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_V:void();break;
				case S_ATTR_S:
					errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead!!')
					el.add(attrName,attrName,start);
					start = p;
					s = S_ATTR;
					break;
				case S_E:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_S:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_V;
					start = p;
					break;
				case S_C:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}
		p++;
	}
}
/**
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function appendElement(el,domBuilder,parseStack){
	var tagName = el.tagName;
	var localNSMap = null;
	var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = 'http://www.w3.org/2000/xmlns/'
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = 'http://www.w3.org/XML/1998/namespace';
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix]

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix)
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		parseStack.push(el);
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos = closeMap[tagName] = source.lastIndexOf('</'+tagName+'>')
	}
	return pos<elStartEnd;
	//}
}
function _copy(source,target){
	for(var n in source){target[n] = source[n]}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = len>3 && /^public$/i.test(matchs[2][0]) && matchs[3][0]
			var sysid = len>4 && matchs[4][0];
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name,pubid && pubid.replace(/^(['"])(.*?)\1$/,'$2'),
					sysid && sysid.replace(/^(['"])(.*?)\1$/,'$2'));
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

/**
 * @param source
 */
function ElementAttributes(source){

}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	add:function(qName,value,offset){
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getOffset:function(i){return this[i].offset},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}




function _set_proto_(thiz,parent){
	thiz.__proto__ = parent;
	return thiz;
}
if(!(_set_proto_({},_set_proto_.prototype) instanceof _set_proto_)){
	_set_proto_ = function(thiz,parent){
		function p(){};
		p.prototype = parent;
		p = new p();
		for(parent in thiz){
			p[parent] = thiz[parent];
		}
		return p;
	}
}

function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

if(typeof require == 'function'){
	exports.XMLReader = XMLReader;
}


},{}],260:[function(require,module,exports){
/*
* attributes:
* value, expanded, primary-button
*/
require('polyfill/polyfill-base.js');

module.exports = function (window) {

    "use strict";
    var itagsCore = require('itags.core')(window);
    itagsCore.defineElement('i-head');

};
},{"itags.core":268,"polyfill/polyfill-base.js":211}],261:[function(require,module,exports){
/*
* attributes:
* value, expanded, primary-button
*/
require('polyfill/polyfill-base.js');

module.exports = function (window) {

    "use strict";
    var itagsCore = require('itags.core')(window);
    itagsCore.defineElement('i-item');

};
},{"itags.core":268,"polyfill/polyfill-base.js":211}],262:[function(require,module,exports){
// See for all prototypes: https://developer.mozilla.org/en-US/docs/Web/API
require('polyfill/polyfill-base.js');

module.exports = function (window) {

    "use strict";
    var itagsCore = require('itags.core')(window),
        Event = require('event-dom')(window);

    Event.after('click', function(e) {
        e.target.setAttr('value', 'I am clicked i-parcel-userdata!');
    }, 'i-parcel-userdata');

    itagsCore.defineParcel(
        'userdata',
        function() {
console.info('renderFunc i-parcel');
            this.setHTML('I am <b>'+this.getTagName()+'</b> '+this.dummy+' modeldata.b: '+this.getData('modeldata').b);
            this.after('dblclick', this.msg);
        },
        {
            init: function() {
                console.info('initFunc');
            },
            destroy: function() {
                console.info('destroyFunc');
            },
            dummy: 10,
            msg: function() {
                this.setAttr('value', 'I am double clicked!');
            }
        }
    );

};
},{"event-dom":6,"itags.core":268,"polyfill/polyfill-base.js":211}],263:[function(require,module,exports){
var css = "var css = \"/* ======================================================================= */\\n/* ======================================================================= */\\n/* ======================================================================= */\\n/* Definition of itag shadow-css is done by defining a `dummy` css-rule    */\\n/* for the dummy-element: `itag-css` --> its property (also dummy) `i-tag` /*\\n/* will define which itag will be css-shadowed                             /*\\n/* ======================================================================= */\\nitag-css {\\n    i-tag: i-select;  /* set the property-value to the proper itag */\\n}\\n/* ======================================================================= */\\n/* ======================================================================= */\\n/* ======================================================================= */\\n\\n\\n/* ================================= */\\n/* set invisiblity when not rendered */\\n/* ================================= */\\ni-select:not(.itag-rendered) {\\n    /* don't set visibility to hidden --> you cannot set a focus on those items */\\n    opacity: 0 !important;\\n    position: absolute !important;\\n    left: -9999px !important;\\n    top: -9999px !important;\\n    z-index: -1;\\n}\\n\\ni-select:not(.itag-rendered) * {\\n    opacity: 0 !important;\\n}\\n/* ================================= */\\n\\n\\ni-select > div {\\n    position: relative;\\n}\\n\\ni-select > button.pure-button {\\n    -webkit-touch-callout: none;\\n    -webkit-user-select: none;\\n    -khtml-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n    position: relative;\\n    padding-right: 1.45em;\\n    padding-left: 0;\\n    max-width: 6em;\\n}\\n\\ni-select > button div.btntext {\\n    margin: 0 0.25em 0 1em;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    max-width: 6em;\\n}\\n\\ni-select > button div.pointer {\\n    border-left: 0.4em solid rgba(0, 0, 0, 0);\\n    border-right: 0.4em solid rgba(0, 0, 0, 0);\\n    border-top: 0.5em solid #000;\\n    right: 0.25em;\\n    position: absolute;\\n    bottom: 0.2em;\\n}\\n\\ni-select > div > div {\\n    position: absolute;\\n    z-index: 2;\\n    left: 0;\\n    top: 0;\\n    cursor: pointer;\\n    border-style: solid;\\n    border-width: 0.1em;\\n    -webkit-border-radius: 0 0 0.3em 0.3em;\\n    -moz-border-radius: 0 0 0.3em 0.3em;\\n    border-radius: 0 0 0.3em 0.3em;\\n    -webkit-box-shadow: 0.3em 0.3em 5px rgba(0,0,0,0.15);\\n    -moz-box-shadow: 0.3em 0.3em 5px rgba(0,0,0,0.15);\\n    box-shadow: 0.3em 0.3em 5px rgba(0,0,0,0.15);\\n}\\n\\ni-select ul {\\n    font-size: 1.2em;\\n    padding: 0 0 0.3em;\\n    list-style: none;\\n    margin: 0;\\n}\\n\\ni-select li {\\n    padding: 0.25em 0.7em;\\n}\\n\\ni-select li.focussed {\\n    background-color: #B3D4FF;\\n}\\n\\ni-select li.selected:before {\\n    content: '*';\\n    margin-left: -0.7em;\\n    padding-right: 0.25em;\\n}\\n\\ni-select li:before,\\ni-select li:after {\\n    content: '';\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n/* color specification:; */\\n\\ni-select > div > div {\\n    background-color: #FFF;\\n    border-color: #000;\\n}\\n\\ni-select li:hover {\\n    background-color: #B3D4FF;\\n}\\n\\ni-select > button.pure-button-primary div.pointer {\\n    border-top: 0.5em solid #FEFEFE;\\n}\"; (require(\"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify\"))(css); module.exports = css;"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],264:[function(require,module,exports){
/*
* attributes:
* value, expanded, primary-button
*/
require('polyfill/polyfill-base.js');
require('js-ext/lib/string.js');
require('css');
require('./css/i-select.css');

var TRANS_TIME_SHOW = 0.3,
    TRANS_TIME_HIDE = 0.1,
    CLASS_ITAG_RENDERED = 'itag-rendered';

module.exports = function (window) {

    "use strict";
    var itagsCore = require('itags.core')(window),
        Event = require('event-dom')(window),
        DEFAULT_INVALID_VALUE = 'choose';

    require('focusmanager')(window);
    require('i-item')(window);
    require('i-head')(window);

    Event.before('manualfocus', function(e) {
        // the i-select itself is unfocussable, but its button is
        // we need to patch `manualfocus`,
        // which is emitted on node.focus()
        // a focus by userinteraction will always appear on the button itself
        // so we don't bother that
        var element = e.target;
        // cautious:  all child-elements that have `manualfocus` event are
        // subscribed as well: we NEED to inspect e.target and only continue
        // if e.target===i-select
        if (e.target.getTagName()==='I-SELECT') {
            e.preventDefault();
            element.itagReady().then(
                function() {
                    var button = element.getElement('button');
                    button && button.focus();
                }
            );
        }
    }, 'i-select');

    Event.after(['click', 'keydown'], function(e) {
        var element = e.target.getParent(),
            expanded, value, liNodes, focusNode;
        if ((e.type==='click') || (e.keyCode===40)) {
            expanded = element.model.expanded;
            value = element.model.value;
            if (!expanded) {
                liNodes = element.getAll('ul[fm-manage] > li');
                focusNode = liNodes[value-1];
                focusNode && focusNode.focus();
            }
            element.setAttr('expanded', expanded ? 'false' : 'true');
        }
    }, 'i-select > button');

    Event.after(['click', 'keypress'], function(e) {
        var liNode = e.target,
            element, index;
        if ((e.type==='click') || (e.keyCode===13)) {
            element = liNode.inside('i-select');
            index = liNode.getParent().getAll('li').indexOf(liNode);
            element.setAttrs([
                {name: 'expanded', value: 'false'},
                {name: 'value', value: index+1}
            ]);
            element.getElement('button').focus();
        }
    }, 'i-select ul[fm-manage] > li');

    itagsCore.defineItag('i-select', function() {
        var element = this,
            model = element.model,
            items = model.items,
            buttonTexts = model.buttonTexts,
            expanded, primaryButton, valueString, value, invalidValue,
            item, content, buttonText, len, i, markValue,
            button, container, itemsContainer, renderedBefore;

        // read the current state of the attributes:
        expanded = (element.getAttr('expanded')==='true');
        primaryButton = (element.getAttr('primary-button')==='true');
        valueString = element.getAttr('value');
        value = valueString.validateNumber() ? Math.max(0, parseInt(valueString, 10)) : 0;
        invalidValue = (element.getAttr('invalid-value') || DEFAULT_INVALID_VALUE);

        // store the state inside element.model:
        model.expanded = expanded;
        model.primaryButton = primaryButton;
        model.value = value;
        model.invalidValue = invalidValue;

        len = items.length;
        (value>len) && (value=0);
        markValue = value - 1;

        if (value>0) {
            buttonText = buttonTexts[markValue] || items[markValue];
        }
        else {
            buttonText = invalidValue;
        }

        // rebuild the button:
        button = element.getElement('button');
        button.toggleClass('pure-button-primary', primaryButton);
        button.getElement('div.btntext').setHTML(buttonText);

        // show or hide the content, note that when not rendered before, you should use transitions
        renderedBefore = element.hasClass(CLASS_ITAG_RENDERED);
        container = element.getElement('>div');
        if (expanded) {
            container.show(renderedBefore ? TRANS_TIME_SHOW : null);
        }
        else {
            container.hide(renderedBefore ? TRANS_TIME_HIDE : null);
        }

        itemsContainer = element.getElement('ul[fm-manage]');
        content = '';
        for (i=0; i<len; i++) {
            item = items[i];
            content += '<li'+((i===markValue) ? ' class="selected"' : '')+'>'+item+'</li>';
        }

        // set the items:
        itemsContainer.setHTML(content);
    }, {
        init: function() {
            var element = this,
                itemNodes = element.getAll('>i-item'),
                items = [],
                buttonTexts = [],
                content;

            itemNodes.forEach(function(node, i) {
                var header = node.getElement('i-head');
                if (header) {
                    buttonTexts[i] = header.getHTML();
                    header.remove(true);
                }
                items[items.length] = node.getHTML();
            });
            element.model.items = items;
            element.model.buttonTexts = buttonTexts;

            // building the template of the itag:
            content = '<button class="pure-button pure-button-bordered"><div class="pointer"></div><div class="btntext"></div></button>';
            // first: outerdiv which will be relative positioned
            // next: innerdiv which will be absolute positioned
            // also: hide the container by default --> updateUI could make it shown
            content += '<div class="itsa-hidden">' +
                         '<div>'+
                           '<ul fm-manage="li" fm-keyup="38" fm-keydown="40" fm-noloop="true"></ul>';
                         '</div>'+
                       '</div>';
            // set the content:
            element.setHTML(content);
        }
    });

};
},{"./css/i-select.css":263,"css":4,"event-dom":6,"focusmanager":73,"i-head":260,"i-item":261,"itags.core":268,"js-ext/lib/string.js":199,"polyfill/polyfill-base.js":211}],265:[function(require,module,exports){
var css = "var css = \"\"; (require(\"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify\"))(css); module.exports = css;"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],266:[function(require,module,exports){
/*
* attributes:
* value, expanded, primary-button
*/
require('polyfill/polyfill-base.js');
require('js-ext/lib/string.js');
require('css');
require('./css/i-tabpane.css');

var TRANS_TIME_SHOW = 0.3,
    TRANS_TIME_HIDE = 0.1,
    CLASS_ITAG_RENDERED = 'itag-rendered';

module.exports = function (window) {

    "use strict";
    var itagsCore = require('itags.core')(window),
        Event = require('event-dom')(window);

    // require('focusmanager')(window);
    require('i-item')(window);
    require('i-head')(window);

    window.document.createItag('i-tabpane');

    // window.HTMLElement.prototype.subClass('i-tabpane', function() {
        // console.warn('constructor itabpane');
    // });

};
},{"./css/i-tabpane.css":265,"css":4,"event-dom":6,"i-head":260,"i-item":261,"itags.core":268,"js-ext/lib/string.js":199,"polyfill/polyfill-base.js":211}],267:[function(require,module,exports){
var css = "var css = \"span.itag-data {\\n    display: none !important;\\n}\"; (require(\"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify\"))(css); module.exports = css;"; (require("/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify"))(css); module.exports = css;
},{"/Volumes/Data/Marco/Documenten Marco/GitHub/itags.contributor/node_modules/cssify":5}],268:[function(require,module,exports){
(function (global){

/*jshint proto:true */

"use strict";

require('js-ext');
require('polyfill/polyfill-base.js');
require('./css/itags.core.css');

var asyncSilent = require('utils').asyncSilent,
    laterSilent = require('utils').laterSilent,
    CLASS_ITAG_RENDERED = 'itag-rendered',
    NODE = 'node',
    REMOVE = 'remove',
    INSERT = 'insert',
    CHANGE = 'change',
    ATTRIBUTE = 'attribute',
    NODE_REMOVED = NODE+REMOVE,
    NODE_INSERTED = NODE+INSERT,
    NODE_CONTENT_CHANGE = NODE+'content'+CHANGE,
    ATTRIBUTE_REMOVED = ATTRIBUTE+REMOVE,
    ATTRIBUTE_CHANGED = ATTRIBUTE+CHANGE,
    ATTRIBUTE_INSERTED = ATTRIBUTE+INSERT,
    DELAYED_FINALIZE_EVENTS = {
        'mousedown': true,
        'mouseup': true,
        'mousemove': true,
        'panmove': true,
        'panstart': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        'pinchmove': true,
        'rotatemove': true,
        'focus': true,
        'blur': true,
        'keydown': true,
        'keyup': true,
        'keypress': true
    },
    DELAYED_EVT_TIME = 1000,
    merge = function (sourceObj, targetObj) {
        var name;
        for (name in sourceObj) {
            if (name==='init') {
                targetObj._initUI = sourceObj.init;
            }
            else if (name==='destroy') {
                targetObj._destroyUI = sourceObj.destroy;
            }
            else if (name==='render') {
/*jshint -W083 */
                targetObj.renderUI = sourceObj.render;
            }
            else {
                targetObj[name] = sourceObj[name];
            }
        }
    },
    mergeFlat = function() {

    },
    NOOP = function() {},
    // Define configurable, writable and non-enumerable props
    // if they don't exist.
    defineUnNumerableProperty = function (object, name, method) {
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: method
        });
    },
    ITAG_METHODS = {
        init: true,
        render: true,
        destroy: true
    },
    ITAG_SPECIAL_METHODS = {
        init: true,
        destroy: true
    },
    DEFAULT_METHODS = {
        initUI: function() {
            var instance = this,
                vnode = instance.vnode,
                superInit;
            if (!vnode.ce_initialized && !vnode.removedFromDOM && !vnode.ce_destroyed) {
                superInit = function(obj) {
                    if (obj.$super) {
                        superInit(obj.$super);
                    }
                    obj.hasOwnProperty('_initUI') && obj._initUI.call(instance);
                };
                superInit(instance);
                Object.protectedProp(vnode, 'ce_initialized', true);
            }
        },
        _initUI: NOOP,
        _destroyUI: NOOP,
        renderUI: NOOP,
        destroyUI: function() {
            var instance = this,
                vnode = instance.vnode,
                superDestroy;
            instance.detachAll();
            if (vnode.removedFromDOM && vnode.ce_initialized && !vnode.ce_destroyed) {
                superDestroy = function(obj) {
                    obj.hasOwnProperty('_destroyUI') && obj._destroyUI.call(instance);
                    if (obj.$super) {
                        superDestroy(obj.$super);
                    }
                };
                superDestroy(instance);
                Object.protectedProp(vnode, 'ce_destroyed', true);
            }
        }
    };

DELAYED_FINALIZE_EVENTS.keys().forEach(function(key) {
    DELAYED_FINALIZE_EVENTS[key+'outside'] = true;
});

module.exports = function (window) {

    var DOCUMENT = window.document,
        PROTOTYPE_CHAIN_CAN_BE_SET = arguments[1], // hidden feature, used by unit-test
        RUNNING_ON_NODE = (typeof global !== 'undefined') && (global.window!==window),
        PROTO_SUPPORTED = !!Object.__proto__,
        itagCore, MUTATION_EVENTS, Event, registerDelay, focusManager;

    require('vdom')(window);
    Event = require('event-dom')(window);

/*jshint boss:true */
    if (itagCore=window._ItagCore) {
/*jshint boss:false */
        return itagCore; // itagCore was already defined
    }

    Object.protectedProp(window, 'ITAGS', {}); // for the ProtoConstructors
    DEFAULT_METHODS.merge(Event.Listener);

    MUTATION_EVENTS = [NODE_REMOVED, NODE_INSERTED, NODE_CONTENT_CHANGE, ATTRIBUTE_REMOVED, ATTRIBUTE_CHANGED, ATTRIBUTE_INSERTED];

    focusManager = function(element) {
        var focusManagerNode = element.getElement('[focusmanager].focussed');
        focusManagerNode && focusManagerNode.focus();
    };

    itagCore = {

        itagFilter: function(e) {
            return !!e.target._updateUI;
        },

        _renderDomElements: function(tagName, updateFn, properties, isParcel) {
            var itagElements = DOCUMENT.getAll(tagName),
                len = itagElements.length,
                i, itagElement;
            for (i=0; i<len; i++) {
                itagElement = itagElements[i];
                this._upgradeElement(itagElement, updateFn, properties, isParcel);
            }
        },

        defineParcel: function(parcelName, updateFn, properties) {
            if (parcelName.contains('-')) {
                console.warn(parcelName+' should not consist of a minus token');
                return;
            }
            this._defineElement('i-parcel-'+parcelName, updateFn, properties, true);
        },


        defineElement: function(itagName) {
            if (!itagName.contains('-')) {
                console.warn('defineElement: '+itagName+' should consist of a minus token');
                return;
            }
            window.ITAGS[itagName] = function() {
                return DOCUMENT._createElement(itagName);
            };
        },

        defineItag: function(itagName, updateFn, properties) {
            if (!itagName.contains('-')) {
                console.warn('defineItag: '+itagName+' should consist of a minus token');
                return;
            }
            this._defineElement(itagName, updateFn, properties);
        },

        _defineElement: function(itagName, updateFn, properties, isParcel) {
            itagName = itagName.toLowerCase();
            if (window.ITAGS[itagName]) {
                console.warn(itagName+' already exists and cannot be redefined');
                return;
            }
            (typeof updateFn === 'function') || (updateFn=NOOP);
            this._renderDomElements(itagName, updateFn, properties, isParcel);
            window.ITAGS[itagName] = this._createElement(itagName, updateFn, properties, isParcel);
        },

        _createElement: function(itagName, updateFn, properties, isParcel) {
            var instance = this;
            return function() {
                var element = DOCUMENT._createElement(itagName);
                instance._upgradeElement(element, updateFn, properties, isParcel);
                return element;
            };
        },

        _upgradeElement: function(element, updateFn, properties, isParcel) {
            merge(properties, element);
            merge({
                _updateUI: isParcel ? function() {
                        var vnode = element.vnode;
                        if (vnode._data) {
                            if (!vnode.ce_initialized) {
                                if (typeof element._init==='function') {
                                    element._init();
                                }
                                else {
                                    Object.protectedProp(vnode, 'ce_initialized', true);
                                }
                                element._setRendered();
                            }
                            updateFn.call(element);
                        }
                    } : updateFn,
                _injectModel: function(model) {
                    var instance = this,
                        stringifiedData;
                    instance.model = model;
                    instance._updateUI();
                    if (RUNNING_ON_NODE) {
                        // store the modeldata inside an inner div-node
                        try {
                            stringifiedData = JSON.stringify(model);
                            instance.prepend('<span class="itag-data">'+stringifiedData+'</span>');
                        }
                        catch(e) {
                            console.warn(e);
                        }
                    }
                },
                _retrieveModel: function() {
                    // try to load the model from a stored inner div-node
                    var instance = this,
                        dataNode = instance.getElement('span.itag-data'),
                        stringifiedData;
                    if (dataNode) {
                        try {
                            stringifiedData = dataNode.getHTML();
                            instance.model = JSON.parseWithDate(stringifiedData);
                            dataNode.remove(true);
                        }
                        catch(e) {
                            console.warn(e);
                        }
                    }
                    return instance.model;
                },
                _setRendered: function() {
                    var instance = this;
                    if (instance.hasClass(CLASS_ITAG_RENDERED)) {
                        // already rendered on the server:
                        // bin the sored json-data on the property `model`:
                        instance.retrieveModel();
                    }
                    else {
                        instance.setClass(CLASS_ITAG_RENDERED, null, null, true);
                    }
                    instance._itagReady || (instance._itagReady=window.Promise.manage());
                    instance._itagReady.fulfill();
                },
                model: {}
            }, element);
            merge(Event.Listener, element);
            // render, but do this after the element is created:
            // in the next eventcycle:
            asyncSilent(function() {
                (typeof element._init==='function') && element._init();
                element._updateUI();
                isParcel || element._setRendered();
                element.hasClass('focussed') && focusManager(element);
            });
        }

    };

    DOCUMENT._createElement = DOCUMENT.createElement;
    DOCUMENT.createElement = function(tag) {
        var ItagClass = window.ITAGS[tag.toLowerCase()];
        if (ItagClass) {
            return new ItagClass();
        }
        return this._createElement(tag);
    };












    var SubItag = function(itagName, itagPrototypes) {
    console.info('subItag '+arguments.length);
        var instance = this,
            parentProto, proto, domElementConstructor;

        itagName = itagName.toLowerCase();
        if (window.ITAGS[itagName]) {
            console.warn(itagName+' already exists and cannot be redefined');
            return;
        }

        if (instance.SuperProto) {
            parentProto = instance.SuperProto;
            proto = Object.create(parentProto);
        }
        else {
            parentProto = Object.create(window.HTMLElement.prototype);
            merge(DEFAULT_METHODS, parentProto);
            proto = Object.create(parentProto);
        }
        proto = Object.create(parentProto);
        merge(itagPrototypes, proto);

        proto.$super = parentProto;
        proto.$orig = {};

        // merge some system function in case they don't exists
        domElementConstructor = function() {
            var domElement = DOCUMENT._createElement(itagName);

            if (PROTO_SUPPORTED) {
                domElement.__proto__ = proto;
            }
            else {
                mergeFlat(itagPrototypes, domElement);
            }
console.info(parentProto.init);
            domElement.initUI();

            domElement.$super = proto;
            domElement.$orig = {};
            return domElement;
        };

        domElementConstructor.SuperProto = proto;
        domElementConstructor.subItag = SubItag;
        // domElementConstructor.$super = ProtoConstructor.$super;
        // domElementConstructor.$orig = ProtoConstructor.$orig;

        window.ITAGS[itagName] = domElementConstructor;
        return domElementConstructor;
    };










    Object.protectedProp(DOCUMENT, 'createItag', function (tagName, prototypes) {
        return new SubItag(tagName, prototypes);
    });

    (function(HTMLElementPrototype) {
        HTMLElementPrototype.isItag = function() {
            return !!this.vnode.tag.startsWith('I-');
        };
        HTMLElementPrototype.itagReady = function() {
            var instance = this;
            if (!instance.isItag()) {
                console.warn('itagReady() invoked on a non-itag element');
                return window.Promise.reject('Element is no itag');
            }
            instance._itagReady || (instance._itagReady=window.Promise.manage());
            return instance._itagReady;
        };
    }(window.HTMLElement.prototype));

    DOCUMENT.refreshParcels = function() {
        var list = this.getParcels(),
            len = list.length,
            i, parcel;
        for (i=0; i<len; i++) {
            parcel = list[i];
            parcel.renderUI();
            parcel.hasClass('focussed') && focusManager(parcel);
        }
    };

    Event.after(
        [ATTRIBUTE_CHANGED, ATTRIBUTE_INSERTED, ATTRIBUTE_REMOVED],
        function(e) {
            var element = e.target;
            element.renderUI();
            element.hasClass('focussed') && focusManager(element);
        },
        itagCore.itagFilter
    );

    Event.after(
        NODE_REMOVED,
        function(e) {
            var node = e.target;
console.info('NODE IS REMOVED');
            (typeof node.destroyUI==='function') && node.destroyUI();
            node.detachAll();
        }
        // itagCore.itagFilter
    );

    Event.finalize(function(e) {
        if (DELAYED_FINALIZE_EVENTS[e.type]) {
            registerDelay || (registerDelay = laterSilent(function() {
                DOCUMENT.refreshParcels();
                registerDelay = null;
            }, DELAYED_EVT_TIME));
        }
        else {
            DOCUMENT.refreshParcels();
        }
    });

    // we patch the window timer functions in order to run `refreshParcels` afterwards:
    window._setTimeout = window.setTimeout;
    window._setInterval = window.setInterval;

    window.setTimeout = function() {
        var args = arguments;
        args[0] = (function(originalFn) {
            return function() {
                console.info('setTimeout');
                originalFn();
                DOCUMENT.refreshParcels();
            };
        })(args[0]);
        window._setTimeout.apply(this, arguments);
    };

    window.setInterval = function() {
        var args = arguments;
        args[0] = (function(originalFn) {
            return function() {
                originalFn();
                DOCUMENT.refreshParcels();
            };
        })(args[0]);
        window._setInterval.apply(this, arguments);
    };

    if (typeof window.setImmediate !== 'undefined') {
        window._setImmediate = window.setImmediate;
        window.setImmediate = function() {
            var args = arguments;
            args[0] = (function(originalFn) {
                return function() {
                    originalFn();
                    DOCUMENT.refreshParcels();
                };
            })(args[0]);
            window._setImmediate.apply(this, arguments);
        };
    }

    Object.protectedProp(window, '_ItagCore', itagCore);

    if (PROTOTYPE_CHAIN_CAN_BE_SET) {
        itagCore.setPrototypeChain = function(activate) {
            PROTO_SUPPORTED = activate ? !!Object.__proto__ : false;
        };
    }

    return itagCore;

};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./css/itags.core.css":267,"event-dom":6,"js-ext":193,"polyfill/polyfill-base.js":211,"utils":212,"vdom":256}],269:[function(require,module,exports){

},{}],270:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
var TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str.toString()
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.compare = function (a, b) {
  assert(Buffer.isBuffer(a) && Buffer.isBuffer(b), 'Arguments must be Buffers')
  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) {
    return -1
  }
  if (y < x) {
    return 1
  }
  return 0
}

// BUFFER INSTANCE METHODS
// =======================

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end === undefined) ? self.length : Number(end)

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = asciiSlice(self, start, end)
      break
    case 'binary':
      ret = binarySlice(self, start, end)
      break
    case 'base64':
      ret = base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.equals = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.compare = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return readUInt16(this, offset, false, noAssert)
}

function readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return readInt16(this, offset, false, noAssert)
}

function readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return readInt32(this, offset, false, noAssert)
}

function readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return readFloat(this, offset, false, noAssert)
}

function readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
  return offset + 1
}

function writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
  return offset + 2
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, false, noAssert)
}

function writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
  return offset + 4
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
  return offset + 1
}

function writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
  return offset + 2
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, false, noAssert)
}

function writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
  return offset + 4
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, false, noAssert)
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":271,"ieee754":272}],271:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],272:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],273:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],274:[function(require,module,exports){
var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request = require('./lib/request');
var url = require('url')

http.request = function (params, cb) {
    if (typeof params === 'string') {
        params = url.parse(params)
    }
    if (!params) params = {};
    if (!params.host && !params.port) {
        params.port = parseInt(window.location.port, 10);
    }
    if (!params.host && params.hostname) {
        params.host = params.hostname;
    }
    
    if (!params.scheme) params.scheme = window.location.protocol.split(':')[0];
    if (!params.host) {
        params.host = window.location.hostname || window.location.host;
    }
    if (/:/.test(params.host)) {
        if (!params.port) {
            params.port = params.host.split(':')[1];
        }
        params.host = params.host.split(':')[0];
    }
    if (!params.port) params.port = params.scheme == 'https' ? 443 : 80;
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();

http.STATUS_CODES = {
    100 : 'Continue',
    101 : 'Switching Protocols',
    102 : 'Processing',                 // RFC 2518, obsoleted by RFC 4918
    200 : 'OK',
    201 : 'Created',
    202 : 'Accepted',
    203 : 'Non-Authoritative Information',
    204 : 'No Content',
    205 : 'Reset Content',
    206 : 'Partial Content',
    207 : 'Multi-Status',               // RFC 4918
    300 : 'Multiple Choices',
    301 : 'Moved Permanently',
    302 : 'Moved Temporarily',
    303 : 'See Other',
    304 : 'Not Modified',
    305 : 'Use Proxy',
    307 : 'Temporary Redirect',
    400 : 'Bad Request',
    401 : 'Unauthorized',
    402 : 'Payment Required',
    403 : 'Forbidden',
    404 : 'Not Found',
    405 : 'Method Not Allowed',
    406 : 'Not Acceptable',
    407 : 'Proxy Authentication Required',
    408 : 'Request Time-out',
    409 : 'Conflict',
    410 : 'Gone',
    411 : 'Length Required',
    412 : 'Precondition Failed',
    413 : 'Request Entity Too Large',
    414 : 'Request-URI Too Large',
    415 : 'Unsupported Media Type',
    416 : 'Requested Range Not Satisfiable',
    417 : 'Expectation Failed',
    418 : 'I\'m a teapot',              // RFC 2324
    422 : 'Unprocessable Entity',       // RFC 4918
    423 : 'Locked',                     // RFC 4918
    424 : 'Failed Dependency',          // RFC 4918
    425 : 'Unordered Collection',       // RFC 4918
    426 : 'Upgrade Required',           // RFC 2817
    428 : 'Precondition Required',      // RFC 6585
    429 : 'Too Many Requests',          // RFC 6585
    431 : 'Request Header Fields Too Large',// RFC 6585
    500 : 'Internal Server Error',
    501 : 'Not Implemented',
    502 : 'Bad Gateway',
    503 : 'Service Unavailable',
    504 : 'Gateway Time-out',
    505 : 'HTTP Version Not Supported',
    506 : 'Variant Also Negotiates',    // RFC 2295
    507 : 'Insufficient Storage',       // RFC 4918
    509 : 'Bandwidth Limit Exceeded',
    510 : 'Not Extended',               // RFC 2774
    511 : 'Network Authentication Required' // RFC 6585
};
},{"./lib/request":275,"events":273,"url":299}],275:[function(require,module,exports){
var Stream = require('stream');
var Response = require('./response');
var Base64 = require('Base64');
var inherits = require('inherits');

var Request = module.exports = function (xhr, params) {
    var self = this;
    self.writable = true;
    self.xhr = xhr;
    self.body = [];
    
    self.uri = (params.scheme || 'http') + '://'
        + params.host
        + (params.port ? ':' + params.port : '')
        + (params.path || '/')
    ;
    
    if (typeof params.withCredentials === 'undefined') {
        params.withCredentials = true;
    }

    try { xhr.withCredentials = params.withCredentials }
    catch (e) {}
    
    if (params.responseType) try { xhr.responseType = params.responseType }
    catch (e) {}
    
    xhr.open(
        params.method || 'GET',
        self.uri,
        true
    );

    self._headers = {};
    
    if (params.headers) {
        var keys = objectKeys(params.headers);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!self.isSafeRequestHeader(key)) continue;
            var value = params.headers[key];
            self.setHeader(key, value);
        }
    }
    
    if (params.auth) {
        //basic auth
        this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
    }

    var res = new Response;
    res.on('close', function () {
        self.emit('close');
    });
    
    res.on('ready', function () {
        self.emit('response', res);
    });
    
    xhr.onreadystatechange = function () {
        // Fix for IE9 bug
        // SCRIPT575: Could not complete the operation due to error c00c023f
        // It happens when a request is aborted, calling the success callback anyway with readyState === 4
        if (xhr.__aborted) return;
        res.handle(xhr);
    };
};

inherits(Request, Stream);

Request.prototype.setHeader = function (key, value) {
    this._headers[key.toLowerCase()] = value
};

Request.prototype.getHeader = function (key) {
    return this._headers[key.toLowerCase()]
};

Request.prototype.removeHeader = function (key) {
    delete this._headers[key.toLowerCase()]
};

Request.prototype.write = function (s) {
    this.body.push(s);
};

Request.prototype.destroy = function (s) {
    this.xhr.__aborted = true;
    this.xhr.abort();
    this.emit('close');
};

Request.prototype.end = function (s) {
    if (s !== undefined) this.body.push(s);

    var keys = objectKeys(this._headers);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this._headers[key];
        if (isArray(value)) {
            for (var j = 0; j < value.length; j++) {
                this.xhr.setRequestHeader(key, value[j]);
            }
        }
        else this.xhr.setRequestHeader(key, value)
    }

    if (this.body.length === 0) {
        this.xhr.send('');
    }
    else if (typeof this.body[0] === 'string') {
        this.xhr.send(this.body.join(''));
    }
    else if (isArray(this.body[0])) {
        var body = [];
        for (var i = 0; i < this.body.length; i++) {
            body.push.apply(body, this.body[i]);
        }
        this.xhr.send(body);
    }
    else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
        var len = 0;
        for (var i = 0; i < this.body.length; i++) {
            len += this.body[i].length;
        }
        var body = new(this.body[0].constructor)(len);
        var k = 0;
        
        for (var i = 0; i < this.body.length; i++) {
            var b = this.body[i];
            for (var j = 0; j < b.length; j++) {
                body[k++] = b[j];
            }
        }
        this.xhr.send(body);
    }
    else {
        var body = '';
        for (var i = 0; i < this.body.length; i++) {
            body += this.body[i].toString();
        }
        this.xhr.send(body);
    }
};

// Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
Request.unsafeHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "cookie2",
    "content-transfer-encoding",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "user-agent",
    "via"
];

Request.prototype.isSafeRequestHeader = function (headerName) {
    if (!headerName) return false;
    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
};

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var indexOf = function (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
};

},{"./response":276,"Base64":277,"inherits":279,"stream":298}],276:[function(require,module,exports){
var Stream = require('stream');
var util = require('util');

var Response = module.exports = function (res) {
    this.offset = 0;
    this.readable = true;
};

util.inherits(Response, Stream);

var capable = {
    streaming : true,
    status2 : true
};

function parseHeaders (res) {
    var lines = res.getAllResponseHeaders().split(/\r?\n/);
    var headers = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line === '') continue;
        
        var m = line.match(/^([^:]+):\s*(.*)/);
        if (m) {
            var key = m[1].toLowerCase(), value = m[2];
            
            if (headers[key] !== undefined) {
            
                if (isArray(headers[key])) {
                    headers[key].push(value);
                }
                else {
                    headers[key] = [ headers[key], value ];
                }
            }
            else {
                headers[key] = value;
            }
        }
        else {
            headers[line] = true;
        }
    }
    return headers;
}

Response.prototype.getResponse = function (xhr) {
    var respType = String(xhr.responseType).toLowerCase();
    if (respType === 'blob') return xhr.responseBlob || xhr.response;
    if (respType === 'arraybuffer') return xhr.response;
    return xhr.responseText;
}

Response.prototype.getHeader = function (key) {
    return this.headers[key.toLowerCase()];
};

Response.prototype.handle = function (res) {
    if (res.readyState === 2 && capable.status2) {
        try {
            this.statusCode = res.status;
            this.headers = parseHeaders(res);
        }
        catch (err) {
            capable.status2 = false;
        }
        
        if (capable.status2) {
            this.emit('ready');
        }
    }
    else if (capable.streaming && res.readyState === 3) {
        try {
            if (!this.statusCode) {
                this.statusCode = res.status;
                this.headers = parseHeaders(res);
                this.emit('ready');
            }
        }
        catch (err) {}
        
        try {
            this._emitData(res);
        }
        catch (err) {
            capable.streaming = false;
        }
    }
    else if (res.readyState === 4) {
        if (!this.statusCode) {
            this.statusCode = res.status;
            this.emit('ready');
        }
        this._emitData(res);
        
        if (res.error) {
            this.emit('error', this.getResponse(res));
        }
        else this.emit('end');
        
        this.emit('close');
    }
};

Response.prototype._emitData = function (res) {
    var respBody = this.getResponse(res);
    if (respBody.toString().match(/ArrayBuffer/)) {
        this.emit('data', new Uint8Array(respBody, this.offset));
        this.offset = respBody.byteLength;
        return;
    }
    if (respBody.length > this.offset) {
        this.emit('data', respBody.slice(this.offset));
        this.offset = respBody.length;
    }
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

},{"stream":298,"util":301}],277:[function(require,module,exports){
;(function () {

  var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error;
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '');
    if (input.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());

},{}],278:[function(require,module,exports){
var http = require('http');

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    return http.request.call(this, params, cb);
}

},{"http":274}],279:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],280:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],281:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],282:[function(require,module,exports){
(function (global){
/*! http://mths.be/punycode v1.2.4 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings.
	 * @private
	 * @param {String} domain The domain name.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <http://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols to a Punycode string of ASCII-only
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name to Unicode. Only the
	 * Punycoded parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it on a string that has already been converted to
	 * Unicode.
	 * @memberOf punycode
	 * @param {String} domain The Punycode domain name to convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name to Punycode. Only the
	 * non-ASCII parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it with a domain that's already in ASCII.
	 * @memberOf punycode
	 * @param {String} domain The domain name to convert, as a Unicode string.
	 * @returns {String} The Punycode representation of the given domain name.
	 */
	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.2.4',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <http://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],283:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],284:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],285:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":283,"./encode":284}],286:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":287}],287:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":289,"./_stream_writable":291,"_process":281,"core-util-is":292,"inherits":279}],288:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":290,"core-util-is":292,"inherits":279}],289:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (isNaN(n) || n === null) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0)
      endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode &&
      !er) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length)
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":281,"buffer":270,"core-util-is":292,"events":273,"inherits":279,"isarray":280,"stream":298,"string_decoder/":293}],290:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":287,"core-util-is":292,"inherits":279}],291:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/


var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":287,"_process":281,"buffer":270,"core-util-is":292,"inherits":279,"stream":298}],292:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":270}],293:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  this.charBuffer = new Buffer(6);
  this.charReceived = 0;
  this.charLength = 0;
};


StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  var offset = 0;

  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var i = (buffer.length >= this.charLength - this.charReceived) ?
                this.charLength - this.charReceived :
                buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, offset, i);
    this.charReceived += (i - offset);
    offset = i;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (i == buffer.length) return charStr;

    // otherwise cut off the characters end from the beginning of this buffer
    buffer = buffer.slice(i, buffer.length);
    break;
  }

  var lenIncomplete = this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - lenIncomplete, end);
    this.charReceived = lenIncomplete;
    end -= lenIncomplete;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    this.charBuffer.write(charStr.charAt(charStr.length - 1), this.encoding);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }

  return i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 2;
  this.charLength = incomplete ? 2 : 0;
  return incomplete;
}

function base64DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 3;
  this.charLength = incomplete ? 3 : 0;
  return incomplete;
}

},{"buffer":270}],294:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":288}],295:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":287,"./lib/_stream_passthrough.js":288,"./lib/_stream_readable.js":289,"./lib/_stream_transform.js":290,"./lib/_stream_writable.js":291}],296:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":290}],297:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":291}],298:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":273,"inherits":279,"readable-stream/duplex.js":286,"readable-stream/passthrough.js":294,"readable-stream/readable.js":295,"readable-stream/transform.js":296,"readable-stream/writable.js":297}],299:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var punycode = require('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a puny coded representation of "domain".
      // It only converts the part of the domain name that
      // has non ASCII characters. I.e. it dosent matter if
      // you call it with a domain that already is in ASCII.
      var domainArray = this.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      this.hostname = newOut.join('.');
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  Object.keys(this).forEach(function(k) {
    result[k] = this[k];
  }, this);

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    Object.keys(relative).forEach(function(k) {
      if (k !== 'protocol')
        result[k] = relative[k];
    });

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      Object.keys(relative).forEach(function(k) {
        result[k] = relative[k];
      });
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

function isString(arg) {
  return typeof arg === "string";
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return  arg == null;
}

},{"punycode":282,"querystring":285}],300:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],301:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":300,"_process":281,"inherits":279}],"itags":[function(require,module,exports){
(function (global){
/**
 * The ITSA module is an aggregator for all the individual modules that the library uses.
 * The developer is free to use it as it is or tailor it to contain whatever modules
 * he/she might need in the global namespace.
 *
 * The modules themselves work quite well independent of this module and can be used
 * separately without the need of them being integrated under one globa namespace.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module itsa.build
 *
*/
(function (window) {

    "use strict";
    require('i-tabpane')(window);
    require('i-select')(window);
    require('i-parcel')(window);
    require('i-head')(window);
    require('i-item')(window);

})(global.window || require('node-win'));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"i-head":260,"i-item":261,"i-parcel":262,"i-select":264,"i-tabpane":266,"node-win":204}]},{},[]);
