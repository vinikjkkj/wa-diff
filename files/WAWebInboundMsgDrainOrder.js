__d(
  "WAWebInboundMsgDrainOrder",
  [
    "WAWebBotUtils",
    "WAWebInboundMsgChatIndex",
    "WAWebInboundMsgDrainActiveChat",
    "WAWebLidMigrationUtils",
    "WAWebThreadMetadata",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { chatKeys: [], tier: "fifo" },
      s = 20,
      u = [];
    function c() {
      var t = d();
      if (t != null) return t;
      var n = h();
      return n.length === 0 ? e : { chatKeys: n, tier: "recent_chat" };
    }
    function d() {
      var e = o(
        "WAWebInboundMsgDrainActiveChat",
      ).getInboundMsgDrainActiveChat();
      if (e != null && g(e)) return { chatKeys: [e], tier: "active_chat" };
      var t = o("WAWebInboundMsgChatIndex")
        .getChatsWithLiveInboundMsgs()
        .filter(y);
      if (t.length > 0) return { chatKeys: t, tier: "live_chat" };
      var n = u.filter(g);
      return n.length > 0 ? { chatKeys: n, tier: "startup_chat" } : null;
    }
    function m(e) {
      var t = e.tier;
      return t === "active_chat" || t === "live_chat" || t === "startup_chat";
    }
    function p() {
      u = Array.from(
        new Set(
          [].concat(
            o("WAWebInboundMsgChatIndex")
              .getChatsWithLiveInboundMsgs()
              .filter(y),
            h().slice(0, s),
          ),
        ),
      );
    }
    function _() {
      return u.some(o("WAWebInboundMsgChatIndex").hasQueuedInboundMsgs);
    }
    function f() {
      u = [];
    }
    function g(e) {
      return (
        o("WAWebInboundMsgChatIndex").hasQueuedInboundMsgs(e) &&
        o("WAWebInboundMsgChatIndex").precedesUnkeyedInboundMsgs(e)
      );
    }
    function h() {
      var e,
        t =
          (e = o("WAWebThreadMetadata").getOfflineThreadMetaPreview()) == null
            ? void 0
            : e.chatTimestamp;
      if (t == null) return [];
      var n = [];
      for (var r of o(
        "WAWebInboundMsgChatIndex",
      ).getChatsWithQueuedInboundMsgs()) {
        var a = y(r) ? C(t, r) : null;
        a != null && n.push({ chatKey: r, timestamp: a });
      }
      return n
        .sort(function (e, t) {
          return t.timestamp - e.timestamp;
        })
        .map(function (e) {
          var t = e.chatKey;
          return t;
        });
    }
    function y(e) {
      if (!o("WAWebInboundMsgChatIndex").precedesUnkeyedInboundMsgs(e))
        return !1;
      var t = o("WAWebWidFactory").createWid(e);
      return !o("WAWebBotUtils").isHatchBot(t) && !t.isStatus();
    }
    function C(e, t) {
      var n,
        r = o("WAWebWidFactory").createWid(t),
        a = o("WAWebLidMigrationUtils").shouldHaveAccountLid(r)
          ? o("WAWebLidMigrationUtils").toUserLid(r)
          : null;
      return (n = a != null ? e[a.toString({ legacy: !0 })] : null) != null
        ? n
        : e[r.toString({ legacy: !0 })];
    }
    ((l.FIFO_SELECTOR = e),
      (l.selectInboundMsgDrainChats = c),
      (l.selectInboundMsgDrainVisibleChats = d),
      (l.isVisibleChatsSelector = m),
      (l.takeInboundMsgDrainStartupChats = p),
      (l.hasQueuedInboundMsgDrainStartupChats = _),
      (l.clearInboundMsgDrainStartupChats = f));
  },
  98,
);
