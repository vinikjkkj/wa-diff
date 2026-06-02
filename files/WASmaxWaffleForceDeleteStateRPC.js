__d(
  "WASmaxWaffleForceDeleteStateRPC",
  [
    "WAComms",
    "WASmaxInWaffleForceDeleteStateResponseError",
    "WASmaxInWaffleForceDeleteStateResponseSuccess",
    "WASmaxOutWaffleForceDeleteStateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleForceDeleteStateRequest",
        ).makeForceDeleteStateRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleForceDeleteStateResponseSuccess",
        ).parseForceDeleteStateResponseSuccess(r, n);
      if (a.success)
        return { name: "ForceDeleteStateResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleForceDeleteStateResponseError",
      ).parseForceDeleteStateResponseError(r, n);
      if (i.success)
        return { name: "ForceDeleteStateResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ForceDeleteState", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendForceDeleteStateRPC = e;
  },
  98,
);
