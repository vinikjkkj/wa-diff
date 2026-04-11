__d(
  "WAWebStatusNavigateTo",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
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
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
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
