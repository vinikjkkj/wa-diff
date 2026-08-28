__d(
  "CTMSMCCatalogAdAdoptionLogger",
  [
    "$InternalEnum",
    "AdsExistingPostCTAUtils",
    "AdsInterfacesLogger",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      AdCreativeComponentUseExistingPostImpressionVisible:
        "ad_creative_component_use_existing_post_impression_visible",
      AdCreativeComponentUseExistingPostPrefillPost:
        "ad_creative_component_use_existing_post_prefill_post",
      AdCreativeComponentUseExistingPostDefaultPost:
        "ad_creative_component_use_existing_post_default_post",
      AdCreativeComponentUseExistingPostSelectPost:
        "ad_creative_component_use_existing_post_select_post",
      AdCreativeComponentUseExistingPostSetPostID:
        "ad_creative_component_use_existing_post_set_post_id",
      AdCreativeComponentUseExistingPostSelectSuggestedePost:
        "ad_creative_component_use_existing_post_select_suggested_post",
      AdCreativeComponentDeriveProductSuccessful:
        "ad_creative_component_derive_product_successful",
      AdCreativeComponentDeriveProductFailed:
        "ad_creative_component_derive_product_failed",
      AdCreativeComponentFetchCacheProductSuccessful:
        "ad_creative_component_fetch_cache_product_successful",
      AdCreativeComponentAddProductSectionImpressionVisible:
        "ad_creative_component_add_product_section_impression_visible",
      AdCreativeComponentAddProductButtonClicked:
        "ad_creative_component_add_product_button_clicked",
      AdCreativeComponentAddProductButtonImpression:
        "ad_creative_component_add_product_button_impression",
      AdCreativeComponentAddProductModelClosed:
        "ad_creative_component_add_product_model_closed",
      AdCreativeComponentAddProductModelSaved:
        "ad_creative_component_add_product_model_saved",
      AdCreativeComponentProductDeleteButtonClicked:
        "ad_creative_component_product_delete_button_clicked",
      AdCreativeComponentProductEditButtonClicked:
        "ad_creative_component_product_edit_button_clicked",
      ProductSelectorComponentAddProduct:
        "product_selector_component_add_product",
      ProductSelectorComponentProductSectionImpression:
        "product_selector_component_product_section_impression",
      ProductSelectorComponentProductSectionImpressionDebugging:
        "product_selector_component_product_section_impression_debugging",
      ProductSelectorComponentRemoveProduct:
        "product_selector_component_remove_product",
      ProductSelectorComponentUpdateProduct:
        "product_selector_component_update_product",
      AdCreativeComponentProductRecommendationTriggerCalled:
        "ad_creative_component_product_recommendation_trigger_called",
      AdCreativeComponentProductRecommendationTriggerEligible:
        "ad_creative_component_product_recommendation_trigger_eligible",
      AdCreativeComponentProductRecommendationTriggerNotEligible:
        "ad_creative_component_product_recommendation_trigger_not_eligible",
      AdCreativeComponentProductRecommendationTriggerSupportedPage:
        "ad_creative_component_product_recommendation_trigger_supported_page",
      AdCreativeComponentProductRecommendationTriggerNotSupportedPage:
        "ad_creative_component_product_recommendation_trigger_not_supported_page",
      CatalogSelectorCTMFilteringResults:
        "catalog_selector_ctm_filtering_results",
      CTMPEDefaultOnCatalogManualDeselect:
        "ctm_pe_default_on_catalog_manual_deselect",
      CTMPEDefaultOnPEManualDeselect: "ctm_pe_default_on_pe_manual_deselect",
      CTMPEDefaultOnCatalogIdMismatch: "ctm_pe_default_on_catalog_id_mismatch",
      CTMPEDefaultOnCatalogLoaded: "ctm_pe_default_on_catalog_loaded",
      CTMPEDefaultOnCatchAllLoggingCase:
        "ctm_pe_default_on_catch_all_logging_case",
      IsCTMAdFilteringImprovementResults:
        "is_ctm_ad_filtering_improvement_results",
      CatalogFilteringImprovementResults:
        "catalog_filtering_improvement_results",
      CTMPEGeneratedCatalogAdCreativeComponentGuidanceCardImpression:
        "ctm_pe_generated_catalog_ad_creative_component_guidance_card_impression",
      CTMPEGeneratedCatalogAdCreativeComponentGuidanceCardCloseButtonClick:
        "ctm_pe_generated_catalog_ad_creative_component_guidance_card_close_button_click",
      CTMPEGeneratedCatalogAdCreativeComponentAddProductButtonClicked:
        "ctm_pe_generated_catalog_ad_creative_component_add_product_button_clicked",
      CTMPEGeneratedCatalogAdCreativeComponentGuidanceCardPreviewButtonClicked:
        "ctm_pe_generated_catalog_ad_creative_component_guidance_card_preview_button_clicked",
      CTMPEGeneratedCatalogProductSelectorComponentProductSectionImpression:
        "ctm_pe_generated_catalog_product_selector_component_product_section_impression",
      CTMPEGeneratedCatalogProductSelectorComponentProductSectionImpressionDebugging:
        "ctm_pe_generated_catalog_product_selector_component_product_section_impression_debugging",
      CTMPEGeneratedCatalogProductSelectorComponentTabChange:
        "ctm_pe_generated_catalog_product_selector_component_tab_change",
      CTMPEGeneratedCatalogProductSelectorComponentShowProductsToggle:
        "ctm_pe_generated_catalog_product_selector_component_show_products_toggle",
      CTMPEGeneratedCatalogProductSelectionComponentImpression:
        "ctm_pe_generated_catalog_product_selection_component_impression",
      CTMPEGeneratedCatalogProductSelectorComponentSelectAllButtonClicked:
        "ctm_pe_generated_catalog_product_selector_component_select_all_button_clicked",
      CTMPEGeneratedCatalogProductSelectorComponentToggleProduct:
        "ctm_pe_generated_catalog_product_selector_component_toggle_product",
      CTMPEGeneratedCatalogProductSelectorComponentOptInConfirm:
        "ctm_pe_generated_catalog_product_selector_component_opt_in_confirm",
      CTMPEGeneratedCatalogProductSelectorComponentRowEditSaved:
        "ctm_pe_generated_catalog_product_selector_component_row_edit_saved",
      CTMPEGeneratedCatalogProductSelectorComponentChangeImage:
        "ctm_pe_generated_catalog_product_selector_component_change_image",
      CTMPEGeneratedCatalogProductSelectorComponentRemoveProduct:
        "ctm_pe_generated_catalog_product_selector_component_remove_product",
      CTMPEGeneratedCatalogProductSelectorComponentValidationFail:
        "ctm_pe_generated_catalog_product_selector_component_validation_fail",
      CTMPEGeneratedCatalogAdCreativeComponentGuidanceCardIneligible:
        "ctm_pe_generated_catalog_ad_creative_component_guidance_card_ineligible",
      CTMPEGeneratedCatalogAdCreativeComponentGuidanceCardEligible:
        "ctm_pe_generated_catalog_ad_creative_component_guidance_card_eligible",
      CTMPEDefaultOnCreateAdProductSelected:
        "ctm_pe_default_on_create_ad_product_selected",
      CTMPEDefaultOnCreateAdCatalogManualDeselect:
        "ctm_pe_default_on_create_ad_catalog_manual_deselect",
      CTMPEDefaultOnCreateAdSelectorComponentShown:
        "ctm_pe_default_on_create_ad_selector_component_shown",
      CTMPEDefaultOnCreateAdCatalogPluginOpened:
        "ctm_pe_default_on_create_ad_catalog_plugin_opened",
      CTMPEGeneratedCatalogDeriveProductSuccessful:
        "ctm_pe_generated_catalog_derive_product_successful",
      CTMPEGeneratedCatalogProductRecommendationTriggerEligible:
        "ctm_pe_generated_catalog_product_recommendation_trigger_eligible",
      CTMPEDefaultOnEligibleWithProductSet:
        "ctm_pe_default_on_eligible_with_product_set",
      CTMPEDefaultOnEligibleWithProductSetError:
        "ctm_pe_default_on_eligible_with_product_set_error",
      WelcomeMessageProductTestProductSelected:
        "welcome_message_product_test_product_selected",
      WelcomeMessageProductTestSelectorLoaded:
        "welcome_message_product_test_selector_loaded",
      ImprovedIsSMCELigibleCheck: "improved_is_smc_eligible_check",
    });
    function s(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p = r("isTruthy")(s)
          ? o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(s)
          : null;
      r("AdsInterfacesLogger").log({
        eventName: "ctm_smc_catalog_ad_adoption",
        data:
          ((m = {}),
          (m.message = e),
          (m.metadata = d),
          (m.page_id = t),
          (m.adgroup_id = a),
          (m.accountid = n),
          (m.item_ids = i),
          (m.log_item_id = l),
          (m.page_post_id = p != null ? p : s),
          (m.video_id = c === !0 ? u : null),
          (m.image_id = c === !1 ? u : null),
          m),
      });
    }
    ((l.CtmSMCCatalogAdAdoptionMessage = e),
      (l.logSMCProductSelectionAMEvents = s));
  },
  98,
);
