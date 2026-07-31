__d(
  "WAWebUseShouldShowBotSuggestions",
  [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebMsgType",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(9),
        a;
      n[0] !== e || n[1] !== t
        ? ((a = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t)),
          (n[0] = e),
          (n[1] = t),
          (n[2] = a))
        : (a = n[2]);
      var i = a,
        l;
      n[3] !== i.msgs
        ? ((l = [i.msgs, i.msgs.msgLoadState]), (n[3] = i.msgs), (n[4] = l))
        : (l = n[4]);
      var s = l,
        u;
      n[5] !== e || n[6] !== i
        ? ((u = function () {
            var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
            if (
              !t ||
              o("WAWebBotBaseGating").isMetaAIHomeEnabled() ||
              (o("WAWebBotUtils").isMetaAiBot(e.id) &&
                o("WAWebBotFrontendUtils").isMetaAiChatEmpty(i) &&
                i.msgs.msgLoadState.noEarlierMsgs &&
                o("WAWebBotBaseGating").isMetaAiNullStateEnabled())
            )
              return !1;
            if (i.msgs.length === 0) return !0;
            if (i.msgs.length === 1) {
              var n,
                r = (n = i.msgs.last()) == null ? void 0 : n.subtype;
              return r === "bot_init";
            }
            return !1;
          }),
          (n[5] = e),
          (n[6] = i),
          (n[7] = u))
        : (u = n[7]);
      var c;
      return (
        n[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = []), (n[8] = c))
          : (c = n[8]),
        r("useWAWebEventTargetValue")(
          s,
          "add remove change:noEarlierMsgs",
          u,
          c,
        )
      );
    }
    function c(e, t) {
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
            return !e.msgs.some(d);
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
    function d(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
      );
    }
    function m(e, t, n) {
      var r = u(e, n),
        o = c(e, t);
      return r || o;
    }
    l.useShouldShowBotSuggestions = m;
  },
  98,
);
