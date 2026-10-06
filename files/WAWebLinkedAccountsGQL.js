__d(
  "WAWebLinkedAccountsGQL",
  [
    "FBLogger",
    "WAWebAdvertiseEntryPointQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebLinkedAccountsGQLQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t,
          n,
          r,
          a,
          i =
            (t = (
              (n = (r = e.source) == null ? void 0 : r.errors) != null ? n : []
            )[0]) == null
              ? void 0
              : t.code,
          l = (a = e.source) == null ? void 0 : a.httpStatus;
        return (
          "gql_" +
          String(i != null ? i : "none") +
          (l != null ? "_http_" + String(l) : "")
        );
      }
      return e instanceof Error ? e.name : typeof e;
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        c.apply(this, arguments)
      );
    }
    var d = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var t = o(
            "WAWebAdvertiseEntryPointQplHelpers",
          ).advertiseEntryPointQplBeginAttempt(),
          a = yield u(t);
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
        t &&
          o(
            "WAWebAdvertiseEntryPointQplHelpers",
          ).advertiseEntryPointQplAddPoint(
            o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint
              .LINKED_ACCOUNTS_QUERY_START,
          );
        var l = !1;
        return o("WAWebRelayClient")
          .fetchQuery(
            e !== void 0 ? e : (e = n("WAWebLinkedAccountsGQLQuery.graphql")),
            {},
            { accessToken: i, environmentType: "facebook" },
          )
          .then(function (e) {
            var n, r;
            ((l = !0),
              t &&
                o(
                  "WAWebAdvertiseEntryPointQplHelpers",
                ).advertiseEntryPointQplAddPoint(
                  o("WAWebAdvertiseEntryPointQplHelpers")
                    .AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_END,
                ));
            var a =
              e == null || (n = e.xfb_wa_biz_linked_accounts) == null
                ? void 0
                : n.linked_accounts;
            if (!a)
              return (
                o(
                  "WAWebAdvertiseEntryPointQplHelpers",
                ).advertiseEntryPointQplRecordFailureReason(
                  (e == null ? void 0 : e.xfb_wa_biz_linked_accounts) == null
                    ? "linked_accounts_root_null"
                    : "linked_accounts_missing",
                ),
                null
              );
            var i = [];
            if ((r = a.fb_page) != null && r.ad_status) {
              var s,
                u,
                c = {
                  type: "facebook",
                  id:
                    (s = (u = a.fb_page) == null ? void 0 : u.id) != null
                      ? s
                      : "",
                  hasCreatedAd: a.fb_page.ad_status.has_created_ad === !0,
                  hasActiveLinkedAd:
                    a.fb_page.ad_status.has_active_ctwa_ad === !0,
                };
              i.push(c);
            }
            if (a.wa_ad_identity) {
              var d,
                m,
                p,
                _ = {
                  type: "whatsapp",
                  id: (d = a.wa_ad_identity.id) != null ? d : "",
                  hasCreatedAd:
                    ((m = a.wa_ad_identity.ad_status) == null
                      ? void 0
                      : m.has_created_ad) === !0,
                  hasActiveLinkedAd:
                    ((p = a.wa_ad_identity.ad_status) == null
                      ? void 0
                      : p.has_active_ctwa_ad) === !0,
                };
              i.push(_);
            }
            return { accounts: i };
          })
          .catch(function (e) {
            throw (
              o(
                "WAWebAdvertiseEntryPointQplHelpers",
              ).advertiseEntryPointQplRecordFailureReason(
                "linked_accounts_query_threw",
                (l ? "response_handler_" : "") + s(e),
              ),
              t &&
                o(
                  "WAWebAdvertiseEntryPointQplHelpers",
                ).advertiseEntryPointQplAddPoint(
                  o("WAWebAdvertiseEntryPointQplHelpers")
                    .AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_FAIL,
                ),
              e
            );
          });
      });
      return function () {
        return t.apply(this, arguments);
      };
    })();
    l.queryLinkedAccountsGQL = d;
  },
  98,
);
