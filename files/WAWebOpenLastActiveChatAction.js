__d(
  "WAWebOpenLastActiveChatAction",
  [
    "Promise",
    "WAWebBotFrontendUtils",
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
            if (
              (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
              r != null && !r.isLocked)
            ) {
              if (
                o("WAWebBotUtils").isMetaAiBot(r.id) &&
                o("WAWebBotGating").isAiChatThreadsEnabled()
              ) {
                r.composeQuotedMsg = null;
                var a = yield o(
                  "WAWebBotFrontendUtils",
                ).openLatestOrNewMetaAiThread(
                  r,
                  o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
                );
                return a.success;
              }
              return o("WAWebCmd").Cmd.openChatFromUnread({
                chat: r,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .ChatsTab,
              });
            }
            return (e || (e = n("Promise"))).resolve(!1);
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
