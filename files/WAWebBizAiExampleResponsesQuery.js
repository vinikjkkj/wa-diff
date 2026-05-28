__d(
  "WAWebBizAiExampleResponsesQuery",
  [
    "WAWebBizAiExampleResponsesQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiExampleResponsesQuery.graphql")),
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
                      var t,
                        n,
                        r,
                        o,
                        a =
                          e == null
                            ? void 0
                            : e.xfb_meta_ai_biz_agent_wa_ai_home;
                      if ((a == null ? void 0 : a.ordered_knowledge) == null)
                        return u;
                      var i = [];
                      for (var l of (s =
                        (c = a.knowledge) == null ? void 0 : c.bestsellers) !=
                      null
                        ? s
                        : []) {
                        var s, c;
                        (l == null ? void 0 : l.id) != null && i.push(l.id);
                      }
                      return {
                        isSuccess: !0,
                        orderedKnowledge: a.ordered_knowledge,
                        website:
                          (t =
                            (n = a.knowledge) == null ? void 0 : n.website) !=
                          null
                            ? t
                            : null,
                        websites:
                          (r =
                            (o = a.knowledge) == null ? void 0 : o.websites) !=
                          null
                            ? r
                            : [],
                        bestsellers: i,
                      };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.fetchExampleResponses = c;
  },
  98,
);
