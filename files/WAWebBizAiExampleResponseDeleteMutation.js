__d(
  "WAWebBizAiExampleResponseDeleteMutation",
  [
    "WAWebBizAiExampleResponseDeleteMutation.graphql",
    "WAWebBizAiRelayClient",
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
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(s, { input: { knowledge_types_to_delete: [e] } })
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
        });
    }
    function m(e, t) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(s, {
              input: { knowledge_types_to_delete: [e], faq_ids: t },
            })
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
        });
    }
    ((l.deleteExampleResponse = d), (l.deleteKnowledgeWithIds = m));
  },
  98,
);
