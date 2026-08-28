__d(
  "AdsAPIActiveIssuesInfoApiResultGQL-ad_object_spec-resolver",
  [
    "AdsAPIActiveIssuesInfoApiResultGQLAdObjectSpecResolver.graphql",
    "AdsIssuesInfoUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdsAPIActiveIssuesInfoApiResultGQLAdObjectSpecResolver.graphql",
            )),
        t,
      );
      return o("AdsIssuesInfoUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_object_spec = s;
  },
  98,
);
