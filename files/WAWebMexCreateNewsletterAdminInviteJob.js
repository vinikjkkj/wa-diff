__d(
  "WAWebMexCreateNewsletterAdminInviteJob",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexCreateNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexCreateNewsletterAdminInviteJobMutation.graphql"));
    async function u(e, t) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(e, t);
      });
    }
    async function c(e, t) {
      var n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t),
        a = await o("WAWebMexClient").fetchQuery(s, {
          newsletter_id: e,
          user_id: n.toString(),
        }),
        i = a.xwa2_newsletter_admin_invite_create,
        l = r("WANullthrows")(i == null ? void 0 : i.invite_expiration_time);
      return {
        inviteExpiration: o("WATimeUtils").castToUnixTime(
          Number.parseInt(l, 10),
        ),
      };
    }
    l.createNewsletterAdminInvite = u;
  },
  98,
);
