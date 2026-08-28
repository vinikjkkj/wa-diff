__d(
  "AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery.graphql",
  ["Adgroup-dynamic_ad_object_spec_tier2-resolver", "relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        t = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        r = {
          alias: "node_id",
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineDataFragmentSpread",
                  name: "AdsMgmtAdgroupDynamicStoreSourceTypeCheckFragment",
                  selections: [r, o],
                  args: null,
                  argumentDefinitions: [],
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AdgroupDynamicAdObjectSpecTier2Resolver",
                      },
                      kind: "RelayResolver",
                      name: "dynamic_ad_object_spec_tier2",
                      resolverModule: n(
                        "Adgroup-dynamic_ad_object_spec_tier2-resolver",
                      ).dynamic_ad_object_spec_tier2,
                      path: "nodes.dynamic_ad_object_spec_tier2",
                    },
                  ],
                  type: "Adgroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                o,
                { kind: "TypeDiscriminator", abstractKey: "__isNode" },
                r,
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      name: "dynamic_ad_object_spec_tier2",
                      args: null,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          o,
                          a,
                          {
                            alias: null,
                            args: null,
                            concreteType: "AdsAPIActiveIssuesInfoApiResultGQL",
                            kind: "LinkedField",
                            name: "issues_info",
                            plural: !0,
                            selections: [
                              {
                                name: "ad_issues_info_spec",
                                args: null,
                                fragment: {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "additional_info",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "error_code",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "error_message",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "error_summary",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "error_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "level",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "mid",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "AdsAPIActiveIssuesInfoApiResultGQL",
                                  abstractKey: null,
                                },
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: "Adgroup",
                        abstractKey: null,
                      },
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !0,
                    },
                  ],
                  type: "Adgroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "25231803976489385",
          metadata: {},
          name: "AdsMgmtAdgroupDynamicStoreSourceTier2ServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
