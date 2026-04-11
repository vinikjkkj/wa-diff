__d(
  "WASmaxMessageDeliverNewsletterRPC",
  [
    "WASmaxInMessageDeliverNewsletterRequest",
    "WASmaxOutMessageDeliverNewsletterResponseError",
    "WASmaxOutMessageDeliverNewsletterResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverNewsletterRequest",
      ).parseNewsletterRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNewsletterResponseError: function () {
          return o(
            "WASmaxOutMessageDeliverNewsletterResponseError",
          ).makeNewsletterResponseError(e);
        },
        makeNewsletterResponseSuccess: function () {
          return o(
            "WASmaxOutMessageDeliverNewsletterResponseSuccess",
          ).makeNewsletterResponseSuccess(e);
        },
      };
    }
    l.receiveNewsletterRPC = e;
  },
  98,
);
