__d(
  "WAWebMetaAiChatActionIdentity",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebMetaAiChatActionLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUserThreadIdHmac",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebMetaAiChatActionLogger",
          ).resolveMetaAiChatActionChatType(e);
          return t == null
            ? null
            : { chatType: t, conversationThreadId: yield c(e, t) };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            n === "META_AI" &&
            !o("WAWebBotGating").isMetaAiThreadRenderingEnabled()
          )
            return null;
          var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (r == null) return null;
          var a = n === "META_AI" ? o("WAWebBotUtils").META_BOT_FBID_WID : t;
          try {
            return yield o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(
              r.toString(),
              a.toString(),
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[meta-ai-chat-action-identity] thread-id-hash-failed",
                    ])),
                )
                .sendLogs("meta-ai-chat-action-thread-id-hash-failed"),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.resolveMetaAiChatActionIdentity = s),
      (l.getMetaAiConversationThreadId = c));
  },
  98,
);
