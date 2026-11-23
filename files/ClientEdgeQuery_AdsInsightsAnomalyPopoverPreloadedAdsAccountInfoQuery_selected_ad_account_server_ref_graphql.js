__d(
  "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        n = {
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
          name: "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccountRef",
              kind: "LinkedField",
              name: "fetch__AdAccountRef",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "RefetchableClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref",
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
          name: "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccountRef",
              kind: "LinkedField",
              name: "fetch__AdAccountRef",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      alias: "account_id",
                      args: null,
                      kind: "ScalarField",
                      name: "legacy_account_id",
                      storageKey: null,
                    },
                    {
                      alias: "override_currency",
                      args: null,
                      kind: "ScalarField",
                      name: "currency",
                      storageKey: null,
                    },
                    n,
                  ],
                  storageKey: null,
                },
                n,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27955073937502370",
          metadata: {},
          name: "ClientEdgeQuery_AdsInsightsAnomalyPopoverPreloadedAdsAccountInfoQuery_selected_ad_account_server_ref",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
