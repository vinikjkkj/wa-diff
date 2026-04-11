__d(
  "WebBloksOpenBottomSheet",
  ["WebBloksScreen"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      e.objectSet.navigationManager.push(
        o("WebBloksScreen").WebBloksScreen.fromBloksModel(
          e.objectSet,
          t,
          e.treeManager.initialTreeResources,
          { isModal: !0, ownerContext: e },
        ),
      );
    }
    l.default = e;
  },
  98,
);
