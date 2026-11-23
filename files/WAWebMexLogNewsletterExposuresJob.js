__d(
  "WAWebMexLogNewsletterExposuresJob",
  [
    "WAWebMexClient",
    "WAWebMexLogNewsletterExposuresJobMutation.graphql",
    "WAWebNewsletterQueryUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexLogNewsletterExposuresJobMutation.graphql"));
    async function u(e) {
      var t = {
          input: {
            exposures: e.map(function (e) {
              var t = e.capability,
                n = e.newsletterJid;
              return {
                newsletter_id: n,
                capability: o(
                  "WAWebNewsletterQueryUtils",
                ).getNewsletterCapabilityFromEnum(t),
              };
            }),
          },
        },
        n = await o("WAWebMexClient").fetchQuery(s, t);
    }
    l.mexLogNewsletterExposures = u;
  },
  98,
);
