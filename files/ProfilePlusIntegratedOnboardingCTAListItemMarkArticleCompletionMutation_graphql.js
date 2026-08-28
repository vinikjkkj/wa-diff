__d(
  "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation.graphql",
  [
    "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            kind: "ScalarField",
            name: "xfb_integrated_onboarding_mark_completion",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation",
          selections: t,
        },
        params: {
          id: n(
            "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "ProfilePlusIntegratedOnboardingCTAListItemMarkArticleCompletionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
