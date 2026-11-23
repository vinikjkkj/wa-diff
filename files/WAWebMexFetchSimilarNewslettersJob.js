__d(
  "WAWebMexFetchSimilarNewslettersJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchSimilarNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchSimilarNewslettersJobQuery.graphql"));
    async function u(e) {
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
        l = await o("WAWebMexClient").fetchQuery(s, i);
      return (t = l.xwa2_newsletters_similar) == null ? void 0 : t.result;
    }
    l.mexFetchSimilarNewsletters = u;
  },
  98,
);
