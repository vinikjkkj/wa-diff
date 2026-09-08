__d(
  "WAWebBizBroadcastHomeInsightStatus",
  ["WAWebBroadcastInsightStatus"],
  function (t, n, r, o, a, i, l) {
    var e = 1728e5;
    function s(e, t) {
      var n;
      return e.statusSource === "PRO"
        ? u({
            nowMs: t,
            sentTimestampMs: e.sentAt,
            status: e.rawDeliveryStatus,
          })
        : o("WAWebBroadcastInsightStatus").getInsightStatus({
            deliveredCount: e.deliveredCount,
            nowMs: t,
            readCount: e.readRate.count,
            recipientCount: (n = e.recipientCount) != null ? n : 0,
            sentTimestampMs: e.sentAt,
          });
    }
    function u(t) {
      var n = t.nowMs,
        r = t.sentTimestampMs,
        a = t.status;
      return a == null
        ? o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING
        : (function (t) {
            return t === "COMPLETED" ||
              ((t === "ACTIVE" ||
                t === "SENDING_LIMITED" ||
                t === "NOT_SENDING") &&
                r > 0 &&
                n - r >= e)
              ? o("WAWebBroadcastInsightStatus").InsightStatus.SENT
              : t === "ACTIVE" || t === "SENDING_LIMITED" || t === "NOT_SENDING"
                ? o("WAWebBroadcastInsightStatus").InsightStatus.READY
                : o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING;
          })(String(a));
    }
    function c(e, t) {
      var n;
      return (n = e.insightStatus) != null ? n : s(e, t);
    }
    function d(e, t) {
      return c(e, t) === o("WAWebBroadcastInsightStatus").InsightStatus.SENT;
    }
    function m(e, t) {
      return (
        c(e, t) !== o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING
      );
    }
    ((l.BB_PRO_READ_RATE_READY_DELAY_MS = e),
      (l.getBroadcastListItemInsightStatus = s),
      (l.getBizBroadcastProInsightStatus = u),
      (l.isBroadcastCompleted = d),
      (l.areBroadcastInsightsViewable = m));
  },
  98,
);
