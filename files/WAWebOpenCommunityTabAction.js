__d(
  "WAWebOpenCommunityTabAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebCommunityFlowLoadable",
    "WAWebDrawerManager",
    "WAWebNavBarTypes",
    "WAWebOpenLastActiveChatAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "community_flow" }
            : s.jsx(
                o("WAWebCommunityFlowLoadable").CommunityTabFlowLoadable,
                {},
              ),
          { disableRotateFocus: !0 },
        ),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Communities,
        ),
        o("WAWebOpenLastActiveChatAction").cancelPendingLastActiveChatRestore(),
        o("WAWebCmd").Cmd.closeActiveChat());
    }
    l.default = u;
  },
  98,
);
