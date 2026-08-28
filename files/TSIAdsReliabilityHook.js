__d(
  "TSIAdsReliabilityHook",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(t) {
      e.push(t);
    }
    function s(t, n, r) {
      e.forEach(function (e) {
        return e(t, n, r);
      });
    }
    ((i.callbacks = e), (i.register = l), (i.event = s));
  },
  66,
);
