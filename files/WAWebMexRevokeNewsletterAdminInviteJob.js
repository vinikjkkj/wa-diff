__d(
  "WAWebMexRevokeNewsletterAdminInviteJob",
  [
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql"));
    async function u(e, t) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(e, t);
      });
    }
    async function c(e, t) {
      var n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
      await o("WAWebMexClient").fetchQuery(s, {
        newsletter_id: e,
        user_id: n.toString(),
      });
    }
    l.revokeNewsletterAdminInvite = u;
  },
  98,
);
