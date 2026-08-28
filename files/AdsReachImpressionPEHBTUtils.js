__d(
  "AdsReachImpressionPEHBTUtils",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o(
        "ARXUsabilityHoldoutUtils",
      ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("1434")
        ? (s(),
          o(
            "AMUsabilityHBTCatchAllUtils",
          ).isAccountInUsabilityH1HBTCatchAllTest())
        : null;
    }
    function s() {
      r("gkx")("508");
    }
    l.getReachImpressionPEHBTResult = e;
  },
  98,
);
