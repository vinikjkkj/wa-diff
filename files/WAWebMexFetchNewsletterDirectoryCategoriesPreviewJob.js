__d(
  "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql",
            ));
    async function u(e) {
      var t = e.categories,
        n = e.countryCode,
        r = e.perCategoryLimit,
        a = {
          input: {
            categories: t.map(
              o("WAWebNewsletterDirectoryCategoryUtils")
                .getCategoryValueFromEnum,
            ),
            country_code: n === "" ? void 0 : n,
            per_category_limit: r,
          },
          fetch_status_metadata: o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterStatusReceiverEnabled(),
        },
        i = await o("WAWebMexClient").fetchQuery(s, a);
      return i;
    }
    l.mexFetchNewsletterDirectoryCategoriesPreview = u;
  },
  98,
);
