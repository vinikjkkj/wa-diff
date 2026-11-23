__d(
  "InspectSidePanelExplanationCardContentQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "adgroupRelayIDs",
          },
        ],
        t = [
          { kind: "Variable", name: "ids", variableName: "adgroupRelayIDs" },
        ],
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedAdgroup____relay_model_instance",
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
                type: "CombinedAdgroup",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "CombinedAdgroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "InspectSidePanelExplanationCardContentQuery",
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
                  path: "ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: "ad_account",
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "ad_account",
              },
              linkedField: {
                alias: "ad_account",
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    kind: "ClientEdgeToClientObject",
                    concreteType: "CombinedAdgroup",
                    modelResolvers: {
                      CombinedAdgroup: {
                        alias: null,
                        args: null,
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CombinedAdgroup__id",
                        },
                        kind: "RelayLiveResolver",
                        name: "__relay_model_instance",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("CombinedAdgroup__id.graphql"),
                          n("CombinedAdgroup-resolvers").CombinedAdgroup,
                          "id",
                          !0,
                        ),
                        path: "ad_account.combined_adgroups.__relay_model_instance",
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
                      name: "combined_adgroups",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAdAccount-resolvers").combined_adgroups,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "ad_account.combined_adgroups",
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
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
                              "CombinedAdgroup____relay_model_instance.graphql",
                            ),
                            n("CombinedAdgroup-resolvers").ad_object_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "ad_account.combined_adgroups.ad_object_id",
                        },
                        {
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "name",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedAdgroup____relay_model_instance.graphql",
                            ),
                            n("CombinedAdgroup-resolvers").name,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "ad_account.combined_adgroups.name",
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
          name: "InspectSidePanelExplanationCardContentQuery",
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
                alias: "ad_account",
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_adgroups",
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
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
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
                          name: "name",
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
          cacheID: "29fc6e33199cb3db4bf33566f35724a3",
          id: null,
          metadata: {},
          name: "InspectSidePanelExplanationCardContentQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
