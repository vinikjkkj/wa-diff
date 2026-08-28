__d(
  "GeoDomID",
  [
    "GeoSSRSafeIdsContext",
    "react",
    "react-compiler-runtime",
    "useShallowEqualMemo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo,
      d = new Map([["htmlFor", "for"]]);
    function m(e, t) {
      var n = { ref: null };
      if (t)
        n.ref = function (n) {
          if (n != null)
            for (var t of e.entries()) {
              var r,
                o = t[0],
                a = t[1],
                i = Array.from(a).join(" ");
              if (i != null) {
                var l = (r = d.get(o)) != null ? r : o;
                n.setAttribute(l, i);
              }
            }
        };
      else
        for (var r of e.entries()) {
          var o = r[0],
            a = r[1],
            i = Array.from(a).join(" ");
          i != null && (n[o] = i);
        }
      return n;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = u(r("GeoSSRSafeIdsContext")),
        a = r("useShallowEqualMemo")(e),
        i;
      if (t[0] !== n || t[1] !== a) {
        for (var l = new Map(), s = Object.keys(a), c = 0; c < s.length; c++) {
          var d = s[c];
          if (Object.prototype.hasOwnProperty.call(a, d)) {
            var p = a[d];
            p != null && l.set(d, new Set([p]));
          }
        }
        ((i = m(l, n)), (t[0] = n), (t[1] = a), (t[2] = i));
      } else i = t[2];
      return i;
    }
    l.useApplyGeoDomIDsDirectly = p;
  },
  98,
);
