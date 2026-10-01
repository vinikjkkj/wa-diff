__d(
  "WebBloksTheme",
  ["WebBloksStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = { light: "light", dark: "dark" },
      f = 0,
      g = null;
    function h(e) {
      if (((g = e), !(f > 0))) {
        var t = document.documentElement;
        if (t != null)
          switch ((t.classList.remove(E, k), e)) {
            case "dark":
              t.classList.add(k);
              break;
            case "light":
              t.classList.add(E);
              break;
          }
      }
    }
    var y = {
        getTheme: function () {
          return _.light;
        },
      },
      C = s.createContext(y);
    function b(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        r = e.initialTheme,
        a = r != null ? r : _.light,
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            h(a);
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        d(i, l));
      var u;
      t[3] !== a
        ? ((u = {
            getTheme: function () {
              return a;
            },
          }),
          (t[3] = a),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        m;
      return (
        t[5] !== n || t[6] !== c
          ? ((m = s.jsx(C.Provider, { value: c, children: n })),
            (t[5] = n),
            (t[6] = c),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function v() {
      return c(C);
    }
    function S(e) {
      var t = e != null ? R(e) : null;
      m(
        function () {
          if (t != null) {
            f++;
            var e = document.documentElement;
            e.classList.add(t);
            var n = e.style.backgroundColor;
            return (
              (e.style.backgroundColor = T["screen-wrapper-bg"]),
              function () {
                (e.classList.remove(t), (e.style.backgroundColor = n), f--);
                var r = g;
                f === 0 && r != null && h(r);
              }
            );
          }
        },
        [t],
      );
    }
    function R(e) {
      return e === _.dark ? k : E;
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.theme,
        a;
      t[0] !== r
        ? ((a = {
            getTheme: function () {
              return r;
            },
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = s.jsx(C.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    var E,
      k,
      I = {
        "error-or-destructive": ["rgb(237, 73, 86)", "rgb(237, 73, 86)"],
        "navbar-bg": ["#ffffff", "#000000"],
        "screen-wrapper-bg": ["#ffffff", "#000000"],
        separator: ["rgb(219, 219, 219)", "rgb(54, 54, 54)"],
        "primary-bg": ["#ffffff", "#000000"],
        "primary-text": ["rgb(38, 38, 38)", "rgb(250, 250, 250)"],
        "fds-gray-65": "#A4A7AB",
        "fds-white": "#FFFFFF",
        "bottom-sheet-bg-deemphasized": ["#F0F2F5", "#242526"],
        "fig-blue-tint-90": "#ecf0f7",
        "fig-blue-tint-10": "#3776ff",
        "switch-active": ["hsl(214, 89%, 52%)", "hsl(214, 100%, 59%)"],
        "media-inner-border": [
          "rgba(0, 0, 0, 0.1)",
          "rgba(255, 255, 255, 0.05)",
        ],
        divider: ["#CED0D4", "#3E4042"],
        "always-white": "#ffffff",
        "shadow-5": "rgba(0, 0, 0, 0.5)",
        "fds-animation-move-in": "cubic-bezier(0.17, 0.17, 0, 1)",
        "fds-animation-move-out": "cubic-bezier(0.17, 0.17, 0, 1)",
        "fds-duration-extra-short-in": "200ms",
        "fds-duration-extra-short-out": "150ms",
        "cds-close-handle": "#D1D3D5",
        "cds-overlay-alpha-80": "rgba(28, 43, 51, 0.80)",
        "cds-surface-background": ["#FFFFFF", "#1F1F20"],
      },
      T = D(I);
    function D(e) {
      var t = {},
        n = {},
        r = {};
      Object.entries(e).forEach(function (e) {
        var o = e[0],
          a = e[1],
          i = "--wbloks-" + o;
        ((r[o] = "var(" + i + ")"),
          (t[i] = Array.isArray(a) ? a[0] : a),
          (n[i] = Array.isArray(a) ? a[1] : a));
      });
      var a = o("WebBloksStyle").createStyles({ lightTheme: t, darkTheme: n });
      return ((E = a.lightTheme), (k = a.darkTheme), r);
    }
    ((l.THEME = _),
      (l.WebBloksThemeProvider = b),
      (l.useTheme = v),
      (l.useDocumentThemeOverride = S),
      (l.getThemeCssClass = R),
      (l.WebBloksScopedThemeProvider = L),
      (l.WebBloksThemeVars = T));
  },
  98,
);
