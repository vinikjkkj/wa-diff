__d(
  "WASmaxMdCompanionHelloRPC",
  [
    "WAComms",
    "WASmaxInMdCompanionHelloResponseError",
    "WASmaxInMdCompanionHelloResponseNotifyCompanion",
    "WASmaxOutMdCompanionHelloRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutMdCompanionHelloRequest").makeCompanionHelloRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInMdCompanionHelloResponseNotifyCompanion",
        ).parseCompanionHelloResponseNotifyCompanion(r, n);
      if (a.success)
        return {
          name: "CompanionHelloResponseNotifyCompanion",
          value: a.value,
        };
      var i = o(
        "WASmaxInMdCompanionHelloResponseError",
      ).parseCompanionHelloResponseError(r, n);
      if (i.success)
        return { name: "CompanionHelloResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionHello", {
          NotifyCompanion: a,
          Error: i,
        }),
      );
    }
    l.sendCompanionHelloRPC = e;
  },
  98,
);
