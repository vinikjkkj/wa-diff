__d(
  "WASmaxInMessageDeliverBizROIMetricsGatingFlagsMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "roi_enabled",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ bizRoiEnabled: r.value })
        : r;
    }
    l.parseBizROIMetricsGatingFlagsMixin = e;
  },
  98,
);
