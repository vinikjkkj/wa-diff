__d(
  "WAWebEmailInviteEligibilityQuery",
  [
    "WAWebEmailInviteEligibilityQuery.graphql",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebEmailInviteEligibilityQuery.graphql"));
    async function u() {
      var e;
      await r("WAWebNetworkStatus").waitIfOffline();
      var t = await o("WAWebRelayClient").fetchQuery(
          s,
          {},
          { environmentType: "whatsapp_web", fetchPolicy: "network-only" },
        ),
        n =
          t == null || (e = t.viewer) == null
            ? void 0
            : e.can_send_email_invites;
      if (n == null)
        throw new Error("email invite eligibility missing from the response");
      return n;
    }
    l.fetchCanSendEmailInvites = u;
  },
  98,
);
