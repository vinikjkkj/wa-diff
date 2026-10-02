__d(
  "WASmaxInMessageDeliverGroupDeliverSendOrRequestPayNodeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDeliverSendPayNodeMixin",
    "WASmaxInMessageDeliverGroupRequestPayNodeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverGroupDeliverSendPayNodeMixin",
      ).parseGroupDeliverSendPayNodeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDeliverSendPayNode",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverGroupRequestPayNodeMixin",
      ).parseGroupRequestPayNodeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupRequestPayNode",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDeliverSendPayNode", "GroupRequestPayNode"],
            [t, n],
          );
    }
    l.parseGroupDeliverSendOrRequestPayNodeMixinGroup = e;
  },
  98,
);
