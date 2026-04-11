__d(
  "CometRouteURL",
  [
    "CometRouteURLUtils",
    "CometRouteWindowURL",
    "react-compiler-runtime",
    "useCurrentRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("react-compiler-runtime").c(1),
        t = r("useCurrentRoute")();
      if (t != null) {
        var n;
        return (n = t.canonicalUrl) != null ? n : t.url;
      } else {
        var a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
          var i;
          ((a = (i = o("CometRouteWindowURL").getWindowURL()) != null ? i : ""),
            (e[0] = a));
        } else a = e[0];
        return a;
      }
    }
    function s() {
      var t = o("react-compiler-runtime").c(2),
        n = e(),
        r;
      if (t[0] !== n) {
        var a;
        ((r = (a = o("CometRouteURLUtils").getURLPath(n)) != null ? a : ""),
          (t[0] = n),
          (t[1] = r));
      } else r = t[1];
      return r;
    }
    function u() {
      var t = o("react-compiler-runtime").c(2),
        n = e(),
        r;
      if (t[0] !== n) {
        var a;
        ((r =
          (a = o("CometRouteURLUtils").getURLQueryData(n)) != null ? a : {}),
          (t[0] = n),
          (t[1] = r));
      } else r = t[1];
      return r;
    }
    ((l.getWindowURL = o("CometRouteWindowURL").getWindowURL),
      (l.getWindowURLParams = o("CometRouteWindowURL").getWindowURLParams),
      (l.useRouteURL = e),
      (l.useRouteURLPath = s),
      (l.useRouteURLParams = u));
  },
  98,
);
