__d(
  "useWAWebCanOpenInfoDrawer",
  [
    "WAWebAck",
    "WAWebAgentModelUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r;
        ((n = [
          (r = o("WAWebMsgGetters")).getIsNewsletterMsg,
          o("WAWebFrontendMsgGetters").getAsAlbum,
          o("WAWebFrontendMsgGetters").getAsCallLog,
          r.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          r.getAck,
          r.getCtwaContext,
          r.getType,
          r.getIsMdHistoryMsg,
          r.getAgendId,
          r.getSubtype,
        ]),
          (t[0] = n));
      } else n = t[0];
      var a = o("useWAWebMsgValues").useMsgValues(e, n),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        c = a[4],
        d = a[5],
        m = a[6],
        p = a[7],
        _ = a[8],
        f = a[9],
        g = a[10];
      if (
        i ||
        l ||
        s ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          m == null ? void 0 : m.sourceApp,
          p,
          m == null ? void 0 : m.automatedGreetingMessageShown,
          g,
        )
      )
        return !1;
      if (u && !c) {
        var h = d != null && d < o("WAWebAck").ACK.SENT;
        if (
          !h &&
          (!_ ||
            (o("WAWebAgentModelUtils").canUserSeeMessageAttribution() &&
              f != null))
        )
          return !0;
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
