__d(
  "WAWebConversationLoadMoreMessages.react",
  [
    "fbt",
    "WAWebConversationLoadMoreMessagesHistorySync",
    "WAWebRefreshIcon.react",
    "WAWebSpinner.react",
    "WAWebThreadMessageDBHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.chatId,
        a = e.direction,
        i = e.isLoadingAroundMsgs,
        l = e.isLoadingEarlierMsgs,
        c = e.isLoadingRecentMsgs,
        d = e.isMostRecentCMC,
        m = e.isRepairingMsgHistory,
        p = e.loadMoreMsgs,
        _ = e.mdHistorySyncTransferState,
        f = e.threadId,
        g = o("WAWebThreadMessageDBHooks").useWAWebThreadHasOlderMessages(
          f,
          t,
          _,
        );
      if (f != null && !g) return null;
      var h = a === "earlier" && l,
        y = a === "recent" && c,
        C = a === "around" && i,
        b = h || y || C || m,
        v = _ != null && !b,
        S,
        R,
        L;
      if (b)
        ((S = u.jsx(o("WAWebSpinner.react").Spinner, {
          stroke: 6,
          size: 24,
          color: "highlight",
        })),
          (R = s._(/*BTDS*/ "Loading messages\u2026")));
      else {
        if (v || f != null)
          return u.jsx(r("WAWebConversationLoadMoreMessagesHistorySync"), {
            mdHistorySyncTransferState: _,
            chatId: n,
            threadId: f,
          });
        switch (a) {
          case "earlier":
            R = s._(/*BTDS*/ "Load earlier messages\u2026");
            break;
          case "recent":
            R = s._(/*BTDS*/ "Load recent messages\u2026");
            break;
          default:
            R = s._(/*BTDS*/ "Loading messages\u2026");
        }
        ((S = u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})), (L = p));
      }
      return u.jsx("div", {
        className: "x78zum5 x1okw0bk xl56j7k xexx8yu xyri2b xvg22vi x1c1uobl",
        children: u.jsx("div", {
          className:
            "x78zum5 x6s0dn4 xl56j7k x187nhsf xn3w4p2 xdj266r x11t971q xat24cr xvc5jky xhslqc4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1wpep30",
          title: R,
          onClick: L,
          children: S,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
