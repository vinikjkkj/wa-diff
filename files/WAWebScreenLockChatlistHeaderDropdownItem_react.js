__d(
  "WAWebScreenLockChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcLock.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebUserPrefsScreenLock").getScreenLockEnabled(),
        t = function (n) {
          if (
            (n == null || n.stopPropagation(),
            o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
              o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.APP_LOCK,
            ),
            !e)
          ) {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "settings",
                    initialStep:
                      o("WAWebSettingsConst").SettingsSteps.ScreenLock,
                  }
                : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    initialStep:
                      o("WAWebSettingsConst").SettingsSteps.ScreenLock,
                  }),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            );
            return;
          }
          var t = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages();
          t
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "screen-lock",
                  },
                  title: s._(/*BTDS*/ "Lock app?"),
                  onOK: function () {
                    o(
                      "WAWebLockScreenResolver",
                    ).lockScreenAndTriggerUnlockFlow();
                  },
                  okText: s._(/*BTDS*/ "Lock"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  children: s._(
                    /*BTDS*/ "Some of your messages are still sending.",
                  ),
                }),
              )
            : o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
        },
        n = e ? s._(/*BTDS*/ "Lock app") : s._(/*BTDS*/ "App lock"),
        a = "mi-screen-lock menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        title: n,
        onPress: t,
        testid: void 0,
        Icon: r("WDSIconIcLock.react"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
