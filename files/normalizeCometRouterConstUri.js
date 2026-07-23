__d(
  "normalizeCometRouterConstUri",
  [
    "CometUrlTransformsConfig",
    "ConstUriUtils",
    "isCometRouterUrl",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeStringOnly")(function (e) {
      var t, n;
      if (!r("isCometRouterUrl")(e)) return e;
      var a = o("ConstUriUtils").getUri(e);
      a != null && (a = a.getUnqualifiedUri());
      var i = r("CometUrlTransformsConfig").should_remove_trailing_slash;
      return (
        a != null && i && (a = a.stripTrailingSlash()),
        a != null &&
          !a.getPath().startsWith("/") &&
          (a = a.setPath("/" + a.getPath())),
        (t = (n = a) == null ? void 0 : n.toString()) != null ? t : e
      );
    });
    l.default = e;
  },
  98,
);
