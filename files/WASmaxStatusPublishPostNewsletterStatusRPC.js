__d(
  "WASmaxStatusPublishPostNewsletterStatusRPC",
  [
    "WAComms",
    "WASmaxInStatusPublishPostNewsletterStatusResponseNegative",
    "WASmaxInStatusPublishPostNewsletterStatusResponseSuccess",
    "WASmaxOutStatusPublishPostNewsletterStatusRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutStatusPublishPostNewsletterStatusRequest",
        ).makePostNewsletterStatusRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInStatusPublishPostNewsletterStatusResponseNegative",
        ).parsePostNewsletterStatusResponseNegative(r, n);
      if (a.success)
        return { name: "PostNewsletterStatusResponseNegative", value: a.value };
      var i = o(
        "WASmaxInStatusPublishPostNewsletterStatusResponseSuccess",
      ).parsePostNewsletterStatusResponseSuccess(r, n);
      if (i.success)
        return { name: "PostNewsletterStatusResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PostNewsletterStatus", {
          Negative: a,
          Success: i,
        }),
      );
    }
    l.sendPostNewsletterStatusRPC = e;
  },
  98,
);
