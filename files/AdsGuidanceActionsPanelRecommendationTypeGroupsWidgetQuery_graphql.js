__d(
  "AdsGuidanceActionsPanelRecommendationTypeGroupsWidgetQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [e],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: t,
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "AdsGuidanceActionsPanelRecommendationTypeGroupsWidgetQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdsGuidanceActionsPanelRecommendationTypeGroupContainerWrapper_adAccount",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdsSYDAutoApplyRecommendationsWidgetWrapper_fragment",
                    },
                  ],
                  storageKey: null,
                },
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsGuidanceActionsPanelRecommendationTypeGroupsWidgetQuery",
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
                      name: "relay_everywhere",
                      args: null,
                      fragment: r,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
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
                          backingField: {
                            name: "ad_account",
                            args: null,
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  name: "__relay_model_instance",
                                  args: null,
                                  fragment: {
                                    kind: "InlineFragment",
                                    selections: t,
                                    type: "RelayEverywhere",
                                    abstractKey: null,
                                  },
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !1,
                                },
                              ],
                              type: "RelayEverywhere",
                              abstractKey: null,
                            },
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
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
                                name: "ads_mgmt_guidance_engine_recommendations_urc_selector",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      name: "__relay_model_instance",
                                      args: null,
                                      fragment: {
                                        kind: "InlineFragment",
                                        selections: t,
                                        type: "AdAccountNamespace",
                                        abstractKey: null,
                                      },
                                      kind: "RelayResolver",
                                      storageKey: null,
                                      isOutputType: !1,
                                    },
                                  ],
                                  type: "AdAccountNamespace",
                                  abstractKey: null,
                                },
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              e,
                            ],
                            storageKey: null,
                          },
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    name: "account_id",
                    args: null,
                    fragment: r,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    name: "override_segment",
                    args: null,
                    fragment: r,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "viewer_permissions",
                      args: null,
                      fragment: r,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !0,
                    },
                    linkedField: {
                      alias: null,
                      args: null,
                      concreteType: "ClientAdAccountPermissions",
                      kind: "LinkedField",
                      name: "viewer_permissions",
                      plural: !1,
                      selections: [
                        {
                          name: "write",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__relay_model_instance",
                                storageKey: null,
                              },
                            ],
                            type: "ClientAdAccountPermissions",
                            abstractKey: null,
                          },
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "override_ads_business",
                      args: null,
                      fragment: r,
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                    },
                    linkedField: {
                      alias: "business_id",
                      args: null,
                      concreteType: "ClientAdBusiness",
                      kind: "LinkedField",
                      name: "override_ads_business",
                      plural: !1,
                      selections: t,
                      storageKey: null,
                    },
                  },
                  e,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "e4ca242cbb2573288421a7b384de44ed",
          id: null,
          metadata: {},
          name: "AdsGuidanceActionsPanelRecommendationTypeGroupsWidgetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
