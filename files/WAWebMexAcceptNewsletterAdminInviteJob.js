__d(
  "WAWebMexAcceptNewsletterAdminInviteJob",
  [
    "WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql",
    "WAWebMexClient",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
            return d(e);
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebMexClient").fetchQuery(s, { newsletter_id: e });
        })),
        m.apply(this, arguments)
      );
    }
    l.acceptNewsletterAdminInvite = u;
  },
  98,
);
