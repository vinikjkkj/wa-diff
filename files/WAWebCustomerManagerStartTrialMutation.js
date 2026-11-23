__d(
  "WAWebCustomerManagerStartTrialMutation",
  [
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerStartTrialMutation.graphql",
    "WAWebFetchWithAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCustomerManagerStartTrialMutation.graphql"));
    async function u() {
      var e,
        t = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
          async function (e) {
            return (
              await r("WAWebNetworkStatus").waitIfOffline(),
              o("WAWebRelayClient").commitMutation(
                s,
                { input: {} },
                { accessToken: e, environmentType: "facebook" },
              )
            );
          },
        ),
        n =
          t == null || (e = t.xfb_wa_start_contact_manager_trial) == null
            ? void 0
            : e.access_state;
      return o(
        "WAWebCustomerManagerAccessState",
      ).decodeCustomerManagerAccessStateOrThrow(
        n == null ? void 0 : n.state,
        n == null ? void 0 : n.trial_end_time,
      );
    }
    l.startCustomerManagerTrialOnServer = u;
  },
  98,
);
