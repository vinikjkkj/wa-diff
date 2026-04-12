__d(
  "WAWebScreenLockDrawer.react",
  [
    "fbt",
    "WAWebCheckBoxRound.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebEligibilityLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtAppName",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPasscodeRemoval.react",
    "WAWebPasscodeSetup.react",
    "WAWebScreenLockTimerOptions",
    "WAWebSettingsCheckList.react",
    "WAWebSubscribePushManagerAction",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUserPrefsScreenLock",
    "WAWebWdsPictoPrivacyIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        appLockHeader: {
          fontSize: "x1aueamr",
          marginTop: "xw7yly9",
          marginInlineEnd: "x14z9mp",
          marginBottom: "x1yztbdb",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.onBack,
        n = e.onCancel,
        a = e.ref,
        i = c(function () {
          return o("WAWebUserPrefsScreenLock").getScreenLockDurationInSeconds();
        }),
        l = i[0],
        m = i[1],
        p = c(function () {
          return o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
        }),
        _ = p[0],
        f = p[1],
        g = function (t) {
          (o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(t),
            m(t),
            f(t !== 0),
            o("WAWebSubscribePushManagerAction").updatePushManager());
        },
        h = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
          "wa_web_app_lock_upsell",
        ),
        y = function (t) {
          if (l > 0 && t > 0) {
            g(t);
            return;
          }
          t === 0
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebPasscodeRemoval.react"), {
                  onSubmit: function () {
                    return g(t);
                  },
                }),
              )
            : o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebPasscodeSetup.react"), {
                  onSubmit: function () {
                    return g(t);
                  },
                }),
              );
        },
        C = function () {
          _
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebPasscodeRemoval.react"), {
                  onSubmit: function () {
                    return g(0);
                  },
                }),
              )
            : o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebPasscodeSetup.react"), {
                  onSubmit: function () {
                    return g(
                      o("WAWebScreenLockTimerOptions")
                        .DEFAULT_SCREEN_LOCK_DURATION_SECONDS,
                    );
                  },
                }),
              );
        },
        b = s._(/*BTDS*/ "Lock with a password"),
        v = s._(/*BTDS*/ "Use App lock for privacy"),
        S = h ? s._(/*BTDS*/ "Enable app lock") : s._(/*BTDS*/ "App lock"),
        R = h
          ? s._(
              /*BTDS*/ "You can lock {=m1} instead of logging out. This makes it easier to access again later.",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, {
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "When enabled, you'll need to enter your password to unlock {=m2}. Notifications will not appear when your app is locked. App lock will be turned off when you log out.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ],
            ),
        L =
          h &&
          !_ &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                padding: [8, 0],
                children: s._(
                  /*BTDS*/ "When app lock is enabled you can lock {=m2} from the Chats menu.",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(
                        o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows,
                        { children: s._(/*BTDS*/ "") },
                      ),
                    ),
                  ],
                ),
              }),
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                padding: [8, 0],
                children: s._(
                  /*BTDS*/ "You won't get notifications when {=m1} is locked. App lock will reset if you log out.",
                  [
                    s._implicitParam(
                      "=m1",
                      u.jsx(
                        o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows,
                        { children: s._(/*BTDS*/ "") },
                      ),
                    ),
                  ],
                ),
              }),
            ],
          }),
        E =
          h &&
          _ &&
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            marginTop: 8,
            children: s._(
              /*BTDS*/ "When a password is set you can lock {=m2} from the Chats menu.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, {
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ],
            ),
          }),
        k =
          h &&
          _ &&
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            padding: [8, 0],
            children: s._(/*BTDS*/ "When to lock"),
          }),
        I =
          _ &&
          o("WAWebScreenLockTimerOptions")
            .getScreenLockTimerOptions()
            .map(function (e) {
              var t = e.label,
                n = e.value;
              return u.jsx(
                r("WAWebDrawerItem.react"),
                {
                  title: t,
                  tabIndex: 0,
                  dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                  onClick: function () {
                    return y(n);
                  },
                  icon: u.jsx("div", {
                    children: u.jsx(
                      r("WAWebCheckBoxRound.react"),
                      {
                        testid: void 0,
                        ariaLabel: t,
                        checked: n === l,
                        radio: !0,
                        hover: !1,
                        systemUncheckedColor: !0,
                        onClick: function () {
                          return y(n);
                        },
                      },
                      n,
                    ),
                  }),
                  isLastItem: !0,
                  testid: void 0,
                },
                n,
              );
            }),
        T = u.jsxs(u.Fragment, {
          children: [
            " ",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getScreenLockLearnMoreUrl(),
              children: s._(/*BTDS*/ "Learn more"),
            }),
            " ",
          ],
        });
      return u.jsx(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "screen-lock-settings",
        },
        children: u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: s._(/*BTDS*/ "App lock"),
              onBack: t,
              onCancel: n,
              focusBackOrCancel: !0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(r("WAWebDrawerSection.react"), {
                theme: "padding",
                animation: !1,
                children: [
                  h &&
                    u.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "center",
                      children: u.jsx(
                        o("WAWebWdsPictoPrivacyIcon.react").WdsPictoPrivacyIcon,
                        {},
                      ),
                    }),
                  h
                    ? u.jsx(o("WAWebText.react").WAWebTextMediumRefreshed, {
                        xstyle: d.appLockHeader,
                        children: b,
                      })
                    : u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                        margin: [8, 0, 32, 0],
                        as: "h2",
                        children: v,
                      }),
                  u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                    marginBottom: 24,
                    children: [R, h && u.jsx("br", {}), T],
                  }),
                  h &&
                    u.jsx(r("WAWebGroupInfoSeparator.react"), {
                      animation: !1,
                      padding: !1,
                    }),
                  u.jsx(
                    o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                    {
                      testid: void 0,
                      id: "screen-lock-setting-checkbox",
                      checked: _,
                      checkboxRightAligned: !0,
                      onChange: C,
                      children: S,
                    },
                  ),
                  h &&
                    u.jsx(r("WAWebGroupInfoSeparator.react"), {
                      animation: !1,
                      padding: !1,
                    }),
                  k,
                  I,
                  h &&
                    _ &&
                    u.jsx(r("WAWebGroupInfoSeparator.react"), {
                      animation: !1,
                      padding: !1,
                    }),
                  L,
                  E,
                ],
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
