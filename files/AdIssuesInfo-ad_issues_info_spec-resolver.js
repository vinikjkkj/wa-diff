__d(
  "AdIssuesInfo-ad_issues_info_spec-resolver",
  [
    "AdIssuesInfoAdIssuesInfoSpecResolver.graphql",
    "AdIssuesInfoUtils",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdIssuesInfoAdIssuesInfoSpecResolver.graphql")),
        t,
      );
      return o("AdIssuesInfoUtils").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_issues_info_spec = s;
  },
  98,
);
