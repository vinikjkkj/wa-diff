__d(
  "WAWebMexRevokeNewsletterAdminInviteJob",
  [
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql"));
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
          var n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
          yield o("WAWebMexClient").fetchQuery(s, {
            newsletter_id: e,
            user_id: n.toString(),
          });
        })),
        m.apply(this, arguments)
      );
    }
    l.revokeNewsletterAdminInvite = u;
  },
  98,
);
