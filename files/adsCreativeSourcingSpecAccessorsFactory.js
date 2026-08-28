__d(
  "adsCreativeSourcingSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeAppInfoSpecAccessorsFactory",
    "adsCreativeFeaturedOfferingSpecAccessorsFactory",
    "adsCreativeSourcingBrandNodeAccessorsFactory",
    "adsCreativeSourcingCatalogNodeAccessorsFactory",
    "adsCreativeSourcingDestinationScreenshotSpecNodeAccessorsFactory",
    "adsCreativeSourcingDynamicSiteLinksNodeAccessorsFactory",
    "adsCreativeSourcingNcsTestimonialNodeAccessorsFactory",
    "adsCreativeSourcingPcaAiRelevancySpecNodeAccessorsFactory",
    "adsCreativeSourcingPcaSpecNodeAccessorsFactory",
    "adsCreativeSourcingProductMediaMetadataSpecNodeAccessorsFactory",
    "adsCreativeSourcingSiteLinksDataConsentedNodeAccessorsFactory",
    "adsCreativeSourcingWebsiteMediaSpecNodeAcessorsFactory",
    "adsCreativeSourcingWebsiteSummarySpecNodeAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          ad_extensions_relevancy_spec: r(
            "adsCreativeSourcingPcaAiRelevancySpecNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.ad_extensions_relevancy_spec;
            },
            [].concat(t, ["ad_extensions_relevancy_spec"]),
          ),
          app_info_spec: r("adsCreativeAppInfoSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.app_info_spec;
            },
            [].concat(t, ["app_info_spec"]),
          ),
          associated_product_set_id: n.basicFieldAccessorFactory(
            e,
            t,
            "associated_product_set_id",
          ),
          selected_video_id: n.basicFieldAccessorFactory(
            e,
            t,
            "selected_video_id",
          ),
          source_url: n.basicFieldAccessorFactory(e, t, "source_url"),
          brand: r("adsCreativeSourcingBrandNodeAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.brand;
            },
            [].concat(t, ["brand"]),
          ),
          destination_screenshot_spec: r(
            "adsCreativeSourcingDestinationScreenshotSpecNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.destination_screenshot_spec;
            },
            [].concat(t, ["destination_screenshot_spec"]),
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
          catalog: r("adsCreativeSourcingCatalogNodeAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.catalog;
            },
            [].concat(t, ["catalog"]),
          ),
          ncs_testimonial: r(
            "adsCreativeSourcingNcsTestimonialNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ncs_testimonial;
            },
            [].concat(t, ["ncs_testimonial"]),
          ),
          dynamic_site_links_spec: r(
            "adsCreativeSourcingDynamicSiteLinksNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.dynamic_site_links_spec;
            },
            [].concat(t, ["dynamic_site_links_spec"]),
          ),
          pca_spec: r("adsCreativeSourcingPcaSpecNodeAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.pca_spec;
            },
            [].concat(t, ["pca_spec"]),
          ),
          product_media_metadata_spec: r(
            "adsCreativeSourcingProductMediaMetadataSpecNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.product_media_metadata_spec;
            },
            [].concat(t, ["product_media_metadata_spec"]),
          ),
          site_links_data_consented: r(
            "adsCreativeSourcingSiteLinksDataConsentedNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.site_links_data_consented;
            },
            [].concat(t, ["site_links_data_consented"]),
          ),
          site_links_spec: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.site_links_spec;
            },
            [].concat(t, ["site_links_spec"]),
            [
              "site_link_url",
              "site_link_title",
              "site_link_image_hash",
              "site_link_recommendation_type",
              "site_link_url_recommender_type",
              "site_link_website_data_source",
              "site_link_image_url",
              "site_link_hash",
              "is_site_link_sticky",
              "site_link_id",
              "site_link_language",
              "site_link_extra_metadata",
              "site_link_onsite_destination_id",
              "site_link_onsite_destination_type",
              "site_link_url_anchor",
              "is_defaulting_eligible",
            ],
          ),
          promotion_metadata_spec: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.promotion_metadata_spec;
            },
            [].concat(t, ["promotion_metadata_spec"]),
            [
              "promotion_value",
              "promotion_type",
              "required_code",
              "id",
              "start_date",
              "end_date",
              "promotion_source",
            ],
          ),
          website_media_spec: r(
            "adsCreativeSourcingWebsiteMediaSpecNodeAcessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.website_media_spec;
            },
            [].concat(t, ["website_media_spec"]),
          ),
          website_summary_spec: r(
            "adsCreativeSourcingWebsiteSummarySpecNodeAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.website_summary_spec;
            },
            [].concat(t, ["website_summary_spec"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
