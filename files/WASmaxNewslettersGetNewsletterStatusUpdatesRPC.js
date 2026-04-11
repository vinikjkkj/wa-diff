__d(
  "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseClientError",
    "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseServerError",
    "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterStatusUpdatesRequest",
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
              "WASmaxOutNewslettersGetNewsletterStatusUpdatesRequest",
            ).makeGetNewsletterStatusUpdatesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseSuccess",
            ).parseGetNewsletterStatusUpdatesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetNewsletterStatusUpdatesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseClientError",
          ).parseGetNewsletterStatusUpdatesResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetNewsletterStatusUpdatesResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseServerError",
          ).parseGetNewsletterStatusUpdatesResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetNewsletterStatusUpdatesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterStatusUpdates",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetNewsletterStatusUpdatesRPC = e;
  },
  98,
);
