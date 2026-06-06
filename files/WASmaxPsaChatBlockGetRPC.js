__d(
  "WASmaxPsaChatBlockGetRPC",
  [
    "WAComms",
    "WASmaxInPsaChatBlockGetResponseServerError",
    "WASmaxInPsaChatBlockGetResponseSuccess",
    "WASmaxOutPsaChatBlockGetRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPsaChatBlockGetRequest").makeChatBlockGetRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o(
          "WASmaxInPsaChatBlockGetResponseSuccess",
        ).parseChatBlockGetResponseSuccess(n, t);
      if (r.success)
        return { name: "ChatBlockGetResponseSuccess", value: r.value };
      var a = o(
        "WASmaxInPsaChatBlockGetResponseServerError",
      ).parseChatBlockGetResponseServerError(n, t);
      if (a.success)
        return { name: "ChatBlockGetResponseServerError", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockGet", {
          Success: r,
          ServerError: a,
        }),
      );
    }
    l.sendChatBlockGetRPC = e;
  },
  98,
);
