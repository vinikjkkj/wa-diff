__d(
  "useWAWebVideoImplementations",
  ["prepareVideoPlayerImplementations", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.mediaId,
        a = e.mediaStream,
        i = e.src,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = r("prepareVideoPlayerImplementations")({
              browserNativeHdUrl: i,
              browserNativeSdUrl: i,
              canUseOz: !1,
              dashManifestUrl: null,
              dashManifestXmlString: null,
              initialAudioUserPreferredLanguage: null,
              mediaStream: a,
              minQualityPreference: null,
              nextgendashAvailability:
                "UNAVAILABLE_FROM_JS_OZ_PLAYER_AVAILABILITY",
              videoFBID: n,
              videoPlayerShakaConfig: null,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = u;
  },
  98,
);
