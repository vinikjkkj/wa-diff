__d(
  "MAIBAAutoScrollContext",
  [
    "AbraScrollUtils",
    "MAIBAWorkspaceCanvasContext",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useResizeObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useLayoutEffect,
      f = u.useMemo,
      g = u.useRef,
      h = u.useState,
      y = 16,
      C = 50,
      b = {
        enableAutoScroll: function () {},
        lockRef: function () {},
        scrollParentElement: null,
        scrollToBottom: function () {},
        spacerRef: function () {},
      },
      v = c(b);
    function S(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.children,
        a = e.isHandoverActive,
        i = e.messageCount,
        l = g(),
        u = g(),
        c = g(),
        d = h(null),
        m = d[0],
        f = d[1],
        C = g(!0),
        b = g(a === !0),
        S,
        R;
      (t[0] !== a
        ? ((S = function () {
            b.current = a === !0;
          }),
          (R = [a]),
          (t[0] = a),
          (t[1] = S),
          (t[2] = R))
        : ((S = t[1]), (R = t[2])),
        _(S, R));
      var I;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            C.current = !0;
          }),
          (t[3] = I))
        : (I = t[3]);
      var T = I,
        D;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            C.current = !0;
            var e = c.current;
            e != null &&
              e.scrollHeight > e.clientHeight &&
              e.scrollTo({
                behavior: "smooth",
                top: e.scrollHeight - e.clientHeight,
              });
          }),
          (t[4] = D))
        : (D = t[4]);
      var x = D,
        $ = g(),
        P = g(i),
        N = g(),
        M = g(),
        w = g("auto"),
        A = o("MAIBAWorkspaceCanvasContext").useMAIBAWorkspaceCanvas(),
        F = A.isWidthTransitioningRef,
        O = g(!1),
        B;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            var e = l.current,
              t = c.current;
            if (e == null || t == null) return null;
            var n = o("AbraScrollUtils").getOffsetTopFromScrollParent(e, t);
            return (
              (n = n - o("AbraScrollUtils").getScrollPaddingTop(t)),
              (n = n - y),
              n
            );
          }),
          (t[5] = B))
        : (B = t[5]);
      var W = B,
        q;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function (t, n, r) {
            var e = c.current;
            if (e) {
              var o = t;
              if (n != null) {
                var a,
                  i = (a = N.current) != null ? a : n;
                n < o && n >= i && (o = n);
              }
              e.scrollHeight > e.clientHeight &&
                e.scrollTop !== o &&
                e.scrollTo({ behavior: r, top: o });
            }
          }),
          (t[6] = q))
        : (q = t[6]);
      var U = q,
        V;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function (t) {
            var e = c.current,
              n = M.current;
            if (!(e == null || n == null || t == null)) {
              var r = o("AbraScrollUtils").getOffsetTopFromScrollParent(n, e),
                a = r - t,
                i = Math.max(e.clientHeight - a, 0);
              n.style.height = i + "px";
            }
          }),
          (t[7] = V))
        : (V = t[7]);
      var H = V,
        G;
      t[8] !== F
        ? ((G = function () {
            var e = c.current,
              t = N.current;
            (e && t != null && !F.current && (C.current = k(e, t, C.current)),
              (N.current = e == null ? void 0 : e.scrollTop));
          }),
          (t[8] = F),
          (t[9] = G))
        : (G = t[9]);
      var z = G,
        j,
        K;
      (t[10] !== i
        ? ((K = function () {
            var e = P.current;
            ((P.current = i), e > 0 && i > e && (C.current = !0));
          }),
          (j = [i]),
          (t[10] = i),
          (t[11] = j),
          (t[12] = K))
        : ((j = t[11]), (K = t[12])),
        _(K, j));
      var Q;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function (t, n, r) {
            var e = E($.current, n.height, w.current);
            (b.current
              ? t.scrollTo({
                  behavior: e,
                  top: t.scrollHeight - t.clientHeight,
                })
              : (H(r), U(t.scrollHeight, r, e)),
              (w.current = "smooth"));
          }),
          (t[13] = Q))
        : (Q = t[13]);
      var X = Q,
        Y;
      t[14] !== F || t[15] !== z
        ? ((Y = function (t, n) {
            c.current ||
              ((c.current = o("AbraScrollUtils").getScrollParent(n)),
              f(c.current));
            var e = c.current;
            if (e != null) {
              if (!u.current) {
                var r = L(e);
                (r == null || r.addEventListener("scroll", z, { passive: !0 }),
                  (u.current = r));
              }
              var a = F.current;
              if (
                (O.current && !a && ($.current = null),
                (O.current = a),
                $.current !== t.height)
              ) {
                if (a) {
                  $.current = t.height;
                  return;
                }
                var i = W();
                C.current ? X(e, t, i) : H(i);
              }
              $.current = t.height;
            }
          }),
          (t[14] = F),
          (t[15] = z),
          (t[16] = Y))
        : (Y = t[16]);
      var J = r("useResizeObserver")(Y),
        Z = g(),
        ee = r("useMergeRefs")(J, Z),
        te,
        ne;
      (t[17] !== z
        ? ((te = function () {
            return function () {
              if (u.current) {
                var e;
                ((e = u.current) == null || e.removeEventListener("scroll", z),
                  (u.current = null));
              }
            };
          }),
          (ne = [z]),
          (t[17] = z),
          (t[18] = te),
          (t[19] = ne))
        : ((te = t[18]), (ne = t[19])),
        p(te, ne));
      var re;
      t[20] !== m
        ? ((re = {
            enableAutoScroll: T,
            lockRef: l,
            scrollParentElement: m,
            scrollToBottom: x,
            spacerRef: M,
          }),
          (t[20] = m),
          (t[21] = re))
        : (re = t[21]);
      var oe = re,
        ae;
      t[22] !== n || t[23] !== ee
        ? ((ae = typeof n == "function" ? n(ee) : n),
          (t[22] = n),
          (t[23] = ee),
          (t[24] = ae))
        : (ae = t[24]);
      var ie;
      return (
        t[25] !== ae || t[26] !== oe
          ? ((ie = s.jsx(v.Provider, { value: oe, children: ae })),
            (t[25] = ae),
            (t[26] = oe),
            (t[27] = ie))
          : (ie = t[27]),
        ie
      );
    }
    function R() {
      return m(v);
    }
    function L(e) {
      return e === document.documentElement ? window : e;
    }
    function E(e, t, n) {
      return e != null && t < e ? "auto" : n;
    }
    function k(e, t, n) {
      var r = e.scrollTop + e.clientHeight;
      return r === e.scrollHeight
        ? !0
        : t > e.scrollTop
          ? !1
          : r > e.scrollHeight - C
            ? !0
            : n;
    }
    ((l.MAIBAAutoScrollContextProvider = S), (l.useMAIBAAutoScrollContext = R));
  },
  98,
);
