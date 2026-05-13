__d(
  "WAWebBizAiAbilitiesQuery",
  [
    "WAWebBizAiAbilitiesQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiAbilitiesQuery.graphql")),
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
                      if ((t == null ? void 0 : t.abilities) == null) return u;
                      var n = new Map();
                      for (var r of t.abilities)
                        (r == null ? void 0 : r.type) != null &&
                          (r == null ? void 0 : r.status) != null &&
                          n.set(r.type, r.status);
                      return { isSuccess: !0, abilities: n };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.fetchAbilities = c;
  },
  98,
);
