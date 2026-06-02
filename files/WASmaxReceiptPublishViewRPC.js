__d(
  "WASmaxReceiptPublishViewRPC",
  [
    "WAComms",
    "WASmaxInReceiptPublishViewResponseSuccess",
    "WASmaxOutReceiptPublishViewRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutReceiptPublishViewRequest").makePublishViewRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInReceiptPublishViewResponseSuccess",
        ).parsePublishViewResponseSuccess(r, n);
      if (a.success)
        return { name: "PublishViewResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView", {
          Success: a,
        }),
      );
    }
    l.sendPublishViewRPC = e;
  },
  98,
);
