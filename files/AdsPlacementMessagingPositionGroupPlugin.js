__d(
  "AdsPlacementMessagingPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsMessengerMarketingMessagePositionPlugin",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
    "isAccountEligibleForMessengerMarketingMessages",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
      r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin"),
      r("AdsPlacementsMessengerMarketingMessagePositionPlugin"),
    ]);
    function u() {
      return o(
        "isAccountEligibleForMessengerMarketingMessages",
      ).isAccountEligibleForMessengerMarketingMessages()
        ? s("1110923")
        : o(
              "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
            ).isAdAccountEligibleForMarketingMessagesMessageOnly()
          ? s("840517")
          : s("556727");
    }
    var c = u(),
      d = {
        type: "placements/position/group",
        key: "messaging",
        placementPreviewImage: c,
        placementPreviewVideo: "10150008661790581",
        mediaRecommendation:
          o(
            "isAccountEligibleForMessengerMarketingMessages",
          ).isAccountEligibleForMessengerMarketingMessages() ||
          o(
            "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
          ).isAdAccountEligibleForMarketingMessagesMessageOnly()
            ? r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
                .MARKETING_MESSAGES
            : r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
                .MESSAGING,
        subheader: o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages()
          ? r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS
              .MESSENGER_MARKETING_MESSAGES
          : o(
                "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
              ).isAdAccountEligibleForMarketingMessagesMessageOnly()
            ? r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS
                .MARKETING_MESSAGES
            : r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.MESSAGING,
        name:
          o(
            "isAccountEligibleForMessengerMarketingMessages",
          ).isAccountEligibleForMessengerMarketingMessages() ||
          o(
            "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
          ).isAdAccountEligibleForMarketingMessagesMessageOnly()
            ? r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.MARKETING_MESSAGES
            : r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.MESSAGING,
        isEnabled: function (t) {
          return !0;
        },
        positions: e,
        adsetReducer: function (t, n) {
          var e = n.action,
            r = e != null ? e : {},
            a = r.eligibilityInformation,
            i = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
              d.positions,
              a,
            );
          switch (e.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(t, e, i);
          }
          return t;
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
