__d(
  "MAIBAAutoScrollContext",
  [
    "AbraScrollUtils",
    "MAIBAWorkspaceCanvasContext",
    "react",
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
        contentElementRef: { current: null },
        enableAutoScroll: function () {},
        lockRef: function () {},
        preserveScrollOnNextMessage: function () {},
        scrollParentElement: null,
        scrollToBottom: function () {},
        spacerRef: function () {},
      },
      v = c(b);
    function S(e) {
      var t = e.children,
        n = e.initialAutoScrollEnabled,
        a = n === void 0 ? !0 : n,
        i = e.isHandoverActive,
        l = e.lastMessageKey,
        u = e.messageCount,
        c = g(),
        m = g(),
        C = g(),
        b = h(null),
        S = b[0],
        R = b[1],
        T = g(null),
        D = g(a),
        x = g(!1),
        $ = g(i === !0);
      _(
        function () {
          $.current = i === !0;
        },
        [i],
      );
      var P = d(function () {
          ((x.current = !1), (D.current = !0));
        }, []),
        N = d(function () {
          ((x.current = !0), (D.current = !1));
        }, []),
        M = d(function () {
          ((x.current = !1), (D.current = !0));
          var e = C.current;
          e != null &&
            e.scrollHeight > e.clientHeight &&
            e.scrollTo({
              behavior: "smooth",
              top: e.scrollHeight - e.clientHeight,
            });
        }, []),
        w = g(),
        A = g(u),
        F = g(l),
        O = g(),
        B = g(),
        W = g("auto"),
        q = o("MAIBAWorkspaceCanvasContext").useMAIBAWorkspaceCanvas(),
        U = q.isWidthTransitioningRef,
        V = g(!1);
      function H() {
        var e = c.current,
          t = C.current;
        if (e == null || t == null) return null;
        var n = o("AbraScrollUtils").getOffsetTopFromScrollParent(e, t);
        return (
          (n -= o("AbraScrollUtils").getScrollPaddingTop(t)),
          (n -= y),
          n
        );
      }
      function G(e, t, n) {
        var r = C.current,
          o = E(e, t, O.current);
        r != null &&
          r.scrollHeight > r.clientHeight &&
          r.scrollTop !== o &&
          r.scrollTo({ behavior: n, top: o });
      }
      function z(e) {
        var t = C.current,
          n = B.current;
        if (!(t == null || n == null || e == null)) {
          var r = o("AbraScrollUtils").getOffsetTopFromScrollParent(n, t),
            a = r - e,
            i = Math.max(t.clientHeight - a, 0);
          n.style.height = i + "px";
        }
      }
      var j = d(
        function () {
          var e = C.current,
            t = O.current;
          (e && t != null && !U.current && (D.current = I(e, t, D.current)),
            (O.current = e == null ? void 0 : e.scrollTop));
        },
        [U],
      );
      _(
        function () {
          var e = A.current;
          A.current = u;
          var t = F.current;
          ((F.current = l),
            e > 0 &&
              u > e &&
              (l == null || l !== t) &&
              (x.current ? (x.current = !1) : (D.current = !0)));
        },
        [l, u],
      );
      function K(e, t, n) {
        var r = k(w.current, t.height, W.current);
        ($.current
          ? e.scrollTo({ behavior: r, top: e.scrollHeight - e.clientHeight })
          : (z(n), G(e.scrollHeight, n, r)),
          (W.current = "smooth"));
      }
      var Q = g(),
        X = g(!1),
        Y = r("useResizeObserver")(function (e) {
          var t = Q.current;
          Q.current = e.height;
          var n = U.current,
            r = X.current && !n;
          ((X.current = n),
            !(t == null || n || (t === e.height && !r)) && z(H()));
        }),
        J = r("useResizeObserver")(function (e, t) {
          C.current ||
            ((C.current = o("AbraScrollUtils").getScrollParent(t)),
            (T.current = t),
            R(C.current));
          var n = C.current;
          if (n != null) {
            if (!m.current) {
              var r = L(n);
              (r == null || r.addEventListener("scroll", j, { passive: !0 }),
                (m.current = r),
                Y(n));
            }
            var a = U.current;
            if (
              (V.current && !a && (w.current = null),
              (V.current = a),
              w.current !== e.height)
            ) {
              if (a) {
                w.current = e.height;
                return;
              }
              var i = H();
              D.current ? K(n, e, i) : z(i);
            }
            w.current = e.height;
          }
        }),
        Z = g(),
        ee = r("useMergeRefs")(J, Z);
      p(
        function () {
          return function () {
            if (m.current) {
              var e;
              ((e = m.current) == null || e.removeEventListener("scroll", j),
                (m.current = null));
            }
            Y(null);
          };
        },
        [Y, j],
      );
      var te = f(
        function () {
          return {
            contentElementRef: T,
            enableAutoScroll: P,
            lockRef: c,
            preserveScrollOnNextMessage: N,
            scrollParentElement: S,
            scrollToBottom: M,
            spacerRef: B,
          };
        },
        [P, N, S, M],
      );
      return s.jsx(v.Provider, {
        value: te,
        children: typeof t == "function" ? t(ee) : t,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return m(v);
    }
    function L(e) {
      var t = e == null ? void 0 : e.ownerDocument;
      return t != null && e === t.documentElement ? t.defaultView : e;
    }
    function E(e, t, n) {
      if (t == null) return e;
      var r = n != null ? n : t;
      return t < e && t >= r ? t : e;
    }
    function k(e, t, n) {
      return e != null && t < e ? "auto" : n;
    }
    function I(e, t, n) {
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
