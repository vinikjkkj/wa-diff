__d(
  "WAWebMexFetchSimilarNewslettersJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchSimilarNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchSimilarNewslettersJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.countryCodes,
            r = e.limit,
            a = e.newsletterId,
            i = {
              input: {
                newsletter_id: a,
                limit: r,
                country_codes: n != null ? n : [],
              },
              fetch_status_metadata: o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled(),
            },
            l = yield o("WAWebMexClient").fetchQuery(s, i);
          return (t = l.xwa2_newsletters_similar) == null ? void 0 : t.result;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchSimilarNewsletters = u;
  },
  98,
);
