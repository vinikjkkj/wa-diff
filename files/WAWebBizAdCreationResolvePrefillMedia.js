__d(
  "WAWebBizAdCreationResolvePrefillMedia",
  [
    "FBLogger",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoURL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    async function s(e, t) {
      if (e.videoId != null) {
        var n = await c(e, t);
        return { file: n };
      }
      var r = await u(e, t);
      return { file: r };
    }
    async function u(e, t) {
      if (e.url != null)
        try {
          var n = await m(e.url);
          if (n.ok) {
            var o = await n.blob();
            return new File([o], e.imageHash, { type: o.type });
          }
          r("FBLogger")("wa_ctwa_web").warn(
            "resolvePrefillMedia: spec URL returned non-OK status, falling back to image_url_from_hash",
          );
        } catch (e) {
          r("FBLogger")("wa_ctwa_web").warn(
            "resolvePrefillMedia: spec URL fetch failed, falling back to image_url_from_hash",
          );
        }
      var a = await r("WAWebBizAdCreationResolveImageURL")(
        t.environment,
        t.legacyAdAccountID,
        e.imageHash,
      );
      return d(a, e.imageHash, "image");
    }
    async function c(e, t) {
      var n = await r("WAWebBizAdCreationResolveVideoURL")(
        t.environment,
        e.videoId,
      );
      return d(n, e.videoId, "video");
    }
    async function d(e, t, n) {
      var o = await m(e);
      if (!o.ok)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "resolvePrefillMedia: " +
            n +
            " fetch failed (status " +
            o.status +
            ")",
        );
      var a = await o.blob();
      return new File([a], t, { type: a.type });
    }
    function m(t) {
      var n = new AbortController(),
        r = window.setTimeout(function () {
          return n.abort();
        }, e);
      return window.fetch(t, { signal: n.signal }).finally(function () {
        window.clearTimeout(r);
      });
    }
    l.default = s;
  },
  98,
);
