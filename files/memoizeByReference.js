__d(
  "memoizeByReference",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = typeof WeakMap == "function";
    function l(t) {
      var n = e ? new WeakMap() : new Map();
      return function (e) {
        if (n.has(e)) {
          var r = n.get(e);
          if (r !== void 0) return r[0];
        }
        var o = t(e);
        return (n.set(e, [o]), o);
      };
    }
    i.default = l;
  },
  66,
);
