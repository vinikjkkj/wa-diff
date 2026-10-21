__d(
  "WAWebBizAiWebCompanionOnboardingMutation.graphql",
  ["WAWebBizAiWebCompanionOnboardingMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAWebCompanionOnboardingResponse",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_web_companion_onboarding",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cooldown_remaining_seconds",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
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
          name: "WAWebBizAiWebCompanionOnboardingMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiWebCompanionOnboardingMutation",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiWebCompanionOnboardingMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiWebCompanionOnboardingMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
