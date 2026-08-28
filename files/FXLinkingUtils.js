__d(
  "FXLinkingUtils",
  ["ConstUriUtils", "appendPersistQueryParamsToUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "fx_ig_web_linking_plain_token";
    function s(e, t, n, a) {
      var i,
        l,
        s = o("ConstUriUtils").getUri(e),
        u = (function () {
          return n === "next" || n === "destination_url"
            ? String(s == null ? void 0 : s.getQueryParam(n))
            : n === "extra_data"
              ? r("appendPersistQueryParamsToUrl")(
                  String(s == null ? void 0 : s.getQueryParam(n)),
                )
              : null;
        })();
      if (u == null) return null;
      var c =
        (i = o("ConstUriUtils").getUri(u)) == null ||
        (i = i.setPath("/add/")) == null ||
        (i = i.addQueryParam("background_page", a != null ? a : t)) == null
          ? void 0
          : i.toString();
      return s == null || (l = s.addQueryParam(String(n), c)) == null
        ? void 0
        : l.toString();
    }
    ((l.PLAIN_TOKEN = e), (l.getWebAuthURLWithURLPath = s));
  },
  98,
);
