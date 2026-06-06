__d(
  "WAWebBotGenTypingIndicatorMsg",
  [
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "bot_typing_placeholder";
    function s(e) {
      d(e);
    }
    function u(e, t) {
      c(e, t) && d(e);
    }
    function c(e, t) {
      var n,
        a =
          o("WAWebBotBaseGating").isBotEnabled() &&
          e.id instanceof r("WAWebWid") &&
          e.id.isBot(),
        i =
          o("WAWebBotBaseGating").isBizBot3pEnabled() &&
          ((n = e.contact.businessProfile) == null ? void 0 : n.isBizBot3p) ===
            !0;
      return (
        (a || i) &&
        t.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        t.type === o("WAWebMsgType").MSG_TYPE.CHAT
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (o("WAWebBotBaseGating").isBotEnabled()) {
            var n = e.id;
            if (
              !(
                n instanceof r("WAWebWid") &&
                !n.isBot() &&
                !((t = e.contact.businessProfile) != null && t.isBizBot3p)
              )
            ) {
              var a = new (r("WAWebMsgKey"))({
                fromMe: !1,
                remote: n,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
              });
              o("WAWebBackendApi").frontendFireAndForget(
                "addInitialBotTypingIndicatorToChat",
                { chatId: n, msgKey: a },
              );
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "bonsai_ti_timeout_duration_ms",
      );
      return e;
    }
    ((l.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE = e),
      (l.showBotTypingIndicator = s),
      (l.maybeGenBotTypingIndicatorMessage = u),
      (l.getBotTypingIndicatorTimeout = p));
  },
  98,
);
