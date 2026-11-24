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
    function u(e, t, n, r) {
      t.length !== 0 &&
        o("RelayRuntime").commitMutation(e, {
          mutation: s,
          onCompleted: o("MAIBARecommendationInboxRefresh")
            .requestMAIBARecommendationInboxRefresh,
          variables: {
            input: babelHelpers.extends(
              { ad_account_id: n, toast_ids: t },
              r != null && r !== "" ? { opened_conversation_id: r } : {},
            ),
          },
        });
    }
    l.default = u;
  },
  98,
);
