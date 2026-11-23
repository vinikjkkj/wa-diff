__d(
  "MAIBAAssetDataUtils_CampaignGroupDrilldownWithDraftsQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-combined_campaigns-resolver",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-publish_status-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupRelayIDs",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "campaignGroupRelayIDs",
          },
        ],
        r = [{ kind: "Literal", name: "limit", value: 100 }],
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = [a],
        l = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: i,
                type: "CombinedCampaign",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "CombinedCampaign",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: {
            hasClientEdges: !0,
            vultureHash: "zvE0izsOSIhurq7Guoz-2ndRdOs=",
          },
          name: "MAIBAAssetDataUtils_CampaignGroupDrilldownWithDraftsQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientAdAccount",
              modelResolvers: {
                ClientAdAccount: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount__id.graphql"),
                    n("ClientAdAccount-resolvers").ClientAdAccount,
                    "id",
                    !1,
                  ),
                  path: "selected_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "selected_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
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
                          n("CombinedCampaignGroup-resolvers")
                            .CombinedCampaignGroup,
                          "id",
                          !0,
                        ),
                        path: "selected_ad_account.combined_campaign_groups.__relay_model_instance",
                      },
                    },
                    serverObjectOperations: null,
                    backingField: {
                      alias: null,
                      args: t,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ClientAdAccount____relay_model_instance",
                      },
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
                      path: "selected_ad_account.combined_campaign_groups",
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
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
                                n("CombinedCampaign-resolvers")
                                  .CombinedCampaign,
                                "id",
                                !0,
                              ),
                              path: "selected_ad_account.combined_campaign_groups.combined_campaigns.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: "combined_campaigns",
                            args: r,
                            fragment: {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CombinedCampaignGroup____relay_model_instance",
                            },
                            kind: "RelayLiveResolver",
                            name: "combined_campaigns_slow",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedCampaignGroup____relay_model_instance.graphql",
                              ),
                              n(
                                "CombinedCampaignGroup-combined_campaigns-resolver",
                              ).combined_campaigns_slow,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_campaign_groups.combined_campaigns",
                          },
                          linkedField: {
                            alias: "combined_campaigns",
                            args: r,
                            concreteType: "CombinedCampaign",
                            kind: "LinkedField",
                            name: "combined_campaigns_slow",
                            plural: !0,
                            selections: [
                              {
                                kind: "RequiredField",
                                field: {
                                  alias: null,
                                  args: null,
                                  fragment: o,
                                  kind: "RelayResolver",
                                  name: "ad_object_id",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "CombinedCampaign____relay_model_instance.graphql",
                                    ),
                                    n("CombinedCampaign-resolvers")
                                      .ad_object_id,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaign_groups.combined_campaigns.ad_object_id",
                                },
                                action: "LOG",
                              },
                              {
                                kind: "RequiredField",
                                field: {
                                  alias: null,
                                  args: null,
                                  fragment: o,
                                  kind: "RelayResolver",
                                  name: "name",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "CombinedCampaign____relay_model_instance.graphql",
                                    ),
                                    n("CombinedCampaign-resolvers").name,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaign_groups.combined_campaigns.name",
                                },
                                action: "LOG",
                              },
                              {
                                kind: "RequiredField",
                                field: {
                                  alias: null,
                                  args: null,
                                  fragment: o,
                                  kind: "RelayLiveResolver",
                                  name: "publish_status",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "CombinedCampaign____relay_model_instance.graphql",
                                    ),
                                    n(
                                      "CombinedCampaign-publish_status-resolver",
                                    ).publish_status,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaign_groups.combined_campaigns.publish_status",
                                },
                                action: "LOG",
                              },
                            ],
                            storageKey: "combined_campaigns_slow(limit:100)",
                          },
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAAssetDataUtils_CampaignGroupDrilldownWithDraftsQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "selected_ad_account",
                args: null,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_campaign_groups",
                      args: t,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            name: "__relay_model_instance",
                            args: null,
                            fragment: {
                              kind: "InlineFragment",
                              selections: i,
                              type: "ClientAdAccount",
                              abstractKey: null,
                            },
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                          },
                        ],
                        type: "ClientAdAccount",
                        abstractKey: null,
                      },
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "combined_campaigns_slow",
                            args: r,
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  name: "__relay_model_instance",
                                  args: null,
                                  fragment: {
                                    kind: "InlineFragment",
                                    selections: i,
                                    type: "CombinedCampaignGroup",
                                    abstractKey: null,
                                  },
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !1,
                                },
                              ],
                              type: "CombinedCampaignGroup",
                              abstractKey: null,
                            },
                            kind: "RelayResolver",
                            storageKey: "combined_campaigns_slow(limit:100)",
                            isOutputType: !1,
                          },
                          linkedField: {
                            alias: "combined_campaigns",
                            args: r,
                            concreteType: "CombinedCampaign",
                            kind: "LinkedField",
                            name: "combined_campaigns_slow",
                            plural: !0,
                            selections: [
                              {
                                name: "ad_object_id",
                                args: null,
                                fragment: l,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "name",
                                args: null,
                                fragment: l,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "publish_status",
                                args: null,
                                fragment: l,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              a,
                            ],
                            storageKey: "combined_campaigns_slow(limit:100)",
                          },
                        },
                        a,
                      ],
                      storageKey: null,
                    },
                  },
                  a,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "b63f4da4dc97733f90c95ad030c694fe",
          id: null,
          metadata: { vultureHash: "zvE0izsOSIhurq7Guoz-2ndRdOs=" },
          name: "MAIBAAssetDataUtils_CampaignGroupDrilldownWithDraftsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
