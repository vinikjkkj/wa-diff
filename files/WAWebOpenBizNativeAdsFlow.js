__d(
  "WAWebOpenBizNativeAdsFlow",
  [
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsTwoPhaseContainer.react",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebPonyfillsCryptoRandomUUID",
    "justknobx",
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
      var a;
      if (r("justknobx")._("4441"))
        a = s.jsx(r("WAWebBizNativeAdsTwoPhaseContainer.react"), {
          adCreationFlowID: n,
          entryPoint: e,
          manageAdsFlowID: t,
        });
      else {
        var i = o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredAccountType(),
          l = o("WAWebBizNativeAdsFlowLoadable").createBizNativeAdsFlowLoadable(
            {
              initialAdCreationFlowID: n,
              initialLoadingStep:
                i == null
                  ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                      .AdCreation
                  : void 0,
            },
          );
        a = s.jsx(l, { entryPoint: e, manageAdsFlowID: t });
      }
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(a, {
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
        transition: "slide-left",
      });
    }
    l.default = u;
  },
  98,
);
