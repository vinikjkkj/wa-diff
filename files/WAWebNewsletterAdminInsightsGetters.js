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
      p = d("growthChartData"),
      _ = d("rangeStart"),
      f = d("rangeEnd"),
      g = c(
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
        [p],
      ),
      h = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null || n == null
            ? 0
            : o("WAWebClock").Clock.daysDeltaAbs(t, n) + 1;
        },
        [_, f],
      );
    ((l.clearNewsletterAdminInsightsGetterCacheFor = m),
      (l.getGrowthChartData = p),
      (l.getRangeStart = _),
      (l.getRangeEnd = f),
      (l.getGrowthChart = g),
      (l.getRangeInDays = h));
  },
  226,
);
