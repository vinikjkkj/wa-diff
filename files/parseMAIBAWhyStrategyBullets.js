__d(
  "parseMAIBAWhyStrategyBullets",
  [
    "parseMAIBACampaignPlanEvidenceTooltip",
    "parseMAIBACampaignPlanWhyForecast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return [];
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return [];
      }
      if (!Array.isArray(t)) return [];
      var n = [];
      for (var o of t)
        if (!(o == null || typeof o != "object" || Array.isArray(o))) {
          var a = o,
            i = typeof a.label == "string" ? a.label : "",
            l = typeof a.text == "string" ? a.text : "";
          if (i !== "" || l !== "") {
            var s = [];
            if (Array.isArray(a.evidence_tooltips))
              for (var u of a.evidence_tooltips) {
                var c = r("parseMAIBACampaignPlanEvidenceTooltip")(u);
                c != null && s.push(c);
              }
            var d = [];
            if (Array.isArray(a.outcome_forecasts))
              for (var m of a.outcome_forecasts)
                typeof m == "string" && m !== "" && d.push(m);
            var p = r("parseMAIBACampaignPlanWhyForecast")(a.forecast);
            n.push(
              babelHelpers.extends(
                {},
                s.length === 0 ? {} : { evidenceTooltips: s },
                {
                  forecast: p != null ? p : void 0,
                  label: i,
                  outcomeForecasts: d,
                  text: l,
                },
              ),
            );
          }
        }
      return n;
    }
    l.default = e;
  },
  98,
);
