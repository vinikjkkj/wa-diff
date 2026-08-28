__d(
  "adsAssetFeedAccessorsFactory",
  [
    "AdsAPIAdAssetCallToActionFields",
    "AdsAPIAdAssetCustomizationRuleFields",
    "AdsAPIAdAssetFeedAudiosFields",
    "AdsAPIAdAssetFeedBadgeSetFields",
    "AdsAPIAdAssetFeedBodiesFields",
    "AdsAPIAdAssetFeedCaptionsFields",
    "AdsAPIAdAssetFeedCarouselFields",
    "AdsAPIAdAssetFeedCtwaConsentDataFields",
    "AdsAPIAdAssetFeedDescriptionsFields",
    "AdsAPIAdAssetFeedLeadNurtureChannelsFields",
    "AdsAPIAdAssetFeedLinkURLsFields",
    "AdsAPIAdAssetFeedMessageExtensionsFields",
    "AdsAPIAdAssetFeedOnsiteDestinationFields",
    "AdsAPIAdAssetFeedPhoneDataIdFields",
    "AdsAPIAdAssetFeedPostFields",
    "AdsAPIAdAssetFeedTitlesFields",
    "AdsAPIAdAssetFeedTranslationsFields",
    "AdsAPIAdAssetFeedUpcomingEventsFields",
    "AdsAPIAdAssetGroupFields",
    "AdsAPIAdAssetImageFields",
    "AdsAPIAdAssetTargetRuleFields",
    "AdsAPIAdAssetVideoFields",
    "AdsAdObjectsAccessorUtils",
    "adsAssetFeedSpecAdditionalDataAccessorsFactory",
    "adsAssetFeedSpecCallAdsConfigurationAccessorsFactory",
    "adsAssetFeedSpecLeadGenConfigurationAccessorsFactory",
    "adsAssetFeedSpecLeadGenMultiDestinationAccessorsFactory",
    "adsAssetFeedSpecPromotionalMetadataAccessorsFactory",
    "adsAssetFeedSpecUpcomingEventMetadataAccessorsFactory",
    "adsAssetFeedSpecWebDestinationSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_formats: n.basicFieldAccessorFactory(e, t, "ad_formats"),
          asset_customization_rules: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.asset_customization_rules;
            },
            [].concat(t, ["asset_customization_rules"]),
            Object.values(r("AdsAPIAdAssetCustomizationRuleFields")),
          ),
          autotranslate: n.basicFieldAccessorFactory(e, t, "autotranslate"),
          bodies: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.bodies;
            },
            [].concat(t, ["bodies"]),
            Object.values(r("AdsAPIAdAssetFeedBodiesFields")),
          ),
          call_ads_configuration: r(
            "adsAssetFeedSpecCallAdsConfigurationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_ads_configuration;
            },
            [].concat(t, ["call_ads_configuration"]),
          ),
          call_to_actions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_to_actions;
            },
            [].concat(t, ["call_to_actions"]),
            Object.values(r("AdsAPIAdAssetCallToActionFields")),
          ),
          call_to_action_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "call_to_action_types",
          ),
          captions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.captions;
            },
            [].concat(t, ["captions"]),
            Object.values(r("AdsAPIAdAssetFeedCaptionsFields")),
          ),
          carousels: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.carousels;
            },
            [].concat(t, ["carousels"]),
            Object.values(r("AdsAPIAdAssetFeedCarouselFields")),
          ),
          descriptions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.descriptions;
            },
            [].concat(t, ["descriptions"]),
            Object.values(r("AdsAPIAdAssetFeedDescriptionsFields")),
          ),
          groups: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.groups;
            },
            [].concat(t, ["groups"]),
            Object.values(r("AdsAPIAdAssetGroupFields")),
          ),
          images: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.images;
            },
            [].concat(t, ["images"]),
            Object.values(r("AdsAPIAdAssetImageFields")),
          ),
          link_urls: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.link_urls;
            },
            [].concat(t, ["link_urls"]),
            Object.values(r("AdsAPIAdAssetFeedLinkURLsFields")),
          ),
          onsite_destinations: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.onsite_destinations;
            },
            [].concat(t, ["onsite_destinations"]),
            Object.values(r("AdsAPIAdAssetFeedOnsiteDestinationFields")),
          ),
          optimization_type: n.basicFieldAccessorFactory(
            e,
            t,
            "optimization_type",
          ),
          posts: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.posts;
            },
            [].concat(t, ["posts"]),
            Object.values(r("AdsAPIAdAssetFeedPostFields")),
          ),
          product_discount_id: n.basicFieldAccessorFactory(
            e,
            t,
            "product_discount_id",
          ),
          promotional_metadata: r(
            "adsAssetFeedSpecPromotionalMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.promotional_metadata;
            },
            [].concat(t, ["promotional_metadata"]),
          ),
          target_rules: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.target_rules;
            },
            [].concat(t, ["target_rules"]),
            Object.values(r("AdsAPIAdAssetTargetRuleFields")),
          ),
          titles: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.titles;
            },
            [].concat(t, ["titles"]),
            Object.values(r("AdsAPIAdAssetFeedTitlesFields")),
          ),
          videos: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.videos;
            },
            [].concat(t, ["videos"]),
            Object.values(r("AdsAPIAdAssetVideoFields")),
          ),
          phone_data_ids: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.phone_data_ids;
            },
            [].concat(t, ["phone_data_ids"]),
            Object.values(r("AdsAPIAdAssetFeedPhoneDataIdFields")),
          ),
          additional_data: r("adsAssetFeedSpecAdditionalDataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.additional_data;
            },
            [].concat(t, ["additional_data"]),
          ),
          shops_bundle: n.basicFieldAccessorFactory(e, t, "shops_bundle"),
          reasons_to_shop: n.basicFieldAccessorFactory(e, t, "reasons_to_shop"),
          badge_sets: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.badge_sets;
            },
            [].concat(t, ["badge_sets"]),
            Object.values(r("AdsAPIAdAssetFeedBadgeSetFields")),
          ),
          additional_image_index: n.basicFieldAccessorFactory(
            e,
            t,
            "additional_image_index",
          ),
          collection_thumbnails: n.basicFieldAccessorFactory(
            e,
            t,
            "collection_thumbnails",
          ),
          post_click_configuration: n.basicFieldAccessorFactory(
            e,
            t,
            "post_click_configuration",
          ),
          retailer_item_ids: n.basicFieldAccessorFactory(
            e,
            t,
            "retailer_item_ids",
          ),
          audios: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.audios;
            },
            [].concat(t, ["audios"]),
            Object.values(r("AdsAPIAdAssetFeedAudiosFields")),
          ),
          app_product_page_id: n.basicFieldAccessorFactory(
            e,
            t,
            "app_product_page_id",
          ),
          message_extensions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.message_extensions;
            },
            [].concat(t, ["message_extensions"]),
            Object.values(r("AdsAPIAdAssetFeedMessageExtensionsFields")),
          ),
          upcoming_events: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.upcoming_events;
            },
            [].concat(t, ["upcoming_events"]),
            Object.values(r("AdsAPIAdAssetFeedUpcomingEventsFields")),
          ),
          upcoming_event_metadata: r(
            "adsAssetFeedSpecUpcomingEventMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.upcoming_event_metadata;
            },
            [].concat(t, ["upcoming_event_metadata"]),
          ),
          lead_gen_configuration: r(
            "adsAssetFeedSpecLeadGenConfigurationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.lead_gen_configuration;
            },
            [].concat(t, ["lead_gen_configuration"]),
          ),
          lead_gen_multi_destination: r(
            "adsAssetFeedSpecLeadGenMultiDestinationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.lead_gen_multi_destination;
            },
            [].concat(t, ["lead_gen_multi_destination"]),
          ),
          lead_nurture_channels: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.lead_nurture_channels;
            },
            [].concat(t, ["lead_nurture_channels"]),
            Object.values(r("AdsAPIAdAssetFeedLeadNurtureChannelsFields")),
          ),
          web_destination_spec: r(
            "adsAssetFeedSpecWebDestinationSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.web_destination_spec;
            },
            [].concat(t, ["web_destination_spec"]),
          ),
          ctwa_consent_data: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n,
                r = (n = e(t)) == null ? void 0 : n.ctwa_consent_data;
              return r;
            },
            [].concat(t, ["ctwa_consent_data"]),
            Object.values(r("AdsAPIAdAssetFeedCtwaConsentDataFields")),
          ),
          translations: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.translations;
            },
            [].concat(t, ["translations"]),
            Object.values(r("AdsAPIAdAssetFeedTranslationsFields")),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
