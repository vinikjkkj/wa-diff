__d(
  "WAWebBizAiLeadGenUpdateMutation",
  [
    "WAWebBizAiLeadGenUpdateMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiLeadGenUpdateMutation.graphql")),
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
                  return o("WAWebBizAiRelayClient")
                    .commitMutation(s, { request: e }, { accessToken: t.token })
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_update_lead_gen_flow;
                      return (t == null ? void 0 : t.success) === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.updateLeadGenFlow = d;
  },
  98,
);
