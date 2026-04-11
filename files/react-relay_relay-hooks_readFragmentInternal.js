__d(
  "react-relay/relay-hooks/readFragmentInternal",
  [
    "invariant",
    "react-relay/relay-hooks/QueryResource",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n(
        "react-relay/relay-hooks/QueryResource",
      ).getQueryResourceForEnvironment,
      u = (e = n("relay-runtime")).__internal.fetchQuery,
      c = e.RelayFeatureFlags,
      d = e.createOperationDescriptor,
      m = e.getPendingOperationsForFragment,
      p = e.getSelector,
      _ = e.getVariablesFromFragment,
      f = e.handlePotentialSnapshotErrors;
    function g(e) {
      return e.kind === "bailout"
        ? !1
        : e.kind === "singular"
          ? e.snapshot.isMissingData
          : e.snapshots.some(function (e) {
              return e.isMissingData;
            });
    }
    function h(e) {
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
    function y(e, t) {
      if (t.kind === "singular") f(e, t.snapshot.fieldErrors);
      else if (t.kind === "plural")
        for (var n of t.snapshots) f(e, n.fieldErrors);
    }
    function C(e, t, n, r, o) {
      var a = _(t, n),
        i = babelHelpers.extends({}, a, { id: r.clientEdgeDestinationID }),
        l = d(r.request, i, o == null ? void 0 : o.networkCacheConfig),
        c = s(e);
      return c.prepare(l, u(e, l), o == null ? void 0 : o.fetchPolicy);
    }
    function b(e, t) {
      return t == null
        ? { kind: "bailout" }
        : t.kind === "PluralReaderSelector"
          ? t.selectors.length === 0
            ? { kind: "bailout" }
            : {
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
    function v(e, t, r, o, a, i) {
      var s,
        u,
        d = p(t, r),
        _ = (t == null || (s = t.metadata) == null ? void 0 : s.plural) === !0;
      (_
        ? r == null ||
          Array.isArray(r) ||
          l(
            0,
            13793,
            i != null ? " for key `" + i + "`" : "",
            t.name,
            typeof r,
            t.name,
          )
        : !Array.isArray(r) ||
          l(
            0,
            57387,
            i != null ? " for key `" + i + "`" : "",
            t.name,
            typeof r,
            t.name,
          ),
        r == null ||
          (_ && Array.isArray(r) && r.length === 0) ||
          d != null ||
          l(
            0,
            98573,
            t.name,
            t.name,
            o,
            t.name,
            i == null ? "a fragment reference" : "the `" + i + "`",
            o,
            t.name,
          ));
      var f = b(e, d),
        v = null;
      if (
        ((u = t.metadata) == null ? void 0 : u.hasClientEdges) === !0 ||
        c.CHECK_ALL_FRAGMENTS_FOR_MISSING_CLIENT_EDGES
      ) {
        var S = h(f);
        if (S != null && S.length) {
          v = [];
          for (var R of S) v.push(C(e, t, r, R, a));
        }
      }
      if (g(f)) {
        d != null || l(0, 57388);
        var L =
            d.kind === "PluralReaderSelector" ? d.selectors[0].owner : d.owner,
          E = m(e, t, L);
        if (E) throw E.promise;
        y(e, f);
      }
      var k;
      return (
        f.kind === "bailout"
          ? (k = _ ? [] : null)
          : f.kind === "singular"
            ? (k = f.snapshot.data)
            : (k = f.snapshots.map(function (e) {
                return e.data;
              })),
        c.LOG_MISSING_RECORDS_IN_PROD &&
          r != null &&
          (k === void 0 ||
            (Array.isArray(k) &&
              k.length > 0 &&
              k.every(function (e) {
                return e === void 0;
              }))) &&
          n("warning")(
            !1,
            "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
            t.name,
            o,
            o,
          ),
        { clientEdgeQueries: v, data: k }
      );
    }
    a.exports = v;
  },
  null,
);
