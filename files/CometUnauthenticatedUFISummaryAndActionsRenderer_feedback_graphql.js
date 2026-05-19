__d(
  "CometUnauthenticatedUFISummaryAndActionsRenderer_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "canShowSeenState" },
        { defaultValue: null, kind: "LocalArgument", name: "focusCommentID" },
        { defaultValue: !0, kind: "LocalArgument", name: "shouldShowComments" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUnauthenticatedUFISummaryAndActionsRenderer_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_similar_cqa_question",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "subscription_target_id",
              storageKey: null,
            },
            {
              args: [
                {
                  kind: "Variable",
                  name: "canShowSeenState",
                  variableName: "canShowSeenState",
                },
                {
                  kind: "Variable",
                  name: "shouldShowComments",
                  variableName: "shouldShowComments",
                },
              ],
              kind: "FragmentSpread",
              name: "CometUFISummary_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "UnauthenticatedUCometUFISummaryAndActionsRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
