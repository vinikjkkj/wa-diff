__d(
  "WAWebBizBroadcastProOnboardingHistoryQuery.graphql",
  ["WAWebBizBroadcastProOnboardingHistoryQuery_facebookRelayOperation"],
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
              name: "has_onboarding_history",
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
          name: "WAWebBizBroadcastProOnboardingHistoryQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastProOnboardingHistoryQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProOnboardingHistoryQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProOnboardingHistoryQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
