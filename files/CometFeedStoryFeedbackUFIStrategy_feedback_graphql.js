__d(
  "CometFeedStoryFeedbackUFIStrategy_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
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
                    concreteType: "Feedback",
                    kind: "LinkedField",
                    name: "if_viewer_can_comment_anonymously",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "associated_group",
                        plural: !1,
                        selections: [
                          e,
                          {
                            alias: null,
                            args: null,
                            concreteType: "Group",
                            kind: "LinkedField",
                            name: "if_viewer_can_use_nickname_on_comet",
                            plural: !1,
                            selections: [e],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
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
    })();
    a.exports = e;
  },
  null,
);
