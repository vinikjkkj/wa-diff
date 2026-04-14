__d(
  "WAWebStatusPrivacySettingOptionsDrawer.react",
  [
    "fbt",
    "WAWebAccountLinkingConstants",
    "WAWebCrosspostingAutoShareAction",
    "WAWebCrosspostingGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebLoadingDrawer.react",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebSettingsGetters",
    "WAWebStatusPostingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUserPrefsStatusType",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSSwitch.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        title: {
          fontSize: "x1jchvi3",
          color: "x1v5yvga",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
      };
    function m(t) {
      var a = t.isModal,
        i = a === void 0 ? !1 : a,
        l = t.onAllowListClick,
        u = t.onBack,
        m = t.onClose,
        p = t.onContactClick,
        _ = t.onDenyListClick,
        f = t.ref,
        g = t.statusPostingPrivacyConfig,
        h = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getIsFBLinked,
          o("WAWebSettingsGetters").getIsIGLinked,
          o("WAWebSettingsGetters").getLinkState,
          o("WAWebSettingsGetters").getShareToFB,
          o("WAWebSettingsGetters").getShareToIG,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R =
          o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled() &&
          b === o("WAWebAccountLinkingConstants").AccountLinkState.Active,
        L = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              yield o(
                "WAWebCrosspostingAutoShareAction",
              ).toggleCrosspostAutoShare("fb", e);
            } catch (e) {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Failed to update share to Facebook setting. Please try again.",
                  ),
                }),
              );
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        E = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              yield o(
                "WAWebCrosspostingAutoShareAction",
              ).toggleCrosspostAutoShare("ig", e);
            } catch (e) {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Failed to update share to Instagram setting. Please try again.",
                  ),
                }),
              );
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        k = s._(/*BTDS*/ "Status privacy"),
        I = s._(/*BTDS*/ "Facebook Story"),
        T = s._(/*BTDS*/ "Instagram Story");
      if (!g)
        return c.jsx(r("WAWebDrawer.react"), {
          ref: f,
          children: c.jsx(r("WAWebLoadingDrawer.react"), {
            title: k,
            error: !1,
          }),
        });
      var D = g.setting,
        x = s._(/*BTDS*/ "Who can see my status updates on WhatsApp"),
        $ = o("WAWebStatusPostingUtils").formatStatusSetting(g),
        P = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      i && (P = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP);
      var N;
      return (
        u ? (N = { onBack: u }) : m && (N = { onCancel: m }),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: f,
          testid: void 0,
          tsNavigationData: { surface: "status-audience-selector" },
          children: [
            c.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends(
                { testid: void 0, title: k, type: P, focusBackOrCancel: !0 },
                N,
              ),
            ),
            c.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                c.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "padding-no-vertical",
                  animation: !1,
                  children: [
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props([
                          d.title,
                          o("WAWebUISpacing").uiMargin.vert20,
                          o("WAWebUISpacing").uiMargin.horiz0,
                        ]),
                        { children: x },
                      ),
                    ),
                    c.jsxs("div", {
                      role: "radiogroup",
                      "aria-label": x,
                      children: [
                        c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
                          text: s._(/*BTDS*/ "My contacts"),
                          subText: s._(
                            /*BTDS*/ "Share with all of your contacts",
                          ),
                          selected:
                            D ===
                            o("WAWebUserPrefsStatusType")
                              .StatusPrivacySettingType.Contact,
                          testid: void 0,
                          onClick: p,
                        }),
                        c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
                          text: s._(/*BTDS*/ "My contacts except..."),
                          subText:
                            D ===
                            o("WAWebUserPrefsStatusType")
                              .StatusPrivacySettingType.DenyList
                              ? $
                              : s._(
                                  /*BTDS*/ "Share with your contacts except people you select",
                                ),
                          testid: void 0,
                          selected:
                            D ===
                            o("WAWebUserPrefsStatusType")
                              .StatusPrivacySettingType.DenyList,
                          onClick: _,
                        }),
                        c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
                          text: s._(/*BTDS*/ "Only share with..."),
                          subText:
                            D ===
                            o("WAWebUserPrefsStatusType")
                              .StatusPrivacySettingType.AllowList
                              ? $
                              : s._(
                                  /*BTDS*/ "Only share with selected contacts",
                                ),
                          testid: void 0,
                          selected:
                            D ===
                            o("WAWebUserPrefsStatusType")
                              .StatusPrivacySettingType.AllowList,
                          onClick: l,
                        }),
                      ],
                    }),
                  ],
                }),
                R &&
                  (y || C) &&
                  c.jsxs(r("WAWebDrawerSection.react"), {
                    theme: "padding-no-vertical",
                    animation: !1,
                    children: [
                      c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
                      c.jsxs("div", {
                        className: "x1p57kb1",
                        children: [
                          y &&
                            c.jsxs("div", {
                              className:
                                "x78zum5 x6s0dn4 x1qughib xyinxu5 x1g2khh7 x1ypdohk",
                              role: "button",
                              tabIndex: 0,
                              onClick: function () {
                                L(!v);
                              },
                              onKeyDown: function (t) {
                                (t.key === "Enter" || t.key === " ") &&
                                  (t.preventDefault(), L(!v));
                              },
                              "data-testid": void 0,
                              children: [
                                c.jsxs("div", {
                                  className: "x78zum5 x6s0dn4 xs2akgl",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "x78zum5 x6s0dn4 xl56j7k xhslqc4",
                                      children: c.jsx(
                                        r("WDSIconWdsIcLogoFacebook.react"),
                                        {},
                                      ),
                                    }),
                                    c.jsx("span", {
                                      className: "x6prxxf x14ug900 x1fc57z9",
                                      children: I,
                                    }),
                                  ],
                                }),
                                c.jsx(r("WDSSwitch.react"), {
                                  value: v,
                                  "aria-label": I.toString(),
                                }),
                              ],
                            }),
                          C &&
                            c.jsxs("div", {
                              className:
                                "x78zum5 x6s0dn4 x1qughib xyinxu5 x1g2khh7 x1ypdohk",
                              role: "button",
                              tabIndex: 0,
                              onClick: function () {
                                E(!S);
                              },
                              onKeyDown: function (t) {
                                (t.key === "Enter" || t.key === " ") &&
                                  (t.preventDefault(), E(!S));
                              },
                              "data-testid": void 0,
                              children: [
                                c.jsxs("div", {
                                  className: "x78zum5 x6s0dn4 xs2akgl",
                                  children: [
                                    c.jsx("div", {
                                      className:
                                        "x78zum5 x6s0dn4 xl56j7k xhslqc4",
                                      children: c.jsx(
                                        r("WDSIconWdsIcLogoInstagram.react"),
                                        {},
                                      ),
                                    }),
                                    c.jsx("span", {
                                      className: "x6prxxf x14ug900 x1fc57z9",
                                      children: T,
                                    }),
                                  ],
                                }),
                                c.jsx(r("WDSSwitch.react"), {
                                  value: S,
                                  "aria-label": T.toString(),
                                }),
                              ],
                            }),
                          c.jsx("div", {
                            className: "x1f6kntn xhslqc4 xd4r4e8 x1p57kb1",
                            children: s._(
                              /*BTDS*/ "Automatically share your status to your Facebook or Instagram Stories. Manage the accounts you share to in Settings > Accounts Center on your phone.",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
