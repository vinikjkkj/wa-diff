__d(
  "WAFlowsSet",
  ["WAFlowsObjectPathSafety"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "object") return !1;
      var t = Object.getOwnPropertyDescriptor(e, "constructor"),
        n = t == null ? void 0 : t.value;
      return n == null || n.prototype !== e;
    }
    function s(t, n, r) {
      var a = Array.isArray(n)
        ? [].concat(n)
        : n.replaceAll("[", ".").replaceAll("]", "").split(".");
      if (
        o("WAFlowsObjectPathSafety").isSafeObjectPath(a) &&
        !(t == null || typeof t != "object")
      )
        for (var i = t; a.length > 0; ) {
          var l,
            s = a.shift(),
            u = "" + +a[0] === a[0],
            c = u ? [] : {},
            d =
              (l = Object.getOwnPropertyDescriptor(i, String(s))) == null
                ? void 0
                : l.value,
            m = a.length > 0 ? (e(d) ? d : c) : r;
          if (
            (Object.defineProperty(i, s, {
              configurable: !0,
              enumerable: !0,
              value: m,
              writable: !0,
            }),
            m == null || typeof m != "object")
          )
            return;
          i = m;
        }
    }
    l.default = s;
  },
  98,
);
