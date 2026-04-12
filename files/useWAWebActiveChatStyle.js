__d(
  "useWAWebActiveChatStyle",
  [
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebCmd",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = s(function () {
          return t && e === o("WAWebChatCollection").ChatCollection.getActive();
        }),
        r = n[0],
        a = n[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_chat",
          t
            ? function (t) {
                var n = t.chat,
                  r = t.threadId;
                (o("WAWebBotGating").isMetaAiChatInThreadsMode(n.id) &&
                  r != null) ||
                  a(n === e);
              }
            : null,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_chat",
          t
            ? function () {
                a(!1);
              }
            : null,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "archive_chat",
          t
            ? function (t) {
                var n = t.chat;
                n === e && a(!1);
              }
            : null,
        ),
        { forceActive: r ? !0 : void 0, activeStyleType: "DEFAULT" }
      );
    }
    l.default = u;
  },
  98,
);
