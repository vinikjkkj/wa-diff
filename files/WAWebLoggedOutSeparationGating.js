__d(
  "WAWebLoggedOutSeparationGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("WAWebEnvironment").isWindows || !r("gkx")("27066")
        ? "none"
        : r("gkx")("27067")
          ? "test"
          : "control";
    }
    l.getLoggedOutSeparationExperiment = e;
  },
  98,
);
