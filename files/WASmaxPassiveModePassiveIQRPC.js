__d(
  "WASmaxPassiveModePassiveIQRPC",
  [
    "WAComms",
    "WASmaxInPassiveModePassiveIQResponseSuccess",
    "WASmaxOutPassiveModePassiveIQRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPassiveModePassiveIQRequest").makePassiveIQRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o(
          "WASmaxInPassiveModePassiveIQResponseSuccess",
        ).parsePassiveIQResponseSuccess(n, t);
      if (r.success)
        return { name: "PassiveIQResponseSuccess", value: r.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PassiveIQ", { Success: r }),
      );
    }
    l.sendPassiveIQRPC = e;
  },
  98,
);
