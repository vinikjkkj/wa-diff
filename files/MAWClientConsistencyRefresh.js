__d(
  "MAWClientConsistencyRefresh",
  ["ClientConsistencyEventEmitter", "CurrentAppID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("CurrentAppID").getAppID();
      switch (t) {
        case String(772021112871879):
          r("ClientConsistencyEventEmitter").emit("hardRefresh", e);
          break;
        default:
          r("ClientConsistencyEventEmitter").emit("softRefresh", e);
      }
    }
    l.default = e;
  },
  98,
);
