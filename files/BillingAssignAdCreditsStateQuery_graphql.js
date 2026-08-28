__d(
  "BillingAssignAdCreditsStateQuery.graphql",
  ["BillingAssignAdCreditsStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdCampaignGroup",
              kind: "LinkedField",
              name: "campaign_info",
              plural: !0,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "AdsToken",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingAssignAdCreditsStateQuery",
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingAssignAdCreditsStateQuery",
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
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingAssignAdCreditsStateQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingAssignAdCreditsStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
