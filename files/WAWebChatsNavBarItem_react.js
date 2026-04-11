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
    "react-compiler-runtime",
    "useWAWebChatsActivityIndicator",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            onNavigationTransitioning: o("WAWebOpenLastActiveChatAction")
              .openLastActiveChatIfNotLocked,
          }),
          (t[0] = l))
        : (l = t[0]);
      var c = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          l,
        ),
        d;
      t[1] !== a || t[2] !== c || t[3] !== i
        ? ((d = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              if (
                e &&
                (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
                a !== o("WAWebNavBarTypes").NavBarItems.Chats)
              ) {
                if (
                  (i(o("WAWebNavBarTypes").NavBarItems.Chats),
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
          })()),
          (t[1] = a),
          (t[2] = c),
          (t[3] = i),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p;
      t[5] !== a
        ? ((p =
            a === o("WAWebNavBarTypes").NavBarItems.Chats
              ? u.jsx(
                  o("WAWebChatFilledRefreshedIcon.react")
                    .ChatFilledRefreshedIcon,
                  { directional: !0 },
                )
              : u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
                  directional: !0,
                })),
          (t[5] = a),
          (t[6] = p))
        : (p = t[6]);
      var _ = p,
        f = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(),
        g = f.unreadChatCount,
        h;
      t[7] !== g
        ? ((h =
            g > 0
              ? u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                  count: g,
                  maxCount: 100,
                  theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                    .Outlined,
                })
              : null),
          (t[7] = g),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Chats")), (t[9] = C))
        : (C = t[9]);
      var b = C,
        v = a === o("WAWebNavBarTypes").NavBarItems.Chats,
        S;
      t[10] !== _ || t[11] !== y || t[12] !== m || t[13] !== v
        ? ((S = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: _,
            inlineActivityIndicator: y,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Counter,
            title: b,
            testid: void 0,
            isActive: v,
            onClick: m,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS,
          })),
          (t[10] = _),
          (t[11] = y),
          (t[12] = m),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R = S;
      return R;
    }
    l.ChatsNavBarItem = c;
  },
  226,
);
