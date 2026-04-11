__d(
  "react-relay/relay-hooks/usePrefetchableForwardPaginationFragment",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentInternal",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = n("react")),
      u = s.useCallback,
      c = s.useDebugValue,
      d = s.useEffect,
      m = s.useLayoutEffect,
      p = s.useMemo,
      _ = s.useRef,
      f = s.useState,
      g = n("relay-runtime").getFragment,
      h = n("relay-runtime").getFragmentIdentifier,
      y = n("relay-runtime").getPaginationMetadata,
      C = n("relay-runtime").ConnectionInterface,
      b = n("relay-runtime").RelayFeatureFlags,
      v = n("relay-runtime").getSelector,
      S = n("relay-runtime").getValueAtPath;
    function R(e, t, r, o, a, i, s) {
      var c;
      (i === void 0 && (i = 1), s === void 0 && (s = !1));
      var R = g(e);
      n("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        R,
        "first argument of usePrefetchableForwardPaginationFragment()",
      );
      var L = "usePrefetchableForwardPaginationFragment()",
        E = y(R, L),
        k = E.connectionPathInFragmentData,
        I = E.paginationRequest,
        T = E.paginationMetadata,
        D = n("react-relay/relay-hooks/useRefetchableFragmentInternal")(
          R,
          t,
          L,
        ),
        x = D.fragmentData,
        $ = D.fragmentRef,
        P = D.refetch,
        N = h(R, $),
        M = p(
          function () {
            var e = S(x, k);
            if (e == null) return null;
            var t = C.get(),
              n = t.EDGES;
            return e[n];
          },
          [k, x],
        ),
        w = M == null ? -1 : M.length,
        A = f(o != null ? o : w),
        F = A[0],
        O = A[1],
        B = F;
      F === -1 && w !== -1 && ((B = o != null ? o : w), O(B));
      var W = n("react-relay/relay-hooks/useRelayEnvironment")(),
        q = f(!1),
        U = q[0],
        V = q[1],
        H = f(!1),
        G = H[0],
        z = H[1],
        j = _(0),
        K = u(
          function (e) {
            var t,
              n = (t = W.getScheduler()) == null ? void 0 : t.schedule;
            n
              ? n(function () {
                  V(e);
                })
              : V(e);
          },
          [W],
        ),
        Q = _(!1),
        X = p(
          function () {
            function e() {
              ((Q.current = !1), K(!1));
            }
            return {
              start: function () {
                ((Q.current = !0), V(!0));
              },
              complete: e,
              error: e,
              unsubscribe: b.ENABLE_USE_PAGINATION_IS_LOADING_FIX ? e : void 0,
            };
          },
          [K],
        ),
        Y = u(
          function () {
            if (!G) {
              var e,
                t = (e = W.getScheduler()) == null ? void 0 : e.schedule;
              t
                ? t(function () {
                    O(-1);
                  })
                : O(-1);
            }
            ((Q.current = !1), K(!1));
          },
          [W, G, K],
        ),
        J = n("react-relay/relay-hooks/useLoadMoreFunction")({
          componentDisplayName: L,
          connectionPathInFragmentData: k,
          direction: "forward",
          fragmentData: x,
          fragmentIdentifier: N,
          fragmentNode: R,
          fragmentRef: $,
          paginationMetadata: T,
          paginationRequest: I,
          observer: X,
          onReset: Y,
        }),
        Z = J[0],
        ee = J[1],
        te = J[2];
      m(
        function () {
          j.current = w - B;
        },
        [B, w],
      );
      var ne = a == null ? void 0 : a.UNSTABLE_extraVariables,
        re = a == null ? void 0 : a.onComplete,
        oe = u(
          function (e, t) {
            (!Q.current || j.current >= 0) &&
              ((j.current -= e),
              O(function (t) {
                return t + e;
              }),
              !Q.current &&
                j.current < 0 &&
                Z(
                  Math.max(i, Math.min(e, r - j.current)),
                  t != null
                    ? t
                    : {
                        onComplete: re,
                        UNSTABLE_extraVariables:
                          typeof ne == "function"
                            ? ne({
                                hasNext: ee,
                                data: x,
                                getServerEdges: function () {
                                  var e = v(ae, M);
                                  return e == null
                                    ? []
                                    : (e.kind === "PluralReaderSelector" ||
                                        l(0, 87948),
                                      e.selectors.map(function (e) {
                                        return W.lookup(e).data;
                                      }));
                                },
                              })
                            : ne,
                      },
                ));
          },
          [r, Z, i, M, x, ne, re],
        ),
        ae =
          (c = e.metadata) == null || (c = c.refetch) == null
            ? void 0
            : c.edgesFragment;
      (ae != null || l(0, 89452),
        d(
          function () {
            if (!Q.current && !U && !G && !s && ee && (w - B < r || B > w)) {
              var e = re;
              Z(Math.max(r - Math.max(w - B, 0), B - w, i), {
                onComplete: e,
                UNSTABLE_extraVariables:
                  typeof ne == "function"
                    ? ne({
                        hasNext: ee,
                        data: x,
                        getServerEdges: function () {
                          var e = v(ae, M);
                          return e == null
                            ? []
                            : (e.kind === "PluralReaderSelector" || l(0, 87948),
                              e.selectors.map(function (e) {
                                return W.lookup(e).data;
                              }));
                        },
                      })
                    : ne,
              });
            }
          },
          [ee, r, G, Z, B, ne, re, w, M, U, i, W, ae],
        ));
      var ie = Math.min(B, w),
        le = p(
          function () {
            var e;
            return (e = M == null ? void 0 : M.slice(0, ie)) != null ? e : [];
          },
          [M, ie],
        ),
        se = n("react-relay/relay-hooks/useFragment")(ae, le),
        ue = u(
          function (e, t) {
            return (
              te(),
              z(!0),
              P(
                e,
                babelHelpers.extends({}, t, {
                  onComplete: function (n) {
                    var e,
                      r = (e = W.getScheduler()) == null ? void 0 : e.schedule;
                    (r
                      ? r(function () {
                          (z(!1), O(-1));
                        })
                      : (z(!1), O(-1)),
                      t == null || t.onComplete == null || t.onComplete(n));
                  },
                  __environment: void 0,
                }),
              )
            );
          },
          [te, W, P],
        );
      return {
        edges: se,
        data: x,
        loadNext: oe,
        hasNext: ee || w > B,
        isLoadingNext: U && B > w,
        refetch: ue,
      };
    }
    a.exports = R;
  },
  null,
);
