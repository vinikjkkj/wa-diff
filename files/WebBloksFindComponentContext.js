__d(
  "WebBloksFindComponentContext",
  ["WebBloksLegacyTraverser", "WebBloksMutations"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.objectSet,
        r = e.treeManager,
        a = r.getBoundTree();
      if (a) {
        var i = o("WebBloksLegacyTraverser").findComponent(
          a,
          new (o("WebBloksMutations").ServerIdTarget)("" + t),
          n.environment.traversalKeys,
        );
        if (i) return i;
      }
      return null;
    }
    l.default = e;
  },
  98,
);
