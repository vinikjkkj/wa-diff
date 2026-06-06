__d(
  "WASmaxBizCtwaNativeAdUploadAdMediaRPC",
  [
    "WAComms",
    "WASmaxInBizCtwaNativeAdUploadAdMediaResponseError",
    "WASmaxInBizCtwaNativeAdUploadAdMediaResponseSuccess",
    "WASmaxOutBizCtwaNativeAdUploadAdMediaRequest",
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
          var n = o(
              "WASmaxOutBizCtwaNativeAdUploadAdMediaRequest",
            ).makeUploadAdMediaRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizCtwaNativeAdUploadAdMediaResponseSuccess",
            ).parseUploadAdMediaResponseSuccess(r, n);
          if (a.success)
            return { name: "UploadAdMediaResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInBizCtwaNativeAdUploadAdMediaResponseError",
          ).parseUploadAdMediaResponseError(r, n);
          if (i.success)
            return { name: "UploadAdMediaResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UploadAdMedia", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendUploadAdMediaRPC = e;
  },
  98,
);
