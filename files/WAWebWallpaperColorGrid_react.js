__d(
  "WAWebWallpaperColorGrid.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebCheckBox.react",
    "WAWebPopoverContext.react",
    "WAWebPopoverPosition",
    "WAWebSettingsSyncBridge",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTooltip.react",
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
      p = d.useRef,
      _ = d.useState,
      f = {
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
    function g(t) {
      var a = o("react-compiler-runtime").c(38),
        i = t.chat,
        l = t.colorHex,
        u = t.colorName,
        d = t.isDefault,
        m = _(!1),
        g = m[0],
        h = m[1],
        y;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["wallpaper", "chatThemeId"]), (a[0] = y))
        : (y = a[0]);
      var C = o("useWAWebModelValues").useOptionalModelValues(i, y),
        b = p(null),
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
      a[4] !== i || a[5] !== C || a[6] !== S
        ? ((R = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = S(),
                  n = r("WAWebChatPreferenceCollection").get(
                    "defaultPreference",
                  ),
                  a = t !== (C == null ? void 0 : C.wallpaper),
                  l = (C == null ? void 0 : C.chatThemeId) != null;
                o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
                i != null &&
                C != null &&
                (a || l)
                  ? (yield i.setChatWallpaper(t),
                    l && (yield i.setChatThemeId(null)),
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
          (a[4] = i),
          (a[5] = C),
          (a[6] = S),
          (a[7] = R))
        : (R = a[7]);
      var L = R,
        E;
      a[8] !== S || a[9] !== g
        ? ((E = function (t) {
            g ||
              (h(!0),
              r("WAWebChatPreferenceCollection").trigger(
                "wallpaper_preview",
                S(),
              ));
          }),
          (a[8] = S),
          (a[9] = g),
          (a[10] = E))
        : (E = a[10]);
      var k = E,
        I;
      a[11] !== S || a[12] !== g
        ? ((I = function (t) {
            g ||
              (h(!0),
              r("WAWebChatPreferenceCollection").trigger(
                "wallpaper_preview",
                S(),
              ));
          }),
          (a[11] = S),
          (a[12] = g),
          (a[13] = I))
        : (I = a[13]);
      var T = I,
        D;
      a[14] !== g
        ? ((D = function (t) {
            g &&
              (h(!1),
              r("WAWebChatPreferenceCollection").trigger("wallpaper_preview"));
          }),
          (a[14] = g),
          (a[15] = D))
        : (D = a[15]);
      var x = D,
        $;
      a[16] !== t.isDefault
        ? (($ = t.isDefault
            ? c.jsx("span", {
                className:
                  "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
                "data-testid": void 0,
                children: s._(/*BTDS*/ "Default"),
              })
            : null),
          (a[16] = t.isDefault),
          (a[17] = $))
        : ($ = a[17]);
      var P = $,
        N =
          l != null ? "wallpaper-canvas-color-" + l : "wallpaper-canvas-color",
        M = t.isSelected && f.canvasActive,
        w = t.isSelected && f.canvasActiveBorder,
        A = t.isDefault && f.canvasDefault,
        F;
      if (a[18] !== t.colorHex || a[19] !== M || a[20] !== w || a[21] !== A) {
        var O = [
          f.wallpaperColorCanvas,
          M,
          w,
          A,
          t.colorHex != null && f.canvasBg(t.colorHex),
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ];
        ((F = (e || (e = r("stylex"))).props(O)),
          (a[18] = t.colorHex),
          (a[19] = M),
          (a[20] = w),
          (a[21] = A),
          (a[22] = F));
      } else F = a[22];
      var B;
      a[23] !== t.isDefault
        ? ((B = t.isDefault ? s._(/*BTDS*/ "Default") : void 0),
          (a[23] = t.isDefault),
          (a[24] = B))
        : (B = a[24]);
      var W;
      a[25] !== u
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
          (a[25] = u),
          (a[26] = W))
        : (W = a[26]);
      var q;
      return (
        a[27] !== P ||
        a[28] !== L ||
        a[29] !== T ||
        a[30] !== x ||
        a[31] !== k ||
        a[32] !== t.ariaLabel ||
        a[33] !== F ||
        a[34] !== B ||
        a[35] !== W ||
        a[36] !== N
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
            (a[27] = P),
            (a[28] = L),
            (a[29] = T),
            (a[30] = x),
            (a[31] = k),
            (a[32] = t.ariaLabel),
            (a[33] = F),
            (a[34] = B),
            (a[35] = W),
            (a[36] = N),
            (a[37] = q))
          : (q = a[37]),
        q
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(47),
        n = e.chat,
        r = e.chatPreference,
        a = e.colors,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["wallpaper", "showDoodle", "colorSchemeId", "chatThemeId"]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(n, i),
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["wallpaper", "showDoodle"]), (t[1] = u))
        : (u = t[1]);
      var d = o("useWAWebModelValues").useOptionalModelValues(r, u),
        p = m(o("WAWebThemeContext").ThemeContext),
        _;
      t[2] !== l || t[3] !== d
        ? ((_ = function (t) {
            o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && l
              ? l.setShowDoodle(t)
              : d && d.set("showDoodle", t);
          }),
          (t[2] = l),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var h = o("useWAWebSettingSync").useSettingSync(
          "isDoodleWallpaperEnabled",
          _,
        ),
        y;
      if (
        t[5] !== (l == null ? void 0 : l.wallpaper) ||
        t[6] !== (d == null ? void 0 : d.wallpaper)
      ) {
        var C;
        ((y =
          o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
          (C = l == null ? void 0 : l.wallpaper) != null
            ? C
            : d == null
              ? void 0
              : d.wallpaper),
          (t[5] = l == null ? void 0 : l.wallpaper),
          (t[6] = d == null ? void 0 : d.wallpaper),
          (t[7] = y));
      } else y = t[7];
      var b = y,
        v =
          o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
          (l == null ? void 0 : l.chatThemeId) != null &&
          (b == null || b === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER),
        S = v ? null : b,
        R;
      t[8] !== l || t[9] !== h || t[10] !== d
        ? ((R = function () {
            if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && l) {
              var e =
                l.showDoodle != null
                  ? !l.showDoodle
                  : !(d != null && d.showDoodle);
              (h(e),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: e
                      ? s._(/*BTDS*/ "Chat wallpaper doodles added")
                      : s._(/*BTDS*/ "Chat wallpaper doodles removed"),
                  }),
                ));
            } else if (d) {
              var t = !d.showDoodle;
              (h(t),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: t
                      ? s._(/*BTDS*/ "Global wallpaper doodles added")
                      : s._(/*BTDS*/ "Global wallpaper doodles removed"),
                  }),
                ));
            }
          }),
          (t[8] = l),
          (t[9] = h),
          (t[10] = d),
          (t[11] = R))
        : (R = t[11]);
      var L = R,
        E;
      if (
        t[12] !== (l == null ? void 0 : l.showDoodle) ||
        t[13] !== (d == null ? void 0 : d.showDoodle)
      ) {
        var k;
        ((E =
          o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
          (k = l == null ? void 0 : l.showDoodle) != null
            ? k
            : d == null
              ? void 0
              : d.showDoodle),
          (t[12] = l == null ? void 0 : l.showDoodle),
          (t[13] = d == null ? void 0 : d.showDoodle),
          (t[14] = E));
      } else E = t[14];
      var I = E,
        T;
      if (t[15] !== n || t[16] !== a || t[17] !== p.theme || t[18] !== S) {
        var D;
        (t[20] !== n || t[21] !== p.theme || t[22] !== S
          ? ((D = function (t) {
              var e = S === t;
              return c.jsx(
                g,
                {
                  ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(
                    t,
                    p.theme,
                  ),
                  colorName: o("WAWebWallpaper").getWallpaperColorName(
                    t,
                    p.theme,
                  ),
                  chat: n,
                  colorHex: t,
                  isSelected: e,
                  isDefault: !1,
                },
                t,
              );
            }),
            (t[20] = n),
            (t[21] = p.theme),
            (t[22] = S),
            (t[23] = D))
          : (D = t[23]),
          (T = a.map(D)));
        var x;
        t[24] !== p.theme
          ? ((x = o("WAWebWallpaper").getWallpaperColorAriaLabel(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              p.theme,
            )),
            (t[24] = p.theme),
            (t[25] = x))
          : (x = t[25]);
        var $;
        t[26] !== p.theme
          ? (($ = o("WAWebWallpaper").getWallpaperColorName(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              p.theme,
            )),
            (t[26] = p.theme),
            (t[27] = $))
          : ($ = t[27]);
        var P = S === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
          N;
        t[28] !== n || t[29] !== P || t[30] !== x || t[31] !== $
          ? ((N = c.jsx(
              g,
              {
                chat: n,
                ariaLabel: x,
                colorName: $,
                isSelected: P,
                isDefault: !0,
              },
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            )),
            (t[28] = n),
            (t[29] = P),
            (t[30] = x),
            (t[31] = $),
            (t[32] = N))
          : (N = t[32]);
        var M = N;
        T.unshift(M);
        for (var w = 0; w < 2; w++)
          T.push(
            c.jsx(
              "div",
              { className: "x1pigqs1 xqtp20y xx6jrq6" },
              "emptyEl" + w,
            ),
          );
        ((t[15] = n), (t[16] = a), (t[17] = p.theme), (t[18] = S), (t[19] = T));
      } else T = t[19];
      var A;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = {
            className:
              "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
          }),
          (t[33] = A))
        : (A = t[33]);
      var F = !!I,
        O;
      t[34] !== L || t[35] !== F
        ? ((O = c.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: L,
            checked: F,
            id: "add-doodles",
          })),
          (t[34] = L),
          (t[35] = F),
          (t[36] = O))
        : (O = t[36]);
      var B;
      t[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsx(o("WAWebText.react").WAWebTextSmall, {
            xstyle: f.checkboxLabel,
            as: "label",
            labelFor: "add-doodles",
            children: s._(/*BTDS*/ "Add WhatsApp doodles"),
          })),
          (t[37] = B))
        : (B = t[37]);
      var W;
      t[38] !== O
        ? ((W = c.jsxs(
            "div",
            babelHelpers.extends({}, A, { children: [O, B] }),
          )),
          (t[38] = O),
          (t[39] = W))
        : (W = t[39]);
      var q = W,
        U,
        V;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "List of colors to set chat wallpaper to")),
          (V = {
            className:
              "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
          }),
          (t[40] = U),
          (t[41] = V))
        : ((U = t[40]), (V = t[41]));
      var H;
      t[42] !== T
        ? ((H = c.jsx(
            "div",
            babelHelpers.extends({ "aria-label": U }, V, { children: T }),
          )),
          (t[42] = T),
          (t[43] = H))
        : (H = t[43]);
      var G;
      return (
        t[44] !== q || t[45] !== H
          ? ((G = c.jsxs(c.Fragment, { children: [q, H] })),
            (t[44] = q),
            (t[45] = H),
            (t[46] = G))
          : (G = t[46]),
        G
      );
    }
    l.default = h;
  },
  226,
);
