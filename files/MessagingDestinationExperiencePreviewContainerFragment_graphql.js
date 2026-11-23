__d(
  "MessagingDestinationExperiencePreviewContainerFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
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
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { kind: "Variable", name: "ids", variableName: "adgroupRelayIDs" },
        ],
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        r = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ],
        o = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "campaignGroupRelayIDs",
          },
        ],
        a = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaignGroup____relay_model_instance",
        };
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "adgroupRelayIDs",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupRelayIDs",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignRelayIDs",
          },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "MessagingDestinationExperiencePreviewContainerFragment",
        selections: [
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
              fragment: t,
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
                  name: "useAdsAdgroupMessageType_Fragment",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useAdsAdgroupMessageExtensionType_Fragment",
                },
              ],
              storageKey: null,
            },
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
              args: r,
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
              args: r,
              concreteType: "CombinedCampaign",
              kind: "LinkedField",
              name: "combined_campaigns",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CombinedCampaign____relay_model_instance",
                  },
                  kind: "RelayResolver",
                  name: "destination_type",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("CombinedCampaign____relay_model_instance.graphql"),
                    n("CombinedCampaign-resolvers").destination_type,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaigns.destination_type",
                },
              ],
              storageKey: null,
            },
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "CombinedCampaignGroup",
            modelResolvers: {
              CombinedCampaignGroup: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CombinedCampaignGroup__id",
                },
                kind: "RelayLiveResolver",
                name: "__relay_model_instance",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("CombinedCampaignGroup__id.graphql"),
                  n("CombinedCampaignGroup-resolvers").CombinedCampaignGroup,
                  "id",
                  !0,
                ),
                path: "combined_campaign_groups.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: o,
              fragment: t,
              kind: "RelayResolver",
              name: "combined_campaign_groups",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("ClientAdAccount____relay_model_instance.graphql"),
                n("ClientAdAccount-resolvers").combined_campaign_groups,
                "__relay_model_instance",
                !0,
              ),
              path: "combined_campaign_groups",
            },
            linkedField: {
              alias: null,
              args: o,
              concreteType: "CombinedCampaignGroup",
              kind: "LinkedField",
              name: "combined_campaign_groups",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  fragment: a,
                  kind: "RelayResolver",
                  name: "objective",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("CombinedCampaignGroup____relay_model_instance.graphql"),
                    n("CombinedCampaignGroup-resolvers").objective,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaign_groups.objective",
                },
                {
                  alias: null,
                  args: null,
                  fragment: a,
                  kind: "RelayResolver",
                  name: "is_odax_campaign_group",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("CombinedCampaignGroup____relay_model_instance.graphql"),
                    n("CombinedCampaignGroup-resolvers").is_odax_campaign_group,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "combined_campaign_groups.is_odax_campaign_group",
                },
              ],
              storageKey: null,
            },
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAdsUEditorAdgroupExistingPostCTAFieldRelaySelectorFragment",
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
