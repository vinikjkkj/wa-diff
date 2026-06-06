__d(
  "WASmaxPsaChatBlockSetRPC",
  [
    "WAComms",
    "WASmaxInPsaChatBlockSetResponseServerError",
    "WASmaxInPsaChatBlockSetResponseSuccess",
    "WASmaxOutPsaChatBlockSetRequest",
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
          var n = o("WASmaxOutPsaChatBlockSetRequest").makeChatBlockSetRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
        })),
        s.apply(this, arguments)
      );
    }
    l.sendChatBlockSetRPC = e;
  },
  98,
);
