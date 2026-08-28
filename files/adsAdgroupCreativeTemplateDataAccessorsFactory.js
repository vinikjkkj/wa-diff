__d(
  "adsAdgroupCreativeTemplateDataAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupImageOverlaySpecAccessorsFactory",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
    "adsAdgroupLinkDataCustomOverlaySpecAccessorsFactory",
    "adsAdgroupPostClickConfigurationAccessorsFactory",
    "adsAdgroupStaticFallbackSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_context: n.basicFieldAccessorFactory(e, t, "ad_context"),
          additional_image_index: n.basicFieldAccessorFactory(
            e,
            t,
            "additional_image_index",
          ),
          attachment_style: n.basicFieldAccessorFactory(
            e,
            t,
            "attachment_style",
          ),
          automated_product_tags: n.basicFieldAccessorFactory(
            e,
            t,
            "automated_product_tags",
          ),
          is_local_expansion: n.basicFieldAccessorFactory(
            e,
            t,
            "is_local_expansion",
          ),
          boosted_product_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "boosted_product_set_id",
          ),
          branded_content_shared_to_sponsor_status: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_shared_to_sponsor_status",
          ),
          branded_content_sponsor_page_id: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_sponsor_page_id",
          ),
          branded_content_sponsor_relationship: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_sponsor_relationship",
          ),
          call_to_action: r("adsAdgroupLinkDataCallToActionAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_to_action;
            },
            [].concat(t, ["call_to_action"]),
          ),
          caption: n.basicFieldAccessorFactory(e, t, "caption"),
          child_attachments: n.basicListFieldAccessorFactory(
            e,
            t,
            "child_attachments",
          ),
          collection_thumbnails: n.basicListFieldAccessorFactory(
            e,
            t,
            "collection_thumbnails",
          ),
          custom_overlay_spec: r(
            "adsAdgroupLinkDataCustomOverlaySpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.custom_overlay_spec;
            },
            [].concat(t, ["custom_overlay_spec"]),
          ),
          customization_rules_spec: n.basicListFieldAccessorFactory(
            e,
            t,
            "customization_rules_spec",
          ),
          description: n.basicFieldAccessorFactory(e, t, "description"),
          disclaimer_text: n.basicFieldAccessorFactory(e, t, "disclaimer_text"),
          event_id: n.basicFieldAccessorFactory(e, t, "event_id"),
          force_single_link: n.basicFieldAccessorFactory(
            e,
            t,
            "force_single_link",
          ),
          format_option: n.basicFieldAccessorFactory(e, t, "format_option"),
          image_crops: n.basicFieldAccessorFactory(e, t, "image_crops"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          image_layer_specs: n.basicListFieldAccessorFactory(
            e,
            t,
            "image_layer_specs",
          ),
          image_overlay_spec: r("adsAdgroupImageOverlaySpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.image_overlay_spec;
            },
            [].concat(t, ["image_overlay_spec"]),
          ),
          link: n.basicFieldAccessorFactory(e, t, "link"),
          message: n.basicFieldAccessorFactory(e, t, "message"),
          multi_share_end_card: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_share_end_card",
          ),
          multi_share_optimized: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_share_optimized",
          ),
          name: n.basicFieldAccessorFactory(e, t, "name"),
          offer_id: n.basicFieldAccessorFactory(e, t, "offer_id"),
          page_welcome_message: n.basicFieldAccessorFactory(
            e,
            t,
            "page_welcome_message",
          ),
          picture: n.basicFieldAccessorFactory(e, t, "picture"),
          post_click_configuration: r(
            "adsAdgroupPostClickConfigurationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.post_click_configuration;
            },
            [].concat(t, ["post_click_configuration"]),
          ),
          phone_data_id: n.basicFieldAccessorFactory(e, t, "phone_data_id"),
          product_discount_id: n.basicFieldAccessorFactory(
            e,
            t,
            "product_discount_id",
          ),
          retailer_item_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "retailer_item_ids",
          ),
          show_multiple_images: n.basicFieldAccessorFactory(
            e,
            t,
            "show_multiple_images",
          ),
          smart_pse_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "smart_pse_enabled",
          ),
          static_fallback_spec: r(
            "adsAdgroupStaticFallbackSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.static_fallback_spec;
            },
            [].concat(t, ["static_fallback_spec"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
