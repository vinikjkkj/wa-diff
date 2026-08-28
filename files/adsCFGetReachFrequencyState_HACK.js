__d(
  "adsCFGetReachFrequencyState_HACK",
  ["AdsDataAtom", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    r("requireWeak")("AdsReachFrequencyFlowStore", function (e) {
      s = e;
    });
    function u() {
      return s
        ? ((e || (e = r("AdsDataAtom"))).isDispatching() &&
            (e || (e = r("AdsDataAtom"))).waitFor([s.getDispatchToken()]),
          s.getCurrentState_DO_NOT_USE())
        : {};
    }
    l.default = u;
  },
  98,
);
