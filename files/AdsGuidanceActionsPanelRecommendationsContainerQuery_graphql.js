__d(
  "AdsGuidanceActionsPanelRecommendationsContainerQuery.graphql",
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
        t = [e];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsGuidanceActionsPanelRecommendationsContainerQuery",
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
                    args: null,
                    kind: "FragmentSpread",
                    name: "AdsGuidanceActionPanelRecommendationInstanceWrapper_adAccount",
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsGuidanceActionsPanelRecommendationsContainerQuery",
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
                      fragment: {
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
                      },
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
                  e,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "1c12d0d592c48d5a95638bdec6ba162d",
          id: null,
          metadata: {},
          name: "AdsGuidanceActionsPanelRecommendationsContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
