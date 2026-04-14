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
    "useWAWebNavBarPrefetch",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = r("useWAWebNavBarPrefetch")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
        ),
        l = i.onMouseEnter,
        c = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          {
            onNavigationTransitioning: o("WAWebOpenLastActiveChatAction")
              .openLastActiveChatIfNotLocked,
          },
        ),
        d = (function () {
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
                c != null)
              ) {
                c();
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
        m =
          t === o("WAWebNavBarTypes").NavBarItems.Chats
            ? u.jsx(
                o("WAWebChatFilledRefreshedIcon.react").ChatFilledRefreshedIcon,
                { directional: !0 },
              )
            : u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
                directional: !0,
              }),
        p = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(),
        _ = p.unreadChatCount,
        f =
          _ > 0
            ? u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                count: _,
                maxCount: 100,
                theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                  .Outlined,
              })
            : null,
        g = s._(/*BTDS*/ "Chats"),
        h = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          onMouseEnter: l,
          icon: m,
          inlineActivityIndicator: f,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Counter,
          title: g,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Chats,
          onClick: d,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS,
        });
      return h;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.ChatsNavBarItem = c));
  },
  226,
);
