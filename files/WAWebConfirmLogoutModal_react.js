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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.checkUnsent,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
            "wa_web_app_lock_upsell",
          )),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      if (n && o("WAWebMsgCollection").MsgCollection.hasUnsentMessages()) {
        var c;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = s._(/*BTDS*/ "Some of your messages are still sending.")),
            (t[1] = c))
          : (c = t[1]),
          (l = c));
      } else if (i)
        if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
          var m;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = s._(
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
              )),
              (t[2] = m))
            : (m = t[2]),
            (l = m));
        } else {
          var f;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = s._(
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
              )),
              (t[3] = f))
            : (f = t[3]),
            (l = f));
        }
      else {
        var g;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s._(/*BTDS*/ "Are you sure you want to log out?")),
            (t[4] = g))
          : (g = t[4]),
          (l = g));
      }
      var h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h =
            o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || i
              ? null
              : s._(/*BTDS*/ "You can turn on {=m2} instead.", [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("WAWebClickableLink.react"), {
                      onClick: d,
                      children: s._(/*BTDS*/ "app lock"),
                    }),
                  ),
                ])),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = i ? { text: s._(/*BTDS*/ "Lock app"), onClick: d } : null),
          (t[6] = C))
        : (C = t[6]);
      var b = C,
        v,
        S;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "confirm-logout" }),
          (S = s._(/*BTDS*/ "Log out?")),
          (t[7] = v),
          (t[8] = S))
        : ((v = t[7]), (S = t[8]));
      var R;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Log out")), (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Cancel")), (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== l
        ? ((E = i
            ? u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: l,
              })
            : l),
          (t[11] = l),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx("br", {})), (t[13] = k))
        : (k = t[13]);
      var I;
      return (
        t[14] !== E
          ? ((I = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: v,
              title: S,
              onOK: _,
              okText: R,
              okButtonType: "solid-warning",
              onCancel: p,
              cancelText: L,
              extraButtonProps: b,
              splitLayout: i,
              children: [E, k, y],
            })),
            (t[14] = E),
            (t[15] = I))
          : (I = t[15]),
        I
      );
    }
    function p() {
      (r("WAWebDialogEventLogger")({
        dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
        source: c.CANCEL,
      }),
        o("WAWebModalManager").ModalManager.close());
    }
    function _() {
      (r("WAWebDialogEventLogger")({
        dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
        source: c.LOGOUT,
      }),
        o("WAWebSocketModel").Socket.logout());
    }
    l.default = m;
  },
  226,
);
