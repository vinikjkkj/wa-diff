__d(
  "WebBloksNavigationCloseScreen",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.objectSet,
        n = t.globalSheetManager,
        r = t.navigationManager;
      if (n.getSheetForTree(e.treeManager) != null) {
        n.close();
        return;
      }
      r.pop();
    }
    i.default = e;
  },
  66,
);
