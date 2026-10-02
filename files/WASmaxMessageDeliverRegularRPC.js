__d(
  "WASmaxMessageDeliverRegularRPC",
  [
    "WASmaxInMessageDeliverRegularRequest",
    "WASmaxOutMessageDeliverRegularResponseMissingPlaceholder",
    "WASmaxOutMessageDeliverRegularResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverRegularRequest").parseRegularRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Regular", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeRegularResponseMissingPlaceholder: function (n) {
          return o(
            "WASmaxOutMessageDeliverRegularResponseMissingPlaceholder",
          ).makeRegularResponseMissingPlaceholder(n, e);
        },
        makeRegularResponseSuccess: function (n) {
          return o(
            "WASmaxOutMessageDeliverRegularResponseSuccess",
          ).makeRegularResponseSuccess(n, e);
        },
      };
    }
    l.receiveRegularRPC = e;
  },
  98,
);
