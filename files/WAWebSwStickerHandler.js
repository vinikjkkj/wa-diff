__d(
  "WAWebSwStickerHandler",
  ["WAWebSharedConstants", "WAWebSwFeature", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.matchFetch = function (e) {
            var t = e.request,
              n = new URL(t.url),
              r = new URLSearchParams(n.search);
            return (
              t.method === o("WAWebSwFeature").SWFeature.RequestType.GET &&
              r.has(o("WAWebSharedConstants").IS_MMS_URL_SEARCH_PARAM) &&
              (n.pathname.indexOf("/mms/sticker/") === 0 ||
                r.get(
                  o("WAWebSharedConstants").MMS_URL_MEDIA_TYPE_SEARCH_PARAM,
                ) === "sticker")
            );
          }),
          (t.onFetch = function (e) {
            var n = r("nullthrows")(
              t.cache,
              "SWStickerHandler onFetch was called without a cache",
            );
            return n.matchOrFetch(e.request, void 0);
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebSwFeature").SWFeature);
    l.default = e;
  },
  98,
);
