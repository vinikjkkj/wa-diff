__d(
  "WAWebCustomerManagerProfileRequest",
  [
    "WAWebCustomerManagerRequestErrors",
    "WAWebFBLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n === void 0 ? {} : n,
            i = a.onTokenSettled,
            l = a.rateLimitSurface,
            s = o("WAWebFetchAdAccountToken").fetchToken(),
            c =
              i == null
                ? yield s
                : yield s.finally(function () {
                    i();
                  });
          if (c.type !== "success")
            throw r("err")(
              "[CustomerManager] " + e + ": no access token (" + c.type + ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            return yield t({
              accessToken: c.token,
              environmentType: "facebook",
            });
          } catch (e) {
            throw (
              l != null && u(e, l),
              o(
                "WAWebCustomerManagerRequestErrors",
              ).asCustomerManagerRequestError(e)
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      o("WAWebGraphQLServerError").isRateLimitError(e) &&
        o("WAWebFBLogger")
          .WAWebFBLogger()
          .catching(r("getErrorSafe")(e))
          .warn(
            "[CustomerManager] customer profile %s rate limited (customer_manager_profiles_rate_limited)",
            t,
          );
    }
    ((l.runCustomerProfileRequest = e), (l.logIfRateLimited = u));
  },
  98,
);
