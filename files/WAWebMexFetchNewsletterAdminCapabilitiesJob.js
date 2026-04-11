__d(
  "WAWebMexFetchNewsletterAdminCapabilitiesJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = { newsletter_id: e },
            r = yield o("WAWebMexClient").fetchQuery(s, n),
            a = (t = r.xwa2_newsletter_admin) == null ? void 0 : t.capabilities,
            i =
              a == null
                ? []
                : a.map(
                    o("WAWebNewsletterModelUtils")
                      .getNewsletterCapabilityFromValue,
                  );
          return new Set(i);
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterAdminCapabilities = u;
  },
  98,
);
