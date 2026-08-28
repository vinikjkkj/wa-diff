__d(
  "AdsUserSettingsDataManager",
  [
    "AdsAPIUserSettingsRecord",
    "AdsGraphAPI",
    "AdsMgmtPreloadingUtils",
    "AdsPageSelectorInitDataAction",
    "AdsReportDatePresetTypeToPERangeType",
    "AdsUserSettingsCreatedDataAction",
    "AdsUserSettingsDataFields",
    "AdsUserSettingsDataManagerPreloader",
    "AdsUserSettingsUpdateDataAction",
    "BusinessAssetGrouping.brands",
    "DateTime",
    "immutable",
    "promiseDone",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.setFocusModeDefault = function (e, t) {
            var n;
            o("AdsGraphAPI")
              .get(i.id)
              .object("settings", e)
              .post(((n = {}), (n.focus_mode_default = t), n));
          };
        }
        var t = e.prototype;
        return (
          (t.load = function (t) {
            var e = this,
              n = o("AdsGraphAPI")
                .get(i.id)
                .object("ads_user_settings", t)
                .preloadedBy(
                  r("AdsUserSettingsDataManagerPreloader").preloader,
                  o("AdsMgmtPreloadingUtils").defaultConfig,
                )
                .get({ fields: r("AdsUserSettingsDataFields").fields });
            r("promiseDone")(n, function (t) {
              (e.$1(t), e.$2(t));
            });
          }),
          (t.createUserSettings = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("user", t)
                .edge("ads_user_settings")
                .post(),
              function (t) {
                (r("AdsUserSettingsCreatedDataAction").dispatch(
                  { userSettingsID: t.id },
                  {
                    line: "111",
                    module: "AdsUserSettingsDataManager.js",
                    moduleID: i.id,
                  },
                ),
                  e.load(t.id));
              },
            );
          }),
          (t.setDefaultCreationMode = function (t, n) {
            var e,
              r = ((e = {}), (e.default_creation_mode = n), e);
            this.$3(t, r);
          }),
          (t.setSaOffConvLocSeen = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.sa_off_conv_loc_seen = n), e));
          }),
          (t.setSaOffPublishedL2ConvLocSeen = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.saoff_published_l2_conv_loc_seen = n), e));
          }),
          (t.setAdgroupNameTemplate = function (t, n) {
            this.$4(t, n, "adgroup_name_template");
          }),
          (t.setSaOnMigrationOnsiteCheckoutRemovedNoticeSeenStatus = function (
            t,
            n,
          ) {
            var e;
            this.$3(t, ((e = {}), (e.saon_migr_l1_seen_status = n), e));
          }),
          (t.setCampaignNameTemplate = function (t, n) {
            this.$4(t, n, "campaign_name_template");
          }),
          (t.setCampaignGroupNameTemplate = function (t, n) {
            this.$4(t, n, "campaign_group_name_template");
          }),
          (t.setLastUsedPostFormat = function (t, n) {
            var e = {};
            ((e.last_used_post_format = n), this.$3(t, e));
          }),
          (t.setLastUsedRegulatedCategory = function (t, n) {
            var e = {};
            ((e.last_used_regulated_category = n), this.$3(t, e));
          }),
          (t.setPagesInfo = function (t, n, r, o) {
            var e = {};
            ((e.selected_page_id = n),
              (e.selected_page_section = r),
              (e.bookmarked_pages = o),
              this.$3(t, e));
          }),
          (t.setSYDCampaignTrendsMetric = function (t, n) {
            var e,
              r = ((e = {}), (e.syd_campaign_trends_metric = n), e);
            this.$3(t, r);
          }),
          (t.setAutoFlowLiteOptInStatus = function (t, n, r) {
            var e,
              o,
              a = babelHelpers.extends(
                ((e = {}), (e.autoflow_lite_opt_in_status = n), e),
                r && ((o = {}), (o.sticky_setting_after_default_on = n), o),
              );
            this.$3(t, a);
          }),
          (t.setAPlusCAIAgentOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_ai_agent_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCEPAOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_epa_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCCarouselCDAOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_carousel_cda_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCCarouselInlineCommentOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.aplusc_carousel_inline_comment_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setAPlusCEnhanceCTAOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_enhance_cta_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCVideoFilterOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_videofilter_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCVideoUncropOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_videouncrop_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAPlusCLocalStoreExtensionOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.aplusc_local_store_extension_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setPacRelaxationOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.pac_relaxation_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setCreativeFlexOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.creative_flex_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setCreativeFlexOptOutCount = function (t, n) {
            var e,
              r = ((e = {}), (e.creative_flex_opt_out_count = n), e);
            this.$3(t, r);
          }),
          (t.setPushModelOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.push_model_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setDACreativeFlexOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.da_creative_flex_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setShowOriginalVideosOptIn = function (t, n) {
            var e,
              r = ((e = {}), (e.show_original_videos_opt_in = n), e);
            this.$3(t, r);
          }),
          (t.setCarouselToVideoOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.carousel_to_video_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setProductExtensionsOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.product_extensions_opt_in = n), e);
            this.$3(t, r);
          }),
          (t.setStaticAdProductExtensionsOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.static_ad_product_extensions_opt_in = n), e);
            this.$3(t, r);
          }),
          (t.setAddOverlaysOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.add_overlays_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setDAAddOverlaysOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.da_add_overlays_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setDAAdaptImagesOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.da_adapt_images_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setTextTranslationOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.text_translation_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setTextUnificationOptInStatusV2 = function (t, n) {
            var e,
              r = ((e = {}), (e.text_unification_opt_in_status_v2 = n), e);
            this.$3(t, r);
          }),
          (t.setImageTextTranslationOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.image_text_translation_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setVoiceoverTranslationOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.voiceover_trans_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setReplaceMediaTextOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.replace_media_text_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setDAHidePriceOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.da_hide_price_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setShowSummaryOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.show_summary_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setAppDetailsDataOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.app_details_data_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setDCOToMMUOptOutStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.dco_to_mmu_opt_out_status = n), e);
            this.$3(t, r);
          }),
          (t.setFFToMMUOptOutStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.ff_to_mmu_opt_out_status = n), e);
            this.$3(t, r);
          }),
          (t.setMultiMediaOptOutStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.multi_media_opt_out_status = n), e);
            this.$3(t, r);
          }),
          (t.setWebsiteMediaDataOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.website_media_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setWebsiteReviewsDataOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.website_reviews_data_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setWebsiteSellingPointsDataOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.website_selling_points_data_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setPlacementGroupsSquareOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.placement_group_square_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setPlacementGroupsVerticalOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.placement_group_vertical_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setEnhanceCTATextExtractionOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.enhance_cta_text_extraction_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setTextOptimizationsTextExtractionOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.text_optimizations_text_extraction_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setImageTemplatesTextExtractionOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.image_templates_text_extraction_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setImageExpansionOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.image_expansion_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setCreateCTAStickerOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.create_cta_sticker_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setMetadataBrandKitOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.metadata_brand_kit_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setMetadataBrandKitLastOptOutTimestamp = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.metadata_brand_kit_last_opt_out_timestamp = n),
                e);
            this.$3(t, r);
          }),
          (t.setReactiveControlSettings = function (t, n) {
            var e;
            if (!(n == null || n.length === 0)) {
              var o = n.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    sticky_settings:
                      e.sticky_settings != null
                        ? r("immutable").Map(
                            e.sticky_settings.map(function (e, t) {
                              return [e.key, e.value];
                            }),
                          )
                        : r("immutable").Map({}),
                  });
                }),
                a = ((e = {}), (e.reactive_control_settings = o), e);
              this.$3(t, a);
            }
          }),
          (t.setLocalStoreExtensionOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.aplusc_local_store_extension_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setImageBackgrounGenerationOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.image_background_generation_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setImageBrightnessAndContrastOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.image_brightness_and_contrast_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setConnectedSourcesCatalogOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.connected_sources_catalog_opt_in_status = n
                  ? "OPTED_IN"
                  : "OPTED_OUT"),
                e);
            this.$3(t, r);
          }),
          (t.setConnectedSourcesSitelinksOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.ads_cs_sitelinks_opt_in_status = n
                  ? "OPTED_IN"
                  : "OPTED_OUT"),
                e);
            this.$3(t, r);
          }),
          (t.setConnectedSourcesDynamicSEOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.ads_cs_dynamic_se_opt_in_status = n
                  ? "OPTED_IN"
                  : "OPTED_OUT"),
                e);
            this.$3(t, r);
          }),
          (t.setDAOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.aplusc_da_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.setConnectedSourcesCatalogOptOutTimestamp = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e.ads_cs_catalog_opt_out_timestamp = r("immutable").Map(n)),
                e);
            this.$3(t, o);
          }),
          (t.setConnectedSourcesSitelinksOptOutTimestamp = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e.ads_cs_sitelinks_opt_out_timestamp = r("immutable").Map(n)),
                e);
            this.$3(t, o);
          }),
          (t.setDestinationOptimizationOptOutTimestamp = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e.ads_destination_optimization_opt_out_timestamp =
                  r("immutable").Map(n)),
                e);
            this.$3(t, o);
          }),
          (t.setAdaptiveGeoExclusionBannerSeen = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e.adaptive_geo_excl_banner_seen_ts = r("immutable").Map(n)),
                e);
            this.$3(t, o);
          }),
          (t.setConnectedSourcesDynamicSEOptOutTimestamp = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e.ads_cs_dynamic_se_opt_out_timestamp = r("immutable").Map(n)),
                e);
            this.$3(t, o);
          }),
          (t.setTextVariationsStickyOptOut = function (t) {
            var e,
              n =
                ((e = {}),
                (e.text_variations_sticky_opt_in_status = "DEFAULT_OFF"),
                e);
            this.$3(t, n);
          }),
          (t.setUrlPrefillRemovalTimestamp = function (t, n) {
            var e,
              r = ((e = {}), (e.url_prefill_removal_timestamp = n), e);
            this.$3(t, r);
          }),
          (t.setOnsiteDestinationOptimizationOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.onsite_destination_optimization_opt_in = n), e);
            this.$3(t, r);
          }),
          (t.setBlendedAdsCreationDefaultingOptInStatus = function (t, n) {
            var e,
              r =
                ((e = {}),
                (e.blended_ads_creation_defaulting_opt_in_status = n),
                e);
            this.$3(t, r);
          }),
          (t.setTextSuggestionsVisibility = function (t, n) {
            var e = {};
            ((e.text_suggestions_visibility = n), this.$3(t, e));
          }),
          (t.setUserPreferenceForPublishMessageOnEditorClose = function (t, n) {
            var e = {};
            ((e.should_not_show_publish_message_on_editor_close = n),
              this.$3(t, e));
          }),
          (t.setUserPreferenceForCBOCampaignToggleOffConfirmationMessage =
            function (t, n) {
              var e = {};
              ((e.should_not_show_cbo_campaign_toggle_off_confirmation_message =
                n),
                this.$3(t, e));
            }),
          (t.setUserPreferenceForCBOMidflightEducationMessages = function (
            t,
            n,
          ) {
            var e;
            this.$3(
              t,
              ((e = {}),
              (e.muted_cbo_midflight_education_messages = n.toJS()),
              e),
            );
          }),
          (t.setIsSERemovalGuidanceCardDismissed = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.is_se_removal_guidance_dismissed = n), e));
          }),
          (t.setAPlusCOptOutFriction = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.aplusc_opt_out_friction = n), e));
          }),
          (t.setFeedbackSurveys = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.feedback_surveys = n), e));
          }),
          (t.setPcauCatalogOptoutSurveyImpressions = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.pcau_cat_optout_survey_impr = n), e));
          }),
          (t.incrementPcauCatalogOptoutSurveyImpressions = function (t) {
            var e = this,
              n = o("AdsGraphAPI")
                .get(i.id)
                .object("ads_user_settings", t)
                .get({ fields: ["pcau_cat_optout_survey_impr"] });
            r("promiseDone")(n, function (n) {
              var r,
                o = (r = n.pcau_cat_optout_survey_impr) != null ? r : 0;
              e.setPcauCatalogOptoutSurveyImpressions(t, o + 1);
            });
          }),
          (t.setPcauCatalogOptoutSurveyResponseTimestamp = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.pcau_cat_optout_survey_resp_ts = n), e));
          }),
          (t.setPeAiRelevancyOptOutTimestamp = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.pe_ai_relevancy_opt_out_ts = n), e));
          }),
          (t.setPeShowProductsSurveyImpressions = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.pe_show_products_survey_impr = n), e));
          }),
          (t.incrementPeShowProductsSurveyImpressions = function (t) {
            var e = this,
              n = o("AdsGraphAPI")
                .get(i.id)
                .object("ads_user_settings", t)
                .get({ fields: ["pe_show_products_survey_impr"] });
            r("promiseDone")(n, function (n) {
              var r,
                o = (r = n.pe_show_products_survey_impr) != null ? r : 0;
              e.setPeShowProductsSurveyImpressions(t, o + 1);
            });
          }),
          (t.setPeShowProductsSurveyResponseTimestamp = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.pe_show_products_survey_resp_ts = n), e));
          }),
          (t.setCatalogTemplatesSurveyImpressions = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.catalog_templates_survey_impr = n), e));
          }),
          (t.incrementCatalogTemplatesSurveyImpressions = function (t) {
            var e = this,
              n = o("AdsGraphAPI")
                .get(i.id)
                .object("ads_user_settings", t)
                .get({ fields: ["catalog_templates_survey_impr"] });
            r("promiseDone")(n, function (n) {
              var r,
                o = (r = n.catalog_templates_survey_impr) != null ? r : 0;
              e.setCatalogTemplatesSurveyImpressions(t, o + 1);
            });
          }),
          (t.setCatalogTemplatesSurveyResponseTimestamp = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.catalog_templates_survey_resp_ts = n), e));
          }),
          (t.setCatalogTemplatesSurveyLastImpressionTimestamp = function (
            t,
            n,
          ) {
            var e;
            this.$3(
              t,
              ((e = {}), (e.catalog_templates_survey_last_impr_ts = n), e),
            );
          }),
          (t.setGenAIAlphaTestStatus = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.gen_ai_alpha_test_status = n), e));
          }),
          (t.setTotalCouponUpsellDismissals = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.total_coupon_upsell_dismissals = n), e));
          }),
          (t.setTotalCouponSydDismissals = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.total_coupon_syd_dismissals = n), e));
          }),
          (t.setExportFormatDefault = function (t, n, r, o) {
            var e;
            this.$3(
              t,
              ((e = {}),
              (e.export_format_default = n),
              (e.should_export_filter_empty_cols = o),
              (e.should_export_rows_without_unsupported_feature = r),
              e),
            );
          }),
          (t.setCreativeFeatureDefaultConfig = function (t, n) {
            var e,
              o,
              a,
              i,
              l = babelHelpers.extends({}, n, {
                aplusc_personalized_recommendation:
                  n.aplusc_personalized_recommendation != null
                    ? r("immutable").Map(
                        n.aplusc_personalized_recommendation.map(
                          function (e, t) {
                            return [e.key, e.value];
                          },
                        ),
                      )
                    : void 0,
                aplusc_sticky_opt_in_status:
                  n.aplusc_sticky_opt_in_status != null
                    ? r("immutable").Map(
                        n.aplusc_sticky_opt_in_status.map(function (e, t) {
                          return [e.key, e.value];
                        }),
                      )
                    : void 0,
                aplusc_sticky_opt_in_status_v2:
                  n.aplusc_sticky_opt_in_status_v2 != null
                    ? r("immutable").Map(
                        n.aplusc_sticky_opt_in_status_v2.map(function (e, t) {
                          return [e.key, e.value];
                        }),
                      )
                    : void 0,
              }),
              s =
                ((i = {}),
                (i.creative_feature_default_config = {
                  autoflow_duplication_modal: l.autoflow_duplication_modal,
                  aplusc_personalized_recommendation:
                    (e = l.aplusc_personalized_recommendation) != null
                      ? e
                      : void 0,
                  aplusc_sticky_opt_in_status:
                    (o = l.aplusc_sticky_opt_in_status) != null ? o : void 0,
                  aplusc_sticky_opt_in_status_v2:
                    (a = l.aplusc_sticky_opt_in_status_v2) != null ? a : void 0,
                }),
                i);
            this.$3(t, s);
          }),
          (t.setMusicOnReelsOptIn = function (t, n, r) {
            var e,
              o,
              a =
                ((o = {}),
                (o.music_on_reels_opt_in =
                  ((e = {}), (e.carousel = n), (e.single_image = r), e)),
                o);
            this.$3(t, a);
          }),
          (t.setPreviouslySeenRecommendations = function (t, n) {
            var e;
            this.$3(
              t,
              ((e = {}), (e.previously_seen_recommendations = n.toJS()), e),
            );
          }),
          (t.setIsAdsAIConsented = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.is_ads_ai_consented = n), e));
          }),
          (t.setIsCBODefaultOn = function (t, n) {
            var e;
            (r("vulture")("jCbCkzWAi6VZ1rUUWKe1VFjgPks="),
              this.$3(t, ((e = {}), (e.is_cbo_default_on = n), e)));
          }),
          (t.setSelectedAccountID = function (t, n) {
            var e = {};
            ((e.selected_ad_account_id = "act_" + n), this.$3(t, e));
          }),
          (t.setSelectedStatRange = function (t, n, o, a, i, l) {
            var e = {},
              s = {
                range_type: r("AdsReportDatePresetTypeToPERangeType").get(n),
              };
            (o &&
              ((s.start = r("DateTime")
                .fromISOString(o.start, l)
                .getParallel(l)
                .startOfDay().instant),
              (s.end = r("DateTime")
                .fromISOString(o.end, l)
                .getParallel(l)
                .startOfDay().instant)),
              (e.selected_stat_range = s),
              a
                ? (e.selected_comparison_timerange = {
                    range_type: i,
                    start: r("DateTime")
                      .fromISOString(a.start, l)
                      .getParallel(l)
                      .startOfDay().instant,
                    end: r("DateTime")
                      .fromISOString(a.end, l)
                      .getParallel(l)
                      .startOfDay().instant,
                  })
                : (e.selected_comparison_timerange = { range_type: "NONE" }),
              this.$3(t, e));
          }),
          (t.setSelectedMetricsCIC = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.selected_metrics_cic = n), e));
          }),
          (t.setSelectedMetricCIC = function (t, n) {
            var e;
            this.$3(t, ((e = {}), (e.selected_metric_cic = n), e));
          }),
          (t.setGenAIAutoSelectOptInStatus = function (t, n) {
            var e,
              r = ((e = {}), (e.gen_ai_auto_select_opt_in_status = n), e);
            this.$3(t, r);
          }),
          (t.$3 = function (t, n) {
            var e = this;
            o("AdsGraphAPI")
              .get(i.id)
              .object("settings", t)
              .post(n)
              .finally(function () {
                return e.load(t);
              });
          }),
          (t.$4 = function (t, n, r) {
            var e = {};
            ((e[r] = {
              fields: n.getFields(),
              field_separator: n.getFieldSeparator(),
              list_separator: n.getListSeparator(),
            }),
              this.$3(t, e));
          }),
          (t.$5 = function (t) {
            var e = [];
            return (
              t &&
                t.forEach(function (t) {
                  return e.push(t.id);
                }),
              e
            );
          }),
          (t.$6 = function (t) {
            return r("immutable").Map({
              fields: r("immutable").List(t.fields),
              field_separator: t.field_separator,
              list_separator: t.list_separator,
            });
          }),
          (t.$7 = function (t) {
            return { carousel: t[0].value, single_image: t[1].value };
          }),
          (t.$8 = function (t) {
            var e = new Map();
            return (
              t &&
                t.forEach(function (t) {
                  e.set(t.key, t.value);
                }),
              e
            );
          }),
          (t.$9 = function (t) {
            var e = new Map();
            return (
              t &&
                t.forEach(function (t) {
                  e.set(t.key, t.value);
                }),
              e
            );
          }),
          (t.$10 = function (t) {
            var e = new Map();
            return (
              t &&
                t.forEach(function (t) {
                  e.set(t.key, t.value);
                }),
              e
            );
          }),
          (t.$11 = function (t) {
            return r("immutable").Set(t);
          }),
          (t.$2 = function (t) {
            var e = null,
              n = null;
            t.selected_page &&
              ((e = t.selected_page.id),
              (n = t.selected_page.business
                ? t.selected_page.business.id
                : o("BusinessAssetGrouping.brands").NULL_BIZ_ID));
            var a = {
                pageID: e,
                businessID: n,
                section: t.selected_page_section,
              },
              l = this.$5(t.bookmarked_pages);
            r("AdsPageSelectorInitDataAction").dispatch(
              {
                bookmarkedPageIDs: l,
                pageID: a.pageID,
                businessID: a.businessID,
                section: a.section,
              },
              {
                line: "1503",
                module: "AdsUserSettingsDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (t.$1 = function (t) {
            var e = {},
              n = t.id;
            ((e.default_creation_mode = t.default_creation_mode),
              (e.export_format_default = t.export_format_default),
              (e.should_export_filter_empty_cols =
                t.should_export_filter_empty_cols),
              (e.should_export_rows_without_unsupported_feature =
                t.should_export_rows_without_unsupported_feature),
              (e.focus_mode_default = t.focus_mode_default),
              (e.selected_page = r("immutable").Map(t.selected_page)),
              (e.selected_page_section = t.selected_page_section),
              (e.last_used_post_format = t.last_used_post_format),
              (e.last_used_regulated_category = t.last_used_regulated_category),
              (e.bookmarked_pages = r("immutable").List(t.bookmarked_pages)),
              (e.saon_migr_l1_seen_status = t.saon_migr_l1_seen_status),
              (e.text_suggestions_visibility = t.text_suggestions_visibility),
              (e.sa_off_conv_loc_seen = t.sa_off_conv_loc_seen),
              (e.saoff_published_l2_conv_loc_seen =
                t.saoff_published_l2_conv_loc_seen),
              t.adgroup_name_template &&
                (e.adgroup_name_template = this.$6(t.adgroup_name_template)),
              t.campaign_name_template &&
                (e.campaign_name_template = this.$6(t.campaign_name_template)),
              t.campaign_group_name_template &&
                (e.campaign_group_name_template = this.$6(
                  t.campaign_group_name_template,
                )),
              (e.onboarding_config = t.onboarding_config),
              (e.should_not_show_publish_message_on_editor_close =
                !!t.should_not_show_publish_message_on_editor_close),
              (e.should_not_show_cbo_campaign_toggle_off_confirmation_message =
                !!t.should_not_show_cbo_campaign_toggle_off_confirmation_message),
              (e.should_not_show_auto_bid_ud_frequent_status_change_dialog =
                !!t.should_not_show_auto_bid_ud_frequent_status_change_dialog),
              (e.muted_cbo_midflight_education_messages = this.$11(
                t.muted_cbo_midflight_education_messages,
              )),
              (e.previously_seen_recommendations = this.$11(
                t.previously_seen_recommendations,
              )),
              (e.syd_campaign_trends_metric = t.syd_campaign_trends_metric),
              t.music_on_reels_opt_in &&
                (e.music_on_reels_opt_in = this.$7(t.music_on_reels_opt_in)),
              (e.autoflow_lite_opt_in_status = t.autoflow_lite_opt_in_status),
              (e.aplusc_ai_agent_opt_in_status =
                t.aplusc_ai_agent_opt_in_status),
              (e.aplusc_epa_opt_in_status = t.aplusc_epa_opt_in_status),
              (e.aplusc_carousel_cda_opt_in_status =
                t.aplusc_carousel_cda_opt_in_status),
              (e.aplusc_carousel_inline_comment_opt_in_status =
                t.aplusc_carousel_inline_comment_opt_in_status),
              (e.aplusc_da_opt_in_status = t.aplusc_da_opt_in_status),
              (e.pac_relaxation_opt_in_status = t.pac_relaxation_opt_in_status),
              (e.creative_flex_opt_in_status = t.creative_flex_opt_in_status),
              (e.creative_flex_opt_out_count = t.creative_flex_opt_out_count),
              (e.da_creative_flex_opt_in_status =
                t.da_creative_flex_opt_in_status),
              (e.push_model_opt_in_status = t.push_model_opt_in_status),
              (e.sticky_setting_after_default_on =
                t.sticky_setting_after_default_on),
              (e.show_original_videos_opt_in = t.show_original_videos_opt_in),
              (e.carousel_to_video_opt_in_status =
                t.carousel_to_video_opt_in_status),
              (e.product_extensions_opt_in = t.product_extensions_opt_in),
              (e.static_ad_product_extensions_opt_in =
                t.static_ad_product_extensions_opt_in),
              (e.image_expansion_opt_in_status =
                t.image_expansion_opt_in_status),
              (e.metadata_brand_kit_opt_in_status =
                t.metadata_brand_kit_opt_in_status),
              (e.metadata_brand_kit_last_opt_out_timestamp =
                t.metadata_brand_kit_last_opt_out_timestamp),
              (e.reactive_control_settings = t.reactive_control_settings),
              (e.image_background_generation_opt_in_status =
                t.image_background_generation_opt_in_status),
              (e.video_to_image_opt_in_status = t.video_to_image_opt_in_status),
              (e.image_brightness_and_contrast_opt_in_status =
                t.image_brightness_and_contrast_opt_in_status),
              (e.add_overlays_opt_in_status = t.add_overlays_opt_in_status),
              (e.da_add_overlays_opt_in_status =
                t.da_add_overlays_opt_in_status),
              (e.da_adapt_images_opt_in_status =
                t.da_adapt_images_opt_in_status),
              (e.text_translation_opt_in_status =
                t.text_translation_opt_in_status),
              (e.image_text_translation_opt_in_status =
                t.image_text_translation_opt_in_status),
              (e.voiceover_trans_opt_in_status =
                t.voiceover_trans_opt_in_status),
              (e.replace_media_text_opt_in_status =
                t.replace_media_text_opt_in_status),
              (e.da_hide_price_opt_in_status = t.da_hide_price_opt_in_status),
              (e.show_summary_opt_in_status = t.show_summary_opt_in_status),
              (e.app_details_data_opt_in_status =
                t.app_details_data_opt_in_status),
              (e.dco_to_mmu_opt_out_status = t.dco_to_mmu_opt_out_status),
              (e.ff_to_mmu_opt_out_status = t.ff_to_mmu_opt_out_status),
              (e.multi_media_opt_out_status = t.multi_media_opt_out_status),
              (e.website_media_opt_in_status = t.website_media_opt_in_status),
              (e.create_cta_sticker_opt_in_status =
                t.create_cta_sticker_opt_in_status),
              (e.website_reviews_data_opt_in_status =
                t.website_reviews_data_opt_in_status),
              (e.website_selling_points_data_opt_in_status =
                t.website_selling_points_data_opt_in_status),
              (e.placement_group_square_opt_in_status =
                t.placement_group_square_opt_in_status),
              (e.placement_group_vertical_opt_in_status =
                t.placement_group_vertical_opt_in_status),
              (e.enhance_cta_text_extraction_opt_in_status =
                t.enhance_cta_text_extraction_opt_in_status),
              (e.text_optimizations_text_extraction_opt_in_status =
                t.text_optimizations_text_extraction_opt_in_status),
              (e.image_templates_text_extraction_opt_in_status =
                t.image_templates_text_extraction_opt_in_status),
              (e.connected_sources_catalog_opt_in_status =
                t.connected_sources_catalog_opt_in_status),
              (e.ads_cs_sitelinks_opt_in_status =
                t.ads_cs_sitelinks_opt_in_status),
              (e.ads_cs_dynamic_se_opt_in_status =
                t.ads_cs_dynamic_se_opt_in_status),
              (e.text_variations_sticky_opt_in_status =
                t.text_variations_sticky_opt_in_status),
              (e.onsite_destination_optimization_opt_in =
                t.onsite_destination_optimization_opt_in),
              (e.blended_ads_creation_defaulting_opt_in_status =
                t.blended_ads_creation_defaulting_opt_in_status),
              (e.blended_ads_creation_defaulting_opt_out_campaign_group_ids =
                t.blended_ads_creation_defaulting_opt_out_campaign_group_ids),
              (e.is_ads_ai_consented = !!t.is_ads_ai_consented),
              (e.is_cbo_default_on = !!t.is_cbo_default_on),
              (e.is_se_removal_guidance_dismissed =
                t.is_se_removal_guidance_dismissed),
              (e.a_plus_c_survey_seen = t.a_plus_c_survey_seen),
              (e.aplusc_opt_out_friction = t.aplusc_opt_out_friction),
              (e.feedback_surveys = t.feedback_surveys),
              (e.pcau_cat_optout_survey_impr = t.pcau_cat_optout_survey_impr),
              (e.pcau_cat_optout_survey_resp_ts =
                t.pcau_cat_optout_survey_resp_ts),
              (e.pe_ai_relevancy_opt_out_ts = t.pe_ai_relevancy_opt_out_ts),
              (e.pe_show_products_survey_impr = t.pe_show_products_survey_impr),
              (e.pe_show_products_survey_resp_ts =
                t.pe_show_products_survey_resp_ts),
              (e.catalog_templates_survey_impr =
                t.catalog_templates_survey_impr),
              (e.catalog_templates_survey_resp_ts =
                t.catalog_templates_survey_resp_ts),
              (e.catalog_templates_survey_last_impr_ts =
                t.catalog_templates_survey_last_impr_ts),
              (e.aplusc_enhance_cta_opt_in_status =
                t.aplusc_enhance_cta_opt_in_status),
              (e.aplusc_videofilter_opt_in_status =
                t.aplusc_videofilter_opt_in_status),
              (e.aplusc_videouncrop_opt_in_status =
                t.aplusc_videouncrop_opt_in_status),
              (e.aplusc_local_store_extension_opt_in_status =
                t.aplusc_local_store_extension_opt_in_status),
              (e.gen_ai_alpha_test_status = t.gen_ai_alpha_test_status),
              (e.url_prefill_removal_timestamp =
                t.url_prefill_removal_timestamp),
              (e.ads_cs_catalog_opt_out_timestamp = this.$8(
                t.ads_cs_catalog_opt_out_timestamp,
              )),
              (e.ads_cs_sitelinks_opt_out_timestamp = this.$9(
                t.ads_cs_sitelinks_opt_out_timestamp,
              )),
              (e.ads_destination_optimization_opt_out_timestamp = this.$8(
                t.ads_destination_optimization_opt_out_timestamp,
              )),
              (e.adaptive_geo_excl_banner_seen_ts = this.$8(
                t.adaptive_geo_excl_banner_seen_ts,
              )),
              (e.ads_cs_dynamic_se_opt_out_timestamp = this.$10(
                t.ads_cs_dynamic_se_opt_out_timestamp,
              )),
              (e.total_coupon_upsell_dismissals =
                t.total_coupon_upsell_dismissals),
              (e.total_coupon_syd_dismissals = t.total_coupon_syd_dismissals),
              (e.creative_feature_default_config =
                t.creative_feature_default_config),
              (e.selected_metrics_cic = t.selected_metrics_cic),
              (e.selected_metric_cic = t.selected_metric_cic),
              (e.gen_ai_auto_select_opt_in_status =
                t.gen_ai_auto_select_opt_in_status));
            var o = r("AdsAPIUserSettingsRecord")(e);
            r("AdsUserSettingsUpdateDataAction").dispatch(
              { userSettingsID: n, settings: o },
              {
                line: "1939",
                module: "AdsUserSettingsDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
