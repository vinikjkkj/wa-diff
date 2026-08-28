__d(
  "FBWebBloksOpenAlert",
  ["WebBloksScreen"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e.objectSet.navigationManager.push(
        o("WebBloksScreen").WebBloksScreen.fromBloksModel(
          e.objectSet,
          t,
          e.treeManager.initialTreeResources,
          { isModal: !0 },
        ),
      );
    }
    l.default = e;
  },
  98,
);
