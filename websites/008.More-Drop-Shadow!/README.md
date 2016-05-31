# 008. More Drop Shadow!

### Point

- jq
- box-shadow

### Notes

#### jQuery disableSelection

```js
(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);
```

#### Event.stopPropagation

Prevents further propagation of the current event in the bubbling phase.

```js
event.stopPropagation();
```

