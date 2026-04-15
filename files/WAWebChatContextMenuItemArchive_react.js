__d(
  "WAWebChatContextMenuItemArchive.react",
  [
    "WAWebArchiveMenuItem.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebChatGetters").getIsPSA]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0],
        u;
      t[1] !== n
        ? ((u = function (t) {
            t
              ? o("WAWebCmd").Cmd.archiveChatFromEntryPoint(
                  o("WAWebStateUtils").unproxy(n),
                  t,
                  6,
                )
              : o("WAWebCmd").Cmd.archiveChatFromEntryPoint(
                  o("WAWebStateUtils").unproxy(n),
                  t,
                  8,
                );
          }),
          (t[1] = n),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        d;
      t[3] !== n
        ? ((d = function (t) {
            o("WAWebCmd").Cmd.archiveChat(o("WAWebStateUtils").unproxy(n), t);
          }),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m = d;
      if (n.canArchive()) {
        var p = l ? c : m,
          _;
        t[5] !== n
          ? ((_ = o("WAWebStateUtils").unproxy(n)), (t[5] = n), (t[6] = _))
          : (_ = t[6]);
        var f;
        return (
          t[7] !== p || t[8] !== _
            ? ((f = s.jsx(
                r("WAWebArchiveMenuItem.react"),
                { onArchive: p, chat: _ },
                "archive",
              )),
              (t[7] = p),
              (t[8] = _),
              (t[9] = f))
            : (f = t[9]),
          f
        );
      }
    }
    l.default = u;
  },
  98,
);
