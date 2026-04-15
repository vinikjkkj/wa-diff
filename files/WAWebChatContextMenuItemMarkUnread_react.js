__d(
  "WAWebChatContextMenuItemMarkUnread.react",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebMarkUnreadMenuItem.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a;
      t[0] !== n
        ? ((a = function (t) {
            if (
              (o("WAWebCmd").Cmd.markChatUnread(
                o("WAWebStateUtils").unproxy(n),
                t,
              ),
              !t && o("WAWebChatGetters").getIsGroup(n))
            ) {
              var e;
              (e = n.groupMetadata) == null || e.unreadMentionMetadata.reset();
            }
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a;
      if (o("WAWebChatGetters").getCanUnread(n)) {
        var l;
        t[2] !== n
          ? ((l = o("WAWebStateUtils").unproxy(n)), (t[2] = n), (t[3] = l))
          : (l = t[3]);
        var u;
        return (
          t[4] !== i || t[5] !== l
            ? ((u = s.jsx(
                r("WAWebMarkUnreadMenuItem.react"),
                { onMarkUnread: i, chat: l },
                "mark_unread",
              )),
              (t[4] = i),
              (t[5] = l),
              (t[6] = u))
            : (u = t[6]),
          u
        );
      }
    }
    l.default = u;
  },
  98,
);
