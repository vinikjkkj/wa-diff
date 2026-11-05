__d(
  "WAWebBizAiRuleUpdateMutation",
  [
    "WAWebBizAiRelayClient",
    "WAWebBizAiRuleUpdateMutation.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiRuleUpdateMutation.graphql")),
      u = { isSuccess: !0 },
      c = { isSuccess: !1 },
      d = { isContentPolicyViolation: !0, isSuccess: !1 };
    function m(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(s, { request: e })
            .then(function (e) {
              var t =
                e == null ? void 0 : e.xfb_meta_ai_biz_agent_wa_update_rule;
              return (t == null ? void 0 : t.success) === !0 ? u : c;
            })
            .catch(function (e) {
              return o("WAWebGraphQLServerError").isContentPolicyViolationError(
                e,
              )
                ? d
                : c;
            });
        });
    }
    l.updateRule = m;
  },
  98,
);
