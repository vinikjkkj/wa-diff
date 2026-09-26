__d(
  "WASmaxBrPaymentGetPixBankListRPC",
  [
    "WAComms",
    "WASmaxInBrPaymentGetPixBankListResponseError",
    "WASmaxInBrPaymentGetPixBankListResponseSuccess",
    "WASmaxOutBrPaymentGetPixBankListRequest",
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
          var t = o(
              "WASmaxOutBrPaymentGetPixBankListRequest",
            ).makeGetPixBankListRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInBrPaymentGetPixBankListResponseSuccess",
            ).parseGetPixBankListResponseSuccess(n, t);
          if (r.success)
            return { name: "GetPixBankListResponseSuccess", value: r.value };
          var a = o(
            "WASmaxInBrPaymentGetPixBankListResponseError",
          ).parseGetPixBankListResponseError(n, t);
          if (a.success)
            return { name: "GetPixBankListResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetPixBankList", {
              Success: r,
              Error: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetPixBankListRPC = e;
  },
  98,
);
