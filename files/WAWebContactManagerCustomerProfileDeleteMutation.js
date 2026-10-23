__d(
  "WAWebContactManagerCustomerProfileDeleteMutation",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfileDeleteMutation.graphql",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerRequestErrors",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileDeleteMutation.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAJids").validateLidUserJid(e);
          if (n == null)
            throw r("err")(
              "[CustomerManager] customer profile delete: chatJid must be a LID-based JID",
            );
          var a = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (a.type !== "success")
            throw r("err")(
              "[CustomerManager] customer profile delete: no access token (" +
                a.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i;
          try {
            i = yield o("WAWebRelayClient").commitMutation(
              u,
              { lid: n },
              { accessToken: a.token, environmentType: "facebook" },
            );
          } catch (e) {
            throw (
              o("WAWebContactManagerCustomerProfilesQuery").logIfRateLimited(
                e,
                "write",
              ),
              o(
                "WAWebCustomerManagerRequestErrors",
              ).asCustomerManagerRequestError(e)
            );
          }
          if (
            ((t = i) == null || (t = t.xfb_wa_delete_customer_profile) == null
              ? void 0
              : t.deleted_lid) !== n
          )
            throw r("err")(
              "[CustomerManager] customer profile delete: no confirmed delete",
            );
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[CustomerManager] customer profile delete: removed ",
                "",
              ])),
            e,
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.deleteCustomerProfileFromServer = c;
  },
  98,
);
