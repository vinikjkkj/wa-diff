__d(
  "adsCreativeSourcingWebsiteMediaSpecNodeAcessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeSourcingActionMetadataAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          media: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.media;
            },
            [].concat(t, ["media"]),
            [
              "aesthetic_relevance",
              "background_cleanliness",
              "background_color",
              "cluster_index",
              "description",
              "human_face_detection",
              "image_hash",
              "image_height",
              "image_sources",
              "image_url",
              "image_width",
              "is_duplicate",
              "is_human_and_product",
              "is_human_and_service",
              "image_blurry",
              "image_phash",
              "is_icon",
              "is_illustration",
              "is_immersive_product",
              "is_landscape",
              "is_logo",
              "is_og_image",
              "is_photo_collage",
              "is_poster",
              "is_text_wall",
              "logo_icon_detection",
              "message_relevance",
              "overall_relevance",
              "product_focus",
              "product_relevance",
              "similarity_score",
              "text",
              "text_heavy",
              "user_sentiment",
            ],
          ),
          image_clusters: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.image_clusters;
            },
            [].concat(t, ["image_clusters"]),
            [
              "image_phashes",
              "cluster_silhouette_score",
              "cluster_intra_diversity",
              "ranking_version",
            ],
          ),
          adex_had_data: n.basicFieldAccessorFactory(e, t, "adex_had_data"),
          adex_had_impression: n.basicFieldAccessorFactory(
            e,
            t,
            "adex_had_impression",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
