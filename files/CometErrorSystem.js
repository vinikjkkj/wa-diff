__d(
  "CometErrorSystem",
  ["CometErrorLogging", "QuickMarkersComet", "cr:1267207", "cr:4038"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("CometErrorLogging").init(e),
        n("cr:4038") && n("cr:4038").init(),
        n("cr:1267207") && n("cr:1267207")(),
        o("QuickMarkersComet").init());
    }
    l.init = e;
  },
  98,
);
