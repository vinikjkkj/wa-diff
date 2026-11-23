__d(
  "WAWebCustomerManagerAccessStateQuery",
  [
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerAccessStateQuery.graphql",
    "WAWebFetchWithAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCustomerManagerAccessStateQuery.graphql"));
    async function u() {
      var e = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
          async function (e) {
            return (
              await r("WAWebNetworkStatus").waitIfOffline(),
              o("WAWebRelayClient").fetchQuery(
                s,
                {},
                { accessToken: e, environmentType: "facebook" },
              )
            );
          },
        ),
        t = e == null ? void 0 : e.xfb_wa_contact_manager_access_state;
      return o(
        "WAWebCustomerManagerAccessState",
      ).decodeCustomerManagerAccessStateOrThrow(
        t == null ? void 0 : t.state,
        t == null ? void 0 : t.trial_end_time,
      );
    }
    l.fetchCustomerManagerAccessState = u;
  },
  98,
);
