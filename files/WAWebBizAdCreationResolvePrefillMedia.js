__d(
  "WAWebBizAdCreationResolvePrefillMedia",
  [
    "FBLogger",
    "WAWebBizAdCreationFetchMediaFile",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoURL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      if (e.videoId != null) {
        var n = await u(e, t);
        return { file: n };
      }
      var r = await s(e, t);
      return { file: r };
    }
    async function s(e, t) {
      if (e.url != null)
        try {
          var n = await o("WAWebBizAdCreationFetchMediaFile").fetchWithTimeout(
            e.url,
          );
          if (n.ok) {
            var a = await n.blob();
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
      var i = await r("WAWebBizAdCreationResolveImageURL")(
        t.environment,
        t.legacyAdAccountID,
        e.imageHash,
      );
      return o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
        i,
        e.imageHash,
        "resolvePrefillMedia: image",
      );
    }
    async function u(e, t) {
      var n = await r("WAWebBizAdCreationResolveVideoURL")(
        t.environment,
        e.videoId,
      );
      return o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
        n,
        e.videoId,
        "resolvePrefillMedia: video",
      );
    }
    l.default = e;
  },
  98,
);
