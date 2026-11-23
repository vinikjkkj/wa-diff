__d(
  "AdsPlacementBulkEditContainerImpl_fragment.graphql",
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
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "CombinedSavedAudience-override_id-resolver",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ],
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        };
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignRelayIDs",
          },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "AdsPlacementBulkEditContainerImpl_fragment",
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
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "ClientAdAccount____relay_model_instance",
              },
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
                  fragment: t,
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
                  concreteType: "CombinedSavedAudience",
                  modelResolvers: null,
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: t,
                    kind: "RelayResolver",
                    name: "saved_audience",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("CombinedCampaign____relay_model_instance.graphql"),
                      n("CombinedCampaign-resolvers").saved_audience,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "combined_campaigns.saved_audience",
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "CombinedSavedAudience",
                    kind: "LinkedField",
                    name: "saved_audience",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CombinedSavedAudienceOverrideIdResolver",
                        },
                        kind: "RelayResolver",
                        name: "override_id",
                        resolverModule: n(
                          "CombinedSavedAudience-override_id-resolver",
                        ).override_id,
                        path: "combined_campaigns.saved_audience.override_id",
                      },
                    ],
                    storageKey: null,
                  },
                },
                {
                  alias: null,
                  args: null,
                  fragment: t,
                  kind: "RelayResolver",
                  name: "saved_audience_id",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("CombinedCampaign____relay_model_instance.graphql"),
                    n("CombinedCampaign-resolvers").saved_audience_id,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaigns.saved_audience_id",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useEligibilityInformationArray_fragment",
                },
              ],
              storageKey: null,
            },
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsTargetingAccountControlInfo_fragment",
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
