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
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = s(function () {
          return t == null
            ? 0
            : o("WAWebMsgCollection").MsgCollection.byThreadId([t]).length;
        }),
        r = n[0],
        a = n[1],
        i = s(t),
        l = i[0],
        u = i[1];
      if (e.id.isBot() && t != null && t !== l) {
        u(t);
        var c = o("WAWebMsgCollection").MsgCollection.byThreadId([t]).length;
        a(c);
      }
      return (
        o("useWAWebListener").useListeners(
          t != null
            ? [
                {
                  source: e.msgs,
                  eventOrEvents: "add",
                  callback: function (n) {
                    o("WAWebThreadMsgUtils").isMsgInThread(n, t) &&
                      a(function (e) {
                        return e + 1;
                      });
                  },
                },
                {
                  source: e.msgs,
                  eventOrEvents: "remove",
                  callback: function (n) {
                    o("WAWebThreadMsgUtils").isMsgInThread(n, t) &&
                      a(function (e) {
                        return e - 1;
                      });
                  },
                },
              ]
            : [],
        ),
        r
      );
    }
    function c(e, t, n) {
      var a = u(e, n),
        i = o("WAWebThreadMessageDBHooks").useWAWebFirstThreadMessageInDB(n),
        l = i.loading,
        s = i.value,
        c = s != null,
        d = n != null && a === 0 && !c && !l,
        m = r("useWAWebEventTargetValue")(
          e.msgs,
          "add remove",
          function () {
            var t = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot();
            if (!t) return !1;
            if (e.msgs.length === 0) return !0;
            if (e.msgs.length === 1) {
              var n,
                r = (n = e.msgs.last()) == null ? void 0 : n.subtype;
              return r === "bot_init";
            }
            return d;
          },
          [d],
        ),
        p = r("useWAWebEventTargetValue")(
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
      return m || p;
    }
    l.useShouldShowBotSuggestions = c;
  },
  98,
);
