__d(
  "WASmaxNewslettersGetMyNewsletterResponsesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersGetMyNewsletterResponsesResponseClientError",
    "WASmaxInNewslettersGetMyNewsletterResponsesResponseServerError",
    "WASmaxInNewslettersGetMyNewsletterResponsesResponseSuccess",
    "WASmaxOutNewslettersGetMyNewsletterResponsesRequest",
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
              "WASmaxOutNewslettersGetMyNewsletterResponsesRequest",
            ).makeGetMyNewsletterResponsesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInNewslettersGetMyNewsletterResponsesResponseSuccess",
            ).parseGetMyNewsletterResponsesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetMyNewsletterResponsesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInNewslettersGetMyNewsletterResponsesResponseClientError",
          ).parseGetMyNewsletterResponsesResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetMyNewsletterResponsesResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInNewslettersGetMyNewsletterResponsesResponseServerError",
          ).parseGetMyNewsletterResponsesResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetMyNewsletterResponsesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetMyNewsletterResponses",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetMyNewsletterResponsesRPC = e;
  },
  98,
);
