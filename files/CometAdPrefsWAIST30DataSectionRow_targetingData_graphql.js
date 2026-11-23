__d(
  "CometAdPrefsWAIST30DataSectionRow_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometAdPrefsWAIST30DataSectionRow_targetingData",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "waist_ui_type",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "serialized_data",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTActionableInsightsRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAIST30AgeGenderRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTBCTRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTBrandedContentWithPageRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCollaborativeAdRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCollaborativeAdsCategoryTargetingRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceFacebookWifiRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceQRCodeRow_targetingData",
        },
        {
          args: [{ kind: "Variable", name: "ad_id", variableName: "ad_id" }],
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceDataFileRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceLookalikeRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceMobileAppRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceUnresolvedRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceOfflineConversionRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTCustomAudienceWebsiteRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEngagementEventRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEngagementIGProfileRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEngagementLeadGenRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEngagementPageRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEngagementVideoRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTConnectionRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTDynamicRuleRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEduSchoolsRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTEduStatusRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTFriendsOfConnectionRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTInterestsRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTLocaleRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTLocalReachRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAIST30LocationRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTPurchaseIntentRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTRelationshipStatusRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTSearchAdRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTWorkEmployerRow_targetingData",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAdPrefsWAISTWorkJobTitleRow_targetingData",
        },
      ],
      type: "IWAISTUIType",
      abstractKey: "__isIWAISTUIType",
    };
    a.exports = e;
  },
  null,
);
