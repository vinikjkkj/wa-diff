__d(
  "WAWebWallpaperDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebButton.react",
    "WAWebChatPreferenceCollection",
    "WAWebCheckBox.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebPopoverContext.react",
    "WAWebPopoverPosition",
    "WAWebSettingsSyncBridge",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTooltip.react",
    "WAWebUISpacing",
    "WAWebWallpaper",
    "WDSFocusStateStyles",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        wallpaperColorCanvas: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          float: "xj87blo",
          width: "x1pigqs1",
          height: "xn6wvy2",
          marginBottom: "x1fqp7bg",
          marginInlineStart: "xx6jrq6",
          textAlign: "x2b8uid",
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          cursor: "x1ypdohk",
          ":hover_borderTopWidth": "x964kle",
          ":hover_borderInlineEndWidth": "xk5gepk",
          ":hover_borderBottomWidth": "x1wql1ll",
          ":hover_borderInlineStartWidth": "x1dwt4bm",
          ":hover_borderTopStyle": "x1lwdpx3",
          ":hover_borderInlineEndStyle": "xb90sal",
          ":hover_borderBottomStyle": "x1rlzdi",
          ":hover_borderInlineStartStyle": "xrhz2io",
          ":hover_borderTopColor": "x1j88qlk",
          ":hover_borderInlineEndColor": "xmly02p",
          ":hover_borderBottomColor": "x36lclb",
          ":hover_borderInlineStartColor": "xzyl2ln",
          $$css: !0,
        },
        canvasActive: { boxShadow: "xftp5sx", $$css: !0 },
        canvasActiveBorder: {
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
        canvasDefault: { backgroundColor: "x1q80dvb", $$css: !0 },
        wallpaperUseGlobal: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexWrap: "x1a02dak",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        checkboxLabel: {
          marginInlineStart: "xdzw4kq",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        canvasBg: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
      };
    function h(t) {
      var a = o("react-compiler-runtime").c(37),
        i = t.chat,
        l = t.colorHex,
        u = t.colorName,
        d = t.isDefault,
        m = f(!1),
        p = m[0],
        h = m[1],
        y;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["wallpaper"]), (a[0] = y))
        : (y = a[0]);
      var C = o("useWAWebModelValues").useOptionalModelValues(i, y),
        b = _(null),
        v;
      a[1] !== l || a[2] !== d
        ? ((v = function () {
            return d ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : l;
          }),
          (a[1] = l),
          (a[2] = d),
          (a[3] = v))
        : (v = a[3]);
      var S = v,
        R;
      a[4] !== C || a[5] !== S
        ? ((R = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = S(),
                  n = r("WAWebChatPreferenceCollection").get(
                    "defaultPreference",
                  );
                o("WAWebABProps").getABPropConfigValue(
                  "use_per_chat_wallpaper",
                ) &&
                C != null &&
                t !== C.wallpaper
                  ? (yield C.setChatWallpaper(t),
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(/*BTDS*/ "Chat wallpaper set"),
                      }),
                    ))
                  : n &&
                    t !== n.wallpaper &&
                    (n.set("wallpaper", t),
                    o("WAWebSettingsSyncBridge").sendSettingChange(
                      "wallpaperId",
                      o("WAWebWallpaper").getWallpaperId(t),
                    ),
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(/*BTDS*/ "Global wallpaper set"),
                      }),
                    ));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[4] = C),
          (a[5] = S),
          (a[6] = R))
        : (R = a[6]);
      var L = R,
        E;
      a[7] !== S || a[8] !== p
        ? ((E = function (t) {
            p ||
              (h(!0),
              r("WAWebChatPreferenceCollection").trigger(
                "wallpaper_preview",
                S(),
              ));
          }),
          (a[7] = S),
          (a[8] = p),
          (a[9] = E))
        : (E = a[9]);
      var k = E,
        I;
      a[10] !== S || a[11] !== p
        ? ((I = function (t) {
            p ||
              (h(!0),
              r("WAWebChatPreferenceCollection").trigger(
                "wallpaper_preview",
                S(),
              ));
          }),
          (a[10] = S),
          (a[11] = p),
          (a[12] = I))
        : (I = a[12]);
      var T = I,
        D;
      a[13] !== p
        ? ((D = function (t) {
            p &&
              (h(!1),
              r("WAWebChatPreferenceCollection").trigger("wallpaper_preview"));
          }),
          (a[13] = p),
          (a[14] = D))
        : (D = a[14]);
      var x = D,
        $;
      a[15] !== t.isDefault
        ? (($ = t.isDefault
            ? c.jsx("span", {
                className:
                  "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
                "data-testid": void 0,
                children: s._(/*BTDS*/ "Default"),
              })
            : null),
          (a[15] = t.isDefault),
          (a[16] = $))
        : ($ = a[16]);
      var P = $,
        N =
          l != null ? "wallpaper-canvas-color-" + l : "wallpaper-canvas-color",
        M = t.isSelected && g.canvasActive,
        w = t.isSelected && g.canvasActiveBorder,
        A = t.isDefault && g.canvasDefault,
        F;
      if (a[17] !== t.colorHex || a[18] !== M || a[19] !== w || a[20] !== A) {
        var O = [
          g.wallpaperColorCanvas,
          M,
          w,
          A,
          t.colorHex != null && g.canvasBg(t.colorHex),
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ];
        ((F = (e || (e = r("stylex"))).props(O)),
          (a[17] = t.colorHex),
          (a[18] = M),
          (a[19] = w),
          (a[20] = A),
          (a[21] = F));
      } else F = a[21];
      var B;
      a[22] !== t.isDefault
        ? ((B = t.isDefault ? s._(/*BTDS*/ "Default") : void 0),
          (a[22] = t.isDefault),
          (a[23] = B))
        : (B = a[23]);
      var W;
      a[24] !== u
        ? ((W = c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
            targetRef: b,
            popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
              targetRef: "context",
              alignment: o("WAWebPopoverPosition").PopoverAlignment.Center,
              position: o("WAWebPopoverPosition").PopoverPosition.Bottom,
              showOnFocus: !0,
              enableEnterTransition: !1,
              children: u,
            }),
          })),
          (a[24] = u),
          (a[25] = W))
        : (W = a[25]);
      var q;
      return (
        a[26] !== P ||
        a[27] !== L ||
        a[28] !== T ||
        a[29] !== x ||
        a[30] !== k ||
        a[31] !== t.ariaLabel ||
        a[32] !== F ||
        a[33] !== B ||
        a[34] !== W ||
        a[35] !== N
          ? ((q = c.jsxs(
              "button",
              babelHelpers.extends({}, F, {
                ref: b,
                onMouseOver: k,
                onFocus: k,
                tabIndex: 0,
                onMouseEnter: T,
                onMouseLeave: x,
                onClick: L,
                "data-testid": void 0,
                "aria-label": t.ariaLabel,
                title: B,
                children: [P, W],
              }),
            )),
            (a[26] = P),
            (a[27] = L),
            (a[28] = T),
            (a[29] = x),
            (a[30] = k),
            (a[31] = t.ariaLabel),
            (a[32] = F),
            (a[33] = B),
            (a[34] = W),
            (a[35] = N),
            (a[36] = q))
          : (q = a[36]),
        q
      );
    }
    function y(t) {
      var a = o("react-compiler-runtime").c(54),
        i = t.chat,
        l = t.colors,
        u;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["wallpaper", "showDoodle"]), (a[0] = u))
        : (u = a[0]);
      var d = o("useWAWebModelValues").useOptionalModelValues(i, u),
        p;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["wallpaper", "showDoodle"]), (a[1] = p))
        : (p = a[1]);
      var _ = o("useWAWebModelValues").useOptionalModelValues(
          t.chatPreference,
          p,
        ),
        f = m(o("WAWebThemeContext").ThemeContext),
        y;
      a[2] !== d || a[3] !== _
        ? ((y = function (t) {
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            d
              ? d.setShowDoodle(t)
              : _ && _.set("showDoodle", t);
          }),
          (a[2] = d),
          (a[3] = _),
          (a[4] = y))
        : (y = a[4]);
      var C = o("useWAWebSettingSync").useSettingSync(
          "isDoodleWallpaperEnabled",
          y,
        ),
        b;
      if (
        a[5] !== (d == null ? void 0 : d.wallpaper) ||
        a[6] !== (_ == null ? void 0 : _.wallpaper)
      ) {
        var v;
        ((b =
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
          (v = d == null ? void 0 : d.wallpaper) != null
            ? v
            : _ == null
              ? void 0
              : _.wallpaper),
          (a[5] = d == null ? void 0 : d.wallpaper),
          (a[6] = _ == null ? void 0 : _.wallpaper),
          (a[7] = b));
      } else b = a[7];
      var S = b,
        R;
      a[8] !== d || a[9] !== C || a[10] !== _
        ? ((R = function () {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "use_per_chat_wallpaper",
              ) &&
              d
            ) {
              var e =
                d.showDoodle != null
                  ? !d.showDoodle
                  : !(_ != null && _.showDoodle);
              (C(e),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: e
                      ? s._(/*BTDS*/ "Chat wallpaper doodles added")
                      : s._(/*BTDS*/ "Chat wallpaper doodles removed"),
                  }),
                ));
            } else if (_) {
              var t = !_.showDoodle;
              (C(t),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: t
                      ? s._(/*BTDS*/ "Global wallpaper doodles added")
                      : s._(/*BTDS*/ "Global wallpaper doodles removed"),
                  }),
                ));
            }
          }),
          (a[8] = d),
          (a[9] = C),
          (a[10] = _),
          (a[11] = R))
        : (R = a[11]);
      var L = R,
        E;
      a[12] !== d || a[13] !== (_ == null ? void 0 : _.wallpaper)
        ? ((E = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield d == null ? void 0 : d.setChatWallpaper(null),
                yield d == null ? void 0 : d.setShowDoodle(null),
                r("WAWebChatPreferenceCollection").trigger(
                  "wallpaper_preview",
                  _ == null ? void 0 : _.wallpaper,
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[12] = d),
          (a[13] = _ == null ? void 0 : _.wallpaper),
          (a[14] = E))
        : (E = a[14]);
      var k = E,
        I;
      if (
        a[15] !== (d == null ? void 0 : d.showDoodle) ||
        a[16] !== (_ == null ? void 0 : _.showDoodle)
      ) {
        var T;
        ((I =
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
          (T = d == null ? void 0 : d.showDoodle) != null
            ? T
            : _ == null
              ? void 0
              : _.showDoodle),
          (a[15] = d == null ? void 0 : d.showDoodle),
          (a[16] = _ == null ? void 0 : _.showDoodle),
          (a[17] = I));
      } else I = a[17];
      var D = I,
        x;
      if (a[18] !== i || a[19] !== l || a[20] !== f.theme || a[21] !== S) {
        var $;
        (a[23] !== i || a[24] !== f.theme || a[25] !== S
          ? (($ = function (t) {
              var e = S === t;
              return c.jsx(
                h,
                {
                  ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(
                    t,
                    f.theme,
                  ),
                  colorName: o("WAWebWallpaper").getWallpaperColorName(
                    t,
                    f.theme,
                  ),
                  chat: i,
                  colorHex: t,
                  isSelected: e,
                  isDefault: !1,
                },
                t,
              );
            }),
            (a[23] = i),
            (a[24] = f.theme),
            (a[25] = S),
            (a[26] = $))
          : ($ = a[26]),
          (x = l.map($)));
        var P;
        a[27] !== f.theme
          ? ((P = o("WAWebWallpaper").getWallpaperColorAriaLabel(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              f.theme,
            )),
            (a[27] = f.theme),
            (a[28] = P))
          : (P = a[28]);
        var N;
        a[29] !== f.theme
          ? ((N = o("WAWebWallpaper").getWallpaperColorName(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              f.theme,
            )),
            (a[29] = f.theme),
            (a[30] = N))
          : (N = a[30]);
        var M = S === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
          w;
        a[31] !== i || a[32] !== M || a[33] !== P || a[34] !== N
          ? ((w = c.jsx(
              h,
              {
                chat: i,
                ariaLabel: P,
                colorName: N,
                isSelected: M,
                isDefault: !0,
              },
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            )),
            (a[31] = i),
            (a[32] = M),
            (a[33] = P),
            (a[34] = N),
            (a[35] = w))
          : (w = a[35]);
        var A = w;
        x.unshift(A);
        for (var F = 0; F < 2; F++)
          x.push(
            c.jsx(
              "div",
              { className: "x1pigqs1 xqtp20y xx6jrq6" },
              "emptyEl" + F,
            ),
          );
        ((a[18] = i), (a[19] = l), (a[20] = f.theme), (a[21] = S), (a[22] = x));
      } else x = a[22];
      var O;
      a[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = {
            className:
              "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
          }),
          (a[36] = O))
        : (O = a[36]);
      var B = !!D,
        W;
      a[37] !== L || a[38] !== B
        ? ((W = c.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: L,
            checked: B,
            id: "add-doodles",
          })),
          (a[37] = L),
          (a[38] = B),
          (a[39] = W))
        : (W = a[39]);
      var q;
      a[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = c.jsx(o("WAWebText.react").WAWebTextSmall, {
            xstyle: g.checkboxLabel,
            as: "label",
            labelFor: "add-doodles",
            children: s._(/*BTDS*/ "Add WhatsApp doodles"),
          })),
          (a[40] = q))
        : (q = a[40]);
      var U;
      a[41] !== W
        ? ((U = c.jsxs(
            "div",
            babelHelpers.extends({}, O, { children: [W, q] }),
          )),
          (a[41] = W),
          (a[42] = U))
        : (U = a[42]);
      var V = U,
        H;
      a[43] !== d || a[44] !== k
        ? ((H =
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            d != null
              ? c.jsx(o("WAWebFlex.react").FlexRow, {
                  wrap: "wrap",
                  justify: "center",
                  className: (e || (e = r("stylex")))(
                    g.wallpaperUseGlobal,
                    o("WAWebUISpacing").uiPadding.all10,
                    o("WAWebUISpacing").uiMargin.all10,
                  ),
                  children: c.jsx(o("WAWebButton.react").Button, {
                    onClick: k,
                    disabled:
                      (d == null ? void 0 : d.wallpaper) == null &&
                      (d == null ? void 0 : d.showDoodle) == null,
                    children: s._(/*BTDS*/ "Reset to default"),
                  }),
                })
              : null),
          (a[43] = d),
          (a[44] = k),
          (a[45] = H))
        : (H = a[45]);
      var G = H,
        z,
        j;
      a[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "List of colors to set chat wallpaper to")),
          (j = {
            className:
              "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
          }),
          (a[46] = z),
          (a[47] = j))
        : ((z = a[46]), (j = a[47]));
      var K;
      a[48] !== x
        ? ((K = c.jsx(
            "div",
            babelHelpers.extends({ "aria-label": z }, j, { children: x }),
          )),
          (a[48] = x),
          (a[49] = K))
        : (K = a[49]);
      var Q;
      return (
        a[50] !== V || a[51] !== G || a[52] !== K
          ? ((Q = c.jsxs(c.Fragment, { children: [V, K, G] })),
            (a[50] = V),
            (a[51] = G),
            (a[52] = K),
            (a[53] = Q))
          : (Q = a[53]),
        Q
      );
    }
    function C(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.ref,
        i = m(o("WAWebThemeContext").ThemeContext),
        l = t == null;
      return (
        p(function () {
          return (
            o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
            r("WAWebChatPreferenceCollection").trigger(
              "wallpaper_drawer_open",
              l,
            ),
            function () {
              (r("WAWebChatPreferenceCollection").trigger("wallpaper_preview"),
                r("WAWebChatPreferenceCollection").trigger(
                  "wallpaper_drawer_close",
                  l,
                ));
            }
          );
        }, []),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "wallpaper-settings",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Set chat wallpaper"),
              onBack: n,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: c.jsx(y, {
                  chat: t,
                  colors: o("WAWebWallpaper").getWallpaperColors(i.theme),
                  chatPreference: r("WAWebChatPreferenceCollection").get(
                    "defaultPreference",
                  ),
                }),
              }),
            }),
          ],
        })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
