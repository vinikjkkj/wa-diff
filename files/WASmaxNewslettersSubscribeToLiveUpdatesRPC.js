__d(
  "WASmaxNewslettersSubscribeToLiveUpdatesRPC",
  [
    "WAComms",
    "WASmaxInNewslettersSubscribeToLiveUpdatesResponseClientError",
    "WASmaxInNewslettersSubscribeToLiveUpdatesResponseServerError",
    "WASmaxInNewslettersSubscribeToLiveUpdatesResponseSuccess",
    "WASmaxOutNewslettersSubscribeToLiveUpdatesRequest",
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
              "WASmaxOutNewslettersSubscribeToLiveUpdatesRequest",
            ).makeSubscribeToLiveUpdatesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInNewslettersSubscribeToLiveUpdatesResponseSuccess",
            ).parseSubscribeToLiveUpdatesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "SubscribeToLiveUpdatesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInNewslettersSubscribeToLiveUpdatesResponseClientError",
          ).parseSubscribeToLiveUpdatesResponseClientError(r, n);
          if (i.success)
            return {
              name: "SubscribeToLiveUpdatesResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInNewslettersSubscribeToLiveUpdatesResponseServerError",
          ).parseSubscribeToLiveUpdatesResponseServerError(r, n);
          if (l.success)
            return {
              name: "SubscribeToLiveUpdatesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SubscribeToLiveUpdates",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSubscribeToLiveUpdatesRPC = e;
  },
  98,
);
