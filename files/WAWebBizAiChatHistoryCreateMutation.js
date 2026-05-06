__d(
  "WAWebBizAiChatHistoryCreateMutation",
  [
    "WALogger",
    "WAWebBizAiChatHistoryCreateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiChatHistoryCreateMutation.graphql")),
      c = { isSuccess: !0 },
      d = { isSuccess: !1 };
    function m(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          if (t.type === "success") {
            var n = e != null ? { input: e } : {};
            return r("WAWebNetworkStatus")
              .waitIfOffline()
              .then(function () {
                return o("WAWebRelayClient")
                  .commitMutation(u, n, {
                    environmentType: "facebook",
                    accessToken: t.token,
                  })
                  .then(function (e) {
                    var t =
                      e == null ? void 0 : e.xfb_maiba_create_chat_history;
                    return (t == null ? void 0 : t.success) === !0 ? c : d;
                  })
                  .catch(function (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "chat history mutation failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("biz-ai-chat-history-mutation"),
                      d
                    );
                  });
              });
          }
          return d;
        });
    }
    l.createChatHistoryBackup = m;
  },
  98,
);
