__d(
  "WASmaxDirtyBitsCleanRPC",
  [
    "WAComms",
    "WASmaxInDirtyBitsCleanResponseError",
    "WASmaxInDirtyBitsCleanResponseSuccess",
    "WASmaxOutDirtyBitsCleanRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WASmaxOutDirtyBitsCleanRequest").makeCleanRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInDirtyBitsCleanResponseSuccess",
            ).parseCleanResponseSuccess(r, n);
          if (a.success)
            return { name: "CleanResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInDirtyBitsCleanResponseError",
          ).parseCleanResponseError(r, n);
          if (i.success) return { name: "CleanResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Clean", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCleanRPC = e;
  },
  98,
);
