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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield p(e);
          if (
            n === "META_AI_THREAD" ||
            (n === "META_AI" &&
              o("WAWebBotGating").isMetaAiThreadRenderingEnabled())
          )
            try {
              return yield d(e, n);
            } catch (e) {
              return null;
            }
          return t != null
            ? o("WAWebChatThreadLogging").getThreadIDHMAC(t)
            : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t === "META_AI" &&
            !o("WAWebBotGating").isMetaAiThreadRenderingEnabled()
          )
            return null;
          var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (n == null) return null;
          var r = t === "META_AI" ? o("WAWebBotUtils").META_BOT_FBID_WID : e;
          try {
            return yield o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(
              n.toString(),
              r.toString(),
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[meta-ai-chat-action-identity] thread-id-hash-failed",
                    ])),
                )
                .sendLogs("meta-ai-chat-action-thread-id-hash-failed"),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebBotUtils").isMetaAiBot(e)) return "META_AI";
          if (!e.isBot()) return null;
          var t;
          try {
            t = yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .get(e.toString());
          } catch (e) {
            return (f(), null);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      try {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-conversation-thread-id] bot-profile-read-failed",
              ])),
          )
          .sendLogs("meta-ai-conversation-thread-id-bot-profile-read-failed");
      } catch (e) {}
    }
    ((l.getMessageConversationThreadId = u),
      (l.getMetaAiConversationThreadId = d));
  },
  98,
);
