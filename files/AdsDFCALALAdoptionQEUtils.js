__d(
  "AdsDFCALALAdoptionQEUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsAudienceMode",
    "AdsLeadGenAutomationQEUtils",
    "AdsUEditorHostIDs",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsLeadGenAutomationQEUtils").isLeadsObjective(e)
        ? r("gkx")("13324") || r("gkx")("16707")
        : !1;
    }
    function s(e, t, n, a, i) {
      return !o("AdsLeadGenAutomationQEUtils").isLeadsObjective(e) ||
        (t != null && t !== r("AdsAudienceMode").INCLUDE) ||
        n === r("AdsUEditorHostIDs").BULK_EDIT_DIALOG ||
        a === !0 ||
        (i != null && !m().has(i))
        ? !1
        : u() || c();
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("1755") === !0 : r("qex")._("3030") === !0
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("3671") === !0 : r("qex")._("3681") === !0
      );
    }
    var d = new Set([
      r("AdsAPIOptimizationGoals").LEAD_GENERATION,
      r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
    ]);
    function m() {
      return d;
    }
    function p(e) {
      return e
        .map(function (e) {
          var t;
          return (t = e.targeting) == null || (t = t.geo_locations) == null
            ? void 0
            : t.countries;
        })
        .filter(Boolean)
        .flat();
    }
    ((l.isInLeadGenDFCALalExpTargetingGK = e),
      (l.dfcaLalasEnabled = s),
      (l.dfcaLalGuidanceIBTEnabled = u),
      (l.dfcaLalGuidancePretestEnabled = c),
      (l.getDFCALaLaaSSupportedOptimizationGoals = m),
      (l.getAllTargetingCountries = p));
  },
  98,
);
