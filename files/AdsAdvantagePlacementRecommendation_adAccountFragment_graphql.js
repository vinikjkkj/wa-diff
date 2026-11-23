__d(
  "AdsAdvantagePlacementRecommendation_adAccountFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "AdAccountClientEdges-client_ad_account-resolver",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-business_constraints_account_control_info-resolver",
    "relay-runtime/experimental",
    "ClientAdAccountAccountControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountAccountControlInfoData-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccountPlacementControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountPlacementControlInfoData-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
      name: "AdsAdvantagePlacementRecommendation_adAccountFragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "AdAccountClientEdges",
          kind: "LinkedField",
          name: "ad_account_client_edges",
          plural: !1,
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
                  path: "ad_account_client_edges.client_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AdAccountClientEdgesClientAdAccountResolver_account",
                },
                kind: "RelayResolver",
                name: "client_ad_account",
                resolverModule: n(
                  "AdAccountClientEdges-client_ad_account-resolver",
                ).client_ad_account,
                path: "ad_account_client_edges.client_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "client_ad_account",
                plural: !1,
                selections: [
                  {
                    kind: "CatchField",
                    field: {
                      kind: "ClientEdgeToClientObject",
                      concreteType: "ClientAdAccountAccountControlInfoData",
                      modelResolvers: null,
                      serverObjectOperations: null,
                      backingField: {
                        alias: null,
                        args: null,
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ClientAdAccount____relay_model_instance",
                        },
                        kind: "RelayLiveResolver",
                        name: "override_business_constraints_account_control_info",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("ClientAdAccount____relay_model_instance.graphql"),
                          n(
                            "ClientAdAccount-business_constraints_account_control_info-resolver",
                          ).override_business_constraints_account_control_info,
                          "__relay_model_instance",
                          !0,
                        ),
                        path: "ad_account_client_edges.client_ad_account.override_business_constraints_account_control_info",
                        normalizationInfo: {
                          kind: "WeakModel",
                          concreteType: "ClientAdAccountAccountControlInfoData",
                          plural: !1,
                        },
                      },
                      linkedField: {
                        alias: null,
                        args: null,
                        concreteType: "ClientAdAccountAccountControlInfoData",
                        kind: "LinkedField",
                        name: "override_business_constraints_account_control_info",
                        plural: !1,
                        selections: [
                          {
                            kind: "ClientEdgeToClientObject",
                            concreteType:
                              "ClientAdAccountPlacementControlInfoData",
                            modelResolvers: null,
                            serverObjectOperations: null,
                            backingField: {
                              alias: null,
                              args: null,
                              fragment: {
                                args: null,
                                kind: "FragmentSpread",
                                name: "ClientAdAccountAccountControlInfoData____relay_model_instance",
                              },
                              kind: "RelayResolver",
                              name: "placement_controls",
                              resolverModule: n(
                                "relay-runtime/experimental",
                              ).resolverDataInjector(
                                n(
                                  "ClientAdAccountAccountControlInfoData____relay_model_instance.graphql",
                                ),
                                n(
                                  "ClientAdAccountAccountControlInfoData-resolvers",
                                ).placement_controls,
                                "__relay_model_instance",
                                !0,
                              ),
                              path: "ad_account_client_edges.client_ad_account.override_business_constraints_account_control_info.placement_controls",
                              normalizationInfo: {
                                kind: "WeakModel",
                                concreteType:
                                  "ClientAdAccountPlacementControlInfoData",
                                plural: !1,
                              },
                            },
                            linkedField: {
                              alias: null,
                              args: null,
                              concreteType:
                                "ClientAdAccountPlacementControlInfoData",
                              kind: "LinkedField",
                              name: "placement_controls",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  fragment: {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "ClientAdAccountPlacementControlInfoData____relay_model_instance",
                                  },
                                  kind: "RelayResolver",
                                  name: "placement_exclusions",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "ClientAdAccountPlacementControlInfoData____relay_model_instance.graphql",
                                    ),
                                    n(
                                      "ClientAdAccountPlacementControlInfoData-resolvers",
                                    ).placement_exclusions,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "ad_account_client_edges.client_ad_account.override_business_constraints_account_control_info.placement_controls.placement_exclusions",
                                },
                              ],
                              storageKey: null,
                            },
                          },
                        ],
                        storageKey: null,
                      },
                    },
                    to: "NULL",
                  },
                ],
                storageKey: null,
              },
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
