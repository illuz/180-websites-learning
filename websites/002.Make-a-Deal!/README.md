# 002. Make a Deal!

### Point:

- basic of html, css
- use `<a>` tag
- vedio: `<ifram>` tag

### Notes:

#### Div Clickable

Refer: https://css-tricks.com/snippets/jquery/make-entire-div-clickable/

```html
<a href="make-a-deal-choose-1.html">
    <div class="door door-blue">
        Door 1 <br>
        Blue <br>
        Closed <br>
        -
    </div>
</a>
```

#### Div Shadow

Refer: https://css-tricks.com/snippets/css/css-box-shadow/

```css
.choosed {
    -moz-box-shadow:    10px 0px 10px 2px #161616;
    -webkit-box-shadow: 10px 0px 10px 2px #161616;
    box-shadow:         10px 0px 10px 2px #161616;
}
```

#### SCSS mixin

```scss
@mixin door($color) {
    .door-#{$color} {
        border: solid $color;
        color: $color;
    }
}

@include door(blue);
@include door(orange);
@include door(green);
```

