__d(
  "WASmaxMdGetRefRPC",
  [
    "WAComms",
    "WASmaxInMdGetRefResponseSuccess",
    "WASmaxOutMdGetRefRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WASmaxOutMdGetRefRequest").makeGetRefRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o("WASmaxInMdGetRefResponseSuccess").parseGetRefResponseSuccess(
              n,
              t,
            );
          if (r.success)
            return { name: "GetRefResponseSuccess", value: r.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetRef", {
              Success: r,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetRefRPC = e;
  },
  98,
);
