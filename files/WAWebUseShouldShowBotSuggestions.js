__d(
  "WAWebUseShouldShowBotSuggestions",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebMsgType",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t);
      return r("useWAWebEventTargetValue")(
        n.msgs,
        "add remove",
        function () {
          var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
          if (!t || o("WAWebBotBaseGating").isMetaAIHomeEnabled()) return !1;
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
    function s(e, t) {
      return r("useWAWebEventTargetValue")(
        e.msgs,
        "add remove",
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
            !o("WAWebUserPrefsMeUser").isMeAccount(n.from)
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
    function u(t, n, r) {
      var o = e(t, r),
        a = s(t, n);
      return o || a;
    }
    l.useShouldShowBotSuggestions = u;
  },
  98,
);
