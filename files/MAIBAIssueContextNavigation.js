__d(
  "MAIBAIssueContextNavigation",
  ["CurrentUser", "ExecutionEnvironment", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useLayoutEffect,
      c = new Set([
        "MBS Billing Accounts",
        "MBS Billing Credit Lines",
        "MBS Billing",
        "MBS Billing Invoices",
        "MBS Billing Legal Entities",
        "MBS Billing Payment Activity",
        "MBS Billing Payment Methods",
        "MBS Billing Payment Settings",
        "MBS Billing Prepaid Funds",
      ]),
      d = null;
    function m() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? window.location.pathname + window.location.search
        : "";
    }
    function p() {
      var e = d;
      return e != null &&
        e.viewerKey === r("CurrentUser").getPossiblyNonFacebookUserID() &&
        e.locationKey === m()
        ? e.surface
        : null;
    }
    function _(e, t, n) {
      var r = { locationKey: n, surface: e, viewerKey: t };
      return (
        (d = r),
        function () {
          d === r && (d = null);
        }
      );
    }
    function f(e) {
      var t = r("CurrentUser").getPossiblyNonFacebookUserID(),
        n = m();
      u(
        function () {
          return _(e, t, n);
        },
        [n, e, t],
      );
    }
    function g() {
      d = null;
    }
    ((l.MAIBA_ISSUE_CONTEXT_BILLING_DESKTOP_TABS = c),
      (l.getMAIBAIssueContextNavigationSurface = p),
      (l.useMAIBAIssueContextNavigationSurface = f),
      (l.resetMAIBAIssueContextNavigationSurface = g));
  },
  98,
);
