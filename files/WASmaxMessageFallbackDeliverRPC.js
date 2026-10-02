__d(
  "WASmaxMessageFallbackDeliverRPC",
  [
    "WASmaxInMessageFallbackDeliverRequest",
    "WASmaxOutMessageFallbackDeliverResponseBadStanza",
    "WASmaxOutMessageFallbackDeliverResponseBadStanzaInvalidProtobuf",
    "WASmaxOutMessageFallbackDeliverResponseDelivery",
    "WASmaxOutMessageFallbackDeliverResponseNoEnc",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageFallbackDeliverRequest").parseDeliverRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Deliver", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverResponseNoEnc: function () {
          return o(
            "WASmaxOutMessageFallbackDeliverResponseNoEnc",
          ).makeDeliverResponseNoEnc(e);
        },
        makeDeliverResponseDelivery: function () {
          return o(
            "WASmaxOutMessageFallbackDeliverResponseDelivery",
          ).makeDeliverResponseDelivery(e);
        },
        makeDeliverResponseBadStanzaInvalidProtobuf: function (n) {
          return o(
            "WASmaxOutMessageFallbackDeliverResponseBadStanzaInvalidProtobuf",
          ).makeDeliverResponseBadStanzaInvalidProtobuf(n, e);
        },
        makeDeliverResponseBadStanza: function (n) {
          return o(
            "WASmaxOutMessageFallbackDeliverResponseBadStanza",
          ).makeDeliverResponseBadStanza(n, e);
        },
      };
    }
    l.receiveDeliverRPC = e;
  },
  98,
);
