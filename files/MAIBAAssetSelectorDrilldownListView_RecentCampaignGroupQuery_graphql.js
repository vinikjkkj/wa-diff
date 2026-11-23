__d(
  "MAIBAAssetSelectorDrilldownListView_RecentCampaignGroupQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        ],
        t = { vultureHash: "dnuVcgdhYe7koff-_X3bjLYqDDM=" },
        n = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        r = [
          { kind: "Literal", name: "first", value: 10 },
          { kind: "Literal", name: "orderby", value: ["newest_updated_time"] },
        ],
        o = {
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
          metadata: t,
          name: "MAIBAAssetSelectorDrilldownListView_RecentCampaignGroupQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAAssetDataUtils_RecentCampaignsFragment",
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
          name: "MAIBAAssetSelectorDrilldownListView_RecentCampaignGroupQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: "campaign_groups",
                  args: r,
                  concreteType: "AdAccountAdCampaignGroupsConnection",
                  kind: "LinkedField",
                  name: "ad_campaign_groups",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdAccountAdCampaignGroupsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdCampaignGroup",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            o,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "__typename",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageInfo",
                      kind: "LinkedField",
                      name: "page_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "has_next_page",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'ad_campaign_groups(first:10,orderby:["newest_updated_time"])',
                },
                {
                  alias: "campaign_groups",
                  args: r,
                  filters: ["orderby"],
                  handle: "connection",
                  key: "MAIBAAssetDataUtils_RecentCampaignsFragment_campaign_groups",
                  kind: "LinkedHandle",
                  name: "ad_campaign_groups",
                },
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26307538495590557",
          metadata: t,
          name: "MAIBAAssetSelectorDrilldownListView_RecentCampaignGroupQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
