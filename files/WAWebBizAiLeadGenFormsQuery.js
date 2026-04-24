__d(
  "WAWebBizAiLeadGenFormsQuery",
  [
    "WAWebBizAiLeadGenFormsQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiLeadGenFormsQuery.graphql")),
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
                      var t =
                        e == null ? void 0 : e.xfb_maiba_gen_lead_gen_flow;
                      return t == null ? u : { isSuccess: !0, flows: t };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.fetchLeadGenForms = c;
  },
  98,
);
