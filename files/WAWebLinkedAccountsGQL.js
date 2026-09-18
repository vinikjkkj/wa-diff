__d(
  "WAWebLinkedAccountsGQL",
  [
    "FBLogger",
    "WAWebAdvertiseEntryPointQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebLinkedAccountsGQLQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e &&
            o(
              "WAWebAdvertiseEntryPointQplHelpers",
            ).advertiseEntryPointQplAddPoint(
              o("WAWebAdvertiseEntryPointQplHelpers")
                .AdvertiseEntryPointQplPoint.FETCH_TOKEN_START,
            );
          try {
            return yield o("WAWebFetchAdAccountToken").fetchToken();
          } catch (e) {
            throw (
              o(
                "WAWebAdvertiseEntryPointQplHelpers",
              ).advertiseEntryPointQplRecordFailureReason("fetch_token_threw"),
              e
            );
          } finally {
            e &&
              o(
                "WAWebAdvertiseEntryPointQplHelpers",
              ).advertiseEntryPointQplAddPoint(
                o("WAWebAdvertiseEntryPointQplHelpers")
                  .AdvertiseEntryPointQplPoint.FETCH_TOKEN_END,
              );
          }
        })),
        u.apply(this, arguments)
      );
    }
    var c = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var t = o(
            "WAWebAdvertiseEntryPointQplHelpers",
          ).advertiseEntryPointQplBeginAttempt(),
          a = yield s(t);
        if (a.type !== "success")
          return (
            o(
              "WAWebAdvertiseEntryPointQplHelpers",
            ).advertiseEntryPointQplRecordFailureReason(a.type),
            r("FBLogger")("wa_ctwa_web").warn(
              "Skipping linked accounts query: ad account token fetch failed with type " +
                a.type,
            ),
            null
          );
        var i = a.type === "success" ? a.token : void 0;
        return (
          t &&
            o(
              "WAWebAdvertiseEntryPointQplHelpers",
            ).advertiseEntryPointQplAddPoint(
              o("WAWebAdvertiseEntryPointQplHelpers")
                .AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_START,
            ),
          o("WAWebRelayClient")
            .fetchQuery(
              e !== void 0 ? e : (e = n("WAWebLinkedAccountsGQLQuery.graphql")),
              {},
              { accessToken: i, environmentType: "facebook" },
            )
            .then(function (e) {
              var n, r;
              t &&
                o(
                  "WAWebAdvertiseEntryPointQplHelpers",
                ).advertiseEntryPointQplAddPoint(
                  o("WAWebAdvertiseEntryPointQplHelpers")
                    .AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_END,
                );
              var a =
                e == null || (n = e.xfb_wa_biz_linked_accounts) == null
                  ? void 0
                  : n.linked_accounts;
              if (!a) return null;
              var i = [];
              if ((r = a.fb_page) != null && r.ad_status) {
                var l,
                  s,
                  u = {
                    type: "facebook",
                    id:
                      (l = (s = a.fb_page) == null ? void 0 : s.id) != null
                        ? l
                        : "",
                    hasCreatedAd: a.fb_page.ad_status.has_created_ad === !0,
                    hasActiveLinkedAd:
                      a.fb_page.ad_status.has_active_ctwa_ad === !0,
                  };
                i.push(u);
              }
              if (a.wa_ad_identity) {
                var c,
                  d,
                  m,
                  p = {
                    type: "whatsapp",
                    id: (c = a.wa_ad_identity.id) != null ? c : "",
                    hasCreatedAd:
                      ((d = a.wa_ad_identity.ad_status) == null
                        ? void 0
                        : d.has_created_ad) === !0,
                    hasActiveLinkedAd:
                      ((m = a.wa_ad_identity.ad_status) == null
                        ? void 0
                        : m.has_active_ctwa_ad) === !0,
                  };
                i.push(p);
              }
              return { accounts: i };
            })
            .catch(function (e) {
              throw (
                t &&
                  o(
                    "WAWebAdvertiseEntryPointQplHelpers",
                  ).advertiseEntryPointQplAddPoint(
                    o("WAWebAdvertiseEntryPointQplHelpers")
                      .AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_FAIL,
                  ),
                e
              );
            })
        );
      });
      return function () {
        return t.apply(this, arguments);
      };
    })();
    l.queryLinkedAccountsGQL = c;
  },
  98,
);
