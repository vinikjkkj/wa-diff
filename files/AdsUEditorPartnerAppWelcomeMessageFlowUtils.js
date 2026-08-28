__d(
  "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
  [
    "AdCampaignDestination",
    "AdsAdgroupRecordAccessors",
    "AdsUEditorMessagingDestinationUtils",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o = (t = e.creative) == null ? void 0 : t.asset_feed_spec,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.additional_data;
      return o == null ||
        a == null ||
        r("isEmptyObject")(o) ||
        r("isEmptyObject")(a)
        ? !1
        : !Object.prototype.hasOwnProperty.call(o, "optimization_type") &&
            (a == null
              ? void 0
              : a.hasOwnProperty("partner_app_welcome_message_flow_id"));
    }
    function s(e) {
      var t;
      return (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
        ? void 0
        : t.partner_app_welcome_message_flow_id;
    }
    function u(e, t) {
      return t == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.partner_app_welcome_message_flow_id.set(
            t,
            e,
          );
    }
    function c(e) {
      return e == null
        ? []
        : e === r("AdCampaignDestination").WHATSAPP
          ? [r("AdCampaignDestination").WHATSAPP]
          : e === r("AdCampaignDestination").INSTAGRAM_DIRECT
            ? [r("AdCampaignDestination").INSTAGRAM_DIRECT]
            : e === r("AdCampaignDestination").MESSENGER
              ? [r("AdCampaignDestination").MESSENGER]
              : e ===
                  r("AdCampaignDestination")
                    .MESSAGING_INSTAGRAM_DIRECT_MESSENGER
                ? [
                    r("AdCampaignDestination").INSTAGRAM_DIRECT,
                    r("AdCampaignDestination").MESSENGER,
                  ]
                : e ===
                    r("AdCampaignDestination")
                      .MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
                  ? [
                      r("AdCampaignDestination").INSTAGRAM_DIRECT,
                      r("AdCampaignDestination").WHATSAPP,
                    ]
                  : e ===
                      r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP
                    ? [
                        r("AdCampaignDestination").MESSENGER,
                        r("AdCampaignDestination").WHATSAPP,
                      ]
                    : e ===
                        r("AdCampaignDestination")
                          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP
                      ? [
                          r("AdCampaignDestination").INSTAGRAM_DIRECT,
                          r("AdCampaignDestination").MESSENGER,
                          r("AdCampaignDestination").WHATSAPP,
                        ]
                      : [];
    }
    function d(e, t) {
      var n,
        r,
        a = (n = c(t)) != null ? n : [],
        i = e != null ? ((r = e.eligible_platforms) != null ? r : []) : [];
      return (
        e != null &&
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessengerAndInstagram(t) &&
          (i =
            e.compatible_platforms != null && e.compatible_platforms.length > 0
              ? e.compatible_platforms
              : i),
        a.every(function (e) {
          return i.includes(e);
        })
      );
    }
    function m(e, t, n) {
      var r,
        o = n != null ? ((r = n.eligible_platforms) != null ? r : []) : [];
      return (
        n != null &&
          t === !0 &&
          (o =
            n.compatible_platforms != null && n.compatible_platforms.length > 0
              ? n.compatible_platforms
              : o),
        o.includes(e)
      );
    }
    ((l.isAdgroupUsingPartnerAppFlowsInAssetFeedFromRecord = e),
      (l.getPartnerAppFlowIdFromAssetFeedSpec = s),
      (l.updateAFSPartnerAppFlowField = u),
      (l.convertDestinationToList = c),
      (l.isFlowCompatibleWithDestinationType = d),
      (l.isPlatformSupportedForMessageFlow = m));
  },
  98,
);
