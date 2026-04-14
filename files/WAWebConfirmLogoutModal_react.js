__d(
  "WAWebConfirmLogoutModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDialogEventLogger",
    "WAWebDrawerManager",
    "WAWebEligibilityLogging",
    "WAWebFbtAppName",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebScreenLockDrawer.react",
    "WAWebSocketModel",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumDialogNameType",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum")({
        LOGOUT: "logout",
        CANCEL: "cancel",
        APP_LOCK: "app_lock",
      }),
      d = function () {
        (r("WAWebDialogEventLogger")({
          dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
          source: c.APP_LOCK,
        }),
          o("WAWebModalManager").ModalManager.close(),
          o("WAWebUserPrefsScreenLock").getScreenLockEnabled()
            ? o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow()
            : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebScreenLockDrawer.react"), {
                  onCancel: function () {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                  },
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
      };
    function m(e) {
      var t = e.checkUnsent,
        n = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
          "wa_web_app_lock_upsell",
        ),
        a;
      t && o("WAWebMsgCollection").MsgCollection.hasUnsentMessages()
        ? (a = s._(/*BTDS*/ "Some of your messages are still sending."))
        : n
          ? o("WAWebUserPrefsScreenLock").getScreenLockEnabled()
            ? (a = s._(
                /*BTDS*/ "App lock will reset if you log out. Do you want to lock {=m2} instead?",
                [
                  s._implicitParam(
                    "=m2",
                    u.jsx(
                      o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows,
                      { children: s._(/*BTDS*/ "") },
                    ),
                  ),
                ],
              ))
            : (a = s._(
                /*BTDS*/ "You can lock {=m1} with a password instead so it's easier to access again later.",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(
                      o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows,
                      { children: s._(/*BTDS*/ "") },
                    ),
                  ),
                ],
              ))
          : (a = s._(/*BTDS*/ "Are you sure you want to log out?"));
      var i =
          o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || n
            ? null
            : s._(/*BTDS*/ "You can turn on {=m2} instead.", [
                s._implicitParam(
                  "=m2",
                  u.jsx(r("WAWebClickableLink.react"), {
                    onClick: d,
                    children: s._(/*BTDS*/ "app lock"),
                  }),
                ),
              ]),
        l = n ? { text: s._(/*BTDS*/ "Lock app"), onClick: d } : null;
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "confirm-logout" },
        title: s._(/*BTDS*/ "Log out?"),
        onOK: function () {
          (r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.LOGOUT,
          }),
            o("WAWebSocketModel").Socket.logout());
        },
        okText: s._(/*BTDS*/ "Log out"),
        okButtonType: "solid-warning",
        onCancel: function () {
          (r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.CANCEL,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        cancelText: s._(/*BTDS*/ "Cancel"),
        extraButtonProps: l,
        splitLayout: n,
        children: [
          n
            ? u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: a,
              })
            : a,
          u.jsx("br", {}),
          i,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
