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
    "ClickToMessageDestinationTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i =
          e.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e.objective === r("AdsAPIObjectives").LINK_CLICKS ||
          e.objective === r("AdsAPIObjectives").OUTCOME_SALES,
        l = o(
          "ClickToMessageDestinationTypes",
        ).MESSAGING_APP_DESTINATION_TYPES.has(
          (t = e.destinationType) != null ? t : "",
        ),
        u = i && l && r("gkx")("8558"),
        c = o(
          "AdsPlacementConfigObjectiveEligibilityUtils",
        ).getObjectiveIneligibilityReasonForPlacementType(
          "threads",
          "threads_stream",
          e,
          !0,
        );
      if (c != null && !u) return [c, "objective_disabled"];
      var d = o(
        "AdsPlacementConfigOptimizationGoalEligibilityUtils",
      ).getOptimizationGoalIneligibilityReasonForPlacementType(
        "threads",
        "threads_stream",
        e,
        !0,
      );
      if (d != null && !u) return [d, "optimization_goal_disabled"];
      var m = e.buyingType,
        p = e.spec;
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
        p.device_platforms &&
        !(
          (n = p.device_platforms) != null &&
          n.includes(r("AdsAPIDevicePlatform").MOBILE)
        )
      )
        return [
          o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
            r("AdsAPIDevicePlatform").DESKTOP,
          ),
          "desktop",
        ];
      if (!r("gkx")("8558")) {
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
      if (m !== r("AdsBuyingTypes").AUCTION)
        return [
          o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
            m,
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
      var _ = r("AdsAppUtils").isAppEngagementObjective(
        e.objective,
        e.promotedObjectType,
      );
      if (
        !(
          (a = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
            "threads_stream",
          )) != null && a.includes(o("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT)
        ) &&
        _
      )
        return [
          o("AdsPlacementIneligibilityReason").createMobileAppReason(),
          "app_installs_engagement",
        ];
      var f = s();
      return f ? [f, "sensitive_vertical"] : [null, "is eligible"];
    }
    function s() {
      return null;
    }
    var u = { getIneligibilityReason: e },
      c = u;
    l.default = c;
  },
  98,
);
