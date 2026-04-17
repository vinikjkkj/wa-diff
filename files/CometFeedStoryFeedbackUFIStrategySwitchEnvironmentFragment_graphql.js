__d(
  "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql",
  ["CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "feedbackSource" },
        { kind: "RootArgument", name: "focusCommentID" },
        { kind: "RootArgument", name: "renderLocation" },
        { kind: "RootArgument", name: "scale" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: n(
            "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery.graphql",
          ),
          identifierInfo: {
            identifierField: "id",
            identifierQueryVariableName: "id",
          },
        },
      },
      name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedUFIContainer_story",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
