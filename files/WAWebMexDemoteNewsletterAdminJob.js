__d(
  "WAWebMexDemoteNewsletterAdminJob",
  [
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexDemoteNewsletterAdminJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexDemoteNewsletterAdminJobMutation.graphql"));
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
    l.demoteNewsletterAdmin = u;
  },
  98,
);
