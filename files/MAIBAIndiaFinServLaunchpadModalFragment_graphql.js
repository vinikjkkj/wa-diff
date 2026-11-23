__d(
  "MAIBAIndiaFinServLaunchpadModalFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        { defaultValue: null, kind: "LocalArgument", name: "campaignRelayIDs" },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipEligibilityAPI",
        },
        { defaultValue: null, kind: "LocalArgument", name: "skipSAVEM2Fields" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAIndiaFinServLaunchpadModalFragment",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "legacy_account_id",
                variableName: "adAccountID",
              },
            ],
            concreteType: "AdAccount",
            kind: "LinkedField",
            name: "ad_account",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: "adMarketID",
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                action: "THROW",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        {
          args: [
            {
              kind: "Variable",
              name: "adAccountID",
              variableName: "adAccountID",
            },
            {
              kind: "Variable",
              name: "campaignRelayIDs",
              variableName: "campaignRelayIDs",
            },
            {
              kind: "Variable",
              name: "skipEligibilityAPI",
              variableName: "skipEligibilityAPI",
            },
            {
              kind: "Variable",
              name: "skipSAVEM2Fields",
              variableName: "skipSAVEM2Fields",
            },
          ],
          kind: "FragmentSpread",
          name: "AdsUEditorCampaignCAAPLaunchpadRegulationsSectionContainerQuery",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
