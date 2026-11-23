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
    var c = new Set(
        [r("MAIBACreationStepsSection").AUDIENCE].concat(
          r("justknobx")._("900")
            ? [r("MAIBACreationStepsSection").PLACEMENTS]
            : [],
        ),
      ),
      d = new Set([
        r("MAIBACreationStepsSection").CONVERSION_LOCATION,
        r("MAIBACreationStepsSection").AD_SETUP,
        r("MAIBACreationStepsSection").BUDGET,
      ]),
      m = new Set([r("MAIBACreationStepsSection").PLACEMENTS]),
      p = new Set([
        r("MAIBACreationStepsSection").AUDIENCE,
        r("MAIBACreationStepsSection").BUDGET,
        r("MAIBACreationStepsSection").PLACEMENTS,
        r("MAIBACreationStepsSection").CREATIVE,
      ]),
      _ = new Set(
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
      f = new Set([
        "atleast_6_placements",
        "six_plus_manual_placements",
        "automatic_placements",
        "ig_surfaces_manual_placements",
      ]),
      g = new Set([
        "advanced_campaign_budget",
        "advantage_plus_audience",
        "audience_expansion_retargeting",
        "atleast_6_placements",
        "six_plus_manual_placements",
        "automatic_placements",
        "ctx_sabr_cbo",
        "ig_surfaces_manual_placements",
      ]),
      h = new Set(["conversion_leads_optimization", "offsite_conversion"]),
      y = new Set(["conversion_leads_optimization", "offsite_conversion"]);
    function C(t, n, a) {
      if (e() && p.has(t)) return !0;
      var i = c.has(t) || (d.has(t) && u()) || (s() && m.has(t));
      return (
        r("justknobx")._("5542") &&
        i &&
        o("MAIBAR23ExperimentUtils").isCopilotTest({
          callsite: n,
          logExposure: a,
        })
      );
    }
    function b(e, t) {
      C(e, t, !0);
    }
    function v(t, n) {
      if (e()) return g.has(t);
      var r = _.has(t) || (s() && f.has(t));
      return (
        r &&
        o("MAIBAR23ExperimentUtils").isCopilotTest({
          callsite: n,
          logExposure: !0,
        })
      );
    }
    function S(t, n) {
      return e()
        ? y.has(t)
        : r("justknobx")._("5544") &&
            h.has(t) &&
            o("MAIBAR23ExperimentUtils").isCopilotTest({
              callsite: n,
              logExposure: !0,
            });
    }
    ((l.isEntrypointExpansionEnabled = u),
      (l.isACSCopilotEligible = C),
      (l.logACSCopilotExposure = b),
      (l.isPFRCopilotEligible = v),
      (l.isPCRCopilotEligible = S));
  },
  98,
);
