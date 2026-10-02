__d(
  "WASmaxInMessageDeliverIndividualDeliverPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup",
    "WASmaxInMessageDeliverIndividualRequestPayNodeMixin",
    "WASmaxInMessageDeliverLegacyAmountMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverIndividualRequestPayNodeMixin",
        ).parseIndividualRequestPayNodeMixin(e),
        r = o("WASmaxInMessageDeliverLegacyAmountMixin").parseLegacyAmountMixin(
          e,
        ),
        a = o(
          "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup",
        ).parseBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup(
          e,
        );
      return a.success
        ? o("WAResultOrError").makeResult({
            individualRequestPayNodeMixin: n.success ? n.value : null,
            legacyAmountMixin: r.success ? r.value : null,
            bRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup:
              a.value,
          })
        : a;
    }
    l.parseIndividualDeliverPayNodeMixin = e;
  },
  98,
);
