__d(
  "react-relay/relay-hooks/useRefetchableFragmentInternal",
  [
    "invariant",
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/readFragmentInternal",
    "react-relay/relay-hooks/useFragmentInternal",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("react-compiler-runtime").c,
      u = n(
        "react-relay/relay-hooks/QueryResource",
      ).getQueryResourceForEnvironment,
      c = e || (e = n("react")),
      d = c.useCallback,
      m = c.useContext,
      p = c.useReducer,
      _ = n("relay-runtime").__internal.fetchQuery,
      f = n("relay-runtime").createOperationDescriptor,
      g = n("relay-runtime").getFragmentIdentifier,
      h = n("relay-runtime").getRefetchMetadata,
      y = n("relay-runtime").getSelector,
      C = n("relay-runtime").getValueAtPath;
    function b(e, t) {
      switch (t.type) {
        case "refetch": {
          var n;
          return babelHelpers.extends({}, e, {
            fetchPolicy: t.fetchPolicy,
            mirroredEnvironment:
              (n = t.refetchEnvironment) != null ? n : e.mirroredEnvironment,
            onComplete: t.onComplete,
            refetchEnvironment: t.refetchEnvironment,
            refetchQuery: t.refetchQuery,
            renderPolicy: t.renderPolicy,
          });
        }
        case "reset":
          return {
            fetchPolicy: void 0,
            mirroredEnvironment: t.environment,
            mirroredFragmentIdentifier: t.fragmentIdentifier,
            onComplete: void 0,
            refetchQuery: null,
            renderPolicy: void 0,
          };
        default:
          throw (
            t.type,
            new Error("useRefetchableFragmentNode: Unexpected action type")
          );
      }
    }
    function v(e, t, r) {
      var o = s(10),
        a = n("react-relay/relay-hooks/useRelayEnvironment")(),
        i = h(e, r),
        c = i.refetchableRequest,
        d = i.fragmentRefPathInResponse,
        f = i.identifierInfo,
        y = g(e, t),
        v = p(b, {
          fetchPolicy: void 0,
          mirroredEnvironment: a,
          mirroredFragmentIdentifier: y,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        R = v[0],
        L = v[1],
        E = R.fetchPolicy,
        k = R.mirroredEnvironment,
        I = R.mirroredFragmentIdentifier,
        T = R.onComplete,
        D = R.refetchEnvironment,
        x = R.refetchQuery,
        $ = R.renderPolicy,
        P = D != null ? D : a,
        N = u(P),
        M = m(n("react-relay/relay-hooks/ProfilerContext")),
        w = P !== k || y !== I,
        A = n("react-relay/relay-hooks/useQueryLoader")(c),
        F = A[0],
        O = A[1],
        B = A[2],
        W = t;
      if (w) (L({ environment: P, fragmentIdentifier: y, type: "reset" }), B());
      else if (x != null && F != null) {
        var q, U;
        o[0] !== T
          ? ((U = function (t) {
              T && T(t != null ? t : null);
            }),
            (o[0] = T),
            (o[1] = U))
          : (U = o[1]);
        var V = U,
          H;
        o[2] !== P || o[3] !== F.source || o[4] !== x
          ? ((H = F.source != null ? F.source : _(P, x)),
            (o[2] = P),
            (o[3] = F.source),
            (o[4] = x),
            (o[5] = H))
          : (H = o[5]);
        var G = H,
          z = M.wrapPrepareQueryResource(function () {
            return N.prepare(
              x,
              G,
              E,
              $,
              {
                complete: function () {
                  V();
                },
                error: V,
              },
              F.fetchKey,
              M,
            );
          }),
          j = n("react-relay/relay-hooks/readFragmentInternal")(
            P,
            z.fragmentNode,
            z.fragmentRef,
            r,
          ).data;
        j != null || l(0, 13942);
        var K = C(j, d);
        W = K;
      }
      var Q = n("react-relay/relay-hooks/useFragmentInternal")(e, W, r),
        X = S(r, L, B, Q, y, e, d, f, O, t, c),
        Y;
      return (
        o[6] !== Q || o[7] !== W || o[8] !== X
          ? ((Y = { fragmentData: Q, fragmentRef: W, refetch: X }),
            (o[6] = Q),
            (o[7] = W),
            (o[8] = X),
            (o[9] = Y))
          : (Y = o[9]),
        Y
      );
    }
    function S(e, t, r, o, a, i, l, u, c, m, p) {
      var _ = s(17),
        g = n("react-relay/relay-hooks/useIsMountedRef")(),
        h =
          (u == null ? void 0 : u.identifierField) != null &&
          o != null &&
          typeof o == "object"
            ? o[u.identifierField]
            : null,
        C;
      _[0] !== e ||
      _[1] !== t ||
      _[2] !== r ||
      _[3] !== i ||
      _[4] !== u ||
      _[5] !== h ||
      _[6] !== g ||
      _[7] !== c ||
      _[8] !== m ||
      _[9] !== p
        ? ((C = function (a, l) {
            if (g.current !== !0)
              return (
                n("warning")(
                  !1,
                  "Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
                  i.name,
                  e,
                ),
                { dispose: R }
              );
            m == null &&
              n("warning")(
                !1,
                "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.",
                i.name,
                e,
                e,
              );
            var o = l == null ? void 0 : l.__environment,
              s = l == null ? void 0 : l.fetchPolicy,
              d = l == null ? void 0 : l.UNSTABLE_renderPolicy,
              _ = l == null ? void 0 : l.onComplete,
              C = y(i, m),
              b,
              v;
            if (C == null) ((b = {}), (v = {}));
            else if (C.kind === "PluralReaderSelector") {
              var S, L, E, k;
              ((b =
                (S =
                  (L = C.selectors[0]) == null ? void 0 : L.owner.variables) !=
                null
                  ? S
                  : {}),
                (v =
                  (E = (k = C.selectors[0]) == null ? void 0 : k.variables) !=
                  null
                    ? E
                    : {}));
            } else ((b = C.owner.variables), (v = C.variables));
            var I = babelHelpers.extends({}, b, v, a);
            u != null &&
              !Object.prototype.hasOwnProperty.call(
                a,
                u.identifierQueryVariableName,
              ) &&
              (typeof h != "string" &&
                n("warning")(
                  !1,
                  "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                  u.identifierField,
                  h,
                ),
              (I[u.identifierQueryVariableName] = h));
            var T = f(p, I, { force: !0 });
            return (
              c(T.request.variables, {
                __environment: o,
                __nameForWarning: "refetch",
                fetchPolicy: s,
              }),
              t({
                fetchPolicy: s,
                onComplete: _,
                refetchEnvironment: o,
                refetchQuery: T,
                renderPolicy: d,
                type: "refetch",
              }),
              { dispose: r }
            );
          }),
          (_[0] = e),
          (_[1] = t),
          (_[2] = r),
          (_[3] = i),
          (_[4] = u),
          (_[5] = h),
          (_[6] = g),
          (_[7] = c),
          (_[8] = m),
          (_[9] = p),
          (_[10] = C))
        : (C = _[10]);
      var b;
      return (
        _[11] !== t || _[12] !== r || _[13] !== a || _[14] !== h || _[15] !== c
          ? ((b = [a, t, r, h, c]),
            (_[11] = t),
            (_[12] = r),
            (_[13] = a),
            (_[14] = h),
            (_[15] = c),
            (_[16] = b))
          : (b = _[16]),
        d(C, b)
      );
    }
    function R() {}
    var L;
    a.exports = v;
  },
  null,
);
