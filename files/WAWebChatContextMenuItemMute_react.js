__d(
  "WAWebChatContextMenuItemMute.react",
  [
    "WAWebCmd",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "react",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = o("useWAWebMuteValues").useMuteValues(t.id, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        a = n[0];
      function i(e) {
        o("WAWebCmd").Cmd.muteChatFromEntryPoint(
          o("WAWebStateUtils").unproxy(t),
          e,
          o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN,
        );
      }
      if (t.mute.canMute() && !t.archive)
        return s.jsx(
          r("WAWebMuteMenuItem.react"),
          {
            onMute: i,
            onMuteWithDuration: function (n) {
              o("WAWebCmd").Cmd.muteChatWithDuration(
                o("WAWebStateUtils").unproxy(t),
                n,
              );
            },
            isMuted: a,
            chat: t,
          },
          "mute",
        );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
