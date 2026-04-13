__d(
  "WAWebChatContextMenuItemMute.react",
  [
    "WAWebCmd",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMuteGetters").getIsMuted]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMuteValues").useMuteValues(n.id, a),
        l = i[0],
        u;
      t[1] !== n
        ? ((u = function (t) {
            o("WAWebCmd").Cmd.muteChatFromEntryPoint(
              o("WAWebStateUtils").unproxy(n),
              t,
              o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN,
            );
          }),
          (t[1] = n),
          (t[2] = u))
        : (u = t[2]);
      var c = u;
      if (n.mute.canMute() && !n.archive) {
        var d;
        t[3] !== n
          ? ((d = function (t) {
              o("WAWebCmd").Cmd.muteChatWithDuration(
                o("WAWebStateUtils").unproxy(n),
                t,
              );
            }),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]);
        var m;
        return (
          t[5] !== n || t[6] !== c || t[7] !== l || t[8] !== d
            ? ((m = s.jsx(
                r("WAWebMuteMenuItem.react"),
                { onMute: c, onMuteWithDuration: d, isMuted: l, chat: n },
                "mute",
              )),
              (t[5] = n),
              (t[6] = c),
              (t[7] = l),
              (t[8] = d),
              (t[9] = m))
            : (m = t[9]),
          m
        );
      }
    }
    l.default = u;
  },
  98,
);
