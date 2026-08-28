__d(
  "AdsErrorCodeToExtraDataMap",
  [
    "errorCode",
    "AdAccountDSAInfoChangeVerificationModalAction",
    "AdCampaignDestination",
    "AdSchedulingStrings",
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignGroupPaths",
    "AdsAPICampaignPaths",
    "AdsAPIOfferPaths",
    "AdsAPIOptimizationGoals",
    "AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils",
    "AdsAudienceRedirectionUtils",
    "AdsBIAdgroupPublishFrictionSharedContents",
    "AdsBrandedContentAudioSwapCTA.react",
    "AdsBrandedContentErrorCTAUtils",
    "AdsBrandedContentSelectIdentityCTA.react",
    "AdsBusinessIntegrityTwoFactorModalUtils",
    "AdsCampaignGroupBudgetValidationUtils",
    "AdsCommerceManagerRedirectionUtils",
    "AdsEmptyProductSetEditorErrorUtils",
    "AdsErrorsCTAStrings",
    "AdsExistingPostDefaultingGatingUtils",
    "AdsExistingPostOpenCTADialogDataAction",
    "AdsFinservSharedContent",
    "AdsFrequencyControlEditorConstants",
    "AdsInterfacesLogger",
    "AdsPagePostUtils",
    "AdsProductSet2024H2ExperimentUtils",
    "AdsPromoAdsOfferManagementAddEditOfferAction",
    "AdsStackedErrorsCardUtils",
    "AdsTargetingFrictionGKs",
    "AdsUEditorAdgroupMessageMarketingCTAStrings",
    "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalAction",
    "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalAction",
    "AdsUEditorAdgroupPartnershipAdsMutators",
    "AdsUEditorAdgroupRemoveThreadsAccountDataAction",
    "AdsUEditorAdgroupUpcomingEventConsts",
    "AdsUEditorAdgroupUpcomingEventDetailsStrings",
    "AdsUEditorCampaignAutoScrollKey",
    "AdsUEditorHostIDs",
    "AdsUEditorPartnershipAdsRemoveFeatureCTAAction",
    "AdsUpcomingEventsModalShowAction",
    "AdsVerificationNoticeContentUtils",
    "AppUsabilityErrorMappingUtils",
    "AutomatedShoppingAdsConstants",
    "BusinessIntegrityUserUncertificatedUtils",
    "CrossChannelShopsAdsStrings",
    "JSResource",
    "PromoAdsFieldStrings",
    "SpecialAdCategoryErrorGuidanceCardTuneAction",
    "URI",
    "UnblockAdProcessingErrorConstants",
    "UnblockAdProcessingErrorExperimentUtils",
    "UnblockCustomAudienceDeletedErrorConstants",
    "UnblockCustomAudienceResolutionExperimentUtils",
    "UnblockPostDeletedErrorConstants",
    "UnblockPostDeletedResolutionExperimentUtils",
    "UnblockUnpublishedPageErrorConstants",
    "UnpublishedPageErrorExperimentUtils",
    "XAdsAccountQualityController",
    "cr:38297",
    "getWABABusinessSupportHomeLink",
    "getWhatsAppManagerLink",
    "gkx",
    "immutable",
    "isTruthy",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = o(
        "AdsProductSet2024H2ExperimentUtils",
      ).checkIsInProductSetDiagnosticsTest(),
      m =
        "https://www.facebook.com/government-nonprofits/2024-brasil-elections?country=br",
      p =
        "https://www.facebook.com/business/m/one-sheeters/us-ad-restriction-period-guidance",
      _ = r("immutable").Map([
        [
          3858013,
          {
            cta: r("AdsErrorsCTAStrings").ADD_PHONE_NUMBER,
            ctaRenderer: function (t) {
              var e = t.accountID,
                n = t.adgroup,
                o = t.adObjectLevel,
                a = t.campaignGroup,
                i = t.ctaVariant,
                l = t.error,
                s = t.inReviewMode,
                u = t.onBeforeActivation,
                d = t.pageIDs,
                m = r("lazyLoadComponent")(
                  r("JSResource")(
                    "AdvertiserVettingCustomErrorCTA.react",
                  ).__setRef("AdsErrorCodeToExtraDataMap"),
                );
              return c.jsx(m, {
                accountID: e,
                adObjectLevel: o,
                adgroup: n,
                campaignGroup: a,
                ctaVariant: i,
                error: l,
                inReviewMode: s,
                onBeforeActivation: u,
                pageIDs: d,
              });
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          3858385,
          {
            cta: o("AdsBIAdgroupPublishFrictionSharedContents")
              .CTA_START_AUTH_FBT,
            ctaRenderer: function (t) {
              var e = t.accountID,
                n = t.adgroup,
                o = t.adObjectLevel,
                a = t.campaignGroup,
                i = t.ctaVariant,
                l = t.error,
                s = t.inReviewMode,
                u = t.onBeforeActivation,
                d = t.pageIDs,
                m = r("lazyLoadComponent")(
                  r("JSResource")(
                    "AdvertiserCompromiseCustomErrorCTA.react",
                  ).__setRef("AdsErrorCodeToExtraDataMap"),
                );
              return c.jsx(m, {
                accountID: e,
                adObjectLevel: o,
                adgroup: n,
                campaignGroup: a,
                ctaVariant: i,
                error: l,
                inReviewMode: s,
                onBeforeActivation: u,
                pageIDs: d,
              });
            },
          },
        ],
        [
          2446859,
          {
            cta: o("AdsBIAdgroupPublishFrictionSharedContents")
              .CTA_START_AUTH_FBT,
            customCTA: function () {
              return o(
                "AdsBusinessIntegrityTwoFactorModalUtils",
              ).showAdsBusinessIntegrityAuthenticationModal();
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          3858008,
          {
            cta: o("AdsBIAdgroupPublishFrictionSharedContents")
              .CTA_START_AUTH_FBT,
            customCTA: function () {
              return o(
                "AdsBusinessIntegrityTwoFactorModalUtils",
              ).showAdsBusinessIntegrityAuthenticationModal(!1);
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          3858196,
          {
            cta: r("AdsErrorsCTAStrings").ADD_INFORMATION_CTA,
            path: r("AdsAPICampaignPaths").DSA_BENEFICIARY,
            customCTA: function () {
              r("AdAccountDSAInfoChangeVerificationModalAction").dispatch(
                { isVisible: !0, verificationErrorCode: 3858196 },
                {
                  line: "248",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          3858197,
          {
            cta: r("AdsErrorsCTAStrings").ADD_INFORMATION_CTA,
            path: r("AdsAPICampaignPaths").DSA_PAYOR,
            customCTA: function () {
              r("AdAccountDSAInfoChangeVerificationModalAction").dispatch(
                { isVisible: !0, verificationErrorCode: 3858197 },
                {
                  line: "262",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [3858127, { path: r("AdsAPICampaignPaths").DSA_BENEFICIARY }],
        [3858211, { path: r("AdsAPICampaignPaths").DSA_BENEFICIARY }],
        [3858212, { path: r("AdsAPICampaignPaths").DSA_BENEFICIARY }],
      ]),
      f = r("immutable").Map([
        [
          3858263,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858320,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
        [
          3858376,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o("AdsFinservSharedContent").REVIEW_DECLARATION_CTA_LABEL,
          },
        ],
        [
          3858495,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858496,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
      ]),
      g = r("immutable").Map([
        [
          3858442,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858443,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
      ]),
      h = r("immutable").Map([
        [
          3858541,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION_INDIA,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858542,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION_INDIA,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
      ]),
      y = r("immutable").Map([
        [
          3858548,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858549,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
      ]),
      C = r("immutable").Map([
        [
          3858634,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("beneficiary"),
          },
        ],
        [
          3858636,
          {
            path: r("AdsAPICampaignPaths").COMPLIANCE_SECTION,
            cta: o(
              "AdsVerificationNoticeContentUtils",
            ).getVerifyNewIdentityButtonContent("payer"),
          },
        ],
      ]),
      b = r("immutable").Map([
        [
          4469006,
          o(
            "AdsEmptyProductSetEditorErrorUtils",
          ).getEmptyProductSetEditorErrorExtraData(),
        ],
        [
          4469008,
          {
            cta: r("AdsErrorsCTAStrings").VIEW_IN_AD_CTA,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.path,
          },
        ],
        [
          3303005,
          {
            customCTA: o("AdsAudienceRedirectionUtils").openAudienceManager,
            cta: r("AdsErrorsCTAStrings").LINK_TO_AUDIENCE_MANAGER_CTA,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [
          2490457,
          {
            customCTA: function (t) {
              var e,
                n,
                r = t.adgroup,
                a = t.campaignGroup,
                i =
                  r == null || (e = r.creative) == null
                    ? void 0
                    : e.product_set_id,
                l =
                  a == null || (n = a.promoted_object) == null
                    ? void 0
                    : n.product_catalog_id;
              d
                ? o(
                    "AdsCommerceManagerRedirectionUtils",
                  ).openCommerceManagerItemsTabInNewWindowFilteredForProductSet(
                    l,
                    i,
                    "set_with_insufficient_items_error_card",
                  )
                : o(
                    "AdsCommerceManagerRedirectionUtils",
                  ).openCommerceManagerItemsTab(
                    l,
                    i,
                    "set_with_insufficient_items_error_card",
                  );
            },
            cta: r("AdsErrorsCTAStrings").LINK_TO_COMMERCE_MANAGER_CTA,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
      ]);
    function v() {
      return o("AdsPagePostUtils").getSesameEnabled(
        !1,
        r("AdCampaignDestination").UNDEFINED,
      )
        ? {
            cta: r("AdsErrorsCTAStrings").ADD_CTA_BUTTON,
            path: r("AdsAPIAdgroupPaths").CREATIVE.CALL_TO_ACTION.TYPE,
          }
        : {
            cta: r("AdsErrorsCTAStrings").ADD_CTA_BUTTON,
            customCTA: function () {
              r("AdsExistingPostOpenCTADialogDataAction").dispatch(
                { isVisible: !0 },
                {
                  line: "457",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
          };
    }
    var S = r("immutable").Map([
        [3858720, v()],
        [3858615, v()],
        [2061016, v()],
        [2061044, v()],
      ]),
      R = r("immutable").Map([
        [
          1870194,
          { path: r("AdsAPICampaignPaths").TARGETING.GEO_LOCATIONS.path },
        ],
        [
          2859015,
          {
            customCTA: function () {
              var t = r("XAdsAccountQualityController")
                .getURIBuilder()
                .getURI();
              (e || (e = r("URI"))).goURIOnNewWindow(t);
            },
            cta: r("AdsErrorsCTAStrings").LINK_TO_COMMERCE_MANAGER_CTA,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [2241014, { path: r("AdsAPIAdgroupPaths").CREATIVE_LINK_URL }],
        [
          1885029,
          { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PAGE_ID },
        ],
      ]),
      L = r("immutable").Map([
        [2446391, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID }],
        [
          1443225,
          {
            cta: r("AdsErrorsCTAStrings").ADD_MEDIA_CTA,
            path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH,
          },
        ],
        [
          1443128,
          {
            path: [].concat(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CHILD_ATTACHMENTS,
              ["0", "link"],
            ),
          },
        ],
        [1815538, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID }],
      ]),
      E = r("immutable").Map([
        [
          2909055,
          {
            cta: r("AdsErrorsCTAStrings").REVIEW_UPDATES,
            customCTA: function () {
              (r("AdsInterfacesLogger").log({
                eventName: "regulated_category_l2_tuner_cta_selected",
                data: { message: "errorGuidanceCard" },
              }),
                r("SpecialAdCategoryErrorGuidanceCardTuneAction").dispatch(
                  { isVisible: !0 },
                  {
                    line: "545",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                ));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
      ]),
      k = r("immutable").Map([
        [
          3867027,
          {
            cta: o("AdsBrandedContentErrorCTAUtils").NOTIFY_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867027, !1),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
            secondaryCTA: o("AdsBrandedContentErrorCTAUtils").COPY_DEEPLINK_CTA,
            customSecondaryCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867027, !1, "get_permission_deeplink"),
          },
        ],
        [
          3867026,
          {
            cta: o("AdsBrandedContentErrorCTAUtils")
              .REQUEST_PARTNER_PERMISSION_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867026, !1, "request_partner_permission"),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867025,
          {
            cta: o("AdsBrandedContentErrorCTAUtils").NOTIFY_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867025, !1),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867024,
          {
            cta: o("AdsBrandedContentErrorCTAUtils").NOTIFY_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867024, !0),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867028,
          {
            cta: o("AdsBrandedContentErrorCTAUtils").NOTIFY_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867028, !0),
            secondaryCTA: o("AdsBrandedContentErrorCTAUtils").GET_DEEPLINK_CTA,
            customSecondaryCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867028, !0, "get_permission_deeplink"),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867030,
          {
            cta: o("AdsBrandedContentErrorCTAUtils").NOTIFY_CTA,
            customCTAWithPromise: o(
              "AdsBrandedContentErrorCTAUtils",
            ).getCTAOnClick(3867030, !0),
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867107,
          {
            cta: o("AdsBrandedContentErrorCTAUtils")
              .REQUEST_PERMISSIONS_MBS_CTA,
            customCTA: o("AdsBrandedContentErrorCTAUtils").openMBSAdPermissions,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [
          3867105,
          {
            cta: r("AdsErrorsCTAStrings").SELECT_POST,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
          },
        ],
        [
          3867143,
          {
            cta: r("AdsErrorsCTAStrings").REMOVE,
            customCTA: function (t) {
              var e = t.adgroup,
                n = [];
              (r("isTruthy")(e) && n.push(e.id),
                r("AdsUEditorPartnershipAdsRemoveFeatureCTAAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: n,
                    removeFeatureType: o(
                      "AdsUEditorAdgroupPartnershipAdsMutators",
                    ).PartnershipAdRemoveFeatureType.ADVANTAGE_PLUS_CREATIVE,
                  },
                  {
                    line: "660",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                ));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867144,
          {
            cta: r("AdsErrorsCTAStrings").REMOVE,
            customCTA: function (t) {
              var e = t.adgroup,
                n = [];
              (r("isTruthy")(e) && n.push(e.id),
                r("AdsUEditorPartnershipAdsRemoveFeatureCTAAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: n,
                    removeFeatureType: o(
                      "AdsUEditorAdgroupPartnershipAdsMutators",
                    ).PartnershipAdRemoveFeatureType.PAC,
                  },
                  {
                    line: "679",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                ));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867167,
          {
            cta: r("AdsErrorsCTAStrings").REMOVE_TESTIMONIAL,
            customCTA: function (t) {
              var e = t.adgroup,
                n = [];
              (r("isTruthy")(e) && n.push(e.id),
                r("AdsUEditorPartnershipAdsRemoveFeatureCTAAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: n,
                    removeFeatureType: o(
                      "AdsUEditorAdgroupPartnershipAdsMutators",
                    ).PartnershipAdRemoveFeatureType.TESTIMONIAL,
                  },
                  {
                    line: "697",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                ));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          3867235,
          {
            ctaRenderer: o("AdsBrandedContentSelectIdentityCTA.react")
              .renderAdsBrandedContentSelectIdentityCTA,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          3867171,
          {
            ctaRenderer: o("AdsBrandedContentAudioSwapCTA.react")
              .renderAdsBrandedContentAudioSwapCTA,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
      ]),
      I = r("immutable").Map([
        [
          2016091,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_MIN_SPEND_TARGET_PATH,
          },
        ],
        [
          1885056,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_SPEND_CAP_PATH,
          },
        ],
        [
          2446467,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_SPEND_CAP_PATH,
          },
        ],
        [
          2446182,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_SPEND_LIMIT_PATH,
          },
        ],
        [
          1885697,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_MIN_SPEND_TARGET_PATH,
          },
        ],
        [
          1885648,
          {
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_MIN_SPEND_TARGET_OR_CAMPAIGN_GROUP_BUDGET_PATH,
          },
        ],
        [
          1885665,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .CAMPAIGN_SPEND_LIMIT_PATH,
          },
        ],
        [
          2446816,
          {
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .ASA_CAMPAIGN_EXISTING_CUSTOMER_BUDGET_PERCENTAGE_PATH,
          },
        ],
        [
          2446817,
          {
            path: o("AdsCampaignGroupBudgetValidationUtils")
              .ASA_CAMPAIGN_EXISTING_CUSTOMER_BUDGET_PERCENTAGE_PATH,
          },
        ],
      ]),
      T = r("immutable").Map([
        [1487202, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_ID }],
        [
          3858226,
          {
            path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID,
            cta: r("AdsErrorsCTAStrings").EDIT_IDENTITY_CTA,
          },
        ],
      ]),
      D = r("immutable").Map([
        [
          3858527,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: r("AdsAPICampaignPaths").TARGETING.path,
          },
        ],
        [
          1359208,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: r("AdsAPICampaignPaths").TARGETING.path,
          },
        ],
      ]);
    function x() {
      return r("immutable").Map(
        o("UnblockAdProcessingErrorConstants").UNBLOCK_AD_PROCESSING_ERRORS.map(
          function (e) {
            return [
              e,
              {
                cta: o(
                  "UnblockAdProcessingErrorExperimentUtils",
                ).isPassingUnblockAdProcessingErrorH2Experiment(!1)
                  ? r("AdsErrorsCTAStrings").PUBLISH
                  : r("AdsErrorsCTAStrings").TRY_AGAIN,
                ctaRenderer: function (t) {
                  var e = t.accountID,
                    n = t.adgroup,
                    a = t.adObjectLevel,
                    i = t.campaignGroup,
                    l = t.ctaVariant,
                    s = t.error,
                    u = t.inReviewMode,
                    d = t.onBeforeActivation,
                    m = t.pageIDs,
                    p = r("lazyLoadComponent")(
                      r("JSResource")(
                        "AdsAdProcessingErrorRepublishCTAContainer.react",
                      ).__setRef("AdsErrorCodeToExtraDataMap"),
                    );
                  return c.jsx(p, {
                    accountID: e,
                    adObjectLevel: a,
                    adgroup: n,
                    businessID: null,
                    campaignGroup: i,
                    ctaVariant: o(
                      "UnblockAdProcessingErrorExperimentUtils",
                    ).isPassingUnblockAdProcessingErrorH2Experiment(!1)
                      ? "creation"
                      : l,
                    error: s,
                    inReviewMode: u,
                    onBeforeActivation: d,
                    pageIDs: m,
                    wabaID: null,
                  });
                },
                customCTAType: o("AdsStackedErrorsCardUtils")
                  .AdsErrorCustomCTAType.ONE_CLICK,
              },
            ];
          },
        ),
      );
    }
    function $() {
      return o(
        "UnblockCustomAudienceResolutionExperimentUtils",
      ).isPassingUnblockCustomAudienceResolutionExperiment(!1)
        ? r("immutable").Map(
            o(
              "UnblockCustomAudienceDeletedErrorConstants",
            ).UNBLOCK_CUSTOM_AUDIENCE_DELETED_ERRORS.map(function (e) {
              return [
                e,
                {
                  cta: r("AdsErrorsCTAStrings").APPLY_NOW,
                  path: r("AdsAPICampaignPaths").TARGETING.path,
                  ctaRenderer: function (t) {
                    var e = t.accountID,
                      n = t.adgroup,
                      o = t.adObjectLevel,
                      a = t.campaignGroup,
                      i = t.ctaVariant,
                      l = t.error,
                      s = t.inReviewMode,
                      u = t.onBeforeActivation,
                      d = t.pageIDs,
                      m = r("lazyLoadComponent")(
                        r("JSResource")(
                          "AdsAdCustomAudienceDeletedResolutionCTAContainer.react",
                        ).__setRef("AdsErrorCodeToExtraDataMap"),
                      );
                    return c.jsx(m, {
                      accountID: e,
                      adObjectLevel: o,
                      adgroup: n,
                      campaignGroup: a,
                      ctaVariant: i,
                      error: l,
                      inReviewMode: s,
                      onBeforeActivation: u,
                      pageIDs: d,
                    });
                  },
                  customCTAType: o("AdsStackedErrorsCardUtils")
                    .AdsErrorCustomCTAType.ONE_CLICK,
                },
              ];
            }),
          )
        : r("immutable").Map([]);
    }
    function P() {
      return o(
        "UnblockPostDeletedResolutionExperimentUtils",
      ).isPassingUnblockPostDeletedResolutionExperiment(!1)
        ? r("immutable").Map(
            o(
              "UnblockPostDeletedErrorConstants",
            ).UNBLOCK_POST_DELETED_ERRORS.map(function (e) {
              return [
                e,
                {
                  cta: r("AdsErrorsCTAStrings").SELECT_NEW_POST,
                  path: r("AdsAPIAdgroupPaths").CREATIVE.path,
                  ctaRenderer: function (t) {
                    var e = t.accountID,
                      n = t.adgroup,
                      o = t.adObjectLevel,
                      a = t.campaignGroup,
                      i = t.ctaVariant,
                      l = t.error,
                      s = t.inBulkMode,
                      u = t.inReviewMode,
                      d = t.onBeforeActivation,
                      m = t.pageIDs,
                      p = r("lazyLoadComponent")(
                        r("JSResource")(
                          "AdsAdPostDeletedResolutionCTAContainer.react",
                        ).__setRef("AdsErrorCodeToExtraDataMap"),
                      );
                    return c.jsx(p, {
                      accountID: e,
                      adObjectLevel: o,
                      adgroup: n,
                      campaignGroup: a,
                      ctaVariant: i,
                      error: l,
                      inBulkMode: s,
                      inReviewMode: u,
                      onBeforeActivation: d,
                      pageIDs: m,
                    });
                  },
                  customCTAType: o("AdsStackedErrorsCardUtils")
                    .AdsErrorCustomCTAType.ONE_CLICK,
                },
              ];
            }),
          )
        : r("immutable").Map([]);
    }
    function N() {
      return o(
        "UnpublishedPageErrorExperimentUtils",
      ).isInUnpublishedPageErrorExperiment(!1)
        ? r("immutable").Map(
            o(
              "UnblockUnpublishedPageErrorConstants",
            ).UNBLOCK_PAGE_UNPUBLISHED_ERRORS.map(function (e) {
              return [
                e,
                {
                  cta: r("AdsErrorsCTAStrings").VIEW_IN_AD_CTA,
                  path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                    .PAGE_ID,
                  customCTAType: o("AdsStackedErrorsCardUtils")
                    .AdsErrorCustomCTAType.ONE_CLICK,
                },
              ];
            }),
          )
        : r("immutable").Map([]);
    }
    var M = r("immutable").Map([
        [
          2909035,
          {
            cta: r("AdsErrorsCTAStrings").REVIEW_UPDATES,
            customCTA: function () {
              (r("AdsInterfacesLogger").log({
                eventName: "regulated_category_l2_tuner_cta_selected",
                data: { message: "errorGuidanceCard" },
              }),
                r("SpecialAdCategoryErrorGuidanceCardTuneAction").dispatch(
                  { isVisible: !0 },
                  {
                    line: "1000",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                ));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
      ]),
      w = r("immutable").Map([
        [
          4017057,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_MESSAGE_CTA,
            path: r("AdsAPIAdgroupPaths").CREATIVE.path,
          },
        ],
        [
          4017126,
          {
            cta: r("AdsErrorsCTAStrings").REQUEST_WABA_REVIEW_CTA,
            customCTA: function (n) {
              var t = n.businessID,
                o = n.wabaID,
                a = r("getWABABusinessSupportHomeLink")(t, o);
              (e || (e = r("URI"))).goURIOnNewWindow(new e(a));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [
          4017171,
          {
            cta: r("AdsErrorsCTAStrings").REQUEST_WABA_REVIEW_CTA,
            customCTA: function () {
              r(
                "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalAction",
              ).dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  showWABAAppealFlowModal: !0,
                },
                {
                  line: "1037",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          4017176,
          {
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_REQUEST_REVIEW_APPEAL_STATUS_BUTTON_LABEL,
            customCTA: function () {
              r(
                "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalAction",
              ).dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  showWABAAppealFlowModal: !0,
                },
                {
                  line: "1050",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          4017092,
          {
            cta: r("AdsErrorsCTAStrings").VERIFY_WA_PHONE_NUMBER_CTA,
            customCTA: function (n) {
              var t = n.accountID,
                a = n.businessID,
                i = o(
                  "AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils",
                ).getAdvertisingSettingsLink({
                  adAccountID: t,
                  businessID: a,
                  gridWidgetGroup: "MESSAGING_CONTROLS",
                  navEntryPoint: "am_error_card",
                });
              (e || (e = r("URI"))).goURIOnNewWindow(new e(i));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [
          4017049,
          {
            cta: r("AdsErrorsCTAStrings").CHECK_WA_DISPLAY_NAME_CTA,
            customCTA: function (n) {
              var t = n.businessID,
                o = r("getWhatsAppManagerLink")(t);
              (e || (e = r("URI"))).goURIOnNewWindow(new e(o));
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
        [
          4017129,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: [
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_TARGETING_SECTION_COMPONENT,
            ],
          },
        ],
        [
          4017014,
          {
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_REQUEST_REVIEW_BUTTON_LABEL,
            customCTA: function () {
              r(
                "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalAction",
              ).dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  showTemplateAppealFlowModal: !0,
                },
                {
                  line: "1100",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          4017175,
          {
            cta: o("AdsUEditorAdgroupMessageMarketingCTAStrings")
              .MARKETING_MESSAGE_REQUEST_REVIEW_APPEAL_STATUS_BUTTON_LABEL,
            customCTA: function () {
              r(
                "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalAction",
              ).dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  showTemplateAppealFlowModal: !0,
                },
                {
                  line: "1115",
                  module: "AdsErrorCodeToExtraDataMap.js",
                  moduleID: i.id,
                },
              );
            },
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .MODAL,
          },
        ],
        [
          4017161,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: [
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_TARGETING_SECTION_COMPONENT,
            ],
          },
        ],
        [
          4017129,
          {
            cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            path: [
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_TARGETING_SECTION_COMPONENT,
            ],
          },
        ],
      ]),
      A = r("immutable")
        .Map([
          [
            1359221,
            {
              cta: r("AdsErrorsCTAStrings").SELECT_BUSINESS_HOURS_DAY_CTA,
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .CALL_ADS_CONFIGURATION.BUSINESS_HOURS,
            },
          ],
          [2446443, { path: r("AdsAPICampaignGroupPaths").NAME }],
          [1487566, { path: r("AdsAPICampaignGroupPaths").STATUS }],
          [1815046, { path: r("AdsAPICampaignGroupPaths").AD_LABELS }],
          [2446307, { path: r("AdsAPICampaignGroupPaths").SPEND_CAP }],
          [1885057, { path: r("AdsAPICampaignGroupPaths").SPEND_CAP }],
          [1885099, { path: r("AdsAPICampaignGroupPaths").SPEND_CAP }],
          [2446375, { path: r("AdsAPICampaignGroupPaths").DAILY_BUDGET }],
          [2446462, { path: r("AdsAPICampaignGroupPaths").DAILY_BUDGET }],
          [
            2708008,
            { path: r("AdsAPICampaignGroupPaths").SPECIAL_AD_CATEGORIES },
          ],
          [
            2909060,
            { path: r("AdsAPICampaignGroupPaths").SPECIAL_AD_CATEGORIES },
          ],
          [
            3858566,
            {
              path: r("AdsAPICampaignGroupPaths").DAILY_BUDGET,
              cta: r("AdsErrorsCTAStrings").EDIT_BUDGET_CTA,
            },
          ],
          [1815430, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.path }],
          [1815807, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_ID }],
          [
            2446885,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .CALL_TO_ACTION_TYPES,
              cta: r("AdsErrorsCTAStrings").CONNECT_WHATSAPP_BUSINESS_ACCOUNT,
            },
          ],
          [
            2446886,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .CALL_TO_ACTION_TYPES,
              cta: r("AdsErrorsCTAStrings").CONNECT_WHATSAPP_BUSINESS_ACCOUNT,
            },
          ],
          [
            1885011,
            { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.OBJECT_STORE_URL },
          ],
          [
            2446731,
            {
              path: r("AdsAPICampaignPaths").TARGETING.path,
              cta: r("AdsErrorsCTAStrings").UPDATE_TARGETING_URL_CTA,
            },
          ],
          [
            3858481,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1256",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858480,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1278",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858655,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1300",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858656,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1322",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858479,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_PERFORMANCE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1344",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858653,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_PERFORMANCE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1366",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858654,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_PERFORMANCE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1388",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858071,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1410",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858477,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1432",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858475,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1454",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858473,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1476",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858657,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1498",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858658,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1520",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858659,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1542",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858660,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA_SENTENCE_CASE,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1564",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858478,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1586",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858476,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1608",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858471,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_PERFORMANCE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1630",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858470,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1652",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            3858482,
            {
              cta: r("AdsErrorsCTAStrings").UPDATE_GOAL_CTA,
              customCTA: function (t) {
                var e = t.adgroup,
                  o = [];
                (r("isTruthy")(e) && o.push(e.adset_id),
                  n("cr:38297").dispatch(
                    {
                      campaignIDs: o,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      optimizationGoal: r("AdsAPIOptimizationGoals")
                        .LINK_CLICKS,
                      isNewCampaign: !1,
                      defaultConversionWindowLength: 1,
                      defaultViewConversionWindowLength: 0,
                      defaultEngagedVideoViewWindowLength: null,
                    },
                    {
                      line: "1674",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            2446843,
            {
              path: r("AdsAPICampaignPaths").TARGETING.path,
              cta: r("AdsErrorsCTAStrings").UPDATE_TARGETING_URL_CTA,
            },
          ],
          [
            2446728,
            {
              path: r("AdsAPICampaignPaths").TARGETING.path,
              cta: r("AdsErrorsCTAStrings").UPDATE_TARGETING_URL_CTA,
            },
          ],
          [
            2446839,
            {
              path: r("AdsAPICampaignPaths").TARGETING.path,
              cta: r("AdsErrorsCTAStrings").UPDATE_TARGETING_URL_CTA,
            },
          ],
          [
            2446732,
            {
              path: r("AdsAPICampaignPaths").DESTINATION_TYPE,
              cta: r("AdsErrorsCTAStrings").CHANGE_DESTINATION,
            },
          ],
          [
            2446509,
            {
              path: r("AdsAPICampaignPaths").DESTINATION_TYPE,
              cta: r("AdsErrorsCTAStrings").CHANGE_DESTINATION,
            },
          ],
          [
            1885662,
            {
              path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.CUSTOM_EVENT_TYPE,
            },
          ],
          [
            1885319,
            { path: r("AdsAPICampaignPaths").BID_ADJUSTMENTS.PAGE_TYPES.path },
          ],
          [1487061, { path: r("AdsAPICampaignPaths").DAILY_BUDGET }],
          [
            1885402,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            1713066,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            1713065,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            3858288,
            {
              path: r("AdsAPICampaignPaths").TARGETING.EXCLUSIONS,
              cta: r("AdsErrorsCTAStrings").GO_TO_AUDIENCE,
            },
          ],
          [
            1870214,
            {
              path: r("AdsAPICampaignPaths").TARGETING.FLEXIBLE_SPEC,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1870214,
            {
              path: r("AdsAPICampaignPaths").TARGETING.FLEXIBLE_SPEC,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1870212,
            {
              path: r("AdsAPICampaignPaths").TARGETING.FLEXIBLE_SPEC,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1870211,
            {
              path: r("AdsAPICampaignPaths").TARGETING.FLEXIBLE_SPEC,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1870213,
            {
              path: r("AdsAPICampaignPaths").TARGETING.FLEXIBLE_SPEC,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1359207,
            {
              path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS,
              cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
            },
          ],
          [
            1713067,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [1487056, { path: r("AdsAPICampaignPaths").STATUS }],
          [1815387, { path: r("AdsAPICampaignPaths").END_TIME }],
          [1815388, { path: r("AdsAPICampaignPaths").START_TIME }],
          [1815386, { path: r("AdsAPICampaignPaths").END_TIME }],
          [1815089, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_ID }],
          [1892234, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_ID }],
          [
            3858204,
            {
              path: r("AdsAPICampaignPaths").TARGETING.AGE_MIN,
              cta: r("AdsErrorsCTAStrings").UPDATE_AUDIENCE,
            },
          ],
          [
            3858569,
            {
              path: r("AdsAPICampaignPaths").TARGETING.GEO_LOCATIONS.path,
              cta: r("AdsErrorsCTAStrings").GO_TO_AUDIENCE,
            },
          ],
          [
            3858788,
            {
              path: r("AdsAPICampaignPaths").TARGETING.EXCLUDED_GEO_LOCATIONS
                .path,
              cta: r("AdsErrorsCTAStrings").GO_TO_AUDIENCE,
            },
          ],
          [
            1885032,
            {
              path: r("AdsAPICampaignGroupPaths").PROMOTED_OBJECT
                .PRODUCT_CATALOG_ID,
            },
          ],
          [
            1815119,
            {
              path: r("AdsAPICampaignGroupPaths").PROMOTED_OBJECT
                .PRODUCT_SET_ID,
            },
          ],
          [
            1885049,
            {
              path: r("AdsAPICampaignGroupPaths").PROMOTED_OBJECT
                .PRODUCT_SET_ID,
            },
          ],
          [
            2490250,
            {
              path: r("AdsAPICampaignGroupPaths").PROMOTED_OBJECT
                .APPLICATION_ID,
            },
          ],
          [
            1815343,
            { path: r("AdsAPICampaignPaths").TARGETING.CUSTOM_AUDIENCES },
          ],
          [
            2006032,
            { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.OFFER_ID },
          ],
          [2006011, { path: r("AdsAPIOfferPaths").TITLE }],
          [2006012, { path: r("AdsAPIOfferPaths").DETAILS }],
          [2006009, { path: r("AdsAPIOfferPaths").REDEMPTION_LINK }],
          [2006010, { path: r("AdsAPIOfferPaths").REDEMPTION_CODE }],
          [1487868, { path: r("AdsAPICampaignPaths").RF_PREDICTION_ID }],
          [1815080, { path: r("AdsAPICampaignPaths").STATUS }],
          [1885043, { path: r("AdsAPICampaignPaths").CREATIVE_SEQUENCE }],
          [1885234, { path: ["targeting"] }],
          [
            1885407,
            { path: r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_INTERVALS },
          ],
          [
            1885406,
            { path: r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_ID_BLOCKS },
          ],
          [1487894, { path: r("AdsAPICampaignPaths").END_TIME }],
          [
            1870068,
            { path: r("AdsAPICampaignPaths").TARGETING.CUSTOM_AUDIENCES },
          ],
          [1784032, { path: r("AdsAPICampaignPaths").CONVERSION_PIXEL_ID }],
          [3858278, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [1815161, { path: r("AdsAPICampaignPaths").BILLING_EVENT }],
          [1815139, { path: r("AdsAPICampaignPaths").IS_AUTOBID }],
          [1815121, { path: r("AdsAPICampaignPaths").IS_AUTOBID }],
          [3858277, { path: r("AdsAPICampaignPaths").IS_AUTOBID }],
          [1815138, { path: r("AdsAPICampaignPaths").BID_INFO.path }],
          [1815067, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [2490408, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [1815916, { path: r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS }],
          [1815923, { path: r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS }],
          [1487746, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [1885575, { path: r("AdsAPICampaignPaths").TARGETING.CONNECTIONS }],
          [
            1487689,
            { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PIXEL_ID },
          ],
          [
            1713022,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            2016084,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            2016086,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [
            2016087,
            { path: r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS },
          ],
          [1885513, { path: r("AdsAPICampaignPaths").ADSET_SCHEDULE }],
          [
            2343002,
            {
              path: [].concat(
                r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS,
                [
                  o("AdsFrequencyControlEditorConstants")
                    .ERROR_PATH_FOR_INTERVAL,
                ],
              ),
            },
          ],
          [
            2343003,
            {
              path: [].concat(
                r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS,
                [
                  o("AdsFrequencyControlEditorConstants")
                    .ERROR_PATH_FOR_FREQUENCY,
                ],
              ),
            },
          ],
          [
            2343001,
            {
              path: [].concat(
                r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS,
                [
                  o("AdsFrequencyControlEditorConstants")
                    .ERROR_PATH_FOR_INTERVAL,
                ],
              ),
            },
          ],
          [1815294, { path: r("AdsAPICampaignPaths").TARGETING.USER_OS }],
          [1885235, { path: ["targeting"] }],
          [3858279, { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PAGE_ID }],
          [
            3858280,
            { path: r("AdsAPICampaignPaths").TARGETING.PUBLISHER_PLATFORMS },
          ],
          [
            1885405,
            { path: r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_INTERVALS },
          ],
          [
            1487094,
            {
              cta: r("AdsErrorsCTAStrings").END_DATE_IN_PAST_CTA,
              path: r("AdsAPICampaignPaths").END_TIME,
            },
          ],
          [1885308, { path: r("AdsAPICampaignPaths").START_TIME }],
          [
            1487033,
            {
              cta: r("AdsErrorsCTAStrings").END_DATE_IN_PAST_CTA,
              path: r("AdsAPICampaignPaths").END_TIME,
            },
          ],
          [
            2446823,
            {
              cta: r("AdsErrorsCTAStrings").END_DATE_IN_PAST_CTA,
              path: r("AdsAPICampaignGroupPaths").STOP_TIME,
            },
          ],
          [1885354, { path: r("AdsAPICampaignPaths").START_TIME }],
          [
            1487793,
            {
              cta: r("AdsErrorsCTAStrings").CAMPAIGN_DURATION_TOO_SHORT_CTA,
              path: r("AdsAPICampaignPaths").END_TIME,
            },
          ],
          [2490218, { path: r("AdsAPICampaignPaths").BID_AMOUNT }],
          [1885437, { path: r("AdsAPICampaignPaths").START_TIME }],
          [1885438, { path: r("AdsAPICampaignPaths").END_TIME }],
          [2013045, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [2490232, { path: r("AdsAPICampaignPaths").BID_STRATEGY }],
          [2490232, { path: r("AdsAPICampaignGroupPaths").BID_STRATEGY }],
          [
            1885010,
            { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PIXEL_ID },
          ],
          [
            1885010,
            {
              path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.OMNICHANNEL_OBJECT
                .path,
            },
          ],
          [
            1892267,
            {
              cta: r("AdsErrorsCTAStrings").EDIT_AD_CTA,
              path: r("AdsAPICampaignPaths").CONVERSION_VALUE_EXPRESSION_SPEC,
            },
          ],
          [
            1892268,
            {
              cta: r("AdsErrorsCTAStrings").EDIT_AD_CTA,
              path: r("AdsAPICampaignPaths").CONVERSION_VALUE_EXPRESSION_SPEC,
            },
          ],
          [
            1815287,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [1487007, { path: r("AdsAPICampaignPaths").END_TIME }],
          [
            2131024,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CANVAS,
            },
          ],
          [
            2131023,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CANVAS,
            },
          ],
          [
            2007004,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CANVAS,
            },
          ],
          [
            1699103,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CANVAS,
            },
          ],
          [2117001, { path: r("AdsAPIAdgroupPaths").CREATIVE.PRODUCT_SET_ID }],
          [2016004, {}],
          [1487517, { path: r("AdsAPIAdgroupPaths").CREATIVE.TITLE }],
          [1772069, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [
            1772103,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [
            1815207,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [
            2875002,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [
            1815238,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [
            2875001,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [
            2142022,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
          ],
          [1772048, {}],
          [1772049, {}],
          [
            1772074,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [
            1772076,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [1815390, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID }],
          [1487930, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID }],
          [
            1443121,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
            },
          ],
          [1487878, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_TYPE }],
          [1487248, { path: r("AdsAPIAdgroupPaths").VIEW_TAGS }],
          [1885088, { path: r("AdsAPIAdgroupPaths").STATUS }],
          [
            2061015,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .LINK,
            },
          ],
          [1487591, {}],
          [1487521, { path: r("AdsAPIAdgroupPaths").CREATIVE.TITLE }],
          [2016006, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [1487015, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [1443014, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [
            3285014,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.APPLINK_TREATMENT },
          ],
          [
            3285013,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.APPLINK_TREATMENT },
          ],
          [
            3285011,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.APPLINK_TREATMENT },
          ],
          [
            3285014,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .WEB_DESTINATION_SPEC.URL,
            },
          ],
          [
            3285013,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .WEB_DESTINATION_SPEC.URL,
            },
          ],
          [
            2016136,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .WEB_DESTINATION_SPEC.URL,
            },
          ],
          [
            3285011,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .WEB_DESTINATION_SPEC.URL,
            },
          ],
          [
            2016008,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [3858274, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [
            1892023,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LEAD_GEN_FORM_ID,
            },
          ],
          [
            1892136,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LEAD_GEN_FORM_ID,
            },
          ],
          [
            1885177,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.TYPE,
            },
          ],
          [
            3858281,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
            },
          ],
          [2446024, { path: r("AdsAPIAdgroupPaths").CREATIVE.BODY }],
          [
            2007001,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.TYPE,
            },
          ],
          [
            3858275,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [
            2061016,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
            },
          ],
          [
            2061044,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
            },
          ],
          [
            2061042,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .CALL_ADS_CONFIGURATION.CALLBACK_TYPE,
            },
          ],
          [
            1885169,
            { path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.OFFER_ID },
          ],
          [
            3858282,
            { path: r("AdsAPICampaignPaths").TARGETING.PUBLISHER_PLATFORMS },
          ],
          [1815023, { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID }],
          [1815017, { path: r("AdsAPIAdgroupPaths").CREATIVE.PRODUCT_SET_ID }],
          [1815159, {}],
          [
            2490042,
            {
              cta: r("AdsErrorsCTAStrings").EDIT_WEBSITE_URL,
              path: r("AdsAPIAdgroupPaths").CREATIVE_LINK_URL,
            },
          ],
          [
            1487897,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ],
          [
            1815869,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .TEMPLATE_DATA.POST_CLICK_CONFIGURATION.path,
            },
          ],
          [
            2490155,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .TEMPLATE_DATA.POST_CLICK_CONFIGURATION.path,
            },
          ],
          [2446657, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [2501112, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [
            2501249,
            { path: r("AdsAPICampaignGroupPaths").ADVERTISER_INTENT.path },
          ],
          [
            2016130,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.APP_LINK,
            },
          ],
          [
            2016131,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.APP_LINK,
            },
          ],
          [
            1487904,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.APP_LINK,
            },
          ],
          [
            2016129,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.APP_LINK,
            },
          ],
          [2446658, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [5024001, { path: ["creative_delivery_push.duration_in_seconds"] }],
          [5024002, { path: ["creative_delivery_push.duration_in_seconds"] }],
          [5024003, { path: ["creative_delivery_push.daily_budget"] }],
          [2446693, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [2446694, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [3285004, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [3285006, { path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL }],
          [1885373, { path: r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_HASH }],
          [1815500, { path: r("AdsAPIAdgroupPaths").CREATIVE.PRODUCT_SET_ID }],
          [2446555, { path: r("AdsAPICampaignPaths").DESTINATION_TYPE }],
          [
            2446963,
            {
              cta: r("AdsErrorsCTAStrings").EDIT_CALL_TO_ACTION_CTA,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.TYPE,
            },
          ],
          [
            2490372,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .ONSITE_DESTINATIONS,
              cta: o("CrossChannelShopsAdsStrings").CrossChannelShopsAdsFbt(
                "DESTINATION",
              ),
            },
          ],
          [
            2490343,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .ONSITE_DESTINATIONS,
            },
          ],
          [
            2446950,
            { path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES },
          ],
          [
            2446223,
            { path: r("AdsAPICampaignGroupPaths").SPECIAL_AD_CATEGORIES },
          ],
          [
            1990065,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.AD_FORMATS,
            },
          ],
          [
            3858130,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858136,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858131,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858137,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858132,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858133,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858134,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858350,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858156,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858348,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_START_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
            },
          ],
          [
            3858135,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858351,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858157,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858349,
            {
              path: o("AutomatedShoppingAdsConstants")
                .AD_SCHEDULE_END_DATE_FIELD_PATH,
              cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
            },
          ],
          [
            3858198,
            {
              path: o("AdsUEditorAdgroupUpcomingEventConsts")
                .UPCOMING_EVENTS_PATH,
              cta: o("AdsUEditorAdgroupUpcomingEventDetailsStrings").ADD_EVENT,
              ctaRenderer: function (t) {
                var e = t.accountID,
                  n = t.adgroup,
                  o = t.adObjectLevel,
                  a = t.campaignGroup,
                  i = t.ctaVariant,
                  l = t.error,
                  s = t.inReviewMode,
                  u = t.onBeforeActivation,
                  d = t.pageIDs,
                  m = r("lazyLoadComponent")(
                    r("JSResource")(
                      "AdsUpcomingEventAddEventErrorCTA.react",
                    ).__setRef("AdsErrorCodeToExtraDataMap"),
                  );
                return c.jsx(m, {
                  accountID: e,
                  adObjectLevel: o,
                  adgroup: n,
                  campaignGroup: a,
                  ctaVariant: i,
                  error: l,
                  inReviewMode: s,
                  onBeforeActivation: u,
                  pageIDs: d,
                });
              },
              customCTA: function () {
                return r("AdsUpcomingEventsModalShowAction").dispatch(
                  {},
                  {
                    line: "2710",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                );
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.MODAL,
            },
          ],
          [
            3858543,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .PROMOTIONAL_METADATA.ALLOWED_COUPON_CODE_SOURCES,
              cta: o("PromoAdsFieldStrings")
                .PROMO_ADS_EMAIL_CAPTURE_SET_UP_OFFER_BUTTON_LABEL,
            },
          ],
          [
            3858587,
            {
              path: r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .PROMOTIONAL_METADATA.ALLOWED_COUPON_CODE_SOURCES,
              cta: o("PromoAdsFieldStrings").PROMO_ADS_ADD_A_CODE_LABEL,
              customCTA: function () {
                r("AdsPromoAdsOfferManagementAddEditOfferAction").dispatch(
                  {
                    visibleNestedViewComponentPluginKey: void 0,
                    promoAdsOfferManagementMode: "promo_codes_create",
                    modalMode: "create_and_select",
                    selectOfferUponCreation: !0,
                  },
                  {
                    line: "2729",
                    module: "AdsErrorCodeToExtraDataMap.js",
                    moduleID: i.id,
                  },
                );
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.MODAL,
            },
          ],
          [
            2708084,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(m);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
          [
            2708083,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(m);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
          [
            2708082,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(m);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
          [
            4588045,
            {
              cta: r("AdsErrorsCTAStrings").REMOVE_THREADS_PROFILE,
              customCTA: function (t) {
                var e = t.adgroup,
                  n = [];
                (r("isTruthy")(e) && n.push(e.id),
                  r("AdsUEditorAdgroupRemoveThreadsAccountDataAction").dispatch(
                    { hostID: r("AdsUEditorHostIDs").EDITING, adgroupIDs: n },
                    {
                      line: "2781",
                      module: "AdsErrorCodeToExtraDataMap.js",
                      moduleID: i.id,
                    },
                  ));
              },
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.ONE_CLICK,
            },
          ],
          [
            2708085,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(p);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
          [
            2708081,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(p);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
          [
            2708080,
            {
              path: [],
              customCTA: function () {
                (e || (e = r("URI"))).goURIOnNewWindow(p);
              },
              cta: r("AdsErrorsCTAStrings").SEE_DETAILS,
              customCTAType: o("AdsStackedErrorsCardUtils")
                .AdsErrorCustomCTAType.LINK,
            },
          ],
        ])
        .merge(E)
        .merge(M)
        .merge(I)
        .merge(L)
        .merge(R)
        .merge(f)
        .merge(g)
        .merge(h)
        .merge(y)
        .merge(C)
        .merge(b)
        .merge(_)
        .merge(k)
        .merge(T)
        .merge(D)
        .merge(w)
        .merge(x())
        .merge($())
        .merge(P())
        .merge(N())
        .merge(
          o("BusinessIntegrityUserUncertificatedUtils")
            .AdsErrorCodeToCertificationNonDiscrimination,
        )
        .merge(
          o(
            "AdsExistingPostDefaultingGatingUtils",
          ).isBoostOnAML1FBDefaultingEnabled()
            ? S
            : r("immutable").Map(),
        )
        .merge(
          r("gkx")("432")
            ? o("AppUsabilityErrorMappingUtils").APP_ADS_USABILITY_ERRORS
            : o("AppUsabilityErrorMappingUtils")
                .APP_ADS_USABILITY_ERRORS_WITHOUT_USABILITY_GK,
        )
        .merge(
          o("AdsTargetingFrictionGKs").passEASLowReachGuidance()
            ? r("immutable").Map([
                [
                  2446395,
                  {
                    cta: r("AdsErrorsCTAStrings").EDIT_AUDIENCE,
                    path: [
                      r("AdsUEditorCampaignAutoScrollKey")
                        .CAMPAIGN_TARGETING_SECTION_COMPONENT,
                    ],
                  },
                ],
              ])
            : r("immutable").Map(),
        )
        .merge(
          o(
            "AdsTargetingFrictionGKs",
          ).passTargetingValidationErrorImprovements()
            ? r("immutable").Map([
                [
                  2446385,
                  {
                    cta: r("AdsErrorsCTAStrings").ADD_LOCATION,
                    path: [
                      r("AdsUEditorCampaignAutoScrollKey")
                        .CAMPAIGN_TARGETING_SECTION_COMPONENT,
                    ],
                  },
                ],
                [
                  1885364,
                  {
                    cta: r("AdsErrorsCTAStrings").ADD_LOCATION,
                    path: [
                      r("AdsUEditorCampaignAutoScrollKey")
                        .CAMPAIGN_TARGETING_SECTION_COMPONENT,
                    ],
                  },
                ],
                [
                  1487851,
                  {
                    cta: r("AdsErrorsCTAStrings").ADD_LOCATION,
                    path: [
                      r("AdsUEditorCampaignAutoScrollKey")
                        .CAMPAIGN_TARGETING_SECTION_COMPONENT,
                    ],
                  },
                ],
                [
                  1487756,
                  {
                    cta: r("AdsErrorsCTAStrings").UPDATE_LOCATIONS,
                    path: [
                      r("AdsUEditorCampaignAutoScrollKey")
                        .CAMPAIGN_TARGETING_SECTION_COMPONENT,
                    ],
                  },
                ],
              ])
            : r("immutable").Map(),
        ),
      F = A;
    l.default = F;
  },
  98,
);
