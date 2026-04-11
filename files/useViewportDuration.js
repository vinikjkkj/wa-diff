__d(
  "useViewportDuration",
  [
    "BaseViewportMarginsContext",
    "CometVisibilityUserActivityMonitor",
    "HiddenSubtreePassiveContext",
    "Run",
    "getIntersectionMarginFromViewportMargin",
    "getStyleProperty",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "nullIntersectionObserverEntryLogger",
    "react",
    "react-compiler-runtime",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
    "useIntersectionObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useLayoutEffect,
      m = s.useMemo,
      p = s.useRef,
      _ = function (t) {
        return t.target == null
          ? null
          : r("getStyleProperty")(t.target, "opacity") === "0"
            ? "TARGET_TRANSPARENT"
            : r("getStyleProperty")(t.target, "visibility") === "hidden"
              ? "TARGET_HIDDEN"
              : null;
      },
      f = function (t) {
        return (
          t.boundingClientRect &&
          (t.boundingClientRect.height === 0 ||
            t.boundingClientRect.width === 0)
        );
      };
    function g(e) {
      var t,
        n,
        a,
        i = arguments,
        l,
        s = o("react-compiler-runtime").c(38),
        u = e.onHidden,
        m = e.onIntersection,
        g = e.onVisibilityDurationUpdated,
        h = e.onVisible,
        y = e.options,
        C = e.threshold,
        b;
      s[0] !== y
        ? ((b = y === void 0 ? {} : y), (s[0] = y), (s[1] = b))
        : (b = s[1]);
      var v = b,
        S = (t = v.hiddenWhenZeroArea) != null ? t : !1,
        R = (n = v.hiddenWhenCSSStyleHidden) != null ? n : !1,
        L =
          (a = v.isEntryInViewport) != null
            ? a
            : r("intersectionObserverEntryIsIntersecting"),
        E = p(null),
        k = p(!1),
        I = p(null),
        T = p(null),
        D = p(null),
        x = c(r("HiddenSubtreePassiveContext")),
        $ =
          v.activityMonitorOverride !== void 0
            ? v.activityMonitorOverride
            : r("CometVisibilityUserActivityMonitor"),
        P;
      s[2] !== $ || s[3] !== x || s[4] !== R || s[5] !== S
        ? ((P = function (t) {
            if ($ && !$.isUserActive()) return "USER_INACTIVE";
            var e = x.getCurrentState();
            if (e.hidden) return "PUSH_VIEW_HIDDEN";
            if (e.backgrounded) return "BACKGROUNDED";
            if (k.current === !1) return "NOT_IN_VIEWPORT";
            if (S === !0 && f(t)) return "TARGET_SIZE_0";
            if (R === !0) {
              var n = _(t);
              if (n !== null) return n;
            }
            return null;
          }),
          (s[2] = $),
          (s[3] = x),
          (s[4] = R),
          (s[5] = S),
          (s[6] = P))
        : (P = s[6]);
      var N = P,
        M;
      s[7] !== N
        ? ((M = function (t) {
            return N(t) === null;
          }),
          (s[7] = N),
          (s[8] = M))
        : (M = s[8]);
      var w = M,
        A;
      s[9] !== N || s[10] !== u || s[11] !== g || s[12] !== h
        ? ((A = function (t, n, r) {
            var e = E.current != null;
            if (!e && r) {
              var o = Date.now();
              ((E.current = o),
                h != null && n != null && h({ entry: n, visibleTime: o }));
            } else if (e && !r) {
              var a,
                i = (a = E.current) != null ? a : 0,
                l = Date.now();
              if (u != null) {
                var s = t || (n && N(n)) || "UNKNOWN";
                u({
                  entry: n,
                  hiddenReason: s,
                  hiddenTime: l,
                  visibleDuration: l - i,
                  visibleTime: i,
                });
              }
              E.current = null;
            }
          }),
          (s[9] = N),
          (s[10] = u),
          (s[11] = g),
          (s[12] = h),
          (s[13] = A))
        : (A = s[13]);
      var F = A,
        O = p(F),
        B,
        W;
      (s[14] !== F
        ? ((B = function () {
            O.current = F;
          }),
          (W = [F]),
          (s[14] = F),
          (s[15] = B),
          (s[16] = W))
        : ((B = s[15]), (W = s[16])),
        d(B, W));
      var q, U;
      (s[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function () {
            return function () {
              (O.current("COMPONENT_UNMOUNTED", null, !1),
                I.current != null && (I.current(), (I.current = null)),
                D.current != null && (D.current.remove(), (D.current = null)),
                T.current != null && (T.current.remove(), (T.current = null)));
            };
          }),
          (U = []),
          (s[17] = q),
          (s[18] = U))
        : ((q = s[17]), (U = s[18])),
        r("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(q, U));
      var V;
      s[19] !== w || s[20] !== $ || s[21] !== x || s[22] !== L || s[23] !== m
        ? ((V = function (t) {
            r("nullIntersectionObserverEntryLogger")(
              t,
              "IntersectionObserverEntry is null. num_arguments=" + i.length,
            );
            var e = (k.current = L(t));
            (m && m({ entry: t, isElementVisible: w(t) }),
              I.current == null
                ? e &&
                  ((I.current =
                    $ &&
                    $.subscribe(function (e) {
                      return O.current("USER_INACTIVE", t, w(t));
                    })),
                  (D.current = x.subscribeToChanges(function (e) {
                    return O.current(
                      e.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED",
                      t,
                      w(t),
                    );
                  })),
                  T.current != null && T.current.remove(),
                  (T.current = o("Run").onBeforeUnload(function (e) {
                    O.current("PAGE_UNLOAD", null, !1);
                  }, !1)))
                : e ||
                  (I.current != null && (I.current(), (I.current = null)),
                  D.current && (D.current.remove(), (D.current = null)),
                  T.current != null &&
                    (T.current.remove(), (T.current = null))),
              O.current(null, t, w(t)));
          }),
          (s[19] = w),
          (s[20] = $),
          (s[21] = x),
          (s[22] = L),
          (s[23] = m),
          (s[24] = V))
        : (V = s[24]);
      var H = V,
        G = c(r("BaseViewportMarginsContext")),
        z = G.bottom + 1,
        j = G.left + 1,
        K = G.right + 1,
        Q = G.top + 1,
        X;
      s[25] !== z || s[26] !== j || s[27] !== K || s[28] !== Q
        ? ((X = { bottom: z, left: j, right: K, top: Q }),
          (s[25] = z),
          (s[26] = j),
          (s[27] = K),
          (s[28] = Q),
          (s[29] = X))
        : (X = s[29]);
      var Y = X,
        J = (l = v.root) != null ? l : null,
        Z;
      if (s[30] !== Y || s[31] !== v.rootMargin) {
        var ee;
        ((Z =
          (ee = v.rootMargin) != null
            ? ee
            : r("getIntersectionMarginFromViewportMargin")(Y)),
          (s[30] = Y),
          (s[31] = v.rootMargin),
          (s[32] = Z));
      } else Z = s[32];
      var te = Z,
        ne;
      return (
        s[33] !== v.scrollMargin || s[34] !== J || s[35] !== te || s[36] !== C
          ? ((ne = {
              root: J,
              rootMargin: te,
              scrollMargin: v.scrollMargin,
              threshold: C,
            }),
            (s[33] = v.scrollMargin),
            (s[34] = J),
            (s[35] = te),
            (s[36] = C),
            (s[37] = ne))
          : (ne = s[37]),
        r("useIntersectionObserver")(H, ne)
      );
    }
    l.default = g;
  },
  98,
);
