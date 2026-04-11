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
    "react-compiler-runtime",
    "useWAWebChatLockEvents",
    "useWAWebChatLockRestriction",
    "useWAWebChatLockSettings",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        a = e.onOpen,
        i = o("useWAWebChatLockEvents").useChatLockEvents(),
        l = o("useWAWebChatLockSettings").useChatLockSettings(),
        c = l.hideLockedChats,
        d = c ? "always" : "bypass",
        m;
      (t[0] !== d
        ? ((m = {
            id: "chatlist-entry-point",
            condition: d,
            entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
              .UNKNOWN,
            landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
              .FOLDER,
            unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint")
              .UNLOCK_ENTRY_POINT.CHAT_LIST,
          }),
          (t[0] = d),
          (t[1] = m))
        : (m = t[1]),
        o("useWAWebChatLockRestriction").useChatLockRestriction(m));
      var p;
      i
        ? (p = r("WDSIconWdsIcChatlockUnlockedOutline.react"))
        : (p = r("WDSIconWdsIcChatlockOutline.react"));
      var _;
      t[2] !== p ? ((_ = u.jsx(p, {})), (t[2] = p), (t[3] = _)) : (_ = t[3]);
      var f = _,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Locked chats")), (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== a
        ? ((y = (function () {
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
                a == null || a());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[5] = a),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      return (
        t[7] !== C || t[8] !== f
          ? ((b = u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
              onClick: C,
              primary: h,
              icon: f,
              ariaLabel: h,
            })),
            (t[7] = C),
            (t[8] = f),
            (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    l.default = c;
  },
  226,
);
