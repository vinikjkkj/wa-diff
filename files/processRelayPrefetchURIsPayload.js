__d(
  "processRelayPrefetchURIsPayload",
  [
    "CometFeedImagePrefetchConfig",
    "CometImagePrefetchCache",
    "ExecutionEnvironment",
    "getCometImageClientDPR",
    "getCometImageWidthForSurface",
    "rewriteCometImageCDNParamsMaybe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = r("CometFeedImagePrefetchConfig").dedupe,
          a = {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
          };
        t.forEach(function (e) {
          var t = e.uri;
          if (typeof t == "string") {
            if (
              n &&
              o("CometImagePrefetchCache").getPrefetchedURI(t, e.surface) !=
                null
            )
              return;
            var i = r("getCometImageWidthForSurface")(e.surface, e.width, a),
              l =
                i != null
                  ? r("rewriteCometImageCDNParamsMaybe")(t, {
                      targetWidth: Math.round(
                        i * r("getCometImageClientDPR")(),
                      ),
                    })
                  : t,
              s = new Image();
            ((s.src = l),
              o("CometImagePrefetchCache").recordPrefetchedURI(
                t,
                e.surface,
                l,
              ));
          }
        });
      }
    }
    l.default = s;
  },
  98,
);
