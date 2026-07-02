__d(
  "WAWebOpenBizNativeAdsFlow",
  [
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsTwoPhaseContainer.react",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      (o("WAWebBizNativeAdsQplHelpers").startAdsManagementQpl(!1),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.AdCreation,
        ));
      var n = s.jsx(r("WAWebBizNativeAdsTwoPhaseContainer.react"), {
        entryPoint: e,
        flowID: t,
      });
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(n, {
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
        transition: "slide-left",
      });
    }
    l.default = u;
  },
  98,
);
