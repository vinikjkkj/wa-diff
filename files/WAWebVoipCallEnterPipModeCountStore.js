__d(
  "WAWebVoipCallEnterPipModeCountStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l() {
      e++;
    }
    function s() {
      return e;
    }
    function u() {
      e = 0;
    }
    ((i.recordCallEnterPipMode = l),
      (i.getCallEnterPipModeCount = s),
      (i.resetCallEnterPipModeCount = u));
  },
  66,
);
