__d(
  "MAIBAAdDraftEditorContextProvider_adSetupCampaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "isAdsManager" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdDraftEditorContextProvider_adSetupCampaignGroup",
      selections: [
        {
          condition: "isAdsManager",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_pca_unified",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "objective",
              storageKey: null,
            },
          ],
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
