__d(
  "CometUFICommentsCountRenderer_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentsCountRenderer_data",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometUFICommentsCount_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TotalCommentsCountSummaryRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
