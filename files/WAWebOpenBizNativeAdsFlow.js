__d(
  "WAWebOpenBizNativeAdsFlow",
  [
    "WAWebABProps",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsNUXLoadable",
    "WAWebBizNativeAdsQplHelpers",
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
      var n = r("WAWebPonyfillsCryptoRandomUUID")(),
        a = o(
          "WAWebBizAdCreationResolveStoredIdentity",
        ).resolveStoredAccountType();
      (o("WAWebBizNativeAdsQplHelpers").startAdsManagementQpl(!1),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.AdCreation,
        ));
      var i;
      if (
        a == null &&
        !(
          r("justknobx")._("4613") ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_native_web_scenario_routing_enabled",
          )
        )
      )
        i = s.jsx(o("WAWebBizNativeAdsNUXLoadable").BizNativeAdsNUXLoadable, {
          adCreationFlowID: n,
          entryPoint: e,
          manageAdsFlowID: t,
          onClose: function () {
            return o(
              "WAWebDrawerManager",
            ).DrawerManager.closeDrawerFullscreen();
          },
        });
      else {
        var l = o(
          "WAWebBizNativeAdsFlowLoadable",
        ).createBizNativeAdsFlowLoadable(
          n,
          void 0,
          a == null
            ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
            : void 0,
        );
        i = s.jsx(l, { entryPoint: e, manageAdsFlowID: t });
      }
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(i, {
        transition: "slide-left",
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
      });
    }
    l.default = u;
  },
  98,
);
