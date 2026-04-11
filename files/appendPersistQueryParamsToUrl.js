__d(
  "appendPersistQueryParamsToUrl",
  ["CometPersistQueryParams", "ConstUriUtils", "isRelativeURL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      return (n =
        (r = o("ConstUriUtils").getUri(e)) == null ||
        (r = r.addQueryParams(new Map(Object.entries(t)))) == null
          ? void 0
          : r.toString()) != null
        ? n
        : e;
    }
    function s(t) {
      var n = o("ConstUriUtils").getUri(t);
      if (n == null) return t;
      if (r("isRelativeURL")(t) || n.getDomain() === "")
        return e(t, r("CometPersistQueryParams").relative);
      var a = n.getDomain().split(".").slice(-2).join(".");
      return r("CometPersistQueryParams").domain[a] != null
        ? e(t, r("CometPersistQueryParams").domain[a])
        : t;
    }
    l.default = s;
  },
  98,
);
