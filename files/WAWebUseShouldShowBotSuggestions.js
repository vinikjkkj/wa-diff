__d(
  "WAWebUseShouldShowBotSuggestions",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebMsgType",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a;
      n[0] !== e || n[1] !== t
        ? ((a = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t)),
          (n[0] = e),
          (n[1] = t),
          (n[2] = a))
        : (a = n[2]);
      var i = a,
        l;
      n[3] !== e || n[4] !== i.msgs
        ? ((l = function () {
            var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
            if (!t || o("WAWebBotBaseGating").isMetaAIHomeEnabled()) return !1;
            if (i.msgs.length === 0) return !0;
            if (i.msgs.length === 1) {
              var n,
                r = (n = i.msgs.last()) == null ? void 0 : n.subtype;
              return r === "bot_init";
            }
            return !1;
          }),
          (n[3] = e),
          (n[4] = i.msgs),
          (n[5] = l))
        : (l = n[5]);
      var s;
      return (
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = []), (n[6] = s))
          : (s = n[6]),
        r("useWAWebEventTargetValue")(i.msgs, "add remove", l, s)
      );
    }
    function s(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a;
      n[0] !== t || n[1] !== e.msgs
        ? ((a = function () {
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
            return !e.msgs.some(u);
          }),
          (n[0] = t),
          (n[1] = e.msgs),
          (n[2] = a))
        : (a = n[2]);
      var i;
      return (
        n[3] !== t ? ((i = [t]), (n[3] = t), (n[4] = i)) : (i = n[4]),
        r("useWAWebEventTargetValue")(e.msgs, "add remove", a, i)
      );
    }
    function u(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
      );
    }
    function c(t, n, r) {
      var o = e(t, r),
        a = s(t, n);
      return o || a;
    }
    l.useShouldShowBotSuggestions = c;
  },
  98,
);
