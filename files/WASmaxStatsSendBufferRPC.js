__d(
  "WASmaxStatsSendBufferRPC",
  [
    "WAComms",
    "WASmaxInStatsSendBufferResponseErrorNoRetry",
    "WASmaxInStatsSendBufferResponseErrorRetry",
    "WASmaxInStatsSendBufferResponseSuccess",
    "WASmaxOutStatsSendBufferRequest",
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
          var n = o("WASmaxOutStatsSendBufferRequest").makeSendBufferRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInStatsSendBufferResponseSuccess",
            ).parseSendBufferResponseSuccess(r, n);
          if (a.success)
            return { name: "SendBufferResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInStatsSendBufferResponseErrorNoRetry",
          ).parseSendBufferResponseErrorNoRetry(r, n);
          if (i.success)
            return { name: "SendBufferResponseErrorNoRetry", value: i.value };
          var l = o(
            "WASmaxInStatsSendBufferResponseErrorRetry",
          ).parseSendBufferResponseErrorRetry(r, n);
          if (l.success)
            return { name: "SendBufferResponseErrorRetry", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SendBuffer", {
              Success: a,
              ErrorNoRetry: i,
              ErrorRetry: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSendBufferRPC = e;
  },
  98,
);
