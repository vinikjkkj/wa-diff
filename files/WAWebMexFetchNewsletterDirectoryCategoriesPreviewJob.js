__d(
  "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql",
            ));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            i = yield o("WAWebMexClient").fetchQuery(s, a);
          return i;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterDirectoryCategoriesPreview = u;
  },
  98,
);
