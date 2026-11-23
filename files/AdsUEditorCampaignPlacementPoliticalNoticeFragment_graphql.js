__d(
  "AdsUEditorCampaignPlacementPoliticalNoticeFragment.graphql",
  [
    "relay-runtime/experimental",
    "RelayEverywhere__id.graphql",
    "RelayEverywhere-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaignRelayEverywhere",
    "relay-runtime/experimental",
    "UEditorCampaignNamespace__id.graphql",
    "RelayEverywhereUEditorCampaign-resolvers",
    "relay-runtime/experimental",
    "RelayEverywhere____relay_model_instance.graphql",
    "RelayEverywhereUEditorCampaign-resolvers",
    "relay-runtime/experimental",
    "UEditorCampaignNamespace____relay_model_instance.graphql",
    "re-adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        { kind: "Variable", name: "contextKey", variableName: "contextKey" },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "contextKey" }],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, plural: !0, throwOnFieldError: !0 },
        name: "AdsUEditorCampaignPlacementPoliticalNoticeFragment",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePlacementValue_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useEligibilityInformationRelaySelector_fragment",
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "RelayEverywhere",
            modelResolvers: {
              RelayEverywhere: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "RelayEverywhere__id",
                },
                kind: "RelayLiveResolver",
                name: "__relay_model_instance",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("RelayEverywhere__id.graphql"),
                  n("RelayEverywhere-resolvers").RelayEverywhere,
                  "id",
                  !0,
                ),
                path: "relay_everywhere.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "CombinedCampaign____relay_model_instance",
              },
              kind: "RelayResolver",
              name: "relay_everywhere",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("CombinedCampaign____relay_model_instance.graphql"),
                n("CombinedCampaignRelayEverywhere").relay_everywhere,
                "__relay_model_instance",
                !0,
              ),
              path: "relay_everywhere",
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
                  concreteType: "UEditorCampaignNamespace",
                  modelResolvers: {
                    UEditorCampaignNamespace: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "UEditorCampaignNamespace__id",
                      },
                      kind: "RelayLiveResolver",
                      name: "__relay_model_instance",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("UEditorCampaignNamespace__id.graphql"),
                        n("RelayEverywhereUEditorCampaign-resolvers")
                          .UEditorCampaignNamespace,
                        "id",
                        !0,
                      ),
                      path: "relay_everywhere.ueditor_campaign.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: e,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RelayEverywhere____relay_model_instance",
                    },
                    kind: "RelayResolver",
                    name: "ueditor_campaign",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("RelayEverywhere____relay_model_instance.graphql"),
                      n("RelayEverywhereUEditorCampaign-resolvers")
                        .ueditor_campaign,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "relay_everywhere.ueditor_campaign",
                  },
                  linkedField: {
                    alias: null,
                    args: e,
                    concreteType: "UEditorCampaignNamespace",
                    kind: "LinkedField",
                    name: "ueditor_campaign",
                    plural: !1,
                    selections: [
                      {
                        kind: "CatchField",
                        field: {
                          alias: null,
                          args: [],
                          fragment: {
                            args: null,
                            kind: "FragmentSpread",
                            name: "UEditorCampaignNamespace____relay_model_instance",
                          },
                          kind: "RelayLiveResolver",
                          name: "regulated_categories_selector",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "UEditorCampaignNamespace____relay_model_instance.graphql",
                            ),
                            n(
                              "re-adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
                            ).regulated_categories_selector,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "relay_everywhere.ueditor_campaign.regulated_categories_selector",
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
          },
        ],
        type: "CombinedCampaign",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
