__d(
  "AdsDestinationUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIConnectionObjectPaths",
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsBrandAwarenessUtils",
    "AdsInstagramApplicabilityUtils",
    "AdsMessengerDestinationUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "ApiPagePaths",
    "adsAssetFeedGetCallToActionValue",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("getByPath")(e, r("ApiPagePaths").GLOBAL_BRAND_PAGE_NAME) ||
        r("getByPath")(e, r("ApiPagePaths").NAME) ||
        r("getByPath")(e, r("AdsAPIConnectionObjectPaths").NAME) ||
        r("getByPath")(e, r("AdsAPIConnectionObjectPaths").ID)
      );
    }
    function s(e) {
      var t;
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        t = r("adsAssetFeedGetCallToActionValue")(e, 0, "app_destination");
      else {
        var n;
        if (
          ((t =
            (n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.link_data) == null ||
            (n = n.call_to_action) == null ||
            (n = n.value) == null
              ? void 0
              : n.app_destination),
          t == null)
        ) {
          var a;
          t =
            (a = e.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.video_data) == null ||
            (a = a.call_to_action) == null ||
            (a = a.value) == null
              ? void 0
              : a.app_destination;
        }
      }
      return t;
    }
    function u(e, t, n, a, i, l) {
      var s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t),
        u = r("AdsInstagramApplicabilityUtils").hasInstagramStoryPlacementOnly(
          t,
        );
      return (
        o("AdsMessengerDestinationUtils").isMessengerDestinationEnabled(
          e,
          s,
          a,
          i,
          l,
        ) &&
        !r("AdsAudienceDirectConfig").isDirectDealsUser &&
        n !== !0 &&
        !u
      );
    }
    function c(e, t, n, a, i) {
      if (
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          n,
        )
      )
        return n;
      var l = o(
          "AdsUEditorUnifiedCreationAwarenessUtils",
        ).messageTypeStringToAdCampaignDestinationType(a),
        s =
          ((o("AdsBrandAwarenessUtils").isBrandObjective(e) && t === !0) ||
            (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
              !o(
                "AdsUEditorMessagingDestinationUtils",
              ).isClickToMessageAdDestination(n))) &&
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(l);
      return s
        ? l
        : o(
            "AdsUEditorMessagingDestinationUtils",
          ).getDestinationForCallToActionType(i);
    }
    ((l.getDestinationName = e),
      (l.getAppDestinationForAdgroupSpec = s),
      (l.isMessengerDestinationCapable = u),
      (l.getDestinationTypeForCTXUnifiedCreation = c));
  },
  98,
);
