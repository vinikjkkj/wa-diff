__d(
  "EngagementUnitificationGating",
  [
    "AdsAPIObjectives",
    "AdsProductGrowthH2Round1HbtExposure",
    "AdsProgressiveDisclosureUtils",
    "CurrentAdAccount",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e) return r("qex")._("4603") === !0 || s(!1) || u(!1);
      var t = r("qex")._("4607") === !0,
        n = s(!0),
        o = u(!0, t || n);
      return t || n || o;
    }
    function s(e) {
      return e ? r("qex")._("4125") === !0 : r("qex")._("4116") === !0;
    }
    function u(e, t) {
      if ((t === void 0 && (t = !1), !e))
        return r("qex")._("2146") === !0 || r("gkx")("17193") === !0;
      var n = r("qex")._("2147") === !0,
        a = r("gkx")("17632") === !0;
      return (
        o(
          "AdsProductGrowthH2Round1HbtExposure",
        ).logProductGrowthH2Round1HbtExposure(
          "eu_cbo_defaulting",
          r("CurrentAdAccount").getID(),
          a,
          t || n,
        ),
        n || a
      );
    }
    function c(e) {
      if (!e)
        return (
          (r("gkx")("18819") && !r("gkx")("16636")) ||
          r("qex")._("4603") === !0 ||
          r("qex")._("5317") === !0 ||
          s(!1)
        );
      var t = r("gkx")("20739") && !r("gkx")("17134"),
        n = r("qex")._("4607") === !0,
        o = r("qex")._("5318") === !0,
        a = s(!0);
      return t || n || o || a;
    }
    function d(t) {
      if (!t) return r("qex")._("4603") === !0 || c(!1) || e(!1) || s(!1);
      var n = r("qex")._("4607") === !0,
        o = c(!0),
        a = e(!0),
        i = s(!0);
      return n || o || a || i;
    }
    function m(e) {
      if (!e) return r("gkx")("21093") === !0 || s(!1);
      var t = r("gkx")("21093") === !0,
        n = s(!0);
      return t || n;
    }
    function p(e) {
      return m(e)
        ? o("AdsProgressiveDisclosureUtils").ProgressiveDisclosureVariation
            .StaticExtended
        : null;
    }
    function _(t) {
      return t === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT && e(!1);
    }
    function f(t) {
      return t !== o("AdsAPIObjectives").OUTCOME_ENGAGEMENT ? !1 : e(!0);
    }
    function g(e) {
      return e === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT && d(!1);
    }
    function h(e) {
      return e !== o("AdsAPIObjectives").OUTCOME_ENGAGEMENT ? !1 : d(!0);
    }
    function y(e) {
      return e === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT && c(!1);
    }
    function C(e) {
      return e === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT && m(!1);
    }
    function b(e) {
      return e !== o("AdsAPIObjectives").OUTCOME_ENGAGEMENT ? !1 : m(!0);
    }
    function v(e, t) {
      return C(e) ? [] : t;
    }
    ((l.getEULaunch1BudgetExperiment = e),
      (l.getEULaunch1AudienceExperiment = c),
      (l.getEULaunch1Experiment = d),
      (l.isEUCreateEditDuplicationNUXEnabled = m),
      (l.getEUCreateEditDuplicationNUXProgressiveDisclosureVariation = p),
      (l.isEngagementObjectiveAndEULaunch1BudgetEnabled = _),
      (l.isEngagementObjectiveAndEULaunch1BudgetEnabledWithLog = f),
      (l.isEngagementObjectiveAndEULaunch1Enabled = g),
      (l.isEngagementObjectiveAndEULaunch1EnabledWithLog = h),
      (l.isEngagementObjectiveAndEULaunch1AudienceEnabled = y),
      (l.isEngagementObjectiveAndEUCreateEditDuplicationNUXEnabled = C),
      (l.isEngagementObjectiveAndEUCreateEditDuplicationNUXEnabledWithLog = b),
      (l.getEligibleCreationPackagesForEUBetaDuplication = v));
  },
  98,
);
