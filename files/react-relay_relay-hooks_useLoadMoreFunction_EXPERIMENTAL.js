__d(
  "react-relay/relay-hooks/useLoadMoreFunction_EXPERIMENTAL",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/getConnectionState",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = n("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = n("relay-runtime").__internal.fetchQuery,
      p = n("relay-runtime").createOperationDescriptor,
      _ = n("relay-runtime").getPaginationVariables,
      f = n("relay-runtime").getRefetchMetadata,
      g = n("relay-runtime").getSelector;
    function h(e) {
      var t = e.direction,
        r = e.fragmentNode,
        o = e.fragmentRef,
        a = e.fragmentIdentifier,
        i = e.fragmentData,
        s = e.connectionPathInFragmentData,
        h = e.paginationRequest,
        y = e.paginationMetadata,
        C = e.componentDisplayName,
        b = e.observer,
        v = e.onReset,
        S = n("react-relay/relay-hooks/useRelayEnvironment")(),
        R = f(r, C),
        L = R.identifierInfo,
        E =
          (L == null ? void 0 : L.identifierField) != null &&
          i != null &&
          typeof i == "object"
            ? i[L.identifierField]
            : null,
        k = c({ kind: "none" }),
        I = d(S),
        T = I[0],
        D = I[1],
        x = d(a),
        $ = x[0],
        P = x[1],
        N = n("react-relay/relay-hooks/useIsOperationNodeActive")(r, o),
        M = u(function () {
          (k.current.kind === "fetching" &&
            k.current.subscription.unsubscribe(),
            (k.current = { kind: "none" }));
        }, []),
        w = S !== T || a !== $;
      w && (M(), v(), D(S), P(a));
      var A = n("react-relay/relay-hooks/getConnectionState")(t, r, i, s),
        F = A.cursor,
        O = A.hasMore,
        B = i == null || N,
        W = n("react-relay/relay-hooks/useIsMountedRef")(),
        q = u(
          function (e, a) {
            var i = a == null ? void 0 : a.onComplete;
            if (W.current !== !0)
              return (
                n("warning")(
                  !1,
                  "Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
                  r.name,
                  C,
                ),
                { dispose: function () {} }
              );
            var s = g(r, o);
            if (k.current.kind === "fetching" || B)
              return (
                s == null &&
                  n("warning")(
                    !1,
                    "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.",
                    r.name,
                    C,
                    C,
                  ),
                i && i(null),
                { dispose: function () {} }
              );
            (s != null && s.kind !== "PluralReaderSelector") ||
              l(0, 14120, r.name, C);
            var u = s.owner.variables,
              c = s.variables,
              d = a == null ? void 0 : a.UNSTABLE_extraVariables,
              f = babelHelpers.extends({}, u, c),
              v = _(t, e, F, f, babelHelpers.extends({}, d), y);
            L != null &&
              (typeof E != "string" &&
                n("warning")(
                  !1,
                  "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                  L.identifierField,
                  E,
                ),
              (v[L.identifierQueryVariableName] = E));
            var R = p(h, v, { force: !0 });
            return (
              m(S, R).subscribe(
                babelHelpers.extends({}, b, {
                  start: function (t) {
                    ((k.current = { kind: "fetching", subscription: t }),
                      b.start && b.start(t));
                  },
                  complete: function () {
                    ((k.current = { kind: "none" }),
                      b.complete && b.complete(),
                      i && i(null));
                  },
                  error: function (t) {
                    ((k.current = { kind: "none" }),
                      b.complete && b.complete(),
                      i && i(t));
                  },
                }),
              ),
              { dispose: function () {} }
            );
          },
          [S, E, t, F, B, r.name, o, C],
        );
      return [q, O, M];
    }
    a.exports = h;
  },
  null,
);
