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
      p = d("accountsReached"),
      _ = d("followers"),
      f = d("followersByCountry"),
      g = d("followersDelta"),
      h = d("followersReached"),
      y = d("growthChartData"),
      C = d("rangeStart"),
      b = d("rangeEnd"),
      v = d("nonFollowersReached"),
      S = d("reachByCountry"),
      R = d("reachDelta"),
      L = c(
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
        [y],
      ),
      E = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null || n == null
            ? 0
            : o("WAWebClock").Clock.daysDeltaAbs(t, n) + 1;
        },
        [C, b],
      );
    ((l.clearNewsletterAdminInsightsGetterCacheFor = m),
      (l.getAccountsReached = p),
      (l.getFollowers = _),
      (l.getFollowersByCountry = f),
      (l.getFollowersDelta = g),
      (l.getFollowersReached = h),
      (l.getGrowthChartData = y),
      (l.getRangeStart = C),
      (l.getRangeEnd = b),
      (l.getNonFollowersReached = v),
      (l.getReachByCountry = S),
      (l.getReachDelta = R),
      (l.getGrowthChart = L),
      (l.getRangeInDays = E));
  },
  226,
);
