__d(
  "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefreshMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBMAIBAIssueContextRefreshEnqueueResponse",
            kind: "LinkedField",
            name: "xfb_maiba_issue_context_refresh_enqueue",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "scheduled",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "job_instance_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reason",
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
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefreshMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefreshMutation",
          selections: t,
        },
        params: {
          id: "27330220486637473",
          metadata: {},
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefreshMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
