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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(44),
        t = c(""),
        a = t[0],
        i = t[1],
        l = c(null),
        p = l[0],
        f = l[1],
        g = c(!1),
        h = g[0],
        y = g[1],
        C = c(!1),
        b = C[0],
        v = C[1],
        S = r("useWAWebPersistentCounterAsync")(
          o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount,
          o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount,
        ),
        R = S[0],
        L = S[1],
        E = S[2],
        k = R.count,
        I = R.error,
        T = R.loading,
        D = k != null ? k : 0,
        x =
          D >=
          o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"),
        $;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = o("WAWebABProps").getABPropConfigValue(
            "web_screen_lock_max_retries",
          )),
          (e[0] = $))
        : ($ = e[0]);
      var P = D + 1 === $,
        N;
      (e[1] !== E
        ? ((N = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield o(
                  "WAWebMsgCollection",
                ).MsgCollection.decryptAndSetModels(e),
                  E());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (e[1] = E),
          (e[2] = N))
        : (N = e[2]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "correct_passcode_lock_screen",
          N,
        ));
      var M;
      (e[3] !== L
        ? ((M = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (L(), y(!0), v(!1));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (e[3] = L),
          (e[4] = M))
        : (M = e[4]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "incorrect_passcode_lock_screen",
          M,
        ));
      var w;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function (t) {
            i(t.currentTarget.value);
          }),
          (e[5] = w))
        : (w = e[5]);
      var A = w,
        F;
      e[6] !== a
        ? ((F = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if ((v(!0), yield o("WAPromiseDelays").delayMs(400), a === "")) {
                (f(!0), v(!1));
                return;
              }
              (f(!1),
                o("WAWebLockScreenResolver").LockScreenResolvable.enterPasscode(
                  a,
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (e[6] = a),
          (e[7] = F))
        : (F = e[7]);
      var O = F,
        B;
      e[8] !== O || e[9] !== x
        ? ((B = function (t) {
            !x && t.key === "Enter" && O();
          }),
          (e[8] = O),
          (e[9] = x),
          (e[10] = B))
        : (B = e[10]);
      var W = B;
      x && o("WAWebSocketModel").Socket.logout();
      var q;
      e[11] !== p || e[12] !== h || e[13] !== P || e[14] !== x
        ? ((q = o("WAWebScreenLockErrorMessages").getErrorMessage({
            emptyInputEntered: p,
            incorrectPasscode: h,
            onlyOneTryRemaining: P,
            triesExceeded: x,
          })),
          (e[11] = p),
          (e[12] = h),
          (e[13] = P),
          (e[14] = x),
          (e[15] = q))
        : (q = e[15]);
      var U = q,
        V;
      e[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.headerContainer,
            align: "center",
            isFlexContainer: !0,
            children: u.jsx(r("WAWebLandingHeader.react"), {
              surface: "lock-screen",
              showAppDownloadButton: !0,
            }),
          })),
          (e[16] = V))
        : (V = e[16]);
      var H;
      e[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = {
            className:
              "x1lxuw3u x1ow4hk9 x1wmf1g4 xefzj8c x42lpuj x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef xw6alqk x10a9n66",
          }),
          (e[17] = H))
        : (H = e[17]);
      var G;
      e[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = [
            o("WAWebUISpacing").uiMargin.top16,
            o("WAWebUISpacing").uiMargin.bottom18,
          ]),
          (e[18] = G))
        : (G = e[18]);
      var z;
      e[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: G,
            children: u.jsx(r("WAWebProfileImage.react"), {
              thumb: o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(),
              size: m,
              quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            }),
          })),
          (e[19] = z))
        : (z = e[19]);
      var j;
      e[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "lock-screen-emoji-text",
            children: u.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
              xstyle: [
                d.pushnameContainerSpace,
                o("WAWebUISpacing").uiMargin.bottom32,
              ],
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebConnModel").Conn.pushname,
                ellipsify: !0,
                titlify: !0,
              }),
            }),
          })),
          (e[20] = j))
        : (j = e[20]);
      var K;
      e[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              textAlign: "center",
              xstyle: o("WAWebUISpacing").uiMargin.bottom6,
              children: s._(
                /*BTDS*/ "App lock is on. Enter your password to use {=m2}.",
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
          })),
          (e[21] = K))
        : (K = e[21]);
      var Q;
      e[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = [d.passcodeContainer, o("WAWebUISpacing").uiMargin.bottom12]),
          (e[22] = Q))
        : (Q = e[22]);
      var X;
      e[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Enter password").toString()), (e[23] = X))
        : (X = e[23]);
      var Y;
      e[24] !== W
        ? ((Y = u.jsx(r("WAWebPasswordInput.react"), {
            onChange: A,
            onKeyDown: W,
            required: !0,
            placeholder: X,
            focusOnMount: !0,
            enableShowPassword: !0,
            testid: void 0,
          })),
          (e[24] = W),
          (e[25] = Y))
        : (Y = e[25]);
      var J;
      e[26] !== U
        ? ((J =
            U == null
              ? u.jsx("div", { className: "x1gnnpzl" })
              : u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "critical",
                  xstyle: [
                    d.incorrectPasscode,
                    o("WAWebUISpacing").uiMargin.top4,
                    o("WAWebUISpacing").uiMargin.bottom6,
                  ],
                  role: "alert",
                  children: U,
                })),
          (e[26] = U),
          (e[27] = J))
        : (J = e[27]);
      var Z;
      e[28] !== Y || e[29] !== J
        ? ((Z = u.jsxs(r("WAWebFlexItem.react"), {
            xstyle: Q,
            children: [Y, J],
          })),
          (e[28] = Y),
          (e[29] = J),
          (e[30] = Z))
        : (Z = e[30]);
      var ee;
      e[31] !== O
        ? ((ee = function () {
            return void O();
          }),
          (e[31] = O),
          (e[32] = ee))
        : (ee = e[32]);
      var te = b || x || T || I != null,
        ne;
      e[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Unlock")), (e[33] = ne))
        : (ne = e[33]);
      var re;
      e[34] !== b || e[35] !== ee || e[36] !== te
        ? ((re = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.bottom48,
            children: u.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: ee,
              disabled: te,
              spinner: b,
              testid: void 0,
              children: ne,
            }),
          })),
          (e[34] = b),
          (e[35] = ee),
          (e[36] = te),
          (e[37] = re))
        : (re = e[37]);
      var oe;
      e[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom6,
            children: s._(/*BTDS*/ "Forgot password?"),
          })),
          (e[38] = oe))
        : (oe = e[38]);
      var ae;
      e[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom6,
            children: s._(/*BTDS*/ "Log out and link again from your phone."),
          })),
          (e[39] = ae))
        : (ae = e[39]);
      var ie;
      e[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.top12,
            children: u.jsx(o("WAWebButton.react").Button, {
              type: "plain-white",
              onClick: _,
              children: s._(/*BTDS*/ "Log out"),
            }),
          })),
          (e[40] = ie))
        : (ie = e[40]);
      var le;
      return (
        e[41] !== Z || e[42] !== re
          ? ((le = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: d.wrapper,
              testid: void 0,
              children: [
                V,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  grow: r("WAWebEnvironment").isWindows ? 0 : 1,
                  children: u.jsx(
                    "main",
                    babelHelpers.extends({}, H, {
                      children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        className: "landing-main",
                        children: [z, j, K, Z, re, oe, ae, ie],
                      }),
                    }),
                  ),
                }),
              ],
            })),
            (e[41] = Z),
            (e[42] = re),
            (e[43] = le))
          : (le = e[43]),
        le
      );
    }
    function _() {
      o("WAWebSocketModel").Socket.logout();
    }
    l.default = p;
  },
  226,
);
