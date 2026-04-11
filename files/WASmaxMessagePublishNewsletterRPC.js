__d(
  "WASmaxMessagePublishNewsletterRPC",
  [
    "WAComms",
    "WASmaxInMessagePublishNewsletterResponseNegative",
    "WASmaxInMessagePublishNewsletterResponseSuccess",
    "WASmaxOutMessagePublishNewsletterRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutMessagePublishNewsletterRequest",
            ).makeNewsletterRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
        })),
        s.apply(this, arguments)
      );
    }
    l.sendNewsletterRPC = e;
  },
  98,
);
