__d(
  "WebBloksReduce",
  ["WebBloksLegacyTraverser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WebBloksLegacyTraverser").reduce(
        e.treeManager,
        "" + t,
        e.executeCatch,
        e.objectSet.environment.traversalKeys,
      );
    }
    l.default = e;
  },
  98,
);
