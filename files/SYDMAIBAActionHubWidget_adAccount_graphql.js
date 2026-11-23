__d(
  "SYDMAIBAActionHubWidget_adAccount.graphql",
  ["SYDMAIBAActionHubWidgetRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "debugSignalKinds" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: n("SYDMAIBAActionHubWidgetRefetchQuery.graphql"),
          identifierInfo: {
            identifierField: "id",
            identifierQueryVariableName: "id",
          },
        },
        throwOnFieldError: !0,
      },
      name: "SYDMAIBAActionHubWidget_adAccount",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_account_id",
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_debug_syd_maiba_action_hub_signals",
            storageKey: null,
          },
          to: "NULL",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: [
                  {
                    kind: "Variable",
                    name: "debugSignalKinds",
                    variableName: "debugSignalKinds",
                  },
                ],
                kind: "FragmentSpread",
                name: "SYDMAIBAActionHubWidget_data",
              },
            ],
            type: "AdAccount",
            abstractKey: null,
          },
          kind: "AliasedInlineFragmentSpread",
          name: "actionHub",
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
