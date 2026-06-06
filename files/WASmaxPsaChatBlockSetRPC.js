__d(
  "WASmaxPsaChatBlockSetRPC",
  [
    "WAComms",
    "WASmaxInPsaChatBlockSetResponseServerError",
    "WASmaxInPsaChatBlockSetResponseSuccess",
    "WASmaxOutPsaChatBlockSetRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutPsaChatBlockSetRequest").makeChatBlockSetRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInPsaChatBlockSetResponseSuccess",
        ).parseChatBlockSetResponseSuccess(r, n);
      if (a.success)
        return { name: "ChatBlockSetResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInPsaChatBlockSetResponseServerError",
      ).parseChatBlockSetResponseServerError(r, n);
      if (i.success)
        return { name: "ChatBlockSetResponseServerError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockSet", {
          Success: a,
          ServerError: i,
        }),
      );
    }
    l.sendChatBlockSetRPC = e;
  },
  98,
);
