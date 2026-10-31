__d(
  "WAWebOpenSharableEventMapPickerAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (e != null) {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(e, {
          disableRotateFocus: !0,
          transition: "none",
        });
        return;
      }
      if (
        o("WAWebSideNavButtonsActivityModel").getLastActiveButton() !==
        o("WAWebNavBarTypes").NavBarItems.Events
      ) {
        o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
        return;
      }
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? {
              descriptorType: "mid_drawer_empty_state",
              navBarItem: o("WAWebNavBarTypes").NavBarItems.Events,
            }
          : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
              type: o("WAWebNavBarTypes").NavBarItems.Events,
            }),
        { disableRotateFocus: !0, transition: "none" },
      );
    }
    l.showSharableEventMapInMiddlePanel = u;
  },
  98,
);
