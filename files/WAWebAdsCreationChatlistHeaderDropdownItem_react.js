__d(
  "WAWebAdsCreationChatlistHeaderDropdownItem.react",
  [
    "WAWebAdCreationDropdownItem.react",
    "WAWebBizGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNativeAdsGatingUtils",
    "WAWebWamEnumLwiEntryPoint",
    "react",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.activeAccountInfo,
        n = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        a = n.isQE2Eligible,
        i = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_ad_creation_home_menu_item",
          t,
        ),
        l = i[0],
        u = i[1],
        c =
          o("WAWebMobilePlatforms").isSMB() &&
          t != null &&
          !l &&
          (t !== "not-linked" ||
            o("WAWebNativeAdsGatingUtils").isNativeAdsMvpEntrypointEligible(
              a,
            )) &&
          o("WAWebBizGatingUtils").shouldShowAdCreationDropdown()
            ? s.jsx(r("WAWebAdCreationDropdownItem.react"), {
                adCreationUrlInput: {
                  sourceAdCreation:
                    "whatsapp_smb_web_ad_creation_home_menu_item",
                  activeAccountInfo: t,
                },
                ctaText: u == null ? void 0 : u.content,
                lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM,
              })
            : null;
      return c;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
