__d(
  "WAWebMexAcceptNewsletterAdminInviteJob",
  [
    "WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql",
    "WAWebMexClient",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql"));
    async function u(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(e);
      });
    }
    async function c(e) {
      await o("WAWebMexClient").fetchQuery(s, { newsletter_id: e });
    }
    l.acceptNewsletterAdminInvite = u;
  },
  98,
);
