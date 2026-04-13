__d(
  "useWAWebActiveChatStyle",
  [
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(13),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = function () {
            return (
              t && e === o("WAWebChatCollection").ChatCollection.getActive()
            );
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r))
        : (r = n[2]);
      var a = s(r),
        i = a[0],
        l = a[1],
        u;
      (n[3] !== e || n[4] !== t
        ? ((u = t
            ? function (t) {
                var n = t.chat,
                  r = t.threadId;
                (o("WAWebBotGating").isMetaAiChatInThreadsMode(n.id) &&
                  r != null) ||
                  l(n === e);
              }
            : null),
          (n[3] = e),
          (n[4] = t),
          (n[5] = u))
        : (u = n[5]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", u));
      var c;
      (n[6] !== t
        ? ((c = t
            ? function () {
                l(!1);
              }
            : null),
          (n[6] = t),
          (n[7] = c))
        : (c = n[7]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", c));
      var d;
      (n[8] !== e || n[9] !== t
        ? ((d = t
            ? function (t) {
                var n = t.chat;
                n === e && l(!1);
              }
            : null),
          (n[8] = e),
          (n[9] = t),
          (n[10] = d))
        : (d = n[10]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "archive_chat",
          d,
        ));
      var m = i ? !0 : void 0,
        p;
      return (
        n[11] !== m
          ? ((p = { forceActive: m, activeStyleType: "DEFAULT" }),
            (n[11] = m),
            (n[12] = p))
          : (p = n[12]),
        p
      );
    }
    l.default = u;
  },
  98,
);
