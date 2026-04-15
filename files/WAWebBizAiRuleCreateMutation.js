__d(
  "WAWebBizAiRuleCreateMutation",
  [
    "WAWebBizAiRuleCreateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiRuleCreateMutation.graphql")),
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
                      { request: e },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_create_rule;
                      if ((t == null ? void 0 : t.success) === !0) {
                        var n;
                        return {
                          isSuccess: !0,
                          ruleId: (n = t.rule) == null ? void 0 : n.id,
                        };
                      }
                      return u;
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.createRule = c;
  },
  98,
);
