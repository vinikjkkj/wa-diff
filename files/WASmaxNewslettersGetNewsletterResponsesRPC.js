__d(
  "WASmaxNewslettersGetNewsletterResponsesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterResponsesResponseClientError",
    "WASmaxInNewslettersGetNewsletterResponsesResponseServerError",
    "WASmaxInNewslettersGetNewsletterResponsesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterResponsesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutNewslettersGetNewsletterResponsesRequest",
        ).makeGetNewsletterResponsesRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInNewslettersGetNewsletterResponsesResponseSuccess",
        ).parseGetNewsletterResponsesResponseSuccess(r, n);
      if (a.success)
        return {
          name: "GetNewsletterResponsesResponseSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInNewslettersGetNewsletterResponsesResponseClientError",
      ).parseGetNewsletterResponsesResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetNewsletterResponsesResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInNewslettersGetNewsletterResponsesResponseServerError",
      ).parseGetNewsletterResponsesResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetNewsletterResponsesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterResponses", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetNewsletterResponsesRPC = e;
  },
  98,
);
