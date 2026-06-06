__d(
  "WASmaxMdSetPasskeyPrologueRPC",
  [
    "WAComms",
    "WASmaxInMdSetPasskeyPrologueResponseSuccess",
    "WASmaxOutMdSetPasskeyPrologueRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutMdSetPasskeyPrologueRequest",
        ).makeSetPasskeyPrologueRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInMdSetPasskeyPrologueResponseSuccess",
        ).parseSetPasskeyPrologueResponseSuccess(r, n);
      if (a.success)
        return { name: "SetPasskeyPrologueResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetPasskeyPrologue", {
          Success: a,
        }),
      );
    }
    l.sendSetPasskeyPrologueRPC = e;
  },
  98,
);
