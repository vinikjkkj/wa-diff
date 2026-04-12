__d(
  "WAWebVideoPlayerX.react",
  [
    "CometAudioManagerNoop.react",
    "CometVideoPlayerLoggingConfigForDisabledLogging",
    "VideoPlayerSurface.react",
    "VideoPlayerX.react",
    "WAWebABProps",
    "WAWebSNAPLLoggingConfig",
    "WAWebVideoAutoplayManager.react",
    "react",
    "useWAWebVideoImplementations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["loggingConfig", "loggingToSNAPLAdditionalData", "mediaId"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.loggingConfig,
        a = t.loggingToSNAPLAdditionalData,
        i = t.mediaId,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.alt,
        c = l.apiRef,
        d = l.autoplayEnabled,
        m = d === void 0 ? !1 : d,
        p = l.children,
        _ = l.disableAutoplayManagement,
        f = _ === void 0 ? !1 : _,
        g = l.disableLoadingIndicator,
        h = g === void 0 ? !0 : g,
        y = l.loopCount,
        C = y === void 0 ? 0 : y,
        b = l.mediaStream,
        v = l.poster,
        S = l.renderVideoPixelsFit,
        R = l.src,
        L = l.subOrigin,
        E = l.videoPixelsAspectRatio,
        k = r("useWAWebVideoImplementations")({
          src: R,
          mediaStream: b,
          mediaId: i,
        }),
        I = k.implementations,
        T;
      return (
        f
          ? (T = "dangerously_disable_autoplay_management")
          : m
            ? (T = "allow")
            : (T = "deny"),
        u.jsx(r("WAWebVideoAutoplayManager.react"), {
          disableAutoplayManagement: f,
          children: u.jsx(r("CometAudioManagerNoop.react"), {
            children: u.jsx(r("VideoPlayerX.react"), {
              alt: s,
              apiRef: c,
              autoplayGatingResult: "unknown",
              autoplaySetting: m ? "default_autoplay" : "off",
              canAutoplay: T,
              disableLoadingIndicator: h,
              implementations: I,
              loggingConfig:
                n != null
                  ? n
                  : o("WAWebABProps").getABPropConfigValue(
                        "wa_web_comet_video_player_snapl",
                      )
                    ? o(
                        "WAWebSNAPLLoggingConfig",
                      ).createWAWebDefaultSNAPLLoggingConfig()
                    : o(
                        "CometVideoPlayerLoggingConfigForDisabledLogging",
                      ).createCometVideoPlayerLoggingConfigForDisabledLogging(),
              loggingToSNAPLAdditionalData: a,
              loopCount: C,
              portalingEnabled: !1,
              poster: v,
              renderVideoPixelsFit: S,
              subOrigin: L != null ? L : "not_specified_please_fix",
              videoFBID: i != null ? i : "-1",
              videoPixelsAspectRatio: E,
              children:
                p != null ? p : u.jsx(r("VideoPlayerSurface.react"), {}),
            }),
          }),
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
