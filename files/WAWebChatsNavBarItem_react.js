__d(
  "WAWebChatsNavBarItem.react",
  [
    "fbt",
    "WAWebChatFilledRefreshedIcon.react",
    "WAWebChatRefreshedIcon.react",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenLastActiveChatAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatsActivityIndicator",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          {
            onNavigationTransitioning: o("WAWebOpenLastActiveChatAction")
              .openLastActiveChatIfNotLocked,
          },
        ),
        l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e =
              yield o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerLeftAsync();
            if (
              e &&
              (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
              t !== o("WAWebNavBarTypes").NavBarItems.Chats)
            ) {
              if (
                (a(o("WAWebNavBarTypes").NavBarItems.Chats),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .CHATS,
                ),
                o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
                  o("WAWebNavBarTypes").NavBarItems.Chats,
                ),
                i != null)
              ) {
                i();
                return;
              }
              o(
                "WAWebOpenLastActiveChatAction",
              ).openLastActiveChatIfNotLocked();
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        c =
          t === o("WAWebNavBarTypes").NavBarItems.Chats
            ? u.jsx(
                o("WAWebChatFilledRefreshedIcon.react").ChatFilledRefreshedIcon,
                { directional: !0 },
              )
            : u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
                directional: !0,
              }),
        d = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(),
        m = d.unreadChatCount,
        p =
          m > 0
            ? u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                count: m,
                maxCount: 100,
                theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                  .Outlined,
              })
            : null,
        _ = s._(/*BTDS*/ "Chats"),
        f = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: c,
          inlineActivityIndicator: p,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Counter,
          title: _,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Chats,
          onClick: l,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS,
        });
      return f;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.ChatsNavBarItem = c));
  },
  226,
);
