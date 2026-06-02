__d(
  "WASmaxWaffleStateExistsRPC",
  [
    "WAComms",
    "WASmaxInWaffleStateExistsResponseError",
    "WASmaxInWaffleStateExistsResponseSuccess",
    "WASmaxOutWaffleStateExistsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutWaffleStateExistsRequest").makeStateExistsRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleStateExistsResponseSuccess",
        ).parseStateExistsResponseSuccess(r, n);
      if (a.success)
        return { name: "StateExistsResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleStateExistsResponseError",
      ).parseStateExistsResponseError(r, n);
      if (i.success)
        return { name: "StateExistsResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("StateExists", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendStateExistsRPC = e;
  },
  98,
);
