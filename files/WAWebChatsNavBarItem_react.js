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
    "useWAWebNavBarPrefetch",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = r("useWAWebNavBarPrefetch")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
        ),
        c = l.onMouseEnter,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            onNavigationTransitioning: o("WAWebOpenLastActiveChatAction")
              .openLastActiveChatIfNotLocked,
          }),
          (t[0] = d))
        : (d = t[0]);
      var m = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          d,
        ),
        p;
      t[1] !== a || t[2] !== m || t[3] !== i
        ? ((p = (function () {
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
                  m != null)
                ) {
                  m();
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
          (t[2] = m),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] !== a
        ? ((f =
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
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(),
        y = h.unreadChatCount,
        C;
      t[7] !== y
        ? ((C =
            y > 0
              ? u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                  count: y,
                  maxCount: 100,
                  theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                    .Outlined,
                })
              : null),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Chats")), (t[9] = v))
        : (v = t[9]);
      var S = v,
        R = a === o("WAWebNavBarTypes").NavBarItems.Chats,
        L;
      t[10] !== g || t[11] !== b || t[12] !== _ || t[13] !== c || t[14] !== R
        ? ((L = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            onMouseEnter: c,
            icon: g,
            inlineActivityIndicator: b,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Counter,
            title: S,
            testid: void 0,
            isActive: R,
            onClick: _,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS,
          })),
          (t[10] = g),
          (t[11] = b),
          (t[12] = _),
          (t[13] = c),
          (t[14] = R),
          (t[15] = L))
        : (L = t[15]);
      var E = L;
      return E;
    }
    l.ChatsNavBarItem = c;
  },
  226,
);
