__d(
  "MAIBAHydrate",
  ["MAIBATWEContent.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (typeof e != "object" || e === null || Array.isArray(e)) return null;
      var t = Object.keys(e);
      if (t.length !== 1 || t[0] !== "$t") return null;
      var n = e.$t;
      return typeof n == "number" ? n : null;
    }
    function c(e) {
      var t = function (n) {
        var t = n.children;
        return s.jsx(r("MAIBATWEContent.react"), { twe: e, children: t });
      };
      return ((t.plainText = e.text), t);
    }
    function d(e, t) {
      var n = u(e);
      if (n != null) {
        var r = t[n];
        return r == null ? null : c(r);
      }
      return Array.isArray(e)
        ? e.map(function (e) {
            return d(e, t);
          })
        : typeof e == "object" && e !== null
          ? Object.fromEntries(
              Object.keys(e).map(function (n) {
                return [n, d(e[n], t)];
              }),
            )
          : e;
    }
    l.default = d;
  },
  98,
);
