__d(
  "CometPixelRatioDetector",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("CometPixelRatioUpdater").__setRef(
      "CometPixelRatioDetector",
    );
    function s() {
      e.onReady(function (e) {
        return e.startDetecting();
      });
    }
    l.initDetecting = s;
  },
  98,
);
