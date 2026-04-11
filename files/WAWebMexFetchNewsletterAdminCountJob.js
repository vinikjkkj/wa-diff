__d(
  "WAWebMexFetchNewsletterAdminCountJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminCountJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterAdminCountJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = { newsletter_id: e },
            r = yield o("WAWebMexClient").fetchQuery(s, n);
          return (t = r.xwa2_newsletter_admin) == null ? void 0 : t.admin_count;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterAdminCount = u;
  },
  98,
);
