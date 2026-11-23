__d(
  "AdsAdvantagePlacementRecommendationFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-business_constraints_account_control_info-resolver",
    "relay-runtime/experimental",
    "ClientAdAccountAccountControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountAccountControlInfoData-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccountPlacementControlInfoData____relay_model_instance.graphql",
    "ClientAdAccountPlacementControlInfoData-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign__id.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdAccount____relay_model_instance",
        },
        t = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "selected_campaign_relay_ids",
          },
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "selected_campaign_relay_ids" },
        ],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
        name: "AdsAdvantagePlacementRecommendationFragment",
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
                fragment: e,
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
                path: "override_business_constraints_account_control_info",
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
                    concreteType: "ClientAdAccountPlacementControlInfoData",
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
                        n("ClientAdAccountAccountControlInfoData-resolvers")
                          .placement_controls,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "override_business_constraints_account_control_info.placement_controls",
                      normalizationInfo: {
                        kind: "WeakModel",
                        concreteType: "ClientAdAccountPlacementControlInfoData",
                        plural: !1,
                      },
                    },
                    linkedField: {
                      alias: null,
                      args: null,
                      concreteType: "ClientAdAccountPlacementControlInfoData",
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
                          path: "override_business_constraints_account_control_info.placement_controls.placement_exclusions",
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
              args: t,
              fragment: e,
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
              args: t,
              concreteType: "CombinedCampaign",
              kind: "LinkedField",
              name: "combined_campaigns",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useEligibilityInformationRelaySelector_fragment",
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
