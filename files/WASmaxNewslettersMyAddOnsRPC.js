__d(
  "WASmaxNewslettersMyAddOnsRPC",
  [
    "WAComms",
    "WASmaxInNewslettersMyAddOnsResponseClientError",
    "WASmaxInNewslettersMyAddOnsResponseServerError",
    "WASmaxInNewslettersMyAddOnsResponseSuccess",
    "WASmaxOutNewslettersMyAddOnsRequest",
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
          var n = o("WASmaxOutNewslettersMyAddOnsRequest").makeMyAddOnsRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInNewslettersMyAddOnsResponseSuccess",
            ).parseMyAddOnsResponseSuccess(r, n);
          if (a.success)
            return { name: "MyAddOnsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInNewslettersMyAddOnsResponseClientError",
          ).parseMyAddOnsResponseClientError(r, n);
          if (i.success)
            return { name: "MyAddOnsResponseClientError", value: i.value };
          var l = o(
            "WASmaxInNewslettersMyAddOnsResponseServerError",
          ).parseMyAddOnsResponseServerError(r, n);
          if (l.success)
            return { name: "MyAddOnsResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("MyAddOns", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMyAddOnsRPC = e;
  },
  98,
);
