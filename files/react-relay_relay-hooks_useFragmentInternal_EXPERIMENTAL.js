__d(
  "react-relay/relay-hooks/useFragmentInternal_EXPERIMENTAL",
  [
    "invariant",
    "Promise",
    "react",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useRelayLoggingContext",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n(
        "react-relay/relay-hooks/QueryResource",
      ).getQueryResourceForEnvironment,
      c = e || (e = n("react")),
      d = c.useDebugValue,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = n("relay-runtime").__internal,
      h = g.fetchQuery,
      y = g.getPromiseForActiveRequest,
      C = n("relay-runtime").RelayFeatureFlags,
      b = n("relay-runtime").areEqualSelectors,
      v = n("relay-runtime").createOperationDescriptor,
      S = n("relay-runtime").getPendingOperationsForFragment,
      R = n("relay-runtime").getSelector,
      L = n("relay-runtime").getVariablesFromFragment,
      E = n("relay-runtime").handlePotentialSnapshotErrors,
      k = n("relay-runtime").recycleNodesInto;
    function I(e) {
      return e.kind === "bailout"
        ? !1
        : e.kind === "singular"
          ? e.snapshot.isMissingData
          : e.snapshots.some(function (e) {
              return e.isMissingData;
            });
    }
    function T(e) {
      if (e.kind === "bailout") return null;
      if (e.kind === "singular") {
        var t;
        return (t = e.snapshot.missingClientEdges) != null ? t : null;
      } else {
        var n = null;
        for (var r of e.snapshots)
          if (r.missingClientEdges) {
            n = n != null ? n : [];
            for (var o of r.missingClientEdges) n.push(o);
          }
        return n;
      }
    }
    function D(e) {
      if (e.kind === "bailout") return null;
      if (e.kind === "singular") {
        var t;
        return (t = e.snapshot.missingLiveResolverFields) != null ? t : null;
      } else {
        var n = null;
        for (var r of e.snapshots)
          if (r.missingLiveResolverFields) {
            n = n != null ? n : [];
            for (var o of r.missingLiveResolverFields) n.push(o);
          }
        return n;
      }
    }
    function x(e, t, n) {
      if (t.kind === "singular") E(e, t.snapshot.fieldErrors, n);
      else if (t.kind === "plural")
        for (var r of t.snapshots) E(e, r.fieldErrors, n);
    }
    function $(e, t) {
      if (t.kind === "bailout") return null;
      var n = e.getStore().getEpoch();
      if (n === t.epoch) return null;
      if (t.kind === "singular") {
        var r = e.lookup(t.snapshot.selector),
          o = k(t.snapshot.data, r.data),
          a = {
            data: o,
            fieldErrors: r.fieldErrors,
            isMissingData: r.isMissingData,
            missingClientEdges: r.missingClientEdges,
            missingLiveResolverFields: r.missingLiveResolverFields,
            seenRecords: r.seenRecords,
            selector: r.selector,
          };
        return [
          o !== t.snapshot.data,
          {
            environment: t.environment,
            epoch: n,
            kind: "singular",
            selector: t.selector,
            snapshot: a,
          },
        ];
      } else {
        for (var i = !1, s = [], u = 0; u < t.snapshots.length; u++) {
          var c = t.snapshots[u],
            d = e.lookup(c.selector),
            m = k(c.data, d.data),
            p = {
              data: m,
              fieldErrors: d.fieldErrors,
              isMissingData: d.isMissingData,
              missingClientEdges: d.missingClientEdges,
              missingLiveResolverFields: d.missingLiveResolverFields,
              seenRecords: d.seenRecords,
              selector: d.selector,
            };
          (m !== c.data && (i = !0), s.push(p));
        }
        return (
          s.length === t.snapshots.length || l(0, 61222),
          [
            i,
            {
              environment: t.environment,
              epoch: n,
              kind: "plural",
              selector: t.selector,
              snapshots: s,
            },
          ]
        );
      }
    }
    function P(e, t, n, r, o) {
      var a = L(t, n),
        i = babelHelpers.extends({}, a, { id: r.clientEdgeDestinationID }),
        l = v(r.request, i, o == null ? void 0 : o.networkCacheConfig),
        s = u(e),
        c = s.prepare(l, h(e, l), o == null ? void 0 : o.fetchPolicy),
        d = y(e, l.request);
      return (
        d != null &&
          d.displayName == null &&
          (d.displayName = r.request.params.name),
        [c, d]
      );
    }
    function N(e, t, n) {
      if (t.kind === "bailout") return function () {};
      if (t.kind === "singular") {
        var r = e.subscribe(t.snapshot, function (r) {
          n(function (n) {
            var o = null;
            if (
              n.kind !== "singular" ||
              n.snapshot.selector !== r.selector ||
              n.environment !== e
            ) {
              var a = $(n.environment, n);
              if (a != null) {
                var i = a[0],
                  l = a[1];
                (e.__log({
                  hasDataChanges: i,
                  name: "useFragment.subscription.missedUpdates",
                }),
                  (o = i ? l : n));
              } else o = n;
            } else
              o = {
                environment: t.environment,
                epoch: e.getStore().getEpoch(),
                kind: "singular",
                selector: t.selector,
                snapshot: r,
              };
            return o;
          });
        });
        return function () {
          r.dispose();
        };
      } else {
        var o = t.snapshots.map(function (r, o) {
          return e.subscribe(r, function (r) {
            n(function (n) {
              var a,
                i = null;
              if (
                n.kind !== "plural" ||
                ((a = n.snapshots[o]) == null ? void 0 : a.selector) !==
                  r.selector ||
                n.environment !== e
              ) {
                var l = $(n.environment, n);
                if (l != null) {
                  var s = l[0],
                    u = l[1];
                  (e.__log({
                    hasDataChanges: s,
                    name: "useFragment.subscription.missedUpdates",
                  }),
                    (i = s ? u : n));
                } else i = n;
              } else {
                var c = [].concat(n.snapshots);
                ((c[o] = r),
                  (i = {
                    environment: t.environment,
                    epoch: e.getStore().getEpoch(),
                    kind: "plural",
                    selector: t.selector,
                    snapshots: c,
                  }));
              }
              return i;
            });
          });
        });
        return function () {
          for (var e of o) e.dispose();
        };
      }
    }
    function M(e, t) {
      return t == null
        ? { environment: e, kind: "bailout" }
        : t.kind === "PluralReaderSelector"
          ? {
              environment: e,
              epoch: e.getStore().getEpoch(),
              kind: "plural",
              selector: t,
              snapshots: t.selectors.map(function (t) {
                return e.lookup(t);
              }),
            }
          : {
              environment: e,
              epoch: e.getStore().getEpoch(),
              kind: "singular",
              selector: t,
              snapshot: e.lookup(t),
            };
    }
    function w(e, t, r, o) {
      var a,
        i,
        c = p(
          function () {
            return R(e, t);
          },
          [e, t],
        ),
        d = (e == null || (a = e.metadata) == null ? void 0 : a.plural) === !0;
      (d
        ? t == null || Array.isArray(t) || l(0, 13793, e.name, typeof t, e.name)
        : !Array.isArray(t) || l(0, 57387, e.name, typeof t, e.name),
        t == null ||
          (d && Array.isArray(t) && t.length === 0) ||
          c != null ||
          l(0, 98574, e.name, e.name, r, e.name, r));
      var g = n("react-relay/relay-hooks/useRelayEnvironment")(),
        h;
      C.ENABLE_UI_CONTEXT_ON_RELAY_LOGGER &&
        (h = n("react-relay/relay-hooks/useRelayLoggingContext")());
      var y = f(function () {
          return M(g, c);
        }),
        v = y[0],
        L = y[1],
        E = v,
        k = E.environment;
      if (!b(c, E.selector) || g !== E.environment) {
        var w = M(g, c);
        (L(w), (E = w));
      }
      var A = _(!1);
      if (
        (m(
          function () {
            A.current = c;
          },
          [c],
        ),
        ((i = e.metadata) == null ? void 0 : i.hasClientEdges) === !0 ||
          C.CHECK_ALL_FRAGMENTS_FOR_MISSING_CLIENT_EDGES)
      ) {
        var F = p(
            function () {
              var n = T(E),
                r,
                a = [];
              if (n != null && n.length) {
                r = [];
                for (var i of n) {
                  var l = P(g, e, t, i, o),
                    s = l[0],
                    u = l[1];
                  (r.push(s), u != null && a.push(u));
                }
              }
              return [r, a];
            },
            [E, g, e, t, o],
          ),
          O = F[0],
          B = F[1];
        if (B.length) {
          c != null || l(0, 57388);
          var W =
            c.kind === "PluralReaderSelector" ? c.selectors[0].owner : c.owner;
          g.__log({
            name: "suspense.client_edge",
            fragment: e,
            fragmentOwner: W,
            isMount: A.current === !1,
          });
          var q = (s || (s = n("Promise"))).all(B);
          throw (
            (q.displayName =
              "RelayClientEdge(" +
              B.map(function (e) {
                return e.displayName;
              }).join(",") +
              ")"),
            q
          );
        }
        m(
          function () {
            var e = u(g);
            if (O != null && O.length) {
              var t = [];
              for (var n of O) t.push(e.retain(n));
              return function () {
                for (var e of t) e.dispose();
              };
            }
          },
          [g, O],
        );
      }
      if (I(E)) {
        var U = D(E);
        if (U != null && U.length > 0) {
          c != null || l(0, 57388);
          var V =
            c.kind === "PluralReaderSelector" ? c.selectors[0].owner : c.owner;
          g.__log({
            name: "suspense.resolver",
            fragment: e,
            fragmentOwner: V,
            isMount: A.current === !1,
            suspendingLiveResolvers: U,
          });
          var H = (s || (s = n("Promise"))).all(
            U.map(function (e) {
              return g.getStore().getLiveResolverPromise(e);
            }),
          );
          throw ((H.displayName = "RelayLiveResolver(" + e.name + ")"), H);
        }
        if (
          C.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE ||
          g !== k ||
          A.current === !1 ||
          !b(A.current, c)
        ) {
          c != null || l(0, 57388);
          var G =
              c.kind === "PluralReaderSelector"
                ? c.selectors[0].owner
                : c.owner,
            z = S(g, e, G);
          if (z)
            throw (
              g.__log({
                name: "suspense.missing_data",
                fragment: e,
                fragmentOwner: G,
                isMount: A.current === !1,
                pendingOperations: z.pendingOperations,
              }),
              z.promise
            );
        }
      }
      x(g, E, h);
      var j = _({ kind: "uninitialized" });
      (m(
        function () {
          var e = j.current;
          if (e.kind === "initialized") {
            if (E.environment === e.environment && E.selector === e.selector)
              return;
            (e.dispose(), (j.current = { kind: "uninitialized" }));
          }
          if (E.kind !== "bailout") {
            var t = E,
              n = $(E.environment, E);
            if (n !== null) {
              var r = n[0],
                o = n[1];
              if (r) {
                (L(o), (j.current = { kind: "missed-updates" }));
                return;
              }
              t = o;
            }
            var a = N(E.environment, t, L);
            j.current = {
              dispose: a,
              environment: E.environment,
              kind: "initialized",
              selector: E.selector,
            };
          }
        },
        [E],
      ),
        m(function () {
          if (j.current.kind === "uninitialized" && E.kind !== "bailout") {
            var e = N(E.environment, E, L);
            j.current = {
              dispose: e,
              environment: E.environment,
              kind: "initialized",
              selector: E.selector,
            };
          }
          return function () {
            (j.current.kind === "initialized" && j.current.dispose(),
              (j.current = { kind: "uninitialized" }));
          };
        }, []));
      var K;
      if (d) {
        var Q = t == null;
        K = p(
          function () {
            return E.kind === "bailout"
              ? Q
                ? null
                : []
              : (E.kind === "plural" || l(0, 61167),
                E.snapshots.map(function (e) {
                  return e.data;
                }));
          },
          [E, Q],
        );
      } else
        E.kind === "bailout"
          ? (K = null)
          : (E.kind === "singular" || l(0, 61166), (K = E.snapshot.data));
      return (
        C.LOG_MISSING_RECORDS_IN_PROD &&
          t != null &&
          (K === void 0 ||
            (Array.isArray(K) &&
              K.length > 0 &&
              K.every(function (e) {
                return e === void 0;
              }))) &&
          n("warning")(
            !1,
            "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
            e.name,
            r,
            r,
          ),
        K
      );
    }
    a.exports = w;
  },
  null,
);
