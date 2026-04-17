__d(
  "CometFeedStoryFeedbackUFIStrategy_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFeedbackUFIStrategy_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometStoryFeedbackUFIStrategy",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
