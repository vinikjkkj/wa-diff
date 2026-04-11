__d(
  "WAWebWamPrivateStatsUtils",
  [
    "WAWebTestAnonymousDailyIdWamEvent",
    "WAWebTestAnonymousDailyWamEvent",
    "WAWebTestAnonymousIdLessWamEvent",
    "WAWebTestAnonymousMonthlyIdWamEvent",
    "WAWebTestAnonymousWeeklyIdWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (new (o(
        "WAWebTestAnonymousDailyWamEvent",
      ).TestAnonymousDailyWamEvent)().commit(),
        new (o(
          "WAWebTestAnonymousWeeklyIdWamEvent",
        ).TestAnonymousWeeklyIdWamEvent)().commit(),
        new (o(
          "WAWebTestAnonymousIdLessWamEvent",
        ).TestAnonymousIdLessWamEvent)().commit());
    }
    function s() {
      (new (o(
        "WAWebTestAnonymousDailyIdWamEvent",
      ).TestAnonymousDailyIdWamEvent)().commit(),
        new (o(
          "WAWebTestAnonymousMonthlyIdWamEvent",
        ).TestAnonymousMonthlyIdWamEvent)().commit());
    }
    ((l.logDailyPrivateStatsTestEvents = e),
      (l.logUiActionShadowPrivateStatsTestEvents = s));
  },
  98,
);
