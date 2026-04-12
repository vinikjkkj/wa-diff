__d(
  "WAWebWindowsLockedChatsNavBarItem.react",
  [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLockedChatsDrawer.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarTypes",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedFilled.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.LockedChats) {
              var e = yield o(
                "WAWebChatLockCodeModal.react",
              ).waitForChatlockSecretCode({
                unlockAppOnSuccess: !0,
                entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                  .CHAT_LIST,
                unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                  .UNLOCK_ENTRY_POINT.CHAT_LIST,
                landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
                  .FOLDER,
              });
              if (e) {
                var n = yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.openDrawerLeftAsync(
                  u.jsx(r("WAWebLockedChatsDrawer.react"), {
                    entryPoint: o("WAWebWamEnumActionEntryPoint")
                      .ACTION_ENTRY_POINT.CHAT_LIST,
                    unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                      .UNLOCK_ENTRY_POINT.CHAT_LIST,
                  }),
                  {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                    transition: "pop-drawer-fast",
                  },
                );
                n && a(o("WAWebNavBarTypes").NavBarItems.LockedChats);
              }
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        l = s._(/*BTDS*/ "Locked chats"),
        c =
          t === o("WAWebNavBarTypes").NavBarItems.LockedChats
            ? u.jsx(r("WDSIconWdsIcChatlockUnlockedFilled.react"), {
                height: 24,
                width: 24,
              })
            : u.jsx(r("WDSIconWdsIcChatlockOutline.react"), {}),
        d = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: c,
          title: l,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.LockedChats,
          onClick: i,
        });
      return d;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
