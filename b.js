requirejs.define('b',['a'], function(a) {
    console.log('执行模块b');
    return {
        name: 'b',
        a: a
    };
});