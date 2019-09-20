# Scrotri.js

I made a librairy like AOS in order to train myself in javascript.

[You can see an example here](https://namysh.github.io/scrotri.js/example/)

as you can see, an animation is triggered when you scroll down


## Usage
First, you need to know if you want to use custom animations or you want to animate.css library.

If you want to use custom animations you just have to download the CSS and the JS files and import them.
```html
<script  type="text/javascript"  src="scrotri.js"></script>
<link  rel="stylesheet"  href="scrotri.css">
```
Afterward you have to init Scrotri like this (between <script> tag for example) :
```javascript
// pass false is you don't want to import animate.css
scrotri(false).init;
```
Now, for selecting the elements you want to animate, you have to add them the "SCTR-init" class and the "data-sctr" attribute like this :
```html
<h1 class="SCTR-init" data-sctr="my-animation">Hello</h1>

```
The "data-sctr" attribute refers to the custom animation you made and put in the CSS file :
```CSS
.my-animation {
  animation: my-animation 1.4s;
}

@keyframes my-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```
If you want to use animate.css you have to pass "true" like this :

```javascript
// pass true is you want to use animate.css
scrotri(true).init;
```

Now, for selecting the elements you want to animate, you have to add them the "SCTR-init" class and the "data-sctr" attribute like this :
```html
<h1 class="SCTR-init" data-sctr="bounceIn">Hello</h1>

```

The "data-sctr" attribute refers to the animate.css animations that you want to use. You can find as list of their animations on their github
