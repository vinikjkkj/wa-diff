__d(
  "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery.graphql",
  ["Adgroup-ad_object_spec-tier3-resolver", "relay-runtime"],
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
          name: "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery",
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
                  name: "L1LiveThreeTiersReverseInteropStoreSourceNodeFragment",
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
                        name: "AdgroupAdObjectSpecTier3Resolver",
                      },
                      kind: "RelayResolver",
                      name: "adgroup_spec_tier3",
                      resolverModule: n("Adgroup-ad_object_spec-tier3-resolver")
                        .adgroup_spec_tier3,
                      path: "nodes.adgroup_spec_tier3",
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
          name: "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery",
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
                      name: "adgroup_spec_tier3",
                      args: null,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          o,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ad_campaign_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ad_campaign_group_id",
                            storageKey: null,
                          },
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
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
          id: "26014640568138937",
          metadata: {},
          name: "L1LiveThreeTiersReverseInteropStoreSourceTier3ServerQuery",
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
