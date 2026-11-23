__d(
  "WAProgressiveJpegGetTargetScanLengthForBytes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (
        var n = 0, r = 0, o = 0;
        o < e.length && ((r = o + 1), (n += e[o]), !(n >= t));
        o++
      );
      return r;
    }
    i.getTargetScanBasedOnByteSize = e;
  },
  66,
);
