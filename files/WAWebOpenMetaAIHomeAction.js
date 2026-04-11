__d(
  "WAWebOpenMetaAIHomeAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? {
              descriptorType: "mid_drawer_empty_state",
              navBarItem: o("WAWebNavBarTypes").NavBarItems.MetaAI,
            }
          : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
              type: o("WAWebNavBarTypes").NavBarItems.MetaAI,
            }),
        { transition: "none", disableRotateFocus: !0 },
      );
    }
    l.openMetaAIHome = u;
  },
  98,
);
