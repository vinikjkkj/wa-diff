__d(
  "useWAWebOpenChat",
  ["WAWebChatCollection", "WAWebCmd", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(o("WAWebChatCollection").ChatCollection.getActive()),
        t = e[0],
        n = e[1];
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:active",
        function (e) {
          n(e);
        },
      );
      var r = function (t, n) {
        return o("WAWebCmd").Cmd.openChatBottom({ chat: t, chatEntryPoint: n });
      };
      return { openedChat: t, openChat: r };
    }
    l.useOpenChat = u;
  },
  98,
);
