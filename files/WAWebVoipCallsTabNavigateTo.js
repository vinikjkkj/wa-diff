__d(
  "WAWebVoipCallsTabNavigateTo",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebVoipCallsTabDrawerFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.clearUnreadActivity;
      (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "calls_tab" }
          : s.jsx(
              o("WAWebVoipCallsTabDrawerFlowLoadable")
                .VoipCallsTabDrawerFlowLoadable,
              { onBack: o("WAWebDrawerManager").closeDrawerLeft },
            ),
        {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          transition: "pop-drawer-fast",
        },
      ),
        t == null || t(),
        self.setTimeout(function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerMid(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "mid_drawer_empty_state",
                  navBarItem: o("WAWebNavBarTypes").NavBarItems.Calls,
                }
              : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                  type: o("WAWebNavBarTypes").NavBarItems.Calls,
                }),
            { transition: "none", disableRotateFocus: !0, noFocus: !0 },
          );
        }, 0));
    }
    l.navigateToVoipCallsTab = u;
  },
  98,
);
