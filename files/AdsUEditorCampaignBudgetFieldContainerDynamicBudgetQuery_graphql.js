__d(
  "AdsUEditorCampaignBudgetFieldContainerDynamicBudgetQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountId",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "budgetFieldAdAccountID",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "inputParams" },
        r = { defaultValue: null, kind: "LocalArgument", name: "pageId" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationAccountID",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationDFODestinationType",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationDFOEnabled",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationDeferred",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationDestinationType",
        },
        u = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationEnabled",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationOptimizationGoal",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "recommendationPageID",
        },
        m = { defaultValue: null, kind: "LocalArgument", name: "skipQuery" },
        p = [{ kind: "Variable", name: "id", variableName: "pageId" }],
        _ = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ad_account_id",
              variableName: "adAccountId",
            },
            {
              kind: "Variable",
              name: "input_params",
              variableName: "inputParams",
            },
          ],
          kind: "ScalarField",
          name: "ctx_dynamic_zo_budget_recommendation",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "recommendationAccountID",
          },
        ],
        h = {
          kind: "Variable",
          name: "page_id",
          variableName: "recommendationPageID",
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "budget",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "budget_new_model",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "budget_without_threshold",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reported_conversion",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reported_conversions_new_model",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reported_conversions_without_threshold",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i, l, s, u, c, d, m],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsUEditorCampaignBudgetFieldContainerDynamicBudgetQuery",
          selections: [
            {
              condition: "skipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    alias: null,
                    args: p,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [{ kind: "CatchField", field: _, to: "NULL" }],
                    storageKey: null,
                  },
                  to: "NULL",
                },
              ],
            },
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: [
                      {
                        kind: "Variable",
                        name: "ad_account_id",
                        variableName: "budgetFieldAdAccountID",
                      },
                    ],
                    kind: "FragmentSpread",
                    name: "useAdsUEditorCampaignBudgetFieldContainerFragment",
                  },
                ],
                type: "Query",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "budgetFieldContainerFragment",
            },
            {
              kind: "Defer",
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "accountID",
                      variableName: "recommendationAccountID",
                    },
                    {
                      kind: "Variable",
                      name: "destinationType",
                      variableName: "recommendationDestinationType",
                    },
                    {
                      kind: "Variable",
                      name: "dfoDestinationType",
                      variableName: "recommendationDFODestinationType",
                    },
                    {
                      kind: "Variable",
                      name: "dfoEnabled",
                      variableName: "recommendationDFOEnabled",
                    },
                    {
                      kind: "Variable",
                      name: "enabled",
                      variableName: "recommendationEnabled",
                    },
                    {
                      kind: "Variable",
                      name: "optimizationGoal",
                      variableName: "recommendationOptimizationGoal",
                    },
                    {
                      kind: "Variable",
                      name: "pageID",
                      variableName: "recommendationPageID",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "AdsUEditorCampaignCTXBudgetRecommendationInlineGuidanceContainer_query",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, t, n, m, o, d, s, c, u, a, i, l],
          kind: "Operation",
          name: "AdsUEditorCampaignBudgetFieldContainerDynamicBudgetQuery",
          selections: [
            {
              condition: "skipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: p,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [_, f],
                  storageKey: null,
                },
              ],
            },
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "legacy_account_id",
                  variableName: "budgetFieldAdAccountID",
                },
              ],
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "cas_segment",
                  storageKey: null,
                },
                f,
              ],
              storageKey: null,
            },
            {
              if: "recommendationDeferred",
              kind: "Defer",
              label:
                "AdsUEditorCampaignBudgetFieldContainerDynamicBudgetQuery$defer$AdsUEditorCampaignCTXBudgetRecommendationInlineGuidanceContainer_query_3hTzMt",
              selections: [
                {
                  condition: "recommendationEnabled",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "recommendation_ad_account",
                      args: g,
                      concreteType: "AdAccount",
                      kind: "LinkedField",
                      name: "ad_account",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "destination_type",
                              variableName: "recommendationDestinationType",
                            },
                            {
                              kind: "Variable",
                              name: "optimization_goal",
                              variableName: "recommendationOptimizationGoal",
                            },
                            h,
                          ],
                          concreteType: "XFBCTXBudgetRecommendation",
                          kind: "LinkedField",
                          name: "ctx_budget_recommendation",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBAMSimilarAdvertiserBudgetRecommendationMessage",
                              kind: "LinkedField",
                              name: "similar_advertiser_budget_recommendation",
                              plural: !1,
                              selections: [y, C, b, v, S, R],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "zero_outcome_budget_recommendation",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "recommendationDFOEnabled",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "dfo_recommendation_ad_account",
                      args: g,
                      concreteType: "AdAccount",
                      kind: "LinkedField",
                      name: "ad_account",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "destination_type",
                              variableName: "recommendationDFODestinationType",
                            },
                            { kind: "Literal", name: "is_cbo", value: !1 },
                            h,
                          ],
                          concreteType:
                            "XFBAMSimilarAdvertiserBudgetRecommendationMessage",
                          kind: "LinkedField",
                          name: "ctx_dfo_budget_recommendation",
                          plural: !1,
                          selections: [
                            y,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "budget_leads",
                              storageKey: null,
                            },
                            C,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "budget_purchases",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "budget_value",
                              storageKey: null,
                            },
                            b,
                            v,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "reported_conversion_leads",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "reported_conversion_purchases",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "reported_conversion_value",
                              storageKey: null,
                            },
                            S,
                            R,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "zo_budget",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "zo_budget_leads",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "zo_budget_purchases",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "zo_budget_value",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        params: {
          id: "29511247411831965",
          metadata: {},
          name: "AdsUEditorCampaignBudgetFieldContainerDynamicBudgetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
