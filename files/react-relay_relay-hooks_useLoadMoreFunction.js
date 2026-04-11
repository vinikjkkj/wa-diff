__d(
  "react-relay/relay-hooks/useLoadMoreFunction",
  [
    "invariant",
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/getConnectionState",
    "react-relay/relay-hooks/useFetchTrackingRef",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useLoadMoreFunction_EXPERIMENTAL",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("react-compiler-runtime").c,
      u = e || (e = n("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState,
      p = n("relay-runtime").__internal.fetchQuery,
      _ = n("relay-runtime").RelayFeatureFlags,
      f = n("relay-runtime").createOperationDescriptor,
      g = n("relay-runtime").getPaginationVariables,
      h = n("relay-runtime").getRefetchMetadata,
      y = n("relay-runtime").getSelector;
    function C(e) {
      return _.ENABLE_ACTIVITY_COMPATIBILITY
        ? n("react-relay/relay-hooks/useLoadMoreFunction_EXPERIMENTAL")(e)
        : b(e);
    }
    function b(e) {
      var t = s(46),
        r = e.direction,
        o = e.fragmentNode,
        a = e.fragmentRef,
        i = e.fragmentIdentifier,
        u = e.fragmentData,
        _ = e.connectionPathInFragmentData,
        C = e.paginationRequest,
        b = e.paginationMetadata,
        R = e.componentDisplayName,
        L = e.observer,
        E = e.onReset,
        k = n("react-relay/relay-hooks/useRelayEnvironment")(),
        I = n("react-relay/relay-hooks/useFetchTrackingRef")(),
        T = I.isFetchingRef,
        D = I.startFetch,
        x = I.disposeFetch,
        $ = I.completeFetch,
        P;
      t[0] !== R || t[1] !== o
        ? ((P = h(o, R)), (t[0] = R), (t[1] = o), (t[2] = P))
        : (P = t[2]);
      var N = P,
        M = N.identifierInfo,
        w =
          (M == null ? void 0 : M.identifierField) != null &&
          u != null &&
          typeof u == "object"
            ? u[M.identifierField]
            : null,
        A = n("react-relay/relay-hooks/useIsMountedRef")(),
        F = m(k),
        O = F[0],
        B = F[1],
        W = m(i),
        q = W[0],
        U = W[1],
        V = n("react-relay/relay-hooks/useIsOperationNodeActive")(o, a),
        H = k !== O || i !== q;
      H && (x(), E(), B(k), U(i));
      var G;
      t[3] !== _ || t[4] !== r || t[5] !== u || t[6] !== o
        ? ((G = n("react-relay/relay-hooks/getConnectionState")(r, o, u, _)),
          (t[3] = _),
          (t[4] = r),
          (t[5] = u),
          (t[6] = o),
          (t[7] = G))
        : (G = t[7]);
      var z = G,
        j = z.cursor,
        K = z.hasMore,
        Q,
        X;
      (t[8] !== x
        ? ((Q = function () {
            return function () {
              x();
            };
          }),
          (X = [x]),
          (t[8] = x),
          (t[9] = Q),
          (t[10] = X))
        : ((Q = t[9]), (X = t[10])),
        d(Q, X));
      var Y = u == null || V,
        J;
      t[11] !== $ ||
      t[12] !== R ||
      t[13] !== j ||
      t[14] !== r ||
      t[15] !== x ||
      t[16] !== k ||
      t[17] !== o ||
      t[18] !== a ||
      t[19] !== M ||
      t[20] !== w ||
      t[21] !== T ||
      t[22] !== A ||
      t[23] !== Y ||
      t[24] !== L ||
      t[25] !== b ||
      t[26] !== C ||
      t[27] !== D
        ? ((J = function (t, i) {
            var e = i == null ? void 0 : i.onComplete;
            if (A.current !== !0)
              return (
                n("warning")(
                  !1,
                  "Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
                  o.name,
                  R,
                ),
                { dispose: S }
              );
            var s = y(o, a);
            if (T.current === !0 || Y)
              return (
                s == null &&
                  n("warning")(
                    !1,
                    "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.",
                    o.name,
                    R,
                    R,
                  ),
                e && e(null),
                { dispose: v }
              );
            (s != null && s.kind !== "PluralReaderSelector") ||
              l(0, 14120, o.name, R);
            var u = s.owner.variables,
              c = s.variables,
              d = i == null ? void 0 : i.UNSTABLE_extraVariables,
              m = babelHelpers.extends({}, u, c),
              _ = g(r, t, j, m, babelHelpers.extends({}, d), b);
            M != null &&
              (typeof w != "string" &&
                n("warning")(
                  !1,
                  "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                  M.identifierField,
                  w,
                ),
              (_[M.identifierQueryVariableName] = w));
            var h = f(C, _, { force: !0 });
            return (
              p(k, h).subscribe(
                babelHelpers.extends({}, L, {
                  start: function (t) {
                    (D(t), L.start && L.start(t));
                  },
                  complete: function () {
                    ($(), L.complete && L.complete(), e && e(null));
                  },
                  error: function (n) {
                    ($(), L.error && L.error(n), e && e(n));
                  },
                }),
              ),
              { dispose: x }
            );
          }),
          (t[11] = $),
          (t[12] = R),
          (t[13] = j),
          (t[14] = r),
          (t[15] = x),
          (t[16] = k),
          (t[17] = o),
          (t[18] = a),
          (t[19] = M),
          (t[20] = w),
          (t[21] = T),
          (t[22] = A),
          (t[23] = Y),
          (t[24] = L),
          (t[25] = b),
          (t[26] = C),
          (t[27] = D),
          (t[28] = J))
        : (J = t[28]);
      var Z;
      t[29] !== $ ||
      t[30] !== R ||
      t[31] !== j ||
      t[32] !== r ||
      t[33] !== x ||
      t[34] !== k ||
      t[35] !== o.name ||
      t[36] !== a ||
      t[37] !== w ||
      t[38] !== T ||
      t[39] !== Y ||
      t[40] !== D
        ? ((Z = [k, w, r, j, D, x, $, T, Y, o.name, a, R]),
          (t[29] = $),
          (t[30] = R),
          (t[31] = j),
          (t[32] = r),
          (t[33] = x),
          (t[34] = k),
          (t[35] = o.name),
          (t[36] = a),
          (t[37] = w),
          (t[38] = T),
          (t[39] = Y),
          (t[40] = D),
          (t[41] = Z))
        : (Z = t[41]);
      var ee = c(J, Z),
        te;
      return (
        t[42] !== x || t[43] !== K || t[44] !== ee
          ? ((te = [ee, K, x]),
            (t[42] = x),
            (t[43] = K),
            (t[44] = ee),
            (t[45] = te))
          : (te = t[45]),
        te
      );
    }
    function v() {}
    function S() {}
    a.exports = C;
  },
  null,
);
