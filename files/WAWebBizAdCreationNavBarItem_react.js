__d(
  "WAWebBizAdCreationNavBarItem.react",
  [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdCreationLogger",
    "WAWebBizGatingUtils",
    "WAWebChatlistUtils",
    "WAWebMobilePlatforms",
    "WAWebNativeAdsGatingUtils",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "react",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebServerGatedAdEntryPoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.activeNavBarItem,
        n = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        a = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        i = a.isQE2Eligible,
        l = o("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint(
          "whatsapp_smb_web_ad_creation_home_screen_icon",
          n,
        ),
        m = l[0],
        p = s._(/*BTDS*/ "Advertise"),
        _ =
          o("WAWebMobilePlatforms").isSMB() &&
          n != null &&
          !m &&
          (n !== "not-linked" ||
            o("WAWebNativeAdsGatingUtils").isNativeAdsMvpEntrypointEligible(
              i,
            )) &&
          o("WAWebBizGatingUtils").shouldShowAdCreationIcon();
      c(
        function () {
          if (_) {
            var e;
            o("WAWebAdCreationLogger").logAdCreationImpression(
              o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                .SMB_HOME_SCREEN_ICON,
              (e =
                n !== "not-linked" &&
                (n == null ? void 0 : n.hasFacebookPage)) != null
                ? e
                : !1,
            );
          }
        },
        [_, n],
      );
      var f = function () {
          t !== o("WAWebNavBarTypes").NavBarItems.AdCreation &&
            (n != null &&
              o("WAWebChatlistUtils").handleAdCreation({
                adCreationUrlInput: {
                  activeAccountInfo: n,
                  sourceAdCreation:
                    "whatsapp_smb_web_ad_creation_home_screen_icon",
                },
                lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
                  .SMB_HOME_SCREEN_ICON,
              }),
            o("WAWebNavBarLogEvents").logNavBarEvent(
              o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                .ADS_CREATION,
            ));
        },
        g =
          t === o("WAWebNavBarTypes").NavBarItems.AdCreation
            ? u.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
                height: 24,
                width: 24,
              })
            : u.jsx(r("WDSIconIcCampaignMegaphone.react"), {
                height: 24,
                width: 24,
              }),
        h = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: g,
          title: p,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.AdCreation,
          onClick: f,
          spacingXstyle: d.paddingAll8,
        });
      return _ ? h : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BizAdCreationNavBarItem = m));
  },
  226,
);
