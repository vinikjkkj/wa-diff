__d(
  "FBWebBloksFullScreenNavbar",
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
      s = e || (e = o("react")),
      u = e.useMemo,
      c = "-",
      d = ".",
      m = "0";
    function p(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l = a.renderNode,
        u = o("WebBloksEnvironmentContext").useDataBloksName(),
        p = i.navigationManager,
        f;
      t[0] !== n ? ((f = n.get(c)), (t[0] = n), (t[1] = f)) : (f = t[1]);
      var g = f,
        h;
      t[2] !== n ? ((h = n.get(d)), (t[2] = n), (t[3] = h)) : (h = t[3]);
      var y = h,
        C;
      t[4] !== n ? ((C = n.get(m)), (t[4] = n), (t[5] = C)) : (C = t[5]);
      var b = C,
        v;
      if (t[6] !== l || t[7] !== y || t[8] !== b) {
        var S = [],
          R;
        t[10] !== l || t[11] !== y
          ? ((R = y != null ? l(y) : null),
            (t[10] = l),
            (t[11] = y),
            (t[12] = R))
          : (R = t[12]);
        var L = R,
          E;
        t[13] !== b
          ? ((E = b != null ? b : []), (t[13] = b), (t[14] = E))
          : (E = t[14]);
        for (var k of E) S.push(l(k));
        ((v = { titleBloksNode: L, trailingButtons: S }),
          (t[6] = l),
          (t[7] = y),
          (t[8] = b),
          (t[9] = v));
      } else v = t[9];
      var I = v,
        T = I.titleBloksNode,
        D = I.trailingButtons,
        x = p.getScreenCount() > 1,
        $ = x && D.length === 0,
        P;
      t[15] !== u || t[16] !== n.styleId
        ? ((P = u(n.styleId)), (t[15] = u), (t[16] = n.styleId), (t[17] = P))
        : (P = t[17]);
      var N = $ ? _.titleContainerMargin : null,
        M;
      t[18] !== N
        ? ((M = o("WebBloksStyle").classNames(_.titleContainer, N)),
          (t[18] = N),
          (t[19] = M))
        : (M = t[19]);
      var w;
      t[20] !== p || t[21] !== x
        ? ((w = x
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return p.pop();
                },
              })
            : null),
          (t[20] = p),
          (t[21] = x),
          (t[22] = w))
        : (w = t[22]);
      var A = T != null ? T : g,
        F;
      t[23] !== A
        ? ((F = s.jsx("div", { className: _.title, children: A })),
          (t[23] = A),
          (t[24] = F))
        : (F = t[24]);
      var O;
      t[25] !== F || t[26] !== M || t[27] !== w
        ? ((O = s.jsxs("div", { className: M, children: [w, F] })),
          (t[25] = F),
          (t[26] = M),
          (t[27] = w),
          (t[28] = O))
        : (O = t[28]);
      var B;
      t[29] !== D
        ? ((B = s.jsx("div", { className: _.trailingButtons, children: D })),
          (t[29] = D),
          (t[30] = B))
        : (B = t[30]);
      var W;
      return (
        t[31] !== O || t[32] !== B || t[33] !== P
          ? ((W = s.jsxs(
              "div",
              babelHelpers.extends({}, P, {
                className: _.root,
                children: [O, B],
              }),
            )),
            (t[31] = O),
            (t[32] = B),
            (t[33] = P),
            (t[34] = W))
          : (W = t[34]),
        W
      );
    }
    var _ = o("WebBloksStyle").createStyles({
      root: {
        backgroundColor: o("WebBloksTheme").WebBloksThemeVars["navbar-bg"],
        borderBottomStyle: "solid",
        borderBottomColor: o("WebBloksTheme").WebBloksThemeVars.separator,
        borderBottomWidth: 1,
        boxSizing: "border-box",
        display: "flex",
        minHeight: 52,
        justifyContent: "center",
        position: "sticky",
        top: 0,
        padding: 8,
        width: "100%",
        zIndex: 1,
      },
      titleContainer: {
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        fontWeight: 600,
        justifyContent: "center",
      },
      titleContainerMargin: { marginRight: 28 },
      title: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "0 0px",
        textAlign: "center",
      },
      trailingButtons: {
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "center",
      },
    });
    l.default = p;
  },
  98,
);
