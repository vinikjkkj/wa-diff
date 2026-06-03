__d(
  "WASmaxVoipLinkQueryRPC",
  [
    "WAComms",
    "WASmaxInVoipLinkQueryResponseLinkQueryAck",
    "WASmaxInVoipLinkQueryResponseLinkQueryNack",
    "WASmaxOutVoipLinkQueryRequest",
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
          var n = o("WASmaxOutVoipLinkQueryRequest").makeLinkQueryRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInVoipLinkQueryResponseLinkQueryAck",
            ).parseLinkQueryResponseLinkQueryAck(r, n);
          if (a.success)
            return { name: "LinkQueryResponseLinkQueryAck", value: a.value };
          var i = o(
            "WASmaxInVoipLinkQueryResponseLinkQueryNack",
          ).parseLinkQueryResponseLinkQueryNack(r, n);
          if (i.success)
            return { name: "LinkQueryResponseLinkQueryNack", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("LinkQuery", {
              LinkQueryAck: a,
              LinkQueryNack: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendLinkQueryRPC = e;
  },
  98,
);
