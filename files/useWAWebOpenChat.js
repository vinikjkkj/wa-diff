__d(
  "useWAWebOpenChat",
  [
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebChatCollection").ChatCollection.getActive()),
          (e[0] = t))
        : (t = e[0]);
      var n = s(t),
        r = n[0],
        a = n[1],
        i;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t) {
            a(t);
          }),
          (e[1] = i))
        : (i = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:active",
          i,
        ));
      var l = c,
        u;
      return (
        e[2] !== r
          ? ((u = { openedChat: r, openChat: l }), (e[2] = r), (e[3] = u))
          : (u = e[3]),
        u
      );
    }
    function c(e, t) {
      return o("WAWebCmd").Cmd.openChatBottom({ chat: e, chatEntryPoint: t });
    }
    l.useOpenChat = u;
  },
  98,
);
