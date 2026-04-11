__d(
  "WASmaxSpamNewsletterReportRPC",
  [
    "WAComms",
    "WASmaxInSpamNewsletterReportResponseError",
    "WASmaxInSpamNewsletterReportResponseSuccess",
    "WASmaxOutSpamNewsletterReportRequest",
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
              "WASmaxOutSpamNewsletterReportRequest",
            ).makeNewsletterReportRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSpamNewsletterReportResponseSuccess",
            ).parseNewsletterReportResponseSuccess(r, n);
          if (a.success)
            return { name: "NewsletterReportResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSpamNewsletterReportResponseError",
          ).parseNewsletterReportResponseError(r, n);
          if (i.success)
            return { name: "NewsletterReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("NewsletterReport", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendNewsletterReportRPC = e;
  },
  98,
);
