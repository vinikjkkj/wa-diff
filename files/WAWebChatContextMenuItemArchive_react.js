__d(
  "WAWebChatContextMenuItemArchive.react",
  [
    "WAWebArchiveMenuItem.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebStateUtils",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getIsPSA,
        ]),
        a = n[0];
      function i(e) {
        e
          ? o("WAWebCmd").Cmd.archiveChatFromEntryPoint(
              o("WAWebStateUtils").unproxy(t),
              e,
              6,
            )
          : o("WAWebCmd").Cmd.archiveChatFromEntryPoint(
              o("WAWebStateUtils").unproxy(t),
              e,
              8,
            );
      }
      function l(e) {
        o("WAWebCmd").Cmd.archiveChat(o("WAWebStateUtils").unproxy(t), e);
      }
      if (t.canArchive())
        return s.jsx(
          r("WAWebArchiveMenuItem.react"),
          { onArchive: a ? i : l, chat: o("WAWebStateUtils").unproxy(t) },
          "archive",
        );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
