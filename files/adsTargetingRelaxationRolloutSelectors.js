__d(
  "adsTargetingRelaxationRolloutSelectors",
  ["AdsAccountStore", "adsCreateSelector", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("AdsAccountStore").getSelectedAccount],
      function (t) {
        return r("gkx")("21293");
      },
      { name: i.id + ".containsAccountExclusionRuleSelector" },
    );
    function s() {
      return r("gkx")("1943");
    }
    ((l.containsAccountExclusionRuleSelector = e),
      (l.passesEnableAutomationForPharmaAdvertiser = s));
  },
  98,
);
