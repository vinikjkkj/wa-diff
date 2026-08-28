__d(
  "adsPlacementAPISpecReaderIsActiveThreadsPosition",
  ["adsPlacementAPISpecReaderIsActivePublisherPlatform"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "threads") &&
        Array.isArray(e.threads_positions) &&
        e.threads_positions.includes(t)
      );
    }
    l.default = e;
  },
  98,
);
