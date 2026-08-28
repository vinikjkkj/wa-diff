__d(
  "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery.graphql",
  ["Adgroup-dynamic_ad_object_spec_tier3_v2-resolver", "relay-runtime"],
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
          name: "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery",
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
                        name: "AdgroupDynamicAdObjectSpecTier3V2Resolver",
                      },
                      kind: "RelayResolver",
                      name: "dynamic_ad_object_spec_tier3_v2",
                      resolverModule: n(
                        "Adgroup-dynamic_ad_object_spec_tier3_v2-resolver",
                      ).dynamic_ad_object_spec_tier3_v2,
                      path: "nodes.dynamic_ad_object_spec_tier3_v2",
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
          name: "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery",
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
                      name: "dynamic_ad_object_spec_tier3_v2",
                      args: null,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          o,
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "preview_link",
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
          id: "25292893057043594",
          metadata: {},
          name: "AdsMgmtAdgroupDynamicStoreSourceTier3V2ServerQuery",
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
