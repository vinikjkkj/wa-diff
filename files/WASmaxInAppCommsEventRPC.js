__d(
  "WASmaxInAppCommsEventRPC",
  [
    "WAComms",
    "WASmaxInInAppCommsEventResponseError",
    "WASmaxInInAppCommsEventResponseSuccess",
    "WASmaxOutInAppCommsEventRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutInAppCommsEventRequest").makeEventRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInInAppCommsEventResponseSuccess",
        ).parseEventResponseSuccess(r, n);
      if (a.success) return { name: "EventResponseSuccess", value: a.value };
      var i = o("WASmaxInInAppCommsEventResponseError").parseEventResponseError(
        r,
        n,
      );
      if (i.success) return { name: "EventResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Event", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendEventRPC = e;
  },
  98,
);
