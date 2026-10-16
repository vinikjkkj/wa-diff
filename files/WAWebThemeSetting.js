__d(
  "WAWebThemeSetting",
  [
    "WALogger",
    "WAWebSettingsFBT",
    "WAWebSettingsSyncBridge",
    "WAWebSystemTheme",
    "WAWebThemeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        { value: "light", label: o("WAWebSettingsFBT").themeLightLabel },
        { value: "dark", label: o("WAWebSettingsFBT").themeDarkLabel },
        { value: "system", label: o("WAWebSettingsFBT").themeSystemLabel },
      ],
      u = s.map(function (e) {
        return e.value === "system"
          ? babelHelpers.extends({}, e, {
              label: o("WAWebSettingsFBT").themeSystemShortLabel,
            })
          : e;
      });
    function c(e) {
      var t = e.systemThemeMode,
        n = e.theme;
      return t ? "system" : n;
    }
    function d(e, t) {
      (t === "system"
        ? (e.setSystemThemeMode(!0),
          e.setTheme(r("WAWebSystemTheme").getCurrentTheme()))
        : (e.setSystemThemeMode(!1), e.setTheme(t)),
        m(t));
    }
    function m(t) {
      var n =
        t === "light"
          ? o("WAWebThemeType").ThemesSettingValue.Light
          : t === "dark"
            ? o("WAWebThemeType").ThemesSettingValue.Dark
            : t === "system"
              ? o("WAWebThemeType").ThemesSettingValue.SystemDefault
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
      o("WAWebSettingsSyncBridge")
        .sendSettingChange("appTheme", n, "app")
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[settings-sync] Error sending mutation for appTheme: ",
                  "",
                ])),
              t,
            )
            .tags("settings-sync");
        });
    }
    ((l.THEME_CHOICES = s),
      (l.APPEARANCE_THEME_CHOICES = u),
      (l.getThemeChoice = c),
      (l.applyThemeChoice = d));
  },
  98,
);
