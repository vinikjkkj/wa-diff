__d(
  "LSDynamicDependenciesEventEmitter",
  ["EventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("EventEmitter"))();
    function s(t) {
      e.emit("loadModule", t);
    }
    function u(t) {
      var n = e.addListener("loadModule", t);
      return {
        remove: function () {
          n.remove();
        },
      };
    }
    ((l.emitLoadModuleEvent = s), (l.subscribeToLoadModuleEvent = u));
  },
  98,
);
