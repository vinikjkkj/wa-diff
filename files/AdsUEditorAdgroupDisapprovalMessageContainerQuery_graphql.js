__d(
  "AdsUEditorAdgroupDisapprovalMessageContainerQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "RelayEverywhere__id.graphql",
    "RelayEverywhere-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAccountRelayEverywhere",
    "relay-runtime/experimental",
    "UEditorAdgroupNamespace__id.graphql",
    "RelayEverywhereUEditorAdgroup-resolvers",
    "relay-runtime/experimental",
    "RelayEverywhere____relay_model_instance.graphql",
    "RelayEverywhereUEditorAdgroup-resolvers",
    "relay-runtime/experimental",
    "UEditorAdgroupNamespace____relay_model_instance.graphql",
    "re-adsUEditorAdgroupDisapprovalMessageBaseSelector",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "contextKey" },
        ],
        t = [
          { kind: "Variable", name: "contextKey", variableName: "contextKey" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [r];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsUEditorAdgroupDisapprovalMessageContainerQuery",
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
                    !0,
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
                        path: "selected_ad_account.relay_everywhere.__relay_model_instance",
                      },
                    },
                    serverObjectOperations: null,
                    backingField: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ClientAdAccount____relay_model_instance",
                      },
                      kind: "RelayResolver",
                      name: "relay_everywhere",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAccountRelayEverywhere").relay_everywhere,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "selected_ad_account.relay_everywhere",
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
                          concreteType: "UEditorAdgroupNamespace",
                          modelResolvers: {
                            UEditorAdgroupNamespace: {
                              alias: null,
                              args: null,
                              fragment: {
                                args: null,
                                kind: "FragmentSpread",
                                name: "UEditorAdgroupNamespace__id",
                              },
                              kind: "RelayLiveResolver",
                              name: "__relay_model_instance",
                              resolverModule: n(
                                "relay-runtime/experimental",
                              ).resolverDataInjector(
                                n("UEditorAdgroupNamespace__id.graphql"),
                                n("RelayEverywhereUEditorAdgroup-resolvers")
                                  .UEditorAdgroupNamespace,
                                "id",
                                !0,
                              ),
                              path: "selected_ad_account.relay_everywhere.ueditor_adgroup.__relay_model_instance",
                            },
                          },
                          serverObjectOperations: null,
                          backingField: {
                            alias: null,
                            args: t,
                            fragment: {
                              args: null,
                              kind: "FragmentSpread",
                              name: "RelayEverywhere____relay_model_instance",
                            },
                            kind: "RelayResolver",
                            name: "ueditor_adgroup",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "RelayEverywhere____relay_model_instance.graphql",
                              ),
                              n("RelayEverywhereUEditorAdgroup-resolvers")
                                .ueditor_adgroup,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.relay_everywhere.ueditor_adgroup",
                          },
                          linkedField: {
                            alias: null,
                            args: t,
                            concreteType: "UEditorAdgroupNamespace",
                            kind: "LinkedField",
                            name: "ueditor_adgroup",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                fragment: {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "UEditorAdgroupNamespace____relay_model_instance",
                                },
                                kind: "RelayLiveResolver",
                                name: "adgroup_disapproval_message_base_selector",
                                resolverModule: n(
                                  "relay-runtime/experimental",
                                ).resolverDataInjector(
                                  n(
                                    "UEditorAdgroupNamespace____relay_model_instance.graphql",
                                  ),
                                  n(
                                    "re-adsUEditorAdgroupDisapprovalMessageBaseSelector",
                                  ).adgroup_disapproval_message_base_selector,
                                  "__relay_model_instance",
                                  !0,
                                ),
                                path: "selected_ad_account.relay_everywhere.ueditor_adgroup.adgroup_disapproval_message_base_selector",
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsUEditorAdgroupDisapprovalMessageContainerQuery",
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
                            name: "ueditor_adgroup",
                            args: t,
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  name: "__relay_model_instance",
                                  args: null,
                                  fragment: {
                                    kind: "InlineFragment",
                                    selections: o,
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
                            args: t,
                            concreteType: "UEditorAdgroupNamespace",
                            kind: "LinkedField",
                            name: "ueditor_adgroup",
                            plural: !1,
                            selections: [
                              {
                                name: "adgroup_disapproval_message_base_selector",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      name: "__relay_model_instance",
                                      args: null,
                                      fragment: {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "UEditorAdgroupNamespace",
                                        abstractKey: null,
                                      },
                                      kind: "RelayResolver",
                                      storageKey: null,
                                      isOutputType: !1,
                                    },
                                  ],
                                  type: "UEditorAdgroupNamespace",
                                  abstractKey: null,
                                },
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
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
                  r,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "15386a14bb08e1b9cd4b63c22282db9f",
          id: null,
          metadata: {},
          name: "AdsUEditorAdgroupDisapprovalMessageContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
