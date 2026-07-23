__d(
  "CometRouteURLUtils",
  ["ConstUriUtils", "memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeStringOnly")(function (e) {
        var t,
          n = o("ConstUriUtils").getUri(e);
        return (t = n == null ? void 0 : n.getPath()) != null ? t : null;
      }),
      s = r("memoizeStringOnly")(function (e) {
        var t = o("ConstUriUtils").getUri(e);
        return t != null ? Object.fromEntries(t.getQueryParams()) : null;
      });
    ((l.getURLPath = e), (l.getURLQueryData = s));
  },
  98,
);
