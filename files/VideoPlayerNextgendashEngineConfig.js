__d(
  "VideoPlayerNextgendashEngineConfig",
  ["SidneeAbrConfigUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e && t === !1;
    }
    function s(e) {
      var t = e.videoPreferredMinimumSmallestDimension;
      return {
        sidneeConfig: o("SidneeAbrConfigUtils").createSidneeAbrConfig(),
        videoPreferredMinimumSmallestDimension: t,
      };
    }
    ((l.isVideoPlayerNextgendashVODOnlyConfigEnabled = e),
      (l.createVideoPlayerNextgendashABRConfig = s));
  },
  98,
);
