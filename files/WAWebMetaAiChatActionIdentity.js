__d(
  "WAWebMetaAiChatActionIdentity",
  [
    "WAWebMetaAiChatActionLogger",
    "WAWebMetaAiConversationThreadId",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebMetaAiChatActionLogger",
          ).resolveMetaAiChatActionChatType(e);
          return t == null
            ? null
            : {
                chatType: t,
                conversationThreadId: yield o(
                  "WAWebMetaAiConversationThreadId",
                ).getMetaAiConversationThreadId(e, t),
              };
        })),
        s.apply(this, arguments)
      );
    }
    ((l.resolveMetaAiChatActionIdentity = e),
      (l.getMetaAiConversationThreadId = o(
        "WAWebMetaAiConversationThreadId",
      ).getMetaAiConversationThreadId));
  },
  98,
);
