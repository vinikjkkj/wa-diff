__d(
  "WAWebWamGroupMetricUtils",
  ["WAWebWamNumberToSizeBucket"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Math.max(e, 32);
    }
    function s(t) {
      var n = {},
        r = t.participants.length;
      r != null && (n.participantCount = e(r));
      var o = t.cachedDeviceCount;
      return (o != null && (n.deviceCount = e(o)), n);
    }
    function u(t) {
      return {
        participantCount: e(t.participants.length),
        deviceCount: e(t.senderKey.size),
        deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(t.senderKey.size),
      };
    }
    ((l.capCount = e),
      (l.getGroupCountMetricsFromGroupMetadata = s),
      (l.getGroupMetricsFromDbRecord = u));
  },
  98,
);
