__d(
  "WAWebVoipVideoEncodeFpsTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 0;
    function s() {
      (e++, (l = window.performance.now()));
    }
    function u() {
      return { frameCount: e, lastFrameTimestampMs: l };
    }
    function c() {
      ((e = 0), (l = 0));
    }
    ((i.recordEncodedVideoFrame = s),
      (i.getEncodedFrameSnapshot = u),
      (i.resetEncodedFrameCounters = c));
  },
  66,
);
