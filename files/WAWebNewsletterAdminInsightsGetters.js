__d(
  "WAWebNewsletterAdminInsightsGetters",
  ["fbt", "WAWebClock", "WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l, s) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterAdminInsightsCache,
      }),
      u = e.clearCacheFor,
      c = e.computed,
      d = e.field,
      m = u,
      p = d("accountsReachedAll"),
      _ = d("accountsReachedChannels"),
      f = d("accountsReachedChannelStatus"),
      g = d("followers"),
      h = d("followersByCountry"),
      y = d("followersDelta"),
      C = d("followersReachedAll"),
      b = d("followersReachedChannels"),
      v = d("followersReachedChannelStatus"),
      S = d("growthChartData"),
      R = d("rangeStart"),
      L = d("rangeEnd"),
      E = d("nonFollowersReachedAll"),
      k = d("nonFollowersReachedChannels"),
      I = d("nonFollowersReachedChannelStatus"),
      T = d("reachByCountryAll"),
      D = d("reachByCountryChannels"),
      x = d("reachByCountryChannelStatus"),
      $ = d("reachDeltaAll"),
      P = d("reachDeltaChannels"),
      N = d("reachDeltaChannelStatus"),
      M = c(
        function (e) {
          var t = e[0];
          return t.length === 0
            ? []
            : [
                {
                  data: t,
                  dataLabels: [
                    { label: s._(/*BTDS*/ "Net follows"), key: "net-follows" },
                    { label: s._(/*BTDS*/ "Follows"), key: "follows" },
                    { label: s._(/*BTDS*/ "Unfollows"), key: "unfollows" },
                  ],
                  dataSetLabel: {
                    label: s._(/*BTDS*/ "Growth"),
                    key: "growth",
                  },
                },
              ];
        },
        [S],
      ),
      w = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null || n == null
            ? 0
            : o("WAWebClock").Clock.daysDeltaAbs(t, n) + 1;
        },
        [R, L],
      );
    ((l.clearNewsletterAdminInsightsGetterCacheFor = m),
      (l.getAccountsReachedAll = p),
      (l.getAccountsReachedChannels = _),
      (l.getAccountsReachedChannelStatus = f),
      (l.getFollowers = g),
      (l.getFollowersByCountry = h),
      (l.getFollowersDelta = y),
      (l.getFollowersReachedAll = C),
      (l.getFollowersReachedChannels = b),
      (l.getFollowersReachedChannelStatus = v),
      (l.getRangeStart = R),
      (l.getRangeEnd = L),
      (l.getNonFollowersReachedAll = E),
      (l.getNonFollowersReachedChannels = k),
      (l.getNonFollowersReachedChannelStatus = I),
      (l.getReachByCountryAll = T),
      (l.getReachByCountryChannels = D),
      (l.getReachByCountryChannelStatus = x),
      (l.getReachDeltaAll = $),
      (l.getReachDeltaChannels = P),
      (l.getReachDeltaChannelStatus = N),
      (l.getGrowthChart = M),
      (l.getRangeInDays = w));
  },
  226,
);
