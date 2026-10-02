__d(
  "WASmaxInMessageDeliverSMBBroadcastSourceWithCampaignMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverSMBBroadcastSourceMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "offer_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "free_reserved_msgs",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInMessageDeliverSMBBroadcastSourceMixin",
      ).parseSMBBroadcastSourceMixin(e);
      return o("WAResultOrError").makeResult({
        bizCampaignId: r.value,
        bizOfferId: a.value,
        bizFreeReservedMsgs: i.value,
        sMBBroadcastSourceMixin: l.success ? l.value : null,
      });
    }
    l.parseSMBBroadcastSourceWithCampaignMixin = e;
  },
  98,
);
