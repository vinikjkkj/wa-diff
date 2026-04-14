__d(
  "useWAWebCanOpenInfoDrawer",
  [
    "WAWebAck",
    "WAWebAgentModelUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("useWAWebMsgValues").useMsgValues(e, [
          (t = o("WAWebMsgGetters")).getIsNewsletterMsg,
          o("WAWebFrontendMsgGetters").getAsAlbum,
          o("WAWebFrontendMsgGetters").getAsCallLog,
          t.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          t.getAck,
          t.getCtwaContext,
          t.getType,
          t.getIsMdHistoryMsg,
          t.getAgendId,
          t.getSubtype,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l = n[3],
        s = n[4],
        u = n[5],
        c = n[6],
        d = n[7],
        m = n[8],
        p = n[9],
        _ = n[10];
      if (
        r ||
        a ||
        i ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          c == null ? void 0 : c.sourceApp,
          d,
          c == null ? void 0 : c.automatedGreetingMessageShown,
          _,
        )
      )
        return !1;
      if (l && !s) {
        var f = u != null && u < o("WAWebAck").ACK.SENT;
        if (
          !f &&
          (!m ||
            (o("WAWebAgentModelUtils").canUserSeeMessageAttribution() &&
              p != null))
        )
          return !0;
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
