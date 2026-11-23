__d(
  "AdsUEditorAdgroupMessageDestinationPreviewContainerQuery.graphql",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [r],
        a = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: o,
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
        i = {
          name: "combined_campaigns",
          args: t,
          fragment: a,
          kind: "RelayResolver",
          storageKey: null,
          isOutputType: !1,
        },
        l = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: o,
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
        s = {
          name: "combined_campaign_group",
          args: null,
          fragment: l,
          kind: "RelayResolver",
          storageKey: null,
          isOutputType: !1,
        },
        u = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: o,
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
        c = {
          name: "objective",
          args: null,
          fragment: u,
          kind: "RelayResolver",
          storageKey: null,
          isOutputType: !0,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerQuery",
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
                          args: null,
                          kind: "FragmentSpread",
                          name: "AdsUEditorAdgroupMessageDestinationGeneralPreviewSection_Fragment",
                        },
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector_Fragment",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "AdsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDAndromedaShadowValidation_Fragment",
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
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerQuery",
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
                    backingField: i,
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
                          backingField: s,
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "combined_campaign_group",
                            plural: !1,
                            selections: [
                              {
                                name: "is_odax_campaign_group",
                                args: null,
                                fragment: u,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              c,
                              r,
                            ],
                            storageKey: null,
                          },
                        },
                        {
                          name: "destination_type",
                          args: null,
                          fragment: l,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: s,
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "combined_campaign_group",
                            plural: !1,
                            selections: [c, r],
                            storageKey: null,
                          },
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: s,
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "combined_campaign_group",
                            plural: !1,
                            selections: [
                              {
                                name: "boosted_component_product",
                                args: null,
                                fragment: u,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              r,
                            ],
                            storageKey: null,
                          },
                        },
                        {
                          name: "publish_status",
                          args: null,
                          fragment: l,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        r,
                      ],
                      storageKey: null,
                    },
                  },
                  {
                    name: "business",
                    args: null,
                    fragment: a,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: i,
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
                            name: "promoted_object",
                            args: null,
                            fragment: l,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !0,
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "CombinedCampaignPromotedObject",
                            kind: "LinkedField",
                            name: "promoted_object",
                            plural: !1,
                            selections: [
                              {
                                name: "whats_app_business_phone_number_id",
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
                                  type: "CombinedCampaignPromotedObject",
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
                        r,
                      ],
                      storageKey: null,
                    },
                  },
                  r,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "770b4b0b130bc2dc306b66be1532651f",
          id: null,
          metadata: {},
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
