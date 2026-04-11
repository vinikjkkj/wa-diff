__d(
  "oz-player/media_source/SourceBufferManagerUtils",
  ["oz-player/utils/OzSourceBufferUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = o("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(t);
      return function () {
        var e = o("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(t);
        return { startTime: r, endTime: e };
      };
    }
    l.startMeasuringAppendedBuffer = e;
  },
  98,
);
