__d(
  "replaceValuesWithUndefined",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      var n = {};
      for (var r of Object.keys(t)) {
        var o = t[r];
        o == null || typeof o != "object"
          ? (n[r] = void 0)
          : Array.isArray(o)
            ? (n[r] = o.map(function (t) {
                return t == null || typeof t != "object" ? void 0 : e(t);
              }))
            : (n[r] = e(o));
      }
      return n;
    }
    i.default = e;
  },
  66,
);
