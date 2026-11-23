__d(
  "WAWebMetaAiConversationThreadId",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebSchemaBotProfile",
    "WAWebUserPrefsMeUser",
    "WAWebUserThreadIdHmac",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t) {
      var n = await d(e);
      if (
        n === "META_AI_THREAD" ||
        (n === "META_AI" &&
          o("WAWebBotGating").isMetaAiThreadRenderingEnabled())
      )
        try {
          return await c(e, n);
        } catch (e) {
          return null;
        }
      return t != null ? o("WAWebChatThreadLogging").getThreadIDHMAC(t) : null;
    }
    async function c(t, n) {
      if (
        n === "META_AI" &&
        !o("WAWebBotGating").isMetaAiThreadRenderingEnabled()
      )
        return null;
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (r == null) return null;
      var a = n === "META_AI" ? o("WAWebBotUtils").META_BOT_FBID_WID : t;
      try {
        return await o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(
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
    }
    async function d(e) {
      if (o("WAWebBotUtils").isMetaAiBot(e)) return "META_AI";
      if (!e.isBot()) return null;
      var t;
      try {
        t = await o("WAWebSchemaBotProfile")
          .getBotProfileTable()
          .get(e.toString());
      } catch (e) {
        return (m(), null);
      }
      return t == null ||
        t.isDeprecated === !0 ||
        t.isDeleted === !0 ||
        o("WAWebBotProduct").botProductFromServerValue(t.product) !==
          o("WAWebBotProduct").BotProduct.META_AI_THREAD
        ? null
        : o("WAWebBotGating").isMetaAiThreadRenderingEnabled()
          ? "META_AI_THREAD"
          : null;
    }
    function m() {
      try {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-conversation-thread-id] bot-profile-read-failed",
              ])),
          )
          .sendLogs("meta-ai-conversation-thread-id-bot-profile-read-failed");
      } catch (e) {}
    }
    ((l.getMessageConversationThreadId = u),
      (l.getMetaAiConversationThreadId = c));
  },
  98,
);
