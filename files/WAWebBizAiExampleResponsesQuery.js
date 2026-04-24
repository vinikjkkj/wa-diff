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
                      { environmentType: "facebook", accessToken: e.token },
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
                      return (a == null ? void 0 : a.ordered_knowledge) == null
                        ? u
                        : {
                            isSuccess: !0,
                            orderedKnowledge: a.ordered_knowledge,
                            website:
                              (t =
                                (n = a.knowledge) == null
                                  ? void 0
                                  : n.website) != null
                                ? t
                                : null,
                            websites:
                              (r =
                                (o = a.knowledge) == null
                                  ? void 0
                                  : o.websites) != null
                                ? r
                                : [],
                          };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    var d = { isSuccess: !1 };
    function m() {
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
                      { environmentType: "facebook", accessToken: e.token },
                    )
                    .then(function (e) {
                      var t,
                        n,
                        r =
                          e == null
                            ? void 0
                            : e.xfb_meta_ai_biz_agent_wa_ai_home;
                      return r == null
                        ? d
                        : {
                            isSuccess: !0,
                            products:
                              (t = r.product_info_knowledge) != null ? t : [],
                            isEligible:
                              ((n = r.product_info_eligibility) == null
                                ? void 0
                                : n.eligible) === !0,
                          };
                    })
                    .catch(function (e) {
                      return d;
                    });
                })
            : d;
        });
    }
    ((l.fetchExampleResponses = c), (l.fetchProductInfo = m));
  },
  98,
);
