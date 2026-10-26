__d(
  "WAWebBizAiReplyChatTriggerUpdateMutation",
  [
    "WAWebBizAiRelayClient",
    "WAWebBizAiReplyChatTriggerUpdateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiReplyChatTriggerUpdateMutation.graphql")),
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
                      { input: { trigger_chat_type: e } },
                      { accessToken: t.token },
                    )
                    .then(function (e) {
                      var t,
                        n =
                          e == null ||
                          (t =
                            e.xfb_meta_ai_biz_agent_wa_update_reply_chat_trigger) ==
                            null
                            ? void 0
                            : t.success;
                      return n === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.updateChatTrigger = d;
  },
  98,
);
