__d(
  "WAWebMobileLandingAcquisitionGating",
  ["$InternalEnum", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      Test: "test",
      Control: "control",
      None: "none",
    });
    function s() {
      return r("gkx")("25952") ? e.Test : e.Control;
    }
    function u() {
      return r("gkx")("25953") ? s() : e.None;
    }
    ((l.MobileLandingAcquisitionExperiment = e),
      (l.getMobileLandingAcquisitionExperiment = u));
  },
  98,
);
