__d(
  "WAWebSettingsSyncListener.react",
  [
    "WALogger",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceModel",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebSettingsSyncEventEmitter",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WAWebThemeType",
    "WAWebWallpaper",
    "asyncToGeneratorRuntime",
    "cr:12509",
    "cr:13156",
    "getErrorSafe",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = (S || (S = o("react"))).useContext,
      L = (e = n("cr:12509")) != null ? e : {},
      E = L.AllowedZoomLevel,
      k = (s = n("cr:13156")) != null ? s : {},
      I = k.WAWebScalingControlManager;
    function T() {
      var e,
        t,
        a = R(o("WAWebThemeContext").ThemeContext),
        i = r("useWAWebDebouncedCallback")(function (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] Applying theme value: ",
                "",
              ])),
            e,
          );
          var t = o("WAWebThemeType").ThemesSettingValue.cast(e);
          if (t == null) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Invalid theme value: ",
                    "",
                  ])),
                e,
              )
              .tags("settings-sync");
            return;
          }
          e: {
            if (t === o("WAWebThemeType").ThemesSettingValue.SystemDefault) {
              (a.setSystemThemeMode(!0),
                a.setTheme(r("WAWebSystemTheme").getCurrentTheme()));
              break e;
            }
            if (t === o("WAWebThemeType").ThemesSettingValue.Light) {
              (a.setSystemThemeMode(!1), a.setTheme("light"));
              break e;
            }
            if (t === o("WAWebThemeType").ThemesSettingValue.Dark) {
              (a.setSystemThemeMode(!1), a.setTheme("dark"));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] Successfully applied theme: ",
                "",
              ])),
            t,
          );
        }, 1e3);
      ((t = o("useWAWebListener")).useListener(
        (e = r("WAWebSettingsSyncEventEmitter")),
        "applyTheme",
        i,
      ),
        t.useListener(e, "applyWallpaper", function (e) {
          try {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[settings-sync] Applying wallpaper ID: ",
                  "",
                ])),
              e,
            );
            var t = r("WAWebChatPreferenceCollection").get(
              o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
            );
            t
              ? (t.set(
                  "wallpaper",
                  o("WAWebWallpaper").getWallpaperColor(e, a.theme),
                ),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Successfully applied wallpaper: ",
                      "",
                    ])),
                  e,
                ))
              : o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] default chat pref not found for wallpaper",
                      ])),
                  )
                  .tags("settings-sync");
          } catch (t) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Error applying wallpaper ",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .tags("settings-sync");
          }
        }));
      var l = r("useWAWebDebouncedCallback")(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Applying language: ",
                    "",
                  ])),
                e,
              ),
                e !== r("WAWebL10N").getLocale() &&
                  (yield r("WAWebL10N").setLocale(
                    e,
                    o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
                    !1,
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Successfully applied language: ",
                        "",
                      ])),
                    e,
                  )));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Error applying language ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .tags("settings-sync");
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        1e3,
      );
      t.useListener(e, "applyLanguage", l);
      var s = r("useWAWebDebouncedCallback")(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Applying zoom value: ",
                    "",
                  ])),
                e,
              );
              var t = E == null ? void 0 : E.cast(e / 100);
              t &&
                (yield I == null ? void 0 : I.setZoomLevel(t),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Successfully applied zoom: ",
                      "",
                    ])),
                  t,
                ));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Error applying zoom ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .tags("settings-sync");
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        1e3,
      );
      t.useListener(e, "applyZoom", s);
    }
    l.useSettingsSyncListener = T;
  },
  98,
);
