__d(
  "AdsMessengerDynamicAdsUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r,
        o =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null ||
          (t = t.call_to_action) == null
            ? void 0
            : t.type,
        a = (n = e.creative) == null ? void 0 : n.product_set_id,
        i =
          e == null ||
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.template_data) == null ||
          (r = r.call_to_action) == null ||
          (r = r.value) == null
            ? void 0
            : r.app_destination;
      return a != null && (o === "MESSAGE_PAGE" || i === "MESSENGER");
    }
    i.isMessengerDynamicAds = e;
  },
  66,
);
