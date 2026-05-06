__d(
  "WAWebBizAiKnowledgeSourcesQuery",
  [
    "WAWebBizAiKnowledgeSourcesQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiKnowledgeSourcesQuery.graphql")),
      u = { isSuccess: !1 };
    function c() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .fetchQuery(
                      s,
                      {},
                      {
                        environmentType: "facebook",
                        accessToken: e.token,
                        fetchPolicy: "network-only",
                      },
                    )
                    .then(function (e) {
                      var t =
                        e == null ? void 0 : e.xfb_meta_ai_biz_agent_wa_ai_home;
                      if ((t == null ? void 0 : t.knowledge_sources) == null)
                        return u;
                      var n = [];
                      for (var r of t.knowledge_sources)
                        if (!(r == null || r.source_type == null)) {
                          if (
                            r.source_type === "FILE_UPLOAD" &&
                            r.user_provided_file_name != null
                          ) {
                            var o, a, i, l, s, c;
                            n.push({
                              source_type: "FILE_UPLOAD",
                              id: (o = r.id) != null ? o : "",
                              update_time: (a = r.update_time) != null ? a : 0,
                              label: (i = r.label) != null ? i : "",
                              user_provided_file_name:
                                r.user_provided_file_name,
                              cdn_url: (l = r.cdn_url) != null ? l : null,
                              thumbnail_url:
                                (s = r.thumbnail_url) != null ? s : null,
                              file_type:
                                r.file_type === "IMAGE" ? "IMAGE" : "DOCUMENT",
                              mime_type: (c = r.mime_type) != null ? c : "",
                            });
                          } else if (r.source_type === "CHAT_HISTORY") {
                            var d, m, p, _;
                            n.push({
                              source_type: "CHAT_HISTORY",
                              id: (d = r.id) != null ? d : "",
                              update_time: (m = r.update_time) != null ? m : 0,
                              label: (p = r.label) != null ? p : "",
                              creation_time:
                                (_ = r.creation_time) != null ? _ : 0,
                            });
                          } else if (r.source_type === "WEBSITE") {
                            var f, g, h, y;
                            n.push({
                              source_type: "WEBSITE",
                              id: (f = r.id) != null ? f : "",
                              update_time: (g = r.update_time) != null ? g : 0,
                              label: (h = r.label) != null ? h : "",
                              creation_time:
                                (y = r.creation_time) != null ? y : 0,
                            });
                          }
                        }
                      var C = t.chat_history_export_status,
                        b =
                          C === "NOT_STARTED" ||
                          C === "IN_PROGRESS" ||
                          C === "COMPLETE"
                            ? C
                            : "NOT_ALLOWED";
                      return {
                        isSuccess: !0,
                        sources: n,
                        chatHistoryExportStatus: b,
                      };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.fetchKnowledgeSources = c;
  },
  98,
);
