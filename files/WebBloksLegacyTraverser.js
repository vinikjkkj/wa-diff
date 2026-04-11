__d(
  "WebBloksLegacyTraverser",
  [
    "WebBloksConstants",
    "WebBloksErrors",
    "WebBloksMutations",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s(
        e.snapshotPendingComponent(),
        new (o("WebBloksMutations").ServerIdTarget)(t),
        n,
      );
    }
    function s(e, t, n) {
      var r;
      return (
        e.traverse(function (e) {
          return t.targets(e) ? ((r = e), !0) : !1;
        }, n),
        r
      );
    }
    function u(e, t, n, r) {
      var a = e.snapshotPendingComponent(),
        i = null,
        l = o("WebBloksUpdateTraversal").runUpdateTraversal(
          a,
          {
            apply: function (r) {
              if ((r.getId() === t && (i = r), d(r, t) && (i = r), i)) {
                var e = r.get(o("WebBloksConstants").ON_REFLOW);
                e != null && n(e, [r]);
              }
              return r;
            },
            onUpdatesApplied: function (t) {
              i === t && (i = null);
            },
          },
          r,
        );
      if (l !== a)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Reflow traversal produced an updated componnent",
        );
    }
    function c(e, t, n, r) {
      var a = e.snapshotPendingComponent(),
        i = null,
        l = o("WebBloksUpdateTraversal").runUpdateTraversal(
          a,
          {
            apply: function (r) {
              if ((r.getId() === t && (i = r), r.shadowParents))
                for (var e of r.shadowParents)
                  (e.id === t && (i = r),
                    i &&
                      e.reduce &&
                      n(e.reduce, o("WebBloksUtils").EMPTY_ARRAY));
              return r;
            },
            onUpdatesApplied: function (t) {
              i === t && (i = null);
            },
          },
          r,
        );
      if (l !== a)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Reduce traversal produced an updated componnent",
        );
    }
    function d(e, t) {
      var n, r;
      return (n =
        (r = e.shadowParents) == null
          ? void 0
          : r.find(function (e) {
              return e.id === t;
            })) != null
        ? n
        : null;
    }
    function m(e, t, n) {
      var r;
      return (
        t.snapshotPendingComponent().traverse(function (e) {
          var t = d(e, n);
          return t ? ((r = t.init_state), !0) : !1;
        }, e),
        r
      );
    }
    ((l.findComponentByServerId = e),
      (l.findComponent = s),
      (l.reflow = u),
      (l.reduce = c),
      (l.getStateInitializer = m));
  },
  98,
);
