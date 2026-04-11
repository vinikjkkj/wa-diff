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
    "react-compiler-runtime",
    "useWAWebVideoImplementations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["loggingConfig", "loggingToSNAPLAdditionalData", "mediaId"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(32),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((i = t.loggingConfig),
          (l = t.loggingToSNAPLAdditionalData),
          (s = t.mediaId),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c = a,
        d = c.alt,
        m = c.apiRef,
        p = c.autoplayEnabled,
        _ = c.children,
        f = c.disableAutoplayManagement,
        g = c.disableLoadingIndicator,
        h = c.loopCount,
        y = c.mediaStream,
        C = c.poster,
        b = c.renderVideoPixelsFit,
        v = c.src,
        S = c.subOrigin,
        R = c.videoPixelsAspectRatio,
        L = p === void 0 ? !1 : p,
        E = f === void 0 ? !1 : f,
        k = g === void 0 ? !0 : g,
        I = h === void 0 ? 0 : h,
        T;
      n[5] !== s || n[6] !== y || n[7] !== v
        ? ((T = { src: v, mediaStream: y, mediaId: s }),
          (n[5] = s),
          (n[6] = y),
          (n[7] = v),
          (n[8] = T))
        : (T = n[8]);
      var D = r("useWAWebVideoImplementations")(T),
        x = D.implementations,
        $;
      E
        ? ($ = "dangerously_disable_autoplay_management")
        : L
          ? ($ = "allow")
          : ($ = "deny");
      var P = L ? "default_autoplay" : "off",
        N;
      n[9] !== i
        ? ((N =
            i != null
              ? i
              : o("WAWebABProps").getABPropConfigValue(
                    "wa_web_comet_video_player_snapl",
                  )
                ? o(
                    "WAWebSNAPLLoggingConfig",
                  ).createWAWebDefaultSNAPLLoggingConfig()
                : o(
                    "CometVideoPlayerLoggingConfigForDisabledLogging",
                  ).createCometVideoPlayerLoggingConfigForDisabledLogging()),
          (n[9] = i),
          (n[10] = N))
        : (N = n[10]);
      var M = S != null ? S : "not_specified_please_fix",
        w = s != null ? s : "-1",
        A;
      n[11] !== _
        ? ((A = _ != null ? _ : u.jsx(r("VideoPlayerSurface.react"), {})),
          (n[11] = _),
          (n[12] = A))
        : (A = n[12]);
      var F;
      n[13] !== d ||
      n[14] !== m ||
      n[15] !== $ ||
      n[16] !== k ||
      n[17] !== x ||
      n[18] !== l ||
      n[19] !== I ||
      n[20] !== C ||
      n[21] !== b ||
      n[22] !== A ||
      n[23] !== P ||
      n[24] !== N ||
      n[25] !== M ||
      n[26] !== w ||
      n[27] !== R
        ? ((F = u.jsx(r("CometAudioManagerNoop.react"), {
            children: u.jsx(r("VideoPlayerX.react"), {
              alt: d,
              apiRef: m,
              autoplayGatingResult: "unknown",
              autoplaySetting: P,
              canAutoplay: $,
              disableLoadingIndicator: k,
              implementations: x,
              loggingConfig: N,
              loggingToSNAPLAdditionalData: l,
              loopCount: I,
              portalingEnabled: !1,
              poster: C,
              renderVideoPixelsFit: b,
              subOrigin: M,
              videoFBID: w,
              videoPixelsAspectRatio: R,
              children: A,
            }),
          })),
          (n[13] = d),
          (n[14] = m),
          (n[15] = $),
          (n[16] = k),
          (n[17] = x),
          (n[18] = l),
          (n[19] = I),
          (n[20] = C),
          (n[21] = b),
          (n[22] = A),
          (n[23] = P),
          (n[24] = N),
          (n[25] = M),
          (n[26] = w),
          (n[27] = R),
          (n[28] = F))
        : (F = n[28]);
      var O;
      return (
        n[29] !== E || n[30] !== F
          ? ((O = u.jsx(r("WAWebVideoAutoplayManager.react"), {
              disableAutoplayManagement: E,
              children: F,
            })),
            (n[29] = E),
            (n[30] = F),
            (n[31] = O))
          : (O = n[31]),
        O
      );
    }
    l.default = c;
  },
  98,
);
