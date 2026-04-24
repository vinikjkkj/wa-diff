__d(
  "WAWebBizAiLeadGenDeleteMutation",
  [
    "WAWebBizAiLeadGenDeleteMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiLeadGenDeleteMutation.graphql")),
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
                      { request: { flowId: e } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_delete_lead_gen_flow;
                      return (t == null ? void 0 : t.success) === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.deleteLeadGenFlow = d;
  },
  98,
);
