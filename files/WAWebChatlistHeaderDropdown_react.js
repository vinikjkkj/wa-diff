__d(
  "WAWebChatlistHeaderDropdown.react",
  [
    "WAWebAdsCreationChatlistHeaderDropdownItem.react",
    "WAWebArchivedChatlistHeaderDropdownItem.react",
    "WAWebBizBroadcastsChatlistHeaderDropdownItem.react",
    "WAWebBizGatingUtils",
    "WAWebBizToolsChatlistHeaderDropdownItem.react",
    "WAWebCatalogChatlistHeaderDropdownItem.react",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebEligibilityLogging",
    "WAWebListsChatlistHeaderDropdownItem.react",
    "WAWebLogoutChatlistHeaderDropdownItem.react",
    "WAWebManageAdsDropdownItem.react",
    "WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react",
    "WAWebMobilePlatforms",
    "WAWebNativeAdsGatingUtils",
    "WAWebNewGroupChatlistHeaderDropdownItem.react",
    "WAWebOrdersChatlistHeaderDropdownItem.react",
    "WAWebQuickRepliesChatlistHeaderDropdownItem.react",
    "WAWebSMBUserJourneyLogger",
    "WAWebScreenLockChatlistHeaderDropdownItem.react",
    "WAWebSelectChatsChatlistHeaderDropdownItem.react",
    "WAWebSettingsGetters",
    "WAWebShopsChatlistHeaderDropdownItem.react",
    "WAWebStarredChatlistHeaderDropdownItem.react",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcMenuItemLabel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebNativeAdsMvpEligibility",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
        ]),
        n = t[0],
        a = e.activeAccountInfo,
        i = e.chatListCollapsed,
        l = e.isMultiSelectMode,
        c = e.startMultiSelect,
        d = e.updateActiveNavBarItem;
      u(function () {
        (o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
          o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.OPEN,
        ),
          o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU,
              userActionTarget: "overflow_menu_button",
            }));
      }, []);
      var m = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        p = m[0],
        _ = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
      o(
        "useWAWebDesktopUpsellWamImpression",
      ).useWAWebDesktopUpsellWamImpression({
        isCtaVisible: !1,
        source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN,
        isBeta: _,
        isBetaUser: p,
      });
      var f = o("WAWebUserPrefsScreenLock").getScreenLockEnabled(),
        g = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
          "wa_web_app_lock_upsell",
        ),
        h = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        y = h.hasAdvertisedViaLWI,
        C = h.isQE2Eligible,
        b = s.jsxs(s.Fragment, {
          children: [
            s.jsx(r("WAWebBizToolsChatlistHeaderDropdownItem.react"), {
              activeAccountInfo: a,
              updateActiveNavBarItem: d,
            }),
            s.jsx(r("WAWebNewGroupChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebShopsChatlistHeaderDropdownItem.react"), {}),
            o("WAWebMobilePlatforms").isSMB() &&
              s.jsx(r("WAWebAdsCreationChatlistHeaderDropdownItem.react"), {
                activeAccountInfo: a,
              }),
            a != null &&
              a !== "not-linked" &&
              o("WAWebBizGatingUtils").shouldShowManageAdsDropdown(a) &&
              !o("WAWebNativeAdsGatingUtils").shouldUseNativeAdsMvpExperience({
                hasAdvertisedViaLWI: y,
                isQE2Eligible: C,
                logExposure: !1,
              }) &&
              s.jsx(r("WAWebManageAdsDropdownItem.react"), {
                activeAccountInfo: a,
              }),
            s.jsx(r("WAWebBizBroadcastsChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebCatalogChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebOrdersChatlistHeaderDropdownItem.react"), {}),
            !n && s.jsx(r("WAWebArchivedChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebQuickRepliesChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebStarredChatlistHeaderDropdownItem.react"), {}),
            s.jsx(r("WAWebSelectChatsChatlistHeaderDropdownItem.react"), {
              chatListCollapsed: i,
              isMultiSelectMode: l,
              startMultiSelect: c,
            }),
            s.jsx(r("WAWebListsChatlistHeaderDropdownItem.react"), {}),
            s.jsx(
              r("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react"),
              {},
            ),
            s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
            f
              ? s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {})
              : s.jsxs(s.Fragment, {
                  children: [
                    g &&
                      s.jsx(
                        r("WAWebScreenLockChatlistHeaderDropdownItem.react"),
                        {},
                      ),
                    s.jsx(r("WAWebLogoutChatlistHeaderDropdownItem.react"), {}),
                  ],
                }),
          ],
        });
      return s.jsx(r("WDSMenu.react"), { children: b });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
