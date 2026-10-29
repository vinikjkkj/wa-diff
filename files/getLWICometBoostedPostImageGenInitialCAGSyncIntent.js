__d(
  "getLWICometBoostedPostImageGenInitialCAGSyncIntent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? void 0
        : e.map(function (e) {
            var t = e.creative_asset_groups_spec;
            return t == null
              ? !1
              : t.origins.length !== 1 || t.origins[0] !== "FLEX_FORMAT";
          });
    }
    i.default = e;
  },
  66,
);
