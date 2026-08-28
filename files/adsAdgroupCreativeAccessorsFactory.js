__d(
  "adsAdgroupCreativeAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiAdCreativeFormatTransformationSpecFields",
    "ApiAdCreativeProductDataFields",
    "adsAdgroupBrandedContentAccessorsFactory",
    "adsAdgroupContextualMultiAdsAccessorsFactory",
    "adsAdgroupCreativeAdDisclaimerSpecAccessorsFactory",
    "adsAdgroupCreativeInteractiveComponentsSpecAccessorsFactory",
    "adsAdgroupCreativePlatformCustomizationsAccessorsFactory",
    "adsAdgroupCreativePortraitCustomizationsAccessorsFactory",
    "adsAdgroupCreativeRecommenderSettingsAccessorsFactory",
    "adsAdgroupCreativeShopSpecAccessorsFactory",
    "adsAdgroupCreativeWAMOWhatsAppIdentitySpecAccessorsFactory",
    "adsAdgroupCreativeWhatsAppChannelSpecAccessorsFactory",
    "adsAdgroupFacebookBrandedContentAccessorsFactory",
    "adsAdgroupInstagramBrandedContentAccessorsFactory",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecAccessorsFactory",
    "adsAdgroupObjectStorySpecAccessorsFactory",
    "adsAdgroupTemplateURLSpecAccessorsFactory",
    "adsAssetFeedAccessorsFactory",
    "adsCreativeAppExperienceSpecAccessorsFactory",
    "adsCreativeBizAISpecAccessorsFactory",
    "adsCreativeDestinationSpecAccessorsFactory",
    "adsCreativeFeaturedOfferingSpecAccessorsFactory",
    "adsCreativeGenerativeAssetSpecAccessorsFactory",
    "adsCreativeLiveVideoReminderSpecAccessorsFactory",
    "adsCreativeMediaSourcingSpecAccessorsFactory",
    "adsCreativeProductSuggestionSettingsAccessorsFactory",
    "adsCreativeSourcingSpecAccessorsFactory",
    "adsDegreesOfFreedomAccessorsFactory",
    "adsOmnichannelLinkSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          actor_type: n.basicFieldAccessorFactory(e, t, "actor_type"),
          ad_disclaimer_spec: r(
            "adsAdgroupCreativeAdDisclaimerSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ad_disclaimer_spec;
            },
            [].concat(t, ["ad_disclaimer_spec"]),
          ),
          app_experience_spec: r(
            "adsCreativeAppExperienceSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.app_experience_spec;
            },
            [].concat(t, ["app_experience_spec"]),
          ),
          applink_treatment: n.basicFieldAccessorFactory(
            e,
            t,
            "applink_treatment",
          ),
          asset_feed_id: n.basicFieldAccessorFactory(e, t, "asset_feed_id"),
          asset_feed_spec: r("adsAssetFeedAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.asset_feed_spec;
            },
            [].concat(t, ["asset_feed_spec"]),
          ),
          authorization_category: n.basicFieldAccessorFactory(
            e,
            t,
            "authorization_category",
          ),
          biz_ai: r("adsCreativeBizAISpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.biz_ai;
            },
            [].concat(t, ["biz_ai"]),
          ),
          body: n.basicFieldAccessorFactory(e, t, "body"),
          branded_content: r("adsAdgroupBrandedContentAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.branded_content;
            },
            [].concat(t, ["branded_content"]),
          ),
          branded_content_sponsor_page_id: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_sponsor_page_id",
          ),
          call_to_action: r("adsAdgroupLinkDataCallToActionAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_to_action;
            },
            [].concat(t, ["call_to_action"]),
          ),
          call_to_action_type: n.basicFieldAccessorFactory(
            e,
            t,
            "call_to_action_type",
          ),
          categorization_criteria: n.basicFieldAccessorFactory(
            e,
            t,
            "categorization_criteria",
          ),
          category_media_source: n.basicFieldAccessorFactory(
            e,
            t,
            "category_media_source",
          ),
          collaborative_ads_lsb_image_bank_id: n.basicFieldAccessorFactory(
            e,
            t,
            "collaborative_ads_lsb_image_bank_id",
          ),
          contextual_multi_ads: r(
            "adsAdgroupContextualMultiAdsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.contextual_multi_ads;
            },
            [].concat(t, ["contextual_multi_ads"]),
          ),
          creative_id: n.basicFieldAccessorFactory(e, t, "creative_id"),
          creative_optional: n.basicFieldAccessorFactory(
            e,
            t,
            "creative_optional",
          ),
          creative_sourcing_spec: r("adsCreativeSourcingSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.creative_sourcing_spec;
            },
            [].concat(t, ["creative_sourcing_spec"]),
          ),
          product_suggestion_settings: r(
            "adsCreativeProductSuggestionSettingsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.product_suggestion_settings;
            },
            [].concat(t, ["product_suggestion_settings"]),
          ),
          degrees_of_freedom_spec: r("adsDegreesOfFreedomAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.degrees_of_freedom_spec;
            },
            [].concat(t, ["degrees_of_freedom_spec"]),
          ),
          destination_spec: r("adsCreativeDestinationSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.destination_spec;
            },
            [].concat(t, ["destination_spec"]),
          ),
          format_transformation_spec: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.format_transformation_spec;
            },
            [].concat(t, ["format_transformation_spec"]),
            Object.values(r("ApiAdCreativeFormatTransformationSpecFields")),
          ),
          dynamic_ad_voice: n.basicFieldAccessorFactory(
            e,
            t,
            "dynamic_ad_voice",
          ),
          effective_authorization_category: n.basicFieldAccessorFactory(
            e,
            t,
            "effective_authorization_category",
          ),
          effective_instagram_media_id: n.basicFieldAccessorFactory(
            e,
            t,
            "effective_instagram_media_id",
          ),
          effective_instagram_story_id: n.basicFieldAccessorFactory(
            e,
            t,
            "effective_instagram_story_id",
          ),
          effective_object_story_id: n.basicFieldAccessorFactory(
            e,
            t,
            "effective_object_story_id",
          ),
          enable_direct_install: n.basicFieldAccessorFactory(
            e,
            t,
            "enable_direct_install",
          ),
          facebook_branded_content: r(
            "adsAdgroupFacebookBrandedContentAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.facebook_branded_content;
            },
            [].concat(t, ["facebook_branded_content"]),
          ),
          featured_offering_spec: r(
            "adsCreativeFeaturedOfferingSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.featured_offering_spec;
            },
            [].concat(t, ["featured_offering_spec"]),
          ),
          generative_asset_spec: r(
            "adsCreativeGenerativeAssetSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.generative_asset_spec;
            },
            [].concat(t, ["generative_asset_spec"]),
          ),
          id: n.basicFieldAccessorFactory(e, t, "id"),
          image_crops: n.basicFieldAccessorFactory(e, t, "image_crops"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          image_url: n.basicFieldAccessorFactory(e, t, "image_url"),
          instagram_actor_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_actor_id",
          ),
          instagram_user_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_user_id",
          ),
          instagram_branded_content: r(
            "adsAdgroupInstagramBrandedContentAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.instagram_branded_content;
            },
            [].concat(t, ["instagram_branded_content"]),
          ),
          branded_content_boosting_type: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_boosting_type",
          ),
          instagram_permalink_url: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_permalink_url",
          ),
          instagram_story_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_story_id",
          ),
          instant_checkout_setting: n.basicFieldAccessorFactory(
            e,
            t,
            "instant_checkout_setting",
          ),
          interactive_components_spec: r(
            "adsAdgroupCreativeInteractiveComponentsSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.interactive_components_spec;
            },
            [].concat(t, ["interactive_components_spec"]),
          ),
          link_og_id: n.basicFieldAccessorFactory(e, t, "link_og_id"),
          link_url: n.basicFieldAccessorFactory(e, t, "link_url"),
          live_video_reminder: r(
            "adsCreativeLiveVideoReminderSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.live_video_reminder;
            },
            [].concat(t, ["live_video_reminder"]),
          ),
          media_type: n.basicFieldAccessorFactory(e, t, "media_type"),
          media_sourcing_spec: r(
            "adsCreativeMediaSourcingSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.media_sourcing_spec;
            },
            [].concat(t, ["media_sourcing_spec"]),
          ),
          mockup_id: n.basicFieldAccessorFactory(e, t, "mockup_id"),
          object_id: n.basicFieldAccessorFactory(e, t, "object_id"),
          object_story_id: n.basicFieldAccessorFactory(e, t, "object_story_id"),
          object_story_spec: r("adsAdgroupObjectStorySpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.object_story_spec;
            },
            [].concat(t, ["object_story_spec"]),
          ),
          object_type: n.basicFieldAccessorFactory(e, t, "object_type"),
          object_url: n.basicFieldAccessorFactory(e, t, "object_url"),
          omnichannel_link_spec: r("adsOmnichannelLinkSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.omnichannel_link_spec;
            },
            [].concat(t, ["omnichannel_link_spec"]),
          ),
          page_welcome_message: n.basicFieldAccessorFactory(
            e,
            t,
            "page_welcome_message",
          ),
          page_whatsapp_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "page_whatsapp_number_id",
          ),
          place_page_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "place_page_set_id",
          ),
          platform_customizations: r(
            "adsAdgroupCreativePlatformCustomizationsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.platform_customizations;
            },
            [].concat(t, ["platform_customizations"]),
          ),
          playable_asset_id: n.basicFieldAccessorFactory(
            e,
            t,
            "playable_asset_id",
          ),
          portrait_customizations: r(
            "adsAdgroupCreativePortraitCustomizationsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.portrait_customizations;
            },
            [].concat(t, ["portrait_customizations"]),
          ),
          product_data: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.product_data;
            },
            [].concat(t, ["product_data"]),
            Object.values(r("ApiAdCreativeProductDataFields")),
          ),
          product_set_id: n.basicFieldAccessorFactory(e, t, "product_set_id"),
          recommender_settings: r(
            "adsAdgroupCreativeRecommenderSettingsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.recommender_settings;
            },
            [].concat(t, ["recommender_settings"]),
          ),
          shop_spec: r("adsAdgroupCreativeShopSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.shop_spec;
            },
            [].concat(t, ["shop_spec"]),
          ),
          source_facebook_post_id: n.basicFieldAccessorFactory(
            e,
            t,
            "source_facebook_post_id",
          ),
          source_instagram_media_id: n.basicFieldAccessorFactory(
            e,
            t,
            "source_instagram_media_id",
          ),
          template_url_spec: r("adsAdgroupTemplateURLSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.template_url_spec;
            },
            [].concat(t, ["template_url_spec"]),
          ),
          template_url: n.basicFieldAccessorFactory(e, t, "template_url"),
          text_type: n.basicFieldAccessorFactory(e, t, "text_type"),
          threads_user_id: n.basicFieldAccessorFactory(e, t, "threads_user_id"),
          thumbnail_height: n.basicFieldAccessorFactory(
            e,
            t,
            "thumbnail_height",
          ),
          thumbnail_url: n.basicFieldAccessorFactory(e, t, "thumbnail_url"),
          thumbnail_width: n.basicFieldAccessorFactory(e, t, "thumbnail_width"),
          title: n.basicFieldAccessorFactory(e, t, "title"),
          existing_post_title: n.basicFieldAccessorFactory(
            e,
            t,
            "existing_post_title",
          ),
          uca_draft_version: n.basicFieldAccessorFactory(
            e,
            t,
            "uca_draft_version",
          ),
          url_tags: n.basicFieldAccessorFactory(e, t, "url_tags"),
          use_page_actor_override: n.basicFieldAccessorFactory(
            e,
            t,
            "use_page_actor_override",
          ),
          video_id: n.basicFieldAccessorFactory(e, t, "video_id"),
          whats_app_business_asset_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whats_app_business_asset_id",
          ),
          whatsapp_business_phone_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whatsapp_business_phone_number_id",
          ),
          whatsapp_mm_business_phone_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whatsapp_mm_business_phone_number_id",
          ),
          whatsapp_business_profile_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whatsapp_business_profile_id",
          ),
          marketing_message_spec: n.basicFieldAccessorFactory(
            e,
            t,
            "marketing_message_spec",
          ),
          marketing_message_structured_spec: r(
            "adsAdgroupMarketingMessageStructuredSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.marketing_message_structured_spec;
            },
            [].concat(t, ["marketing_message_structured_spec"]),
          ),
          whatsapp_channel_spec: r(
            "adsAdgroupCreativeWhatsAppChannelSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.whatsapp_channel_spec;
            },
            [].concat(t, ["whatsapp_channel_spec"]),
          ),
          wamo_whatsapp_identity_spec: r(
            "adsAdgroupCreativeWAMOWhatsAppIdentitySpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.wamo_whatsapp_identity_spec;
            },
            [].concat(t, ["wamo_whatsapp_identity_spec"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
