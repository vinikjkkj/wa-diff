__d(
  "WAWebMexFetchRecommendedNewslettersJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchRecommendedNewslettersJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r) {
      var a =
          e !== void 0
            ? e
            : (e = n("WAWebMexFetchRecommendedNewslettersJobQuery.graphql")),
        i = {
          input: { limit: t, country_codes: r },
          fetch_status_metadata: o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterStatusReceiverEnabled(),
        },
        l = await o("WAWebMexClient").fetchQuery(a, i);
      return l;
    }
    l.mexFetchRecommendedNewsletters = s;
  },
  98,
);
