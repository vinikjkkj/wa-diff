__d(
  "WAWebCustomerManagerStartTrialMutation",
  [
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerStartTrialMutation.graphql",
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
          : (e = n("WAWebCustomerManagerStartTrialMutation.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return (
                      yield r("WAWebNetworkStatus").waitIfOffline(),
                      o("WAWebRelayClient").commitMutation(
                        s,
                        { input: {} },
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
            a =
              t == null || (e = t.xfb_wa_start_contact_manager_trial) == null
                ? void 0
                : e.access_state;
          return o(
            "WAWebCustomerManagerAccessState",
          ).decodeCustomerManagerAccessStateOrThrow(
            a == null ? void 0 : a.state,
            a == null ? void 0 : a.trial_end_time,
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.startCustomerManagerTrialOnServer = u;
  },
  98,
);
