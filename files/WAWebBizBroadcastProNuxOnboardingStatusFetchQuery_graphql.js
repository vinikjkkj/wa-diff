__d(
  "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery.graphql",
  ["WAWebBizBroadcastProNuxOnboardingStatusFetchQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBWhatsAppSMBBBPro",
          kind: "LinkedField",
          name: "xfb_whatsapp_bb_pro",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "onboarding_status",
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
          name: "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
