__d(
  "getMAIBAIssueContextIssueLabelText",
  ["fbt", "parseMAIBAIssueContextUserLabelVars"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a, i) {
      if ((i === void 0 && (i = !1), o && a))
        return s._(/*BTDS*/ "", [s._param("account ID", n)]).toString();
      if (o && i)
        return s._(/*BTDS*/ "", [s._param("account ID", n)]).toString();
      var l = r("parseMAIBAIssueContextUserLabelVars")(t),
        u = l.asset_name;
      switch (e) {
        case "restricted_asset_review":
        case "dora_review_disabled_asset":
          return u != null && u !== ""
            ? s._(/*BTDS*/ "", [s._param("asset name", u)]).toString()
            : s._(/*BTDS*/ "").toString();
        case "page_takedown_review":
          return u != null && u !== ""
            ? s._(/*BTDS*/ "", [s._param("asset name", u)]).toString()
            : s._(/*BTDS*/ "").toString();
        case "dsl_change_request":
          return s._(/*BTDS*/ "").toString();
        case "failed_payment_review":
          return s._(/*BTDS*/ "").toString();
        case "ad_reject_review":
          return s._(/*BTDS*/ "").toString();
      }
      return null;
    }
    l.default = e;
  },
  226,
);
