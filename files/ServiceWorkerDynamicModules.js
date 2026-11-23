__d(
  "ServiceWorkerDynamicModules",
  ["ServerJSDefine"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var n;
      ((n = t).define || (n.define = __d),
        Object.keys(e).forEach(function (t) {
          r("ServerJSDefine").handleDefine(t, [], e[t], -1, null);
        }));
    }
    l.handle = e;
  },
  98,
);
