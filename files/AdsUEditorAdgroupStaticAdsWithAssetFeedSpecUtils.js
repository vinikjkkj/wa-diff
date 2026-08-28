__d(
  "AdsUEditorAdgroupStaticAdsWithAssetFeedSpecUtils",
  [
    "AdsAPIAdgroupRecord",
    "AdsClientAdsAssetFeedSpecAdditionalDataFields",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "app_product_page_id",
        "audios",
        "promotional_metadata",
        "message_extensions",
        "lead_nurture_channels",
        "web_destination_spec",
        "upcoming_events",
        "phone_data_ids",
        "lead_gen_configuration",
        "ctwa_consent_data",
        "upcoming_event_metadata",
        "additional_data",
        "call_ads_configuration",
        "translations",
      ],
      s = [
        "page_whatsapp_number_id",
        "reward_info",
        "app_destination_metadata",
        "page_nudge_message",
        "is_pbia_messaging_enabled",
        "is_crm_delivery_enabled",
        "lead_delivery_privacy_url",
        "partner_app_welcome_message_flow_id",
        "multi_share_end_card",
      ],
      u = [
        "multi_share_end_card",
        "is_smart_app_promotion",
        "is_click_to_message",
      ];
    function c(e) {
      var t,
        n,
        o =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.additional_data;
      if (o != null && !m(o)) return !1;
      if (e instanceof r("AdsAPIAdgroupRecord")) {
        var a,
          i = r("immutable").List(
            (a = e.creative) == null ? void 0 : a.asset_feed_spec,
          );
        return d(i);
      }
      var l = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      return l != null && d(Object.entries(l));
    }
    function d(t) {
      var n = t.every(function (e) {
        var t = e[0],
          n = e[1];
        return n == null;
      });
      return (
        !n &&
        t.every(function (t) {
          var n = t[0],
            o = t[1];
          return (e.includes(n) && r("isTruthy")(o)) ||
            (Array.isArray(o) && o.length === 0)
            ? !0
            : o == null;
        })
      );
    }
    function m(e) {
      return r("AdsClientAdsAssetFeedSpecAdditionalDataFields").every(
        function (t) {
          var n = e == null ? void 0 : e[t];
          if (
            (s.includes(t) && r("isTruthy")(n)) ||
            (u.includes(t) && n === !1)
          )
            return !0;
          var o = n;
          return Array.isArray(o) && o.length === 0 ? !0 : n == null;
        },
      );
    }
    ((l.isAdgroupUsingAssetFeedForStaticAdsFromRecord = c),
      (l.doesAssetFeedSpecOnlyContainExcludedFields = d));
  },
  98,
);
