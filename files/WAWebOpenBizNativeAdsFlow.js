__d(
  "WAWebOpenBizNativeAdsFlow",
  [
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsQplHelpers",
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
      var n = r("WAWebPonyfillsCryptoRandomUUID")(),
        a = o(
          "WAWebBizAdCreationResolveStoredIdentity",
        ).resolveStoredAccountType();
      (o("WAWebBizNativeAdsQplHelpers").startAdsManagementQpl(!1),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.AdCreation,
        ));
      var i = o("WAWebBizNativeAdsFlowLoadable").createBizNativeAdsFlowLoadable(
          n,
          void 0,
          a == null
            ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
            : void 0,
        ),
        l = s.jsx(i, { entryPoint: e, manageAdsFlowID: t });
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(l, {
        transition: "slide-left",
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
      });
    }
    l.default = u;
  },
  98,
);
