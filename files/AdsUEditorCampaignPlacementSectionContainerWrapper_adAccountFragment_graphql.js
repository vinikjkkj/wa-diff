__d(
  "AdsUEditorCampaignPlacementSectionContainerWrapper_adAccountFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "AdAccount-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "Variable",
          name: "ids",
          variableName: "selected_campaign_relay_ids",
        },
      ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
          },
          { kind: "RootArgument", name: "selected_campaign_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "AdsUEditorCampaignPlacementSectionContainerWrapper_adAccountFragment",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "AdsUEditorCampaignPlacementSectionContainer_adAccountFragment",
          },
          {
            condition:
              "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: "account_id",
                args: null,
                kind: "ScalarField",
                name: "legacy_account_id",
                storageKey: null,
              },
              {
                kind: "CatchField",
                field: {
                  kind: "ClientEdgeToClientObject",
                  concreteType: "CombinedCampaign",
                  modelResolvers: {
                    CombinedCampaign: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CombinedCampaign__id",
                      },
                      kind: "RelayLiveResolver",
                      name: "__relay_model_instance",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("CombinedCampaign__id.graphql"),
                        n("CombinedCampaign-resolvers").CombinedCampaign,
                        "id",
                        !0,
                      ),
                      path: "combined_campaigns.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: e,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdAccountResolverCombinedCampaignsFragment",
                    },
                    kind: "RelayResolver",
                    name: "combined_campaigns",
                    resolverModule: n("AdAccount-resolver").combined_campaigns,
                    path: "combined_campaigns",
                  },
                  linkedField: {
                    alias: null,
                    args: e,
                    concreteType: "CombinedCampaign",
                    kind: "LinkedField",
                    name: "combined_campaigns",
                    plural: !0,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AdsUEditorCampaignPlacementSectionContainerWrapper_combinedCampaignFragment",
                      },
                    ],
                    storageKey: null,
                  },
                },
                to: "NULL",
              },
            ],
          },
        ],
        type: "AdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
