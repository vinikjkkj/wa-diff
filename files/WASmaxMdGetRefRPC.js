__d(
  "WASmaxMdGetRefRPC",
  [
    "WAComms",
    "WASmaxInMdGetRefResponseSuccess",
    "WASmaxOutMdGetRefRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutMdGetRefRequest").makeGetRefRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o("WASmaxInMdGetRefResponseSuccess").parseGetRefResponseSuccess(
          n,
          t,
        );
      if (r.success) return { name: "GetRefResponseSuccess", value: r.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetRef", { Success: r }),
      );
    }
    l.sendGetRefRPC = e;
  },
  98,
);
