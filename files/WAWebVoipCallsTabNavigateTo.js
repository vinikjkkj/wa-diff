__d(
  "WAWebVoipCallsTabNavigateTo",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
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
          disableRotateFocus: !0,
        },
      ),
        t == null || t());
    }
    l.navigateToVoipCallsTab = u;
  },
  98,
);
