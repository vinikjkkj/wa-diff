__d(
  "AdsMediaOverlaysUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
            ? void 0
            : t.custom_overlay_spec;
      return !!n;
    }
    i.hasCustomOverlaySpec = e;
  },
  66,
);
