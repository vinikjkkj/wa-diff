__d(
  "WAWebCustomerManagerMetaOneNavigation",
  ["WAWebCmd", "WAWebCustomerManagerGating"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebCustomerManagerGating").customerManagerPanelEnabled()
        ? s
        : null;
    }
    function s() {
      o("WAWebCmd").Cmd.openCustomerManager();
    }
    l.getCustomerManagerOpenerForMetaOne = e;
  },
  98,
);
