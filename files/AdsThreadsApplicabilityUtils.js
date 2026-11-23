__d(
  "AdsThreadsApplicabilityUtils",
  [
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "threads",
      ) ||
        !e.threads_positions ||
        !e.threads_positions.length
        ? 0
        : e.threads_positions.length;
    }
    function s(e) {
      return (
        r("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          e,
          "threads",
        ) &&
        !!e.threads_positions &&
        e.threads_positions.length === 1
      );
    }
    var u = {
        placementSpecGetThreadsPositionsCount: e,
        placementSpecHasThreadsOnly: s,
      },
      c = u;
    l.default = c;
  },
  98,
);
