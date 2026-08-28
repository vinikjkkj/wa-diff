__d(
  "adsAssetFeedSpecAdditionalDataAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAssetFeedSpecAdditionalDataRewardInfoAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          brand_page_id: n.basicFieldAccessorFactory(e, t, "brand_page_id"),
          is_smart_app_promotion: n.basicFieldAccessorFactory(
            e,
            t,
            "is_smart_app_promotion",
          ),
          page_welcome_message: n.basicFieldAccessorFactory(
            e,
            t,
            "page_welcome_message",
          ),
          multi_share_end_card: n.basicFieldAccessorFactory(
            e,
            t,
            "multi_share_end_card",
          ),
          product_discount_id: n.basicFieldAccessorFactory(
            e,
            t,
            "product_discount_id",
          ),
          page_whatsapp_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "page_whatsapp_number_id",
          ),
          reward_info: r(
            "adsAssetFeedSpecAdditionalDataRewardInfoAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.reward_info;
            },
            [].concat(t, ["reward_info"]),
          ),
          is_click_to_message: n.basicFieldAccessorFactory(
            e,
            t,
            "is_click_to_message",
          ),
          group_id: n.basicFieldAccessorFactory(e, t, "group_id"),
          partner_app_welcome_message_flow_id: n.basicFieldAccessorFactory(
            e,
            t,
            "partner_app_welcome_message_flow_id",
          ),
          is_pbia_messaging_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_pbia_messaging_enabled",
          ),
          app_destination_metadata: n.basicFieldAccessorFactory(
            e,
            t,
            "app_destination_metadata",
          ),
          is_crm_delivery_enabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_crm_delivery_enabled",
          ),
          lead_delivery_privacy_url: n.basicFieldAccessorFactory(
            e,
            t,
            "lead_delivery_privacy_url",
          ),
          page_private_reply: n.basicFieldAccessorFactory(
            e,
            t,
            "page_private_reply",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
