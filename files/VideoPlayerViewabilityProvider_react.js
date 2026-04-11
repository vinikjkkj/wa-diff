__d(
  "VideoPlayerViewabilityProvider.react",
  [
    "VideoPlayerViewabilityContexts",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.isDesktopPictureInPicture,
        i = e.isFullscreen,
        l = e.videoPlayerPassiveViewabilityInfo;
      r("vulture")("OJhKvSb4ZIFTWHnE3YjaNyqqcyo=");
      var u;
      t[0] !== n || t[1] !== i
        ? ((u = s.jsx(
            o("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
              .Provider,
            { value: i, children: n },
          )),
          (t[0] = n),
          (t[1] = i),
          (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== a || t[4] !== u
        ? ((c = s.jsx(
            o("VideoPlayerViewabilityContexts")
              .VideoPlayerDesktopPictureInPictureContext.Provider,
            { value: a, children: u },
          )),
          (t[3] = a),
          (t[4] = u),
          (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== c || t[7] !== l
          ? ((d = s.jsx(
              o("VideoPlayerViewabilityContexts")
                .VideoPlayerPassiveViewabilityInfoContext.Provider,
              { value: l, children: c },
            )),
            (t[6] = c),
            (t[7] = l),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = u;
  },
  98,
);
