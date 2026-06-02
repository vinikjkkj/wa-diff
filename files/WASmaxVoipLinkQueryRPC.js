__d(
  "WASmaxVoipLinkQueryRPC",
  [
    "WAComms",
    "WASmaxInVoipLinkQueryResponseLinkQueryAck",
    "WASmaxInVoipLinkQueryResponseLinkQueryNack",
    "WASmaxOutVoipLinkQueryRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutVoipLinkQueryRequest").makeLinkQueryRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendLinkQueryRPC = e;
  },
  98,
);
