__d(
  "MAIBAAssetSelectorDrilldownListView_CampaignQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupID",
          },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignGroupID" }],
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
        o = [{ kind: "Literal", name: "first", value: 10 }];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAssetSelectorDrilldownListView_CampaignQuery",
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
                  kind: "InlineFragment",
                  selections: [
                    {
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MAIBAAssetDataUtils_CampaignGroupDrilldownFragment",
                          },
                        ],
                        type: "AdCampaignGroup",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "campaign_group",
                    },
                  ],
                  type: "AdCampaignGroup",
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
          name: "MAIBAAssetSelectorDrilldownListView_CampaignQuery",
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
                      alias: "campaigns",
                      args: o,
                      concreteType: "AdCampaignGroupAdCampaignsConnection",
                      kind: "LinkedField",
                      name: "ad_campaigns",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdCampaignGroupAdCampaignsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AdCampaign",
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
                      storageKey: "ad_campaigns(first:10)",
                    },
                    {
                      alias: "campaigns",
                      args: o,
                      filters: null,
                      handle: "connection",
                      key: "MAIBAAssetDataUtils_CampaignGroupDrilldownFragment_campaigns",
                      kind: "LinkedHandle",
                      name: "ad_campaigns",
                    },
                  ],
                  type: "AdCampaignGroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27339824405603310",
          metadata: {},
          name: "MAIBAAssetSelectorDrilldownListView_CampaignQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
