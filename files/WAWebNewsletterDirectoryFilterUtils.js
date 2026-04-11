__d(
  "WAWebNewsletterDirectoryFilterUtils",
  ["$InternalEnum", "WAWebWamEnumChannelDirectoryPillSelected"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        Featured: "FEATURED",
        New: "NEW",
        Popular: "POPULAR",
        Recommended: "RECOMMENDED",
        Trending: "TRENDING",
      }),
      s = n("$InternalEnum")({
        Recommended: 1,
        Trending: 2,
        Featured: 3,
        New: 4,
        Popular: 5,
        Country: 6,
      });
    function u(t) {
      switch (t) {
        case s.Recommended:
        case s.Country:
          return e.Recommended;
        case s.Trending:
          return e.Trending;
        case s.Featured:
          return e.Featured;
        case s.New:
          return e.New;
        case s.Popular:
          return e.Popular;
      }
    }
    function c(t) {
      switch (t) {
        case e.Recommended:
          return s.Recommended;
        case e.Trending:
          return s.Trending;
        case e.Featured:
          return s.Featured;
        case e.New:
          return s.New;
        case e.Popular:
          return s.Popular;
      }
    }
    function d(t) {
      if (t != null)
        switch (t) {
          case e.Recommended:
            return o("WAWebWamEnumChannelDirectoryPillSelected")
              .CHANNEL_DIRECTORY_PILL_SELECTED.RECOMMENDED;
          case e.New:
            return o("WAWebWamEnumChannelDirectoryPillSelected")
              .CHANNEL_DIRECTORY_PILL_SELECTED.NEW;
          case e.Popular:
            return o("WAWebWamEnumChannelDirectoryPillSelected")
              .CHANNEL_DIRECTORY_PILL_SELECTED.POPULAR;
          case e.Trending:
            return o("WAWebWamEnumChannelDirectoryPillSelected")
              .CHANNEL_DIRECTORY_PILL_SELECTED.TRENDING;
          case e.Featured:
            return o("WAWebWamEnumChannelDirectoryPillSelected")
              .CHANNEL_DIRECTORY_PILL_SELECTED.FEATURED;
        }
    }
    ((l.NewsletterDirectoryListView = e),
      (l.NewsletterDirectoryFilterType = s),
      (l.getNewsletterDirectoryListViewFromFilter = u),
      (l.getNewsletterDirectoryFilterFromListView = c),
      (l.getNewsletterSelectedPill = d));
  },
  98,
);
