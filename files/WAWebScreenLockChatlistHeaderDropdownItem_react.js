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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebUserPrefsScreenLock").getScreenLockEnabled()),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            if (
              (t == null || t.stopPropagation(),
              o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
                o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL
                  .APP_LOCK,
              ),
              !n)
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
            var e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages();
            e
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "screen-lock",
                    },
                    title: s._(/*BTDS*/ "Lock app?"),
                    onOK: d,
                    okText: s._(/*BTDS*/ "Lock"),
                    onCancel: o("WAWebModalManager").closeModalManager,
                    cancelText: s._(/*BTDS*/ "Cancel"),
                    children: s._(
                      /*BTDS*/ "Some of your messages are still sending.",
                    ),
                  }),
                )
              : o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
          }),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        var c = n ? s._(/*BTDS*/ "Lock app") : s._(/*BTDS*/ "App lock");
        ((l = u.jsx(r("WDSMenuItem.react"), {
          title: c,
          onPress: i,
          testid: void 0,
          Icon: r("WDSIconIcLock.react"),
        })),
          (e[2] = l));
      } else l = e[2];
      return l;
    }
    function d() {
      o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
    }
    l.default = c;
  },
  226,
);
