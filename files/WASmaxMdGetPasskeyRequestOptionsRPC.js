__d(
  "WASmaxMdGetPasskeyRequestOptionsRPC",
  [
    "WAComms",
    "WASmaxInMdGetPasskeyRequestOptionsResponseError",
    "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
    "WASmaxOutMdGetPasskeyRequestOptionsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
          "WASmaxOutMdGetPasskeyRequestOptionsRequest",
        ).makeGetPasskeyRequestOptionsRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o(
          "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
        ).parseGetPasskeyRequestOptionsResponseSuccess(n, t);
      if (r.success)
        return {
          name: "GetPasskeyRequestOptionsResponseSuccess",
          value: r.value,
        };
      var a = o(
        "WASmaxInMdGetPasskeyRequestOptionsResponseError",
      ).parseGetPasskeyRequestOptionsResponseError(n, t);
      if (a.success)
        return {
          name: "GetPasskeyRequestOptionsResponseError",
          value: a.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetPasskeyRequestOptions", {
          Success: r,
          Error: a,
        }),
      );
    }
    l.sendGetPasskeyRequestOptionsRPC = e;
  },
  98,
);
