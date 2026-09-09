__d(
  "WAWebBizAdCreationCreativeMediaProjection",
  ["FBLogger", "WAWebBizAdCreationCreativeMediaModel", "WAWebMmsMediaTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .filter(o("WAWebBizAdCreationCreativeMediaModel").isCreativeMediaReady)
        .flatMap(function (e) {
          var t = e.kind,
            n = e.resolvedHash,
            a = e.resolvedUrl,
            i = e.thumbnailHash,
            l = e.videoId,
            s = t === "video";
          return (s ? l == null || (i == null && a == null) : n == null)
            ? (r("FBLogger")("wa_ctwa_web").mustfix(
                "Ready creative media item cannot be projected into a card: " +
                  e.key,
              ),
              [])
            : [
                {
                  hash: s ? null : n,
                  thumbnailHash: s ? i : null,
                  type: s
                    ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO
                    : o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE,
                  url: a,
                  videoId: s ? l : null,
                },
              ];
        });
    }
    l.creativeMediaItemsToCarouselCardsData = e;
  },
  98,
);
