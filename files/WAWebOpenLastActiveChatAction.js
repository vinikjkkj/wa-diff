__d(
  "WAWebOpenLastActiveChatAction",
  [
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebSideNavButtonsActivityModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = async function () {
      var e = o("WAWebSideNavButtonsActivityModel").getLastActiveChat();
      try {
        var t =
          e != null ? o("WAWebChatCollection").ChatCollection.get(e) : null;
        return (
          o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
          t != null && !t.isLocked
            ? o("WAWebBotUtils").isMetaAiBot(t.id) &&
              o("WAWebBotGating").isAiChatThreadsEnabled()
              ? !1
              : o("WAWebCmd").Cmd.openChatFromUnread({
                  chat: t,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .ChatsTab,
                })
            : Promise.resolve(!1)
        );
      } catch (e) {
        return Promise.resolve(!1);
      }
    };
    l.openLastActiveChatIfNotLocked = e;
  },
  98,
);
