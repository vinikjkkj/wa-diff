__d(
  "WAWebAdCreationLogger",
  [
    "WALogger",
    "WAWebCTWAConstants",
    "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
    "WAWebLwiEntryPointImpressionWamEvent",
    "WAWebLwiEntryTapWamEvent",
    "WAWebLwiScreenWamEvent",
    "WAWebManageAdsEntryPointImpressionWamEvent",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumBannerTypes",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumLwiScreenReference",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e === "not-linked"
        ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE
        : e.type === "whatsapp"
          ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.WHATSAPP
          : (e.type,
            o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE);
    }
    var c = function (t, n) {
        new (o(
          "WAWebLwiEntryPointImpressionWamEvent",
        ).LwiEntryPointImpressionWamEvent)({
          lwiEntryPoint: t,
          userHasLinkedFbPage: n,
        }).commit();
      },
      d = function (t) {
        var e = t.lwiEntryPoint,
          n = t.lwiExtras,
          r = t.lwiFlowId,
          a = t.userHasLinkedFbPage,
          i = t.waCampaignId,
          l = t.webFlowType,
          s = new (o("WAWebLwiEntryTapWamEvent").LwiEntryTapWamEvent)({
            lwiEntryPoint: e,
            lwiFlowId: r,
            userHasLinkedFbPage: a,
            waCampaignId: i,
          });
        (l != null && (s.webFlowType = l),
          n != null && (s.lwiExtras = n),
          s.commit());
      },
      m = function (t) {
        var e = t.lwiEntryPoint,
          n = t.userHasLinkedFbPage,
          r = t.waCampaignId,
          a = t.webFlowType;
        o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber();
        var i = o("WAWebUserPrefsCTWA").generateAdCreationFlowId();
        return (
          d({
            lwiEntryPoint: e,
            lwiFlowId: i,
            userHasLinkedFbPage: n,
            waCampaignId: r,
            webFlowType: a,
          }),
          i
        );
      },
      p = function (t, n, r) {
        new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
          lwiAdsIdentityType: n,
          lwiEventSequenceNumber:
            o("WAWebUserPrefsCTWA").getAndIncrementAdCreationSequenceNumber(),
          lwiFlowId: o("WAWebUserPrefsCTWA").getAdCreationFlowId(),
          lwiIsFbAppInstalled: !1,
          lwiScreenAction: t,
          lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
            .LWI_SCREEN_REFERENCE.LWI_SCREEN_NUX_EDUCATION,
          userHasLinkedFbPage: r,
        }).commit();
      },
      _ = function (t) {
        new (o(
          "WAWebManageAdsEntryPointImpressionWamEvent",
        ).ManageAdsEntryPointImpressionWamEvent)({
          manageAdsEntryPoint: t,
        }).commit();
      };
    function f(e, t) {
      var n = e.hasFacebookPage,
        r = u(e);
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: r,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_MANAGE_ADS_TAB,
        lwiScreenAction: t,
        userHasLinkedFbPage: n,
      }).commit();
    }
    function g(e) {
      switch (e) {
        case o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP:
          return o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .SMB_CHAT_LIST_QP_BANNER;
        case o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD:
          return o("WAWebWamEnumBannerTypes").BANNER_TYPES
            .SMB_BUSINESS_HOME_BANNER;
      }
    }
    function h(t) {
      switch (t) {
        case o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP:
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER;
        case o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD:
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_BUSINESS_HOME_QP_CARD;
        default:
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getLwiEntryPointFromSurfaceId: unknown surface id: ",
                  "",
                ])),
              t,
            ),
            o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER
          );
      }
    }
    function y(e) {
      switch (e) {
        case "banner":
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER;
        case "business_home_qp_card":
          return o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
            .SMB_BUSINESS_HOME_QP_CARD;
        default:
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getLwiEntryPointFromCampaignType: unknown campaign type: ",
                  "",
                ])),
              e,
            ),
            o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_BANNER
          );
      }
    }
    var C = function (t) {
      var e = t.activeAccountInfoType,
        n = t.eligibilityFetchAttempted,
        r = t.hasAdvertisedViaLWI,
        a = t.hasCreatedAd,
        i = t.hasEligibilityData,
        l = t.hasFacebookPage,
        s = t.isPageAssetLinked,
        u = t.isPagelessAssetLinked,
        c = t.lifetimeNativeCTWAAdvertiser,
        d = t.lwiEntryPoint,
        m = t.lwiFlowId,
        p = t.sourceAdCreation,
        _ = t.usesNativeAds;
      new (o(
        "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
      ).CtwaAdCreationAndManagementJourneyWamEvent)({
        lwiEntryPoint: d,
        lwiFlowId: m,
        seqId: 0,
        unifiedSessionId: m,
        extraAttributes: JSON.stringify({
          event_type: "advertise_ep_routing_decision",
          uses_native_ads: _,
          lifetime_native_ctwa_advertiser: c,
          is_page_asset_linked: s,
          is_pageless_asset_linked: u,
          has_advertised_via_lwi: r,
          eligibility_fetch_attempted: n,
          has_eligibility_data: i,
          has_facebook_page: l,
          active_account_info_type: e,
          has_created_ad: a,
          source_ad_creation: p,
        }),
      }).commit();
    };
    ((l.getLwiAdsIdentityTypeFromActiveAccountInfo = u),
      (l.logAdCreationImpression = c),
      (l.logEntryTap = d),
      (l.logAdCreationEntryTap = m),
      (l.logAdCreationNuxScreen = p),
      (l.logManageAdsEntryPointImpression = _),
      (l.logManageAdsScreenEvent = f),
      (l.getBannerTypeFromSurfaceId = g),
      (l.getLwiEntryPointFromSurfaceId = h),
      (l.getLwiEntryPointFromCampaignType = y),
      (l.logRoutingDecision = C));
  },
  98,
);
