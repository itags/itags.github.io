---
module: general
itsaclassname:
version: 0.0.1
modulesize: 1.69
dependencies: "js-ext, io, polyfill, utils, vdom, event-dom"
maintainer: Marco Asbreuk
title: Itag Classes
intro: "Defining Itag Classes to create itag - custom elements"
firstpar: get-started
---



#The Basics#

The dom has a limited number of Elements like `div`, `input`, `button` etc. Custom Elements are a way to extend these with your own custom element-name [more info here](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)

`Itags` is our solution into creating custom elements. To create `Itags`, we developed an api based upon Classes. All `Itag`-elements need to start with `i-` followed by a name.

Every `Itag` needs to be defined by its own module. Once this module is loaded, two things happen:

* all elements on the page that are of the specified itag-type get upgraded into a true itag
* document.createElement() can accept the itag-name and will create a true itag-element


####Example i-select####

```html
<i-select value="2">
    <i-item>item 1</i-item>
    <i-item>item 2</i-item> <!-- is the selected item -->
    <i-item>item 3</i-item>
    <i-item>item 4</i-item>
</i-select>
```


#Developing a new Itag#

`Itags` are `Classes`, having the API that we created for using Classes (more about that later). Itags should be developed in a module of their own. This way, you are sure the right dependencies are loaded: you need at least the `itags.core` module. Also, distribution and further dependiencies are made easy this way. Once this module is loaded, all elements in the dom of the type `i-yourname` get upgraded (as said before).

There are three different ways of developing an Itag-Class:

* create completely new using `createItag()`
* sub-classing an existing Itag-Class with `subClass()`
* pseudoClassing an existing Itag-Class with `pseudoClass()`

In either case, the basic skeleton look like this (example is based upon `createItag`):

####default skeleton defining itags####
```js
module.exports = function (window) {
    "use strict";

    require('polyfill/polyfill-base.js');

    var itagCore =  require('itags.core')(window),
        itagName = 'i-yourname', // <-- define your own itag-name here
        DOCUMENT = window.document,
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.createItag(itagName, {
            attrs: {
            },

            init: function() {
            },

            sync: function() {
            },

            destroy: function() {
            }
        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
```

*Note:* every new definition should be stored inside the object `window.ITAGS` like this: *window.ITAGS[itagName] = Itag;*
##createItag##

You can use `window.document.createItag()` for every new itag you want to setup that doesn't need to be inherited from an existing itag. Probably most of the cases. The first argument holds the *name* of the `itag`. The second argument (as well as the other) are discussed later on.

####Example document.createItag()####
```js
var MyIFormClass = DOCUMENT.createItag('i-myform');
window.ITAGS['i-myform'] = MyIFormClass;
```


##subClass##

Any `Itag-Class` can be subclassed with 'subClass()`. The subclass has its own itag-name and its own members (second argument), but more about that later. By default, the `init`-method of the inherited Class gets invoked before `init` of the subclassed Itag.

Important (and different compared to `pseudoClass`) is that the itag <u>has its own element-name</u>. This is important, because you probably loose `css`-styles and maybe events (when they are filtered by element-name as they should) by the superclass. So, you need to redefine them again.

Subclassing using `subClass` isn't very useful unless you want to inherit a lot of the functionality that was defined by its parent by the second argument (member of the prototype). Mostly you be better of using `document.createItag()` or `ItagClass.pseudoClass()`.


####Example defining subClass####
```js
var MyIFormClass, AnotherFormClass;

MyIFormClass = window.ITAGS['i-myform'];
AnotherFormClass = MyIFormClass.subClass('i-anotherform');
window.ITAGS['i-anotherform'] = AnotherFormClass;
```


##pseudoClass##

Any `Itag-Class` can also be subclassed with 'pseudoClass()`. As its first argument you pass the `pseudo`-name. Registering need to be done by a composite name: the subclassed its itagname, followed by a semicolon (:), followed by the pseudoname.

####Example defining pseudoClass####
```js
var MyIFormClass, AnotherFormClass;

MyIFormClass = window.ITAGS['i-myform'];
AnotherFormClass = MyIFormClass.pseudoClass('anotherform');
window.ITAGS['i-myform:anotherform'] = AnotherFormClass;
```

Elements created by `pseudoClass` will render with the same element-name as its parent-Class. The `pseudo`-name will be set at the `is`-attribute:

####Example pseudoClass html-element####

```html
<!-- the next element will be rendered as an itag of the Class: window.ITAGS['i-myform:anotherform'] -->
<i-myform is="anotherform"></i-myform>
```

####Example pseudoClass html-element by javascript####

```js
var element = document.createElement('i-myform:anotherform');
document.body.appendChild(element);

// this adds an new element looking like: <i-myform is="anotherform"></i-myform>
```

The beautiful part here is, that any styles and events of the superclass are retained.



#Access to super-Class properties#

##access parent properties##

When subClassing, it is easy to access properties of its parent by invoke `this.$superProp(propertyName, args)`. Any property can be invoked: when it's a method, you can pass through its arguments as from the second argument-position. <u>`$superProp` is avialabe on the context `"this"`</u>.

When a `constructor` needs to be subClassed, you can use: `this.$superProp('constructor', args)`. Be sure you set the firth argument `false` in order to be able to manually invoke the super-constructor.

####Example redefine constructor####
```js
var Circle = Shape.subClass(
    function (radius, x, y) {
        // we will manually invoke the super-constructor
        this.$superProp('constructor', x, y);
        this.radius = radius || 1;
    }, null, false
);
```

##access ancestor properties##

If you want to access properties that lie higher in the Class-tree (higer than `parent`), you can use `this.$super.$superProp()` or multiple `$super` parts.  <u>`$super` is avialabe on the context `"this"`</u>.

####Example redefine properties higher up the chain####
```js
var Rectangle = Shape.subClass(
    function (x, y, l, h) {
        this.l = l || 0;
        this.h = h || 0;
    }
);
var Square = Rectangle.subClass(
    function (x, y, l) {
        this;$super.$superProp('constructor', x, y);
        this.l = l || 0;
    }, null, false
);
```


#Reconfigure Classes#

Existing Classes cannot have their inherited (parent) Class being redefined (just define a new Class in those cases). However, they can have their constructor redefined, or prototype-properties being redefined, extended, or removed.


##setConstructor##

Re-defines the constructor of an existing Class. From the point this change is made, any new instance will use this constructor. This also counts for sub-classes. `setConstructor` accepts the new constructor as its first argument, and optional a second boolean argument to specify if the constructor should be chained (invoking its parent constructor automaticly).

####Example setConstructor####

```js
var ClassA, ClassB, ClassC, c;

ClassA = Classes.createClass(function(x) {
    this.x = x;
});
ClassB = ClassA.subClass(function(x, y) {
    this.y = y;
}, false);
ClassC = ClassB.subClass(function(x, y, z) {
    this.z = z;
});

c = new B(1,2,3);
// c.x === undefined
// c.y === 2
// c.z === 3

B.setConstructor(function(x, y) {
    this.y = 3*y;
});

c = new B(1,2,3);
// c.x === 1
// c.y === 6
// c.z === 3
```

##mergePrototypes##

It allows to add extra methods to a given class.  This is helpful when common functionality needs to be added to multiple classes, without having to inherit from it.  For example, the previous example could have been made like this:

####Example mergePrototypes####

```js
var movable = {
    move: function (x, y) {
        this.x += x;
        this.y += y;
    },
    moveX: function (x) {
        this.x += x;
    },
    moveY: function (y) {
        this.y += y;
    }
};

var Circle = ITSA.Classes.createClass(
    function (x, y, r) {
        this.r = r || 1;
    },{
        area: function () {
            return this.r * this.r * Math.PI;
        }
    }
).mergePrototypes(movable);
```

The merged methods will not overwrite existing methods unless the second argument is set to `true` to force the overwrite.

##Using $orig in mergePrototypes##

If the merged methods override existing ones, the original method will be available in the `$orig` property, <u>which is avialabe on the context `"this"`</u>.  This allows plugins that can be refer to the original methods. All arguments you pass into `$orig()` will be passed through to its original method.

It is possible to redefine the same method in descendent subClasses by using $orig() over and over again. All original methods will be available.

####Example mergePrototypes with usage $orig()####
```js
var ClassA = ITSA.Classes.createClass({
    method: function (a) {
        return a + 'a';
    }
}).mergePrototypes({
    method: function (b) {
        return this.$orig(b) + 'b';
    }
}, true);

var a = new ClassA();
console.log(a.method('1'));
// prints "1ab"
```

##RemovePrototypes##

####Example removePrototypes####

```js
var Circle = ITSA.Classes.createClass(
    function (x, y, r) {
        this.r = r || 1;
    },{
        area: function () {
            return this.r * this.r * Math.PI;
        }
    }
);

var c = new Circle(5);
C.removePrototypes('area');

c.area(); // <-- will throw an error: method `area` does not exist
```


#Destroy Classes#

Class-instances can be destroyed with the method `destroy()`. By default, this is a `NOOP`-method. Whenever a class-instance gets destroyed, <u>every `destroy()` up the chain</u> gets invoked. That is, unless you invoke destroy('true'), which does a non-chain destruction. In most cases, you don't need to setup `destroy`. Only when you have set data by closure outside the instance (for example in an array), then you need to clean it up: otherwise there would be a memoryleak. Another feature would be when the class-instantiation would create a dom-node, which you need to remove at destruction.

Note that -when creating the `destroy`-method, you don't need to specify its only argument. Under the hood, `destroy` gets stored as `_destroy`, whereas `Class.destroy(notChained)` is a method on the BaseClass at the highest position of the Class-chain --> this `destroy()` invokes `_destroy` of the whole chain.

####Example using destroy####

```js
var regArray = [];
var Registration = ITSA.Classes.createClass(
    function (data) {
        this.data  data;
        regArray.push(data);
    },{
        destroy: function () {
            delete regData[this.data];
        }
    }
);

var registration = new Registration('I got registered');
// regArray.length === 1

registration.destroy();
// regArray.length === 0

```

#Events#

##Event-listener##

When the `event-module` is loaded, all Classes become an Event-listener (for more info on event-listeners: see the module `Event`). This behaviour is added to the Base-Class which all Classes inherit. The Event-listener makes the following properties available:

###after###
###onceAfter###
###before###
###onceBefore###
###selfAfter###
###selfOnceAfter###
###selfBefore###
###selfOnceBefore###

The methods named `selfxxx` make it posible to invoke the subscriber only when `e.target` equals the `instance`. This avoids unwanted interaction: see the examples.

##Event-emitter##

To make any Class an Event-emitter, you should merge `Event.Emitter()` at the prototype by yourself. This cannot be done by the module, because Event-emitters need an emittername, which is Class-specific.

####Example setting up Class Event-Emitter####

```js
var Circle = ITSA.Classes.createClass(
    function (x, y, r) {
        this.r = r || 1;
    },{
        area: function () {
            return this.r * this.r * Math.PI;
        }
    }
).mergePrototypes(Event.Emitter('circle'));

var c = new Circle(5);
c.emit('drawn'); // <-- will fire the 'circle:drawn'-event
```

##Detaching listers on destruction##

<u>You don't need to detach any listener you have set on any class-instance.</u>

This is done automaticly when you destroy the class by using `destroy()` - regardless of its first argument. Under the hood, `destroy()` invokes this.`detachAll()` which removes all listeners of the instance.