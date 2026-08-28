__d(
  "FBWebBloksFullscreenContainer",
  [
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksNavbarBackButton",
    "WebBloksStyle",
    "WebBloksTheme",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.containerConfig,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderNode,
        l = o("WebBloksEnvironmentContext").useDataBloksName(),
        u = r.navbar,
        m;
      t[0] !== u || t[1] !== i
        ? ((m = u != null ? i(u) : s.jsx(c, {})),
          (t[0] = u),
          (t[1] = i),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== l
        ? ((_ = l("bk.data.screen.containerconfig.fullscreen.Fb")),
          (t[3] = l),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== n
        ? ((f = s.jsx("div", { className: d.content, children: n })),
          (t[5] = n),
          (t[6] = f))
        : (f = t[6]);
      var g;
      return (
        t[7] !== p || t[8] !== _ || t[9] !== f
          ? ((g = s.jsxs(
              "div",
              babelHelpers.extends({}, _, {
                className: d.root,
                children: [p, f],
              }),
            )),
            (t[7] = p),
            (t[8] = _),
            (t[9] = f),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = o("WebBloksComponentContext").useWebBloksContext(),
        n = t.objectSet,
        a = n.navigationManager,
        i = a.getScreenCount() > 1,
        l;
      e[0] !== a || e[1] !== i
        ? ((l = i
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return a.pop();
                },
              })
            : null),
          (e[0] = a),
          (e[1] = i),
          (e[2] = l))
        : (l = e[2]);
      var u;
      return (
        e[3] !== l
          ? ((u = s.jsx("div", { className: d.defaultNavbar, children: l })),
            (e[3] = l),
            (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    var d = o("WebBloksStyle").createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      },
      content: { flexGrow: 1, overflow: "auto" },
      defaultNavbar: {
        borderBottomStyle: "solid",
        borderBottomColor: o("WebBloksTheme").WebBloksThemeVars.separator,
        borderBottomWidth: 1,
        boxSizing: "border-box",
        display: "flex",
        height: 52,
        padding: 8,
      },
    });
    l.default = u;
  },
  98,
);
