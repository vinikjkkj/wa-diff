__d(
  "WAWebFetchSubscriptionEntryPointsQuery.graphql",
  ["WAWebFetchSubscriptionEntryPointsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: "waSubscriptionEntryPoints",
          args: null,
          concreteType: "XWASubscriptionEntryPointsResponse",
          kind: "LinkedField",
          name: "xwa_subscription_entrypoints",
          plural: !1,
          selections: [
            {
              alias: "subscriptionEntryPoints",
              args: null,
              concreteType: "XWASubscriptionEntryPoints",
              kind: "LinkedField",
              name: "subscription_entrypoints",
              plural: !0,
              selections: [
                {
                  alias: "subscriptionType",
                  args: null,
                  kind: "ScalarField",
                  name: "subscription_type",
                  storageKey: null,
                },
                {
                  alias: "webEntryPointEligibility",
                  args: null,
                  kind: "ScalarField",
                  name: "web_entry_point_eligibility",
                  storageKey: null,
                },
                {
                  alias: "webEntryPointRedirectionUri",
                  args: null,
                  kind: "ScalarField",
                  name: "web_entry_point_redirection_uri",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchSubscriptionEntryPointsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchSubscriptionEntryPointsQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebFetchSubscriptionEntryPointsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchSubscriptionEntryPointsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
