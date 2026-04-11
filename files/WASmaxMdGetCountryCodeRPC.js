__d(
  "WASmaxMdGetCountryCodeRPC",
  [
    "WAComms",
    "WASmaxInMdGetCountryCodeResponseError",
    "WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse",
    "WASmaxOutMdGetCountryCodeRequest",
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
              "WASmaxOutMdGetCountryCodeRequest",
            ).makeGetCountryCodeRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse",
            ).parseGetCountryCodeResponseGetCountryCodeResponse(n, t);
          if (r.success)
            return {
              name: "GetCountryCodeResponseGetCountryCodeResponse",
              value: r.value,
            };
          var a = o(
            "WASmaxInMdGetCountryCodeResponseError",
          ).parseGetCountryCodeResponseError(n, t);
          if (a.success)
            return { name: "GetCountryCodeResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetCountryCode", {
              GetCountryCodeResponse: r,
              Error: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetCountryCodeRPC = e;
  },
  98,
);
