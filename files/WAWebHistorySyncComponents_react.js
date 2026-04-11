__d(
  "WAWebHistorySyncComponents.react",
  [
    "fbt",
    "WAWebChatConstants",
    "WAWebClock",
    "WAWebContentPlaceholder.react",
    "WAWebHistorySyncInProgressPopup.react",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebModalManager",
    "WAWebUserPrefsHistorySync",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        a = e.theme,
        i = a === void 0 ? "list" : a,
        l;
      t[0] !== n
        ? ((l = u.jsx(L, {
            chat: n,
            Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
            InProgress: S,
            Complete: E,
          })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        c =
          (n == null ? void 0 : n.endOfHistoryTransferType) ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY,
        d;
      return (
        t[2] !== s || t[3] !== c || t[4] !== i
          ? ((d = u.jsx(r("WAWebContentPlaceholder.react"), {
              theme: i,
              secondary: s,
              hideBorder: c,
            })),
            (t[2] = s),
            (t[3] = c),
            (t[4] = i),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("WAWebContentPlaceholder.react"), {
              theme: "md-chat-search-list",
              children: u.jsx(L, {
                Paused: o("WAWebHistorySyncUIText")
                  .SYNCING_PAUSED_CONTEXTUAL_TEXT,
                InProgress: S,
                Complete: m,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(L, {
              Paused: o("WAWebHistorySyncUIText")
                .SYNCING_PAUSED_CONTEXTUAL_TEXT,
              InProgress: S,
              Complete: _,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(L, {
              Paused: o("WAWebHistorySyncUIText")
                .SYNCING_PAUSED_CONTEXTUAL_TEXT,
              InProgress: S,
              Complete: g,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(L, {
              Paused: o("WAWebHistorySyncUIText")
                .SYNCING_PAUSED_CONTEXTUAL_TEXT,
              InProgress: S,
              Complete: y,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function y() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to see messages from before {date}.",
        [s._param("date", v())],
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("WAWebContentPlaceholder.react"), {
              theme: "md-chat-search-list",
              children: u.jsx(L, {
                Paused: o("WAWebHistorySyncUIText")
                  .SYNCING_PAUSED_CONTEXTUAL_TEXT,
                InProgress: S,
                Complete: b,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function b() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to search messages from before {date}",
        [s._param("date", v())],
      );
    }
    function v() {
      return o("WAWebClock").Clock.relativeDateStr(
        o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate(),
      );
    }
    function S() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = o(
              "WAWebHistorySyncUIText",
            ).SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER(R)),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function R() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}),
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebHistorySyncProgressGetters").getPaused,
            o("WAWebHistorySyncProgressGetters").getInProgress,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues(n),
        a = r[0],
        i = r[1];
      if (
        e.chat &&
        e.chat.endOfHistoryTransferType ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
      )
        return null;
      var l = e.Complete,
        s = e.InProgress,
        c = e.Paused;
      if (i) {
        if (a) {
          var d;
          return (
            t[1] !== c
              ? ((d = u.jsx(c, {})), (t[1] = c), (t[2] = d))
              : (d = t[2]),
            d
          );
        }
        var m;
        return (
          t[3] !== s
            ? ((m = u.jsx(s, {})), (t[3] = s), (t[4] = m))
            : (m = t[4]),
          m
        );
      }
      var p;
      return (
        t[5] !== l ? ((p = u.jsx(l, {})), (t[5] = l), (t[6] = p)) : (p = t[6]),
        p
      );
    }
    function E() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "Use WhatsApp on your phone to see messages from before {date}.",
              [s._param("date", v())],
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.HistorySyncGalleryPlaceholder = c),
      (l.HistorySyncSearchIncompletePlaceholder = d),
      (l.HistorySyncStarredMsgsPlaceholderText = p),
      (l.HistorySyncAiThreadsPlaceholderText = f),
      (l.HistorySyncChatStarredMsgsPlaceholderText = h),
      (l.HistorySyncChatSearchIncompletePlaceholder = C));
  },
  226,
);
