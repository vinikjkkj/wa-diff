__d(
  "cometRouterIsNavigationRefresh",
  [
    "ConstUriUtils",
    "cometRouterCleanURLSearchParameters",
    "getTopMostRoute",
    "normalizeCometRouterUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i,
        l,
        s = r("getTopMostRoute")(t),
        u = o("ConstUriUtils").getUri(s.url),
        c = o("ConstUriUtils").getUri(e.url);
      if (u == null || c == null) return !1;
      var d = r("normalizeCometRouterUrl")(
          (n =
            (a = r("cometRouterCleanURLSearchParameters")(u)) == null
              ? void 0
              : a.toString()) != null
            ? n
            : s.url,
        ),
        m = r("normalizeCometRouterUrl")(
          (i =
            (l = r("cometRouterCleanURLSearchParameters")(c)) == null
              ? void 0
              : l.toString()) != null
            ? i
            : e.url,
        );
      return d === m;
    }
    l.default = e;
  },
  98,
);
