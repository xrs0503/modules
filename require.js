// 定义一个模块管理器
const requirejs=(function () {

    // 存储模块和模块的依赖关系
    var modules = {};
    //定义模块
    function define(name, deps, callback) {
      modules[name] = {
        name: name,
        deps: deps,
        callback: callback,
        executed: false,
      };
      executeAll()
    }
    //执行模块
    function load(module) {
      if (!module.executed) {
        module.deps.forEach(function (dep) {
          load(modules[dep]);
        });
        module.callback();
        module.executed = true;
      }
    }
    //循环所有模块
    function executeAll() {
      for (let name in modules) {
          load(modules[name]);
      }
    }
  
    return {
      define: define
    };
  })();