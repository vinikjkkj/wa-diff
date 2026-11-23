__d(
  "AdsUEditorCampaignWTWASABRRecommendationLoaderQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        n = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        r = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ad_account_id",
              variableName: "adAccountID",
            },
          ],
          concreteType: "XFBAMSimilarAdvertiserBudgetRecommendationMessage",
          kind: "LinkedField",
          name: "wtwa_similar_advertiser_budget_recommendation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "budget",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "budget_new_model",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "budget_without_threshold",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reported_conversion",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reported_conversions_new_model",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reported_conversions_without_threshold",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "AdsUEditorCampaignWTWASABRRecommendationLoaderQuery",
          selections: [
            {
              alias: "local_page",
              args: n,
              concreteType: "Page",
              kind: "LinkedField",
              name: "fetch__Page",
              plural: !1,
              selections: [{ kind: "CatchField", field: r, to: "NULL" }],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsUEditorCampaignWTWASABRRecommendationLoaderQuery",
          selections: [
            {
              alias: "local_page",
              args: n,
              concreteType: "Page",
              kind: "LinkedField",
              name: "fetch__Page",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28667873682882718",
          metadata: {},
          name: "AdsUEditorCampaignWTWASABRRecommendationLoaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
