__d(
  "adsAdgroupMarketingMessageStructuredSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "MarketingMessageButtonFields",
    "adsAdgroupMarketingMessageStructuredSpecAssetCustomizationSpecAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecAutoReplyAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecAutomationConfigAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecCatalogAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecDynamicProductMessageSpecAccessorsFactory",
    "adsAdgroupMarketingMessageStructuredSpecOfferAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          language: n.basicFieldAccessorFactory(e, t, "language"),
          footer: n.basicFieldAccessorFactory(e, t, "footer"),
          greeting: n.basicFieldAccessorFactory(e, t, "greeting"),
          referenced_adgroup_id: n.basicFieldAccessorFactory(
            e,
            t,
            "referenced_adgroup_id",
          ),
          automation_config: r(
            "adsAdgroupMarketingMessageStructuredSpecAutomationConfigAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.automation_config;
            },
            [].concat(t, ["automation_config"]),
          ),
          buttons: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.buttons;
            },
            [].concat(t, ["buttons"]),
            Object.values(r("MarketingMessageButtonFields")),
          ),
          offer: r(
            "adsAdgroupMarketingMessageStructuredSpecOfferAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.offer;
            },
            [].concat(t, ["offer"]),
          ),
          catalog: r(
            "adsAdgroupMarketingMessageStructuredSpecCatalogAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.catalog;
            },
            [].concat(t, ["catalog"]),
          ),
          conversation_template_id: n.basicFieldAccessorFactory(
            e,
            t,
            "conversation_template_id",
          ),
          asset_customization: r(
            "adsAdgroupMarketingMessageStructuredSpecAssetCustomizationSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.asset_customization;
            },
            [].concat(t, ["asset_customization"]),
          ),
          autoreply: r(
            "adsAdgroupMarketingMessageStructuredSpecAutoReplyAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.autoreply;
            },
            [].concat(t, ["autoreply"]),
          ),
          dynamic_product_message_spec: r(
            "adsAdgroupMarketingMessageStructuredSpecDynamicProductMessageSpecAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.dynamic_product_message_spec;
            },
            [].concat(t, ["dynamic_product_message_spec"]),
          ),
          whats_app_business_phone_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whats_app_business_phone_number_id",
          ),
          is_optimized_text: n.basicFieldAccessorFactory(
            e,
            t,
            "is_optimized_text",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
