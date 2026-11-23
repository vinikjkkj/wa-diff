__d(
  "AdsUEditorCampaignBudgetContainerDoesBudgetSplitSetExistQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaignID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "includeBudgetSplitSet",
          },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignID" }],
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsUEditorCampaignBudgetContainerDoesBudgetSplitSetExistQuery",
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
                      condition: "includeBudgetSplitSet",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBCampaignBudgetSplitSet",
                          kind: "LinkedField",
                          name: "campaign_budget_split_set",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "AdsUEditorCampaignBudgetFieldContainerCampaignBudgetSplitSet_Fragment",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "AdCampaign",
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
          name: "AdsUEditorCampaignBudgetContainerDoesBudgetSplitSetExistQuery",
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
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      condition: "includeBudgetSplitSet",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBCampaignBudgetSplitSet",
                          kind: "LinkedField",
                          name: "campaign_budget_split_set",
                          plural: !1,
                          selections: [
                            n,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_real_time_edit_enabled",
                              storageKey: null,
                            },
                            r,
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "AdCampaign",
                  abstractKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27333950019526999",
          metadata: {},
          name: "AdsUEditorCampaignBudgetContainerDoesBudgetSplitSetExistQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
