__d(
  "WebBloksTheme",
  ["WebBloksStyle", "react"],
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
      var t = e.children,
        n = e.initialTheme,
        r = n != null ? n : _.light;
      d(
        function () {
          h(r);
        },
        [r],
      );
      var o = p(
        function () {
          return {
            getTheme: function () {
              return r;
            },
          };
        },
        [r],
      );
      return s.jsx(C.Provider, { value: o, children: t });
    }
    b.displayName = b.name + " [from " + i.id + "]";
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
      var t = e.children,
        n = e.theme,
        r = p(
          function () {
            return {
              getTheme: function () {
                return n;
              },
            };
          },
          [n],
        );
      return s.jsx(C.Provider, { value: r, children: t });
    }
    L.displayName = L.name + " [from " + i.id + "]";
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
        "cds-overlay-on-surface": "rgba(0, 0, 0, 0.6)",
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
