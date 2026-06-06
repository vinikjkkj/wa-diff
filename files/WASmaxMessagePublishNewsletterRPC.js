__d(
  "WASmaxMessagePublishNewsletterRPC",
  [
    "WAComms",
    "WASmaxInMessagePublishNewsletterResponseNegative",
    "WASmaxInMessagePublishNewsletterResponseSuccess",
    "WASmaxOutMessagePublishNewsletterRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutMessagePublishNewsletterRequest",
        ).makeNewsletterRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInMessagePublishNewsletterResponseNegative",
        ).parseNewsletterResponseNegative(r, n);
      if (a.success)
        return { name: "NewsletterResponseNegative", value: a.value };
      var i = o(
        "WASmaxInMessagePublishNewsletterResponseSuccess",
      ).parseNewsletterResponseSuccess(r, n);
      if (i.success)
        return { name: "NewsletterResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
          Negative: a,
          Success: i,
        }),
      );
    }
    l.sendNewsletterRPC = e;
  },
  98,
);
