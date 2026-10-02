__d(
  "WASmaxInReceiptSingleStyleChatType",
  [
    "WAResultOrError",
    "WASmaxInReceiptBroadcastMixin",
    "WASmaxInReceiptDeliverStatusMixin",
    "WASmaxInReceiptGroupMixin",
    "WASmaxInReceiptIndividualMixin",
    "WASmaxInReceiptNewsletterDeliverMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptIndividualMixin").parseIndividualMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = o("WASmaxInReceiptGroupMixin").parseGroupMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: n.value,
        });
      var r = o("WASmaxInReceiptDeliverStatusMixin").parseDeliverStatusMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: r.value,
        });
      var a = o("WASmaxInReceiptBroadcastMixin").parseBroadcastMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "Broadcast",
          value: a.value,
        });
      var i = o(
        "WASmaxInReceiptNewsletterDeliverMixin",
      ).parseNewsletterDeliverMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterDeliver",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "Group", "Status", "Broadcast", "NewsletterDeliver"],
            [t, n, r, a, i],
          );
    }
    l.parseSingleStyleChatType = e;
  },
  98,
);
