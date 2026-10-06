__d(
  "WAWebStatusNavigateTo",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebStatusDrawerFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "status" }
          : s.jsx(o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable, {
              onBack: o("WAWebDrawerManager").closeDrawerLeft,
            }),
        {
          disableRotateFocus: !0,
          transition: "pop-drawer-fast",
          focusOnUnMount: !0,
        },
      ),
        e == null || e());
    }
    l.navigateToStatus = u;
  },
  98,
);
