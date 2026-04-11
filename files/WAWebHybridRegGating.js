__d(
  "WAWebHybridRegGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("3701") ? "test" : "control";
    }
    function s() {
      return r("WAWebEnvironment").isWindows && r("gkx")("4131") ? e() : "none";
    }
    function u() {
      return s() === "test";
    }
    function c() {
      return !u() || d();
    }
    function d() {
      return r("gkx")("26259");
    }
    ((l.getHybridRegExperiment = s),
      (l.isHybridRegEnabled = u),
      (l.shouldShowCountrySelector = c));
  },
  98,
);
