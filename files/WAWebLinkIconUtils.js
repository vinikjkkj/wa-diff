__d(
  "WAWebLinkIconUtils",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = Object.keys(n).find(function (t) {
          var n = r("WAWebURLUtils").hostname(e);
          return n.endsWith("." + t) || n === t;
        }),
        a = o != null ? n[o] : null;
      if (t != null && a != null) {
        var i = t.split("/").filter(function (e) {
            return e.length > 0;
          }),
          l = i[0];
        if (l != null && a[l] != null) return a[l];
      }
      return a == null ? void 0 : a.default;
    }
    l.getIconFromHostnameMap = e;
  },
  98,
);
