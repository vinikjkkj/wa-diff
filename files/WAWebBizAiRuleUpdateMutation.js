__d(
  "WAWebBizAiRuleUpdateMutation",
  [
    "WAWebBizAiRelayClient",
    "WAWebBizAiRuleUpdateMutation.graphql",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiRuleUpdateMutation.graphql")),
      u = { isSuccess: !0 },
      c = { isSuccess: !1 };
    function d(e) {
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
              return c;
            });
        });
    }
    l.updateRule = d;
  },
  98,
);
