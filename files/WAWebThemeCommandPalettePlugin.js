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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c() {
      var e = o("react-compiler-runtime").c(22),
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n = u(o("WAWebThemeContext").ThemeContext),
        a = n.systemThemeMode ? "system" : n.theme,
        i;
      e[0] !== t || e[1] !== n
        ? ((i = function (o) {
            (o === "system"
              ? (n.setSystemThemeMode(!0),
                n.setTheme(r("WAWebSystemTheme").getCurrentTheme()))
              : (n.setSystemThemeMode(!1), n.setTheme(o)),
              t.closeModal());
          }),
          (e[0] = t),
          (e[1] = n),
          (e[2] = i))
        : (i = e[2]);
      var l = i,
        c;
      e[3] !== l
        ? ((c = s.jsx(
            o("WAWebMenuItems.react").SelectMenuItem,
            {
              optionId: "dark",
              primary: "Dark",
              onSelect: function () {
                return l("dark");
              },
            },
            "dark",
          )),
          (e[3] = l),
          (e[4] = c))
        : (c = e[4]);
      var m = c,
        p;
      e[5] !== l
        ? ((p = s.jsx(
            o("WAWebMenuItems.react").SelectMenuItem,
            {
              optionId: "light",
              primary: "Light",
              onSelect: function () {
                return l("light");
              },
            },
            "light",
          )),
          (e[5] = l),
          (e[6] = p))
        : (p = e[6]);
      var _ = p,
        f;
      e[7] !== l
        ? ((f = s.jsx(
            o("WAWebMenuItems.react").SelectMenuItem,
            {
              optionId: "system",
              primary: "System",
              onSelect: function () {
                return l("system");
              },
            },
            "system",
          )),
          (e[7] = l),
          (e[8] = f))
        : (f = e[8]);
      var g = f,
        h;
      if (n.theme === "light") {
        var y;
        (e[9] !== m || e[10] !== _ || e[11] !== g
          ? ((y = [m, _, g]), (e[9] = m), (e[10] = _), (e[11] = g), (e[12] = y))
          : (y = e[12]),
          (h = y));
      } else {
        var C;
        (e[13] !== m || e[14] !== _ || e[15] !== g
          ? ((C = [_, m, g]),
            (e[13] = m),
            (e[14] = _),
            (e[15] = g),
            (e[16] = C))
          : (C = e[16]),
          (h = C));
      }
      var b;
      e[17] !== h ? ((b = h.map(d)), (e[17] = h), (e[18] = b)) : (b = e[18]);
      var v;
      return (
        e[19] !== a || e[20] !== b
          ? ((v = s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: s.jsx(o("WAWebMenuItems.react").SelectMenuItemGroup, {
                initialSelection: a,
                children: b,
              }),
            })),
            (e[19] = a),
            (e[20] = b),
            (e[21] = v))
          : (v = e[21]),
        v
      );
    }
    function d(e) {
      return e;
    }
    var m = {
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
    l.ThemeCommandPalettePlugin = m;
  },
  98,
);
