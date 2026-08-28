__d(
  "DuplicationUpgradeAbTestingExperimentUtils",
  ["fbt", "$InternalEnum", "AdsInsightsField", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "TOGGLE_AB_TESTING_CHECKBOX",
        "TOGGLE_TURN_OFF_LOSING_VERSION",
        "UPDATE_KEY_METRIC",
        "UPDATE_TEST_DURATION",
      ]),
      u = s._(
        /*BTDS*/ "Run an A\/B test to see the results of applying all selected recommendations",
      ),
      c = s._(
        /*BTDS*/ "We\u2019ll make an additional copy of your campaign and apply all selected recommendations so you can compare performance.",
      ),
      d = s._(/*BTDS*/ "How long should the test run?");
    function m() {
      return r("gkx")("1575");
    }
    function p(e, t, n) {
      if ((e !== "ad_set" && e !== "campaign") || t) return !1;
      var r = n.every(function (e) {
        return e.getAbTestStatus() !== "ineligible";
      });
      return r ? m() : !1;
    }
    function _(e) {
      return e === "L2_DUPLICATION_UPGRADE" || e === "L3_DUPLICATION_UPGRADE";
    }
    ((l.AdsDuplicationUpgradeLightweightABTestToggleActionType = e),
      (l.DEFAULT_KEY_METRIC = r("AdsInsightsField").COST_PER_RESULT),
      (l.AB_TESTING_LABEL_IN_DUPLICATION_UPGRADE_DIALOG = u),
      (l.AB_TESTING_SUB_TEXT_IN_DUPLICATION_UPGRADE_DIALOG = c),
      (l.AB_TESTING_TEST_DURATION_LABEL = d),
      (l.isEligibleForDuAbTestingExperiment = m),
      (l.isAbTestingFeatureVisible = p),
      (l.isDuplicationUpgradeLightweightABTest = _));
  },
  226,
);
