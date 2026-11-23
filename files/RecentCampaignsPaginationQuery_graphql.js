__d(
  "RecentCampaignsPaginationQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: 10, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "id" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Literal", name: "orderby", value: ["newest_updated_time"] },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "RecentCampaignsPaginationQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
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
          name: "RecentCampaignsPaginationQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                n,
                r,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "campaign_groups",
                      args: o,
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
                                r,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "name",
                                  storageKey: null,
                                },
                                n,
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
                      storageKey: null,
                    },
                    {
                      alias: "campaign_groups",
                      args: o,
                      filters: ["orderby"],
                      handle: "connection",
                      key: "MAIBAAssetDataUtils_RecentCampaignsFragment_campaign_groups",
                      kind: "LinkedHandle",
                      name: "ad_campaign_groups",
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26493516783581452",
          metadata: {},
          name: "RecentCampaignsPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
