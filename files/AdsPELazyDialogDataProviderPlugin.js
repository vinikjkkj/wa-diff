__d(
  "AdsPELazyDialogDataProviderPlugin",
  ["AdsUEditorHostIDs", "ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        adsCBOMidflightEducationDialogShown: { dialogShown: !1 },
        deleteConfirmDialogShown: !1,
        discardConfirmDialogShown: { dialogShown: !1 },
        createPageDialogState: { dialogShown: !1, enableNewPageOnboarding: !1 },
        endStudyConfirmDialogShown: {
          ids: [],
          dialogShown: !1,
          dialogType: "DELETE",
        },
        isRedesignFlow: !1,
        leadAccessDialogShown: !1,
        leadDownloadDialogShown: !1,
        leadDownloadDialogShownV2: !1,
        lowReachRecommendationDialogState: { dialogShown: !1 },
        messageMarketingLiquiditySubscriberThresholdDialogState: {
          dialogShown: !1,
        },
        marketingMessageTOSDialogState: {
          dialogShown: !1,
          campaignIDs: [],
          hostID: r("AdsUEditorHostIDs").EDITING,
        },
        messengerRemindersOptInState: {
          isReconOptInSelected: !1,
          accountID: null,
          businessId: null,
          isTOSSigned: !1,
        },
        publishReceiptDialogShown: !1,
        publishConfirmDialogShown: { dialogShown: !1 },
        showPauseGuidanceDialog: { dialogShown: !1 },
        uploadPreviewDialogShown: !1,
        campaignMidflightEducationDialogState: { dialogShown: !1 },
        overAdLimitPublishConfirmDialogShown: { dialogShown: !1 },
        sbgMEEngagementDetailsDialogState: { dialogShown: !1 },
        budgetStrategyInfoDialogShown: !1,
        budgetStrategyUpdateDialogShown: !1,
        shopsAdsAutoTransformationDialogShown: !1,
      }),
      s = function () {
        return e();
      },
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
