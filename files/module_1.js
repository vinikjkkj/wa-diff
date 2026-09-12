__d(
  "$InternalEnumUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.prototype.hasOwnProperty;
    function l(t) {
      return function (n) {
        return n == null || !e.call(t, n) ? null : t[n];
      };
    }
    var s = typeof WeakMap == "function" ? new WeakMap() : new Map();
    function u(e) {
      return function (t) {
        var n;
        if (t == null) return null;
        var r = s.get(e);
        return (
          r == null &&
            ((r = new Map(
              Object.getOwnPropertyNames(e).map(function (t) {
                return [e[t], t];
              }),
            )),
            s.set(e, r)),
          (n = r.get(t)) != null ? n : null
        );
      };
    }
    ((i.createToJSEnum = l), (i.createFromJSEnum = u));
  },
  66,
);
