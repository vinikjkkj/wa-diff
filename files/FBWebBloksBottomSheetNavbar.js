__d(
  "FBWebBloksBottomSheetNavbar",
  [
    "WebBloksBooleanUtils",
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
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = "1",
      p = "#",
      _ = "*";
    function f(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l = a.renderNode,
        u = o("WebBloksEnvironmentContext").useDataBloksName(),
        f = i.navigationManager,
        h;
      t[0] !== n ? ((h = n.get(p)), (t[0] = n), (t[1] = h)) : (h = t[1]);
      var y = h,
        C = n.get(_),
        b = o("WebBloksBooleanUtils").isTrue(n.get(m)),
        v = f.getScreenCount(!0) > 1,
        S = d(),
        R = d(),
        L,
        E;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            var e = S.current,
              t = R.current;
            if (!(e == null || t == null)) {
              var n = Math.abs(e.clientWidth - t.clientWidth);
              e.clientWidth > t.clientWidth
                ? (t.style.marginLeft = n + "px")
                : (e.style.marginRight = n + "px");
            }
          }),
          (E = []),
          (t[2] = L),
          (t[3] = E))
        : ((L = t[2]), (E = t[3])),
        c(L, E));
      var k;
      t[4] !== u || t[5] !== n.styleId
        ? ((k = u(n.styleId)), (t[4] = u), (t[5] = n.styleId), (t[6] = k))
        : (k = t[6]);
      var I = b ? null : g.divider,
        T;
      t[7] !== I
        ? ((T = o("WebBloksStyle").classNames(g.root, I)),
          (t[7] = I),
          (t[8] = T))
        : (T = t[8]);
      var D;
      t[9] !== f || t[10] !== v
        ? ((D = v
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return f.pop();
                },
              })
            : null),
          (t[9] = f),
          (t[10] = v),
          (t[11] = D))
        : (D = t[11]);
      var x;
      t[12] !== D
        ? ((x = s.jsx("div", {
            className: g.backButtonContainer,
            ref: S,
            children: D,
          })),
          (t[12] = D),
          (t[13] = x))
        : (x = t[13]);
      var $;
      t[14] !== y
        ? (($ = s.jsx("div", {
            className: g.titleContainer,
            children: s.jsx("div", { className: g.title, children: y }),
          })),
          (t[14] = y),
          (t[15] = $))
        : ($ = t[15]);
      var P = g,
        N = l(C),
        M;
      t[16] !== P.trailingButton || t[17] !== N
        ? ((M = s.jsx("div", {
            className: P.trailingButton,
            ref: R,
            children: N,
          })),
          (t[16] = P.trailingButton),
          (t[17] = N),
          (t[18] = M))
        : (M = t[18]);
      var w;
      return (
        t[19] !== M || t[20] !== k || t[21] !== T || t[22] !== x || t[23] !== $
          ? ((w = s.jsxs(
              "div",
              babelHelpers.extends({}, k, {
                className: T,
                children: [x, $, M],
              }),
            )),
            (t[19] = M),
            (t[20] = k),
            (t[21] = T),
            (t[22] = x),
            (t[23] = $),
            (t[24] = w))
          : (w = t[24]),
        w
      );
    }
    var g = o("WebBloksStyle").createStyles({
      root: {
        backgroundColor: o("WebBloksTheme").WebBloksThemeVars["navbar-bg"],
        boxSizing: "border-box",
        display: "flex",
        height: 52,
        justifyContent: "center",
        padding: 8,
        width: "100%",
        zIndex: 1,
      },
      divider: {
        borderBottomStyle: "solid",
        borderBottomColor: o("WebBloksTheme").WebBloksThemeVars.separator,
        borderBottomWidth: 1,
      },
      backButtonContainer: { display: "flex" },
      titleContainer: {
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        fontWeight: 600,
        justifyContent: "center",
      },
      title: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        overflow: "hidden",
        textAlign: "center",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      trailingButton: {
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "center",
      },
    });
    l.default = f;
  },
  98,
);
