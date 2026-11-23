__d(
  "AdsBulkEditChangeTotalBudgetSectionContainerImplQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
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
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        r = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "campaignGroupRelayIDs",
          },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = [o],
        i = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: a,
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsBulkEditChangeTotalBudgetSectionContainerImplQuery",
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
                    alias: "currency",
                    args: null,
                    fragment: t,
                    kind: "RelayResolver",
                    name: "override_currency",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("ClientAdAccount____relay_model_instance.graphql"),
                      n("ClientAdAccount-resolvers").override_currency,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "selected_ad_account.currency",
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
                      args: r,
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
                      path: "selected_ad_account.combined_campaign_groups",
                    },
                    linkedField: {
                      alias: null,
                      args: r,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          fragment: {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CombinedCampaignGroup____relay_model_instance",
                          },
                          kind: "RelayResolver",
                          name: "ad_object_id",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaignGroup____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaignGroup-resolvers").ad_object_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaign_groups.ad_object_id",
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
          name: "AdsBulkEditChangeTotalBudgetSectionContainerImplQuery",
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
                    name: "override_currency",
                    args: null,
                    fragment: i,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_campaign_groups",
                      args: r,
                      fragment: i,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                    },
                    linkedField: {
                      alias: null,
                      args: r,
                      concreteType: "CombinedCampaignGroup",
                      kind: "LinkedField",
                      name: "combined_campaign_groups",
                      plural: !0,
                      selections: [
                        {
                          name: "ad_object_id",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [
                              {
                                name: "__relay_model_instance",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: a,
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
                          storageKey: null,
                          isOutputType: !0,
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                  },
                  o,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "99402fe489d2125dc26ff986c8c532f4",
          id: null,
          metadata: {},
          name: "AdsBulkEditChangeTotalBudgetSectionContainerImplQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
