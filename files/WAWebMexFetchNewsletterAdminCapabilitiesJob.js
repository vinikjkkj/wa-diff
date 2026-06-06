__d(
  "WAWebMexFetchNewsletterAdminCapabilitiesJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql",
    "WAWebNewsletterModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterAdminCapabilitiesJobQuery.graphql"));
    async function u(e) {
      var t,
        n = { newsletter_id: e },
        r = await o("WAWebMexClient").fetchQuery(s, n),
        a = (t = r.xwa2_newsletter_admin) == null ? void 0 : t.capabilities,
        i =
          a == null
            ? []
            : a.map(
                o("WAWebNewsletterModelUtils").getNewsletterCapabilityFromValue,
              );
      return new Set(i);
    }
    l.mexFetchNewsletterAdminCapabilities = u;
  },
  98,
);
