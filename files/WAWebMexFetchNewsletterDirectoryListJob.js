__d(
  "WAWebMexFetchNewsletterDirectoryListJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectoryListJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterDirectoryListJobQuery.graphql"));
    function u(e) {
      return e ===
        o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView
          .Recommended
        ? "RECOMMENDED"
        : e ===
            o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView
              .New
          ? "NEW"
          : e ===
              o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryListView.Popular
            ? "POPULAR"
            : e ===
                o("WAWebNewsletterDirectoryFilterUtils")
                  .NewsletterDirectoryListView.Featured
              ? "FEATURED"
              : e ===
                  o("WAWebNewsletterDirectoryFilterUtils")
                    .NewsletterDirectoryListView.Trending
                ? "TRENDING"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.categories,
            n = e.countryCodes,
            r = e.cursorToken,
            a = e.limit,
            i = e.view,
            l = {
              input: {
                view: u(i),
                filters: {
                  country_codes: n,
                  categories: t.map(
                    o("WAWebNewsletterDirectoryCategoryUtils")
                      .getCategoryValueFromEnum,
                  ),
                },
                limit: a,
                start_cursor: r,
              },
              fetch_status_metadata: o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled(),
            },
            c = yield o("WAWebMexClient").fetchQuery(s, l);
          return c;
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterDirectoryList = c;
  },
  98,
);
