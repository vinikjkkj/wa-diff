__d(
  "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
  [
    "WASmaxInStatusDeliverIncomingNewsletterStatusRequest",
    "WASmaxOutStatusDeliverIncomingNewsletterStatusResponseSuccess",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverIncomingNewsletterStatusRequest",
      ).parseIncomingNewsletterStatusRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "IncomingNewsletterStatus",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeIncomingNewsletterStatusResponseSuccess: function () {
          return o(
            "WASmaxOutStatusDeliverIncomingNewsletterStatusResponseSuccess",
          ).makeIncomingNewsletterStatusResponseSuccess(e);
        },
      };
    }
    l.receiveIncomingNewsletterStatusRPC = e;
  },
  98,
);
