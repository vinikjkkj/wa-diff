__d(
  "WAWebMessageListRowRenderers",
  [
    "WAWebBotPluginCarouselWrapper.react",
    "WAWebErrorBoundary.react",
    "WAWebMessageAlbumRow.react",
    "WAWebMessageDateMarker.react",
    "WAWebMessageHistoryBundleInfoNotification.react",
    "WAWebMessagePosition",
    "WAWebMessageRow.react",
    "WAWebMessageUnread.react",
    "WAWebMsgGetters",
    "WAWebWrapperGroupProfilePicture.react",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children;
      return s.jsx("div", { className: "x1n2onr6", children: t });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = {
        msgGroup: function (a) {
          var n = a[0].type === "msg" ? a[0].msg : a[0].msgs[0],
            i = a[a.length - 1],
            l = i.type === "msg" ? [i.msg] : i.msgs;
          return s.jsxs(
            u,
            {
              children: [
                s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "msg-list-group-profile-picture-wrapper",
                  children: s.jsx(r("WAWebWrapperGroupProfilePicture.react"), {
                    msg: n.unsafe(),
                    selectable: e.selectable,
                    position: o("WAWebMessagePosition").MsgPosition.FRONT,
                    sticky: !0,
                    lastMsgs: l,
                  }),
                }),
                a.map(function (e) {
                  switch (e.type) {
                    case "msg":
                      return t.msg(
                        e.msg,
                        e.isFocused,
                        e.groupedWithPrev,
                        e.groupedWithNext,
                        !1,
                        e.isFollowUpReply,
                      );
                    case "album":
                      return t.album(
                        e.msgs,
                        e.albumId,
                        e.groupedWithPrev,
                        e.groupedWithNext,
                        e.isFocusedAlbum,
                        e.focusedMsgIndex,
                        !1,
                        e.isFollowUpReply,
                      );
                    default:
                      var n = e.type;
                      throw r("err")("Invalid message list row type " + e.type);
                  }
                }),
              ],
            },
            "msg-row-" + n.id.toString(),
          );
        },
        msg: (function (e) {
          function t(t, n, r, o, a, i) {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(function (t, n, r, a, i, l) {
          return s.jsx(
            o("WAWebMessageRow.react").WAWebMessageRow,
            {
              msg: t,
              isFocusedMsg: n,
              groupedWithPrev: r,
              groupedWithNext: a,
              showProfilePicture: i,
              handleMsgRendered: e.handleMsgRendered,
              isMsgVisible: e.isMsgVisible,
              selectable: e.selectable,
              selectedMessages: e.selectedMessages,
              onMessageSelect: e.onMessageSelect,
              getSequentialMsg: e.getSequentialMsg,
              setFocusedMessage: e.setFocusedMessage,
              isFollowUpReply: l,
            },
            "msg-" + t.id.toString(),
          );
        }),
        album: function (n, o, a, i, l, u, c) {
          return s.jsx(
            r("WAWebMessageAlbumRow.react"),
            {
              albumId: o,
              focusedMsgIndex: u,
              isFocusedAlbum: l,
              msgs: n,
              selectable: e.selectable,
              selectedMessages: e.selectedMessages,
              onMessageSelect: e.onMessageSelect,
              groupedWithNext: i,
              groupedWithPrev: a,
              showProfilePicture: c,
              isMsgVisible: e.isMsgVisible,
              handleAlbumRendered: e.handleAlbumRendered,
            },
            "album-" + o,
          );
        },
        date: function (n, o, a) {
          return s.jsx(
            r("WAWebMessageDateMarker.react"),
            {
              ref: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function (t) {
                return void e.handleDateMarkerRendered(o, t);
              }),
              timestamp: n.t,
              isFocusable: !1,
              isGroupHistoryMessage: a,
              chat: e.chat,
            },
            "msg-" + n.id.toString() + "-date",
          );
        },
        unread: function () {
          return s.jsx(
            r("WAWebMessageUnread.react"),
            { count: e.unreadCount, textContainerRef: e.refUnread },
            "msg-unread",
          );
        },
        botPluginCarousel: function (n) {
          var t = n.botPluginCarouselId,
            o = n.isFocused,
            a = n.msgs;
          return s.jsx(
            r("WAWebBotPluginCarouselWrapper.react"),
            {
              msgs: a,
              ref: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function (t) {
                return e.handleBotPluginCarouselRendered(t, a);
              }),
              botPluginCarouselId: t,
              isFocused: o,
            },
            "botCarousel-" + t,
          );
        },
        historyBundleInfo: function (n, a) {
          var t,
            i = e.msgs.find(function (e) {
              var t = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
              return (
                a != null &&
                (t == null ? void 0 : t.id) === (a == null ? void 0 : a.id)
              );
            }),
            l = i == null ? void 0 : i.id,
            u = l
              ? (t = e.getMsgWrapperRef(l == null ? void 0 : l.toString())) ==
                null
                ? void 0
                : t.getContainerElement()
              : null;
          return s.jsx(
            r("WAWebMessageHistoryBundleInfoNotification.react"),
            { authorName: n, firstBundleMsgElement: u },
            "history-bundle-info-" + a.toString(),
          );
        },
      };
      return t;
    }
    l.default = c;
  },
  98,
);
