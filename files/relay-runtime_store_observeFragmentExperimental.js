__d(
  "relay-runtime/store/observeFragmentExperimental",
  [
    "invariant",
    "Promise",
    "asyncToGeneratorRuntime",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/util/handlePotentialSnapshotErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n(
        "relay-runtime/query/fetchQueryInternal",
      ).getObservableForActiveRequest,
      u = n("relay-runtime/query/GraphQLTag").getFragment,
      c = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).handlePotentialSnapshotErrors,
      d = n("relay-runtime/store/RelayModernSelector").getSelector;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a;
          try {
            var i,
              l = yield new (e || (e = n("Promise")))(function (e, n) {
                a = _(t, r, o).subscribe({
                  next: function (r) {
                    r.state === "ok"
                      ? e(r.value)
                      : r.state === "error" && n(r.error);
                  },
                });
              });
            return ((i = a) == null || i.unsubscribe(), l);
          } catch (e) {
            var s;
            throw ((s = a) == null || s.unsubscribe(), e);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      var r,
        o = u(t),
        a = d(o, n);
      switch (
        (a != null || l(0, 86954),
        ((r = o.metadata) == null ? void 0 : r.hasClientEdges) == null ||
          f(a) ||
          l(0, 86955),
        a.kind)
      ) {
        case "SingularReaderSelector":
          return g(e, t, a);
        case "PluralReaderSelector":
          return h(e, t, a);
      }
      l(0, 86951);
    }
    function f(e) {
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
    function g(e, t, r) {
      var o = e.lookup(r);
      return n("relay-runtime/network/RelayObservable").create(function (n) {
        n.next(y(e, t, r.owner, o));
        var a = e.subscribe(o, function (o) {
          n.next(y(e, t, r.owner, o));
        });
        return function () {
          return a.dispose();
        };
      });
    }
    function h(e, t, r) {
      var o = r.selectors.map(function (t) {
        return e.lookup(t);
      });
      return n("relay-runtime/network/RelayObservable").create(function (n) {
        var a = o.map(function (n, o) {
          return y(e, t, r.selectors[o].owner, n);
        });
        n.next(C(a));
        var i = o.map(function (o, i) {
          return e.subscribe(o, function (o) {
            ((a[i] = y(e, t, r.selectors[i].owner, o)), n.next(C(a)));
          });
        });
        return function () {
          return i.forEach(function (e) {
            return e.dispose();
          });
        };
      });
    }
    function y(e, t, n, r) {
      var o =
          r.missingLiveResolverFields != null &&
          r.missingLiveResolverFields.length > 0,
        a = r.missingClientEdges != null && r.missingClientEdges.length > 0;
      if (o || a) return { state: "loading" };
      if (
        r.isMissingData &&
        (s(e, n) != null ||
          e.getOperationTracker().getPendingOperationsAffectingOwner(n) != null)
      )
        return { state: "loading" };
      try {
        c(e, r.fieldErrors);
      } catch (e) {
        return { error: e, state: "error" };
      }
      return (r.data != null || l(0, 86952), { state: "ok", value: r.data });
    }
    function C(e) {
      var t = [];
      for (var n of e)
        if (n.state === "ok") t.push(n.value);
        else return n;
      return { state: "ok", value: t };
    }
    a.exports = { observeFragment: _, waitForFragmentData: m };
  },
  null,
);
