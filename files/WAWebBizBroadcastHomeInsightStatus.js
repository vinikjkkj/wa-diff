__d(
  "WAWebBizBroadcastHomeInsightStatus",
  ["WAWebBroadcastInsightStatus"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return o("WAWebBroadcastInsightStatus").getInsightStatus(
        e.sentAt,
        e.deliveredCount,
        (n = e.recipientCount) != null ? n : 0,
        e.readRate.count,
        t,
      );
    }
    function s(t, n) {
      var r;
      return (r = t.insightStatus) != null ? r : e(t, n);
    }
    function u(e, t) {
      return s(e, t) === o("WAWebBroadcastInsightStatus").InsightStatus.SENT;
    }
    function c(e, t) {
      return (
        s(e, t) !== o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING
      );
    }
    ((l.getBroadcastListItemInsightStatus = e),
      (l.isBroadcastCompleted = u),
      (l.areBroadcastInsightsViewable = c));
  },
  98,
);
