__d(
  "shouldRenderMAIBAA2UIOnAxonPath",
  ["XPlatReactEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "task-creation-details",
      "task-creation-preview",
      "task-creation-success",
    ];
    function s(t, n, r) {
      if (n && o("XPlatReactEnvironment").isWeb()) {
        var a = e.some(function (e) {
          return t == null ? void 0 : t.includes('"' + e + '"');
        });
        if (a) return !1;
      }
      return n || !r;
    }
    l.default = s;
  },
  98,
);
