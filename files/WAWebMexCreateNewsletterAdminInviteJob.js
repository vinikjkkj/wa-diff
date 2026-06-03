__d(
  "WAWebMexCreateNewsletterAdminInviteJob",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexCreateNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexCreateNewsletterAdminInviteJobMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
            return d(e, t);
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t),
            a = yield o("WAWebMexClient").fetchQuery(s, {
              newsletter_id: e,
              user_id: n.toString(),
            }),
            i = a.xwa2_newsletter_admin_invite_create,
            l = r("WANullthrows")(
              i == null ? void 0 : i.invite_expiration_time,
            );
          return {
            inviteExpiration: o("WATimeUtils").castToUnixTime(
              Number.parseInt(l, 10),
            ),
          };
        })),
        m.apply(this, arguments)
      );
    }
    l.createNewsletterAdminInvite = u;
  },
  98,
);
