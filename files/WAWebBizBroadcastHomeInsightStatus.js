__d(
  "WAWebBizBroadcastHomeInsightStatus",
  ["WAWebBroadcastInsightStatus"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return o("WAWebBroadcastInsightStatus").getInsightStatus({
        deliveredCount: e.deliveredCount,
        nowMs: t,
        readCount: e.readRate.count,
        recipientCount: (n = e.recipientCount) != null ? n : 0,
        sentTimestampMs: e.sentAt,
      });
    }
    function s(t, n) {
      var r;
      return (r = t.insightStatus) != null ? r : e(t, n);
    }
    function u(e, t) {
      return s(e, t) === o("WAWebBroadcastInsightStatus").InsightStatus.SENT;
    }
    ((l.getBroadcastListItemInsightStatus = e), (l.isBroadcastCompleted = u));
  },
  98,
);
