__d(
  "WAWebBizAiKnowledgeSourceDeleteMutation",
  [
    "WAWebBizAiKnowledgeSourceDeleteMutation.graphql",
    "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation.graphql",
    "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiKnowledgeSourceDeleteMutation.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n(
              "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation.graphql",
            )),
      p = { isSuccess: !0 },
      _ = { isSuccess: !1 };
    function f(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      c,
                      { input: { uploaded_file_data_source_id: e } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null ? void 0 : e.xfb_maiba_trigger_file_deletion;
                      return (t == null ? void 0 : t.success) === !0 ? p : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    function g(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      d,
                      { input: { website_data_source_id: e } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null ? void 0 : e.maiba_trigger_website_deletion;
                      return (t == null ? void 0 : t.success) === !0 ? p : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    function h() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      m,
                      {},
                      { environmentType: "facebook", accessToken: e.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null ? void 0 : e.xfb_maiba_delete_chat_history;
                      return (t == null ? void 0 : t.success) === !0 ? p : _;
                    })
                    .catch(function (e) {
                      return _;
                    });
                })
            : _;
        });
    }
    ((l.deleteFileSource = f),
      (l.deleteWebsiteSource = g),
      (l.deleteChatHistorySource = h));
  },
  98,
);
