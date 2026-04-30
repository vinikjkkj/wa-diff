__d(
  "WAWebBizAiKnowledgeSourceUploadMutation",
  [
    "WAWebBizAiKnowledgeSourceUploadMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiKnowledgeSourceUploadMutation.graphql")),
      u = function (t) {
        return { isSuccess: !0, dataSourceId: t };
      },
      c = { isSuccess: !1 };
    function d(e, t) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (n) {
          return n.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      s,
                      {
                        input: {
                          manifold_file_path: e,
                          user_provided_file_name: t,
                        },
                      },
                      { environmentType: "facebook", accessToken: n.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_maiba_trigger_file_knowledge_extraction;
                      if ((t == null ? void 0 : t.success) === !0) {
                        var n;
                        return u(
                          (n = t.uploaded_file_data_source_id) != null
                            ? n
                            : null,
                        );
                      }
                      return c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.triggerFileExtraction = d;
  },
  98,
);
