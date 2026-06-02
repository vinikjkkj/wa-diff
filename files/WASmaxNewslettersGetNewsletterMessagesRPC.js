__d(
  "WASmaxNewslettersGetNewsletterMessagesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterMessagesResponseClientError",
    "WASmaxInNewslettersGetNewsletterMessagesResponseServerError",
    "WASmaxInNewslettersGetNewsletterMessagesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterMessagesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutNewslettersGetNewsletterMessagesRequest",
        ).makeGetNewsletterMessagesRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInNewslettersGetNewsletterMessagesResponseSuccess",
        ).parseGetNewsletterMessagesResponseSuccess(r, n);
      if (a.success)
        return { name: "GetNewsletterMessagesResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInNewslettersGetNewsletterMessagesResponseClientError",
      ).parseGetNewsletterMessagesResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetNewsletterMessagesResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInNewslettersGetNewsletterMessagesResponseServerError",
      ).parseGetNewsletterMessagesResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetNewsletterMessagesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterMessages", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetNewsletterMessagesRPC = e;
  },
  98,
);
