__d(
  "useCometRouterLinkEventHandlersBase",
  [
    "JSScheduler",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "useCometPreloader",
    "useCometRouterDispatcher",
    "useCometRouterLinkQueryPrefetcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["onNavigate_DEPRECATED_FIXME"],
      s,
      u,
      c = u || (u = o("react")),
      d = c.startTransition,
      m = c.useCallback,
      p = c.useEffect,
      _ = c.useRef;
    function f(t) {
      var n = o("react-compiler-runtime").c(72),
        a = t.delayQueryCleanup,
        i = t.dispatcherExtras,
        l = t.href,
        u = t.isRouterLink,
        c = t.onBlur,
        m = t.onFocus,
        f = t.onHoverEnd,
        g = t.onHoverMove,
        h = t.onHoverStart,
        y = t.onNonRouterPress,
        C = t.onPress,
        b = t.onPressStart,
        v = t.onQueryPreload,
        S = t.onQueryUsed,
        R = t.onTransitionOptimistic,
        L = t.prefetchQueriesOnHover,
        E = t.prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
        k = t.preloadCodeOnMount,
        I = t.preventLocalNavigation,
        T = t.shouldTriggerNavOnPress,
        D = t.target,
        x = a === void 0 ? !1 : a,
        $ = u && I !== !0 && (D == null || D === "_self"),
        P = L === !0 ? "button_aggressive" : "button",
        N = r("useCometRouterDispatcher")(),
        M = _(null),
        w = _(null),
        A;
      n[0] !== i
        ? ((A = i != null ? i : {}), (n[0] = i), (n[1] = A))
        : (A = n[1]);
      var F, O;
      if (n[2] !== A) {
        var B = A;
        ((O = B.onNavigate_DEPRECATED_FIXME),
          (F = babelHelpers.objectWithoutPropertiesLoose(B, e)),
          (n[2] = A),
          (n[3] = F),
          (n[4] = O));
      } else ((F = n[3]), (O = n[4]));
      var W;
      n[5] !== x ||
      n[6] !== F ||
      n[7] !== l ||
      n[8] !== $ ||
      n[9] !== v ||
      n[10] !== S
        ? ((W = {
            delayCleanup: x,
            dispatcherExtras: F,
            href: l,
            isRouterLink: $,
            onQueryPreload: v,
            onQueryUsed: S,
          }),
          (n[5] = x),
          (n[6] = F),
          (n[7] = l),
          (n[8] = $),
          (n[9] = v),
          (n[10] = S),
          (n[11] = W))
        : (W = n[11]);
      var q = r("useCometRouterLinkQueryPrefetcher")(W),
        U = q.cancelPrefetchRouteQueries,
        V = q.getPrefetchedQueryContainerAndMarkAsUsed,
        H = q.prefetchRouteQueries,
        G;
      n[12] !== N ||
      n[13] !== i ||
      n[14] !== O ||
      n[15] !== V ||
      n[16] !== l ||
      n[17] !== $ ||
      n[18] !== y ||
      n[19] !== R ||
      n[20] !== T
        ? ((G = function (t) {
            if (T(t)) {
              if (!$) y == null || y(t);
              else if (N && l != null) {
                var e,
                  n,
                  r = V();
                N.go(
                  l,
                  babelHelpers.extends(
                    {
                      eventTimestamp:
                        (e =
                          t == null || (n = t.nativeEvent) == null
                            ? void 0
                            : n.timestamp) != null
                          ? e
                          : t.timeStamp,
                      onNavigate_DEPRECATED_FIXME: function (t) {
                        (r == null || r.cancel(), O == null || O(t));
                      },
                      onTransitionOptimistic: R,
                      prefetcher: r,
                    },
                    i,
                  ),
                );
              }
            }
          }),
          (n[12] = N),
          (n[13] = i),
          (n[14] = O),
          (n[15] = V),
          (n[16] = l),
          (n[17] = $),
          (n[18] = y),
          (n[19] = R),
          (n[20] = T),
          (n[21] = G))
        : (G = n[21]);
      var z = G,
        j;
      n[22] !== z || n[23] !== R || n[24] !== C
        ? ((j = function (t) {
            (C == null || C(t),
              d(function () {
                (R == null || R(), z(t));
              }));
          }),
          (n[22] = z),
          (n[23] = R),
          (n[24] = C),
          (n[25] = j))
        : (j = n[25]);
      var K = j,
        Q = i == null ? void 0 : i.target,
        X;
      n[26] !== N || n[27] !== l || n[28] !== $ || n[29] !== Q
        ? ((X = function () {
            l != null &&
              M.current !== l &&
              $ &&
              (s || (s = r("JSScheduler"))).scheduleSpeculativeCallback(
                function () {
                  N != null &&
                    M.current !== l &&
                    ((M.current = l), N.preloadRouteCode(l, Q));
                },
              );
          }),
          (n[26] = N),
          (n[27] = l),
          (n[28] = $),
          (n[29] = Q),
          (n[30] = X))
        : (X = n[30]);
      var Y = X,
        J = r("useCometPreloader")(P, Y, H, E === !0 ? r("emptyFunction") : U),
        Z = J.onFocusInPreloader,
        ee = J.onFocusOutPreloader,
        te = J.onHighIntentPreloader,
        ne = J.onHoverInPreloader,
        re = J.onHoverMovePreloader,
        oe = J.onHoverOutPreloader,
        ae = J.onPressInPreloader,
        ie;
      n[31] !== l || n[32] !== $ || n[33] !== te
        ? ((ie = function () {
            l != null && w.current !== l && $ && ((w.current = l), te(!0));
          }),
          (n[31] = l),
          (n[32] = $),
          (n[33] = te),
          (n[34] = ie))
        : (ie = n[34]);
      var le = ie,
        se;
      n[35] !== ae || n[36] !== b
        ? ((se = function (t) {
            (b == null || b(t), ae(t));
          }),
          (n[35] = ae),
          (n[36] = b),
          (n[37] = se))
        : (se = n[37]);
      var ue = se,
        ce;
      n[38] !== $ || n[39] !== ne || n[40] !== h
        ? ((ce = function (t) {
            (h == null || h(t), $ && ne(t));
          }),
          (n[38] = $),
          (n[39] = ne),
          (n[40] = h),
          (n[41] = ce))
        : (ce = n[41]);
      var de = ce,
        me;
      n[42] !== re || n[43] !== g
        ? ((me = function (t) {
            (g == null || g(t), re(t));
          }),
          (n[42] = re),
          (n[43] = g),
          (n[44] = me))
        : (me = n[44]);
      var pe = me,
        _e;
      n[45] !== oe || n[46] !== f
        ? ((_e = function (t) {
            (f == null || f(t), oe());
          }),
          (n[45] = oe),
          (n[46] = f),
          (n[47] = _e))
        : (_e = n[47]);
      var fe = _e,
        ge;
      n[48] !== $ || n[49] !== Z || n[50] !== m
        ? ((ge = function (t) {
            (m == null || m(t), $ && Z(t));
          }),
          (n[48] = $),
          (n[49] = Z),
          (n[50] = m),
          (n[51] = ge))
        : (ge = n[51]);
      var he = ge,
        ye;
      n[52] !== ee || n[53] !== c
        ? ((ye = function (t) {
            (c == null || c(t), ee());
          }),
          (n[52] = ee),
          (n[53] = c),
          (n[54] = ye))
        : (ye = n[54]);
      var Ce = ye,
        be,
        ve;
      (n[55] !== N ||
      n[56] !== l ||
      n[57] !== $ ||
      n[58] !== le ||
      n[59] !== E ||
      n[60] !== k ||
      n[61] !== Y
        ? ((be = function () {
            l != null &&
              $ &&
              (E === !0
                ? le()
                : k === !0
                  ? Y()
                  : (s || (s = r("JSScheduler"))).scheduleSpeculativeCallback(
                      function () {
                        N == null || N.prefetchRouteDefinition(l);
                      },
                    ));
          }),
          (ve = [N, l, $, le, E, k, Y]),
          (n[55] = N),
          (n[56] = l),
          (n[57] = $),
          (n[58] = le),
          (n[59] = E),
          (n[60] = k),
          (n[61] = Y),
          (n[62] = be),
          (n[63] = ve))
        : ((be = n[62]), (ve = n[63])),
        p(be, ve));
      var Se;
      return (
        n[64] !== Ce ||
        n[65] !== he ||
        n[66] !== fe ||
        n[67] !== pe ||
        n[68] !== de ||
        n[69] !== K ||
        n[70] !== ue
          ? ((Se = {
              onBlur: Ce,
              onFocus: he,
              onHoverEnd: fe,
              onHoverMove: pe,
              onHoverStart: de,
              onPress: K,
              onPressStart: ue,
            }),
            (n[64] = Ce),
            (n[65] = he),
            (n[66] = fe),
            (n[67] = pe),
            (n[68] = de),
            (n[69] = K),
            (n[70] = ue),
            (n[71] = Se))
          : (Se = n[71]),
        Se
      );
    }
    l.default = f;
  },
  98,
);
