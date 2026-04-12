__d(
  "WAWebWindowsArchivedChatsNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchiveFilledRefreshedIcon.react",
    "WAWebArchiveRefreshedIcon.react",
    "WAWebArchivedFlowLoadable",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebArchivedChatsActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        r = e.updateActiveNavBarItem,
        a = o(
          "useWAWebArchivedChatsActivityIndicator",
        ).useArchivedChatsActivityIndicator(),
        i = a.unreadCount,
        l =
          i > 0
            ? u.jsx(
                o("WAWebChatUnreadCount.react").UnreadCount,
                {
                  count: i,
                  theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                    .Outlined,
                },
                "icon-count",
              )
            : null,
        c = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Archived) {
              var e = yield o(
                "WAWebDrawerManager",
              ).DrawerManager.openDrawerLeftAsync(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? { descriptorType: "archived" }
                  : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, {
                      onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    }),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                  focusOnUnMount: !0,
                },
              );
              e &&
                (r(o("WAWebNavBarTypes").NavBarItems.Archived),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .ARCHIVED,
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = s._(/*BTDS*/ "Archived"),
        m =
          t === o("WAWebNavBarTypes").NavBarItems.Archived
            ? u.jsx(
                o("WAWebArchiveFilledRefreshedIcon.react")
                  .ArchiveFilledRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebArchiveRefreshedIcon.react").ArchiveRefreshedIcon,
                {},
              ),
        p = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: m,
          title: d,
          inlineActivityIndicator: l,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Counter,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Archived,
          onClick: c,
        });
      return p;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
