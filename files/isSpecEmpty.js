__d(
  "isSpecEmpty",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      if (t == null || t === "") return !0;
      if (Array.isArray(t)) return t.length === 0;
      var n, r;
      if (l(t)) {
        var o = t;
        for (n in o) if (((r = o[n]), !e(r))) return !1;
        return !0;
      }
      return !1;
    }
    function l(e) {
      return {}.toString.call(e) === "[object Object]";
    }
    i.default = e;
  },
  66,
);
