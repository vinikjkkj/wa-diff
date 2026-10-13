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
      var n = o("react-compiler-runtime").c(10),
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
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["add", "remove", "change:noEarlierMsgs"]), (n[5] = u))
        : (u = n[5]);
      var c;
      n[6] !== e || n[7] !== i
        ? ((c = function () {
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
          (n[6] = e),
          (n[7] = i),
          (n[8] = c))
        : (c = n[8]);
      var d;
      return (
        n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = []), (n[9] = d))
          : (d = n[9]),
        r("useWAWebEventTargetValue")(s, u, c, d)
      );
    }
    function c(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["add", "remove"]), (n[0] = a))
        : (a = n[0]);
      var i;
      n[1] !== t || n[2] !== e.msgs
        ? ((i = function () {
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
          (n[1] = t),
          (n[2] = e.msgs),
          (n[3] = i))
        : (i = n[3]);
      var l;
      return (
        n[4] !== t ? ((l = [t]), (n[4] = t), (n[5] = l)) : (l = n[5]),
        r("useWAWebEventTargetValue")(e.msgs, a, i, l)
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
