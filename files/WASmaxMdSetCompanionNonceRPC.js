__d(
  "WASmaxMdSetCompanionNonceRPC",
  [
    "WAComms",
    "WASmaxInMdSetCompanionNonceResponseSuccess",
    "WASmaxOutMdSetCompanionNonceRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutMdSetCompanionNonceRequest",
        ).makeSetCompanionNonceRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInMdSetCompanionNonceResponseSuccess",
        ).parseSetCompanionNonceResponseSuccess(r, n);
      if (a.success)
        return { name: "SetCompanionNonceResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetCompanionNonce", {
          Success: a,
        }),
      );
    }
    l.sendSetCompanionNonceRPC = e;
  },
  98,
);
