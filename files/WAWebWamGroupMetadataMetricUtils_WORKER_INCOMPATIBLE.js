__d(
  "WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE",
  ["WAWebGroupMetadataCollection", "WAWebWamGroupMetricUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isGroup() ? r("WAWebGroupMetadataCollection").get(e) : null;
    }
    function s(t) {
      if (t != null && t.isGroup()) {
        var n = e(t);
        if (n != null)
          return o(
            "WAWebWamGroupMetricUtils",
          ).getGroupCountMetricsFromGroupMetadata(n);
      }
    }
    l.getGroupCountMetricsFromChatWid = s;
  },
  98,
);
