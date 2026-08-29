__d(
  "WebBloksTransitionContainer",
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
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState;
    function g(e) {
      var t,
        n = o("react-compiler-runtime").c(58),
        r = e.externalStyle,
        a = e.node,
        i;
      n[0] !== a
        ? ((i = a.get("crossfade")), (n[0] = a), (n[1] = i))
        : (i = n[1]);
      var l = i,
        u;
      n[2] !== a
        ? ((u = a.getSubNodes("children")), (n[2] = a), (n[3] = u))
        : (u = n[3]);
      var c = u,
        d = c[0],
        p = c[1],
        g = (t = a.get("progress")) != null ? t : 0,
        b = o("WebBloksStyle").useStyle(a, r),
        v = b.style,
        S = b.wrapper,
        R = b.wrapperProps,
        L = o("WebBloksComponentContext").useWebBloksContext(),
        E = L.renderChildren,
        k;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [0, 0, !1]), (n[4] = k))
        : (k = n[4]);
      var I = f(k),
        T = I[0],
        D = I[1],
        x = T[0],
        $ = T[1],
        P = T[2],
        N;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [0, 0]), (n[5] = N))
        : (N = n[5]);
      var M = f(N),
        w = M[0],
        A = M[1],
        F = w[0],
        O = w[1],
        B = _(null),
        W = _(null),
        q = _(null),
        U;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            var e = W.current;
            e != null &&
              D([
                e.getBoundingClientRect().width,
                e.getBoundingClientRect().height,
                !0,
              ]);
            var t = q.current,
              n = t == null ? void 0 : t.children,
              r = (n == null ? void 0 : n.length) === 1 ? n[0] : t;
            r != null &&
              A([
                r.getBoundingClientRect().width,
                r.getBoundingClientRect().height,
              ]);
          }),
          (n[6] = U))
        : (U = n[6]);
      var V = U,
        H;
      (n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = [V]), (n[7] = H))
        : (H = n[7]),
        m(V, H),
        y(B, V));
      var G;
      n[8] !== E || n[9] !== d
        ? ((G = E([d])), (n[8] = E), (n[9] = d), (n[10] = G))
        : (G = n[10]);
      var z = G,
        j;
      n[11] !== p || n[12] !== E
        ? ((j = E([p])), (n[11] = p), (n[12] = E), (n[13] = j))
        : (j = n[13]);
      var K = j,
        Q = Number(g.toFixed(2)),
        X;
      n[14] !== O || n[15] !== Q || n[16] !== $
        ? ((X = h(Q, $, O)), (n[14] = O), (n[15] = Q), (n[16] = $), (n[17] = X))
        : (X = n[17]);
      var Y = X,
        J;
      n[18] !== F || n[19] !== Q || n[20] !== x
        ? ((J = h(Q, x, F)), (n[18] = F), (n[19] = Q), (n[20] = x), (n[21] = J))
        : (J = n[21]);
      var Z = J,
        ee;
      n[22] !== Q
        ? ((ee = h(Q, 0, 1)), (n[22] = Q), (n[23] = ee))
        : (ee = n[23]);
      var te = ee,
        ne = l === !0,
        re;
      n[24] !== Y || n[25] !== P || n[26] !== Z
        ? ((re = P ? { height: Y, width: Z } : {}),
          (n[24] = Y),
          (n[25] = P),
          (n[26] = Z),
          (n[27] = re))
        : (re = n[27]);
      var oe;
      n[28] !== ne || n[29] !== te || n[30] !== Q
        ? ((oe = ne && Q > 0 ? { opacity: 1 - (te != null ? te : 0) } : {}),
          (n[28] = ne),
          (n[29] = te),
          (n[30] = Q),
          (n[31] = oe))
        : (oe = n[31]);
      var ae;
      n[32] !== z || n[33] !== oe
        ? ((ae = s.jsx("div", {
            className: C.startElem,
            style: oe,
            ref: W,
            children: z,
          })),
          (n[32] = z),
          (n[33] = oe),
          (n[34] = ae))
        : (ae = n[34]);
      var ie;
      n[35] !== K ||
      n[36] !== O ||
      n[37] !== F ||
      n[38] !== ne ||
      n[39] !== te ||
      n[40] !== Q
        ? ((ie =
            Q > 0
              ? s.jsx("div", {
                  className: C.endElem,
                  style: babelHelpers.extends({}, ne ? { opacity: te } : {}, {
                    height: O,
                    width: F,
                  }),
                  children: K,
                })
              : null),
          (n[35] = K),
          (n[36] = O),
          (n[37] = F),
          (n[38] = ne),
          (n[39] = te),
          (n[40] = Q),
          (n[41] = ie))
        : (ie = n[41]);
      var le;
      n[42] !== re || n[43] !== ae || n[44] !== ie
        ? ((le = s.jsxs("div", {
            className: C.container,
            style: re,
            children: [ae, ie],
          })),
          (n[42] = re),
          (n[43] = ae),
          (n[44] = ie),
          (n[45] = le))
        : (le = n[45]);
      var se;
      n[46] !== K || n[47] !== O || n[48] !== F
        ? ((se =
            F > 0 || O > 0
              ? null
              : s.jsx("div", {
                  className: C.endPreviewElem,
                  ref: q,
                  children: K,
                })),
          (n[46] = K),
          (n[47] = O),
          (n[48] = F),
          (n[49] = se))
        : (se = n[49]);
      var ue;
      n[50] !== v || n[51] !== le || n[52] !== se || n[53] !== R
        ? ((ue = s.jsxs(
            "div",
            babelHelpers.extends({}, R, {
              ref: B,
              style: v,
              children: [le, se],
            }),
          )),
          (n[50] = v),
          (n[51] = le),
          (n[52] = se),
          (n[53] = R),
          (n[54] = ue))
        : (ue = n[54]);
      var ce;
      return (
        n[55] !== ue || n[56] !== S
          ? ((ce = S(ue)), (n[55] = ue), (n[56] = S), (n[57] = ce))
          : (ce = n[57]),
        ce
      );
    }
    function h(e, t, n) {
      return t == null || n == null ? null : t + e * (n - t);
    }
    function y(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== t || n[1] !== e
        ? ((r = function () {
            var n = new IntersectionObserver(
              function (e) {
                var n = e[0],
                  r = n.isIntersecting;
                (r === !0 ||
                  n.intersectionRatio > 0 ||
                  (n.intersectionRect &&
                    (n.intersectionRect.height > 0 ||
                      n.intersectionRect.width > 0))) &&
                  t();
              },
              { root: null, threshold: 0 },
            );
            return (
              (e == null ? void 0 : e.current) != null && n.observe(e.current),
              function () {
                return n.disconnect();
              }
            );
          }),
          (a = [t, e]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        d(r, a));
    }
    var C = o("WebBloksStyle").createStyles({
      container: { position: "relative", overflow: "hidden" },
      startElem: { display: "inline-block" },
      endElem: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 },
      endPreviewElem: { visibility: "hidden" },
    });
    l.default = g;
  },
  98,
);
