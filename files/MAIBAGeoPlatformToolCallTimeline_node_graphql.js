__d(
  "MAIBAGeoPlatformToolCallTimeline_node.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAGeoPlatformToolCallTimeline_node",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "streaming_state",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MAIBAConversationToolCall",
          kind: "LinkedField",
          name: "tool_calls",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_call_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_call_args",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_result",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_completed",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tool_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "progress_phase",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "progress_title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "progress_summary",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "MAIBAConversationNode",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
