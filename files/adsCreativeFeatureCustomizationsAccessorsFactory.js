__d(
  "adsCreativeFeatureCustomizationsAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeFeatureCustomizationsCreativeStickersAccessorsFactory",
    "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
    "adsCreativeFeatureCustomizationsPlacementGroupsAccessorsFactory",
    "adsCreativeFeatureCustomizationsTextTranslationLanguageAccessorsFactory",
    "adsCreativeFeatureHeroAssetCustomizationsAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          aspect_ratio_config: n.basicFieldAccessorFactory(
            e,
            t,
            "aspect_ratio_config",
          ),
          background_color: n.basicFieldAccessorFactory(
            e,
            t,
            "background_color",
          ),
          catalog_feed_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "catalog_feed_tag_name",
          ),
          catalog_text_overlay: n.basicFieldAccessorFactory(
            e,
            t,
            "catalog_text_overlay",
          ),
          creative_stickers: r(
            "adsCreativeFeatureCustomizationsCreativeStickersAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.creative_stickers;
            },
            [].concat(t, ["creative_stickers"]),
          ),
          fb_feed_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "fb_feed_tag_name",
          ),
          fb_reels_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "fb_reels_tag_name",
          ),
          fb_story_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "fb_story_tag_name",
          ),
          font_name: n.basicFieldAccessorFactory(e, t, "font_name"),
          hero_asset: r(
            "adsCreativeFeatureHeroAssetCustomizationsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.hero_asset;
            },
            [].concat(t, ["hero_asset"]),
          ),
          text_translation_opt_out_languages: r(
            "adsCreativeFeatureCustomizationsTextTranslationLanguageAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.text_translation_opt_out_languages;
            },
            [].concat(t, ["text_translation_opt_out_languages"]),
          ),
          overlay_translation_opt_out_languages: r(
            "adsCreativeFeatureCustomizationsTextTranslationLanguageAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.overlay_translation_opt_out_languages;
            },
            [].concat(t, ["overlay_translation_opt_out_languages"]),
          ),
          translate_voiceover_opt_out_languages: r(
            "adsCreativeFeatureCustomizationsTextTranslationLanguageAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null
                ? void 0
                : n.translate_voiceover_opt_out_languages;
            },
            [].concat(t, ["translate_voiceover_opt_out_languages"]),
          ),
          ig_feed_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "ig_feed_tag_name",
          ),
          ig_reels_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "ig_reels_tag_name",
          ),
          ig_stream_tag_name: n.basicFieldAccessorFactory(
            e,
            t,
            "ig_stream_tag_name",
          ),
          pe_carousel: r(
            "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.pe_carousel;
            },
            [].concat(t, ["pe_carousel"]),
          ),
          product_recommendation_type: n.basicFieldAccessorFactory(
            e,
            t,
            "product_recommendation_type",
          ),
          product_versioning_fallback_strategy: n.basicFieldAccessorFactory(
            e,
            t,
            "product_versioning_fallback_strategy",
          ),
          recomposition_type: n.basicFieldAccessorFactory(
            e,
            t,
            "recomposition_type",
          ),
          text_extraction: r(
            "adsCreativeFeatureCustomizationsEnrollStatusAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.text_extraction;
            },
            [].concat(t, ["text_extraction"]),
          ),
          text_style: n.basicFieldAccessorFactory(e, t, "text_style"),
          showcase_card_display: n.basicFieldAccessorFactory(
            e,
            t,
            "showcase_card_display",
          ),
          image_crop_style: n.basicFieldAccessorFactory(
            e,
            t,
            "image_crop_style",
          ),
          video_crop_style: n.basicFieldAccessorFactory(
            e,
            t,
            "video_crop_style",
          ),
          placement_groups: r(
            "adsCreativeFeatureCustomizationsPlacementGroupsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.placement_groups;
            },
            [].concat(t, ["placement_groups"]),
          ),
          is_shopping_links: n.basicFieldAccessorFactory(
            e,
            t,
            "is_shopping_links",
          ),
          shopping_links_randomized_order: n.basicFieldAccessorFactory(
            e,
            t,
            "shopping_links_randomized_order",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
