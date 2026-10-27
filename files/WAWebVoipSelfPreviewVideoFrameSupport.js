__d(
  "WAWebVoipSelfPreviewVideoFrameSupport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1,
      l = new Set();
    function s() {
      return e;
    }
    function u(t) {
      var n = e && !t;
      ((e = t),
        n &&
          l.forEach(function (e) {
            return e();
          }));
    }
    function c(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    ((i.isSelfPreviewVideoFrameSupported = s),
      (i.updateSelfPreviewVideoFrameSupport = u),
      (i.subscribeToSelfPreviewVideoFrameLoss = c));
  },
  66,
);
