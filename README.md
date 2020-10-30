# Scrotri.js
I made a minimalist AOS like library in order to train myself in javascript.

[You can see an example here](https://namysh.github.io/scrotri.js/example/)

## Usage
Download javascript file and import it in the `head` tag :
```html
<head>
    <!-- ... -->
    <script  type="text/javascript"  src="scrotri.js"></script>
</head>
```

Then init Scrotri in `script` tag :
```html
<body>
    <!-- ... -->
    <script type="text/javascript">
        Scrotri();
    </script>
</body>
```

Now in order to select the elements you want to animate, you have to add the "`data-sctr`" attribute, referring the animation's name like this :
```html
<body>
    <!-- ... -->
    <!-- will trigger "myAnimation" custom animation on scroll -->
    <h1 data-sctr="myAnimation">Hello</h1>
    <!-- ... -->
</body>
```

### Initialization related parameters
`useAnimateCss` : if true, will include the animate.css library
```html
<body>
    <!-- ... -->
    <script type="text/javascript">
        Scrotri({
            useAnimateCss: true,
        });
    </script>
</body>
```

### Elements related parameters
`data-sctr` : the name of the animation
`data-sctr-once` : if true, will trigger animation only once
```html
<body>
    <!-- ... -->
    <h1 
        data-sctr="myAnimation"
        data-sctr-once="true" 
    >
    </h1>
    <!-- ... -->
</body>
```

## Example
### Using animate.css library
```html
<html>
    <head>
        <!-- ... -->
        <script  type="text/javascript"  src="scrotri.js"></script>
    </head>
    <body>
        <!-- ... -->
        <h1 data-sctr="bounceIn">I'll bounce in</h1>
        <script type="text/javascript">
            Scrotri({useAnimateCSS: true});
        </script>
    </body>
</html>
```

Here the "`data-sctr`" attribute will also consider animate.css's animations. You can find as list of their animations on their github page