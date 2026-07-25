__d(
  "WebBloksDialog",
  [
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.node,
        r = n.styleId,
        a = n.getValues(),
        i = a.message,
        l = a.primary_button,
        u = a.secondary_button,
        c = a.tertiary_button,
        d = a.title,
        m = o("WebBloksComponentContext").useWebBloksContext(),
        p = o("WebBloksEnvironmentContext").useDataBloksName(),
        g;
      t[0] !== m.objectSet.navigationManager
        ? ((g = function (t) {
            t.target === t.currentTarget && m.objectSet.navigationManager.pop();
          }),
          (t[0] = m.objectSet.navigationManager),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y = d != null ? d : i,
        C = d != null ? i : null,
        b = _(),
        v;
      t[2] !== m.objectSet.navigationManager || t[3] !== b
        ? ((v = function (t) {
            if (t.key === "Escape") {
              (t.stopPropagation(), m.objectSet.navigationManager.pop());
              return;
            }
            if (t.key === "Tab") {
              var e = b.current;
              if (e == null) return;
              var n = Array.from(
                e.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"]',
                ),
              );
              if (n.length === 0) return;
              var r = document.activeElement,
                o = r != null ? n.indexOf(r) : -1,
                a = t.shiftKey
                  ? n[o > 0 ? o - 1 : n.length - 1]
                  : n[o < n.length - 1 ? o + 1 : 0];
              a instanceof HTMLElement &&
                (t.preventDefault(), a.focus({ focusVisible: !0 }));
            }
          }),
          (t[2] = m.objectSet.navigationManager),
          (t[3] = b),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== p || t[6] !== r
        ? ((R = p(r)), (t[5] = p), (t[6] = r), (t[7] = R))
        : (R = t[7]);
      var L = f,
        E = "presentation",
        k = f,
        I = -1,
        T =
          y != null &&
          s.jsx("div", {
            className: f.title,
            role: "heading",
            "aria-level": 2,
            children: y,
          }),
        D = C != null && s.jsx("div", { className: f.message, children: C }),
        x;
      t[8] !== T || t[9] !== D
        ? ((x = s.jsxs("div", { className: f.header, children: [T, D] })),
          (t[8] = T),
          (t[9] = D),
          (t[10] = x))
        : (x = t[10]);
      var $ = f,
        P = m.renderNode(l),
        N = m.renderNode(u),
        M = m.renderNode(c),
        w;
      t[11] !== $.buttons || t[12] !== P || t[13] !== N || t[14] !== M
        ? ((w = s.jsxs("div", { className: $.buttons, children: [P, N, M] })),
          (t[11] = $.buttons),
          (t[12] = P),
          (t[13] = N),
          (t[14] = M),
          (t[15] = w))
        : (w = t[15]);
      var A;
      t[16] !== b ||
      t[17] !== y ||
      t[18] !== x ||
      t[19] !== w ||
      t[20] !== k.container
        ? ((A = s.jsxs("div", {
            className: k.container,
            ref: b,
            tabIndex: I,
            "aria-label": y,
            children: [x, w],
          })),
          (t[16] = b),
          (t[17] = y),
          (t[18] = x),
          (t[19] = w),
          (t[20] = k.container),
          (t[21] = A))
        : (A = t[21]);
      var F;
      return (
        t[22] !== h ||
        t[23] !== S ||
        t[24] !== A ||
        t[25] !== R ||
        t[26] !== L.background
          ? ((F = s.jsx(
              "div",
              babelHelpers.extends({}, R, {
                className: L.background,
                onClick: h,
                onKeyDown: S,
                role: E,
                children: A,
              }),
            )),
            (t[22] = h),
            (t[23] = S),
            (t[24] = A),
            (t[25] = R),
            (t[26] = L.background),
            (t[27] = F))
          : (F = t[27]),
        F
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = m(null),
        n,
        r;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = function () {
              t.current &&
                (t.current.contains(document.activeElement) ||
                  (t.current && t.current.focus({ focusVisible: !0 })));
            }),
            (r = []),
            (e[0] = n),
            (e[1] = r))
          : ((n = e[0]), (r = e[1])),
        d(n, r),
        t
      );
    }
    var f = o("WebBloksStyle").createStyles({
      background: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 1e3,
      },
      buttons: {},
      container: {
        backgroundColor: "white",
        borderRadius: 12,
        margin: 32,
        maxWidth: "100%",
        textAlign: "center",
        width: 400,
        outline: "none",
      },
      header: { padding: 32 },
      message: { color: "#65676B", fontSize: 14, marginTop: 12 },
      title: { color: "#1C1E21", fontSize: 18, fontWeight: 600 },
    });
    l.default = p;
  },
  98,
);
