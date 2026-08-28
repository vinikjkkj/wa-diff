__d(
  "AdsCopyCopyCompletedDataAction",
  [
    "AdsCopyCopyCompletedDataLoggerPlugin",
    "AdsCopyCopyCompletedDataReducerPlugin",
    "AdsCopyDataProvider",
    "AdsCopyReducerPlugins",
    "AdsCopySourceTrackerDataProvider",
    "AdsCopySourceTrackerReducerPlugins",
    "AdsCreativeFatigueResolutionReducerPlugins",
    "AdsDeliveryNoDeliveryStatusResolutionReducerPlugins",
    "AdsDuplicationCampaignWithAutoUpdateEndDateProvider",
    "AdsDuplicationRegulatoryNavigationInfoProvider",
    "AdsDuplicationSetRegulatoryNavigationInfoReducerPlugin",
    "AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin",
    "AdsExperimentsFunnelUserActionLoggerPlugins",
    "AdsInstreamVideosDefaultOptInDuplicationProvider",
    "AdsPECreativeFatigueResolutionProvider",
    "AdsPENoDeliveryStatusResolutionProvider",
    "AdsSplitTestObserverDataProvider",
    "AdsSuggestedAdsImportStatusTrackerDataProvider",
    "AdsSuggestedAdsImportStatusTrackerReducerPlugins",
    "AdsUEditorCampaignAutoEndDateUpdateReducerPlugin",
    "AdsUEditorCampaignDetailedTargetingRelaxationProvider",
    "AdsUEditorCampaignSetTargetingRelaxOptionReducerPlugin",
    "AdsUEditorShopsAdsCopyCompletedReducerPlugin",
    "Laminar",
    "MessageMarketingDuplicationUpsellAYMTProvider",
    "MessageMarketingDuplicationUpsellAYMTReducerPlugins",
    "ShopsAdsRecentlyConvertedViaDuplicationProvider",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsAdgroupDraftFragmentsCopyCompletedReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsAdgroupDraftFragmentsDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsCopyCopyCompletedDataReducerPlugin"),
            n("AdsInstreamVideosDefaultOptInDuplicationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopyReducerPlugins").copyCompleted,
            n("AdsCopyDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopySourceTrackerReducerPlugins").copyCompleted,
            n("AdsCopySourceTrackerDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCreativeFatigueResolutionReducerPlugins")
              .AdsCreativeFatigueResolutionDuplicationCompletedReducerPlugin,
            n("AdsPECreativeFatigueResolutionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDeliveryNoDeliveryStatusResolutionReducerPlugins")
              .AdsNoDeliveryStatusResolutionDuplicationCompletedReducerPlugin,
            n("AdsPENoDeliveryStatusResolutionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDuplicationSetRegulatoryNavigationInfoReducerPlugin"),
            n("AdsDuplicationRegulatoryNavigationInfoProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsDuplicateAdObjectInFreeFormTestReducerPlugin"),
            n("AdsSplitTestObserverDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsSuggestedAdsImportStatusTrackerReducerPlugins").copyComplete,
            n("AdsSuggestedAdsImportStatusTrackerDataProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupDuplicatePAC1ToPAC2ReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignAutoEndDateUpdateReducerPlugin"),
            n("AdsDuplicationCampaignWithAutoUpdateEndDateProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetTargetingRelaxOptionReducerPlugin"),
            n("AdsUEditorCampaignDetailedTargetingRelaxationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorShopsAdsCopyCompletedReducerPlugin"),
            n("ShopsAdsRecentlyConvertedViaDuplicationProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("MessageMarketingDuplicationUpsellAYMTReducerPlugins")
              .onQuickDuplicateCopyComplete,
            n("MessageMarketingDuplicationUpsellAYMTProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsCopyCopyCompletedDataLoggerPlugin",
            n("AdsCopyCopyCompletedDataLoggerPlugin"),
            {},
          ),
          n("Laminar").__createLogger(
            "AdsExperimentsFunnelUserActionLoggerPlugins.AdsTALCreateTestWithVariantCopyCompletedReducer",
            n("AdsExperimentsFunnelUserActionLoggerPlugins")
              .AdsTALCreateTestWithVariantCopyCompletedReducer,
            {},
          ),
        ];
      },
      "AdsCopy.COPY_COMPLETED",
    );
    a.exports = e;
  },
  null,
);
