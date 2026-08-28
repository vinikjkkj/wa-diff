__d(
  "AdsThreadsFeedPlacementEligibilityUtils",
  [
    "AdCampaignDestination",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAppUtils",
    "AdsBuyingTypes",
    "AdsInstagramSupportedObjectives",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementConfigOptimizationGoalEligibilityUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementsThreadsFeedPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppPlacementUtils",
    "IGAdsSensitiveVerticalsUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = r("gkx")("8558"),
        i = e.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        l = o(
          "AdsPlacementConfigObjectiveEligibilityUtils",
        ).getObjectiveIneligibilityReasonForPlacementType(
          "threads",
          "threads_stream",
          e,
          !0,
        );
      if (l != null && !(i && a)) return [l, "objective_disabled"];
      var u = o(
        "AdsPlacementConfigOptimizationGoalEligibilityUtils",
      ).getOptimizationGoalIneligibilityReasonForPlacementType(
        "threads",
        "threads_stream",
        e,
        !0,
      );
      if (u != null && !(i && a)) return [u, "optimization_goal_disabled"];
      var c = e.buyingType,
        d = e.spec;
      if (e.containsDCO === !0)
        return [o("AdsPlacementIneligibilityReason").createDCOReason(), "dco"];
      if (e.containsOffer === !0)
        return [
          o("AdsPlacementIneligibilityReason").createOfferOptionReason(
            e.objective,
          ),
          "offer_option",
        ];
      if (
        d.device_platforms &&
        !(
          (t = d.device_platforms) != null &&
          t.includes(r("AdsAPIDevicePlatform").MOBILE)
        )
      )
        return [
          o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
            r("AdsAPIDevicePlatform").DESKTOP,
          ),
          "desktop",
        ];
      if (!a) {
        if (o("AdsWhatsAppPlacementUtils").isIneligibleForThreadsFeed(e))
          return [
            o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              e.objective,
            ),
            "whatsapp_disabled",
          ];
        if (
          e.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER ||
          e.promotedObjectType ===
            r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER
        )
          return [
            o("AdsPlacementIneligibilityReason").createMessengerReason(
              e.objective,
            ),
            "from_messenger_disabled",
          ];
      }
      if (e.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
        return [
          o("AdsPlacementIneligibilityReason").createDonationReason(),
          "donation_disabled",
        ];
      if (e.promotedObjectType === r("AdsPromotedObjectTypes").GROUP)
        return [
          o("AdsPlacementIneligibilityReason").createGroupPromotionReason(),
          "group_promotion_disabled",
        ];
      if (e.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
        return [
          o("AdsPlacementIneligibilityReason").createImaginationReason(),
          "imagination_disabled",
        ];
      if (e.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
        return [
          o("AdsPlacementIneligibilityReason").createInstagramLiveReason(),
          "instagram_live_disabled",
        ];
      if (c !== r("AdsBuyingTypes").AUCTION)
        return [
          o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
            c,
            r("AdsPlacementsThreadsFeedPositionPlugin").key,
          ),
          "buying_type_not_auction",
        ];
      if (
        e.objective === r("AdsAPIObjectives").APP_INSTALLS &&
        e.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
      )
        return [
          o("AdsPlacementIneligibilityReason").createCanvasAppReason(),
          "canvas_app_disabled_for_app_install",
        ];
      if (e.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
        return [
          o("AdsPlacementIneligibilityReason").createReminderPromotionReason(),
          "reminder_promotion_disabled",
        ];
      var m = r("AdsAppUtils").isAppEngagementObjective(
        e.objective,
        e.promotedObjectType,
      );
      if (
        !(
          (n = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
            "threads_stream",
          )) != null && n.includes(o("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT)
        ) &&
        m
      )
        return [
          o("AdsPlacementIneligibilityReason").createMobileAppReason(),
          "app_installs_engagement",
        ];
      var p = s();
      return p ? [p, "sensitive_vertical"] : [null, "is eligible"];
    }
    function s() {
      return r("justknobx")._("3577") || r("gkx")("11870")
        ? null
        : r("IGAdsSensitiveVerticalsUtils").is_gsi
          ? o("AdsPlacementIneligibilityReason").createGenericReason()
          : null;
    }
    var u = { getIneligibilityReason: e },
      c = u;
    l.default = c;
  },
  98,
);
