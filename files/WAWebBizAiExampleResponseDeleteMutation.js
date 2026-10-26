__d(
  "WAWebBizAiExampleResponseDeleteMutation",
  [
    "WAWebBizAiExampleResponseDeleteMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiExampleResponseDeleteMutation.graphql")),
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
                    .commitMutation(
                      s,
                      { input: { knowledge_types_to_delete: [e] } },
                      { accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_delete_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    function m(e, t) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (n) {
          return n.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebBizAiRelayClient")
                    .commitMutation(
                      s,
                      { input: { knowledge_types_to_delete: [e], faq_ids: t } },
                      { accessToken: n.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_delete_knowledge;
                      return (t == null ? void 0 : t.success) === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    ((l.deleteExampleResponse = d), (l.deleteKnowledgeWithIds = m));
  },
  98,
);
