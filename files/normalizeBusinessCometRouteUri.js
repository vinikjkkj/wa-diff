__d(
  "normalizeBusinessCometRouteUri",
  ["ConstUriUtils", "jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t != null ? t : {},
        a = o("ConstUriUtils").getUri(e);
      if (a != null) {
        var i = r("jsRouteBuilder")(
          a == null ? void 0 : a.getPath(),
          {},
          void 0,
          a == null ? void 0 : a.getQueryData(),
        );
        return String(i.buildUri(n));
      }
      return null;
    }
    l.default = e;
  },
  98,
);
