__d(
  "parseMAIBACampaignPlanEvidenceTooltip",
  ["MAIBACampaignPlanTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = e,
        n = typeof t.text == "string" ? t.text : "",
        r = o("MAIBACampaignPlanTypes").WHY_EVIDENCE_TOOLTIP_VARIANTS.find(
          function (e) {
            return e === t.variant;
          },
        );
      return n !== "" && r != null ? { text: n, variant: r } : null;
    }
    l.default = e;
  },
  98,
);
