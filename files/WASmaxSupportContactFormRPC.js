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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutSupportContactFormRequest").makeContactFormRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInSupportContactFormResponseSuccess",
        ).parseContactFormResponseSuccess(r, n);
      if (a.success)
        return { name: "ContactFormResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInSupportContactFormResponseRetryableError",
      ).parseContactFormResponseRetryableError(r, n);
      if (i.success)
        return { name: "ContactFormResponseRetryableError", value: i.value };
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
    }
    l.sendContactFormRPC = e;
  },
  98,
);
