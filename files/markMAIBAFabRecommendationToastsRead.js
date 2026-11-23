__d(
  "markMAIBAFabRecommendationToastsRead",
  [
    "MAIBARecommendationInboxRefresh",
    "RelayRuntime",
    "markMAIBAFabRecommendationToastsReadMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("markMAIBAFabRecommendationToastsReadMutation.graphql"));
    function u(e, t, n) {
      t.length !== 0 &&
        o("RelayRuntime").commitMutation(e, {
          mutation: s,
          onCompleted: o("MAIBARecommendationInboxRefresh")
            .requestMAIBARecommendationInboxRefresh,
          variables: { input: { ad_account_id: n, toast_ids: t } },
        });
    }
    l.default = u;
  },
  98,
);
