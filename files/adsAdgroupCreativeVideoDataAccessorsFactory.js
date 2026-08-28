__d(
  "adsAdgroupCreativeVideoDataAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
    "adsAdgroupPostClickConfigurationAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          additional_image_index: n.basicFieldAccessorFactory(
            e,
            t,
            "additional_image_index",
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
          caption_ids: n.basicListFieldAccessorFactory(e, t, "caption_ids"),
          collection_thumbnails: n.basicListFieldAccessorFactory(
            e,
            t,
            "collection_thumbnails",
          ),
          custom_overlay_spec: n.basicListFieldAccessorFactory(
            e,
            t,
            "custom_overlay_spec",
          ),
          customization_rules_spec: n.basicListFieldAccessorFactory(
            e,
            t,
            "customization_rules_spec",
          ),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          image_url: n.basicFieldAccessorFactory(e, t, "image_url"),
          link_description: n.basicFieldAccessorFactory(
            e,
            t,
            "link_description",
          ),
          message: n.basicFieldAccessorFactory(e, t, "message"),
          offer_id: n.basicFieldAccessorFactory(e, t, "offer_id"),
          page_welcome_message: n.basicFieldAccessorFactory(
            e,
            t,
            "page_welcome_message",
          ),
          phone_data_id: n.basicFieldAccessorFactory(e, t, "phone_data_id"),
          post_click_configuration: r(
            "adsAdgroupPostClickConfigurationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.post_click_configuration;
            },
            [].concat(t, ["post_click_configuration"]),
          ),
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
          title: n.basicFieldAccessorFactory(e, t, "title"),
          video_id: n.basicFieldAccessorFactory(e, t, "video_id"),
          video_thumbnail_source: n.basicFieldAccessorFactory(
            e,
            t,
            "video_thumbnail_source",
          ),
          video_thumbnail_id: n.basicFieldAccessorFactory(
            e,
            t,
            "video_thumbnail_id",
          ),
          event_id: n.basicFieldAccessorFactory(e, t, "event_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);
