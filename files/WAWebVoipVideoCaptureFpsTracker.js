__d(
  "WAWebVoipVideoCaptureFpsTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 0,
      s = 0;
    function u() {
      ((e = 0), (l = 0), (s = 0));
    }
    function c() {
      var t = Date.now();
      (l === 0 && (l = t), (s = t), e++);
    }
    function d() {
      if (e === 0) return null;
      var t = s - l,
        n = t > 0 ? Math.round(((e - 1) * 1e3) / t) : 0;
      return (u(), { videoCaptureAvgFps: n });
    }
    ((i.resetVideoCaptureFpsCounters = u),
      (i.recordCapturedVideoFrame = c),
      (i.consumeVideoCaptureFpsSnapshot = d));
  },
  66,
);
