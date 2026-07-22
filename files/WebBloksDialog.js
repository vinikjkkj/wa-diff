__d(
  "WebBloksDialog",
  [
    "WebBloksComponentContext",
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
      var t = o("react-compiler-runtime").c(25),
        n = e.node,
        r = n.styleId,
        a = n.getValues(),
        i = a.message,
        l = a.primary_button,
        u = a.secondary_button,
        c = a.tertiary_button,
        d = a.title,
        m = o("WebBloksComponentContext").useWebBloksContext(),
        p;
      t[0] !== m.objectSet.navigationManager
        ? ((p = function (t) {
            t.target === t.currentTarget && m.objectSet.navigationManager.pop();
          }),
          (t[0] = m.objectSet.navigationManager),
          (t[1] = p))
        : (p = t[1]);
      var g = p,
        h = d != null ? d : i,
        y = d != null ? i : null,
        C = _(),
        b;
      t[2] !== m.objectSet.navigationManager || t[3] !== C
        ? ((b = function (t) {
            if (t.key === "Escape") {
              (t.stopPropagation(), m.objectSet.navigationManager.pop());
              return;
            }
            if (t.key === "Tab") {
              var e = C.current;
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
          (t[3] = C),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S = f,
        R = "presentation",
        L = f,
        E = -1,
        k =
          h != null &&
          s.jsx("div", {
            className: f.title,
            role: "heading",
            "aria-level": 2,
            children: h,
          }),
        I = y != null && s.jsx("div", { className: f.message, children: y }),
        T;
      t[5] !== k || t[6] !== I
        ? ((T = s.jsxs("div", { className: f.header, children: [k, I] })),
          (t[5] = k),
          (t[6] = I),
          (t[7] = T))
        : (T = t[7]);
      var D = f,
        x = m.renderNode(l),
        $ = m.renderNode(u),
        P = m.renderNode(c),
        N;
      t[8] !== D.buttons || t[9] !== x || t[10] !== $ || t[11] !== P
        ? ((N = s.jsxs("div", { className: D.buttons, children: [x, $, P] })),
          (t[8] = D.buttons),
          (t[9] = x),
          (t[10] = $),
          (t[11] = P),
          (t[12] = N))
        : (N = t[12]);
      var M;
      t[13] !== C ||
      t[14] !== h ||
      t[15] !== N ||
      t[16] !== L.container ||
      t[17] !== T
        ? ((M = s.jsxs("div", {
            className: L.container,
            ref: C,
            tabIndex: E,
            "aria-label": h,
            children: [T, N],
          })),
          (t[13] = C),
          (t[14] = h),
          (t[15] = N),
          (t[16] = L.container),
          (t[17] = T),
          (t[18] = M))
        : (M = t[18]);
      var w;
      return (
        t[19] !== g ||
        t[20] !== r ||
        t[21] !== v ||
        t[22] !== M ||
        t[23] !== S.background
          ? ((w = s.jsx("div", {
              "data-bloks-name": r,
              className: S.background,
              onClick: g,
              onKeyDown: v,
              role: R,
              children: M,
            })),
            (t[19] = g),
            (t[20] = r),
            (t[21] = v),
            (t[22] = M),
            (t[23] = S.background),
            (t[24] = w))
          : (w = t[24]),
        w
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
