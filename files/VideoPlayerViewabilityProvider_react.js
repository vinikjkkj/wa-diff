__d(
  "VideoPlayerViewabilityProvider.react",
  ["VideoPlayerViewabilityContexts", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.isDesktopPictureInPicture,
        a = e.isFullscreen,
        i = e.videoPlayerPassiveViewabilityInfo,
        l;
      t[0] !== n || t[1] !== a
        ? ((l = s.jsx(
            o("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
              .Provider,
            { value: a, children: n },
          )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== r || t[4] !== l
        ? ((u = s.jsx(
            o("VideoPlayerViewabilityContexts")
              .VideoPlayerDesktopPictureInPictureContext.Provider,
            { value: r, children: l },
          )),
          (t[3] = r),
          (t[4] = l),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== u || t[7] !== i
          ? ((c = s.jsx(
              o("VideoPlayerViewabilityContexts")
                .VideoPlayerPassiveViewabilityInfoContext.Provider,
              { value: i, children: u },
            )),
            (t[6] = u),
            (t[7] = i),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = u;
  },
  98,
);
