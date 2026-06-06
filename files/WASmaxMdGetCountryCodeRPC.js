__d(
  "WASmaxMdGetCountryCodeRPC",
  [
    "WAComms",
    "WASmaxInMdGetCountryCodeResponseError",
    "WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse",
    "WASmaxOutMdGetCountryCodeRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutMdGetCountryCodeRequest").makeGetCountryCodeRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
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
    }
    l.sendGetCountryCodeRPC = e;
  },
  98,
);
