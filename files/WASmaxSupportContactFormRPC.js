__d(
  "WASmaxSupportContactFormRPC",
  [
    "WAComms",
    "WASmaxInSupportContactFormResponseError",
    "WASmaxInSupportContactFormResponseRetryableError",
    "WASmaxInSupportContactFormResponseSuccess",
    "WASmaxOutSupportContactFormRequest",
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
              "WASmaxOutSupportContactFormRequest",
            ).makeContactFormRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSupportContactFormResponseSuccess",
            ).parseContactFormResponseSuccess(r, n);
          if (a.success)
            return { name: "ContactFormResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSupportContactFormResponseRetryableError",
          ).parseContactFormResponseRetryableError(r, n);
          if (i.success)
            return {
              name: "ContactFormResponseRetryableError",
              value: i.value,
            };
          var l = o(
            "WASmaxInSupportContactFormResponseError",
          ).parseContactFormResponseError(r, n);
          if (l.success)
            return { name: "ContactFormResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ContactForm", {
              Success: a,
              RetryableError: i,
              Error: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendContactFormRPC = e;
  },
  98,
);
