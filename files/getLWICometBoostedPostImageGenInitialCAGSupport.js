__d(
  "getLWICometBoostedPostImageGenInitialCAGSupport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? void 0
        : e.map(function (e) {
            var t = e.creative_asset_groups_spec;
            if (t == null) return !0;
            if (
              t.origins.length !== 1 ||
              t.origins[0] !== "GEN_AI" ||
              t.groups.length !== 1
            )
              return !1;
            var n = t.groups[0];
            return (
              n.call_to_action == null &&
              n.long_texts.length === 0 &&
              n.message_extensions.length === 0 &&
              n.posts.length === 0 &&
              n.short_texts.length === 0 &&
              n.texts.length === 0 &&
              n.videos.length === 0 &&
              n.images.every(function (e) {
                return (
                  e.image_crops == null &&
                  (e.source === "USER_INPUT" || e.source === "GENERATED")
                );
              })
            );
          });
    }
    i.default = e;
  },
  66,
);
