__d(
  "AdsPlacementsMessengerMarketingMessagePositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementIneligibilityReason",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "areUpstreamSettingsMessageMarketingCompatible",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "getMessageMarketingTopIncompatibleSettingData",
    "getUpstreamSettingsFromEligibilityInformation",
    "immutable",
    "isAccountEligibleForMessengerMarketingMessages",
    "isRegulatedCategoriesEmpty",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return o("AdsPlacementAPISpecWriterUtils").addGroup(
          e,
          "messenger/marketing_messages",
          n,
          r("AdsAPITargetFields").MESSENGER_POSITIONS,
          "messenger",
        );
      });
    }
    function c(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return o("AdsPlacementAPISpecWriterUtils").removeGroup(
          e,
          "messenger/marketing_messages",
          n,
          r("AdsAPITargetFields").MESSENGER_POSITIONS,
          "messenger",
        );
      });
    }
    var d = {
        type: "placements/position",
        key: "messenger/marketing_messages",
        name: s._(/*BTDS*/ "Marketing messages"),
        nameWithPlatform: s._(/*BTDS*/ "Marketing messages on Messenger"),
        mediaRecommendation: {
          imageCrop: r("AdImageSpecCropKeys")["191x100"],
          videoCrop: "16:9",
        },
        apiPosition: "marketing_messages",
        placementPreviewImage: u("1110923"),
        platformKey: "messenger",
        isEnabled: function () {
          return o(
            "isAccountEligibleForMessengerMarketingMessages",
          ).isAccountEligibleForMessengerMarketingMessages();
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(d, t);
          if (e != null) return e;
          if (
            t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var n = o(
              "getUpstreamSettingsFromEligibilityInformation",
            ).getUpstreamSettingsFromEligibilityInformation(t),
            a = o(
              "getMessageMarketingTopIncompatibleSettingData",
            ).getMessageMarketingTopIncompatibleSettingData(
              n,
              o("AdsMessageMarketingCompatibleSettingsPluginType")
                .AdsMessageMarketingCompatibleSettingsChannelType.MESSENGER,
            ),
            i = o(
              "areUpstreamSettingsMessageMarketingCompatible",
            ).areUpstreamSettingsPartiallyCompatibleWithMessageMarketing(
              n,
              o("AdsMessageMarketingCompatibleSettingsPluginType")
                .AdsMessageMarketingCompatibleSettingsChannelType.MESSENGER,
            ),
            l = o("AdsPlacementAPISpecReaderUtils").isActivePosition(
              t.spec,
              "messenger",
              "marketing_messages",
            ),
            s =
              !o("isRegulatedCategoriesEmpty").isRegulatedCategoriesEmpty(
                t.specialAdCategories,
              ) &&
              !l &&
              i === !0;
          return s
            ? o("AdsPlacementIneligibilityReason").createSACReason()
            : a != null && a.field !== "specialAdCategories"
              ? { type: "CUSTOM", message: a.message }
              : t.messengerMessageMarketingActivationStatus !== !0
                ? o("AdsPlacementIneligibilityReason").createGenericReason()
                : null;
        },
        getPlacementSpecificPreviewInfo: function () {
          return null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "messenger",
            "marketing_messages",
          );
        },
        isInactiveByDefault: function (t) {
          return !t.messengerMessageMarketingActivationStatus;
        },
        isHiddenInPlacementUI: !o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages(),
        isMessageMarketing: !0,
        adsetValidators: [],
        getPreviews: function () {
          return r("immutable").OrderedSet([
            "previews/messenger_marketing_message",
          ]);
        },
        getDefaultPreview: function () {
          return "previews/messenger_marketing_message";
        },
        adsetReducer: function (n, r) {
          var t = r.action;
          if (
            !o(
              "isAccountEligibleForMessengerMarketingMessages",
            ).isAccountEligibleForMessengerMarketingMessages()
          )
            return n;
          switch (t.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return t.removeGroups.includes("messenger/marketing_messages")
                ? c(n, t.campaignIDs, t.eligibilityInformation)
                : t.addGroups.includes("messenger/marketing_messages")
                  ? e(n, t.campaignIDs, t.eligibilityInformation)
                  : n;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return e(n, t.ids, t.eligibilityInformation);
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return c(n, t.campaignIDs, t.eligibilityInformation);
          }
          return n;
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
