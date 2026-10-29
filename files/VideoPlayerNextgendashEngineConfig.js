__d(
  "VideoPlayerNextgendashEngineConfig",
  ["SidneeAbrConfigUtils", "UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e && t === "MSE" && r("UserAgent").isBrowser("Chrome 68.*")
        ? 0.001
        : 0;
    }
    function s(e, t) {
      return e && t === !1;
    }
    function u(e) {
      var t = e.videoPreferredMinimumSmallestDimension;
      return {
        sidneeConfig: o("SidneeAbrConfigUtils").createSidneeAbrConfig(),
        videoPreferredMinimumSmallestDimension: t,
      };
    }
    ((l.getVideoPlayerNextgendashLGBufferedRangeStartToleranceSec = e),
      (l.isVideoPlayerNextgendashVODOnlyConfigEnabled = s),
      (l.createVideoPlayerNextgendashABRConfig = u));
  },
  98,
);
