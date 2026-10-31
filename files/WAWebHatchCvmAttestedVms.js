__d(
  "WAWebHatchCvmAttestedVms",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      e.add(c(t));
    }
    function s(t) {
      return e.has(c(t));
    }
    function u() {
      e.clear();
    }
    function c(e) {
      return e.toLowerCase();
    }
    ((i.markHatchCvmVmAttested = l),
      (i.isHatchCvmVmAttested = s),
      (i.clearHatchCvmAttestedVms = u));
  },
  66,
);
