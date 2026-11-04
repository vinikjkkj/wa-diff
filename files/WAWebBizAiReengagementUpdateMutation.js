__d(
  "WAWebBizAiReengagementUpdateMutation",
  [
    "WAWebBizAiReengagementUpdateMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiReengagementUpdateMutation.graphql")),
      u = { isSuccess: !1 };
    function c(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(s, {
              request: { enabled: e.enabled, amount: e.amount },
            })
            .then(function (e) {
              var t =
                e == null
                  ? void 0
                  : e.xfb_meta_ai_biz_agent_wa_update_reengagement;
              return t != null
                ? { isSuccess: !0, enabled: t.enabled, amount: t.amount }
                : u;
            })
            .catch(function (e) {
              return u;
            });
        });
    }
    l.updateReengagement = c;
  },
  98,
);
