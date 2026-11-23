__d(
  "WAWebUseShouldShowBotSuggestions",
  [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebMsgType",
    "WAWebThreadModelResolver",
    "WAWebUserUtils",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t),
        a = s(
          function () {
            return [n.msgs, n.msgs.msgLoadState];
          },
          [n],
        );
      return r("useWAWebEventTargetValue")(
        a,
        ["add", "remove", "change:noEarlierMsgs"],
        function () {
          var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
          if (
            !t ||
            (o("WAWebBotUtils").isMetaAiBot(e.id) &&
              o("WAWebBotFrontendUtils").isMetaAiChatEmpty(n) &&
              n.msgs.msgLoadState.noEarlierMsgs &&
              o("WAWebBotBaseGating").isMetaAiNullStateEnabled())
          )
            return !1;
          if (n.msgs.length === 0) return !0;
          if (n.msgs.length === 1) {
            var r,
              a = (r = n.msgs.last()) == null ? void 0 : r.subtype;
            return a === "bot_init";
          }
          return !1;
        },
        [],
      );
    }
    function c(e, t) {
      return r("useWAWebEventTargetValue")(
        e.msgs,
        ["add", "remove"],
        function () {
          if (
            !o("WAWebBotGating").isBizBot3pAvailable() ||
            !t ||
            t.length === 0
          )
            return !1;
          var n = e.msgs.last();
          if (!n || n.subtype === "biz_bot_3p_disclosure") return !0;
          if (
            n.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
            !o("WAWebUserUtils").isMeAccount(n.from)
          ) {
            var r = e.msgs.at(e.msgs.length - 2);
            if ((r == null ? void 0 : r.subtype) === "biz_bot_3p_disclosure")
              return !0;
          }
          return !e.msgs.some(function (e) {
            return (
              e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
              e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
            );
          });
        },
        [t],
      );
    }
    function d(e, t, n) {
      var r = u(e, n),
        o = c(e, t);
      return r || o;
    }
    l.useShouldShowBotSuggestions = d;
  },
  98,
);
