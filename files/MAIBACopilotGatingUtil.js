__d(
  "MAIBACopilotGatingUtil",
  ["MAIBACreationStepsSection", "MAIBAR23ExperimentUtils", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11201");
    }
    function s() {
      return r("gkx")("26171");
    }
    function u() {
      return r("gkx")("6972");
    }
    function c() {
      return (r("gkx")("11638"), r("gkx")("9696"));
    }
    var d = new Set(
        [r("MAIBACreationStepsSection").AUDIENCE].concat(
          r("justknobx")._("900")
            ? [r("MAIBACreationStepsSection").PLACEMENTS]
            : [],
        ),
      ),
      m = new Set([
        r("MAIBACreationStepsSection").CONVERSION_LOCATION,
        r("MAIBACreationStepsSection").AD_SETUP,
        r("MAIBACreationStepsSection").BUDGET,
      ]),
      p = new Set([r("MAIBACreationStepsSection").PLACEMENTS]),
      _ = new Set([
        r("MAIBACreationStepsSection").AUDIENCE,
        r("MAIBACreationStepsSection").BUDGET,
        r("MAIBACreationStepsSection").PLACEMENTS,
        r("MAIBACreationStepsSection").CREATIVE,
      ]),
      f = new Set(
        ["advantage_plus_audience", "audience_expansion_retargeting"].concat(
          r("justknobx")._("900")
            ? [
                "atleast_6_placements",
                "automatic_placements",
                "ig_surfaces_manual_placements",
              ]
            : [],
        ),
      ),
      g = new Set([
        "atleast_6_placements",
        "six_plus_manual_placements",
        "automatic_placements",
        "ig_surfaces_manual_placements",
      ]),
      h = new Set([
        "advanced_campaign_budget",
        "advantage_plus_audience",
        "audience_expansion_retargeting",
        "atleast_6_placements",
        "six_plus_manual_placements",
        "automatic_placements",
        "ctx_sabr_cbo",
        "ig_surfaces_manual_placements",
      ]),
      y = new Set(["conversion_leads_optimization", "offsite_conversion"]),
      C = new Set(["conversion_leads_optimization", "offsite_conversion"]);
    function b(t, n, a) {
      if (e() && _.has(t)) return !0;
      var i = d.has(t) || (m.has(t) && u()) || (s() && p.has(t));
      return (
        r("justknobx")._("5542") &&
        i &&
        o("MAIBAR23ExperimentUtils").isCopilotTest({
          callsite: n,
          logExposure: a,
        })
      );
    }
    function v(e, t) {
      b(e, t, !0);
    }
    function S(t, n) {
      if (e()) return h.has(t);
      var a = f.has(t) || (s() && g.has(t));
      return (
        r("justknobx")._("5543") &&
        a &&
        o("MAIBAR23ExperimentUtils").isCopilotTest({
          callsite: n,
          logExposure: !0,
        })
      );
    }
    function R(t, n) {
      return e()
        ? C.has(t)
        : y.has(t) &&
            o("MAIBAR23ExperimentUtils").isCopilotTest({
              callsite: n,
              logExposure: !0,
            });
    }
    ((l.isEntrypointExpansionEnabled = u),
      (l.isEntrypointDesignEnabled = c),
      (l.isACSCopilotEligible = b),
      (l.logACSCopilotExposure = v),
      (l.isPFRCopilotEligible = S),
      (l.isPCRCopilotEligible = R));
  },
  98,
);
