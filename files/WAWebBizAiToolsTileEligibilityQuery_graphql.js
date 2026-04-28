__d(
  "WAWebBizAiToolsTileEligibilityQuery.graphql",
  ["WAWebBizAiToolsTileEligibilityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAOnboardingEligibility",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_onboarding_eligibility",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "eligible",
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
          name: "WAWebBizAiToolsTileEligibilityQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiToolsTileEligibilityQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiToolsTileEligibilityQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiToolsTileEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
