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
      c = { isSuccess: !1, error: null };
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
                      var t,
                        n =
                          e == null
                            ? void 0
                            : e.xfb_maiba_trigger_file_knowledge_extraction;
                      if ((n == null ? void 0 : n.success) === !0) {
                        var r;
                        return u(
                          (r = n.uploaded_file_data_source_id) != null
                            ? r
                            : null,
                        );
                      }
                      return {
                        isSuccess: !1,
                        error:
                          (t = n == null ? void 0 : n.error) != null ? t : null,
                      };
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
