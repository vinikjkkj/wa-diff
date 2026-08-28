__d(
  "AdsTransitionExemptActions",
  [
    "AdsAdgroupEditorSelectPostModalActionFlux",
    "AdsAdgroupSetLinkPostFormatDataActionFlux",
    "AdsCPASProducerReportSetInputActionFlux",
    "AdsCampaignStructureExitActionMenuUIActionFlux",
    "AdsCampaignStructureOpenActionMenuUIActionFlux",
    "AdsCanvasElementUpdateDataActionFlux",
    "AdsFinservSetRegionalRegulationIdentityInfoActionFlux",
    "AdsLeadGenFormEditorContextCardSetContentActionFlux",
    "AdsLocationBulkInputChangeTextDataActionFlux",
    "AdsMessengerPACreationStateQuestionItemsActionFlux",
    "AdsMgmtSetAssetPickerMediaTypeActionFlux",
    "AdsOutcomeCampaignSelectPostPromotedObjectTypeDataActionFlux",
    "AdsSavedLocationViewInputDialogSetNameDataActionFlux",
    "AdsUEditorAdgroupSetChildDescriptionDataActionFlux",
    "AdsUEditorAdgroupSetChildLinkDataActionFlux",
    "AdsUEditorAdgroupSetChildNameDataActionFlux",
    "AdsUEditorAdgroupSetMultiMediaActionFlux",
    "AdsUEditorAdgroupSetSAOffOptinStatusActionFlux",
    "AdsUEditorCampaignDeliveryChangeScheduleActionFlux",
    "AdsUEditorCampaignDestinationSetAutomaticManualDataActionFlux",
    "AdsUEditorCampaignSetDeliveryActionFlux",
    "AdsUEditorCampaignSetPageIdDataActionFlux",
    "AdsUEditorCampaignSetProductAudienceSpecDataActionFlux",
    "AdsUEditorCampaignSetSavedAudienceActionFlux",
    "AdsUEditorCampaignSetTargetingSpecActionFlux",
    "AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux",
    "AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux",
    "AdsUEditorCampaignTargetingSetGeoLocationsActionFlux",
    "AdsUEditorPromotedObjectSetLeadAdsCustomEventTypeFieldsDataActionFlux",
    "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux",
    "AdsUseExistingPostModalOnPostTypeToggleChangeActionFlux",
    "AdsUseExistingPostModalOnRowSelectDataActionFlux",
    "AdsUseExistingPostModalOnTabChangeDataActionFlux",
    "SignalsServerEventAttributionDataPayloadUpdateActionFlux",
    "SignalsServerEventCustomDataPayloadUpdateActionFlux",
    "SignalsServerEventUserDataPayloadUpdateActionFlux",
    "SignalsServerOriginalEventPayloadUpdateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        o("AdsCanvasElementUpdateDataActionFlux").actionType,
        r("AdsMessengerPACreationStateQuestionItemsActionFlux").actionType,
        r("AdsUEditorAdgroupSetSAOffOptinStatusActionFlux").actionType,
        r("AdsLocationBulkInputChangeTextDataActionFlux").actionType,
        r("AdsAdgroupSetLinkPostFormatDataActionFlux").actionType,
      ]),
      s = new Set([
        r("AdsSavedLocationViewInputDialogSetNameDataActionFlux").actionType,
        r("AdsCPASProducerReportSetInputActionFlux").actionType,
        r("SignalsServerEventCustomDataPayloadUpdateActionFlux").actionType,
        r("SignalsServerEventUserDataPayloadUpdateActionFlux").actionType,
        r("SignalsServerEventAttributionDataPayloadUpdateActionFlux")
          .actionType,
        r("SignalsServerOriginalEventPayloadUpdateActionFlux").actionType,
        "lm.claim_page.dialog.set_raw_page_id",
        r("AdsLeadGenFormEditorContextCardSetContentActionFlux").actionType,
        r("AdsUEditorCampaignSetProductAudienceSpecDataActionFlux").actionType,
        o("AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux")
          .actionType,
        o("AdsUEditorCampaignTargetingSetGeoLocationsActionFlux").actionType,
        o("AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux").actionType,
        r("AdsUEditorCampaignSetSavedAudienceActionFlux").actionType,
        r("AdsUEditorCampaignSetPageIdDataActionFlux").actionType,
        o("AdsOutcomeCampaignSelectPostPromotedObjectTypeDataActionFlux")
          .actionType,
        o("AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux")
          .actionType,
        r("AdsUEditorAdgroupSetChildNameDataActionFlux").actionType,
        r("AdsUEditorAdgroupSetChildDescriptionDataActionFlux").actionType,
        r("AdsUEditorCampaignSetDeliveryActionFlux").actionType,
        o("AdsUEditorCampaignSetTargetingSpecActionFlux").actionType,
        o("AdsFinservSetRegionalRegulationIdentityInfoActionFlux").actionType,
        o("AdsUEditorAdgroupSetMultiMediaActionFlux").actionType,
        o("AdsUEditorCampaignDestinationSetAutomaticManualDataActionFlux")
          .actionType,
        r("AdsUEditorAdgroupSetChildLinkDataActionFlux").actionType,
        o("AdsUEditorCampaignDeliveryChangeScheduleActionFlux").actionType,
        o(
          "AdsUEditorPromotedObjectSetLeadAdsCustomEventTypeFieldsDataActionFlux",
        ).actionType,
      ]),
      u = new Set([
        r("AdsCampaignStructureOpenActionMenuUIActionFlux").actionType,
        r("AdsCampaignStructureExitActionMenuUIActionFlux").actionType,
      ]),
      c = new Set(["ADS_ADD_TOAST_CARD"]),
      d = new Set([
        "AdsDraft.DRAFT.PUBLISH",
        "PowerEditor.BATCH_INSTANT_PUBLISH",
        "PowerEditor.UPLOAD.UPDATE_SELECTION",
        "AdsUEditorPreviewHubModalActionPlugin",
        "AdsManusUpsellAdsCreationAfterpartyActionPlugin",
        "PE.ON_LEAVE_EDITOR.QUEUED_ACTION",
      ]),
      m = new Set([
        o("AdsAdgroupEditorSelectPostModalActionFlux").actionType,
        o("AdsUseExistingPostModalOnRowSelectDataActionFlux").actionType,
        o("AdsUseExistingPostModalOnPostTypeToggleChangeActionFlux").actionType,
        o("AdsUseExistingPostModalOnTabChangeDataActionFlux").actionType,
      ]),
      p = new Set([r("AdsMgmtSetAssetPickerMediaTypeActionFlux").actionType]);
    function _(t) {
      return t == null
        ? !1
        : e.has(t) ||
            s.has(t) ||
            u.has(t) ||
            c.has(t) ||
            d.has(t) ||
            m.has(t) ||
            p.has(t);
    }
    var f = { shouldSkipTransition: _ };
    l.default = f;
  },
  98,
);
