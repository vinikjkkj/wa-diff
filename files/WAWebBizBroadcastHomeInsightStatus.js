__d(
  "WAWebBizBroadcastHomeInsightStatus",
  ["WAWebBroadcastInsightStatus"],
  function (t, n, r, o, a, i, l) {
    var e = {
      readRateThresholdPercent: 50,
      readyDelayMs: 36e5,
      sentDelayMs: 864e5,
    };
    function s(t, n) {
      var r;
      return o("WAWebBroadcastInsightStatus").getInsightStatus({
        deliveredCount: t.deliveredCount,
        nowMs: n,
        readCount: t.readRate.count,
        recipientCount: (r = t.recipientCount) != null ? r : 0,
        sentTimestampMs: t.sentAt,
        thresholds: t.statusSource === "PRO" ? e : void 0,
      });
    }
    function u(e, t) {
      var n;
      return (n = e.insightStatus) != null ? n : s(e, t);
    }
    function c(e, t) {
      return u(e, t) === o("WAWebBroadcastInsightStatus").InsightStatus.SENT;
    }
    function d(e, t) {
      return (
        u(e, t) !== o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING
      );
    }
    ((l.getBroadcastListItemInsightStatus = s),
      (l.isBroadcastCompleted = c),
      (l.areBroadcastInsightsViewable = d));
  },
  98,
);
