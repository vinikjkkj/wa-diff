__d(
  "AdsUEditorAdgroupStaticAdsUsingAFSUtils",
  [
    "AdsClientAdAssetFeedSpecFields",
    "AdsClientAdsAssetFeedSpecAdditionalDataFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e.creative);
    }
    function s(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        c,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C =
          e == null || (t = e.asset_feed_spec) == null
            ? void 0
            : t.additional_data,
        b = !0;
      return (
        C != null && (b = d(C)),
        (e == null ? void 0 : e.asset_feed_spec) != null &&
          ((e == null || (n = e.asset_feed_spec) == null ? void 0 : n.audios) !=
            null ||
            (e == null || (r = e.asset_feed_spec) == null
              ? void 0
              : r.badge_sets) != null ||
            (e == null || (o = e.asset_feed_spec) == null
              ? void 0
              : o.additional_data) != null ||
            (e == null || (a = e.asset_feed_spec) == null
              ? void 0
              : a.promotional_metadata) != null ||
            (e == null || (i = e.asset_feed_spec) == null
              ? void 0
              : i.phone_data_ids) != null ||
            (e == null || (l = e.asset_feed_spec) == null
              ? void 0
              : l.message_extensions) != null ||
            (e == null || (s = e.asset_feed_spec) == null
              ? void 0
              : s.upcoming_events) != null ||
            (e == null || (c = e.asset_feed_spec) == null
              ? void 0
              : c.app_product_page_id) != null ||
            (e == null || (m = e.asset_feed_spec) == null
              ? void 0
              : m.web_destination_spec) != null ||
            (e == null || (p = e.asset_feed_spec) == null
              ? void 0
              : p.lead_nurture_channels) != null ||
            (e == null || (_ = e.asset_feed_spec) == null
              ? void 0
              : _.lead_gen_configuration) != null ||
            (e == null || (f = e.asset_feed_spec) == null
              ? void 0
              : f.ctwa_consent_data) != null ||
            (e == null || (g = e.asset_feed_spec) == null
              ? void 0
              : g.upcoming_event_metadata) != null ||
            (e == null || (h = e.asset_feed_spec) == null
              ? void 0
              : h.call_ads_configuration) != null ||
            (e == null || (y = e.asset_feed_spec) == null
              ? void 0
              : y.translations) != null) &&
          u(e == null ? void 0 : e.asset_feed_spec) &&
          b
      );
    }
    function u(e) {
      return r("AdsClientAdAssetFeedSpecFields").every(function (t) {
        var n = e == null ? void 0 : e[t];
        return t === "audios" ||
          t === "badge_sets" ||
          t === "additional_data" ||
          t === "promotional_metadata" ||
          t === "message_extensions" ||
          t === "upcoming_events" ||
          t === "app_product_page_id" ||
          t === "web_destination_spec" ||
          t === "lead_nurture_channels" ||
          t === "lead_gen_configuration" ||
          t === "upcoming_event_metadata" ||
          t === "phone_data_ids" ||
          t === "ctwa_consent_data" ||
          t === "call_ads_configuration" ||
          t === "translations"
          ? !0
          : n instanceof Array
            ? n.length === 0
            : n == null;
      });
    }
    var c = new Set([
      "multi_share_end_card",
      "is_smart_app_promotion",
      "is_click_to_message",
    ]);
    function d(e) {
      return r("AdsClientAdsAssetFeedSpecAdditionalDataFields").every(
        function (t) {
          var n = e == null ? void 0 : e[t];
          return (t === "reward_info" && t in e) ||
            (t === "app_destination_metadata" && t in e) ||
            (t === "page_nudge_message" && t in e) ||
            (t === "is_pbia_messaging_enabled" && t in e) ||
            (t === "is_crm_delivery_enabled" && t in e) ||
            (t === "lead_delivery_privacy_url" && t in e) ||
            (t === "page_private_reply" && t in e) ||
            (t === "partner_app_welcome_message_flow_id" && t in e) ||
            (t === "page_whatsapp_number_id" && t in e) ||
            (c.has(t) && n === !1)
            ? !0
            : n instanceof Array
              ? n.length === 0
              : n == null;
        },
      );
    }
    ((l.isAdgroupUsingOnlyAssetFeedForStaticAds = e),
      (l.isCreativeUsingOnlyAssetFeedForStaticAds = s));
  },
  98,
);
