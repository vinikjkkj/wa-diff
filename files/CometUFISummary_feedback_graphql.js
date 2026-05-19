__d(
  "CometUFISummary_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "canShowSeenState" },
        { defaultValue: !0, kind: "LocalArgument", name: "shouldShowComments" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISummary_feedback",
      selections: [
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
          name: "CometUFISummaryBase_feedback",
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
