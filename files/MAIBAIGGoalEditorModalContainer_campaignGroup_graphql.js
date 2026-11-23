__d(
  "MAIBAIGGoalEditorModalContainer_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "isIG" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGGoalEditorModalContainer_campaignGroup",
      selections: [
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "objective",
          storageKey: null,
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
