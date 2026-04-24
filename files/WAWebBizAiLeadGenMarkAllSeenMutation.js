__d(
  "WAWebBizAiLeadGenMarkAllSeenMutation",
  [
    "WAWebBizAiLeadGenMarkAllSeenMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiLeadGenMarkAllSeenMutation.graphql")),
      u = { isSuccess: !0 },
      c = { isSuccess: !1 };
    function d(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      s,
                      { request: { leadGenFlowId: e } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.meta_ai_biz_agent_wa_mark_all_lead_gen_data_as_seen_for_flow;
                      return (t == null ? void 0 : t.success) === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.markAllLeadGenDataAsSeenForFlow = d;
  },
  98,
);
