__d(
  "WAWebRegistrationQrGating",
  ["WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s() === "test";
    }
    function s() {
      return !r("WAWebEnvironment").isWeb ||
        r("WAWebEnvironment").getIsShowroom() ||
        (u() && !c()) ||
        !r("gkx")("29519")
        ? "none"
        : r("gkx")("29520")
          ? "test"
          : "control";
    }
    function u() {
      return r("gkx")("16993") || r("gkx")("14815");
    }
    function c() {
      return r("gkx")("26259");
    }
    ((l.isRegistrationQrEnabled = e), (l.getRegistrationQrExperiment = s));
  },
  98,
);
