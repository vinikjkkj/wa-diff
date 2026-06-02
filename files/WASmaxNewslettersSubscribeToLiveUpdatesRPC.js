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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutNewslettersSubscribeToLiveUpdatesRequest",
        ).makeSubscribeToLiveUpdatesRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
        o("WASmaxRpcUtils").errorMessageRpcParsing("SubscribeToLiveUpdates", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendSubscribeToLiveUpdatesRPC = e;
  },
  98,
);
