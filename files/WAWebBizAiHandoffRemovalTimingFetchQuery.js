__d(
  "WAWebBizAiHandoffRemovalTimingFetchQuery",
  [
    "WALogger",
    "WAWebBizAiHandoffRemovalTimingFetchQuery.graphql",
    "WAWebBizAiHandoffRemovalTimingModel",
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
          : (e = n("WAWebBizAiHandoffRemovalTimingFetchQuery.graphql")),
      c = { isSuccess: !0 },
      d = { isSuccess: !1 };
    function m() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? d
            : r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .fetchQuery(
                      u,
                      {},
                      { environmentType: "facebook", accessToken: e.token },
                    )
                    .then(function (e) {
                      var t,
                        n =
                          e == null ||
                          (t =
                            e.xfb_meta_ai_biz_agent_wa_handoff_removal_timing) ==
                            null
                            ? void 0
                            : t.timing;
                      return n == null
                        ? d
                        : (o(
                            "WAWebBizAiHandoffRemovalTimingModel",
                          ).applyHandoffRemovalTiming(
                            o(
                              "WAWebBizAiHandoffRemovalTimingModel",
                            ).toHandoffRemovalTiming(n),
                          ),
                          c);
                    });
                });
        })
        .catch(function (e) {
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchHandoffRemovalTiming failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("biz-ai-handoff-removal-timing-fetch"),
            d
          );
        });
    }
    ((l.QUERY = u), (l.fetchHandoffRemovalTiming = m));
  },
  98,
);
