__d(
  "WAWebMexLogNewsletterExposuresJob",
  [
    "WAWebMexClient",
    "WAWebMexLogNewsletterExposuresJobMutation.graphql",
    "WAWebNewsletterQueryUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexLogNewsletterExposuresJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            n = yield o("WAWebMexClient").fetchQuery(s, t);
        })),
        c.apply(this, arguments)
      );
    }
    l.mexLogNewsletterExposures = u;
  },
  98,
);
