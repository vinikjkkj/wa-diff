__d(
  "WAWebFetchSubscriptionEntryPointsQuery.graphql",
  ["WAWebFetchSubscriptionEntryPointsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "subscriptionTypes",
          },
        ],
        t = [
          {
            alias: "waSubscriptionEntryPoints",
            args: [
              {
                kind: "Variable",
                name: "subscription_types",
                variableName: "subscriptionTypes",
              },
            ],
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchSubscriptionEntryPointsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchSubscriptionEntryPointsQuery",
          selections: t,
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
