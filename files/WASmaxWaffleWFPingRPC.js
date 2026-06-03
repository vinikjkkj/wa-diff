__d(
  "WASmaxWaffleWFPingRPC",
  [
    "WAComms",
    "WASmaxInWaffleWFPingResponseError",
    "WASmaxInWaffleWFPingResponseSuccess",
    "WASmaxOutWaffleWFPingRequest",
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
          var n = o("WASmaxOutWaffleWFPingRequest").makeWFPingRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleWFPingResponseSuccess",
            ).parseWFPingResponseSuccess(r, n);
          if (a.success)
            return { name: "WFPingResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInWaffleWFPingResponseError",
          ).parseWFPingResponseError(r, n);
          if (i.success) return { name: "WFPingResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("WFPing", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendWFPingRPC = e;
  },
  98,
);
