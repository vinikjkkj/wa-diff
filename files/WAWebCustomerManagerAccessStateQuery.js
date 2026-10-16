__d(
  "WAWebCustomerManagerAccessStateQuery",
  [
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerAccessStateQuery.graphql",
    "WAWebFetchWithAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCustomerManagerAccessStateQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebFetchWithAdAccountToken",
            ).fetchWithAdAccountToken(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return (
                      yield r("WAWebNetworkStatus").waitIfOffline(),
                      o("WAWebRelayClient").fetchQuery(
                        s,
                        {},
                        { accessToken: e, environmentType: "facebook" },
                      )
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            t = e == null ? void 0 : e.xfb_wa_contact_manager_access_state;
          return o(
            "WAWebCustomerManagerAccessState",
          ).decodeCustomerManagerAccessStateOrThrow(
            t == null ? void 0 : t.state,
            t == null ? void 0 : t.trial_end_time,
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchCustomerManagerAccessState = u;
  },
  98,
);
