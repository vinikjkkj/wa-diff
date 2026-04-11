__d(
  "VideoPlayerProgressiveImplementationV2.react",
  [
    "VideoPlayerImplementationEngineHook",
    "VideoPlayerProgressiveImplementationEngine",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
          "VideoPlayerImplementationEngineHook",
        ).useVideoPlayerImplementationEngine(
          e,
          o("VideoPlayerProgressiveImplementationEngine")
            .createVideoPlayerProgressiveImplementationEngine,
        ),
        n = t.reactVideoFrameAndComponents;
      return n;
    }
    l.default = e;
  },
  98,
);
