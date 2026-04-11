__d(
  "WAProgressiveJpegGetScanLengths",
  ["WAProgressiveJpegGetScanOffsets"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
        "WAProgressiveJpegGetScanOffsets",
      ).getProgressiveJpegScanOffsets(e);
      return u(t);
    }
    function s(e) {
      return e;
    }
    function u(e) {
      var t = [],
        n = 0;
      for (var r of e) (t.push(r - n), (n = r));
      return t;
    }
    ((l.getProgressiveJpegScanLengths = e),
      (l.asProgressiveJpegScanLength = s));
  },
  98,
);
