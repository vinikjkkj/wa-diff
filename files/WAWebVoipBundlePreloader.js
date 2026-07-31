__d(
  "WAWebVoipBundlePreloader",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      t != null &&
        o("WAWebVoipGatingUtils").isWebCallingUiEnabled() &&
        (o("WAWebVoipUiLoadable")
          .requireBundle()
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: bundle preloader: WAWebVoipUiLoadable failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-bundle-preloader-ui-fail");
          }),
        t.isVideo &&
          (t.groupJid != null
            ? (o("WAWebVoipUiVideoGroupCallLoadable")
                .requireBundle()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: bundle preloader: group video bundle failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-bundle-preloader-group-video-fail");
                }),
              o("WAWebVoipUiVideoCallLoadable")
                .requireBundle()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: bundle preloader: 1:1 video bundle failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-bundle-preloader-1to1-video-fail");
                }))
            : o("WAWebVoipUiVideoCallLoadable")
                .requireBundle()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: bundle preloader: video bundle failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-bundle-preloader-video-fail");
                })));
    }
    var m = !1;
    function p() {
      m ||
        ((m = !0),
        r("WAWebCallCollection").on(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          d,
        ));
    }
    ((l.preloadForCall = d), (l.initVoipBundlePreloader = p));
  },
  98,
);
