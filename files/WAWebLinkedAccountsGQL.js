__d(
  "WAWebLinkedAccountsGQL",
  [
    "WAWebFetchAdAccountToken",
    "WAWebLinkedAccountsGQLQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          return o("WAWebRelayClient")
            .fetchQuery(
              e !== void 0 ? e : (e = n("WAWebLinkedAccountsGQLQuery.graphql")),
              {},
              { accessToken: t.token, environmentType: "facebook" },
            )
            .then(function (e) {
              var t,
                n,
                r =
                  e == null || (t = e.xfb_wa_biz_linked_accounts) == null
                    ? void 0
                    : t.linked_accounts;
              if (!r) return null;
              var o = [];
              if ((n = r.fb_page) != null && n.ad_status) {
                var a,
                  i,
                  l = {
                    type: "facebook",
                    id:
                      (a = (i = r.fb_page) == null ? void 0 : i.id) != null
                        ? a
                        : "",
                    hasCreatedAd: r.fb_page.ad_status.has_created_ad === !0,
                    hasActiveLinkedAd:
                      r.fb_page.ad_status.has_active_ctwa_ad === !0,
                  };
                o.push(l);
              }
              if (r.wa_ad_identity) {
                var s,
                  u,
                  c,
                  d = {
                    type: "whatsapp",
                    id: (s = r.wa_ad_identity.id) != null ? s : "",
                    hasCreatedAd:
                      ((u = r.wa_ad_identity.ad_status) == null
                        ? void 0
                        : u.has_created_ad) === !0,
                    hasActiveLinkedAd:
                      ((c = r.wa_ad_identity.ad_status) == null
                        ? void 0
                        : c.has_active_ctwa_ad) === !0,
                  };
                o.push(d);
              }
              return { accounts: o };
            });
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.queryLinkedAccountsGQL = s;
  },
  98,
);
