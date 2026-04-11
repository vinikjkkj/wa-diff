__d(
  "useTransformRelativeUri",
  [
    "BaseLinkUriBaseContext",
    "ConstUriUtils",
    "isRelativeURL",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo;
    function d(e, t) {
      if (r("isRelativeURL")(t)) {
        var n = o("ConstUriUtils").getUri(t);
        if (n != null) {
          var a,
            i =
              (a = e.addQueryParams(n.getQueryParams())) == null ||
              (a = a.setPath(n.getPath())) == null ||
              (a = a.setFragment(n.getFragment())) == null
                ? void 0
                : a.toString();
          if (i != null) return i;
        }
      }
      return t;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = u(r("BaseLinkUriBaseContext")),
        a;
      return (
        t[0] !== e || t[1] !== n
          ? ((a = n == null || e == null ? e : d(n, e)),
            (t[0] = e),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = m;
  },
  98,
);
