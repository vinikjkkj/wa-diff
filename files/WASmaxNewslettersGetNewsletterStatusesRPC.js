__d(
  "WASmaxNewslettersGetNewsletterStatusesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterStatusesResponseClientError",
    "WASmaxInNewslettersGetNewsletterStatusesResponseServerError",
    "WASmaxInNewslettersGetNewsletterStatusesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterStatusesRequest",
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
              "WASmaxOutNewslettersGetNewsletterStatusesRequest",
            ).makeGetNewsletterStatusesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInNewslettersGetNewsletterStatusesResponseSuccess",
            ).parseGetNewsletterStatusesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetNewsletterStatusesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInNewslettersGetNewsletterStatusesResponseClientError",
          ).parseGetNewsletterStatusesResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetNewsletterStatusesResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInNewslettersGetNewsletterStatusesResponseServerError",
          ).parseGetNewsletterStatusesResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetNewsletterStatusesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterStatuses",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetNewsletterStatusesRPC = e;
  },
  98,
);
