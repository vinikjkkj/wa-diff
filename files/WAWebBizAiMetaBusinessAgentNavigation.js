__d(
  "WAWebBizAiMetaBusinessAgentNavigation",
  [
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsFlowSteps",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.BizTools,
        ),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
            entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
              .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_DEEPLINK,
            autoSelectStep: o("WAWebBizToolsFlowSteps").BizToolsSteps
              .BusinessAI,
          }),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
          },
        ));
    }
    l.openMetaBusinessAgent = u;
  },
  98,
);
