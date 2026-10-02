__d(
  "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRMessageDeliverSendNodeMixin",
    "WASmaxInMessageDeliverUPIMessageDeliverSendPayNodeMixin",
    "WASmaxInMessageDeliverXBMessageDeliverSendNodeMixin",
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
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "UPIMessageDeliverSendPayNode",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverXBMessageDeliverSendNodeMixin",
      ).parseXBMessageDeliverSendNodeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "XBMessageDeliverSendNode",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BRMessageDeliverSendNode",
              "UPIMessageDeliverSendPayNode",
              "XBMessageDeliverSendNode",
            ],
            [t, n, r],
          );
    }
    l.parseBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup =
      e;
  },
  98,
);
