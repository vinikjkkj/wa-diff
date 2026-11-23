__d(
  "MAIBAFabIssueTypes",
  ["isMAIBAFabIssueDigestAvailable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "risk" || e === "unsettled" || e === "digest";
    }
    function s(e, t) {
      return e === "digest"
        ? r("isMAIBAFabIssueDigestAvailable")(t)
        : (e === "risk" || e === "unsettled") &&
            t !== "Ads Manager (Campaigns)";
    }
    function u(e, t) {
      return e === "DIGEST"
        ? r("isMAIBAFabIssueDigestAvailable")(t)
        : (e === "RISK_DISABLED" || e === "UNSETTLEMENT") &&
            t !== "Ads Manager (Campaigns)";
    }
    function c(e) {
      return e === "digest";
    }
    ((l.isMAIBAFabIssueToastType = e),
      (l.isMAIBAFabIssueTypeShown = s),
      (l.isMAIBAFabIssueSourceShown = u),
      (l.isMAIBAFabAccountWideIssueType = c));
  },
  98,
);
