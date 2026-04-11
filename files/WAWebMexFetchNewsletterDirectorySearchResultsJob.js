__d(
  "WAWebMexFetchNewsletterDirectorySearchResultsJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectorySearchResultsJobQuery.graphql",
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
              "WAWebMexFetchNewsletterDirectorySearchResultsJobQuery.graphql",
            ));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.categories,
            n = e.cursorToken,
            r = e.limit,
            a = e.searchText,
            i = {
              input: {
                search_text: a,
                categories: t.map(
                  o("WAWebNewsletterDirectoryCategoryUtils")
                    .getCategoryValueFromEnum,
                ),
                limit: r,
                start_cursor: n,
              },
              fetch_status_metadata: o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled(),
            },
            l = yield o("WAWebMexClient").fetchQuery(s, i);
          return l;
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterDirectorySearchResults = u;
  },
  98,
);
