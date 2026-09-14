__d(
  "WebBloksDialog",
  [
    "WebBloksComponentContext",
    "WebBloksDialogMinificationKeys",
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
      var t = o("react-compiler-runtime").c(36),
        n = e.node,
        r = n.styleId,
        a;
      t[0] !== n
        ? ((a = n.get(o("WebBloksDialogMinificationKeys").DIALOG_MESSAGE)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = n.get(o("WebBloksDialogMinificationKeys").DIALOG_PRIMARY_BUTTON),
        u = n.get(o("WebBloksDialogMinificationKeys").DIALOG_SECONDARY_BUTTON),
        c = n.get(o("WebBloksDialogMinificationKeys").DIALOG_TERTIARY_BUTTON),
        d;
      t[2] !== n
        ? ((d = n.get(o("WebBloksDialogMinificationKeys").DIALOG_TITLE)),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p = o("WebBloksComponentContext").useWebBloksContext(),
        g = o("WebBloksEnvironmentContext").useDataBloksName(),
        h;
      t[4] !== p.objectSet.navigationManager
        ? ((h = function (t) {
            t.target === t.currentTarget && p.objectSet.navigationManager.pop();
          }),
          (t[4] = p.objectSet.navigationManager),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C = m != null ? m : i,
        b = m != null ? i : null,
        v = _(),
        S;
      t[6] !== p.objectSet.navigationManager || t[7] !== v
        ? ((S = function (t) {
            if (t.key === "Escape") {
              (t.stopPropagation(), p.objectSet.navigationManager.pop());
              return;
            }
            if (t.key === "Tab") {
              var e = v.current;
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
          (t[6] = p.objectSet.navigationManager),
          (t[7] = v),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] !== g || t[10] !== r
        ? ((L = g(r)), (t[9] = g), (t[10] = r), (t[11] = L))
        : (L = t[11]);
      var E = f,
        k = "presentation",
        I = f,
        T = -1,
        D;
      t[12] !== C
        ? ((D =
            C != null &&
            s.jsx("div", {
              className: f.title,
              role: "heading",
              "aria-level": 2,
              children: C,
            })),
          (t[12] = C),
          (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] !== b
        ? ((x =
            b != null && s.jsx("div", { className: f.message, children: b })),
          (t[14] = b),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== D || t[17] !== x
        ? (($ = s.jsxs("div", { className: f.header, children: [D, x] })),
          (t[16] = D),
          (t[17] = x),
          (t[18] = $))
        : ($ = t[18]);
      var P = f,
        N = p.renderNode(l),
        M = p.renderNode(u),
        w = p.renderNode(c),
        A;
      t[19] !== P.buttons || t[20] !== N || t[21] !== M || t[22] !== w
        ? ((A = s.jsxs("div", { className: P.buttons, children: [N, M, w] })),
          (t[19] = P.buttons),
          (t[20] = N),
          (t[21] = M),
          (t[22] = w),
          (t[23] = A))
        : (A = t[23]);
      var F;
      t[24] !== v ||
      t[25] !== C ||
      t[26] !== $ ||
      t[27] !== A ||
      t[28] !== I.container
        ? ((F = s.jsxs("div", {
            className: I.container,
            ref: v,
            tabIndex: T,
            "aria-label": C,
            children: [$, A],
          })),
          (t[24] = v),
          (t[25] = C),
          (t[26] = $),
          (t[27] = A),
          (t[28] = I.container),
          (t[29] = F))
        : (F = t[29]);
      var O;
      return (
        t[30] !== y ||
        t[31] !== R ||
        t[32] !== F ||
        t[33] !== L ||
        t[34] !== E.background
          ? ((O = s.jsx(
              "div",
              babelHelpers.extends({}, L, {
                className: E.background,
                onClick: y,
                onKeyDown: R,
                role: k,
                children: F,
              }),
            )),
            (t[30] = y),
            (t[31] = R),
            (t[32] = F),
            (t[33] = L),
            (t[34] = E.background),
            (t[35] = O))
          : (O = t[35]),
        O
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
