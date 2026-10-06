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
      s = 0;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              )
                return !1;
              var a = ++s;
              return o("WAWebCmd").Cmd.openChatFromUnread({
                chat: r,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .ChatsTab,
                isSuperseded: function () {
                  return a !== s;
                },
              });
            }
            return (e || (e = n("Promise"))).resolve(!1);
          } catch (t) {
            return (e || (e = n("Promise"))).resolve(!1);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      s++;
    }
    ((l.openLastActiveChatIfNotLocked = u),
      (l.cancelPendingLastActiveChatRestore = d));
  },
  98,
);
