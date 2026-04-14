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
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.theme,
        a = n === void 0 ? "list" : n,
        i = u.jsx(y, {
          chat: t,
          Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
          InProgress: h,
          Complete: C,
        }),
        l =
          (t == null ? void 0 : t.endOfHistoryTransferType) ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
      return u.jsx(r("WAWebContentPlaceholder.react"), {
        theme: a,
        secondary: i,
        hideBorder: l,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return u.jsx(r("WAWebContentPlaceholder.react"), {
        theme: "md-chat-search-list",
        children: u.jsx(y, {
          Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
          InProgress: h,
          Complete: function () {
            return s._(
              /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
            );
          },
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return u.jsx(y, {
        Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
        InProgress: h,
        Complete: function () {
          return s._(
            /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
          );
        },
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return u.jsx(y, {
        Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
        InProgress: h,
        Complete: function () {
          return s._(
            /*BTDS*/ "Use WhatsApp on your phone to see older chats and messages.",
          );
        },
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return u.jsx(y, {
        Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
        InProgress: h,
        Complete: function () {
          return s._(
            /*BTDS*/ "Use WhatsApp on your phone to see messages from before {date}.",
            [s._param("date", g())],
          );
        },
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return u.jsx(r("WAWebContentPlaceholder.react"), {
        theme: "md-chat-search-list",
        children: u.jsx(y, {
          Paused: o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT,
          InProgress: h,
          Complete: function () {
            return s._(
              /*BTDS*/ "Use WhatsApp on your phone to search messages from before {date}",
              [s._param("date", g())],
            );
          },
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return o("WAWebClock").Clock.relativeDateStr(
        o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate(),
      );
    }
    function h() {
      return o("WAWebHistorySyncUIText").SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER(
        function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}),
          );
        },
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues([
          o("WAWebHistorySyncProgressGetters").getPaused,
          o("WAWebHistorySyncProgressGetters").getInProgress,
        ]),
        n = t[0],
        r = t[1];
      if (
        e.chat &&
        e.chat.endOfHistoryTransferType ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
      )
        return null;
      var a = e.Complete,
        i = e.InProgress,
        l = e.Paused;
      return r ? (n ? u.jsx(l, {}) : u.jsx(i, {})) : u.jsx(a, {});
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(
        /*BTDS*/ "Use WhatsApp on your phone to see messages from before {date}.",
        [s._param("date", g())],
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.HistorySyncGalleryPlaceholder = c),
      (l.HistorySyncSearchIncompletePlaceholder = d),
      (l.HistorySyncStarredMsgsPlaceholderText = m),
      (l.HistorySyncAiThreadsPlaceholderText = p),
      (l.HistorySyncChatStarredMsgsPlaceholderText = _),
      (l.HistorySyncChatSearchIncompletePlaceholder = f));
  },
  226,
);
