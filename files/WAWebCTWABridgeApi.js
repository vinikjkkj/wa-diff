__d(
  "WAWebCTWABridgeApi",
  [
    "WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebNativeAdsMvpEligibilityAction",
    "WAWebNewCTWASuggestionAction",
    "WAWebQuickPromotionAction",
    "WAWebSmbDataSharingServerUpdateAction",
    "WAWebUpdateDataSharing3pdLidInCollectionAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      newCTWASuggestion: function (t) {
        var e = t.suggestion;
        return o("WAWebNewCTWASuggestionAction").newCTWASuggestion(e);
      },
      revokeCTWASuggestion: function (t) {
        var e = t.suggestion;
        return o("WAWebNewCTWASuggestionAction").revokeCTWASuggestion(e);
      },
      loadedCTWASuggestions: function (t) {
        var e = t.suggestions;
        return o("WAWebNewCTWASuggestionAction").loadedCTWASuggestions(e);
      },
      loadedQuickPromotions: function (t) {
        var e = t.promotions;
        return o("WAWebQuickPromotionAction").loadedQuickPromotions(e);
      },
      smbDataSharingSettingUpdate: function (t) {
        var e = t.smbDataSharingSettingValue,
          n = t.smbDataSharingSettingVersion;
        return o(
          "WAWebSmbDataSharingServerUpdateAction",
        ).smbDataSharingSettingUpdateAction(e, n);
      },
      loadedNativeAdsMvpEligibility: o("WAWebNativeAdsMvpEligibilityAction")
        .loadedNativeAdsMvpEligibility,
      ctwaDetectedOutcomeOnboardingStatusUpdate: function (t) {
        var e = t.onboardingStatus;
        return o(
          "WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction",
        ).ctwaDetectedOutcomeOnboardingStatusUpdateAction(e);
      },
      updateDataSharing3pdLidInCollection: o(
        "WAWebUpdateDataSharing3pdLidInCollectionAction",
      ).updateDataSharing3pdLidInCollection,
      removeDataSharing3pdLidFromCollection: o(
        "WAWebUpdateDataSharing3pdLidInCollectionAction",
      ).removeDataSharing3pdLidFromCollection,
      maybeGeneratePerCustomerDataSharingSystemMessage: o(
        "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
      ).maybeGeneratePerCustomerDataSharingSystemMessage,
    };
    l.CTWABridgeApi = e;
  },
  98,
);
