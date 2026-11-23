__d(
  "AdsUEditorCampaignPlacementSectionContainerWrapper_Fragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        t = [
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
          { kind: "RootArgument", name: "gk_andromeda_pgd_shadow_validation" },
          { kind: "RootArgument", name: "selected_campaign_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0 },
        name: "AdsUEditorCampaignPlacementSectionContainerWrapper_Fragment",
        selections: [
          {
            condition:
              "__relay_internal__pv__perseusL4ColocatePlacementSectionWrapperrelayprovider",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                fragment: e,
                kind: "RelayResolver",
                name: "account_id",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("ClientAdAccount____relay_model_instance.graphql"),
                  n("ClientAdAccount-resolvers").account_id,
                  "__relay_model_instance",
                  !0,
                ),
                path: "account_id",
              },
              {
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
                  args: t,
                  fragment: e,
                  kind: "RelayResolver",
                  name: "combined_campaigns",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount____relay_model_instance.graphql"),
                    n("ClientAdAccount-resolvers").combined_campaigns,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaigns",
                },
                linkedField: {
                  alias: null,
                  args: t,
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
            ],
          },
          {
            kind: "Defer",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "AdsUEditorCampaignPlacementSectionContainer_fragment",
              },
            ],
          },
          {
            condition: "gk_andromeda_pgd_shadow_validation",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "ClientExtension",
                selections: [
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "Defer",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsUEditorCampaignPlacementSectionContainerRelayShadowValidation_Fragment",
                            },
                          ],
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "AdsUEditorCampaignPlacementSectionContainerRelayShadowValidation_Fragment",
                  },
                ],
              },
            ],
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
