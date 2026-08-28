__d(
  "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery.graphql",
  ["Adgroup-ad_object_spec-tier3-resolver", "relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "adgroups_ids",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "node_id",
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            t,
          ],
          type: "Node",
          abstractKey: "__isNode",
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBAdsUI",
              kind: "LinkedField",
              name: "xfb_ads_ui_root",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdgroupsContext",
                  kind: "LinkedField",
                  name: "adgroups_live_data_query_context",
                  plural: !1,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdgroupsUIData",
                      kind: "LinkedField",
                      name: "adgroups",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Adgroup",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              kind: "InlineDataFragmentSpread",
                              name: "L1LiveThreeTiersReverseInteropStoreSourceNodeFragment",
                              selections: [r],
                              args: null,
                              argumentDefinitions: [],
                            },
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
                              resolverModule: n(
                                "Adgroup-ad_object_spec-tier3-resolver",
                              ).adgroup_spec_tier3,
                              path: "xfb_ads_ui_root.adgroups_live_data_query_context.adgroups.nodes.adgroup_spec_tier3",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBAdsUI",
              kind: "LinkedField",
              name: "xfb_ads_ui_root",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdgroupsContext",
                  kind: "LinkedField",
                  name: "adgroups_live_data_query_context",
                  plural: !1,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdgroupsUIData",
                      kind: "LinkedField",
                      name: "adgroups",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Adgroup",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            r,
                            {
                              name: "adgroup_spec_tier3",
                              args: null,
                              fragment: {
                                kind: "InlineFragment",
                                selections: [
                                  t,
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
                                  o,
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
                            o,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24808282948853403",
          metadata: {},
          name: "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery",
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
