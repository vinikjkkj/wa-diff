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
    var e = 0;
    async function s() {
      var t = o("WAWebSideNavButtonsActivityModel").getLastActiveChat();
      try {
        var n =
          t != null ? o("WAWebChatCollection").ChatCollection.get(t) : null;
        if (
          (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
          n != null && !n.isLocked)
        ) {
          if (
            o("WAWebBotUtils").isMetaAiBot(n.id) &&
            o("WAWebBotGating").isAiChatThreadsEnabled()
          )
            return !1;
          var r = ++e;
          return o("WAWebCmd").Cmd.openChatFromUnread({
            chat: n,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
            isSuperseded: function () {
              return r !== e;
            },
          });
        }
        return Promise.resolve(!1);
      } catch (e) {
        return Promise.resolve(!1);
      }
    }
    function u() {
      e++;
    }
    ((l.openLastActiveChatIfNotLocked = s),
      (l.cancelPendingLastActiveChatRestore = u));
  },
  98,
);
