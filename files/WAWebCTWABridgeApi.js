__d(
  "WAWebCTWABridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebNewCTWASuggestionAction",
    "WAWebQuickPromotionAction",
    "WAWebSmbDataSharingServerUpdateAction",
    "WAWebUpdateDataSharing3pdLidInCollectionAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebDetectedOutcomeNotificationSignalAction",
      ).__setRef("WAWebCTWABridgeApi"),
      u = {
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
        ctwaDetectedOutcomeOnboardingStatusUpdate: function (t) {
          var e = t.onboardingStatus;
          return o(
            "WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction",
          ).ctwaDetectedOutcomeOnboardingStatusUpdateAction(e);
        },
        emitDetectedOutcomeNotificationSignal: function (n) {
          var t = n.payloadJson,
            a = n.threadLid;
          s.load()
            .then(function (e) {
              return e.emitDetectedOutcomeNotificationSignal(a, t);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] detected-outcome notification dispatch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ctwa-detected-outcome-dispatch-failed");
            });
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
    l.CTWABridgeApi = u;
  },
  98,
);
