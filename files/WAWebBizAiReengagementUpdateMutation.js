__d(
  "WAWebBizAiReengagementUpdateMutation",
  [
    "WAWebBizAiReengagementUpdateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiReengagementUpdateMutation.graphql")),
      u = { isSuccess: !1 };
    function c(e) {
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
                      { request: { enabled: e.enabled, amount: e.amount } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_update_reengagement;
                      return t != null
                        ? {
                            isSuccess: !0,
                            enabled: t.enabled,
                            amount: t.amount,
                          }
                        : u;
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.updateReengagement = c;
  },
  98,
);
