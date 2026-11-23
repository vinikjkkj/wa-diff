__d(
  "PerformanceSummaryCommerceAdsCatalogIssuesContainerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "account_id" },
          { defaultValue: null, kind: "LocalArgument", name: "ids" },
          { defaultValue: null, kind: "LocalArgument", name: "object_type" },
          { defaultValue: null, kind: "LocalArgument", name: "referrer" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "account_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          concreteType: "XFBCommerceAdsDataWrapper",
          kind: "LinkedField",
          name: "commerce_ads",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "ids", variableName: "ids" },
                {
                  kind: "Variable",
                  name: "object_type",
                  variableName: "object_type",
                },
                {
                  kind: "Variable",
                  name: "referrer",
                  variableName: "referrer",
                },
              ],
              concreteType: "XFBCommerceAdsCatalogIssuesOverview",
              kind: "LinkedField",
              name: "catalog_issues_overview",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCommerceAdsCatalogIssuesOverviewItem",
                  kind: "LinkedField",
                  name: "items",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "detail_url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "subtotal_count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "user_can_manage_catalog",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryCommerceAdsCatalogIssuesContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [n],
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
          name: "PerformanceSummaryCommerceAdsCatalogIssuesContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
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
          id: "9892017204195440",
          metadata: {},
          name: "PerformanceSummaryCommerceAdsCatalogIssuesContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
