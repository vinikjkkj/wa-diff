__d(
  "WAWebThemePopup.react",
  [
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebRadio.react",
    "WAWebSettingsFBT",
    "WAWebSettingsSyncBridge",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WAWebThemeType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useState,
      p = [
        { value: "light", label: o("WAWebSettingsFBT").themeLightLabel },
        { value: "dark", label: o("WAWebSettingsFBT").themeDarkLabel },
        { value: "system", label: o("WAWebSettingsFBT").themeSystemLabel },
      ];
    function _() {
      var e = d(o("WAWebThemeContext").ThemeContext),
        t = m(e.systemThemeMode ? "system" : e.theme),
        n = t[0],
        a = t[1],
        i = function (t) {
          a(t);
        },
        l = function () {
          (n === "system"
            ? (e.setSystemThemeMode(!0),
              e.setTheme(r("WAWebSystemTheme").getCurrentTheme()))
            : (e.setSystemThemeMode(!1), e.setTheme(n)),
            f(n),
            o("WAWebModalManager").ModalManager.close());
        },
        s = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        c = u.jsx(o("WAWebRadio.react").RadioGroup, {
          name: "theme",
          theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
          checkedValue: n,
          options: p.map(function (e) {
            var t = e.label,
              n = e.value;
            return {
              value: n,
              label: t(),
              onChange: function () {
                return i(n);
              },
            };
          }),
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "theme" },
        title: o("WAWebSettingsFBT").themeTitle(),
        onOK: l,
        onCancel: s,
        children: u.jsx("form", { children: u.jsx("ol", { children: c }) }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
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
    l.default = _;
  },
  98,
);
