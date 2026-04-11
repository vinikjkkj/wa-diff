__d(
  "VideoPlayerCaptions.react",
  [
    "VideoPlayerCaptionsDisplay.react",
    "VideoPlayerHooks",
    "react",
    "react-compiler-runtime",
    "useVideoPlayerCaptionsDisplayAdjustments",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(4),
        t = (s || (s = o("VideoPlayerHooks"))).useActiveCaptions(),
        n = r("useVideoPlayerCaptionsDisplayAdjustments")(),
        a = s.useCaptionDisplayStyle(),
        i;
      return (
        e[0] !== t || e[1] !== n || e[2] !== a
          ? ((i = u.jsx(r("VideoPlayerCaptionsDisplay.react"), {
              activeCaptions: t,
              adjustments: n,
              captionDisplayStyle: a,
            })),
            (e[0] = t),
            (e[1] = n),
            (e[2] = a),
            (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    l.default = c;
  },
  98,
);
