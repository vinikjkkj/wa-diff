__d(
  "URITruncator",
  ["fbt", "URI"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 3,
      c = s._(/*BTDS*/ "...").toString(),
      d = c.length;
    function m(t, n) {
      if (!t) return t;
      var o = t.toString();
      if (n === void 0 || n <= d || o.length <= n || o.length <= d) return o;
      var a = (e || (e = r("URI"))).tryParseURI(t);
      if (!a) return t.toString().substring(0, n - d) + c;
      var i = a.getOrigin();
      if (i.length > n - d) return i.substring(0, n - d) + c;
      var l = !1;
      if (
        a.getFragment() &&
        ((l = !0), a.setFragment(""), a.toString().length <= n - d)
      )
        return a.toString() + c;
      var s = a.getQueryData();
      if (s) {
        var m = Object.keys(s);
        if (m.length > 0) {
          l = !0;
          for (var p = m.length - 1; p >= 0; p--)
            if ((a.removeQueryData(m[p]), a.toString().length <= n - d))
              return a.toString() + c;
        }
      }
      for (
        var _ = a.getPath() + (l ? c : ""),
          f = _.split("/"),
          g = i.length + _.length - n,
          h = 0;
        g > 0 && f.length > h + 1;
      ) {
        var y = h + 1,
          C = f[y];
        if (g + d + u <= C.length) {
          var b = C.length - 1,
            v = C.length - g - d,
            S = /[a-zA-Z0-9]/;
          for (g += d; g > 0; ) {
            for (; b > 0 && S.test(C[b]); ) (b--, g--);
            for (; b > 0 && !S.test(C[b]); ) (b--, g--);
          }
          (b === 0 && (b = v - 1), (f[y] = C.substring(0, b + 1) + c));
        } else (h++, (g -= C.length), h === 1 ? (g += d) : g--);
      }
      h > 0 &&
        (f[f.length - 1].length === 0 && f.length === h + 2 && h++,
        f.splice(1, h, c));
      var R = i + f.join("/");
      return (R.length > n && (R = R.substring(0, n - d) + c), R);
    }
    l.default = m;
  },
  226,
);
