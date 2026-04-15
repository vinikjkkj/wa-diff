__d(
  "WAWebConversationLoadMoreMessages.react",
  [
    "fbt",
    "WAWebConversationLoadMoreMessagesHistorySync",
    "WAWebRefreshIcon.react",
    "WAWebSpinner.react",
    "WAWebThreadMessageDBHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.chat,
        a = e.chatId,
        i = e.direction,
        l = e.isLoadingAroundMsgs,
        c = e.isLoadingEarlierMsgs,
        d = e.isLoadingRecentMsgs,
        m = e.isRepairingMsgHistory,
        p = e.loadMoreMsgs,
        _ = e.mdHistorySyncTransferState,
        f = e.threadId,
        g = o("WAWebThreadMessageDBHooks").useWAWebThreadHasOlderMessages(
          f,
          n,
          _,
        );
      if (f != null && !g) return null;
      var h = i === "earlier" && c,
        y = i === "recent" && d,
        C = i === "around" && l,
        b = h || y || C || m,
        v = _ != null && !b,
        S,
        R,
        L;
      if (b) {
        var E;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = u.jsx(o("WAWebSpinner.react").Spinner, {
              stroke: 6,
              size: 24,
              color: "highlight",
            })),
            (t[0] = E))
          : (E = t[0]),
          (S = E));
        var k;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = s._(/*BTDS*/ "Loading messages\u2026")), (t[1] = k))
          : (k = t[1]),
          (R = k));
      } else if (v || f != null) {
        var I;
        return (
          t[2] !== a || t[3] !== _ || t[4] !== f
            ? ((I = u.jsx(r("WAWebConversationLoadMoreMessagesHistorySync"), {
                mdHistorySyncTransferState: _,
                chatId: a,
                threadId: f,
              })),
              (t[2] = a),
              (t[3] = _),
              (t[4] = f),
              (t[5] = I))
            : (I = t[5]),
          I
        );
      } else {
        e: switch (i) {
          case "earlier": {
            var T;
            (t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = s._(/*BTDS*/ "Load earlier messages\u2026")), (t[6] = T))
              : (T = t[6]),
              (R = T));
            break e;
          }
          case "recent": {
            var D;
            (t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = s._(/*BTDS*/ "Load recent messages\u2026")), (t[7] = D))
              : (D = t[7]),
              (R = D));
            break e;
          }
          default: {
            var x;
            (t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = s._(/*BTDS*/ "Loading messages\u2026")), (t[8] = x))
              : (x = t[8]),
              (R = x));
          }
        }
        var $;
        (t[9] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})),
            (t[9] = $))
          : ($ = t[9]),
          (S = $),
          (L = p));
      }
      var P, N;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = {
            className:
              "x78zum5 x1okw0bk xl56j7k xexx8yu xyri2b xvg22vi x1c1uobl",
          }),
          (N = {
            className:
              "x78zum5 x6s0dn4 xl56j7k x187nhsf xn3w4p2 xdj266r x11t971q xat24cr xvc5jky xhslqc4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1wpep30",
          }),
          (t[10] = P),
          (t[11] = N))
        : ((P = t[10]), (N = t[11]));
      var M;
      return (
        t[12] !== S || t[13] !== L || t[14] !== R
          ? ((M = u.jsx(
              "div",
              babelHelpers.extends({}, P, {
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, N, {
                    title: R,
                    onClick: L,
                    children: S,
                  }),
                ),
              }),
            )),
            (t[12] = S),
            (t[13] = L),
            (t[14] = R),
            (t[15] = M))
          : (M = t[15]),
        M
      );
    }
    l.default = c;
  },
  226,
);
