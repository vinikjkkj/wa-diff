__d(
  "MAIBACreationStepsSectionHeaderTitleIsInEditingQuery.graphql",
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
        o = {
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
        a = {
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
        i = {
          name: "campaign_structure_pfr_campaign_group_ids_selector",
          args: null,
          fragment: a,
          kind: "RelayResolver",
          storageKey: null,
          isOutputType: !0,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "MAIBACreationStepsSectionHeaderTitleIsInEditingQuery",
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
                    name: "useIsInEditingFragment",
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
          name: "MAIBACreationStepsSectionHeaderTitleIsInEditingQuery",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            kind: "ClientEdgeToClientObject",
                            backingField: r,
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
                                  backingField: o,
                                  linkedField: {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdAccountNamespace",
                                    kind: "LinkedField",
                                    name: "ad_account",
                                    plural: !1,
                                    selections: [i, e],
                                    storageKey: null,
                                  },
                                },
                                e,
                              ],
                              storageKey: null,
                            },
                          },
                          {
                            kind: "ClientEdgeToClientObject",
                            backingField: r,
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
                                  backingField: o,
                                  linkedField: {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdAccountNamespace",
                                    kind: "LinkedField",
                                    name: "ad_account",
                                    plural: !1,
                                    selections: [
                                      {
                                        name: "ads_draft_fragment_groups_selector",
                                        args: null,
                                        fragment: a,
                                        kind: "RelayResolver",
                                        storageKey: null,
                                        isOutputType: !0,
                                      },
                                      i,
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
                        type: "ClientAdAccount",
                        abstractKey: null,
                      },
                    ],
                    type: "IAdAccount",
                    abstractKey: "__isIAdAccount",
                  },
                  e,
                ],
                storageKey: null,
              },
            },
          ],
          clientAbstractTypes: {
            __isIAdAccount: ["AdAccount", "ClientAdAccount"],
          },
        },
        params: {
          cacheID: "7fffad42a21859eb2a9ae4eee7fe1acf",
          id: null,
          metadata: {},
          name: "MAIBACreationStepsSectionHeaderTitleIsInEditingQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
