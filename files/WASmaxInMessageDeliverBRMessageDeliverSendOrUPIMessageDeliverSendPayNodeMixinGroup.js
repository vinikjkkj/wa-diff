__d(
  "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRMessageDeliverSendNodeMixin",
    "WASmaxInMessageDeliverUPIMessageDeliverSendPayNodeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverBRMessageDeliverSendNodeMixin",
      ).parseBRMessageDeliverSendNodeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BRMessageDeliverSendNode",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverUPIMessageDeliverSendPayNodeMixin",
      ).parseUPIMessageDeliverSendPayNodeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UPIMessageDeliverSendPayNode",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BRMessageDeliverSendNode", "UPIMessageDeliverSendPayNode"],
            [t, n],
          );
    }
    l.parseBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup = e;
  },
  98,
);
