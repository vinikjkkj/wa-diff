__d(
  "CometUnauthenticatedUFISummaryAndActionsRenderer_feedback$normalization.graphql",
  ["CometUFISummary_feedback$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUnauthenticatedUFISummaryAndActionsRenderer_feedback$normalization",
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
                  kind: "Literal",
                  name: "CometUFISummary_feedback$canShowSeenState",
                  value: !0,
                },
                {
                  kind: "Literal",
                  name: "CometUFISummary_feedback$shouldShowComments",
                  value: !0,
                },
              ],
              fragment: n("CometUFISummary_feedback$normalization.graphql"),
              kind: "FragmentSpread",
            },
          ],
          storageKey: null,
        },
      ],
    };
    a.exports = e;
  },
  null,
);
