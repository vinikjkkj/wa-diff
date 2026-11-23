__d(
  "MAIBAResumeAdEntityActionUtils",
  ["MAIBAInlineActionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "maiba_resume_ad_entity",
      s = "3";
    function u(e) {
      return e === "ad" || e === "campaign" ? e : null;
    }
    function c(t) {
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t,
        r = n.action_id,
        a = n.asset_id,
        i = u(n.entity_type);
      return n.feature_key !== e ||
        n.schema_version !== s ||
        typeof r != "string" ||
        !o("MAIBAInlineActionUtils").isUUIDv4(r) ||
        typeof a != "string" ||
        !o("MAIBAInlineActionUtils").isPositiveNumericID(a) ||
        i == null
        ? null
        : { actionID: r, adAccountID: a, entityType: i };
    }
    ((l.MAIBA_RESUME_AD_ENTITY = e), (l.getResumeAdEntityActionConfig = c));
  },
  98,
);
