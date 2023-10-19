requirejs.define('c',['a','b'], function(a,b) {
    console.log('执行模块c');
    return {
        name: 'c',
        a: a,
        b: b
    };
});