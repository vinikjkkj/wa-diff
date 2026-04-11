__d(
  "WAWebMexFetchRecommendedNewslettersJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchRecommendedNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexFetchRecommendedNewslettersJobQuery.graphql",
                  )),
            i = {
              input: { limit: t, country_codes: r },
              fetch_status_metadata: o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled(),
            },
            l = yield o("WAWebMexClient").fetchQuery(a, i);
          return l;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexFetchRecommendedNewsletters = s;
  },
  98,
);
