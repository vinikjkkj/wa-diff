__d(
  "WAWebVoipVideoFrameConsumedSignal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s() {
      e.forEach(function (e) {
        return e();
      });
    }
    ((i.subscribeToVideoFrameConsumed = l), (i.notifyVideoFrameConsumed = s));
  },
  66,
);
