# 003. Get a Random Color Background

### Point

- Javascript
- jQuery
- box-shadow

### Notes

#### Generate Random Color by Javascript

Refer: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript

```js
// my solution
function randomColor () {
    function c() {
        var color = Math.random() * 256;
        return Math.floor(color).toString();
    }
    return 'rgb( ' + c() + ' , ' + c() + ' , ' + c() + ' )';
}

// amazing solution
function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};
```



