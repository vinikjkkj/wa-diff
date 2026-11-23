__d(
  "adsBulkEditValidationInputSelector",
  [
    "invariant",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountValueAdjustmentRuleCollectionsSelector",
    "AdsAdgroupDraftFragmentStore",
    "AdsBulkEditSources",
    "AdsBulkValueFlowUtils",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsCTVCompatibilityUtils",
    "AdsCampaignBulkStore",
    "AdsCampaignGoalExpressionUtils",
    "AdsCampaignGroupBudgetValidationUtils",
    "AdsCampaignGroupBulkStore",
    "AdsCampaignIsInAppSalesAutomationUnificationSelector",
    "AdsCampaignIsLeadGenAutomationBrandingExpSelector",
    "AdsDynamicAdsUtils",
    "AdsEmptyValue",
    "AdsFrequencyControlEditorConstants",
    "AdsIsCampaignEligibleForValueAdjustmentRuleSelector",
    "AdsMgmtAdgroupDeleteSelectors",
    "AdsMgmtAdgroupRevertSelectors",
    "AdsMgmtCampaignDeleteSelectors",
    "AdsMgmtCampaignGroupDeleteSelectors",
    "AdsMgmtCampaignGroupRevertSelectors",
    "AdsMgmtCampaignRevertSelectors",
    "AdsMixedValue",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementUIUtils",
    "AdsReasonBindings",
    "AdsSelectionLevelSelectors",
    "AdsUEditorAdgroupDAACOVisibilitySelectors",
    "AdsUEditorAdgroupDADynamicMediaVisibilitySelectors",
    "AdsUEditorAdgroupEditingSelectors",
    "AdsUEditorCampaignAutomatedAdsSelectors",
    "AdsUEditorCampaignBulkSelectors",
    "AdsUEditorCampaignDeliverySelectors",
    "AdsUEditorCampaignGoalStaticPGDFieldContainerUtils",
    "AdsUEditorCampaignGroupRegulatedCategorySelectors",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignPlacementSectionSelectors",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorHostIDs",
    "AdsUEditorSelectors",
    "AdsUEditorVisibilityStatus",
    "AdsUniformValue",
    "AdsUserDeviceTypes",
    "AgenticCheckoutAdsUtils",
    "BulkValueContainmentStatus",
    "CTWAConversationsInLeadsSelector",
    "CTWALeadOptimizationSelector",
    "CapaUtils",
    "DAFlexibleFormatUtils",
    "DateTime",
    "NativeCommerceExperienceLoggingUtils",
    "ProductBrowsingAdsUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "VAROnlyClosedBetaUtils",
    "adsBulkEditEligibleAdgroupMutiAdvertiserAdsSelector",
    "adsBulkEditIneligibleAdgroupAdvantageCreativeSelector",
    "adsCAAPActiveRegulationRegionsSelector",
    "adsCAAPIsIndiaActiveRegulationRegionSelector",
    "adsCampaignHasBulkCampaignGroupBudget",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCrepeBulkEditValidationSelector",
    "adsDSASectionVisibleSelector",
    "adsEditAdgroupToolbarButtonShouldDisableSelector",
    "adsEditCampaignGroupToolbarButtonShouldDisableSelector",
    "adsEditCampaignToolbarButtonShouldDisableSelector",
    "adsGetUniformValueSelector",
    "adsPACBulkEditEligibilitySelector",
    "adsRegularBulkEditMediaEligibleSelector",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "adsRelatedMediaBulkEditAvailableSelector",
    "adsTargetingPGDHasIndividualSettingOrIsEligibleForUnifiedAppSalesSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupAuthorizationCategoryVisibilitySelector",
    "adsUEditorAdgroupCreativeFieldVisibilityMapSelector",
    "adsUEditorAdgroupDestinationFieldVisibilityMapSelector",
    "adsUEditorAdgroupEligibleForAPlusCSelector",
    "adsUEditorAdgroupIsDynamicProductAdSelector",
    "adsUEditorAdgroupPageFieldSelector",
    "adsUEditorAdgroupPartnershipAdsBulkEditEligibleSelector",
    "adsUEditorAdgroupSectionVisibilityStatusMapSelector",
    "adsUEditorAdgroupTestimonialBulkEditEligibleSelector",
    "adsUEditorAdgroupURLTagsFieldSelector",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
    "adsUEditorAreSomeCampaignGroupsSalesBwPSelector",
    "adsUEditorCampaignCanUseTargetFrequencyInAuctionSelector",
    "adsUEditorCampaignCustomerAcquisitionHasAtLeastOneTurnedOnSelector",
    "adsUEditorCampaignGroupIsSpendCapSupportedSelector",
    "adsUEditorCampaignHideBillingEventSelector",
    "adsUEditorCampaignLeadAdsConversionValueExpressionEligibilitySelector",
    "adsUEditorCampaignMMOnlyPlacementSelector",
    "adsUEditorCampaignShouldRenderAdvantageAudienceCampaignSectionSelector",
    "adsUEditorCampaignShouldRenderBulkAgencyFeeCampaignSectionSelector",
    "adsUEditorCampaignTOSAgreementSelector",
    "adsUEditorHasDOFAdgroupSelector",
    "adsUEditorHasMultiMediaAssetsAdgroupSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorInjectEditingCampaignContext",
    "adsUEditorIsAllAdgroupDCOSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = (p = r("adsCreateSelector"))(
        [r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING")],
        function (t) {
          return t === r("AdsUEditorHostIDs").BULK_EDIT_DIALOG
            ? r("AdsBulkEditSources").BULK_EDIT_DIALOG
            : r("AdsBulkEditSources").PE_EDIT_BUTTON_DROPDOWN;
        },
        { name: i.id + ".adsBulkEditSourceSelector" },
      ),
      f = p(
        [
          o("AdsUEditorAdgroupEditingSelectors").allowedStatusesArray,
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        ],
        function (t, n) {
          var e = r("immutable").Map(
            t.map(function (e) {
              return [e.id, e.allowedStatuses];
            }),
          );
          return n.map(function (t) {
            return { allowedStatuses: e.get(t.id), id: t.id, status: t.status };
          });
        },
        { name: i.id + ".adgroupStatusDataSelector" },
      ),
      g = p(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.every(function (e) {
            var t = r("AdsAdgroupDraftFragmentStore").isNew(e.adgroup.id),
              n = o(
                "ShopsAdsOffsiteCheckoutAdsUtils",
              ).isEligibleForOffsiteCheckoutShopsAds(e);
            return (
              o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
                {
                  adgroupId: e.adgroup.id,
                  campaignGroupId: e.campaignGroup.id,
                  campaignId: e.campaign.id,
                  entrypoint: null,
                  funnelStep: o("NativeCommerceExperienceLoggingUtils")
                    .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
                  isAdPublished: !t,
                  isOptin: null,
                  isToggleDisabled: null,
                  nceAdsType: o("AdsDynamicAdsUtils").isDynamicAd(e.adgroup)
                    ? o("NativeCommerceExperienceLoggingUtils")
                        .NativeCommerceExperienceShopsAdsType.DYNAMIC_ADS
                    : o("NativeCommerceExperienceLoggingUtils")
                        .NativeCommerceExperienceShopsAdsType.STATIC_ADS,
                  experienceType: o("NativeCommerceExperienceLoggingUtils")
                    .NativeCommerceExperienceType.COMMON,
                  checkingSource: "bulk_edit_sa_off_opt_in",
                },
                n.isEligible,
                n.reason,
              ),
              n.isEligible
            );
          });
        },
        { name: i.id + ".shouldShowSAOffOptInSelector" },
      ),
      h = (e = o("AdsUEditorCampaignSelectors")).campaigns.some(function (e) {
        return e && r("CapaUtils").isCapaEnabledInCampaign(e);
      }),
      y = e.campaigns.some(function (e) {
        return e && r("CapaUtils").isCapaL0EnabledInCampaign(e);
      }),
      C = p(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.every(function (e) {
            return o(
              "ProductBrowsingAdsUtils",
            ).isEligibleToSeeProductBrowsingToggleOutsideExistingPosts(e);
          });
        },
        { name: i.id + ".shouldShowProductBrowsingOptInSelector" },
      ),
      b = p(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            return o(
              "AgenticCheckoutAdsUtils",
            ).isEligibleToSeeAgenticCheckoutToggle(e);
          });
        },
        { name: i.id + ".shouldShowAgenticCheckoutOptInSelector" },
      ),
      v = p(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsEditAdgroupToolbarButtonShouldDisableSelector"),
          f,
          _,
          r("adsUEditorAdgroupCreativeFieldVisibilityMapSelector"),
          r("adsUEditorAdgroupDestinationFieldVisibilityMapSelector"),
          r("adsUEditorAdgroupSectionVisibilityStatusMapSelector")([
            "identityEditorComponent",
            "trackingEditorComponent",
          ]),
          r("adsUEditorIsAllAdgroupDCOSelector"),
          r("adsUEditorHasDOFAdgroupSelector"),
          r("adsUEditorHasMultiMediaAssetsAdgroupSelector"),
          o("adsUEditorAdgroupPageFieldSelector")
            .adsUEditorAdgroupPageFieldSelector,
          r("adsUEditorAdgroupAuthorizationCategoryVisibilitySelector"),
          r("adsUEditorAdgroupURLTagsFieldSelector"),
          o("AdsMgmtAdgroupRevertSelectors").isAdgroupRevertDisabledSelector,
          o("AdsMgmtAdgroupRevertSelectors")
            .adgroupRevertDisabledReasonSelector,
          o("AdsMgmtAdgroupDeleteSelectors").isAdgroupDeleteDisabledSelector,
          o("AdsMgmtAdgroupDeleteSelectors")
            .adgroupDeleteDisabledReasonSelector,
          (c = o("AdsUEditorCampaignGroupSelectors")).campaignGroups.some(
            (m = o("AdsAPICampaignGroupRecordUtils")).isSmartAppPromotion,
          ),
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
          (u = r("adsUEditorAccountSelector")),
          r("adsPACBulkEditEligibilitySelector"),
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          r("adsRegularBulkEditMediaEligibleSelector"),
          r("adsBulkEditIneligibleAdgroupAdvantageCreativeSelector"),
          r("adsUEditorAdgroupEligibleForAPlusCSelector"),
          o("AdsUEditorAdgroupDAACOVisibilitySelectors")
            .adsUEditorAdgroupIsDAAPlusEligibleSelector,
          o("AdsUEditorAdgroupDADynamicMediaVisibilitySelectors")
            .isDADynamicMediaVisibleSelector,
          r("adsBulkEditEligibleAdgroupMutiAdvertiserAdsSelector"),
          r("adsUEditorAreSomeCampaignGroupsBwISelector"),
          r("adsUEditorAdgroupPartnershipAdsBulkEditEligibleSelector"),
          r("adsUEditorAdgroupTestimonialBulkEditEligibleSelector"),
          c.campaignGroups.every(m.isManualSalesOrApp),
          r("CTWAConversationsInLeadsSelector"),
          r("CTWALeadOptimizationSelector"),
          g,
          C,
          b,
          r("adsUEditorAdgroupIsDynamicProductAdSelector"),
          r("adsRelatedMediaBulkEditAvailableSelector"),
          h,
          y,
        ],
        function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
          E,
          k,
          I,
          T,
          D,
          x,
          $,
          P,
          N,
          M,
          w,
          A,
          F,
          O,
          B,
          W,
          q,
          U,
          V,
        ) {
          var e = R.isPACBulkEditingEligible,
            H = r("immutable")
              .Set(
                l
                  .filter(function (e) {
                    return (
                      e.visibilityStatus ===
                      r("AdsUEditorVisibilityStatus").VISIBLE
                    );
                  })
                  .keys(),
              )
              .union(
                r("immutable").Set(
                  s
                    .filter(function (e) {
                      return (
                        e.visibilityStatus ===
                        r("AdsUEditorVisibilityStatus").VISIBLE
                      );
                    })
                    .keys(),
                ),
              ),
            G =
              u.get("identityEditorComponent") ===
              r("AdsUEditorVisibilityStatus").NOT_VISIBLE,
            z = {
              hasRelatedMediaAvailable: q,
              isPageDisabled: G || p.fieldType !== "auction",
              isShopsDisabled: !0,
              isAdSchedulingVisible: M,
              isAuthorizationCategoryHidden: G || _ === !1,
              isURLTagsDisabled:
                u.get("trackingEditorComponent") ===
                  r("AdsUEditorVisibilityStatus").NOT_VISIBLE ||
                f.isVisible === !1,
              shouldEnablePACBulkEditing: e,
              shouldEnableRegularMediaEditing: E,
              shouldEnableCreativeBadgeEditing: !1,
              shouldEnableMultiAdvertiserAdsEditing: x,
              shouldEnablePartnershipAdsBulkEditing: P,
              shouldEnableTestimonialBulkEditing: N,
              isBwP: $,
              shouldShowAgenticCheckoutOptIn: B,
              shouldShowProductBrowsingOptIn: O,
              shouldShowSAOffOptIn: F,
            };
          return {
            adgroupIDs: t,
            adgroupExtraVisibility: z,
            deleteDisabledReason: C,
            hasDOF: d,
            hasMultiMediaAssets: m,
            isDeleteDisabled: y,
            isRevertDisabled: g,
            revertDisabledReason: h,
            isDCO: c,
            shouldDisable: n,
            source: i,
            statusDataArray: a,
            hasSAPCampaign: b,
            adObjectLevel: v,
            visibleCreativeFieldsSet: H,
            account: S,
            isExistingPostAd: L.some(
              o("AdsAPIAdgroupRecordUtils").isExistingPostAd,
            ),
            adObjectCount: L.length,
            shouldDisableInfoLabels: !1,
            shouldDisableAdvantageCreative: k,
            isCESEligible: I,
            isDAAPlusCEligible: T,
            isDADynamicMediaEligible: D,
            isCTWAConversationsInLeads: w,
            isCTWALeadOptimization: A,
            isDPA: W,
            isEligibleForDACarouselIntroCardRevamp: o(
              "DAFlexibleFormatUtils",
            ).canBulkEditDAFlexibleFormat(L),
            hasCapaCampaign: U,
            hasCapaL0Campaign: V,
          };
        },
        { name: i.id + ".adsBulkEditAdgroupValidationInputSelector" },
      ),
      S = p(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          o("AdsUEditorCampaignAutomatedAdsSelectors")
            .numberOfAutomatedCampaigns,
          o("AdsUEditorCampaignAutomatedAdsSelectors")
            .hidePlacementsForAutomatedAdsMessage,
        ],
        function (t, n, r) {
          return t.length === n
            ? { isAutomated: !0, automatedCampaignMessage: r }
            : { isAutomated: !1, automatedCampaignMessage: null };
        },
        { name: i.id + ".isAutomatedCampaignSelector" },
      ),
      R = p(
        [e.rawEligibilityInformationMap],
        function (t) {
          return t.isEmpty()
            ? !0
            : t.every(function (e, t) {
                return o(
                  "AdsPlacementRawSpecUtils",
                ).isRawEligibilitySpecAutomatic(e);
              });
        },
        { name: i.id + ".isAutoPlacementSelector" },
      ),
      L = p(
        [e.eligibilityInformationArray],
        function (t) {
          return t.length === 0
            ? !0
            : t.every(o("AdsPlacementUIUtils").isMobileOptionsDisabled);
        },
        { name: i.id + ".isMobileOptionsDisabledSelector" },
      ),
      E = p(
        [e.eligibilityInformationArray],
        function (t) {
          return t.length === 0
            ? !0
            : t.every(function (e) {
                var t = o("AdsPlacementUIUtils").getDeviceType(
                  e.spec,
                  e.directInstallDevices,
                );
                return (
                  t !== r("AdsUserDeviceTypes").IOS &&
                  t !== r("AdsUserDeviceTypes").ANDROID
                );
              });
        },
        { name: i.id + ".isMobileOSVersionDisabledSelector" },
      ),
      k = p(
        [
          (d = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.buying_type;
            },
          ),
        ],
        function (t) {
          return t.getValues().every(function (e) {
            return e === r("AdsBuyingTypes").RESERVED;
          });
        },
        { name: i.id + ".isRFCampaignSelector" },
      ),
      I = p(
        [
          d.campaign.bulkByAccessorToJS(function (e) {
            return e.frequency_control_specs;
          }),
        ],
        function (t) {
          return t.getValues().some(function (e) {
            var t;
            return (
              (e == null || (t = e[0]) == null ? void 0 : t.type) === "TARGET"
            );
          });
        },
        { name: i.id + ".hasTargetFrequencyCampaignSelector" },
      ),
      T = p(
        [
          d.campaign.bulkByAccessorToJS(function (e) {
            return e.lifetime_budget;
          }),
          d.campaign.bulkByAccessorToJS(function (e) {
            return e.daily_budget;
          }),
        ],
        function (t, n) {
          return r("adsCampaignHasBulkCampaignGroupBudget")(n, t);
        },
        { name: i.id + ".isCBOCampaignSelector" },
      ),
      D = p(
        [
          o("AdsIsCampaignEligibleForValueAdjustmentRuleSelector")
            .AdsIsCampaignEligibleForValueAdjustmentRuleSelector,
        ],
        function (t) {
          var e = !1;
          t instanceof r("AdsEmptyValue")
            ? (e = !1)
            : t instanceof r("AdsUniformValue") && (e = t.getValue());
          var n = e || t instanceof r("AdsMixedValue");
          return { all: e, some: n };
        },
        { name: i.id + ".isCampaignEligibleForValueAdjustmentRuleSelector" },
      ),
      x = p(
        [o("AdsUEditorCampaignDeliverySelectors").bidStrategy],
        function (t) {
          return t
            .getValues()
            .includes(r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP);
        },
        { name: i.id + ".hasAutobidCampaignSelector" },
      ),
      $ = p(
        [o("AdsUEditorCampaignPlacementSectionSelectors").campaignPAC],
        function (t) {
          var e = t.areAllCampaignPAC;
          return e.getValue() === !0;
        },
        { name: i.id + ".isPACCampaignSelector" },
      ),
      P = p(
        [
          r("AdsCampaignBulkStore").getDerivedRawSpecs,
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
        ],
        function (t, n) {
          var e = r("immutable").Map(
            t.map(function (e) {
              return [e.id, e.allowedStatuses];
            }),
          );
          return n.map(function (t) {
            return { allowedStatuses: e.get(t.id), id: t.id, status: t.status };
          });
        },
        { name: i.id + ".campaignStatusDataSelector" },
      ),
      N = p(
        [o("AdsUEditorCampaignDeliverySelectors").pacingType, T],
        function (t, n) {
          return (
            n.some === !1 ||
            (n.all === !0 &&
              t != null &&
              o("AdsBulkValueFlowUtils").containsValueInBulkValueArrays(
                t,
                "no_pacing",
              ) === r("BulkValueContainmentStatus").ALL)
          );
        },
        { name: i.id + ".isCampaignSpendLimitDisabledSelector" },
      ),
      M = p(
        [
          u,
          r("adsGetUniformValueSelector")(
            d.campaign.bulkByAccessorToJS(function (e) {
              return e.start_time;
            }),
          ),
        ],
        function (t, n) {
          return n != null
            ? r("DateTime").fromISOString(n, t.timezone_id).toDate()
            : null;
        },
        { name: i.id + ".startDateValueSelector" },
      ),
      w = p(
        [
          u,
          r("adsGetUniformValueSelector")(
            d.campaign.bulkByAccessorToJS(function (e) {
              return e.end_time;
            }),
          ),
        ],
        function (t, n) {
          return n != null
            ? r("DateTime").fromISOString(n, t.timezone_id).toDate()
            : null;
        },
        { name: i.id + ".endDateValueSelector" },
      ),
      A = p(
        [M, w],
        function (t, n) {
          var e = n
            ? o("AdsReasonBindings").getDaysBetween(t, n)
            : o("AdsFrequencyControlEditorConstants")
                .DEFAULT_MAX_FREQUENCY_RESET_PERIOD;
          return e < 7;
        },
        { name: i.id + ".isCampaignLengthLessThan7DaysSelector" },
      ),
      F = p(
        [
          d.campaign.bulkByAccessorToJS(function (e) {
            return e.bid_amount;
          }),
        ],
        function (t) {
          return !(
            t.getValues().includes(void 0) || t.getValues().length === 0
          );
        },
        { name: i.id + ".isCampaignUsingBidControlSelector" },
      ),
      O = p(
        [
          o(
            "adsUEditorCampaignLeadAdsConversionValueExpressionEligibilitySelector",
          )
            .adsUEditorCampaignLeadAdsConversionValueExpressionEligibilitySelector,
        ],
        function (t) {
          var e = !1;
          t instanceof r("AdsEmptyValue")
            ? (e = !1)
            : t instanceof r("AdsUniformValue") && (e = t.getValue());
          var n = e || t instanceof r("AdsMixedValue");
          return { all: e, some: n };
        },
        { name: i.id + ".isLeadAdsConversionValueExpressionEnabledSelector" },
      ),
      B = c.campaignGroups.some(function (e) {
        return (
          e &&
          r("VAROnlyClosedBetaUtils").isVAROnlyEnabledInObjective(e.objective)
        );
      }),
      W = e.campaigns.every(function (e) {
        var t,
          n = (t = e.campaign_goal) == null ? void 0 : t.type,
          r = o(
            "AdsUEditorCampaignGoalStaticPGDFieldContainerUtils",
          ).getCampaignGoalTopLevelOptionForGoalType(n);
        return (
          r ===
            o("AdsUEditorCampaignGoalStaticPGDFieldContainerUtils")
              .AdsUEditorCampaignGoalTopLevelOptions.NewCustomerAcquisition ||
          r ===
            o("AdsUEditorCampaignGoalStaticPGDFieldContainerUtils")
              .AdsUEditorCampaignGoalTopLevelOptions.CustomerRetention
        );
      }),
      q = e.campaigns.every(function (e) {
        var t,
          n = o(
            "AdsUEditorCampaignGoalStaticPGDFieldContainerUtils",
          ).getCampaignGoalTopLevelOptionForGoalType(
            (t = e.campaign_goal) == null ? void 0 : t.type,
          );
        return (
          n ===
          o("AdsUEditorCampaignGoalStaticPGDFieldContainerUtils")
            .AdsUEditorCampaignGoalTopLevelOptions.NewCustomerAcquisition
        );
      }),
      U = e.campaigns.every(function (e) {
        var t,
          n = (t = e.campaign_goal) == null ? void 0 : t.type,
          r = o(
            "AdsUEditorCampaignGoalStaticPGDFieldContainerUtils",
          ).getCampaignGoalTopLevelOptionForGoalType(n);
        return (
          r ===
          o("AdsUEditorCampaignGoalStaticPGDFieldContainerUtils")
            .AdsUEditorCampaignGoalTopLevelOptions.CustomerRetention
        );
      }),
      V = e.campaigns.some(function (e) {
        var t = e.max_budget_spend_percentage,
          n = e.min_budget_spend_percentage;
        return (
          o(
            "AdsCampaignGroupBudgetValidationUtils",
          ).isValidBudgetSpendPercentage(t) ||
          o(
            "AdsCampaignGroupBudgetValidationUtils",
          ).isValidBudgetSpendPercentage(n)
        );
      }),
      H = e.campaigns.some(function (e) {
        var t = e.max_budget_spend_percentage,
          n = e.min_budget_spend_percentage,
          r = e.daily_min_spend_target,
          a = e.daily_spend_cap,
          i = e.lifetime_min_spend_target,
          l = e.lifetime_spend_cap,
          s =
            (o("AdsCampaignGroupBudgetValidationUtils").isValidMaxSpendLimit(
              a,
            ) ||
              o("AdsCampaignGroupBudgetValidationUtils").isValidMaxSpendLimit(
                l,
              )) &&
            !o(
              "AdsCampaignGroupBudgetValidationUtils",
            ).isValidBudgetSpendPercentage(t),
          u =
            (o("AdsCampaignGroupBudgetValidationUtils").isValidMinSpendLimit(
              r,
            ) ||
              o("AdsCampaignGroupBudgetValidationUtils").isValidMinSpendLimit(
                i,
              )) &&
            !o(
              "AdsCampaignGroupBudgetValidationUtils",
            ).isValidBudgetSpendPercentage(n);
        return s || u;
      }),
      G = p(
        [o("AdsUEditorCampaignBulkSelectors").isObjectNew],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(t, !1);
        },
        { name: i.id + ".allCampaignsAreNewSelector" },
      ),
      z = p(
        [
          _,
          c.campaignGroups.some(m.isSmartAppPromotion),
          c.campaignGroups.some(function (e) {
            var t = e.budget_strategy;
            return t === "CAMPAIGN_FLEX_BUDGET";
          }),
          r("adsUEditorCampaignCanUseTargetFrequencyInAuctionSelector"),
          r("adsEditCampaignToolbarButtonShouldDisableSelector"),
          P,
          x,
          S,
          R,
          A,
          N,
          F,
          T,
          L,
          E,
          $,
          k,
          I,
          o("AdsUEditorCampaignGroupRegulatedCategorySelectors")
            .isSelectedRegulatedCategorySelector,
          o("AdsMgmtCampaignRevertSelectors").isCampaignRevertDisabledSelector,
          o("AdsMgmtCampaignRevertSelectors")
            .campaignRevertDisabledReasonSelector,
          o("AdsMgmtCampaignDeleteSelectors").isCampaignDeleteDisabledSelector,
          o("AdsMgmtCampaignDeleteSelectors")
            .campaignDeleteDisabledReasonSelector,
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
          u,
          r(
            "adsUEditorCampaignShouldRenderAdvantageAudienceCampaignSectionSelector",
          ),
          r("adsDSASectionVisibleSelector"),
          r(
            "adsUEditorCampaignCustomerAcquisitionHasAtLeastOneTurnedOnSelector",
          ),
          r("adsUEditorAreSomeCampaignGroupsSalesBwPSelector"),
          r(
            "adsTargetingPGDHasIndividualSettingOrIsEligibleForUnifiedAppSalesSelector",
          ),
          D,
          o("AdsAccountValueAdjustmentRuleCollectionsSelector")
            .AdsAccountValueAdjustmentRuleCollectionsSelector,
          r("adsUEditorCampaignHideBillingEventSelector"),
          e.campaigns.every(function (e) {
            var t = e.daily_min_spend_target,
              n = e.daily_spend_cap,
              r = e.lifetime_min_spend_target,
              a = e.lifetime_spend_cap;
            return (
              (o("AdsCampaignGroupBudgetValidationUtils").isValidMinSpendLimit(
                t,
              ) &&
                o("AdsCampaignGroupBudgetValidationUtils").isValidMaxSpendLimit(
                  n,
                )) ||
              (o("AdsCampaignGroupBudgetValidationUtils").isValidMinSpendLimit(
                r,
              ) &&
                o("AdsCampaignGroupBudgetValidationUtils").isValidMaxSpendLimit(
                  a,
                ))
            );
          }),
          H,
          V,
          o("adsCAAPActiveRegulationRegionsSelector")
            .adsCAAPActiveRegulationRegionsSelector,
          o("adsCAAPIsIndiaActiveRegulationRegionSelector")
            .adsCAAPIsIndiaActiveRegulationRegionSelector,
          O,
          r("AdsCampaignIsInAppSalesAutomationUnificationSelector"),
          r("AdsCampaignIsLeadGenAutomationBrandingExpSelector"),
          o("adsUEditorCampaignMMOnlyPlacementSelector")
            .areAnySelectedCampaignsMarketingMessagesOnlySelector,
          c.campaignGroups.every(function (e) {
            return e.objective === r("AdsAPIObjectives").OUTCOME_SALES;
          }),
          q,
          U,
          W,
          c.campaignGroups.some(function (e) {
            var t, n;
            return (t =
              (n = e.special_ad_categories) == null
                ? void 0
                : n.some(r("adsRegulatedCategoryIsHECRegulatedCategory"))) !=
              null
              ? t
              : !1;
          }),
          h,
          y,
          B,
          c.campaignGroups.some(function (e) {
            return (
              e.frequency_control_specs != null &&
              e.frequency_control_specs.size > 0
            );
          }),
          e.campaigns.some(
            o("AdsCTVCompatibilityUtils").isCTVPlacementSelected,
          ),
          G,
          r("adsUEditorInjectEditingCampaignContext")(
            r("adsUEditorCampaignTOSAgreementSelector"),
          ),
        ],
        function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
          E,
          k,
          I,
          T,
          D,
          x,
          $,
          P,
          N,
          M,
          w,
          A,
          F,
          O,
          B,
          W,
          q,
          U,
          V,
          H,
          G,
          z,
          j,
          K,
          Q,
          X,
          Y,
          J,
          Z,
          ee,
          te,
          ne,
        ) {
          var e,
            re = r("gkx")("12406") && (V || U) ? !1 : d === !0;
          return {
            canUseTargetFrequencyInAuction: i,
            hasBudgetFlex: a,
            deleteDisabledReason: E,
            isAutomatedCampaign: c,
            isAutoPlacement: d,
            isCampaignEligibleForValueAdjustmentRule: N,
            accountValueAdjustmentRuleCollectionsLO: M,
            isCBO: f,
            hasAutobidCampaign: u,
            hasSAPCampaign: n,
            isCampaignLengthLessThan7Days: m,
            isCampaignSpendLimitDisabled: p,
            isCampaignUsingBidControl: _,
            isDeleteDisabled: L,
            isMobileOptionsDisabled: g,
            isMobileOSVersionDisabled: h,
            isPACCampaign: y,
            isRF: C,
            hasTargetFrequency: b,
            isRevertDisabled: S,
            revertDisabledReason: R,
            shouldDisable: l,
            source: t,
            statusDataArray: s,
            selectedRegulatedCategory: v,
            adObjectLevel: k,
            account: I,
            shouldRenderAdvantageAudienceCampaignSection: T,
            isDSARequired: D,
            hasAtLeastOneCampaignTurnedOnCustomerAcquisition: x,
            hasSalesBwPCampaign: $,
            hasIndividualSettingOrEligibleForUnifiedAppSales: P,
            isBillingEventDisabled: w,
            allCampaignsHaveMinAndMax: A,
            someCampaignsHaveValidNonPercentageLimits: F,
            someCampaignsHaveValidPercentageLimits: O,
            adsCAAPActiveRegulationRegions: B,
            adsCAAPIsIndiaActiveRegulationRegion: W,
            isLeadAdsConversionValueExpressionEnabled: q,
            isAutoPlacementEnabledOrInAutomationUnificationExp: re,
            hasWhatsAppMMOnlyCampaign: H,
            shouldRenderCampaignGoalPGDSection:
              G &&
              o("AdsCampaignGoalExpressionUtils").shouldUseGoalExpression({
                isHECEnabled: Q,
                isCTVEnabled: ee,
              }),
            allCampaignsHaveNCAOnlyReachNewGoalType: z,
            allCampaignsHaveRetainExistingCustomersGoalType: j,
            allCampaignsHaveNonBroadTopLevelGoal: K,
            hasCampaignGroupFrequencyControl: Z,
            hasCapaCampaign: X,
            hasCapaL0Campaign: Y,
            hasVAROnlyClosedBetaCampaign: J,
            allCampaignsAreNew: te,
            isStructuredLeadsEligible:
              ((e = ne.page.getValue()) == null
                ? void 0
                : e.is_structured_leads_eligible) === !0,
          };
        },
        { name: i.id + ".adsBulkEditCampaignValidationInputSelector" },
      ),
      j = p(
        [
          d.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.buying_type;
          }),
        ],
        function (t) {
          return t.getValues().some(function (e) {
            return e === r("AdsBuyingTypes").RESERVED;
          });
        },
        { name: i.id + ".isRFCampaignGroupSelector" },
      ),
      K = p(
        [
          r("AdsCampaignGroupBulkStore").getDerivedRawSpecs,
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
        ],
        function (t, n) {
          var e = r("immutable").Map(
            t.map(function (e) {
              return [e.id, e.allowedStatuses];
            }),
          );
          return n.map(function (t) {
            return { allowedStatuses: e.get(t.id), id: t.id, status: t.status };
          });
        },
        { name: i.id + ".campaignGroupStatusDataSelector" },
      ),
      Q = c.campaignGroups.none(m.hasBudget_LEGACY),
      X = c.campaignGroups.every(function (e) {
        return e.lifetime_budget != null;
      }),
      Y = c.campaignGroups.some(function (e) {
        return e.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
      }),
      J = p(
        [
          o("AdsMgmtCampaignGroupDeleteSelectors")
            .campaignGroupDeleteDisabledReasonSelector,
          o("AdsMgmtCampaignGroupDeleteSelectors")
            .isCampaignGroupDeleteDisabledSelector,
          o("AdsMgmtCampaignGroupRevertSelectors")
            .isCampaignGroupRevertDisabledSelector,
          o("AdsMgmtCampaignGroupRevertSelectors")
            .campaignGroupRevertDisabledReasonSelector,
          j,
          r("adsEditCampaignGroupToolbarButtonShouldDisableSelector"),
          r("adsUEditorCampaignGroupIsSpendCapSupportedSelector"),
          _,
          K,
          Q,
          X,
          u,
          r("adsCrepeBulkEditValidationSelector"),
          Y,
          r(
            "adsUEditorCampaignShouldRenderBulkAgencyFeeCampaignSectionSelector",
          ),
        ],
        function (t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
          return {
            allCBOWithLifetimeBudget: d,
            deleteDisabledReason: t,
            isDeleteDisabled: n,
            isRevertDisabled: r,
            revertDisabledReason: o,
            isRF: a,
            shouldDisable: i,
            shouldRenderSpendCap: l,
            source: s,
            statusDataArray: u,
            noneCampaignGroupWithBudget: c,
            account: m,
            crepeBulkEditValidation: p,
            hasBudgetFlex: _,
            shouldRenderAgencyFeeSection: f,
          };
        },
        { name: i.id + ".adsBulkEditCampaignGroupValidationInputSelector" },
      ),
      Z = r("adsCreateSelectorsByLevel")(function (e) {
        switch (e) {
          case "ad":
            return v;
          case "ad_set":
            return z;
          case "campaign":
            return J;
          default:
            s(0, 4626);
        }
      }),
      ee = Z;
    l.default = ee;
  },
  98,
);
