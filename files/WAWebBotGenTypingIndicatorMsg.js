__d(
  "WAWebBotGenTypingIndicatorMsg",
  [
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBizBotProfileUtils",
    "WAWebBotBaseGating",
    "WAWebMsgKey",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "bot_typing_placeholder";
    function s(e) {
      u(e);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebBotBaseGating").isBotEnabled()) {
            var t = e.id;
            if (
              !(
                t instanceof r("WAWebWid") &&
                !t.isBot() &&
                !o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
                  e.contact.businessProfile,
                )
              )
            ) {
              var n = new (r("WAWebMsgKey"))({
                fromMe: !1,
                remote: t,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
              });
              o("WAWebBackendApi").frontendFireAndForget(
                "addInitialBotTypingIndicatorToChat",
                { chatId: t, msgKey: n },
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "bonsai_ti_timeout_duration_ms",
      );
      return e;
    }
    ((l.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE = e),
      (l.showBotTypingIndicator = s),
      (l.getBotTypingIndicatorTimeout = d));
  },
  98,
);
