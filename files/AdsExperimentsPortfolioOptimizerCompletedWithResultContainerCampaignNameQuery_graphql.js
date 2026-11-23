__d(
  "AdsExperimentsPortfolioOptimizerCompletedWithResultContainerCampaignNameQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "first_adgroup_id",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "skip_campaign_name",
          },
          { defaultValue: null, kind: "LocalArgument", name: "thumbnail_size" },
        ],
        t = [
          { kind: "Variable", name: "id", variableName: "first_adgroup_id" },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdCampaign",
              kind: "LinkedField",
              name: "ad_campaign",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "AdCampaignAdgroupsConnection",
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
                        n,
                        r,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "effective_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "height",
                              variableName: "thumbnail_size",
                            },
                            {
                              kind: "Variable",
                              name: "width",
                              variableName: "thumbnail_size",
                            },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "preview_image",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri",
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
              storageKey: null,
            },
          ],
          type: "Adgroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsExperimentsPortfolioOptimizerCompletedWithResultContainerCampaignNameQuery",
          selections: [
            {
              condition: "skip_campaign_name",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [o],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsExperimentsPortfolioOptimizerCompletedWithResultContainerCampaignNameQuery",
          selections: [
            {
              condition: "skip_campaign_name",
              kind: "Condition",
              passingValue: !1,
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
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    o,
                    n,
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "26125083953809469",
          metadata: {},
          name: "AdsExperimentsPortfolioOptimizerCompletedWithResultContainerCampaignNameQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
