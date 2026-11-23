__d(
  "CTXLeadDefinitionL2BulkEditContainerImpl_Query.graphql",
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
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaign____relay_model_instance.graphql",
    "CombinedCampaign-resolvers",
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
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedCampaign____relay_model_instance",
        },
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
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "CTXLeadDefinitionL2BulkEditContainerImpl_Query",
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
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "ad_object_id",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaign____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaign-resolvers").ad_object_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaigns.ad_object_id",
                        },
                        {
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "messaging_structured_lead_spec",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaign____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaign-resolvers")
                              .messaging_structured_lead_spec,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaigns.messaging_structured_lead_spec",
                        },
                        {
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "messaging_structured_lead_template_id",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedCampaign____relay_model_instance.graphql",
                            ),
                            n("CombinedCampaign-resolvers")
                              .messaging_structured_lead_template_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_campaigns.messaging_structured_lead_template_id",
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
          name: "CTXLeadDefinitionL2BulkEditContainerImpl_Query",
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
                          name: "ad_object_id",
                          args: null,
                          fragment: i,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          name: "messaging_structured_lead_spec",
                          args: null,
                          fragment: i,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          name: "messaging_structured_lead_template_id",
                          args: null,
                          fragment: i,
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
          cacheID: "787291a3896ceaf724d7af626d3717d5",
          id: null,
          metadata: {},
          name: "CTXLeadDefinitionL2BulkEditContainerImpl_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
