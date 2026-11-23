__d(
  "StartConversationsTemplateCustomerActionsSection_account.graphql",
  [
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "Variable",
          name: "ids",
          variableName: "selected_adgroup_relay_ids",
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "selected_adgroup_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "StartConversationsTemplateCustomerActionsSection_account",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorAdgroupPostIDRelaySelectorFragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorAdgroupAIGenIcebreakerToggleStateRelaySelector_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAIGeneratedIcebreakersEligibilityRelaySelectorFragment",
          },
          {
            kind: "Defer",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useAreAIGeneratedIcebreakersLoadingRelaySelectorFragment",
              },
            ],
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "CombinedAdgroup",
            modelResolvers: {
              CombinedAdgroup: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CombinedAdgroup__id",
                },
                kind: "RelayLiveResolver",
                name: "__relay_model_instance",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("CombinedAdgroup__id.graphql"),
                  n("CombinedAdgroup-resolvers").CombinedAdgroup,
                  "id",
                  !0,
                ),
                path: "combined_adgroups.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: e,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "ClientAdAccount____relay_model_instance",
              },
              kind: "RelayResolver",
              name: "combined_adgroups",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("ClientAdAccount____relay_model_instance.graphql"),
                n("ClientAdAccount-resolvers").combined_adgroups,
                "__relay_model_instance",
                !0,
              ),
              path: "combined_adgroups",
            },
            linkedField: {
              alias: null,
              args: e,
              concreteType: "CombinedAdgroup",
              kind: "LinkedField",
              name: "combined_adgroups",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useAdsAdgroupMessageExtensionType_Fragment",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useAdsUEditorAdgroupBodyTextRelaySelectorFragment",
                },
              ],
              storageKey: null,
            },
          },
        ],
        type: "ClientAdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
