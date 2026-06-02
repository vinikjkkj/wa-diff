__d(
  "WASmaxPassiveModeActiveIQRPC",
  [
    "WAComms",
    "WASmaxInPassiveModeActiveIQResponseSuccess",
    "WASmaxOutPassiveModeActiveIQRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPassiveModeActiveIQRequest").makeActiveIQRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o(
          "WASmaxInPassiveModeActiveIQResponseSuccess",
        ).parseActiveIQResponseSuccess(n, t);
      if (r.success) return { name: "ActiveIQResponseSuccess", value: r.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ActiveIQ", { Success: r }),
      );
    }
    l.sendActiveIQRPC = e;
  },
  98,
);
