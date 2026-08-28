__d(
  "memoizeByFirstArgReference",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = typeof WeakMap == "function";
    function l(t) {
      var n = e ? new WeakMap() : new Map(),
        r = function (r) {
          if (n.has(r)) {
            var e = n.get(r);
            if (e !== void 0) return e[0];
          }
          for (
            var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          var l = t.apply(void 0, [r].concat(a));
          return (n.set(r, [l]), l);
        };
      return r;
    }
    i.default = l;
  },
  66,
);
