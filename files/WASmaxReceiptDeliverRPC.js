__d(
  "WASmaxReceiptDeliverRPC",
  [
    "WASmaxInReceiptDeliverRequest",
    "WASmaxOutReceiptDeliverResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptDeliverRequest").parseDeliverRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Deliver", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverResponseSuccess: function () {
          return o(
            "WASmaxOutReceiptDeliverResponseSuccess",
          ).makeDeliverResponseSuccess(e);
        },
      };
    }
    l.receiveDeliverRPC = e;
  },
  98,
);
