__d(
  "MAIBAIGGoalCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGGoalCard_campaign",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "destination_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "optimization_goal",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAIGGoalEditorModalContainer_campaign",
        },
      ],
      type: "AdCampaignWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
