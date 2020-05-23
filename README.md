# Scrotri.js

I made a library like AOS in order to train myself in javascript.

[You can see an example here](https://namysh.github.io/scrotri.js/example/)

as you can see, an animation is triggered when you scroll down


## Usage
First, you need to know if you want to use custom animations or you want to animate.css library.
> you can use both custom animations and animate.css library

Either way, you have to download the CSS and the JS files and import them in the HEAD like this :
```html
<head>
    <!-- ... -->
    <script  type="text/javascript"  src="scrotri.js"></script>
    <link  rel="stylesheet"  href="scrotri.css">
</head>
```

### Use custom animations
In order to exclusivly use custom animations you have to init Scrotri like this (between <script> tag for example) :
```html
<body>
    <!-- ... -->
    <script type="text/javascript">
        // set 'useAnimateCss' to false if you don't want to import animate.css
        Scrotri({useAnimateCSS: false});
    </script>
</body>
```

Now, with regard to select the elements you want to animate, you have to add them the "SCTR-init" class and the "data-sctr" attribute like this :
```html
<body>
    <!-- ... -->
    <h1 class="SCTR-init" data-sctr="my-animation">Hello</h1>
    <!-- ... -->
</body>
```

The "data-sctr" attribute refers to the custom animation's name you made and put in the CSS file :
```css
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

### Use animate.css library
If you want to use the animate.css library you have to set 'useAnimateCss' to true like this :
```html
<body>
    <!-- ... -->
    <script type="text/javascript">
        // set 'useAnimateCSS' to true if you want to use animate.css
        Scrotri({useAnimateCSS: true});
    </script>
</body>
```

Now, for selecting the elements you want to animate, you have to add them the "SCTR-init" class and the "data-sctr" attribute like this :
```html
<body>
    <!-- ... -->
    <h1 class="SCTR-init" data-sctr="bounceIn">Hello</h1>
    <!-- ... -->
</body>
```

The "data-sctr" attribute refers to the animate.css animations that you want to use. You can find as list of their animations on their github
