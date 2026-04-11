__d(
  "WebBloksGetState",
  ["WebBloksLegacyTraverser", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = String(t),
        r = e.bloksContext.bkContextKeyStates.get(n);
      if (!r) {
        var a = o("WebBloksUtils").nullthrows(
          o("WebBloksLegacyTraverser").getStateInitializer(
            e.objectSet.environment.traversalKeys,
            e.treeManager,
            n,
          ),
          "No state initializer available for id " + n,
        );
        ((r = e.executeCatch(a, o("WebBloksUtils").EMPTY_ARRAY)),
          e.bloksContext.bkContextKeyStates.set(n, r));
      }
      return r;
    }
    l.default = e;
  },
  98,
);
