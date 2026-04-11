__d(
  "react-relay/relay-hooks/usePaginationFragment",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentInternal",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useCallback,
      c = s.useDebugValue,
      d = s.useState,
      m = n("relay-runtime").RelayFeatureFlags,
      p = n("relay-runtime").getFragment,
      _ = n("relay-runtime").getFragmentIdentifier,
      f = n("relay-runtime").getPaginationMetadata;
    function g(e, t) {
      var r = p(e);
      n("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        r,
        "first argument of usePaginationFragment()",
      );
      var o = "usePaginationFragment()",
        a = f(r, o),
        i = a.connectionPathInFragmentData,
        l = a.paginationRequest,
        s = a.paginationMetadata,
        c = n("react-relay/relay-hooks/useRefetchableFragmentInternal")(
          r,
          t,
          o,
        ),
        d = c.fragmentData,
        m = c.fragmentRef,
        g = c.refetch,
        y = _(r, m),
        C = h({
          componentDisplayName: o,
          connectionPathInFragmentData: i,
          direction: "backward",
          fragmentData: d,
          fragmentIdentifier: y,
          fragmentNode: r,
          fragmentRef: m,
          paginationMetadata: s,
          paginationRequest: l,
        }),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = h({
          componentDisplayName: o,
          connectionPathInFragmentData: i,
          direction: "forward",
          fragmentData: d,
          fragmentIdentifier: y,
          fragmentNode: r,
          fragmentRef: m,
          paginationMetadata: s,
          paginationRequest: l,
        }),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = u(
          function (e, t) {
            return (
              T(),
              R(),
              g(e, babelHelpers.extends({}, t, { __environment: void 0 }))
            );
          },
          [T, R, g],
        );
      return {
        data: d,
        loadNext: E,
        loadPrevious: b,
        hasNext: k,
        hasPrevious: v,
        isLoadingNext: I,
        isLoadingPrevious: S,
        refetch: D,
      };
    }
    function h(e) {
      var t = l(24),
        r = n("react-relay/relay-hooks/useRelayEnvironment")(),
        o = d(!1),
        a = o[0],
        i = o[1],
        s;
      t[0] !== r || t[1] !== i
        ? ((s = function (t) {
            var e,
              n = (e = r.getScheduler()) == null ? void 0 : e.schedule;
            n
              ? n(function () {
                  i(t);
                })
              : i(t);
          }),
          (t[0] = r),
          (t[1] = i),
          (t[2] = s))
        : (s = t[2]);
      var u = s,
        c,
        p,
        _,
        f;
      t[3] !== u
        ? ((c = function () {
            return u(!0);
          }),
          (p = function () {
            return u(!1);
          }),
          (_ = function () {
            return u(!1);
          }),
          (f = m.ENABLE_USE_PAGINATION_IS_LOADING_FIX
            ? function () {
                return u(!1);
              }
            : void 0),
          (t[3] = u),
          (t[4] = c),
          (t[5] = p),
          (t[6] = _),
          (t[7] = f))
        : ((c = t[4]), (p = t[5]), (_ = t[6]), (f = t[7]));
      var g;
      t[8] !== c || t[9] !== p || t[10] !== _ || t[11] !== f
        ? ((g = { start: c, complete: p, error: _, unsubscribe: f }),
          (t[8] = c),
          (t[9] = p),
          (t[10] = _),
          (t[11] = f),
          (t[12] = g))
        : (g = t[12]);
      var h = g,
        y;
      t[13] !== u
        ? ((y = function () {
            return u(!1);
          }),
          (t[13] = u),
          (t[14] = y))
        : (y = t[14]);
      var C = y,
        b;
      t[15] !== e || t[16] !== C || t[17] !== h
        ? ((b = babelHelpers.extends({}, e, { observer: h, onReset: C })),
          (t[15] = e),
          (t[16] = C),
          (t[17] = h),
          (t[18] = b))
        : (b = t[18]);
      var v = n("react-relay/relay-hooks/useLoadMoreFunction")(b),
        S = v[0],
        R = v[1],
        L = v[2],
        E;
      return (
        t[19] !== L || t[20] !== R || t[21] !== a || t[22] !== S
          ? ((E = [S, R, a, L]),
            (t[19] = L),
            (t[20] = R),
            (t[21] = a),
            (t[22] = S),
            (t[23] = E))
          : (E = t[23]),
        E
      );
    }
    a.exports = g;
  },
  null,
);
