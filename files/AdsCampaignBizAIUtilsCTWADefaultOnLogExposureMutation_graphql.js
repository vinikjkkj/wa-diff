__d(
  "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "page_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType:
              "XFBMetaAIBizAgentWAAdsManagerOnboardingEligibilityResponse",
            kind: "LinkedField",
            name: "meta_ai_biz_agent_ads_manager_onboarding_eligibility",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "eligibility",
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
          name: "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation",
          selections: t,
        },
        params: {
          id: "34726519393630206",
          metadata: {},
          name: "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
