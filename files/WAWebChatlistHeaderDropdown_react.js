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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(39),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebSettingsGetters").getShowArchiveV2]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebSettingsValues").useSettingsValues(n),
        i = a[0],
        l = e.activeAccountInfo,
        c = e.chatListCollapsed,
        m = e.isMultiSelectMode,
        p = e.startMultiSelect,
        _ = e.updateActiveNavBarItem,
        f;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = []), (t[1] = f))
        : (f = t[1]),
        u(d, f));
      var g = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        h = g[0],
        y = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        C;
      (t[2] !== h || t[3] !== y
        ? ((C = {
            isCtaVisible: !1,
            source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
              .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN,
            isBeta: y,
            isBetaUser: h,
          }),
          (t[2] = h),
          (t[3] = y),
          (t[4] = C))
        : (C = t[4]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(C));
      var b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o("WAWebUserPrefsScreenLock").getScreenLockEnabled()),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
            "wa_web_app_lock_upsell",
          )),
          (t[6] = S))
        : (S = t[6]);
      var R = S,
        L = o("useWAWebNativeAdsMvpEligibility").useNativeAdsMvpEligibility(),
        E = L.hasAdvertisedViaLWI,
        k = L.isQE2Eligible,
        I;
      t[7] !== l || t[8] !== _
        ? ((I = s.jsx(r("WAWebBizToolsChatlistHeaderDropdownItem.react"), {
            activeAccountInfo: l,
            updateActiveNavBarItem: _,
          })),
          (t[7] = l),
          (t[8] = _),
          (t[9] = I))
        : (I = t[9]);
      var T, D;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s.jsx(r("WAWebNewGroupChatlistHeaderDropdownItem.react"), {})),
          (D = s.jsx(r("WAWebShopsChatlistHeaderDropdownItem.react"), {})),
          (t[10] = T),
          (t[11] = D))
        : ((T = t[10]), (D = t[11]));
      var x;
      t[12] !== l
        ? ((x =
            o("WAWebMobilePlatforms").isSMB() &&
            s.jsx(r("WAWebAdsCreationChatlistHeaderDropdownItem.react"), {
              activeAccountInfo: l,
            })),
          (t[12] = l),
          (t[13] = x))
        : (x = t[13]);
      var $;
      t[14] !== l || t[15] !== E || t[16] !== k
        ? (($ =
            l != null &&
            l !== "not-linked" &&
            o("WAWebBizGatingUtils").shouldShowManageAdsDropdown(l) &&
            !o("WAWebNativeAdsGatingUtils").shouldUseNativeAdsMvpExperience({
              hasAdvertisedViaLWI: E,
              isQE2Eligible: k,
              logExposure: !1,
            }) &&
            s.jsx(r("WAWebManageAdsDropdownItem.react"), {
              activeAccountInfo: l,
            })),
          (t[14] = l),
          (t[15] = E),
          (t[16] = k),
          (t[17] = $))
        : ($ = t[17]);
      var P, N, M;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s.jsx(
            r("WAWebBizBroadcastsChatlistHeaderDropdownItem.react"),
            {},
          )),
          (N = s.jsx(r("WAWebCatalogChatlistHeaderDropdownItem.react"), {})),
          (M = s.jsx(r("WAWebOrdersChatlistHeaderDropdownItem.react"), {})),
          (t[18] = P),
          (t[19] = N),
          (t[20] = M))
        : ((P = t[18]), (N = t[19]), (M = t[20]));
      var w;
      t[21] !== i
        ? ((w =
            !i &&
            s.jsx(r("WAWebArchivedChatlistHeaderDropdownItem.react"), {})),
          (t[21] = i),
          (t[22] = w))
        : (w = t[22]);
      var A, F;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s.jsx(
            r("WAWebQuickRepliesChatlistHeaderDropdownItem.react"),
            {},
          )),
          (F = s.jsx(r("WAWebStarredChatlistHeaderDropdownItem.react"), {})),
          (t[23] = A),
          (t[24] = F))
        : ((A = t[23]), (F = t[24]));
      var O;
      t[25] !== c || t[26] !== m || t[27] !== p
        ? ((O = s.jsx(r("WAWebSelectChatsChatlistHeaderDropdownItem.react"), {
            chatListCollapsed: c,
            isMultiSelectMode: m,
            startMultiSelect: p,
          })),
          (t[25] = c),
          (t[26] = m),
          (t[27] = p),
          (t[28] = O))
        : (O = t[28]);
      var B, W, q, U;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s.jsx(r("WAWebListsChatlistHeaderDropdownItem.react"), {})),
          (W = s.jsx(
            r("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react"),
            {},
          )),
          (q = s.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (U = v
            ? s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {})
            : s.jsxs(s.Fragment, {
                children: [
                  R &&
                    s.jsx(
                      r("WAWebScreenLockChatlistHeaderDropdownItem.react"),
                      {},
                    ),
                  s.jsx(r("WAWebLogoutChatlistHeaderDropdownItem.react"), {}),
                ],
              })),
          (t[29] = B),
          (t[30] = W),
          (t[31] = q),
          (t[32] = U))
        : ((B = t[29]), (W = t[30]), (q = t[31]), (U = t[32]));
      var V;
      if (
        t[33] !== w ||
        t[34] !== O ||
        t[35] !== I ||
        t[36] !== x ||
        t[37] !== $
      ) {
        var H = s.jsxs(s.Fragment, {
          children: [I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U],
        });
        ((V = s.jsx(r("WDSMenu.react"), { children: H })),
          (t[33] = w),
          (t[34] = O),
          (t[35] = I),
          (t[36] = x),
          (t[37] = $),
          (t[38] = V));
      } else V = t[38];
      return V;
    }
    function d() {
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
    }
    l.default = c;
  },
  98,
);
