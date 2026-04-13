__d(
  "WAWebSecurityDrawer.react",
  [
    "fbt",
    "WAWebDefenseModeLockedInterstitial.react",
    "WAWebDefenseModeUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebMiscGatingUtils",
    "WAWebPrinaUtils",
    "WAWebPrivacyNarrativeE2ESummary.react",
    "WAWebSecurityLockIcon.react",
    "WAWebSecurityShieldIcon.react",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WDSIconIcLock.react",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        icon: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          width: "xj35x94",
          height: "x19swzb4",
          paddingTop: "x16ovd2e",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          marginTop: "x98l61r",
          color: "x1mysghr",
          backgroundColor: "xe8plzu",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        iconLock: {
          position: "x10l6tqk",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          top: "x13vifvy",
          bottom: "xy1j3rs",
          color: "x2rqmh4",
          $$css: !0,
        },
      };
    function _() {
      var e = o("react-compiler-runtime").c(5),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(r("WAWebFlexItem.react"), {
            children: u.jsx(
              o("WAWebSecurityShieldIcon.react").SecurityShieldIcon,
              {},
            ),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n, a, i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.icon,
            align: "center",
            justify: "center",
            children: [
              t,
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: p.iconLock,
                align: "center",
                justify: "center",
                children: u.jsx(r("WAWebFlexItem.react"), {
                  children: u.jsx(
                    o("WAWebSecurityLockIcon.react").SecurityLockIcon,
                    {},
                  ),
                }),
              }),
            ],
          })),
          (a = {
            className:
              "x1h678fw xcldk2z xv6tirj x1phvje8 x1nmyh1g x1jchvi3 x1o2sk6j",
          }),
          (i = s._(
            /*BTDS*/ "Messages and calls in end-to-end encrypted chats stay between you and the people you choose. Not even WhatsApp can read or listen to them.",
          )),
          (e[1] = n),
          (e[2] = a),
          (e[3] = i))
        : ((n = e[1]), (a = e[2]), (i = e[3]));
      var l;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsxs(u.Fragment, {
              children: [
                n,
                u.jsxs(
                  "div",
                  babelHelpers.extends({}, a, {
                    children: [
                      i,
                      " ",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebPrinaUtils").securityUrl(),
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ],
                  }),
                ),
              ],
            })),
            (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.onClose,
        a = e.ref,
        i = r("useWAWebToggle")(
          o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications,
          o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications,
        ),
        l = i[0],
        c = i[1],
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(
            /*BTDS*/ "Get notified when your security code changes for a contact's phone. If you have multiple devices, this setting must be enabled on each device where you want to get notifications.",
          )),
          (t[0] = d))
        : (d = t[0]);
      var p = d,
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled()),
          (t[1] = f))
        : (f = t[1]);
      var y = f,
        C = m(g),
        b = C[0],
        v = C[1],
        S = b != null,
        R;
      (t[2] !== b
        ? ((R = function () {
            var e = o(
              "WAWebDefenseModeUtils",
            ).getWamEnumIfSettingLockedByDefenseMode("securityNotifications");
            e !== b && v(e);
          }),
          (t[2] = b),
          (t[3] = R))
        : (R = t[3]),
        o("useWAWebListener").useListener(
          o("WAWebUserPrefsGeneral").privacySettingsEventEmitter,
          "all",
          R,
        ));
      var L;
      t[4] !== l || t[5] !== b || t[6] !== c
        ? ((L = function () {
            b != null
              ? o(
                  "WAWebDefenseModeLockedInterstitial.react",
                ).openDefenseModeLockedInterstitialGlobal(b, l ? "on" : "off")
              : c();
          }),
          (t[4] = l),
          (t[5] = b),
          (t[6] = c),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "security-settings" }),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Security")), (t[9] = I))
        : (I = t[9]);
      var T;
      t[10] !== n
        ? ((T = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: I,
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[10] = n),
          (t[11] = T))
        : (T = t[11]);
      var D, x, $, P;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = y
            ? u.jsx(
                o("WAWebPrivacyNarrativeE2ESummary.react")
                  .E2eSummarySecurityDrawer,
                {},
              )
            : u.jsx(_, {})),
          (P = u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 })),
          (D = { className: "x78zum5 x6s0dn4 x1s70e7g x1phvje8 xcldk2z" }),
          (x = u.jsx("div", {
            className: "x1xrf6ya x1nzty39 xscbp6u x12w63v0",
            children: u.jsx(r("WDSIconIcLock.react"), {}),
          })),
          (t[12] = D),
          (t[13] = x),
          (t[14] = $),
          (t[15] = P))
        : ((D = t[12]), (x = t[13]), ($ = t[14]), (P = t[15]));
      var N;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Show security notifications on this computer")),
          (t[16] = N))
        : (N = t[16]);
      var M;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { className: "x1849jeq x78zum5 xl56j7k" }), (t[17] = M))
        : (M = t[17]);
      var w = l || b !== void 0,
        A;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Show security notifications on this computer")),
          (t[18] = A))
        : (A = t[18]);
      var F;
      t[19] !== w
        ? ((F = u.jsx(
            "div",
            babelHelpers.extends({}, M, {
              children: u.jsx(r("WDSSwitch.react"), {
                value: w,
                "aria-label": A,
              }),
            }),
          )),
          (t[19] = w),
          (t[20] = F))
        : (F = t[20]);
      var O;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = { className: "xcldk2z" }), (t[21] = O))
        : (O = t[21]);
      var B;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = o("WAWebFaqUrl").getCodeChangeFaqUrl()), (t[22] = B))
        : (B = t[22]);
      var W;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsxs(
            "div",
            babelHelpers.extends({}, O, {
              children: [
                p,
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: B,
                  onClick: h,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          )),
          (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] !== E || t[25] !== S || t[26] !== F
        ? ((q = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              children: [
                $,
                P,
                u.jsxs(
                  "div",
                  babelHelpers.extends({}, D, {
                    children: [
                      x,
                      u.jsx(r("WAWebDrawerItem.react"), {
                        title: N,
                        tabIndex: -1,
                        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                        icon: F,
                        theme: "privacy",
                        isLastItem: !0,
                        disableKeydownHandling: !0,
                        disabled: S,
                        onDisabledClick: E,
                        onClick: E,
                        testid: void 0,
                        children: W,
                      }),
                    ],
                  }),
                ),
              ],
            }),
          })),
          (t[24] = E),
          (t[25] = S),
          (t[26] = F),
          (t[27] = q))
        : (q = t[27]);
      var U;
      t[28] !== q || t[29] !== T
        ? ((U = u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            children: [T, q],
          })),
          (t[28] = q),
          (t[29] = T),
          (t[30] = U))
        : (U = t[30]);
      var V;
      return (
        t[31] !== a || t[32] !== U
          ? ((V = u.jsx(r("WAWebDrawer.react"), {
              ref: a,
              testid: void 0,
              tsNavigationData: k,
              children: U,
            })),
            (t[31] = a),
            (t[32] = U),
            (t[33] = V))
          : (V = t[33]),
        V
      );
    }
    function g() {
      return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode(
        "securityNotifications",
      );
    }
    function h(e) {
      e == null || e.stopPropagation();
    }
    l.default = f;
  },
  226,
);
