__d(
  "WAWebManageAdsDropdownItem.react",
  [
    "fbt",
    "WAWebAdCreationLogger",
    "WAWebAdsStackRefreshedIcon.react",
    "WAWebChatlistUtils",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumManageAdsEntryPoint",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.activeAccountInfo;
      c(
        function () {
          o("WAWebAdCreationLogger").logManageAdsEntryPointImpression(
            o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT
              .WEB_OVERFLOW_MENU,
          );
        },
        [t],
      );
      var n = function (n) {
          (n == null || n.preventDefault(),
            o("WAWebChatlistUtils").handleManageAds(
              t,
              "whatsapp_smb_web_manage_ads_home_menu_item",
              o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                .SMB_HOME_SCREEN_OVERFLOW_MANAGE_ITEM,
            ));
        },
        a = s._(/*BTDS*/ "Manage ads"),
        i = "manage-ads-menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: o("WAWebAdsStackRefreshedIcon.react").AdsStackRefreshedIcon,
        onPress: n,
        title: a,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
