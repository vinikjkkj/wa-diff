__d(
  "WAWebLockScreen.react",
  [
    "fbt",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebFbtAppName",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLandingHeader.react",
    "WAWebLockScreenResolver",
    "WAWebMsgCollection",
    "WAWebPasswordInput.react",
    "WAWebProfileImage.react",
    "WAWebScreenLockErrorMessages",
    "WAWebSocketModel",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebPersistentCounterAsync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        wrapper: {
          background: "x1lsgnfv",
          height: "x1dr59a3",
          minHeight: "xp22266",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          paddingTop: "xyinxu5",
          paddingInlineEnd: "xp48ta0",
          paddingBottom: "x1g2khh7",
          paddingInlineStart: "xtssl2i",
          minWidth: "xp9ttsr",
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          "@media screen and (max-width: 1000px)_minHeight": "x1vku25w",
          "-webkit-font-smoothing": "xvmahel",
          $$css: !0,
        },
        headerContainer: { width: "xh8yej3", height: "xdd8jsf", $$css: !0 },
        pushnameContainerSpace: { height: "x10c73hc", $$css: !0 },
        passcodeContainer: { width: "xdzyupr", $$css: !0 },
        incorrectPasscode: { height: "x1qx5ct2", $$css: !0 },
      },
      m = 82;
    function p() {
      var e = c(""),
        t = e[0],
        a = e[1],
        i = c(null),
        l = i[0],
        p = i[1],
        f = c(!1),
        g = f[0],
        h = f[1],
        y = c(!1),
        C = y[0],
        b = y[1],
        v = r("useWAWebPersistentCounterAsync")(
          o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount,
          o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount,
        ),
        S = v[0],
        R = S.count,
        L = S.error,
        E = S.loading,
        k = v[1],
        I = v[2],
        T = R != null ? R : 0,
        D =
          T >=
          o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"),
        x =
          T + 1 ===
          o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "correct_passcode_lock_screen",
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (yield o("WAWebMsgCollection").MsgCollection.decryptAndSetModels(e),
              I());
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "incorrect_passcode_lock_screen",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (k(), h(!0), b(!1));
          }),
        ));
      var $ = function (t) {
          a(t.currentTarget.value);
        },
        P = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if ((b(!0), yield o("WAPromiseDelays").delayMs(400), t === "")) {
              (p(!0), b(!1));
              return;
            }
            (p(!1),
              o("WAWebLockScreenResolver").LockScreenResolvable.enterPasscode(
                t,
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        N = function (t) {
          !D && t.key === "Enter" && P();
        };
      D && o("WAWebSocketModel").Socket.logout();
      var M = o("WAWebScreenLockErrorMessages").getErrorMessage({
        emptyInputEntered: l,
        incorrectPasscode: g,
        onlyOneTryRemaining: x,
        triesExceeded: D,
      });
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: d.wrapper,
        testid: void 0,
        children: [
          u.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.headerContainer,
            align: "center",
            isFlexContainer: !0,
            children: u.jsx(r("WAWebLandingHeader.react"), {
              surface: "lock-screen",
              showAppDownloadButton: !0,
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: r("WAWebEnvironment").isWindows ? 0 : 1,
            children: u.jsx("main", {
              className:
                "x1lxuw3u x1ow4hk9 x1wmf1g4 xefzj8c x42lpuj x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef xw6alqk x10a9n66",
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                className: "landing-main",
                children: [
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: [
                      o("WAWebUISpacing").uiMargin.top16,
                      o("WAWebUISpacing").uiMargin.bottom18,
                    ],
                    children: u.jsx(r("WAWebProfileImage.react"), {
                      thumb: o(
                        "WAWebUserPrefsMultiDevice",
                      ).getCachedProfilePicEURL(),
                      size: m,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .High,
                    }),
                  }),
                  u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    name: "lock-screen-emoji-text",
                    children: u.jsx(
                      o("WAWebText.react").WAWebTextLargeRefreshed,
                      {
                        xstyle: [
                          d.pushnameContainerSpace,
                          o("WAWebUISpacing").uiMargin.bottom32,
                        ],
                        children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: o("WAWebConnModel").Conn.pushname,
                          ellipsify: !0,
                          titlify: !0,
                        }),
                      },
                    ),
                  }),
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                    children: u.jsx(
                      o("WAWebText.react").WAWebTextTitleRefreshed,
                      {
                        textAlign: "center",
                        xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                        children: s._(
                          /*BTDS*/ "App lock is on. Enter your password to use {=m2}.",
                          [
                            s._implicitParam(
                              "=m2",
                              u.jsx(
                                o("WAWebFbtAppName")
                                  .WAWebAppShortNameWithoutWindows,
                                { children: s._(/*BTDS*/ "") },
                              ),
                            ),
                          ],
                        ),
                      },
                    ),
                  }),
                  u.jsxs(r("WAWebFlexItem.react"), {
                    xstyle: [
                      d.passcodeContainer,
                      o("WAWebUISpacing").uiMargin.bottom12,
                    ],
                    children: [
                      u.jsx(r("WAWebPasswordInput.react"), {
                        onChange: $,
                        onKeyDown: N,
                        required: !0,
                        placeholder: s._(/*BTDS*/ "Enter password").toString(),
                        focusOnMount: !0,
                        enableShowPassword: !0,
                        testid: void 0,
                      }),
                      M == null
                        ? u.jsx("div", { className: "x1gnnpzl" })
                        : u.jsx(o("WAWebText.react").WAWebTextSmall, {
                            color: "critical",
                            xstyle: [
                              d.incorrectPasscode,
                              o("WAWebUISpacing").uiMargin.top4,
                              o("WAWebUISpacing").uiMargin.bottom6,
                            ],
                            role: "alert",
                            children: M,
                          }),
                    ],
                  }),
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: o("WAWebUISpacing").uiMargin.bottom48,
                    children: u.jsx(o("WAWebButton.react").Button, {
                      type: "primary",
                      onClick: function () {
                        return void P();
                      },
                      disabled: C || D || E || L != null,
                      spinner: C,
                      testid: void 0,
                      children: s._(/*BTDS*/ "Unlock"),
                    }),
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                    children: s._(/*BTDS*/ "Forgot password?"),
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                    children: s._(
                      /*BTDS*/ "Log out and link again from your phone.",
                    ),
                  }),
                  u.jsx(r("WAWebFlexItem.react"), {
                    xstyle: o("WAWebUISpacing").uiMargin.top12,
                    children: u.jsx(o("WAWebButton.react").Button, {
                      type: "plain-white",
                      onClick: _,
                      children: s._(/*BTDS*/ "Log out"),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      o("WAWebSocketModel").Socket.logout();
    }
    l.default = p;
  },
  226,
);
