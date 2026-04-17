__d(
  "CometRouteParams",
  ["CometRouteURL", "react-compiler-runtime", "useCurrentRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      "use no memo";
      var e = r("useCurrentRoute")();
      if (e != null) return e.params;
      var t;
      return (t = o("CometRouteURL").getWindowURLParams()) != null ? t : {};
    }
    function s(t) {
      var n = o("react-compiler-runtime").c(3),
        r = e(),
        a;
      return (
        n[0] !== t || n[1] !== r
          ? ((a = t(r)), (n[0] = t), (n[1] = r), (n[2] = a))
          : (a = n[2]),
        a
      );
    }
    ((l.useRouteParams = e), (l.useCometRefinedRouteParams = s));
  },
  98,
);
