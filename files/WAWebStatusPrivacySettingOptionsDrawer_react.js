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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(62),
        a = t.isModal,
        i = t.onAllowListClick,
        l = t.onBack,
        u = t.onClose,
        m = t.onContactClick,
        _ = t.onDenyListClick,
        g = t.ref,
        h = t.statusPostingPrivacyConfig,
        y = a === void 0 ? !1 : a,
        C;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var b;
        ((C = [
          (b = o("WAWebSettingsGetters")).getIsFBLinked,
          b.getIsIGLinked,
          b.getLinkState,
          b.getShareToFB,
          b.getShareToIG,
        ]),
          (n[0] = C));
      } else C = n[0];
      var v = o("useWAWebSettingsValues").useSettingsValues(C),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I;
      n[1] !== L
        ? ((I =
            o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled() &&
            L === o("WAWebAccountLinkingConstants").AccountLinkState.Active),
          (n[1] = L),
          (n[2] = I))
        : (I = n[2]);
      var T = I,
        D = f,
        x = p,
        $;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Status privacy")), (n[3] = $))
        : ($ = n[3]);
      var P = $,
        N;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Facebook Story")), (n[4] = N))
        : (N = n[4]);
      var M = N,
        w;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(/*BTDS*/ "Instagram Story")), (n[5] = w))
        : (w = n[5]);
      var A = w;
      if (!h) {
        var F;
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = c.jsx(r("WAWebLoadingDrawer.react"), {
              title: P,
              error: !1,
            })),
            (n[6] = F))
          : (F = n[6]);
        var O;
        return (
          n[7] !== g
            ? ((O = c.jsx(r("WAWebDrawer.react"), { ref: g, children: F })),
              (n[7] = g),
              (n[8] = O))
            : (O = n[8]),
          O
        );
      }
      var B = h.setting,
        W;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Who can see my status updates on WhatsApp")),
          (n[9] = W))
        : (W = n[9]);
      var q = W,
        U;
      n[10] !== h
        ? ((U = o("WAWebStatusPostingUtils").formatStatusSetting(h)),
          (n[10] = h),
          (n[11] = U))
        : (U = n[11]);
      var V = U,
        H = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      y && (H = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP);
      var G;
      if (l) {
        var z;
        (n[12] !== l
          ? ((z = { onBack: l }), (n[12] = l), (n[13] = z))
          : (z = n[13]),
          (G = z));
      } else if (u) {
        var j;
        (n[14] !== u
          ? ((j = { onCancel: u }), (n[14] = u), (n[15] = j))
          : (j = n[15]),
          (G = j));
      }
      var K;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = { surface: "status-audience-selector" }), (n[16] = K))
        : (K = n[16]);
      var Q;
      n[17] !== H || n[18] !== G
        ? ((Q = c.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              { testid: void 0, title: P, type: H, focusBackOrCancel: !0 },
              G,
            ),
          )),
          (n[17] = H),
          (n[18] = G),
          (n[19] = Q))
        : (Q = n[19]);
      var X;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                d.title,
                o("WAWebUISpacing").uiMargin.vert20,
                o("WAWebUISpacing").uiMargin.horiz0,
              ]),
              { children: q },
            ),
          )),
          (n[20] = X))
        : (X = n[20]);
      var Y, J;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "My contacts")),
          (J = s._(/*BTDS*/ "Share with all of your contacts")),
          (n[21] = Y),
          (n[22] = J))
        : ((Y = n[21]), (J = n[22]));
      var Z =
          B === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact,
        ee;
      n[23] !== m || n[24] !== Z
        ? ((ee = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
            text: Y,
            subText: J,
            selected: Z,
            testid: void 0,
            onClick: m,
          })),
          (n[23] = m),
          (n[24] = Z),
          (n[25] = ee))
        : (ee = n[25]);
      var te;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = s._(/*BTDS*/ "My contacts except...")), (n[26] = te))
        : (te = n[26]);
      var ne;
      n[27] !== B || n[28] !== V
        ? ((ne =
            B ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
              ? V
              : s._(
                  /*BTDS*/ "Share with your contacts except people you select",
                )),
          (n[27] = B),
          (n[28] = V),
          (n[29] = ne))
        : (ne = n[29]);
      var re =
          B === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
        oe;
      n[30] !== _ || n[31] !== ne || n[32] !== re
        ? ((oe = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
            text: te,
            subText: ne,
            testid: void 0,
            selected: re,
            onClick: _,
          })),
          (n[30] = _),
          (n[31] = ne),
          (n[32] = re),
          (n[33] = oe))
        : (oe = n[33]);
      var ae;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = s._(/*BTDS*/ "Only share with...")), (n[34] = ae))
        : (ae = n[34]);
      var ie;
      n[35] !== B || n[36] !== V
        ? ((ie =
            B ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
              ? V
              : s._(/*BTDS*/ "Only share with selected contacts")),
          (n[35] = B),
          (n[36] = V),
          (n[37] = ie))
        : (ie = n[37]);
      var le =
          B ===
          o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
        se;
      n[38] !== i || n[39] !== ie || n[40] !== le
        ? ((se = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
            text: ae,
            subText: ie,
            testid: void 0,
            selected: le,
            onClick: i,
          })),
          (n[38] = i),
          (n[39] = ie),
          (n[40] = le),
          (n[41] = se))
        : (se = n[41]);
      var ue;
      n[42] !== ee || n[43] !== oe || n[44] !== se
        ? ((ue = c.jsxs("div", {
            role: "radiogroup",
            "aria-label": q,
            children: [ee, oe, se],
          })),
          (n[42] = ee),
          (n[43] = oe),
          (n[44] = se),
          (n[45] = ue))
        : (ue = n[45]);
      var ce;
      n[46] !== X || n[47] !== ue
        ? ((ce = c.jsxs(r("WAWebDrawerSection.react"), {
            theme: "padding-no-vertical",
            animation: !1,
            children: [X, ue],
          })),
          (n[46] = X),
          (n[47] = ue),
          (n[48] = ce))
        : (ce = n[48]);
      var de;
      n[49] !== T || n[50] !== S || n[51] !== R || n[52] !== E || n[53] !== k
        ? ((de =
            T &&
            (S || R) &&
            c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [
                c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
                c.jsxs("div", {
                  className: "x1p57kb1",
                  children: [
                    S &&
                      c.jsxs("div", {
                        className:
                          "x78zum5 x6s0dn4 x1qughib xyinxu5 x1g2khh7 x1ypdohk",
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          D(!E);
                        },
                        onKeyDown: function (t) {
                          (t.key === "Enter" || t.key === " ") &&
                            (t.preventDefault(), D(!E));
                        },
                        "data-testid": void 0,
                        children: [
                          c.jsxs("div", {
                            className: "x78zum5 x6s0dn4 xs2akgl",
                            children: [
                              c.jsx("div", {
                                className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
                                children: c.jsx(
                                  r("WDSIconWdsIcLogoFacebook.react"),
                                  {},
                                ),
                              }),
                              c.jsx("span", {
                                className: "x6prxxf x14ug900 x1fc57z9",
                                children: M,
                              }),
                            ],
                          }),
                          c.jsx(r("WDSSwitch.react"), {
                            value: E,
                            "aria-label": M.toString(),
                          }),
                        ],
                      }),
                    R &&
                      c.jsxs("div", {
                        className:
                          "x78zum5 x6s0dn4 x1qughib xyinxu5 x1g2khh7 x1ypdohk",
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          x(!k);
                        },
                        onKeyDown: function (t) {
                          (t.key === "Enter" || t.key === " ") &&
                            (t.preventDefault(), x(!k));
                        },
                        "data-testid": void 0,
                        children: [
                          c.jsxs("div", {
                            className: "x78zum5 x6s0dn4 xs2akgl",
                            children: [
                              c.jsx("div", {
                                className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
                                children: c.jsx(
                                  r("WDSIconWdsIcLogoInstagram.react"),
                                  {},
                                ),
                              }),
                              c.jsx("span", {
                                className: "x6prxxf x14ug900 x1fc57z9",
                                children: A,
                              }),
                            ],
                          }),
                          c.jsx(r("WDSSwitch.react"), {
                            value: k,
                            "aria-label": A.toString(),
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
            })),
          (n[49] = T),
          (n[50] = S),
          (n[51] = R),
          (n[52] = E),
          (n[53] = k),
          (n[54] = de))
        : (de = n[54]);
      var me;
      n[55] !== ce || n[56] !== de
        ? ((me = c.jsxs(r("WAWebDrawerBody.react"), { children: [ce, de] })),
          (n[55] = ce),
          (n[56] = de),
          (n[57] = me))
        : (me = n[57]);
      var pe;
      return (
        n[58] !== g || n[59] !== Q || n[60] !== me
          ? ((pe = c.jsxs(r("WAWebDrawer.react"), {
              ref: g,
              testid: void 0,
              tsNavigationData: K,
              children: [Q, me],
            })),
            (n[58] = g),
            (n[59] = Q),
            (n[60] = me),
            (n[61] = pe))
          : (pe = n[61]),
        pe
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        g.apply(this, arguments)
      );
    }
    l.default = m;
  },
  226,
);
