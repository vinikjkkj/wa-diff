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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.categories,
        n = e.category,
        a = e.countryCode,
        i = e.isSearching,
        l = e.newsletterDirectoryFunnelLogger,
        u = e.onCategorySelect,
        c = e.onLoadStateChange,
        d = e.searchText;
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "channel-directory-categories-search",
          extras: {
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        }),
        i
          ? s.jsx(r("WAWebNewsletterDirectoryListDrawerContent.react"), {
              searchText: d,
              category: n,
              countryCode: a,
              newsletterDirectoryFunnelLogger: l,
              listView: o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryListView.Featured,
              onLoadStateChange: c,
              focusOnMount: !1,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHANNEL_DIRECTORY_CATEGORIES_SEARCH,
              directorySurface: o("WAWebWamEnumChannelDirectorySurface")
                .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY_CATEGORIES,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterDirectoryCategorySearch,
            })
          : s.jsx(r("WAWebNewsletterDirectoryCategoriesDropdown.react"), {
              categories: t,
              onCategorySelect: u,
            })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
