__d(
  "WASmaxMdCompanionFinishRPC",
  [
    "WAComms",
    "WASmaxInMdCompanionFinishResponseError",
    "WASmaxInMdCompanionFinishResponseSuccess",
    "WASmaxOutMdCompanionFinishRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutMdCompanionFinishRequest").makeCompanionFinishRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInMdCompanionFinishResponseSuccess",
        ).parseCompanionFinishResponseSuccess(r, n);
      if (a.success)
        return { name: "CompanionFinishResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInMdCompanionFinishResponseError",
      ).parseCompanionFinishResponseError(r, n);
      if (i.success)
        return { name: "CompanionFinishResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionFinish", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendCompanionFinishRPC = e;
  },
  98,
);
