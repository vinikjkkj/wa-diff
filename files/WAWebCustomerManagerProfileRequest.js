__d(
  "WAWebCustomerManagerProfileRequest",
  [
    "WAWebCustomerManagerRequestErrors",
    "WAWebFBLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = n === void 0 ? {} : n,
        i = a.onTokenSettled,
        l = a.rateLimitSurface,
        u = o("WAWebFetchAdAccountToken").fetchToken(),
        c =
          i == null
            ? await u
            : await u.finally(function () {
                i();
              });
      if (c.type !== "success")
        throw r("err")(
          "[CustomerManager] " + e + ": no access token (" + c.type + ")",
        );
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        return await t({ accessToken: c.token, environmentType: "facebook" });
      } catch (e) {
        throw (
          l != null && s(e, l),
          o("WAWebCustomerManagerRequestErrors").asCustomerManagerRequestError(
            e,
          )
        );
      }
    }
    function s(e, t) {
      o("WAWebGraphQLServerError").isRateLimitError(e) &&
        o("WAWebFBLogger")
          .WAWebFBLogger()
          .catching(r("getErrorSafe")(e))
          .warn(
            "[CustomerManager] customer profile %s rate limited (customer_manager_profiles_rate_limited)",
            t,
          );
    }
    l.runCustomerProfileRequest = e;
  },
  98,
);
