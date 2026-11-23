__d(
  "MAIBAIGGoalCard_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "isIG" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGGoalCard_campaignGroup",
      selections: [
        {
          alias: null,
          args: null,
          concreteType:
            "XFBEntAdCampaignGroupWithDraftDataBoostPostPreviewFields",
          kind: "LinkedField",
          name: "maiba_lwi_boost_post_preview",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "instagram_media_igid",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          condition: "isIG",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                concreteType: "XFBIGBoostAutomationPreferencesInfo",
                kind: "LinkedField",
                name: "ig_combined_objective_preferences",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "most_important_goals",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              to: "RESULT",
            },
          ],
        },
        {
          args: [{ kind: "Variable", name: "isIG", variableName: "isIG" }],
          kind: "FragmentSpread",
          name: "MAIBAIGGoalEditorModalContainer_campaignGroup",
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
