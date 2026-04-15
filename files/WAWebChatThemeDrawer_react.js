__d(
  "WAWebChatThemeDrawer.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGrid.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebSettingsSyncBridge",
    "WAWebStockWallpaper",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUseChatTheme",
    "WAWebWallpaper",
    "WAWebWallpaperColorGrid.react",
    "WDSIconIcPalette.react",
    "WDSIconIcWallpaper.react",
    "WDSIconWdsIcDoodlePattern.react",
    "WDSSwitch.react",
    "WDSText.react",
    "react",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = { customizeSection: { paddingBottom: "xvpt6g3", $$css: !0 } };
    function f(e) {
      var t,
        n,
        a = e.chat,
        i = a === void 0 ? null : a,
        l = e.onClose,
        c = e.ref,
        f = i == null,
        g = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light",
        h = p("main"),
        y = h[0],
        C = h[1],
        b = o("WAWebThemeContext").useTheme(),
        v = b.theme,
        S = r("WAWebChatPreferenceCollection").get("defaultPreference"),
        R = o("useWAWebModelValues").useOptionalModelValues(i, [
          "colorSchemeId",
          "showDoodle",
        ]),
        L = o("useWAWebModelValues").useOptionalModelValues(S, [
          "colorSchemeId",
          "showDoodle",
        ]),
        E = f ? L : R,
        k = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: !0,
        }),
        I =
          (t =
            (n = E == null ? void 0 : E.colorSchemeId) != null
              ? n
              : k == null
                ? void 0
                : k.Theme.Default) != null
            ? t
            : null;
      d(function () {
        return (
          f && o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
          r("WAWebChatPreferenceCollection").trigger(
            "chat_theme_drawer_open",
            f,
          ),
          function () {
            (r("WAWebChatPreferenceCollection").trigger("chat_theme_preview"),
              r("WAWebChatPreferenceCollection").trigger("chat_color_preview"),
              r("WAWebChatPreferenceCollection").trigger(
                "chat_theme_drawer_close",
                f,
              ));
          }
        );
      }, []);
      var T = i == null ? void 0 : i.id.toJid(),
        D = o("useWAWebSettingSync").useSettingSync(
          "colorSchemeId",
          function (e) {
            i != null
              ? i.setColorSchemeId(e)
              : S == null || S.set("colorSchemeId", e);
          },
          T,
        ),
        x = o("useWAWebSettingSync").useSettingSync(
          "chatThemeId",
          function (e) {
            i != null
              ? i.setChatThemeId(e)
              : S == null || S.set("chatThemeId", e);
          },
          T,
        ),
        $ = function () {
          i != null
            ? i.setChatWallpaper(o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER)
            : S != null &&
              (S.set("wallpaper", o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER),
              o("WAWebSettingsSyncBridge").sendSettingChange(
                "wallpaperId",
                o("WAWebWallpaper").getWallpaperId(
                  o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                ),
              ));
        },
        P = function (t) {
          if (k != null) {
            var e = t === k.Theme.Default;
            (D(e ? null : t),
              x(e ? null : k.getBaseTheme(t)),
              $(),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: e
                    ? s._(/*BTDS*/ "Chat theme reset")
                    : s._(/*BTDS*/ "Chat theme set"),
                }),
              ));
          }
        },
        N = function (t) {
          if (k != null) {
            var e = t === k.Theme.Default;
            (D(e ? null : t),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: e
                    ? s._(/*BTDS*/ "Chat color reset")
                    : s._(/*BTDS*/ "Chat color set"),
                }),
              ));
          }
        },
        M = function (t) {
          k != null &&
            (x(k.getBaseTheme(t)),
            $(),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Wallpaper set"),
              }),
            ));
        },
        w = function (t) {
          r("WAWebChatPreferenceCollection").trigger("chat_theme_preview", t);
        },
        A = function (t) {
          r("WAWebChatPreferenceCollection").trigger("chat_color_preview", t);
        },
        F = function (t) {
          if (t != null && k != null) {
            var e = k.getBaseTheme(t);
            r("WAWebChatPreferenceCollection").trigger(
              "stock_wallpaper_preview",
              e != null ? e : void 0,
            );
          } else
            r("WAWebChatPreferenceCollection").trigger(
              "stock_wallpaper_preview",
            );
        },
        O = (E == null ? void 0 : E.showDoodle) !== !1,
        B = function () {
          if (i != null) i.setShowDoodle(!O);
          else if (S != null) {
            var e = !O;
            (S.set("showDoodle", e),
              o("WAWebSettingsSyncBridge").sendSettingChange(
                "isDoodleWallpaperEnabled",
                e,
              ));
          }
        },
        W = k != null ? [k.Theme.Default].concat(k.getAllColorSchemes()) : [],
        q = m(function () {
          return new Set(
            o("WAWebStockWallpaper")
              .getThemesWithStockWallpapers()
              .map(function (e) {
                return e;
              }),
          );
        }, []),
        U =
          k != null
            ? [k.Theme.Default].concat(
                k.getAllColorSchemes().filter(function (e) {
                  var t = k.getBaseTheme(e);
                  return t == null || !q.has(t);
                }),
              )
            : [],
        V =
          k != null
            ? o("WAWebStockWallpaper").getThemesWithStockWallpapers()
            : [],
        H = s._(/*BTDS*/ "Set a color"),
        G =
          y === "main"
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                    title: s._(/*BTDS*/ "Chat theme"),
                    onBack: l,
                    focusBackOrCancel: !0,
                  }),
                  u.jsxs(r("WAWebDrawerBody.react"), {
                    children: [
                      u.jsxs(r("WAWebDrawerSection.react"), {
                        animation: !1,
                        theme: "full-height",
                        title: s._(/*BTDS*/ "Themes"),
                        children: [
                          u.jsx(r("WAWebChatThemeGrid.react"), {
                            compact: !0,
                            currentThemeId: I,
                            onSelect: P,
                            onPreview: w,
                            themes: U,
                            themeMode: g,
                          }),
                          u.jsx(r("WAWebChatThemeGrid.react"), {
                            compact: !0,
                            currentThemeId: I,
                            onSelect: P,
                            onPreview: w,
                            themes: V,
                            themeMode: g,
                          }),
                          u.jsx("div", {
                            className: "x1phvje8 xcldk2z xscbp6u",
                            children: u.jsx(r("WDSText.react"), {
                              type: "Body3",
                              colorName: "contentDeemphasized",
                              children: s._(
                                /*BTDS*/ "The chat colour and wallpaper will both change.",
                              ),
                            }),
                          }),
                          u.jsx(
                            o("WAWebChatInfoDrawerRow.react")
                              .ChatInfoDrawerRowRefreshed,
                            {
                              testid: void 0,
                              icon: u.jsx(
                                r("WDSIconWdsIcDoodlePattern.react"),
                                {},
                              ),
                              onClick: B,
                              side: u.jsx(r("WDSSwitch.react"), {
                                tabIndex: -1,
                                value: O,
                                "aria-label": s
                                  ._(/*BTDS*/ "WhatsApp doodles")
                                  .toString(),
                              }),
                              title: u.jsx(
                                o("WAWebChatInfoDrawerRow.react")
                                  .DrawerRowTitleRefreshed,
                                { title: s._(/*BTDS*/ "WhatsApp doodles") },
                              ),
                            },
                          ),
                        ],
                      }),
                      u.jsxs(r("WAWebDrawerSection.react"), {
                        animation: !1,
                        theme: "full-height",
                        xstyle: _.customizeSection,
                        title: s._(/*BTDS*/ "Customize"),
                        children: [
                          u.jsx(
                            o("WAWebChatInfoDrawerRow.react")
                              .ChatInfoDrawerRowRefreshed,
                            {
                              testid: void 0,
                              icon: u.jsx(r("WDSIconIcPalette.react"), {}),
                              onClick: function () {
                                (w(null), C("color"));
                              },
                              title: u.jsx(
                                o("WAWebChatInfoDrawerRow.react")
                                  .DrawerRowTitleRefreshed,
                                { title: s._(/*BTDS*/ "Chat color") },
                              ),
                            },
                          ),
                          u.jsx(
                            o("WAWebChatInfoDrawerRow.react")
                              .ChatInfoDrawerRowRefreshed,
                            {
                              testid: void 0,
                              icon: u.jsx(r("WDSIconIcWallpaper.react"), {}),
                              onClick: function () {
                                (w(null), C("wallpaper"));
                              },
                              title: u.jsx(
                                o("WAWebChatInfoDrawerRow.react")
                                  .DrawerRowTitleRefreshed,
                                { title: s._(/*BTDS*/ "Wallpaper") },
                              ),
                            },
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : y === "color"
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                      type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                        .SMALL,
                      title: s._(/*BTDS*/ "Chat color"),
                      onBack: function () {
                        (A(null), C("main"));
                      },
                      focusBackOrCancel: !0,
                    }),
                    u.jsx(r("WAWebDrawerBody.react"), {
                      children: u.jsx(r("WAWebDrawerSection.react"), {
                        animation: !1,
                        theme: "full-height",
                        children: u.jsx(r("WAWebChatThemeGrid.react"), {
                          currentThemeId: I,
                          onSelect: N,
                          onPreview: A,
                          themes: W,
                          themeMode: g,
                          variant: "color",
                        }),
                      }),
                    }),
                  ],
                })
              : y === "wallpaper"
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                        type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                          .SMALL,
                        title: s._(/*BTDS*/ "Wallpaper"),
                        onBack: function () {
                          (F(null), C("main"));
                        },
                        focusBackOrCancel: !0,
                      }),
                      u.jsx(r("WAWebDrawerBody.react"), {
                        children: u.jsxs(r("WAWebDrawerSection.react"), {
                          animation: !1,
                          theme: "full-height",
                          children: [
                            u.jsx(
                              o("WAWebChatInfoDrawerRow.react")
                                .ChatInfoDrawerRowRefreshed,
                              {
                                testid: void 0,
                                icon: u.jsx(r("WDSIconIcPalette.react"), {}),
                                onClick: function () {
                                  return C("solidColor");
                                },
                                title: u.jsx(
                                  o("WAWebChatInfoDrawerRow.react")
                                    .DrawerRowTitleRefreshed,
                                  { title: H },
                                ),
                              },
                            ),
                            u.jsx(r("WAWebChatThemeGrid.react"), {
                              currentThemeId: I,
                              onSelect: M,
                              onPreview: F,
                              themes: V,
                              themeMode: g,
                              variant: "wallpaper",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : y === "solidColor"
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                          type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                            .SMALL,
                          title: H,
                          onBack: function () {
                            return C("wallpaper");
                          },
                          focusBackOrCancel: !0,
                        }),
                        u.jsx(r("WAWebDrawerBody.react"), {
                          children: u.jsx(r("WAWebDrawerSection.react"), {
                            animation: !1,
                            theme: "full-height",
                            children: u.jsx(
                              r("WAWebWallpaperColorGrid.react"),
                              {
                                chat: i,
                                colors:
                                  o("WAWebWallpaper").getWallpaperColors(v),
                                chatPreference: r(
                                  "WAWebChatPreferenceCollection",
                                ).get("defaultPreference"),
                              },
                            ),
                          }),
                        }),
                      ],
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          y,
                      );
                    })();
      return u.jsx(r("WAWebDrawer.react"), {
        ref: c,
        testid: void 0,
        children: G,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
