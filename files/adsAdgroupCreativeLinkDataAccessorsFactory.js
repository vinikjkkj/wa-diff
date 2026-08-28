__d(
  "adsAdgroupCreativeLinkDataAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
    "adsAdgroupLinkDataCustomOverlaySpecAccessorsFactory",
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
          attachment_style: n.basicFieldAccessorFactory(
            e,
            t,
            "attachment_style",
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
          event_id: n.basicFieldAccessorFactory(e, t, "event_id"),
          image_crops: n.basicFieldAccessorFactory(e, t, "image_crops"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
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
        },
      );
    }
    l.default = e;
  },
  98,
);
