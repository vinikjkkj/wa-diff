__d(
  "WASmaxInMessageDeliverGroupDeliverPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDeliverSendOrRequestPayNodeMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverGroupDeliverSendOrRequestPayNodeMixinGroup",
      ).parseGroupDeliverSendOrRequestPayNodeMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            groupDeliverSendOrRequestPayNodeMixinGroup: n.value,
          })
        : n;
    }
    l.parseGroupDeliverPayNodeMixin = e;
  },
  98,
);
