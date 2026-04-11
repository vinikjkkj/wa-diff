__d(
  "WebBloksOneTimeBind",
  ["WebBloksBind"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.treeManager,
        r = n.getCommittedTreeResources(),
        a = o("WebBloksBind").bind(e.bloksContext, t, r);
      return a.boundModel;
    }
    l.default = e;
  },
  98,
);
