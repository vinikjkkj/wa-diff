__d(
  "useWAWebVideoImplementations",
  ["prepareVideoPlayerImplementations", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = e.mediaId,
        n = e.mediaStream,
        o = e.src;
      return s(
        function () {
          return r("prepareVideoPlayerImplementations")({
            browserNativeHdUrl: o,
            browserNativeSdUrl: o,
            canUseOz: !1,
            dashManifestUrl: null,
            dashManifestXmlString: null,
            initialAudioUserPreferredLanguage: null,
            mediaStream: n,
            minQualityPreference: null,
            nextgendashAvailability:
              "UNAVAILABLE_FROM_JS_OZ_PLAYER_AVAILABILITY",
            videoFBID: t,
            videoPlayerShakaConfig: null,
          });
        },
        [o, n, t],
      );
    }
    l.default = u;
  },
  98,
);
