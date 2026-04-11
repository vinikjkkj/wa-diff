__d(
  "WAWebAboutDailyUtils",
  ["WAWebDailyAggregatedStatsCollection"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutSuccessCount++;
    }
    function s() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutFailureCount++;
    }
    function u() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutCreationVisitCount++;
    }
    function c() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutCreationStartedCount++;
    }
    function d() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutChatConsumptionCount++;
    }
    function m() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutChatBubbleTapCount++;
    }
    function p() {
      var e = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      e.aboutMessageSendCount++;
    }
    ((l.incrementAboutSuccess = e),
      (l.incrementAboutFailure = s),
      (l.incrementAboutCreationVisit = u),
      (l.incrementAboutCreationStarted = c),
      (l.incrementAboutChatConsumption = d),
      (l.incrementAboutChatBubbleTap = m),
      (l.incrementAboutMessageSend = p));
  },
  98,
);
