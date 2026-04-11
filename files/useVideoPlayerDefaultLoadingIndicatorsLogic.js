__d(
  "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ["VideoPlayerHooks", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = o("react-compiler-runtime").c(4),
        n = (e || (e = o("VideoPlayerHooks"))).useStalling(),
        r = e.useStreamInterrupted(),
        a = e.useIsLiveRewindActive(),
        i = r && !a,
        l = n,
        s = i ? "live_video_interrupted_overlay" : l ? "spinner" : "none",
        u;
      return (
        t[0] !== i || t[1] !== s || t[2] !== l
          ? ((u = {
              liveVideoInterruptedOverlayVisible: i,
              loadingIndicatorType: s,
              spinnerVisible: l,
            }),
            (t[0] = i),
            (t[1] = s),
            (t[2] = l),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    l.default = s;
  },
  98,
);
