__d(
  "ScoreNameMFRUtils",
  ["AdsOSAUExperimentUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("AdsOSAUExperimentUtils").isOSAndAUTest({ logExposure: !1 })
        ? "guidance_score_os_au"
        : "guidance_score_os_v2";
    }
    l.getScoreNameMFR = e;
  },
  98,
);
