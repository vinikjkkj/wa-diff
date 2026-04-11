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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(14),
        t = d(o("WAWebThemeContext").ThemeContext),
        n = m(t.systemThemeMode ? "system" : t.theme),
        a = n[0],
        i = n[1],
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            i(t);
          }),
          (e[0] = l))
        : (l = e[0]);
      var s = l,
        c;
      e[1] !== t || e[2] !== a
        ? ((c = function () {
            (a === "system"
              ? (t.setSystemThemeMode(!0),
                t.setTheme(r("WAWebSystemTheme").getCurrentTheme()))
              : (t.setSystemThemeMode(!1), t.setTheme(a)),
              g(a),
              o("WAWebModalManager").ModalManager.close());
          }),
          (e[1] = t),
          (e[2] = a),
          (e[3] = c))
        : (c = e[3]);
      var _ = c,
        h = f,
        y;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = p.map(function (e) {
            var t = e.label,
              n = e.value;
            return {
              value: n,
              label: t(),
              onChange: function () {
                return s(n);
              },
            };
          })),
          (e[4] = y))
        : (y = e[4]);
      var C;
      e[5] !== a
        ? ((C = u.jsx(o("WAWebRadio.react").RadioGroup, {
            name: "theme",
            theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
            checkedValue: a,
            options: y,
          })),
          (e[5] = a),
          (e[6] = C))
        : (C = e[6]);
      var b = C,
        v,
        S;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "theme" }),
          (S = o("WAWebSettingsFBT").themeTitle()),
          (e[7] = v),
          (e[8] = S))
        : ((v = e[7]), (S = e[8]));
      var R;
      e[9] !== b
        ? ((R = u.jsx("form", { children: u.jsx("ol", { children: b }) })),
          (e[9] = b),
          (e[10] = R))
        : (R = e[10]);
      var L;
      return (
        e[11] !== _ || e[12] !== R
          ? ((L = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: v,
              title: S,
              onOK: _,
              onCancel: h,
              children: R,
            })),
            (e[11] = _),
            (e[12] = R),
            (e[13] = L))
          : (L = e[13]),
        L
      );
    }
    function f() {
      o("WAWebModalManager").ModalManager.close();
    }
    function g(t) {
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
