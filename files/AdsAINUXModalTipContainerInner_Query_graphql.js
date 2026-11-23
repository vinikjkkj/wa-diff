__d(
  "AdsAINUXModalTipContainerInner_Query.graphql",
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
          name: "AdsAINUXModalTipContainerInner_Query",
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
                    name: "useIsOnTableSurfaceSelectorFragment",
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
          name: "AdsAINUXModalTipContainerInner_Query",
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
                            backingField: {
                              name: "ad_account_client_edges",
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
                              concreteType: "ClientAdAccountClientEdges",
                              kind: "LinkedField",
                              name: "ad_account_client_edges",
                              plural: !1,
                              selections: [
                                {
                                  kind: "ClientEdgeToClientObject",
                                  backingField: {
                                    name: "ads_mgmt_open_tray",
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
                                            type: "ClientAdAccountClientEdges",
                                            abstractKey: null,
                                          },
                                          kind: "RelayResolver",
                                          storageKey: null,
                                          isOutputType: !1,
                                        },
                                      ],
                                      type: "ClientAdAccountClientEdges",
                                      abstractKey: null,
                                    },
                                    kind: "RelayResolver",
                                    storageKey: null,
                                    isOutputType: !1,
                                  },
                                  linkedField: {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdsMgmtOpenTray",
                                    kind: "LinkedField",
                                    name: "ads_mgmt_open_tray",
                                    plural: !1,
                                    selections: [
                                      {
                                        name: "open_tray",
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
                                                type: "AdsMgmtOpenTray",
                                                abstractKey: null,
                                              },
                                              kind: "RelayResolver",
                                              storageKey: null,
                                              isOutputType: !1,
                                            },
                                          ],
                                          type: "AdsMgmtOpenTray",
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
          cacheID: "d62868d18e903e20779e19034d3cf0e0",
          id: null,
          metadata: {},
          name: "AdsAINUXModalTipContainerInner_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
