__d(
  "AdsGuidanceActionsInsightsContainerQuery.graphql",
  [
    "CombinedCampaignGroup-resolvers",
    "CombinedCampaign-resolvers",
    "CombinedAdgroup-resolvers",
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
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-publish_status-resolver",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-publish_status-resolver",
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-publish_status-resolver",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "ClientAdAccount-resolvers",
    "CombinedCampaignGroup-resolvers",
    "CombinedCampaignGroup-publish_status-resolver",
    "ClientAdAccount-resolvers",
    "CombinedCampaign-resolvers",
    "CombinedCampaign-publish_status-resolver",
    "ClientAdAccount-resolvers",
    "CombinedAdgroup-resolvers",
    "CombinedAdgroup-publish_status-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "adgroupIds" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaignGroupIds",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "campaignIds" },
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaignGroup__id",
        },
        a = [
          { kind: "Variable", name: "ids", variableName: "campaignGroupIds" },
        ],
        i = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        l = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaignGroup____relay_model_instance",
        },
        s = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign__id",
        },
        u = [{ kind: "Variable", name: "ids", variableName: "campaignIds" }],
        c = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        },
        d = { args: null, kind: "FragmentSpread", name: "CombinedAdgroup__id" },
        m = [{ kind: "Variable", name: "ids", variableName: "adgroupIds" }],
        p = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedAdgroup____relay_model_instance",
        },
        _ = {
          CombinedCampaignGroup: {
            resolverModule: n("CombinedCampaignGroup-resolvers")
              .CombinedCampaignGroup,
          },
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = {
          CombinedCampaign: {
            resolverModule: n("CombinedCampaign-resolvers").CombinedCampaign,
          },
        },
        h = {
          CombinedAdgroup: {
            resolverModule: n("CombinedAdgroup-resolvers").CombinedAdgroup,
          },
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "AdsGuidanceActionsInsightsContainerQuery",
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
                        fragment: o,
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
                      args: a,
                      fragment: i,
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
                      args: a,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          concreteType: "CombinedCampaignGroup",
                          modelResolvers: {
                            CombinedCampaignGroup: {
                              alias: null,
                              args: null,
                              fragment: o,
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
                              path: "selected_ad_account.combined_campaign_groups.source_object.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: null,
                            args: null,
                            fragment: l,
                            kind: "RelayResolver",
                            name: "source_object",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedCampaignGroup____relay_model_instance.graphql",
                              ),
                              n("CombinedCampaignGroup-resolvers")
                                .source_object,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_campaign_groups.source_object",
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                fragment: l,
                                kind: "RelayLiveResolver",
                                name: "publish_status",
                                resolverModule: n(
                                  "relay-runtime/experimental",
                                ).resolverDataInjector(
                                  n(
                                    "CombinedCampaignGroup____relay_model_instance.graphql",
                                  ),
                                  n(
                                    "CombinedCampaignGroup-publish_status-resolver",
                                  ).publish_status,
                                  "__relay_model_instance",
                                  !0,
                                ),
                                path: "selected_ad_account.combined_campaign_groups.source_object.publish_status",
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
                    concreteType: "CombinedCampaign",
                    modelResolvers: {
                      CombinedCampaign: {
                        alias: null,
                        args: null,
                        fragment: s,
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
                      args: u,
                      fragment: i,
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
                      args: u,
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          concreteType: "CombinedCampaign",
                          modelResolvers: {
                            CombinedCampaign: {
                              alias: null,
                              args: null,
                              fragment: s,
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
                              path: "selected_ad_account.combined_campaigns.source_object.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: null,
                            args: null,
                            fragment: c,
                            kind: "RelayResolver",
                            name: "source_object",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedCampaign____relay_model_instance.graphql",
                              ),
                              n("CombinedCampaign-resolvers").source_object,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_campaigns.source_object",
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaign",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                fragment: c,
                                kind: "RelayLiveResolver",
                                name: "publish_status",
                                resolverModule: n(
                                  "relay-runtime/experimental",
                                ).resolverDataInjector(
                                  n(
                                    "CombinedCampaign____relay_model_instance.graphql",
                                  ),
                                  n("CombinedCampaign-publish_status-resolver")
                                    .publish_status,
                                  "__relay_model_instance",
                                  !0,
                                ),
                                path: "selected_ad_account.combined_campaigns.source_object.publish_status",
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
                    concreteType: "CombinedAdgroup",
                    modelResolvers: {
                      CombinedAdgroup: {
                        alias: null,
                        args: null,
                        fragment: d,
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
                        path: "selected_ad_account.combined_adgroups.__relay_model_instance",
                      },
                    },
                    serverObjectOperations: null,
                    backingField: {
                      alias: null,
                      args: m,
                      fragment: i,
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
                      path: "selected_ad_account.combined_adgroups",
                    },
                    linkedField: {
                      alias: null,
                      args: m,
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          concreteType: "CombinedAdgroup",
                          modelResolvers: {
                            CombinedAdgroup: {
                              alias: null,
                              args: null,
                              fragment: d,
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
                              path: "selected_ad_account.combined_adgroups.source_object.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: null,
                            args: null,
                            fragment: p,
                            kind: "RelayResolver",
                            name: "source_object",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedAdgroup____relay_model_instance.graphql",
                              ),
                              n("CombinedAdgroup-resolvers").source_object,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_adgroups.source_object",
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedAdgroup",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                fragment: p,
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
                                path: "selected_ad_account.combined_adgroups.source_object.publish_status",
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
                storageKey: null,
              },
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "AdsGuidanceActionsInsightsContainerQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              modelResolvers: {
                ClientAdAccount: {
                  resolverModule: n("ClientAdAccount-resolvers")
                    .ClientAdAccount,
                },
              },
              backingField: {
                name: "selected_ad_account",
                args: null,
                kind: "RelayLiveResolver",
                storageKey: null,
                isOutputType: !1,
                resolverInfo: {
                  resolverFunction: n("Query-selected_ad_account-resolver")
                    .selected_ad_account,
                  rootFragment: null,
                },
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
                    modelResolvers: _,
                    backingField: {
                      name: "combined_campaign_groups",
                      args: a,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                      resolverInfo: {
                        resolverFunction: n("ClientAdAccount-resolvers")
                          .combined_campaign_groups,
                        rootFragment: null,
                      },
                    },
                    linkedField: {
                      alias: null,
                      args: a,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          modelResolvers: _,
                          backingField: {
                            name: "source_object",
                            args: null,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                            resolverInfo: {
                              resolverFunction: n(
                                "CombinedCampaignGroup-resolvers",
                              ).source_object,
                              rootFragment: null,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                name: "publish_status",
                                args: null,
                                kind: "RelayLiveResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n(
                                    "CombinedCampaignGroup-publish_status-resolver",
                                  ).publish_status,
                                  rootFragment: null,
                                },
                              },
                              f,
                            ],
                            storageKey: null,
                          },
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    modelResolvers: g,
                    backingField: {
                      name: "combined_campaigns",
                      args: u,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                      resolverInfo: {
                        resolverFunction: n("ClientAdAccount-resolvers")
                          .combined_campaigns,
                        rootFragment: null,
                      },
                    },
                    linkedField: {
                      alias: null,
                      args: u,
                      concreteType: "CombinedCampaign",
                      kind: "LinkedField",
                      name: "combined_campaigns",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          modelResolvers: g,
                          backingField: {
                            name: "source_object",
                            args: null,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                            resolverInfo: {
                              resolverFunction: n("CombinedCampaign-resolvers")
                                .source_object,
                              rootFragment: null,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaign",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                name: "publish_status",
                                args: null,
                                kind: "RelayLiveResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n(
                                    "CombinedCampaign-publish_status-resolver",
                                  ).publish_status,
                                  rootFragment: null,
                                },
                              },
                              f,
                            ],
                            storageKey: null,
                          },
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    modelResolvers: h,
                    backingField: {
                      name: "combined_adgroups",
                      args: m,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                      resolverInfo: {
                        resolverFunction: n("ClientAdAccount-resolvers")
                          .combined_adgroups,
                        rootFragment: null,
                      },
                    },
                    linkedField: {
                      alias: null,
                      args: m,
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
                      plural: !0,
                      selections: [
                        {
                          kind: "ClientEdgeToClientObject",
                          modelResolvers: h,
                          backingField: {
                            name: "source_object",
                            args: null,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                            resolverInfo: {
                              resolverFunction: n("CombinedAdgroup-resolvers")
                                .source_object,
                              rootFragment: null,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedAdgroup",
                            kind: "LinkedField",
                            name: "source_object",
                            plural: !1,
                            selections: [
                              {
                                name: "publish_status",
                                args: null,
                                kind: "RelayLiveResolver",
                                storageKey: null,
                                isOutputType: !0,
                                resolverInfo: {
                                  resolverFunction: n(
                                    "CombinedAdgroup-publish_status-resolver",
                                  ).publish_status,
                                  rootFragment: null,
                                },
                              },
                              f,
                            ],
                            storageKey: null,
                          },
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  },
                  f,
                ],
                storageKey: null,
              },
            },
          ],
          use_exec_time_resolvers: !0,
        },
        params: {
          cacheID: "1b066b7607c226adea92e159dc993d0a",
          id: null,
          metadata: {},
          name: "AdsGuidanceActionsInsightsContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    ((e.params.metadata.operation = e.operation), (a.exports = e));
  },
  null,
);
