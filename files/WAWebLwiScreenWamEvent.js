__d(
  "WAWebLwiScreenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAdContentRecommendationType",
    "WAWebWamEnumAudienceType",
    "WAWebWamEnumBillingStatus",
    "WAWebWamEnumCtwaAdAccountType",
    "WAWebWamEnumCtwaLoginType",
    "WAWebWamEnumDefaultAudienceLocationType",
    "WAWebWamEnumLwiAdCreationAccountConsentFlow",
    "WAWebWamEnumLwiAdMediaType",
    "WAWebWamEnumLwiAdsContentType",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiAlertReason",
    "WAWebWamEnumLwiCtwaAdCtaType",
    "WAWebWamEnumLwiCtwaAdStatusType",
    "WAWebWamEnumLwiDefaultTargetingSpec",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumLwiScreenReference",
    "WAWebWamEnumMediaSource",
    "WAWebWamEnumOnboardingEntryPoint",
    "WAWebWamEnumSmbiAdCreationAccessTokenSource",
    "WAWebWamEnumValidationStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          LwiScreen: [
            2772,
            {
              adContentRecommendation: [
                41,
                o("WAWebWamEnumAdContentRecommendationType")
                  .AD_CONTENT_RECOMMENDATION_TYPE,
              ],
              adMediaTemplateName: [61, e.TYPES.STRING],
              adMediaTypeSelected: [
                40,
                o("WAWebWamEnumLwiAdMediaType").LWI_AD_MEDIA_TYPE,
              ],
              adsContentSelected: [
                42,
                o("WAWebWamEnumLwiAdsContentType").LWI_ADS_CONTENT_TYPE,
              ],
              alertCount: [33, e.TYPES.INTEGER],
              audienceType: [45, o("WAWebWamEnumAudienceType").AUDIENCE_TYPE],
              billingStatus: [
                36,
                o("WAWebWamEnumBillingStatus").BILLING_STATUS,
              ],
              createAdEnabled: [12, e.TYPES.BOOLEAN],
              ctwaAdAccountType: [
                58,
                o("WAWebWamEnumCtwaAdAccountType").CTWA_AD_ACCOUNT_TYPE,
              ],
              ctwaLoginType: [
                59,
                o("WAWebWamEnumCtwaLoginType").CTWA_LOGIN_TYPE,
              ],
              defaultAdsContentSelected: [
                9,
                o("WAWebWamEnumLwiAdsContentType").LWI_ADS_CONTENT_TYPE,
              ],
              defaultAudienceLocationType: [
                57,
                o("WAWebWamEnumDefaultAudienceLocationType")
                  .DEFAULT_AUDIENCE_LOCATION_TYPE,
              ],
              itemCount: [39, e.TYPES.INTEGER],
              lwiAdCampaignId: [46, e.TYPES.STRING],
              lwiAdCreationAccountConsentFlow: [
                63,
                o("WAWebWamEnumLwiAdCreationAccountConsentFlow")
                  .LWI_AD_CREATION_ACCOUNT_CONSENT_FLOW,
              ],
              lwiAdsIdentityType: [
                22,
                o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE,
              ],
              lwiAlertReason: [
                6,
                o("WAWebWamEnumLwiAlertReason").LWI_ALERT_REASON,
              ],
              lwiBudgetInLocal: [15, e.TYPES.INTEGER],
              lwiBudgetOptionsInLocal: [54, e.TYPES.STRING],
              lwiCtwaAdCtaType: [
                24,
                o("WAWebWamEnumLwiCtwaAdCtaType").LWI_CTWA_AD_CTA_TYPE,
              ],
              lwiCtwaAdStatusType: [
                25,
                o("WAWebWamEnumLwiCtwaAdStatusType").LWI_CTWA_AD_STATUS_TYPE,
              ],
              lwiCurrency: [16, e.TYPES.STRING],
              lwiDefaultBudgetInLocal: [17, e.TYPES.INTEGER],
              lwiDefaultDurationInDays: [18, e.TYPES.INTEGER],
              lwiDefaultTargetingSpec: [
                19,
                o("WAWebWamEnumLwiDefaultTargetingSpec")
                  .LWI_DEFAULT_TARGETING_SPEC,
              ],
              lwiDurationInDays: [20, e.TYPES.INTEGER],
              lwiEventSequenceNumber: [2, e.TYPES.INTEGER],
              lwiExtras: [30, e.TYPES.STRING],
              lwiFlowId: [1, e.TYPES.STRING],
              lwiIsFbAppInstalled: [27, e.TYPES.BOOLEAN],
              lwiIsIgAppInstalled: [51, e.TYPES.BOOLEAN],
              lwiLocationTypesSetOnAudienceSelection: [55, e.TYPES.STRING],
              lwiMaxDurationInDays: [52, e.TYPES.INTEGER],
              lwiMinDurationInDays: [53, e.TYPES.INTEGER],
              lwiScreenAction: [
                5,
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION,
              ],
              lwiScreenReference: [
                4,
                o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE,
              ],
              lwiTargetingSpec: [21, e.TYPES.STRING],
              lwiTotalCtwaAds: [26, e.TYPES.INTEGER],
              lwiViewerHasEditPermission: [28, e.TYPES.BOOLEAN],
              lwiViewerHasPromotePermission: [32, e.TYPES.BOOLEAN],
              mediaEdited: [49, e.TYPES.BOOLEAN],
              mediaSource: [66, o("WAWebWamEnumMediaSource").MEDIA_SOURCE],
              onboardingEntryPoint: [
                38,
                o("WAWebWamEnumOnboardingEntryPoint").ONBOARDING_ENTRY_POINT,
              ],
              paymentMethodSet: [13, e.TYPES.BOOLEAN],
              productId: [3, e.TYPES.STRING],
              selectedProductsIdsList: [8, e.TYPES.STRING],
              smbiAdCreationAccessTokenSource: [
                64,
                o("WAWebWamEnumSmbiAdCreationAccessTokenSource")
                  .SMBI_AD_CREATION_ACCESS_TOKEN_SOURCE,
              ],
              totalMediaCount: [50, e.TYPES.INTEGER],
              usedSavedAudience: [31, e.TYPES.BOOLEAN],
              userHasAdvancedAudience: [35, e.TYPES.BOOLEAN],
              userHasBpCredentials: [43, e.TYPES.BOOLEAN],
              userHasCatalogItemsToPromote: [10, e.TYPES.BOOLEAN],
              userHasChangedDefaultCityLevelAudience: [56, e.TYPES.BOOLEAN],
              userHasFbMediaToPromote: [65, e.TYPES.BOOLEAN],
              userHasLinkedFbPage: [7, e.TYPES.BOOLEAN],
              userHasMediaCarousel: [67, e.TYPES.BOOLEAN],
              userHasMultisourceMedia: [60, e.TYPES.BOOLEAN],
              userHasSeenRecommendedBudget: [34, e.TYPES.BOOLEAN],
              userHasStatusToPromote: [11, e.TYPES.BOOLEAN],
              userProvidedFbConsent: [14, e.TYPES.BOOLEAN],
              userWentThroughFbWebLogin: [23, e.TYPES.BOOLEAN],
              validationStatus: [
                37,
                o("WAWebWamEnumValidationStatus").VALIDATION_STATUS,
              ],
              waAdAccountId: [44, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { LwiScreen: [] },
      );
    l.LwiScreenWamEvent = s;
  },
  98,
);
