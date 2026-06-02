__d(
  "WASmaxWaffleForceSuspendStateRPC",
  [
    "WAComms",
    "WASmaxInWaffleForceSuspendStateResponseError",
    "WASmaxInWaffleForceSuspendStateResponseSuccess",
    "WASmaxOutWaffleForceSuspendStateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleForceSuspendStateRequest",
        ).makeForceSuspendStateRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleForceSuspendStateResponseSuccess",
        ).parseForceSuspendStateResponseSuccess(r, n);
      if (a.success)
        return { name: "ForceSuspendStateResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleForceSuspendStateResponseError",
      ).parseForceSuspendStateResponseError(r, n);
      if (i.success)
        return { name: "ForceSuspendStateResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ForceSuspendState", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendForceSuspendStateRPC = e;
  },
  98,
);
