__d(
  "WAWebOpenBizNativeAdsFlow",
  [
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsTwoPhaseContainer.react",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebPonyfillsCryptoRandomUUID",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = r("WAWebPonyfillsCryptoRandomUUID")();
      (o("WAWebBizNativeAdsQplHelpers").startAdsManagementQpl(!1),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.AdCreation,
        ));
      var a = s.jsx(r("WAWebBizNativeAdsTwoPhaseContainer.react"), {
        adCreationFlowID: n,
        entryPoint: e,
        manageAdsFlowID: t,
      });
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(a, {
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
        transition: "slide-left",
      });
    }
    l.default = u;
  },
  98,
);
