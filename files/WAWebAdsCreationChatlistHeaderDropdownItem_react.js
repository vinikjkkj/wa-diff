__d(
  "WAWebAdsCreationChatlistHeaderDropdownItem.react",
  [
    "WAWebAdCreationDropdownItem.react",
    "WAWebBizGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNativeAdsGatingUtils",
    "WAWebWamEnumLwiEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.activeAccountInfo,
        a = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        i = a.isQE2Eligible,
        l = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_ad_creation_home_menu_item",
          n,
        ),
        u = l[0],
        c = l[1],
        d;
      t[0] !== n ||
      t[1] !== (c == null ? void 0 : c.content) ||
      t[2] !== u ||
      t[3] !== i
        ? ((d =
            o("WAWebMobilePlatforms").isSMB() &&
            n != null &&
            !u &&
            (n !== "not-linked" ||
              o("WAWebNativeAdsGatingUtils").isNativeAdsMvpEntrypointEligible(
                i,
              )) &&
            o("WAWebBizGatingUtils").shouldShowAdCreationDropdown()
              ? s.jsx(r("WAWebAdCreationDropdownItem.react"), {
                  adCreationUrlInput: {
                    sourceAdCreation:
                      "whatsapp_smb_web_ad_creation_home_menu_item",
                    activeAccountInfo: n,
                  },
                  ctaText: c == null ? void 0 : c.content,
                  lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                    .SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM,
                })
              : null),
          (t[0] = n),
          (t[1] = c == null ? void 0 : c.content),
          (t[2] = u),
          (t[3] = i),
          (t[4] = d))
        : (d = t[4]);
      var m = d;
      return m;
    }
    l.default = u;
  },
  98,
);
