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
      var t = o("react-compiler-runtime").c(24),
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
      t[2] !== m.objectSet.navigationManager
        ? ((b = function (t) {
            t.key === "Escape" &&
              (t.stopPropagation(), m.objectSet.navigationManager.pop());
          }),
          (t[2] = m.objectSet.navigationManager),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S = f,
        R = "presentation",
        L = f,
        E = -1,
        k = h != null && s.jsx("div", { className: f.title, children: h }),
        I = y != null && s.jsx("div", { className: f.message, children: y }),
        T;
      t[4] !== k || t[5] !== I
        ? ((T = s.jsxs("div", { className: f.header, children: [k, I] })),
          (t[4] = k),
          (t[5] = I),
          (t[6] = T))
        : (T = t[6]);
      var D = f,
        x = m.renderNode(l),
        $ = m.renderNode(u),
        P = m.renderNode(c),
        N;
      t[7] !== D.buttons || t[8] !== x || t[9] !== $ || t[10] !== P
        ? ((N = s.jsxs("div", { className: D.buttons, children: [x, $, P] })),
          (t[7] = D.buttons),
          (t[8] = x),
          (t[9] = $),
          (t[10] = P),
          (t[11] = N))
        : (N = t[11]);
      var M;
      t[12] !== C ||
      t[13] !== h ||
      t[14] !== N ||
      t[15] !== L.container ||
      t[16] !== T
        ? ((M = s.jsxs("div", {
            className: L.container,
            ref: C,
            tabIndex: E,
            "aria-label": h,
            children: [T, N],
          })),
          (t[12] = C),
          (t[13] = h),
          (t[14] = N),
          (t[15] = L.container),
          (t[16] = T),
          (t[17] = M))
        : (M = t[17]);
      var w;
      return (
        t[18] !== g ||
        t[19] !== r ||
        t[20] !== v ||
        t[21] !== M ||
        t[22] !== S.background
          ? ((w = s.jsx("div", {
              "data-bloks-name": r,
              className: S.background,
              onClick: g,
              onKeyDown: v,
              role: R,
              children: M,
            })),
            (t[18] = g),
            (t[19] = r),
            (t[20] = v),
            (t[21] = M),
            (t[22] = S.background),
            (t[23] = w))
          : (w = t[23]),
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
                  (t.current && t.current.focus()));
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
