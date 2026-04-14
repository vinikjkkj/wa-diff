__d(
  "WAWebThemeCommandPalettePlugin",
  [
    "WAWebCommandPaletteController",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSettingsThemeIcon.react",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c() {
      var e = o("WAWebCommandPaletteController").useCommandPalette(),
        t = u(o("WAWebThemeContext").ThemeContext),
        n = t.systemThemeMode ? "system" : t.theme,
        a = function (o) {
          (o === "system"
            ? (t.setSystemThemeMode(!0),
              t.setTheme(r("WAWebSystemTheme").getCurrentTheme()))
            : (t.setSystemThemeMode(!1), t.setTheme(o)),
            e.closeModal());
        },
        i = s.jsx(
          o("WAWebMenuItems.react").SelectMenuItem,
          {
            optionId: "dark",
            primary: "Dark",
            onSelect: function () {
              return a("dark");
            },
          },
          "dark",
        ),
        l = s.jsx(
          o("WAWebMenuItems.react").SelectMenuItem,
          {
            optionId: "light",
            primary: "Light",
            onSelect: function () {
              return a("light");
            },
          },
          "light",
        ),
        c = s.jsx(
          o("WAWebMenuItems.react").SelectMenuItem,
          {
            optionId: "system",
            primary: "System",
            onSelect: function () {
              return a("system");
            },
          },
          "system",
        ),
        d = [];
      return (
        t.theme === "light" ? (d = [i, l, c]) : (d = [l, i, c]),
        s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
          forceSelection: !0,
          children: s.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
            initialSelection: n,
            children: d.map(function (e) {
              return e;
            }),
          }),
        })
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      plugin: {
        id: "ThemeCommandPalettePlugin",
        placeholder: "Choose a theme",
        shortName: s.jsx(o("WAWebSettingsThemeIcon.react").SettingsThemeIcon, {
          width: 16,
          height: 16,
        }),
        Component: c,
      },
      trigger: "/theme",
      doc: {
        name: "App Theme",
        description: "Switch between the light and dark themes",
      },
    };
    l.ThemeCommandPalettePlugin = d;
  },
  98,
);
