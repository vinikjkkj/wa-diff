__d(
  "relay-runtime/store/observeFragmentExperimental",
  [
    "invariant",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/handlePotentialSnapshotErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n(
        "relay-runtime/query/fetchQueryInternal",
      ).getObservableForActiveRequest,
      s = n("relay-runtime/query/GraphQLTag").getFragment,
      u = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).handlePotentialSnapshotErrors,
      c = n("relay-runtime/store/RelayModernSelector").getSelector;
    async function d(e, t, n) {
      var r;
      try {
        var o,
          a = await new Promise(function (o, a) {
            r = m(e, t, n).subscribe({
              next: function (t) {
                t.state === "ok"
                  ? o(t.value)
                  : t.state === "error" && a(t.error);
              },
            });
          });
        return ((o = r) == null || o.unsubscribe(), a);
      } catch (e) {
        var i;
        throw ((i = r) == null || i.unsubscribe(), e);
      }
    }
    function m(e, t, n) {
      var r,
        o = s(t),
        a = c(o, n);
      switch (
        (a != null || l(0, 86954),
        ((r = o.metadata) == null ? void 0 : r.hasClientEdges) == null ||
          p(a) ||
          l(0, 86955),
        a.kind)
      ) {
        case "SingularReaderSelector":
          return _(e, t, a);
        case "PluralReaderSelector":
          return f(e, t, a);
      }
      l(0, 86951);
    }
    function p(e) {
      var t, n, r;
      switch (e == null ? void 0 : e.kind) {
        case "SingularReaderSelector":
          return (
            ((t =
              (n = e.owner.node.operation) == null
                ? void 0
                : n.use_exec_time_resolvers) != null
              ? t
              : (r = e.owner.node.operation) == null ||
                  (r = r.exec_time_resolvers_enabled_provider) == null
                ? void 0
                : r.get()) === !0
          );
        case "PluralReaderSelector": {
          var o;
          return (o = e.selectors) == null
            ? void 0
            : o.every(function (e) {
                var t, n;
                return (
                  ((t = e.owner.node.operation.use_exec_time_resolvers) != null
                    ? t
                    : (n = e.owner.node.operation) == null ||
                        (n = n.exec_time_resolvers_enabled_provider) == null
                      ? void 0
                      : n.get()) === !0
                );
              });
        }
      }
      return !1;
    }
    function _(e, t, r) {
      var o = e.lookup(r);
      return n("relay-runtime/network/RelayObservable").create(function (n) {
        n.next(g(e, t, r.owner, o));
        var a = e.subscribe(o, function (o) {
          n.next(g(e, t, r.owner, o));
        });
        return function () {
          return a.dispose();
        };
      });
    }
    function f(e, t, r) {
      var o = r.selectors.map(function (t) {
        return e.lookup(t);
      });
      return n("relay-runtime/network/RelayObservable").create(function (n) {
        var a = o.map(function (n, o) {
          return g(e, t, r.selectors[o].owner, n);
        });
        n.next(h(a));
        var i = o.map(function (o, i) {
          return e.subscribe(o, function (o) {
            ((a[i] = g(e, t, r.selectors[i].owner, o)), n.next(h(a)));
          });
        });
        return function () {
          return i.forEach(function (e) {
            return e.dispose();
          });
        };
      });
    }
    function g(t, n, r, o) {
      var a =
          o.missingLiveResolverFields != null &&
          o.missingLiveResolverFields.length > 0,
        i = o.missingClientEdges != null && o.missingClientEdges.length > 0;
      if (a || i) return { state: "loading" };
      if (
        o.isMissingData &&
        (e(t, r) != null ||
          t.getOperationTracker().getPendingOperationsAffectingOwner(r) != null)
      )
        return { state: "loading" };
      try {
        u(t, o.fieldErrors);
      } catch (e) {
        return { error: e, state: "error" };
      }
      return (o.data != null || l(0, 86952), { state: "ok", value: o.data });
    }
    function h(e) {
      var t = [];
      for (var n of e)
        if (n.state === "ok") t.push(n.value);
        else return n;
      return { state: "ok", value: t };
    }
    a.exports = { observeFragment: m, waitForFragmentData: d };
  },
  null,
);
