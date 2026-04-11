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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.activeAccountInfo,
        a;
      (t[0] !== n ? ((a = [n]), (t[0] = n), (t[1] = a)) : (a = t[1]), c(m, a));
      var i;
      t[2] !== n
        ? ((i = function (t) {
            (t == null || t.preventDefault(),
              o("WAWebChatlistUtils").handleManageAds(
                n,
                "whatsapp_smb_web_manage_ads_home_menu_item",
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_HOME_SCREEN_OVERFLOW_MANAGE_ITEM,
              ));
          }),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Manage ads")), (t[4] = d))
        : (d = t[4]);
      var p = d,
        _;
      return (
        t[5] !== l
          ? ((_ = u.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: o("WAWebAdsStackRefreshedIcon.react").AdsStackRefreshedIcon,
              onPress: l,
              title: p,
            })),
            (t[5] = l),
            (t[6] = _))
          : (_ = t[6]),
        _
      );
    }
    function m() {
      o("WAWebAdCreationLogger").logManageAdsEntryPointImpression(
        o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT
          .WEB_OVERFLOW_MENU,
      );
    }
    l.default = d;
  },
  226,
);
