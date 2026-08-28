__d(
  "WebBloksTransitionContainer",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
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
      f = u.useState,
      g = "$",
      h = "#";
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(58),
        r = e.externalStyle,
        a = e.node,
        i;
      n[0] !== a ? ((i = a.get(g)), (n[0] = a), (n[1] = i)) : (i = n[1]);
      var l = i,
        u;
      n[2] !== a
        ? ((u = a.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)),
          (n[2] = a),
          (n[3] = u))
        : (u = n[3]);
      var c = u,
        d = c[0],
        p = c[1],
        y = (t = a.get(h)) != null ? t : 0,
        S = o("WebBloksStyle").useStyle(a, r),
        R = S.style,
        L = S.wrapper,
        E = S.wrapperProps,
        k = o("WebBloksComponentContext").useWebBloksContext(),
        I = k.renderChildren,
        T;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [0, 0, !1]), (n[4] = T))
        : (T = n[4]);
      var D = f(T),
        x = D[0],
        $ = D[1],
        P = x[0],
        N = x[1],
        M = x[2],
        w;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = [0, 0]), (n[5] = w))
        : (w = n[5]);
      var A = f(w),
        F = A[0],
        O = A[1],
        B = F[0],
        W = F[1],
        q = _(null),
        U = _(null),
        V = _(null),
        H;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = function () {
            var e = U.current;
            e != null &&
              $([
                e.getBoundingClientRect().width,
                e.getBoundingClientRect().height,
                !0,
              ]);
            var t = V.current,
              n = t == null ? void 0 : t.children,
              r = (n == null ? void 0 : n.length) === 1 ? n[0] : t;
            r != null &&
              O([
                r.getBoundingClientRect().width,
                r.getBoundingClientRect().height,
              ]);
          }),
          (n[6] = H))
        : (H = n[6]);
      var G = H,
        z;
      (n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = [G]), (n[7] = z))
        : (z = n[7]),
        m(G, z),
        b(q, G));
      var j;
      n[8] !== I || n[9] !== d
        ? ((j = I([d])), (n[8] = I), (n[9] = d), (n[10] = j))
        : (j = n[10]);
      var K = j,
        Q;
      n[11] !== p || n[12] !== I
        ? ((Q = I([p])), (n[11] = p), (n[12] = I), (n[13] = Q))
        : (Q = n[13]);
      var X = Q,
        Y = Number(y.toFixed(2)),
        J;
      n[14] !== W || n[15] !== Y || n[16] !== N
        ? ((J = C(Y, N, W)), (n[14] = W), (n[15] = Y), (n[16] = N), (n[17] = J))
        : (J = n[17]);
      var Z = J,
        ee;
      n[18] !== B || n[19] !== Y || n[20] !== P
        ? ((ee = C(Y, P, B)),
          (n[18] = B),
          (n[19] = Y),
          (n[20] = P),
          (n[21] = ee))
        : (ee = n[21]);
      var te = ee,
        ne;
      n[22] !== Y
        ? ((ne = C(Y, 0, 1)), (n[22] = Y), (n[23] = ne))
        : (ne = n[23]);
      var re = ne,
        oe = l === !0,
        ae;
      n[24] !== Z || n[25] !== M || n[26] !== te
        ? ((ae = M ? { height: Z, width: te } : {}),
          (n[24] = Z),
          (n[25] = M),
          (n[26] = te),
          (n[27] = ae))
        : (ae = n[27]);
      var ie;
      n[28] !== oe || n[29] !== re || n[30] !== Y
        ? ((ie = oe && Y > 0 ? { opacity: 1 - (re != null ? re : 0) } : {}),
          (n[28] = oe),
          (n[29] = re),
          (n[30] = Y),
          (n[31] = ie))
        : (ie = n[31]);
      var le;
      n[32] !== K || n[33] !== ie
        ? ((le = s.jsx("div", {
            className: v.startElem,
            style: ie,
            ref: U,
            children: K,
          })),
          (n[32] = K),
          (n[33] = ie),
          (n[34] = le))
        : (le = n[34]);
      var se;
      n[35] !== X ||
      n[36] !== W ||
      n[37] !== B ||
      n[38] !== oe ||
      n[39] !== re ||
      n[40] !== Y
        ? ((se =
            Y > 0
              ? s.jsx("div", {
                  className: v.endElem,
                  style: babelHelpers.extends({}, oe ? { opacity: re } : {}, {
                    height: W,
                    width: B,
                  }),
                  children: X,
                })
              : null),
          (n[35] = X),
          (n[36] = W),
          (n[37] = B),
          (n[38] = oe),
          (n[39] = re),
          (n[40] = Y),
          (n[41] = se))
        : (se = n[41]);
      var ue;
      n[42] !== ae || n[43] !== le || n[44] !== se
        ? ((ue = s.jsxs("div", {
            className: v.container,
            style: ae,
            children: [le, se],
          })),
          (n[42] = ae),
          (n[43] = le),
          (n[44] = se),
          (n[45] = ue))
        : (ue = n[45]);
      var ce;
      n[46] !== X || n[47] !== W || n[48] !== B
        ? ((ce =
            B > 0 || W > 0
              ? null
              : s.jsx("div", {
                  className: v.endPreviewElem,
                  ref: V,
                  children: X,
                })),
          (n[46] = X),
          (n[47] = W),
          (n[48] = B),
          (n[49] = ce))
        : (ce = n[49]);
      var de;
      n[50] !== R || n[51] !== ue || n[52] !== ce || n[53] !== E
        ? ((de = s.jsxs(
            "div",
            babelHelpers.extends({}, E, {
              ref: q,
              style: R,
              children: [ue, ce],
            }),
          )),
          (n[50] = R),
          (n[51] = ue),
          (n[52] = ce),
          (n[53] = E),
          (n[54] = de))
        : (de = n[54]);
      var me;
      return (
        n[55] !== de || n[56] !== L
          ? ((me = L(de)), (n[55] = de), (n[56] = L), (n[57] = me))
          : (me = n[57]),
        me
      );
    }
    function C(e, t, n) {
      return t == null || n == null ? null : t + e * (n - t);
    }
    function b(e, t) {
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
    var v = o("WebBloksStyle").createStyles({
      container: { position: "relative", overflow: "hidden" },
      startElem: { display: "inline-block" },
      endElem: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 },
      endPreviewElem: { visibility: "hidden" },
    });
    l.default = y;
  },
  98,
);
