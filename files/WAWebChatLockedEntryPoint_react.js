__d(
  "WAWebChatLockedEntryPoint.react",
  [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebChatlistPanelDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLockedChatsDrawer.react",
    "WAWebTabOrder",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatLockEvents",
    "useWAWebChatLockRestriction",
    "useWAWebChatLockSettings",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onOpen,
        a = o("useWAWebChatLockEvents").useChatLockEvents(),
        i = o("useWAWebChatLockSettings").useChatLockSettings(),
        l = i.hideLockedChats;
      o("useWAWebChatLockRestriction").useChatLockRestriction({
        id: "chatlist-entry-point",
        condition: l ? "always" : "bypass",
        entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
          .UNKNOWN,
        landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
        unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
          .CHAT_LIST,
      });
      var c;
      a
        ? (c = r("WDSIconWdsIcChatlockUnlockedOutline.react"))
        : (c = r("WDSIconWdsIcChatlockOutline.react"));
      var d = u.jsx(c, {}),
        m = s._(/*BTDS*/ "Locked chats"),
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebChatLockCodeModal.react",
            ).waitForChatlockSecretCode({
              unlockAppOnSuccess: !0,
              landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
                .FOLDER,
              unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                .UNLOCK_ENTRY_POINT.CHAT_LIST,
              entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                .CHAT_LIST,
            });
            e &&
              (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebLockedChatsDrawer.react"), {
                  onClose: o("WAWebDrawerManager").closeDrawerLeft,
                  entryPoint: o("WAWebWamEnumActionEntryPoint")
                    .ACTION_ENTRY_POINT.CHAT_LIST,
                  unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
                    .UNLOCK_ENTRY_POINT.CHAT_LIST,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM },
              ),
              t == null || t());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
        dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
        onClick: p,
        primary: m,
        icon: d,
        ariaLabel: m,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
