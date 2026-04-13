__d(
  "WAWebUseShouldShowBotSuggestions",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebThreadMessageDBHooks",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r;
      n[0] !== t
        ? ((r = function () {
            return t == null
              ? 0
              : o("WAWebMsgCollection").MsgCollection.byThreadId([t]).length;
          }),
          (n[0] = t),
          (n[1] = r))
        : (r = n[1]);
      var a = s(r),
        i = a[0],
        l = a[1],
        u = s(t),
        m = u[0],
        p = u[1];
      if (e.id.isBot() && t != null && t !== m) {
        p(t);
        var _ = o("WAWebMsgCollection").MsgCollection.byThreadId([t]).length;
        l(_);
      }
      var f;
      return (
        n[2] !== e.msgs || n[3] !== t
          ? ((f =
              t != null
                ? [
                    {
                      source: e.msgs,
                      eventOrEvents: "add",
                      callback: function (n) {
                        o("WAWebThreadMsgUtils").isMsgInThread(n, t) && l(d);
                      },
                    },
                    {
                      source: e.msgs,
                      eventOrEvents: "remove",
                      callback: function (n) {
                        o("WAWebThreadMsgUtils").isMsgInThread(n, t) && l(c);
                      },
                    },
                  ]
                : []),
            (n[2] = e.msgs),
            (n[3] = t),
            (n[4] = f))
          : (f = n[4]),
        o("useWAWebListener").useListeners(f),
        i
      );
    }
    function c(e) {
      return e - 1;
    }
    function d(e) {
      return e + 1;
    }
    function m(e, t, n) {
      var a = o("react-compiler-runtime").c(11),
        i = u(e, n),
        l = o("WAWebThreadMessageDBHooks").useWAWebFirstThreadMessageInDB(n),
        s = l.loading,
        c = l.value,
        d = c != null,
        m = n != null && i === 0 && !d && !s,
        _;
      a[0] !== e.id || a[1] !== e.msgs || a[2] !== m
        ? ((_ = function () {
            var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
            if (!t) return !1;
            if (e.msgs.length === 0) return !0;
            if (e.msgs.length === 1) {
              var n,
                r = (n = e.msgs.last()) == null ? void 0 : n.subtype;
              return r === "bot_init";
            }
            return m;
          }),
          (a[0] = e.id),
          (a[1] = e.msgs),
          (a[2] = m),
          (a[3] = _))
        : (_ = a[3]);
      var f;
      a[4] !== m ? ((f = [m]), (a[4] = m), (a[5] = f)) : (f = a[5]);
      var g = r("useWAWebEventTargetValue")(e.msgs, "add remove", _, f),
        h;
      a[6] !== t || a[7] !== e.msgs
        ? ((h = function () {
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
            return !e.msgs.some(p);
          }),
          (a[6] = t),
          (a[7] = e.msgs),
          (a[8] = h))
        : (h = a[8]);
      var y;
      a[9] !== t ? ((y = [t]), (a[9] = t), (a[10] = y)) : (y = a[10]);
      var C = r("useWAWebEventTargetValue")(e.msgs, "add remove", h, y);
      return g || C;
    }
    function p(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
      );
    }
    l.useShouldShowBotSuggestions = m;
  },
  98,
);
