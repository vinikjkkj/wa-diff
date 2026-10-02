__d(
  "WASmaxInMessageDeliverBizCampaignMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      return r.success
        ? o("WAResultOrError").makeResult({ bizCampaignId: r.value })
        : r;
    }
    l.parseBizCampaignMixin = e;
  },
  98,
);
