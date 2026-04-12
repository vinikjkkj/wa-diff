__d(
  "WAWebChatContextMenuItemMarkUnread.react",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebMarkUnreadMenuItem.react",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat;
      function n(e) {
        if (
          (o("WAWebCmd").Cmd.markChatUnread(o("WAWebStateUtils").unproxy(t), e),
          !e && o("WAWebChatGetters").getIsGroup(t))
        ) {
          var n;
          (n = t.groupMetadata) == null || n.unreadMentionMetadata.reset();
        }
      }
      if (o("WAWebChatGetters").getCanUnread(t))
        return s.jsx(
          r("WAWebMarkUnreadMenuItem.react"),
          { onMarkUnread: n, chat: o("WAWebStateUtils").unproxy(t) },
          "mark_unread",
        );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
