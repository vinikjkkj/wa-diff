__d(
  "MAIBAAssetDataUtils_CampaignDrilldownWithDraftsQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-combined_adgroups-resolver",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-publish_status-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignRelayIDs",
          },
        ],
        t = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ],
        r = [{ kind: "Literal", name: "limit", value: 100 }],
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedAdgroup____relay_model_instance",
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
                type: "CombinedAdgroup",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "CombinedAdgroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: {
            hasClientEdges: !0,
            vultureHash: "74SaUQHQD6HZREAUdFqe9VuQ56k=",
          },
          name: "MAIBAAssetDataUtils_CampaignDrilldownWithDraftsQuery",
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
                        path: "selected_ad_account.combined_campaigns.__relay_model_instance",
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
                      name: "combined_campaigns",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAdAccount-resolvers").combined_campaigns,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "selected_ad_account.combined_campaigns",
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
                              path: "selected_ad_account.combined_campaigns.combined_adgroups.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: "combined_adgroups",
                            args: r,
                            fragment: {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CombinedCampaign____relay_model_instance",
                            },
                            kind: "RelayLiveResolver",
                            name: "combined_adgroups_slow",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedCampaign____relay_model_instance.graphql",
                              ),
                              n("CombinedCampaign-combined_adgroups-resolver")
                                .combined_adgroups_slow,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_campaigns.combined_adgroups",
                          },
                          linkedField: {
                            alias: "combined_adgroups",
                            args: r,
                            concreteType: "CombinedAdgroup",
                            kind: "LinkedField",
                            name: "combined_adgroups_slow",
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
                                      "CombinedAdgroup____relay_model_instance.graphql",
                                    ),
                                    n("CombinedAdgroup-resolvers").ad_object_id,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaigns.combined_adgroups.ad_object_id",
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
                                      "CombinedAdgroup____relay_model_instance.graphql",
                                    ),
                                    n("CombinedAdgroup-resolvers").name,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaigns.combined_adgroups.name",
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
                                      "CombinedAdgroup____relay_model_instance.graphql",
                                    ),
                                    n("CombinedAdgroup-publish_status-resolver")
                                      .publish_status,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_campaigns.combined_adgroups.publish_status",
                                },
                                action: "LOG",
                              },
                            ],
                            storageKey: "combined_adgroups_slow(limit:100)",
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
          name: "MAIBAAssetDataUtils_CampaignDrilldownWithDraftsQuery",
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
                      name: "combined_campaigns",
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
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "combined_adgroups_slow",
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
                            },
                            kind: "RelayResolver",
                            storageKey: "combined_adgroups_slow(limit:100)",
                            isOutputType: !1,
                          },
                          linkedField: {
                            alias: "combined_adgroups",
                            args: r,
                            concreteType: "CombinedAdgroup",
                            kind: "LinkedField",
                            name: "combined_adgroups_slow",
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
                            storageKey: "combined_adgroups_slow(limit:100)",
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
          cacheID: "daa00e85eaa3b8d3f2dc063d8ce270c3",
          id: null,
          metadata: { vultureHash: "74SaUQHQD6HZREAUdFqe9VuQ56k=" },
          name: "MAIBAAssetDataUtils_CampaignDrilldownWithDraftsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
