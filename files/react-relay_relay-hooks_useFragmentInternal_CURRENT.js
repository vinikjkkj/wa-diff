__d(
  "react-relay/relay-hooks/useFragmentInternal_CURRENT",
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
          { epoch: n, kind: "singular", snapshot: a },
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
          [i, { epoch: n, kind: "plural", snapshots: s }]
        );
      }
    }
    function P(e, t, n, r, o) {
      var a = L(t, n),
        i = babelHelpers.extends({}, a, { id: r.clientEdgeDestinationID }),
        l = v(r.request, i, o == null ? void 0 : o.networkCacheConfig),
        s = u(e),
        c = s.prepare(l, h(e, l), o == null ? void 0 : o.fetchPolicy);
      return [c, y(e, l.request)];
    }
    function N(e, t, n, r) {
      if (t.kind === "bailout") return function () {};
      if (t.kind === "singular") {
        var o = e.subscribe(t.snapshot, function (t) {
          n(function (n) {
            if (n.kind !== "singular" || n.snapshot.selector !== t.selector) {
              var o = $(e, n);
              if (o != null) {
                var a = o[0],
                  i = o[1];
                return (
                  e.__log({
                    hasDataChanges: a,
                    name: "useFragment.subscription.missedUpdates",
                  }),
                  (r.current = a),
                  a ? i : n
                );
              } else return n;
            }
            return (
              (r.current = !0),
              { epoch: e.getStore().getEpoch(), kind: "singular", snapshot: t }
            );
          });
        });
        return function () {
          o.dispose();
        };
      } else {
        var a = t.snapshots.map(function (t, o) {
          return e.subscribe(t, function (t) {
            n(function (n) {
              var a;
              if (
                n.kind !== "plural" ||
                ((a = n.snapshots[o]) == null ? void 0 : a.selector) !==
                  t.selector
              ) {
                var i = $(e, n);
                if (i != null) {
                  var l = i[0],
                    s = i[1];
                  return (
                    e.__log({
                      hasDataChanges: l,
                      name: "useFragment.subscription.missedUpdates",
                    }),
                    (r.current = r.current || l),
                    l ? s : n
                  );
                } else return n;
              }
              var u = [].concat(n.snapshots);
              return (
                (u[o] = t),
                (r.current = !0),
                { epoch: e.getStore().getEpoch(), kind: "plural", snapshots: u }
              );
            });
          });
        });
        return function () {
          for (var e of a) e.dispose();
        };
      }
    }
    function M(e, t) {
      return t == null
        ? { kind: "bailout" }
        : t.kind === "PluralReaderSelector"
          ? {
              epoch: e.getStore().getEpoch(),
              kind: "plural",
              snapshots: t.selectors.map(function (t) {
                return e.lookup(t);
              }),
            }
          : {
              epoch: e.getStore().getEpoch(),
              kind: "singular",
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
          l(0, 98573, e.name, e.name, r, e.name, r, e.name));
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
        k = f(E),
        w = k[0],
        A = k[1],
        F = w,
        O = f(c),
        B = O[0],
        W = O[1],
        q = f(g),
        U = q[0],
        V = q[1];
      if (!b(c, B) || g !== U) {
        (W(c), V(g));
        var H = M(g, c);
        (L(H), A(H), (E = H), (F = H));
      }
      var G = _(!1);
      if (
        (m(
          function () {
            G.current = c;
          },
          [c],
        ),
        ((i = e.metadata) == null ? void 0 : i.hasClientEdges) === !0 ||
          C.CHECK_ALL_FRAGMENTS_FOR_MISSING_CLIENT_EDGES)
      ) {
        var z = p(
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
          j = z[0],
          K = z[1];
        if (K.length) {
          c != null || l(0, 57388);
          var Q =
            c.kind === "PluralReaderSelector" ? c.selectors[0].owner : c.owner;
          throw (
            g.__log({
              name: "suspense.client_edge",
              fragment: e,
              fragmentOwner: Q,
              isMount: G.current === !1,
            }),
            (s || (s = n("Promise"))).all(K)
          );
        }
        m(
          function () {
            var e = u(g);
            if (j != null && j.length) {
              var t = [];
              for (var n of j) t.push(e.retain(n));
              return function () {
                for (var e of t) e.dispose();
              };
            }
          },
          [g, j],
        );
      }
      if (I(E)) {
        var X = D(E);
        if (X != null && X.length > 0) {
          c != null || l(0, 57388);
          var Y =
            c.kind === "PluralReaderSelector" ? c.selectors[0].owner : c.owner;
          throw (
            g.__log({
              name: "suspense.resolver",
              fragment: e,
              fragmentOwner: Y,
              isMount: G.current === !1,
              suspendingLiveResolvers: X,
            }),
            (s || (s = n("Promise"))).all(
              X.map(function (e) {
                return g.getStore().getLiveResolverPromise(e);
              }),
            )
          );
        }
        if (
          C.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE ||
          g !== U ||
          G.current === !1 ||
          !b(G.current, c)
        ) {
          c != null || l(0, 57388);
          var J =
              c.kind === "PluralReaderSelector"
                ? c.selectors[0].owner
                : c.owner,
            Z = S(g, e, J);
          if (Z)
            throw (
              g.__log({
                name: "suspense.missing_data",
                fragment: e,
                fragmentOwner: J,
                isMount: G.current === !1,
                pendingOperations: Z.pendingOperations,
              }),
              Z.promise
            );
        }
      }
      x(g, E, h);
      var ee = _(!1);
      if (
        (m(
          function () {
            var e = F,
              t = $(g, F);
            if (t !== null) {
              var n = t[0],
                r = t[1];
              (n && L(r), (e = r));
            }
            return N(g, e, L, ee);
          },
          [g, F],
        ),
        ee.current)
      ) {
        var te = $(g, E);
        if (te != null) {
          var ne = te[0],
            re = te[1];
          ne && (L(re), (E = re));
        }
        ee.current = !1;
      }
      var oe;
      if (d) {
        var ae = t == null;
        oe = p(
          function () {
            return E.kind === "bailout"
              ? ae
                ? null
                : []
              : (E.kind === "plural" || l(0, 61167),
                E.snapshots.map(function (e) {
                  return e.data;
                }));
          },
          [E, ae],
        );
      } else
        E.kind === "bailout"
          ? (oe = null)
          : (E.kind === "singular" || l(0, 61166), (oe = E.snapshot.data));
      return (
        C.LOG_MISSING_RECORDS_IN_PROD &&
          t != null &&
          (oe === void 0 ||
            (Array.isArray(oe) &&
              oe.length > 0 &&
              oe.every(function (e) {
                return e === void 0;
              }))) &&
          n("warning")(
            !1,
            "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
            e.name,
            r,
            r,
          ),
        oe
      );
    }
    a.exports = w;
  },
  null,
);
