__d(
  "WAWebNewsletterDirectoryCategoriesSearchContent.react",
  [
    "WAWebChatEntryPoint",
    "WAWebNewsletterDirectoryCategoriesDropdown.react",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectoryListDrawerContent.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebWamEnumChannelDirectorySurface",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.categories,
        a = e.category,
        i = e.countryCode,
        l = e.isSearching,
        u = e.newsletterDirectoryFunnelLogger,
        c = e.onCategorySelect,
        d = e.onLoadStateChange,
        m = e.searchText,
        p;
      if (
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = {
              surface: "channel-directory-categories-search",
              extras: {
                threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
              },
            }),
            (t[0] = p))
          : (p = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(p),
        l)
      ) {
        var _;
        return (
          t[1] !== a || t[2] !== i || t[3] !== u || t[4] !== d || t[5] !== m
            ? ((_ = s.jsx(
                r("WAWebNewsletterDirectoryListDrawerContent.react"),
                {
                  searchText: m,
                  category: a,
                  countryCode: i,
                  newsletterDirectoryFunnelLogger: u,
                  listView: o("WAWebNewsletterDirectoryFilterUtils")
                    .NewsletterDirectoryListView.Featured,
                  onLoadStateChange: d,
                  focusOnMount: !1,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHANNEL_DIRECTORY_CATEGORIES_SEARCH,
                  directorySurface: o("WAWebWamEnumChannelDirectorySurface")
                    .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY_CATEGORIES,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .NewsletterDirectoryCategorySearch,
                },
              )),
              (t[1] = a),
              (t[2] = i),
              (t[3] = u),
              (t[4] = d),
              (t[5] = m),
              (t[6] = _))
            : (_ = t[6]),
          _
        );
      }
      var f;
      return (
        t[7] !== n || t[8] !== c
          ? ((f = s.jsx(r("WAWebNewsletterDirectoryCategoriesDropdown.react"), {
              categories: n,
              onCategorySelect: c,
            })),
            (t[7] = n),
            (t[8] = c),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    l.default = u;
  },
  98,
);
