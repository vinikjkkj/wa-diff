__d(
  "normalizeCometRouteStorePrefetchUrl",
  ["ConstUriUtils", "normalizeCometRouterUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["__cft__", "__tn__", "fnr_t", "sw_fnr_id"];
    function s(t) {
      var n,
        a =
          (n = o("ConstUriUtils").getUri(t)) == null ||
          (n = n.removeQueryParams(e)) == null
            ? void 0
            : n.toString();
      return r("normalizeCometRouterUrl")(a != null ? a : t);
    }
    l.default = s;
  },
  98,
);
