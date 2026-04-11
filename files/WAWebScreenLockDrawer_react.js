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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(49),
        n = e.onBack,
        a = e.onCancel,
        i = e.ref,
        l = c(_),
        m = l[0],
        f = l[1],
        g = c(p),
        h = g[0],
        y = g[1],
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            (o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(t),
              f(t),
              y(t !== 0),
              o("WAWebSubscribePushManagerAction").updatePushManager());
          }),
          (t[0] = C))
        : (C = t[0]);
      var b = C,
        v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
            "wa_web_app_lock_upsell",
          )),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R;
      t[2] !== m
        ? ((R = function (t) {
            if (m > 0 && t > 0) {
              b(t);
              return;
            }
            t === 0
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebPasscodeRemoval.react"), {
                    onSubmit: function () {
                      return b(t);
                    },
                  }),
                )
              : o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebPasscodeSetup.react"), {
                    onSubmit: function () {
                      return b(t);
                    },
                  }),
                );
          }),
          (t[2] = m),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] !== h
        ? ((E = function () {
            h
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebPasscodeRemoval.react"), {
                    onSubmit: function () {
                      return b(0);
                    },
                  }),
                )
              : o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebPasscodeSetup.react"), {
                    onSubmit: function () {
                      return b(
                        o("WAWebScreenLockTimerOptions")
                          .DEFAULT_SCREEN_LOCK_DURATION_SECONDS,
                      );
                    },
                  }),
                );
          }),
          (t[4] = h),
          (t[5] = E))
        : (E = t[5]);
      var k = E,
        I;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Lock with a password")), (t[6] = I))
        : (I = t[6]);
      var T = I,
        D;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Use App lock for privacy")), (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = S ? s._(/*BTDS*/ "Enable app lock") : s._(/*BTDS*/ "App lock")),
          (t[8] = $))
        : ($ = t[8]);
      var P = $,
        N;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = S
            ? s._(
                /*BTDS*/ "You can lock {=m1} instead of logging out. This makes it easier to access again later.",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(
                      o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows,
                      { children: s._(/*BTDS*/ "") },
                    ),
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
              )),
          (t[9] = N))
        : (N = t[9]);
      var M = N,
        w;
      t[10] !== h
        ? ((w =
            S &&
            !h &&
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
            })),
          (t[10] = h),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F;
      t[12] !== h
        ? ((F =
            S &&
            h &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              marginTop: 8,
              children: s._(
                /*BTDS*/ "When a password is set you can lock {=m2} from the Chats menu.",
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
            })),
          (t[12] = h),
          (t[13] = F))
        : (F = t[13]);
      var O = F,
        B;
      t[14] !== h
        ? ((B =
            S &&
            h &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              padding: [8, 0],
              children: s._(/*BTDS*/ "When to lock"),
            })),
          (t[14] = h),
          (t[15] = B))
        : (B = t[15]);
      var W = B,
        q;
      t[16] !== m || t[17] !== L || t[18] !== h
        ? ((q =
            h &&
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
                      return L(n);
                    },
                    icon: u.jsx("div", {
                      children: u.jsx(
                        r("WAWebCheckBoxRound.react"),
                        {
                          testid: void 0,
                          ariaLabel: t,
                          checked: n === m,
                          radio: !0,
                          hover: !1,
                          systemUncheckedColor: !0,
                          onClick: function () {
                            return L(n);
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
              })),
          (t[16] = m),
          (t[17] = L),
          (t[18] = h),
          (t[19] = q))
        : (q = t[19]);
      var U = q,
        V;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsxs(u.Fragment, {
            children: [
              " ",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getScreenLockLearnMoreUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
              " ",
            ],
          })),
          (t[20] = V))
        : (V = t[20]);
      var H = V,
        G;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = { surface: "unknown", viewName: "screen-lock-settings" }),
          (t[21] = G))
        : (G = t[21]);
      var z;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "App lock")), (t[22] = z))
        : (z = t[22]);
      var j;
      t[23] !== n || t[24] !== a
        ? ((j = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: z,
            onBack: n,
            onCancel: a,
            focusBackOrCancel: !0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[23] = n),
          (t[24] = a),
          (t[25] = j))
        : (j = t[25]);
      var K, Q;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((K =
            S &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              children: u.jsx(
                o("WAWebWdsPictoPrivacyIcon.react").WdsPictoPrivacyIcon,
                {},
              ),
            })),
          (Q = S
            ? u.jsx(o("WAWebText.react").WAWebTextMediumRefreshed, {
                xstyle: d.appLockHeader,
                children: T,
              })
            : u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                margin: [8, 0, 32, 0],
                as: "h2",
                children: x,
              })),
          (t[26] = K),
          (t[27] = Q))
        : ((K = t[26]), (Q = t[27]));
      var X, Y;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = u.jsxs(o("WAWebText.react").WAWebTextMuted, {
            marginBottom: 24,
            children: [M, S && u.jsx("br", {}), H],
          })),
          (Y =
            S &&
            u.jsx(r("WAWebGroupInfoSeparator.react"), {
              animation: !1,
              padding: !1,
            })),
          (t[28] = X),
          (t[29] = Y))
        : ((X = t[28]), (Y = t[29]));
      var J;
      t[30] !== h || t[31] !== k
        ? ((J = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "screen-lock-setting-checkbox",
            checked: h,
            checkboxRightAligned: !0,
            onChange: k,
            children: P,
          })),
          (t[30] = h),
          (t[31] = k),
          (t[32] = J))
        : (J = t[32]);
      var Z;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z =
            S &&
            u.jsx(r("WAWebGroupInfoSeparator.react"), {
              animation: !1,
              padding: !1,
            })),
          (t[33] = Z))
        : (Z = t[33]);
      var ee;
      t[34] !== h
        ? ((ee =
            S &&
            h &&
            u.jsx(r("WAWebGroupInfoSeparator.react"), {
              animation: !1,
              padding: !1,
            })),
          (t[34] = h),
          (t[35] = ee))
        : (ee = t[35]);
      var te;
      t[36] !== U ||
      t[37] !== A ||
      t[38] !== O ||
      t[39] !== J ||
      t[40] !== ee ||
      t[41] !== W
        ? ((te = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding",
              animation: !1,
              children: [K, Q, X, Y, J, Z, W, U, ee, A, O],
            }),
          })),
          (t[36] = U),
          (t[37] = A),
          (t[38] = O),
          (t[39] = J),
          (t[40] = ee),
          (t[41] = W),
          (t[42] = te))
        : (te = t[42]);
      var ne;
      t[43] !== j || t[44] !== te
        ? ((ne = u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            children: [j, te],
          })),
          (t[43] = j),
          (t[44] = te),
          (t[45] = ne))
        : (ne = t[45]);
      var re;
      return (
        t[46] !== i || t[47] !== ne
          ? ((re = u.jsx(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: G,
              children: ne,
            })),
            (t[46] = i),
            (t[47] = ne),
            (t[48] = re))
          : (re = t[48]),
        re
      );
    }
    function p() {
      return o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
    }
    function _() {
      return o("WAWebUserPrefsScreenLock").getScreenLockDurationInSeconds();
    }
    l.default = m;
  },
  226,
);
