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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.LockedChats) {
                var e = yield o(
                  "WAWebChatLockCodeModal.react",
                ).waitForChatlockSecretCode({
                  unlockAppOnSuccess: !0,
                  entryPoint: o("WAWebWamEnumActionEntryPoint")
                    .ACTION_ENTRY_POINT.CHAT_LIST,
                  unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                    .UNLOCK_ENTRY_POINT.CHAT_LIST,
                  landingSurface: o("WAWebWamEnumLandingSurface")
                    .LANDING_SURFACE.FOLDER,
                });
                if (e) {
                  var t = yield o(
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
                  t && i(o("WAWebNavBarTypes").NavBarItems.LockedChats);
                }
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Locked chats")), (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] !== a
        ? ((p =
            a === o("WAWebNavBarTypes").NavBarItems.LockedChats
              ? u.jsx(r("WDSIconWdsIcChatlockUnlockedFilled.react"), {
                  height: 24,
                  width: 24,
                })
              : u.jsx(r("WDSIconWdsIcChatlockOutline.react"), {})),
          (t[4] = a),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f = a === o("WAWebNavBarTypes").NavBarItems.LockedChats,
        g;
      t[6] !== c || t[7] !== _ || t[8] !== f
        ? ((g = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: _,
            title: m,
            testid: void 0,
            isActive: f,
            onClick: c,
          })),
          (t[6] = c),
          (t[7] = _),
          (t[8] = f),
          (t[9] = g))
        : (g = t[9]);
      var h = g;
      return h;
    }
    l.default = c;
  },
  226,
);
