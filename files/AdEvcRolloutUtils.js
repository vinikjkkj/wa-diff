__d(
  "AdEvcRolloutUtils",
  ["AdsMgmtClickthroughEvolutionGatingUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("9847")
        ? !0
        : o(
            "AdsMgmtClickthroughEvolutionGatingUtils",
          ).getIsAccountInClickthroughEvolutionTestGroupWithoutExposure();
    }
    l.isEligibleForCTRedef = e;
  },
  98,
);
