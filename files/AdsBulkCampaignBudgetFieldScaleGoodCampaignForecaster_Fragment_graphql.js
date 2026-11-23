__d(
  "AdsBulkCampaignBudgetFieldScaleGoodCampaignForecaster_Fragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdCampaign__id.graphql",
    "ClientAdCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-published_object-resolver",
    "relay-runtime/experimental",
    "ClientAdCampaign____relay_model_instance.graphql",
    "ClientAdCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdCampaign____relay_model_instance.graphql",
    "ClientAdCampaign-resolvers",
    "relay-runtime/experimental",
    "RelayEverywhere__id.graphql",
    "RelayEverywhere-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAccountRelayEverywhere",
    "relay-runtime/experimental",
    "AdAccountNamespace__id.graphql",
    "RelayEverywhereAdAccount-resolvers",
    "relay-runtime/experimental",
    "RelayEverywhere____relay_model_instance.graphql",
    "RelayEverywhereAdAccount-resolvers",
    "relay-runtime/experimental",
    "AdAccountNamespace____relay_model_instance.graphql",
    "re-adsMgmtGuidanceEngineRecommendationsSelector",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ kind: "Variable", name: "ids", variableName: "campaignIDs" }],
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        },
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdCampaign____relay_model_instance",
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "campaignIDs" }],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "AdsBulkCampaignBudgetFieldScaleGoodCampaignForecaster_Fragment",
        selections: [
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
              args: e,
              fragment: t,
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
              args: e,
              concreteType: "CombinedCampaign",
              kind: "LinkedField",
              name: "combined_campaigns",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  fragment: r,
                  kind: "RelayResolver",
                  name: "ad_object_id",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("CombinedCampaign____relay_model_instance.graphql"),
                    n("CombinedCampaign-resolvers").ad_object_id,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaigns.ad_object_id",
                },
                {
                  kind: "ClientEdgeToClientObject",
                  concreteType: "ClientAdCampaign",
                  modelResolvers: {
                    ClientAdCampaign: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ClientAdCampaign__id",
                      },
                      kind: "RelayLiveResolver",
                      name: "__relay_model_instance",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdCampaign__id.graphql"),
                        n("ClientAdCampaign-resolvers").ClientAdCampaign,
                        "id",
                        !0,
                      ),
                      path: "combined_campaigns.published_object.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: r,
                    kind: "RelayLiveResolver",
                    name: "published_object",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("CombinedCampaign____relay_model_instance.graphql"),
                      n("CombinedCampaign-published_object-resolver")
                        .published_object,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "combined_campaigns.published_object",
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "ClientAdCampaign",
                    kind: "LinkedField",
                    name: "published_object",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        fragment: o,
                        kind: "RelayResolver",
                        name: "override_daily_budget",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("ClientAdCampaign____relay_model_instance.graphql"),
                          n("ClientAdCampaign-resolvers").override_daily_budget,
                          "__relay_model_instance",
                          !0,
                        ),
                        path: "combined_campaigns.published_object.override_daily_budget",
                      },
                      {
                        alias: null,
                        args: null,
                        fragment: o,
                        kind: "RelayResolver",
                        name: "override_lifetime_budget",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("ClientAdCampaign____relay_model_instance.graphql"),
                          n("ClientAdCampaign-resolvers")
                            .override_lifetime_budget,
                          "__relay_model_instance",
                          !0,
                        ),
                        path: "combined_campaigns.published_object.override_lifetime_budget",
                      },
                    ],
                    storageKey: null,
                  },
                },
              ],
              storageKey: null,
            },
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "RelayEverywhere",
            modelResolvers: {
              RelayEverywhere: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "RelayEverywhere__id",
                },
                kind: "RelayLiveResolver",
                name: "__relay_model_instance",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("RelayEverywhere__id.graphql"),
                  n("RelayEverywhere-resolvers").RelayEverywhere,
                  "id",
                  !0,
                ),
                path: "relay_everywhere.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: t,
              kind: "RelayResolver",
              name: "relay_everywhere",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("ClientAdAccount____relay_model_instance.graphql"),
                n("ClientAccountRelayEverywhere").relay_everywhere,
                "__relay_model_instance",
                !0,
              ),
              path: "relay_everywhere",
            },
            linkedField: {
              alias: null,
              args: null,
              concreteType: "RelayEverywhere",
              kind: "LinkedField",
              name: "relay_everywhere",
              plural: !1,
              selections: [
                {
                  kind: "ClientEdgeToClientObject",
                  concreteType: "AdAccountNamespace",
                  modelResolvers: {
                    AdAccountNamespace: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AdAccountNamespace__id",
                      },
                      kind: "RelayLiveResolver",
                      name: "__relay_model_instance",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("AdAccountNamespace__id.graphql"),
                        n("RelayEverywhereAdAccount-resolvers")
                          .AdAccountNamespace,
                        "id",
                        !0,
                      ),
                      path: "relay_everywhere.ad_account.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RelayEverywhere____relay_model_instance",
                    },
                    kind: "RelayResolver",
                    name: "ad_account",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("RelayEverywhere____relay_model_instance.graphql"),
                      n("RelayEverywhereAdAccount-resolvers").ad_account,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "relay_everywhere.ad_account",
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "AdAccountNamespace",
                    kind: "LinkedField",
                    name: "ad_account",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: [],
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "AdAccountNamespace____relay_model_instance",
                        },
                        kind: "RelayLiveResolver",
                        name: "ads_mgmt_guidance_engine_recommendations_selector",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n(
                            "AdAccountNamespace____relay_model_instance.graphql",
                          ),
                          n("re-adsMgmtGuidanceEngineRecommendationsSelector")
                            .ads_mgmt_guidance_engine_recommendations_selector,
                          "__relay_model_instance",
                          !0,
                        ),
                        path: "relay_everywhere.ad_account.ads_mgmt_guidance_engine_recommendations_selector",
                      },
                    ],
                    storageKey: null,
                  },
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
