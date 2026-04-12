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
      var a = t.chat,
        i = t.colorHex,
        l = t.colorName,
        u = t.isDefault,
        d = f(!1),
        m = d[0],
        p = d[1],
        h = o("useWAWebModelValues").useOptionalModelValues(a, ["wallpaper"]),
        y = _(null),
        C = function () {
          return u ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : i;
        },
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = C(),
              n = r("WAWebChatPreferenceCollection").get("defaultPreference");
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            h != null &&
            t !== h.wallpaper
              ? (yield h.setChatWallpaper(t),
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
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        v = function (t) {
          m ||
            (p(!0),
            r("WAWebChatPreferenceCollection").trigger(
              "wallpaper_preview",
              C(),
            ));
        },
        S = function (t) {
          m ||
            (p(!0),
            r("WAWebChatPreferenceCollection").trigger(
              "wallpaper_preview",
              C(),
            ));
        },
        R = function (t) {
          m &&
            (p(!1),
            r("WAWebChatPreferenceCollection").trigger("wallpaper_preview"));
        },
        L = t.isDefault
          ? c.jsx("span", {
              className:
                "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
              "data-testid": void 0,
              children: s._(/*BTDS*/ "Default"),
            })
          : null,
        E =
          i != null ? "wallpaper-canvas-color-" + i : "wallpaper-canvas-color",
        k = [
          g.wallpaperColorCanvas,
          t.isSelected && g.canvasActive,
          t.isSelected && g.canvasActiveBorder,
          t.isDefault && g.canvasDefault,
          t.colorHex != null && g.canvasBg(t.colorHex),
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ];
      return c.jsxs(
        "button",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(k), {
          ref: y,
          onMouseOver: v,
          onFocus: v,
          tabIndex: 0,
          onMouseEnter: S,
          onMouseLeave: R,
          onClick: b,
          "data-testid": void 0,
          "aria-label": t.ariaLabel,
          title: t.isDefault ? s._(/*BTDS*/ "Default") : void 0,
          children: [
            L,
            c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
              targetRef: y,
              popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                targetRef: "context",
                alignment: o("WAWebPopoverPosition").PopoverAlignment.Center,
                position: o("WAWebPopoverPosition").PopoverPosition.Bottom,
                showOnFocus: !0,
                enableEnterTransition: !1,
                children: l,
              }),
            }),
          ],
        }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var a,
        i,
        l = t.chat,
        u = t.colors,
        d = o("useWAWebModelValues").useOptionalModelValues(l, [
          "wallpaper",
          "showDoodle",
        ]),
        p = o("useWAWebModelValues").useOptionalModelValues(t.chatPreference, [
          "wallpaper",
          "showDoodle",
        ]),
        _ = m(o("WAWebThemeContext").ThemeContext),
        f = o("useWAWebSettingSync").useSettingSync(
          "isDoodleWallpaperEnabled",
          function (e) {
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            d
              ? d.setShowDoodle(e)
              : p && p.set("showDoodle", e);
          },
        ),
        y =
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
          (a = d == null ? void 0 : d.wallpaper) != null
            ? a
            : p == null
              ? void 0
              : p.wallpaper,
        C = function () {
          if (
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
            d
          ) {
            var e =
              d.showDoodle != null
                ? !d.showDoodle
                : !(p != null && p.showDoodle);
            (f(e),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: e
                    ? s._(/*BTDS*/ "Chat wallpaper doodles added")
                    : s._(/*BTDS*/ "Chat wallpaper doodles removed"),
                }),
              ));
          } else if (p) {
            var t = !p.showDoodle;
            (f(t),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: t
                    ? s._(/*BTDS*/ "Global wallpaper doodles added")
                    : s._(/*BTDS*/ "Global wallpaper doodles removed"),
                }),
              ));
          }
        },
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield d == null ? void 0 : d.setChatWallpaper(null),
              yield d == null ? void 0 : d.setShowDoodle(null),
              r("WAWebChatPreferenceCollection").trigger(
                "wallpaper_preview",
                p == null ? void 0 : p.wallpaper,
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v =
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
          (i = d == null ? void 0 : d.showDoodle) != null
            ? i
            : p == null
              ? void 0
              : p.showDoodle,
        S = u.map(function (e) {
          var t = y === e;
          return c.jsx(
            h,
            {
              ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(
                e,
                _.theme,
              ),
              colorName: o("WAWebWallpaper").getWallpaperColorName(e, _.theme),
              chat: l,
              colorHex: e,
              isSelected: t,
              isDefault: !1,
            },
            e,
          );
        }),
        R = c.jsx(
          h,
          {
            chat: l,
            ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              _.theme,
            ),
            colorName: o("WAWebWallpaper").getWallpaperColorName(
              o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              _.theme,
            ),
            isSelected: y === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            isDefault: !0,
          },
          o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
        );
      S.unshift(R);
      for (var L = 0; L < 2; L++)
        S.push(
          c.jsx(
            "div",
            { className: "x1pigqs1 xqtp20y xx6jrq6" },
            "emptyEl" + L,
          ),
        );
      var E = c.jsxs("div", {
          className:
            "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
          children: [
            c.jsx(o("WAWebCheckBox.react").CheckBox, {
              onChange: C,
              checked: !!v,
              id: "add-doodles",
            }),
            c.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: g.checkboxLabel,
              as: "label",
              labelFor: "add-doodles",
              children: s._(/*BTDS*/ "Add WhatsApp doodles"),
            }),
          ],
        }),
        k =
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
                  onClick: b,
                  disabled:
                    (d == null ? void 0 : d.wallpaper) == null &&
                    (d == null ? void 0 : d.showDoodle) == null,
                  children: s._(/*BTDS*/ "Reset to default"),
                }),
              })
            : null;
      return c.jsxs(c.Fragment, {
        children: [
          E,
          c.jsx("div", {
            "aria-label": s._(
              /*BTDS*/ "List of colors to set chat wallpaper to",
            ),
            className:
              "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
            children: S,
          }),
          k,
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
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
