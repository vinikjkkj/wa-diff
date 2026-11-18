__d(
  "WAWebEmailInviteEligibilityQuery",
  [
    "WAWebEmailInviteEligibilityQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebEmailInviteEligibilityQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          yield r("WAWebNetworkStatus").waitIfOffline();
          var t = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web", fetchPolicy: "network-only" },
            ),
            n =
              t == null || (e = t.viewer) == null
                ? void 0
                : e.can_send_email_invites;
          if (n == null)
            throw new Error(
              "email invite eligibility missing from the response",
            );
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchCanSendEmailInvites = u;
  },
  98,
);
