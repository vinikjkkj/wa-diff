__d(
  "WAWebBizBroadcastEmailOnboardingGateQuery.graphql",
  ["WAWebBizBroadcastEmailOnboardingGateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "WAAdAccountOnboardingAPI",
          kind: "LinkedField",
          name: "wa_ad_account_onboarding_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "email",
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
          name: "WAWebBizBroadcastEmailOnboardingGateQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastEmailOnboardingGateQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizBroadcastEmailOnboardingGateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastEmailOnboardingGateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
