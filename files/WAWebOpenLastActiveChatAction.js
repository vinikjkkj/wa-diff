__d(
  "WAWebOpenLastActiveChatAction",
  [
    "Promise",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebSideNavButtonsActivityModel").getLastActiveChat();
          try {
            var r =
              t != null ? o("WAWebChatCollection").ChatCollection.get(t) : null;
            return (
              o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              r != null && !r.isLocked
                ? o("WAWebBotUtils").isMetaAiBot(r.id) &&
                  o("WAWebBotGating").isAiChatThreadsEnabled()
                  ? !1
                  : o("WAWebCmd").Cmd.openChatFromUnread({
                      chat: r,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .ChatsTab,
                    })
                : (e || (e = n("Promise"))).resolve(!1)
            );
          } catch (t) {
            return (e || (e = n("Promise"))).resolve(!1);
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.openLastActiveChatIfNotLocked = s;
  },
  98,
);
