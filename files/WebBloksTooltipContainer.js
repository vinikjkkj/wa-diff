__d(
  "WebBloksTooltipContainer",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksSSRUtils",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = "*",
      p = "-",
      _ = ")",
      f = "+",
      g = ",",
      h = o("WebBloksStyle").createStyles({
        root: {
          alignSelf: "stretch",
          position: "relative",
          display: "flex",
          zIndex: 99,
        },
      });
    function y(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.node,
        r = o("WebBloksStyle").useStyle(n),
        a = r.wrapper,
        i = r.wrapperProps,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.bloksContext,
        c = l.executeCatch,
        y = l.renderNode,
        C = !!n.get(g),
        b;
      t[0] !== n
        ? ((b = n.getExpression(_)), (t[0] = n), (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] !== n
        ? ((S = n.getExpression(p)), (t[2] = n), (t[3] = S))
        : (S = t[3]);
      var R = S,
        L;
      t[4] !== n || t[5] !== y
        ? ((L = y(n.getSubNode(f))), (t[4] = n), (t[5] = y), (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] !== n || t[8] !== y
        ? ((k = y(n.getSubNode(m))), (t[7] = n), (t[8] = y), (t[9] = k))
        : (k = t[9]);
      var I = k;
      u.initAssociatedObject_INTERNAL(
        n,
        o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
        { visible: C },
      );
      var T;
      t[10] !== u || t[11] !== c || t[12] !== n || t[13] !== R || t[14] !== v
        ? ((T = function () {
            (v != null && c(n, v, [n, !1]),
              R != null && c(n, R, [n, !1]),
              u.updateAssociatedObject_INTERNAL(
                n,
                o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
                { visible: !1 },
              ));
          }),
          (t[10] = u),
          (t[11] = c),
          (t[12] = n),
          (t[13] = R),
          (t[14] = v),
          (t[15] = T))
        : (T = t[15]);
      var D = T,
        x;
      t[16] !== u || t[17] !== n
        ? ((x = u.getAssociatedObject_INTERNAL(
            n,
            o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
          )),
          (t[16] = u),
          (t[17] = n),
          (t[18] = x))
        : (x = t[18]);
      var $ = x,
        P,
        N;
      (t[19] !== D || t[20] !== $
        ? ((P = function () {
            if (!(!o("WebBloksSSRUtils").canUseDOM || !$)) {
              var e = document.documentElement;
              return (
                e.addEventListener("click", D, { passive: !0, once: !0 }),
                function () {
                  e.removeEventListener("click", D);
                }
              );
            }
          }),
          (N = [$, D]),
          (t[19] = D),
          (t[20] = $),
          (t[21] = P),
          (t[22] = N))
        : ((P = t[21]), (N = t[22])),
        d(P, N));
      var M, w;
      (t[23] !== D || t[24] !== $
        ? ((w = function () {
            if (!(!o("WebBloksSSRUtils").canUseDOM || !$)) {
              var e = document.documentElement;
              return (
                e.addEventListener("scroll", D, { passive: !0, once: !0 }),
                function () {
                  e.removeEventListener("scroll", D);
                }
              );
            }
          }),
          (M = [$, D]),
          (t[23] = D),
          (t[24] = $),
          (t[25] = M),
          (t[26] = w))
        : ((M = t[25]), (w = t[26])),
        d(w, M));
      var A;
      t[27] !== D
        ? ((A = function (t) {
            t.key === "Escape" && (t.stopPropagation(), D());
          }),
          (t[27] = D),
          (t[28] = A))
        : (A = t[28]);
      var F = A,
        O = $ != null && $.visible ? E : null,
        B;
      t[29] !== I || t[30] !== F || t[31] !== O || t[32] !== i
        ? ((B = s.jsxs(
            "div",
            babelHelpers.extends({}, i, {
              className: h.root,
              onKeyPress: F,
              children: [O, I],
            }),
          )),
          (t[29] = I),
          (t[30] = F),
          (t[31] = O),
          (t[32] = i),
          (t[33] = B))
        : (B = t[33]);
      var W;
      return (
        t[34] !== B || t[35] !== a
          ? ((W = a(B)), (t[34] = B), (t[35] = a), (t[36] = W))
          : (W = t[36]),
        W
      );
    }
    l.default = y;
  },
  98,
);
