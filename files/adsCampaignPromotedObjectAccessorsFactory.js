__d(
  "adsCampaignPromotedObjectAccessorsFactory",
  [
    "AdPostConversionFields",
    "AdsAdObjectsAccessorUtils",
    "adsCampaignProductSuggestionSettingsAccessorsFactory",
    "adsOmnichannelObjectSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_account_id: n.basicFieldAccessorFactory(e, t, "ad_account_id"),
          anchor_event_config: n.basicFieldAccessorFactory(
            e,
            t,
            "anchor_event_config",
          ),
          multi_event_conversion_info: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_event_conversion_info",
          ),
          application_id: n.basicFieldAccessorFactory(e, t, "application_id"),
          boosted_product_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "boosted_product_set_id",
          ),
          smart_pse_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "smart_pse_enabled",
          ),
          smart_pse_setting: n.basicFieldAccessorFactory(
            e,
            t,
            "smart_pse_setting",
          ),
          conversion_goal_id: n.basicFieldAccessorFactory(
            e,
            t,
            "conversion_goal_id",
          ),
          custom_attribution_source_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "custom_attribution_source_ids",
          ),
          custom_audience_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "custom_audience_ids",
          ),
          custom_conversion_id: n.basicFieldAccessorFactory(
            e,
            t,
            "custom_conversion_id",
          ),
          custom_event_str: n.basicFieldAccessorFactory(
            e,
            t,
            "custom_event_str",
          ),
          value_semantic_type: n.basicFieldAccessorFactory(
            e,
            t,
            "value_semantic_type",
          ),
          custom_event_type: n.basicFieldAccessorFactory(
            e,
            t,
            "custom_event_type",
          ),
          dataset_split_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "dataset_split_ids",
          ),
          dataset_split_specs: n.basicFieldAccessorFactory(
            e,
            t,
            "dataset_split_specs",
          ),
          lead_ads_custom_event_str: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_custom_event_str",
          ),
          lead_ads_custom_event_type: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_custom_event_type",
          ),
          ads_signal_source_type: n.basicFieldAccessorFactory(
            e,
            t,
            "ads_signal_source_type",
          ),
          lead_ads_form_event_source_type: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_form_event_source_type",
          ),
          lead_ads_offsite_conversion_type: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_offsite_conversion_type",
          ),
          lead_ads_follow_up_event: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_follow_up_event",
          ),
          lead_ads_quality_volume_setting: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_quality_volume_setting",
          ),
          lead_ads_selected_pixel_id: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_ads_selected_pixel_id",
          ),
          live_video_destination: n.basicFieldAccessorFactory(
            e,
            t,
            "live_video_destination",
          ),
          digital_store_object_id: n.basicFieldAccessorFactory(
            e,
            t,
            "digital_store_object_id",
          ),
          digital_store_object_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "digital_store_object_ids",
          ),
          event_id: n.basicFieldAccessorFactory(e, t, "event_id"),
          offsite_conversion_event_id: n.basicFieldAccessorFactory(
            e,
            t,
            "offsite_conversion_event_id",
          ),
          full_funnel_objective: n.basicFieldAccessorFactory(
            e,
            t,
            "full_funnel_objective",
          ),
          fundraiser_campaign_id: n.basicFieldAccessorFactory(
            e,
            t,
            "fundraiser_campaign_id",
          ),
          instagram_actor_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_actor_id",
          ),
          instagram_profile_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_profile_id",
          ),
          product_sales_channel: n.basicFieldAccessorFactory(
            e,
            t,
            "product_sales_channel",
          ),
          mcme_conversion_id: n.basicFieldAccessorFactory(
            e,
            t,
            "mcme_conversion_id",
          ),
          multi_event_product: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_event_product",
          ),
          object_store_url: n.basicFieldAccessorFactory(
            e,
            t,
            "object_store_url",
          ),
          object_store_urls: n.basicFieldAccessorFactory(
            e,
            t,
            "object_store_urls",
          ),
          offer_id: n.basicFieldAccessorFactory(e, t, "offer_id"),
          offline_conversion_data_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "offline_conversion_data_set_id",
          ),
          omnichannel_object: r("adsOmnichannelObjectSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.omnichannel_object;
            },
            [].concat(t, ["omnichannel_object"]),
          ),
          page_id: n.basicFieldAccessorFactory(e, t, "page_id"),
          pixel_aggregation_rule: n.basicFieldAccessorFactory(
            e,
            t,
            "pixel_aggregation_rule",
          ),
          pixel_id: n.basicFieldAccessorFactory(e, t, "pixel_id"),
          pixel_rule: n.basicFieldAccessorFactory(e, t, "pixel_rule"),
          place_page_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "place_page_set_id",
          ),
          post_conversions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.post_conversions;
            },
            [].concat(t, ["post_conversions"]),
            Object.values(r("AdPostConversionFields")),
          ),
          product_catalog_id: n.basicFieldAccessorFactory(
            e,
            t,
            "product_catalog_id",
          ),
          product_item_id: n.basicFieldAccessorFactory(e, t, "product_item_id"),
          product_set_id: n.basicFieldAccessorFactory(e, t, "product_set_id"),
          product_set_optimization: n.basicFieldAccessorFactory(
            e,
            t,
            "product_set_optimization",
          ),
          product_suggestion_settings: r(
            "adsCampaignProductSuggestionSettingsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.product_suggestion_settings;
            },
            [].concat(t, ["product_suggestion_settings"]),
          ),
          research_poll_id: n.basicFieldAccessorFactory(
            e,
            t,
            "research_poll_id",
          ),
          retention_days: n.basicFieldAccessorFactory(e, t, "retention_days"),
          whats_app_business_phone_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whats_app_business_phone_number_id",
          ),
          whatsapp_business_account_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whatsapp_business_account_id",
          ),
          whatsapp_phone_number: n.basicFieldAccessorFactory(
            e,
            t,
            "whatsapp_phone_number",
          ),
          partner_account_linking_id: n.basicFieldAccessorFactory(
            e,
            t,
            "partner_account_linking_id",
          ),
          page_whatsapp_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "page_whatsapp_number_id",
          ),
          variation: n.basicFieldAccessorFactory(e, t, "variation"),
          passback_application_id: n.basicFieldAccessorFactory(
            e,
            t,
            "passback_application_id",
          ),
          passback_pixel_id: n.basicFieldAccessorFactory(
            e,
            t,
            "passback_pixel_id",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
