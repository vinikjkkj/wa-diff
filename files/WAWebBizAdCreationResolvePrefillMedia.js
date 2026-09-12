__d(
  "WAWebBizAdCreationResolvePrefillMedia",
  [
    "FBLogger",
    "WAWebBizAdCreationFetchMediaFile",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoURL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.videoId != null) {
            var n = yield d(e, t);
            return { file: n };
          }
          var r = yield u(e, t);
          return { file: r };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.url != null)
            try {
              var n = yield o(
                "WAWebBizAdCreationFetchMediaFile",
              ).fetchWithTimeout(e.url);
              if (n.ok) {
                var a = yield n.blob();
                return new File([a], e.imageHash, { type: a.type });
              }
              r("FBLogger")("wa_ctwa_web").warn(
                "resolvePrefillMedia: spec URL returned non-OK status, falling back to image_url_from_hash",
              );
            } catch (e) {
              r("FBLogger")("wa_ctwa_web").warn(
                "resolvePrefillMedia: spec URL fetch failed, falling back to image_url_from_hash",
              );
            }
          var i = yield r("WAWebBizAdCreationResolveImageURL")(
            t.environment,
            t.legacyAdAccountID,
            e.imageHash,
          );
          return o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
            i,
            e.imageHash,
            "resolvePrefillMedia: image",
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r("WAWebBizAdCreationResolveVideoURL")(
            t.environment,
            e.videoId,
          );
          return o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
            n,
            e.videoId,
            "resolvePrefillMedia: video",
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
