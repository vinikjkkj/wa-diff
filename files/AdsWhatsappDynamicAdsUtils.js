__d(
  "AdsWhatsappDynamicAdsUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null ||
          (t = t.call_to_action) == null
            ? void 0
            : t.type,
        o = (n = e.creative) == null ? void 0 : n.product_set_id;
      return o != null && r === "WHATSAPP_MESSAGE";
    }
    i.isWhatsAppDynamicAds = e;
  },
  66,
);
