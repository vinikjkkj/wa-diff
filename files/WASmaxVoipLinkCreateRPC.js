__d(
  "WASmaxVoipLinkCreateRPC",
  [
    "WAComms",
    "WASmaxInVoipLinkCreateResponseLinkCreateAck",
    "WASmaxInVoipLinkCreateResponseLinkCreateNack",
    "WASmaxOutVoipLinkCreateRequest",
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
          var n = o("WASmaxOutVoipLinkCreateRequest").makeLinkCreateRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInVoipLinkCreateResponseLinkCreateAck",
            ).parseLinkCreateResponseLinkCreateAck(r, n);
          if (a.success)
            return { name: "LinkCreateResponseLinkCreateAck", value: a.value };
          var i = o(
            "WASmaxInVoipLinkCreateResponseLinkCreateNack",
          ).parseLinkCreateResponseLinkCreateNack(r, n);
          if (i.success)
            return { name: "LinkCreateResponseLinkCreateNack", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("LinkCreate", {
              LinkCreateAck: a,
              LinkCreateNack: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendLinkCreateRPC = e;
  },
  98,
);
