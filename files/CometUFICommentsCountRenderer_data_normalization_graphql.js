__d(
  "CometUFICommentsCountRenderer_data$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentsCountRenderer_data$normalization",
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
              args: [
                {
                  kind: "Literal",
                  name: "scenario",
                  value: "WWW_FEED_TOTAL_COUNT_SCENARIO_V1",
                },
              ],
              concreteType: "XFBCommentRenderingInstance",
              kind: "LinkedField",
              name: "comment_rendering_instance",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCommentRenderingInstanceCommentsConnection",
                  kind: "LinkedField",
                  name: "comments",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "total_count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'comment_rendering_instance(scenario:"WWW_FEED_TOTAL_COUNT_SCENARIO_V1")',
            },
            {
              alias: null,
              args: null,
              concreteType: "CrossUniverseFeedbackInfo",
              kind: "LinkedField",
              name: "cross_universe_feedback_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_comment_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "should_log_exposure", value: !0 },
                  ],
                  kind: "ScalarField",
                  name: "ig_boosted_comment_count",
                  storageKey:
                    "ig_boosted_comment_count(should_log_exposure:true)",
                },
              ],
              storageKey: null,
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
