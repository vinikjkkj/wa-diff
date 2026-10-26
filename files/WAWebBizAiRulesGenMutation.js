__d(
  "WAWebBizAiRulesGenMutation",
  [
    "WAWebBizAiRelayClient",
    "WAWebBizAiRulesGenMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiRulesGenMutation.graphql")),
      u = { isSuccess: !1 };
    function c() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebBizAiRelayClient")
                    .commitMutation(s, {}, { accessToken: e.token })
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_gen_rules;
                      return (t == null ? void 0 : t.success) !== !0 ||
                        t.rules == null
                        ? u
                        : {
                            isSuccess: !0,
                            rules: t.rules,
                            reengagement: t.reengagement,
                          };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    ((l.MUTATION = s), (l.fetchRules = c));
  },
  98,
);
