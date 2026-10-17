__d(
  "WAWebMuseDefaultAssistantVariantSource",
  ["WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
        "ai_meta_ai_muse_default_assistant_variant_2",
      ) ||
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_meta_ai_muse_default_assistant_variant_3",
        )
        ? 2
        : o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
              "ai_meta_ai_muse_default_assistant_variant_1",
            )
          ? 1
          : 0;
    }
    l.readMuseDefaultAssistantVariantSource = e;
  },
  98,
);
