__d(
  "createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      function t(t) {
        return t.bandwidthEstimate < e ? "IGNORE" : "SKIP";
      }
      return (
        (t.displayName = "evaluateVideoAutoplayIgnoreOnLowBandwidthRule"),
        t
      );
    }
    i.default = e;
  },
  66,
);
