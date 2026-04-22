__d(
  "WAWebAdManagementAction",
  [
    "WAWebAdCreationLogger",
    "WAWebAdsManagementDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebWamEnumLwiScreenAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (o("WAWebAdCreationLogger").logLegacyManageAdsScreenEvent(
        e,
        o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
          .LWI_ACTION_MANAGE_ADS_TAPPED,
      ),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(
            o("WAWebAdsManagementDrawerLoadable").AdsManagementDrawerLoadable,
            { activeAccountInfo: e, isInitialStep: !0 },
          ),
        ));
    }
    l.openAdsManagementScreen = u;
  },
  98,
);
